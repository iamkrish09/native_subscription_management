// Prevent expo winter runtime lazy getters from firing after jest tears down.
// expo/src/winter/installGlobal.ts registers lazy property getters on globalThis.
// After a test suite finishes, jest sets isInsideTestCode=false. If any cleanup
// code accesses these globals at that point, the lazy require() inside the getter
// throws "outside of the scope of the test code".
// Providing eager values here prevents the lazy getters from being registered.

// structuredClone polyfill (already available in Node 17+ but providing for safety)
if (typeof globalThis.structuredClone !== 'function') {
    globalThis.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
}

// URL and URLSearchParams are available in Node
if (typeof globalThis.URL === 'undefined') {
    const { URL, URLSearchParams } = require('url');
    globalThis.URL = URL;
    globalThis.URLSearchParams = URLSearchParams;
}

// Stub __ExpoImportMetaRegistry
if (typeof globalThis.__ExpoImportMetaRegistry === 'undefined') {
    Object.defineProperty(globalThis, '__ExpoImportMetaRegistry', {
        value: null,
        writable: true,
        configurable: true,
    });
}