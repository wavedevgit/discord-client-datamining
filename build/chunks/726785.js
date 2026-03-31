/** chunk id: 726785 params = (module,exports,require) **/
r.d(t, {
    _: () => c
}), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var a = r(64700),
    n = r(626584),
    i = r(346915),
    o = r(100846);
let l = new n.A("useAnimatedImageCheck");

function c(e) {
    let t = "image/gif" === e.type,
        r = "image/webp" === e.type,
        [n, c] = a.useState(!1),
        [s, h] = a.useState(null),
        u = r && s !== e;
    a.useEffect(() => {
        let a = !1;
        return t ? ((0, i.A)(), c(!1), h(e)) : r ? (async () => {
            try {
                let t = await e.arrayBuffer(),
                    r = new Uint8Array(t),
                    n = await (0, o.Sf)(r);
                a || (c(n), n && (0, o.L_)(), h(e))
            } catch (t) {
                a || (l.error("Error checking WebP animation", t), c(!1), h(e))
            }
        })() : (c(!1), h(e)), () => {
            a = !0
        }
    }, [e, t, r]);
    let f = n && s === e,
        A = t || f;
    return {
        isGIF: t,
        isWebP: r,
        isAnimatedWebPFile: f,
        isCheckingAnimation: u,
        isEditableAnimatedImage: A
    }
}