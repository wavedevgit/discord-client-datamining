/** chunk id: 605691, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(308528),
    u = n(994500),
    o = n(287809),
    c = n(47167),
    s = n(985018);

function d(e, t) {
    let d = i.useCallback(() => {
        let i = (0, c.m1)(e, o.default, u.A),
            d = s.intl.formatToPlainString(s.t.hJ5Ap4, {
                name: i
            }),
            f = s.intl.format(s.t.SSIVOu, {
                name: i
            });
        e.isManaged() && (d = s.intl.formatToPlainString(s.t.hVGjEW, {
            name: i
        }), f = s.intl.format(s.t.IK1Qvs, {
            name: i
        }));
        let A = function(n) {
            let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            a.A.closePrivateChannel(e.id, t, r)
        };
        (0, l.mMO)(async () => {
            let {
                default: e
            } = await n.e("37803").then(n.bind(n, 148166));
            return t => (0, r.jsx)(e, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }({
                title: d,
                body: f,
                onSubmit: A
            }, t))
        })
    }, [e, t]);
    return (0, r.jsx)(l.Drp, {
        id: "leave-channel",
        label: s.intl.string(s.t["26C4oi"]),
        action: d,
        color: "danger"
    })
}