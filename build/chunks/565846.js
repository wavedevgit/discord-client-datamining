/** chunk id: 565846, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => h
}), n(896048);
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(442433),
    o = n(565645),
    s = n(508675),
    d = n(919577),
    u = n(435470),
    c = n(406704),
    A = n(734057),
    f = n(690521);
n(253913);
var g = n(985018);

function h(t) {
    let e = (0, r.bG)([A.A], () => A.A.getChannel(t), [t]),
        n = (0, c.NI)(e),
        h = (0, r.bG)([A.A], () => A.A.getChannel(null == e ? void 0 : e.parent_id), [e]),
        p = (0, u.OT)(h),
        v = (0, u.kt)(e),
        b = v.length >= 5,
        m = (0, c.Id)(e),
        _ = (0, r.bG)([s.Ay], () => {
            let t = new Set;
            for (let e of null != p ? p : [])
                if (null != e.emojiId) {
                    let n = s.Ay.getUsableCustomEmojiById(e.emojiId);
                    (null == n ? void 0 : n.animated) && t.add(e.emojiId)
                } return t
        }, [p]);
    if (null == e) return (0, a.Z_)(), null;
    if (!n || __OVERLAY__ || !e.isForumPost() || (null == p ? void 0 : p.length) === 0 || !m || e.isModeratorReportChannel()) return null;
    let C = null == p ? void 0 : p.map(t => {
        let n = v.includes(t),
            r = null != t.emojiId || null != t.emojiName;
        return (0, i.jsx)(l.sLh, {
            id: t.id,
            label: t.name,
            leftIcon: r ? (0, i.jsx)(o.A, {
                emojiId: t.emojiId,
                emojiName: t.emojiName,
                animated: null != t.emojiId && _.has(t.emojiId)
            }) : void 0,
            leadingAccessory: function(t, e) {
                let {
                    emojiId: n,
                    emojiName: i
                } = t;
                if (null != n || null != i) return {
                    type: "emoji",
                    emojiId: n,
                    src: null == n && null != i ? f.Ay.getURL(i) : void 0,
                    animated: null != n && e.has(n)
                }
            }(t, _),
            disabled: b && !n,
            action: () => (t => {
                let n = new Set(v);
                if (n.has(t)) n.delete(t);
                else {
                    if (b) return;
                    n.add(t)
                }
                let i = Array.from(n).map(t => t.id);
                d.A.updateForumPostTags(e.id, i)
            })(t),
            checked: n
        }, t.id)
    });
    return (0, i.jsx)(l.Drp, {
        id: "edit-tags",
        label: g.intl.string(g.t["436ZFw"]),
        children: C
    })
}