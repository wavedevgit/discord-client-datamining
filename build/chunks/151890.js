/** Chunk was on 28636 **/
/** chunk id: 151890, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(747238);
var r, l, i = n(627968);
n(64700);
var a = n(280230),
    s = n.n(a),
    o = n(397927),
    c = n(846293),
    d = n(179389),
    u = n(167189),
    p = n(833291),
    h = n(365526),
    m = n(558179);

function g(e) {
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
let _ = /^discord.gg\/[a-zA-Z0-9-]+/,
    b = (r = g({}, m.A.rules), l = l = {
        heading: g({}, d.i.heading),
        image: g({}, s().defaultRules.image),
        inviteLink: {
            order: m.A.rules.link.order + 1,
            match: (e, t) => t.inline ? _.exec(e) : null,
            parse: (e, t, n) => {
                let r = (0, p.br)(e[0]);
                return null == r || r.type !== u.I.INVITE ? {
                    type: "text",
                    content: e[0]
                } : {
                    type: "inviteLink",
                    content: [{
                        type: "text",
                        content: e[0]
                    }],
                    onClick: () => {
                        var e;
                        c.Ay.acceptInviteAndTransitionToInviteChannel({
                            inviteKey: r.code,
                            context: {
                                location: "Application Directory"
                            }
                        }), null == (e = n.closeModal) || e.call(n)
                    }
                }
            },
            react: (e, t, n) => (0, i.jsx)(o.MzZ, {
                onClick: t => {
                    t.preventDefault(), e.onClick()
                },
                children: (0, h.t)(e, t, n)
            }, n.key)
        }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(l)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
    }), r)