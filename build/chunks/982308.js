/** chunk id: 982308 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(311907),
    s = n(990078),
    o = n(397927),
    d = n(822123),
    c = n(649963),
    u = n(815807),
    g = n(406704),
    A = n(253932),
    m = n(576705),
    f = n(486020),
    p = n(690521),
    h = n(652215),
    y = n(307731),
    E = n(985018),
    S = n(696678);
let _ = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

function b(e) {
    let {
        emoji: t,
        isFocused: n
    } = e, {
        animated: l,
        src: a,
        surrogates: o
    } = t;
    return null == a && null != t.id ? a = f.Ay.getEmojiURL({
        id: t.id,
        animated: !!l,
        size: 20
    }) : null == a && (a = p.Ay.getURL(o)), (0, i.jsx)(s.m, {
        text: (0, p.N)(t),
        hideOnClick: !0,
        spacing: 16,
        forceOpen: n,
        children: (0, i.jsx)("div", {
            "aria-label": E.intl.formatToPlainString(E.t["/iYSo6"], {
                emojiName: t.name
            }),
            className: r()(S.x6, {
                [S.in]: n
            }),
            children: null == a || "" === a.trim() ? (0, i.jsx)("span", {
                className: r()("emoji", "emoji-text", S.Kk),
                children: o
            }) : (0, i.jsx)("img", {
                className: S.Kk,
                src: a,
                alt: ""
            })
        })
    })
}

function T(e, t) {
    let n = (0, d.D6)(t.guild_id).filter(e => !(e.useSpriteSheet && _.indexOf(e.uniqueName ?? "") >= 0) && !p.Ay.isEmojiPremiumLocked({
        emoji: e,
        channel: t,
        intention: y.b_.REACTION
    }));
    n.length > 4 && (n.length = 4);
    let l = A.jW.useSetting(),
        r = (0, g.Id)(t);
    return (0, a.bG)([m.A], () => l && r && (t.isPrivate() || m.A.can(h.xBc.ADD_REACTIONS, t)), [t, r, l]) && n.length > 0 ? (0, i.jsx)(o.rXV, {
        className: S.iE,
        children: n.map((n, l) => (0, i.jsx)(o.Drp, {
            id: `quickreact-${n.id??l}`,
            render: e => {
                let {
                    isFocused: t
                } = e;
                return (0, i.jsx)(b, {
                    emoji: n,
                    isFocused: t
                })
            },
            action: () => {
                (0, c.BB)(t.id, e.id, (0, u.jq)(n), c.qN.MESSAGE_CONTEXT_MENU)
            },
            dontCloseOnActionIfHoldingShiftKey: !0
        }, l))
    }) : null
}