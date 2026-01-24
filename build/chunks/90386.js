/** Chunk was on 39679 **/
/** chunk id: 90386, original params: e,t,n (module,exports,require) **/
n.d(t, {
    I: () => _,
    T: () => u
}), n(896048);
var s = n(627968),
    i = n(397927),
    r = n(954376),
    a = n(287809),
    o = n(562153),
    l = n(985018),
    d = n(441805);
let _ = (e, t) => {
        if (1 === e.length) {
            let n = a.default.getUser(e[0]);
            return null != n ? (0, s.jsx)(i.euF, {
                src: n.getAvatarURL(t, 32),
                size: i._3J.SIZE_32,
                "aria-hidden": !0
            }) : (0, s.jsx)(i.nys, {})
        }
        return (0, s.jsx)(r.A, {
            recipients: e,
            size: i._3J.SIZE_32
        })
    },
    u = (e, t, n, r) => {
        let _ = [...e].map(e => a.default.getUser(e)),
            u = e => (0, s.jsx)(i.Text, {
                variant: "text-md/semibold",
                className: d.Xh,
                children: o.Ay.getName(n, r, e)
            });
        return t >= 4 ? l.intl.format(l.t.qfo6KR, {
            usernameHook1: () => u(_[0]),
            usernameHook2: () => u(_[1]),
            numberOfOtherUsers: t - e.length
        }) : 3 === t ? l.intl.format(l.t["67ZE+9"], {
            usernameHook1: () => u(_[0]),
            usernameHook2: () => u(_[1])
        }) : 2 === t ? l.intl.format(l.t.veV4IN, {
            usernameHook1: () => u(_[0]),
            usernameHook2: () => u(_[1])
        }) : l.intl.format(l.t["4WHCtq"], {
            usernameHook: () => u(_[0])
        })
    }