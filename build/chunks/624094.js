/** chunk id: 624094, original params: e,t,n (module,exports,require) **/
n.d(t, {
    E: () => b,
    k: () => _
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(71393),
    a = n(287809),
    o = n(513461),
    c = n(942658),
    u = n(656854),
    d = n(414626),
    m = n(601047),
    f = n(222650),
    h = n(273926),
    x = n(453016),
    g = n(652215);

function v(e) {
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
}

function p(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function j(e) {
    let {
        guildId: t,
        formFields: n,
        updateFormFields: l
    } = e, a = (0, i.bG)([s.A], () => {
        var e;
        return null == (e = s.A.getGuild(t)) ? void 0 : e.rulesChannelId
    }), c = (e, t) => {
        let r = n[e];
        l([...n.slice(0, e), p(v({}, r), {
            response: t
        }), ...n.slice(e + 1)])
    };
    return (0, r.jsx)(r.Fragment, {
        children: n.map((e, t) => ((e, t) => {
            switch (e.field_type) {
                case o.rX.TERMS:
                    return (0, r.jsx)(h.Ot, {
                        channelId: a,
                        formField: e,
                        onChange: e => {
                            let r;
                            return r = n[t], void l([...n.slice(0, t), p(v({}, r), {
                                response: e
                            }), ...n.slice(t + 1)])
                        }
                    }, t);
                case o.rX.TEXT_INPUT:
                    return (0, r.jsx)(x.y4, {
                        formField: e,
                        autofocus: 0 === t,
                        onChange: e => c(t, e)
                    }, t);
                case o.rX.PARAGRAPH:
                    return (0, r.jsx)(m.zD, {
                        formField: e,
                        autofocus: 0 === t,
                        onChange: e => c(t, e)
                    }, t);
                case o.rX.MULTIPLE_CHOICE:
                    return (0, r.jsx)(d.MZ, {
                        formField: e,
                        onChange: e => ((e, t) => {
                            let {
                                value: r
                            } = t, i = n[e];
                            l([...n.slice(0, e), p(v({}, i), {
                                response: r
                            }), ...n.slice(e + 1)])
                        })(t, e)
                    }, t)
            }
        })(e, t))
    })
}

function b(e) {
    let t, {
            guildId: n,
            formFields: l,
            updateFormFields: s,
            disableVerification: o
        } = e,
        d = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        m = (0, c.B)({
            guildId: n
        });
    return (t = m === g.PvD.NONE ? null : m === g.PvD.VERY_HIGH ? f.A : u.G, null == d) ? null : (0, r.jsxs)(r.Fragment, {
        children: [!o && null != t && (0, r.jsx)(t, {}), (0, r.jsx)(j, {
            guildId: n,
            formFields: l,
            updateFormFields: s
        })]
    })
}

function _(e) {
    let t, {
            guildId: n,
            formFields: s,
            updateFormFields: o,
            disableVerification: d
        } = e,
        m = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        h = (0, c.B)({
            guildId: n
        }),
        x = (null == m ? void 0 : m.isPhoneVerified()) || (null == m ? void 0 : m.isStaff()),
        v = (null == m ? void 0 : m.verified) || x,
        p = !1;
    h === g.PvD.NONE ? (p = !0, t = null) : h === g.PvD.VERY_HIGH ? (p = null != x && x, t = f.e) : (p = null != v && v, t = u.O);
    let b = l.useRef(p);
    return null == m ? null : (0, r.jsxs)(r.Fragment, {
        children: [!d && !b.current && null != t && (0, r.jsx)(t, {
            isUserVerified: p
        }), (0, r.jsx)(j, {
            guildId: n,
            formFields: s,
            updateFormFields: o
        })]
    })
}