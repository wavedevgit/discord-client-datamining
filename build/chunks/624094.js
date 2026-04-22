/** chunk id: 624094 params = (module,exports,require) **/
n.d(t, {
    E: () => p,
    k: () => g
});
var r = n(627968),
    s = n(64700),
    i = n(311907),
    l = n(71393),
    a = n(287809),
    o = n(513461),
    d = n(942658),
    c = n(656854),
    u = n(414626),
    _ = n(601047),
    h = n(222650),
    m = n(273926),
    f = n(453016),
    E = n(652215);

function x(e) {
    let {
        guildId: t,
        formFields: n,
        updateFormFields: s
    } = e, a = (0, i.bG)([l.A], () => l.A.getGuild(t)?.rulesChannelId), d = (e, t) => {
        let r = n[e];
        s([...n.slice(0, e), {
            ...r,
            response: t
        }, ...n.slice(e + 1)])
    };
    return (0, r.jsx)(r.Fragment, {
        children: n.map((e, t) => ((e, t) => {
            switch (e.field_type) {
                case o.rX.TERMS:
                    return (0, r.jsx)(m.Ot, {
                        channelId: a,
                        formField: e,
                        onChange: e => {
                            let r;
                            return r = n[t], void s([...n.slice(0, t), {
                                ...r,
                                response: e
                            }, ...n.slice(t + 1)])
                        }
                    }, t);
                case o.rX.TEXT_INPUT:
                    return (0, r.jsx)(f.y4, {
                        formField: e,
                        autofocus: 0 === t,
                        onChange: e => d(t, e)
                    }, t);
                case o.rX.PARAGRAPH:
                    return (0, r.jsx)(_.zD, {
                        formField: e,
                        autofocus: 0 === t,
                        onChange: e => d(t, e)
                    }, t);
                case o.rX.MULTIPLE_CHOICE:
                    return (0, r.jsx)(u.MZ, {
                        formField: e,
                        onChange: e => ((e, t) => {
                            let {
                                value: r
                            } = t, i = n[e];
                            s([...n.slice(0, e), {
                                ...i,
                                response: r
                            }, ...n.slice(e + 1)])
                        })(t, e)
                    }, t)
            }
        })(e, t))
    })
}

function p(e) {
    let t, {
            guildId: n,
            formFields: s,
            updateFormFields: l,
            disableVerification: o
        } = e,
        u = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        _ = (0, d.B)({
            guildId: n
        });
    return (t = _ === E.PvD.NONE ? null : _ === E.PvD.VERY_HIGH ? h.A : c.G, null == u) ? null : (0, r.jsxs)(r.Fragment, {
        children: [!o && null != t && (0, r.jsx)(t, {}), (0, r.jsx)(x, {
            guildId: n,
            formFields: s,
            updateFormFields: l
        })]
    })
}

function g(e) {
    let t, {
            guildId: n,
            formFields: l,
            updateFormFields: o,
            disableVerification: u
        } = e,
        _ = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        m = (0, d.B)({
            guildId: n
        }),
        f = _?.isPhoneVerified() || _?.isStaff(),
        p = _?.verified || f,
        g = !1;
    m === E.PvD.NONE ? (g = !0, t = null) : m === E.PvD.VERY_HIGH ? (g = f ?? !1, t = h.e) : (g = p ?? !1, t = c.O);
    let v = s.useRef(g);
    return null == _ ? null : (0, r.jsxs)(r.Fragment, {
        children: [!u && !v.current && null != t && (0, r.jsx)(t, {
            isUserVerified: g
        }), (0, r.jsx)(x, {
            guildId: n,
            formFields: l,
            updateFormFields: o
        })]
    })
}