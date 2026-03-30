/** chunk id: 369915 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(442433),
    r = n(686956),
    o = n(366811),
    c = n(383394),
    d = n(458294),
    u = n(71393),
    h = n(403362),
    A = n(842452),
    m = n(305928),
    _ = n(652215);
let g = s.memo(function(e) {
    let {
        folderNode: t,
        ...g
    } = e, {
        id: p,
        name: f,
        color: x,
        children: E
    } = t, C = E.map(e => e.id), I = (0, o.A)(e => e.guildId), N = (0, l.bG)([c.A], () => c.A.isFolderExpanded(p)), b = function(e) {
        let t = e.children.map(e => {
                let t = e.id,
                    n = u.A.getGuild(t);
                return null != n ? n.name : null
            }).filter(h.Vq),
            n = 2 * _.F05,
            i = [];
        for (let e of t)(e.length < n || 0 === i.length) && (i.push(e), n -= e.length);
        return `${i.join(", ")}${i.length<t.length?", ...":""}`
    }(t), S = (0, m.A)(t), {
        mentionCount: T,
        isMentionLowImportance: v,
        unread: y
    } = (0, l.cf)([d.default], () => ({
        mentionCount: C.map(e => d.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
        isMentionLowImportance: C.every(e => d.default.getIsMentionLowImportance(e)),
        unread: C.some(e => d.default.hasUnread(e))
    })), j = s.useCallback(() => {
        r.A.toggleGuildFolderExpand(p)
    }, [p]), R = s.useCallback(e => {
        (0, a.L3)(e, async () => {
            let {
                default: e
            } = await n.e("32857").then(n.bind(n, 842112));
            return t => (0, i.jsx)(e, {
                ...t,
                folderId: p,
                folderName: f,
                folderColor: x,
                unread: y || T > 0
            })
        })
    }, [p, f, x, y, T]);
    return (0, i.jsx)(A.A, {
        ...g,
        folderNode: t,
        expanded: N,
        selected: null != I && C.includes(I),
        mentionCount: T,
        isMentionLowImportance: v,
        unread: y,
        mediaState: S,
        defaultFolderName: b,
        onExpandCollapse: j,
        onContextMenu: R
    })
})