/** chunk id: 359800 params = (module,exports,require) **/
n.d(t, {
    z: () => u
});
var i = n(627968),
    a = n(64700),
    l = n(397927),
    r = n(475743),
    s = n(362490),
    o = n(311350),
    d = n(985018);
let c = "in-game-auth-check-modal";

function u(e, t) {
    let {
        showInGameModal: u = !0,
        showToastOnSuccess: _ = !0
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [m, h] = a.useState(!1), p = a.useCallback(function() {
        for (var t = arguments.length, a = Array(t), r = 0; r < t; r++) a[r] = arguments[r];
        h(!0);
        let o = e(...a);
        return o === s._M.RPC && u && (0, l.mMO)(async () => {
            let {
                default: e
            } = await n.e("30724").then(n.bind(n, 272047));
            return t => (0, i.jsx)(e, {
                ...t
            })
        }, {
            modalKey: c
        }), o
    }, [e, h, u]), g = (0, r.A)(t);
    return a.useEffect(() => {
        if (m && !1 === g && !0 === t) {
            if ((0, l.OoC)(c), h(!1), !_) return;
            let e = () => {
                (0, l.showToast)({
                    id: "account-linked-toast",
                    message: d.intl.string(o.default.uG6teD),
                    type: l.ToastType.SUCCESS
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