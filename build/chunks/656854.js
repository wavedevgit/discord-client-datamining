/** Chunk was on 20601 **/
/** chunk id: 656854, original params: e,t,n (module,exports,require) **/
n.d(t, {
    G: () => m,
    O: () => f
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(990078),
    s = n(397927),
    a = n(830215),
    o = n(31457),
    c = n(985018),
    u = n(712104);

function d() {
    let [e, t] = r.useState(!1), [n, i] = r.useState(!1), [o, d] = r.useState(!1);
    r.useEffect(() => {
        let e;
        return n && (e = setTimeout(() => {
            i(!1)
        }, 2e3)), () => {
            null != e && clearTimeout(e)
        }
    }, [n]);
    let m = async () => {
        if (!e) {
            t(!0);
            try {
                await a.A.verifyResend(), i(!0), d(!0)
            } catch (e) {} finally {
                t(!1)
            }
        }
    };
    return n ? (0, l.jsx)(s.Text, {
        className: u.$6,
        variant: "text-sm/normal",
        color: "text-feedback-positive",
        children: c.intl.string(c.t.H3Q7U8)
    }) : (0, l.jsx)(s.Button, {
        variant: "primary",
        size: "sm",
        text: o ? c.intl.string(c.t.WnX4J2) : c.intl.string(c.t["13ofGu"]),
        loading: e,
        onClick: m
    })
}

function m() {
    return (0, l.jsx)(o.ZK, {
        className: u.jm,
        icon: s.u6c,
        text: c.intl.string(c.t.c6EUJI),
        footnote: c.intl.string(c.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, l.jsx)(i.m, {
            asContainer: !0,
            text: c.intl.string(c.t.mGlP30),
            children: (0, l.jsx)(s.Button, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: c.intl.string(c.t["13ofGu"])
            })
        })
    })
}

function f(e) {
    let {
        isUserVerified: t
    } = e, n = t ? c.intl.string(c.t.qY1jHN) : c.intl.string(c.t.c6EUJI);
    return (0, l.jsx)(o.ZK, {
        className: u.jm,
        icon: s.u6c,
        text: n,
        footnote: c.intl.string(c.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, l.jsx)(d, {})
    })
}