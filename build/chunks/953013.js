/** chunk id: 953013 params = (module,exports,require) **/
n.d(t, {
    o: () => N
}), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(397927),
    u = n(46054),
    d = n(190012),
    c = n(465364),
    h = n(21119),
    g = n(994500),
    m = n(741961),
    f = n(287809),
    A = n(562153),
    I = n(985018),
    E = n(404666);

function p(e) {
    let {
        icon: t,
        ...n
    } = e;
    switch (t) {
        case "image":
            return (0, i.jsx)(o.xfq, {
                ...n
            });
        case "video":
            return (0, i.jsx)(o.npA, {
                ...n
            });
        case "audio":
            return (0, i.jsx)(o.T7G, {
                ...n
            });
        case "attachment":
            return (0, i.jsx)(o.PtA, {
                ...n
            });
        case "link":
            return (0, i.jsx)(o.qYV, {
                ...n
            });
        case "sticker":
            return (0, i.jsx)(o.tEP, {
                ...n
            });
        case "call-active":
            return (0, i.jsx)(o._jp, {
                ...n
            });
        case "call-ended":
            return (0, i.jsx)(o.zWQ, {
                ...n
            })
    }
}
let _ = l.memo(function(e) {
        let {
            message: t
        } = e;
        return (0, c.Ay)(t, {
            formatInline: !0,
            noStyleAndInteraction: !0
        }).content
    }),
    S = l.memo(function(e) {
        let {
            markup: t,
            channelId: n
        } = e;
        return (0, c.jp)(u.A.parseInlineReply, {
            content: t,
            channelId: n
        })
    });

function x(e) {
    let {
        channel: t,
        typingUserIds: n
    } = e, l = (0, a.bG)([], () => (function(e, t, n) {
        let i = [];
        for (let l of e) {
            let e = f.default.getUser(l);
            null != e && i.push(A.Ay.getName(n, t, e))
        }
        let [l, r, s, a] = i;
        return null == l ? null : null == r ? I.intl.format(I.t.lJ9sZX, {
            a: l
        }) : null == s ? I.intl.format(I.t.rB0CUa, {
            a: l,
            b: r
        }) : null == a ? I.intl.format(I.t.StKThj, {
            a: l,
            b: r,
            c: s
        }) : I.intl.string(I.t.uVDhqZ)
    })(n, t.id, t.guild_id), [n, t.id, t.guild_id]);
    return null == l ? null : (0, i.jsx)("div", {
        className: E.Sl,
        children: (0, i.jsx)("span", {
            className: E.BK,
            children: l
        })
    })
}

function T(e) {
    let t, {
            channel: n,
            message: l
        } = e,
        r = (0, d.BC)(l, n);
    if (null == r) return null;
    let {
        authorLabel: a,
        color: o,
        trailingIcon: u
    } = r;
    return "text" === r.type ? t = r.text : "markup" === r.type ? t = (0, i.jsx)(S, {
        markup: r.markup,
        channelId: l.channel_id
    }) : "message" === r.type && (t = (0, i.jsx)(_, {
        message: r.message
    })), (0, i.jsxs)("div", {
        className: s()(E.Sl, {
            [E.Vz]: "text-feedback-positive" === o
        }),
        children: [(0, i.jsxs)("span", {
            className: E.BK,
            children: [null != a && `${a}: `, t]
        }), null != u && (0, i.jsx)(p, {
            icon: u,
            size: "xxs",
            color: "currentColor",
            className: E.sl
        })]
    })
}

function N(e) {
    let {
        channel: t,
        message: n,
        showTypingPreview: l
    } = e, r = (0, a.bG)([f.default], () => {
        if (!l) return [];
        let e = f.default.getCurrentUser()?.id ?? null;
        var n = t.id;
        let i = m.A.getTypingUsers(n),
            r = [];
        for (let t in i) t !== e && r.push(t);
        return r.sort((e, t) => {
            let n = +!!g.A.isFriend(e),
                i = +!!g.A.isFriend(t);
            if (n !== i) return i - n;
            let l = h.A.getUserAffinity(e)?.communicationProbability ?? 0;
            return (h.A.getUserAffinity(t)?.communicationProbability ?? 0) - l
        })
    }, [t.id, l]);
    return r.length > 0 ? (0, i.jsx)(x, {
        channel: t,
        typingUserIds: r
    }) : null == n ? null : (0, i.jsx)(T, {
        channel: t,
        message: n
    })
}