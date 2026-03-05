/** chunk id: 359800, original params: e,t,n (module,exports,require) **/
n.d(t, {
    z: () => u
});
var i = n(627968),
    l = n(64700),
    r = n(397927),
    a = n(475743),
    s = n(362490),
    o = n(221303),
    d = n(985018);
let c = "in-game-auth-check-modal";

function u(e, t) {
    let {
        showInGameModal: u = !0,
        showToastOnSuccess: _ = !0
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [m, h] = l.useState(!1), p = l.useCallback(function() {
        for (var t = arguments.length, l = Array(t), a = 0; a < t; a++) l[a] = arguments[a];
        h(!0);
        let o = e(...l);
        return o === s._M.RPC && u && (0, r.mMO)(async () => {
            let {
                default: e
            } = await n.e("30724").then(n.bind(n, 272047));
            return t => (0, i.jsx)(e, {
                ...t
            })
        }, {
            modalKey: c
        }), o
    }, [e, h, u]), g = (0, a.A)(t);
    return l.useEffect(() => {
        if (m && !1 === g && !0 === t) {
            if ((0, r.OoC)(c), h(!1), !_) return;
            let e = () => {
                (0, r.showToast)({
                    id: "account-linked-toast",
                    message: d.intl.string(o.default.uG6teD),
                    type: r.ToastType.SUCCESS
                })
            };
            if ("visible" === document.visibilityState) e();
            else {
                let t = () => {
                    "visible" === document.visibilityState && (e(), document.removeEventListener("visibilitychange", t))
                };
                document.addEventListener("visibilitychange", t)
            }
        }
    }, [m, t, g, _]), p
}