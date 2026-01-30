/** chunk id: 982308, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
}), n(733351);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    s = n(822123),
    d = n(649963),
    u = n(815807),
    g = n(406704),
    p = n(253932),
    f = n(576705),
    y = n(486020),
    b = n(690521),
    A = n(652215),
    m = n(307731),
    O = n(985018),
    v = n(852620);
let j = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

function h(e) {
    let {
        emoji: t,
        isFocused: n
    } = e, {
        animated: i,
        src: a,
        surrogates: c
    } = t;
    return null == a && null != t.id ? a = y.Ay.getEmojiURL({
        id: t.id,
        animated: !!i,
        size: 20
    }) : null == a && (a = b.Ay.getURL(c)), (0, r.jsx)(o.m, {
        text: (0, b.N)(t),
        hideOnClick: !0,
        spacing: 16,
        forceOpen: n,
        children: (0, r.jsx)("div", {
            "aria-label": O.intl.formatToPlainString(O.t["/iYSo6"], {
                emojiName: t.name
            }),
            className: l()(v.x6, {
                [v.in]: n
            }),
            children: null == a || "" === a.trim() ? (0, r.jsx)("span", {
                className: l()("emoji", "emoji-text", v.Kk),
                children: c
            }) : (0, r.jsx)("img", {
                className: v.Kk,
                src: a,
                alt: ""
            })
        })
    })
}

function S(e, t) {
    let n = (0, s.D6)(t.guild_id).filter(e => {
        var n;
        return !(e.useSpriteSheet && j.indexOf(null != (n = e.uniqueName) ? n : "") >= 0) && !b.Ay.isEmojiPremiumLocked({
            emoji: e,
            channel: t,
            intention: m.b_.REACTION
        })
    });
    n.length > 4 && (n.length = 4);
    let i = p.jW.useSetting(),
        l = (0, g.Id)(t);
    return (0, a.bG)([f.A], () => i && l && (t.isPrivate() || f.A.can(A.xBc.ADD_REACTIONS, t)), [t, l, i]) && n.length > 0 ? (0, r.jsx)(c.rXV, {
        className: v.iE,
        children: n.map((n, i) => {
            var l;
            return (0, r.jsx)(c.Drp, {
                id: "quickreact-".concat(null != (l = n.id) ? l : i),
                render: e => {
                    let {
                        isFocused: t
                    } = e;
                    return (0, r.jsx)(h, {
                        emoji: n,
                        isFocused: t
                    })
                },
                action: () => {
                    (0, d.BB)(t.id, e.id, (0, u.jq)(n), d.qN.MESSAGE_CONTEXT_MENU)
                },
                dontCloseOnActionIfHoldingShiftKey: !0
            }, i)
        })
    }) : null
}