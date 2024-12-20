export function arrayBufferToBase64(buffer: Iterable<number>) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export function base64ToArrayBuffer(base64: string) {
  const binary = atob(base64);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

export async function stringToKey(str: string) {
  const data = new TextEncoder().encode(str);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return new Uint8Array(hash) as BufferSource;
}

// 加密
export async function encrypt(skey: string, data: string) {
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);

  const key = await stringToKey(skey);
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt'],
  );

  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv,
    },
    cryptoKey,
    encodedData,
  );
  return `${arrayBufferToBase64(new Uint8Array(ciphertext))}.${arrayBufferToBase64(iv)}`;
}

// 解密
export async function decrypt(skey: string, data: string) {
  const decoder = new TextDecoder();
  const key = await stringToKey(skey);
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt'],
  );

  const [_ciphertext, _iv] = data.split('.');
  const ciphertext = base64ToArrayBuffer(_ciphertext);
  const iv = base64ToArrayBuffer(_iv);

  const decryptedData = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv,
    },
    cryptoKey,
    ciphertext,
  );
  return decoder.decode(new Uint8Array(decryptedData));
}
