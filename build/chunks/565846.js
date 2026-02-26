/** chunk id: 565846, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => b
});
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(442433),
    d = e(565645),
    s = e(508675),
    o = e(919577),
    u = e(435470),
    c = e(406704),
    g = e(734057),
    A = e(690521);
e(253913);
var h = e(985018);

function b(t) {
    let n = (0, l.bG)([g.A], () => g.A.getChannel(t), [t]),
        e = (0, c.NI)(n),
        b = (0, l.bG)([g.A], () => g.A.getChannel(n?.parent_id), [n]),
        m = (0, u.OT)(b),
        p = (0, u.kt)(n),
        f = p.length >= 5,
        v = (0, c.Id)(n),
        _ = (0, l.bG)([s.Ay], () => {
            let t = new Set;
            for (let n of m ?? [])
                if (null != n.emojiId) {
                    let e = s.Ay.getUsableCustomEmojiById(n.emojiId);
                    e?.animated && t.add(n.emojiId)
                } return t
        }, [m]);
    if (null == n) return (0, a.Z_)(), null;
    if (!e || __OVERLAY__ || !n.isForumPost() || m?.length === 0 || !v || n.isModeratorReportChannel()) return null;
    let j = m?.map(t => {
        let e = p.includes(t),
            l = null != t.emojiId || null != t.emojiName;
        return (0, i.jsx)(r.sLh, {
            id: t.id,
            label: t.name,
            leftIcon: l ? (0, i.jsx)(d.A, {
                emojiId: t.emojiId,
                emojiName: t.emojiName,
                animated: null != t.emojiId && _.has(t.emojiId)
            }) : void 0,
            leadingAccessory: function(t, n) {
                let {
                    emojiId: e,
                    emojiName: i
                } = t;
                if (null != e || null != i) return {
                    type: "emoji",
                    emojiId: e,
                    src: null == e && null != i ? A.Ay.getURL(i) : void 0,
                    animated: null != e && n.has(e)
                }
            }(t, _),
            disabled: f && !e,
            action: () => (t => {
                let e = new Set(p);
                if (e.has(t)) e.delete(t);
                else {
                    if (f) return;
                    e.add(t)
                }
                let i = Array.from(e).map(t => t.id);
                o.A.updateForumPostTags(n.id, i)
            })(t),
            checked: e
        }, t.id)
    });
    return (0, i.jsx)(r.Drp, {
        id: "edit-tags",
        label: h.intl.string(h.t["436ZFw"]),
        children: j
    })
}