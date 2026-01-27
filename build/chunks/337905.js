/** Chunk was on 86142 **/
/** chunk id: 337905, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Fs: () => o,
    Jn: () => a,
    S4: () => p,
    T8: () => l,
    lU: () => g,
    n7: () => _
}), n(927092), n(212978), n(201528), n(393431), n(752391), n(532706), n(42231), n(232424), n(757074), n(949626), n(767709), n(65162), n(801460), n(508300), n(650828), n(896048), n(747238), n(812715), n(21862), n(65821);
var r = n(284009),
    i = n.n(r),
    s = n(427157);

function l() {
    return window.crypto.subtle.generateKey({
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256"
    }, !0, ["decrypt"])
}
async function a(e) {
    return i()(null != e.publicKey, "public key cannot be null"), btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.exportKey("spki", e.publicKey))))
}
async function o(e) {
    return i()(null != e.publicKey, "public key cannot be null"), u(await window.crypto.subtle.exportKey("spki", e.publicKey))
}

function c(e) {
    return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\//g, "_").replace(/\+/g, "-").replace(/={1,2}$/, "")
}

function d(e) {
    return Uint8Array.from(atob(e), e => e.charCodeAt(0))
}
async function u(e) {
    return c(await window.crypto.subtle.digest({
        name: "SHA-256"
    }, e))
}

function h(e, t) {
    return i()(null != e.privateKey, "private key cannot be null"), window.crypto.subtle.decrypt({
        name: "RSA-OAEP",
        hash: "SHA-256"
    }, e.privateKey, t)
}
async function p(e, t) {
    let n = new TextDecoder,
        r = await h(e, d(t));
    return n.decode(r)
}
async function g(e, t) {
    return c(await h(e, d(t)))
}
async function _(e, t) {
    let n = (t = await p(e, t)).match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
    if (null == n) throw Error("Invalid encoded user record.");
    let [, r, i, l, a] = n;
    return new s.A({
        id: r,
        discriminator: i,
        avatar: "0" === l ? null : l,
        username: a
    })
}