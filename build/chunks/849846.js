/** chunk id: 849846 params = (module,exports,require) **/
l.d(t, {
    EmojiStudioModal: () => s
});
var n = l(627968);
l(64700);
var i = l(397927),
    r = l(534225),
    a = l(152470);
let s = e => {
    let {
        transitionState: t,
        guildId: l
    } = e, s = "userImage" in e ? e.userImage : void 0, u = "emoji" in e ? e.emoji : void 0, o = {
        guildId: l,
        ...null != u ? {
            emoji: u
        } : null != s ? {
            userImage: s
        } : {}
    };
    return (0, n.jsx)(i.EOs, {
        "data-migration-pending": !0,
        transitionState: t,
        size: i.rIJ.DYNAMIC,
        fullscreenOnMobile: !1,
        className: a.CR,
        parentComponent: "Modal",
        children: (0, n.jsx)(i.$mQ, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: a.jE,
            children: (0, n.jsx)(r.l, {
                ...o
            })
        })
    })
}