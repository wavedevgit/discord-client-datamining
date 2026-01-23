/** Chunk was on 87916 **/
/** chunk id: 248067, original params: e,t,n (module,exports,require) **/
n.d(t, {
    g: () => l
}), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956), n(747238), n(65821);
var a = n(652215);
let i = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;

function l(e) {
    let t = new URL("".concat(window.location.protocol).concat(e)),
        {
            ASSET_ENDPOINT: n
        } = window.GLOBAL_ENV;
    if (null == t.pathname.match(i)) throw Error("Unexpected Tenor GIF path.");
    let l = "".concat(a.Rsh.TENOR_ASSET_PATH).concat(t.pathname);
    return "".concat(location.protocol).concat(n).concat(l)
}