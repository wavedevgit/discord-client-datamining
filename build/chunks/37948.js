/** chunk id: 37948 params = (module,exports,require) **/
a.d(t, {
    A: () => l
}), a(323874), a(14289), a(35956);
var n = a(64700),
    r = a(25171);
let o = "steam",
    s = /^\/app\/(\d+)(?:\/)?/;

function l(e) {
    let t = function(e) {
        let [t, a] = n.useState(!1);
        return n.useEffect(() => {
            r.A.isProtocolRegistered(e).then(a)
        }, [e]), t
    }(o);
    return n.useCallback(a => {
        let n;
        if (null != a) {
            try {
                n = new URL(a)
            } catch {
                return
            }
            if ("store.steampowered.com" === n.hostname && t) {
                let e = n.pathname.match(s)?.[1];
                null != e && (a = `${o}://store/${e}`)
            } else n.searchParams.set("utm_source", "discord"), a = n.toString();
            null != e ? e(a) : window.open(a, "_blank", "noreferrer noopener")
        }
    }, [e, t])
}