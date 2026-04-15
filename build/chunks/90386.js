/** chunk id: 90386 params = (module,exports,require) **/
_.d(t, {
    I: () => o,
    T: () => c
});
var s = _(627968),
    i = _(397927),
    a = _(954376),
    n = _(287809),
    r = _(562153),
    A = _(985018),
    l = _(627534);
let o = (e, t) => {
        if (1 === e.length) {
            let _ = n.default.getUser(e[0]);
            return null != _ ? (0, s.jsx)(i.euF, {
                src: _.getAvatarURL(t, 32),
                size: i._3J.SIZE_32,
                "aria-hidden": !0
            }) : (0, s.jsx)(i.nys, {})
        }
        return (0, s.jsx)(a.A, {
            recipients: e,
            size: i._3J.SIZE_32
        })
    },
    c = (e, t, _, a) => {
        let o = [...e].map(e => n.default.getUser(e)),
            c = e => (0, s.jsx)(i.Text, {
                variant: "text-md/semibold",
                className: l.Xh,
                children: r.Ay.getName(_, a, e)
            });
        return t >= 4 ? A.intl.format(A.t.qfo6KR, {
            usernameHook1: () => c(o[0]),
            usernameHook2: () => c(o[1]),
            numberOfOtherUsers: t - e.length
        }) : 3 === t ? A.intl.format(A.t["67ZE+9"], {
            usernameHook1: () => c(o[0]),
            usernameHook2: () => c(o[1])
        }) : 2 === t ? A.intl.format(A.t.veV4IN, {
            usernameHook1: () => c(o[0]),
            usernameHook2: () => c(o[1])
        }) : A.intl.format(A.t["4WHCtq"], {
            usernameHook: () => c(o[0])
        })
    }