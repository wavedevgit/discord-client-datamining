/** chunk id: 565846 params = (module,exports,require) **/
i.d(n, {
    A: () => b
});
var e = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(442433),
    s = i(565645),
    d = i(508675),
    o = i(919577),
    u = i(435470),
    c = i(406704),
    h = i(734057),
    A = i(690521);
i(253913);
var g = i(985018);

function b(t) {
    let n = (0, r.bG)([h.A], () => h.A.getChannel(t), [t]),
        i = (0, c.NI)(n),
        b = (0, r.bG)([h.A], () => h.A.getChannel(n?.parent_id), [n]),
        m = (0, u.OT)(b),
        p = (0, u.kt)(n),
        f = p.length >= 5,
        j = (0, c.Id)(n),
        v = (0, r.bG)([d.Ay], () => {
            let t = new Set;
            for (let n of m ?? [])
                if (null != n.emojiId) {
                    let i = d.Ay.getUsableCustomEmojiById(n.emojiId);
                    i?.animated && t.add(n.emojiId)
                } return t
        }, [m]);
    if (null == n) return (0, a.Z_)(), null;
    if (!i || __OVERLAY__ || !n.isForumPost() || m?.length === 0 || !j || n.isModeratorReportChannel()) return null;
    let x = m?.map(t => {
        let i = p.includes(t),
            r = null != t.emojiId || null != t.emojiName;
        return (0, e.jsx)(l.sLh, {
            id: t.id,
            label: t.name,
            leftIcon: r ? (0, e.jsx)(s.A, {
                emojiId: t.emojiId,
                emojiName: t.emojiName,
                animated: null != t.emojiId && v.has(t.emojiId)
            }) : void 0,
            leadingAccessory: function(t, n) {
                let {
                    emojiId: i,
                    emojiName: e
                } = t;
                if (null != i || null != e) return {
                    type: "emoji",
                    emojiId: i,
                    src: null == i && null != e ? A.Ay.getURL(e) : void 0,
                    animated: null != i && n.has(i)
                }
            }(t, v),
            disabled: f && !i,
            action: () => (t => {
                let i = new Set(p);
                if (i.has(t)) i.delete(t);
                else {
                    if (f) return;
                    i.add(t)
                }
                let e = Array.from(i).map(t => t.id);
                o.A.updateForumPostTags(n.id, e)
            })(t),
            checked: i
        }, t.id)
    });
    return (0, e.jsx)(l.Drp, {
        id: "edit-tags",
        label: g.intl.string(g.t["436ZFw"]),
        children: x
    })
}