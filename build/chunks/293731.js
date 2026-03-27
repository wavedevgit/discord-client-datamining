/** chunk id: 293731 params = (module,exports,require) **/
a.d(e, {
    J: () => s,
    v: () => o
}), a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162), a(508300);
var n = a(284009),
    r = a.n(n);

function i(t) {
    if (null != t) return btoa(String.fromCharCode(...new Uint8Array(t))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
async function s(t, e) {
    var a;
    let n, s = JSON.parse(t),
        o = PublicKeyCredential.parseRequestOptionsFromJSON(s.publicKey),
        c = {
            ...s,
            publicKey: o,
            signal: e
        };
    return n = (a = await navigator.credentials.get(c)).response, r()(n instanceof AuthenticatorAssertionResponse, "WebAuthn: Cannot parse attestation response for assertion"), JSON.stringify({
        authenticatorAttachment: a.authenticatorAttachment,
        clientExtensionResults: a.getClientExtensionResults(),
        id: a.id,
        rawId: i(a.rawId),
        response: {
            authenticatorData: i(n.authenticatorData),
            clientDataJSON: i(n.clientDataJSON),
            signature: i(n.signature),
            userHandle: i(n.userHandle)
        },
        type: a.type
    })
}
async function o(t, e) {
    var a;
    let n, s = JSON.parse(t),
        o = PublicKeyCredential.parseCreationOptionsFromJSON(s.publicKey),
        c = {
            ...s,
            publicKey: o,
            signal: e
        };
    return n = (a = await navigator.credentials.create(c)).response, r()(n instanceof AuthenticatorAttestationResponse, "WebAuthn: Cannot parse assertion response for attestation"), JSON.stringify({
        authenticatorAttachment: a.authenticatorAttachment,
        clientExtensionResults: a.getClientExtensionResults(),
        id: a.id,
        rawId: i(a.rawId),
        response: {
            attestationObject: i(n.attestationObject),
            authenticatorData: i(n.getAuthenticatorData()),
            clientDataJSON: i(n.clientDataJSON),
            publicKey: i(n.getPublicKey()),
            publicKeyAlgorithm: n.getPublicKeyAlgorithm(),
            transports: n.getTransports()
        },
        type: a.type
    })
}