/** chunk id: 293731 params = (module,exports,require) **/
a.d(e, {
    J: () => i,
    v: () => o
}), a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162), a(508300);
var n = a(284009),
    r = a.n(n);

function s(t) {
    if (null != t) return btoa(String.fromCharCode(...new Uint8Array(t))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
async function i(t, e) {
    var a;
    let n, i = JSON.parse(t),
        o = PublicKeyCredential.parseRequestOptionsFromJSON(i.publicKey),
        c = {
            ...i,
            publicKey: o,
            signal: e
        };
    return n = (a = await navigator.credentials.get(c)).response, r()(n instanceof AuthenticatorAssertionResponse, "WebAuthn: Cannot parse attestation response for assertion"), JSON.stringify({
        authenticatorAttachment: a.authenticatorAttachment,
        clientExtensionResults: a.getClientExtensionResults(),
        id: a.id,
        rawId: s(a.rawId),
        response: {
            authenticatorData: s(n.authenticatorData),
            clientDataJSON: s(n.clientDataJSON),
            signature: s(n.signature),
            userHandle: s(n.userHandle)
        },
        type: a.type
    })
}
async function o(t, e) {
    var a;
    let n, i = JSON.parse(t),
        o = PublicKeyCredential.parseCreationOptionsFromJSON(i.publicKey),
        c = {
            ...i,
            publicKey: o,
            signal: e
        };
    return n = (a = await navigator.credentials.create(c)).response, r()(n instanceof AuthenticatorAttestationResponse, "WebAuthn: Cannot parse assertion response for attestation"), JSON.stringify({
        authenticatorAttachment: a.authenticatorAttachment,
        clientExtensionResults: a.getClientExtensionResults(),
        id: a.id,
        rawId: s(a.rawId),
        response: {
            attestationObject: s(n.attestationObject),
            authenticatorData: s(n.getAuthenticatorData()),
            clientDataJSON: s(n.clientDataJSON),
            publicKey: s(n.getPublicKey()),
            publicKeyAlgorithm: n.getPublicKeyAlgorithm(),
            transports: n.getTransports()
        },
        type: a.type
    })
}