/** chunk id: 369915 params = (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(442433),
    r = n(686956),
    o = n(366811),
    d = n(383394),
    c = n(458294),
    u = n(71393),
    h = n(403362),
    A = n(842452),
    _ = n(305928),
    m = n(652215);
let p = l.memo(function(e) {
    let {
        folderNode: t,
        ...p
    } = e, {
        id: g,
        name: f,
        color: E,
        children: x
    } = t, I = x.map(e => e.id), C = (0, o.A)(e => e.guildId), N = (0, s.bG)([d.A], () => d.A.isFolderExpanded(g)), T = function(e) {
        let t = e.children.map(e => {
                let t = e.id,
                    n = u.A.getGuild(t);
                return null != n ? n.name : null
            }).filter(h.Vq),
            n = 2 * m.F05,
            i = [];
        for (let e of t)(e.length < n || 0 === i.length) && (i.push(e), n -= e.length);
        return `${i.join(", ")}${i.length<t.length?", ...":""}`
    }(t), S = (0, _.A)(t), {
        mentionCount: b,
        isMentionLowImportance: y,
        unread: v
    } = (0, s.cf)([c.default], () => ({
        mentionCount: I.map(e => c.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
        isMentionLowImportance: I.every(e => c.default.getIsMentionLowImportance(e)),
        unread: I.some(e => c.default.hasUnread(e))
    })), R = l.useCallback(() => {
        r.A.toggleGuildFolderExpand(g)
    }, [g]), j = l.useCallback(e => {
        (0, a.L3)(e, async () => {
            let {
                default: e
            } = await n.e("32857").then(n.bind(n, 842112));
            return t => (0, i.jsx)(e, {
                ...t,
                folderId: g,
                folderName: f,
                folderColor: E,
                unread: v || b > 0
            })
        })
    }, [g, f, E, v, b]);
    return (0, i.jsx)(A.A, {
        ...p,
        folderNode: t,
        expanded: N,
        selected: null != C && I.includes(C),
        mentionCount: b,
        isMentionLowImportance: y,
        unread: v,
        mediaState: S,
        defaultFolderName: T,
        onExpandCollapse: R,
        onContextMenu: j
    })
})