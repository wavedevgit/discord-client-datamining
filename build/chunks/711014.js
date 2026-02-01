/** chunk id: 711014, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    Ay: () => Y
}), n(896048), n(65821), n(321073);
var i = n(812729),
    a = n.n(i),
    o = n(284009),
    s = n.n(o),
    l = n(212455),
    c = n(263715),
    u = n(857071),
    d = n(617617),
    f = n(583613),
    p = n(403362),
    _ = n(383394),
    h = n(919638),
    m = n(696451),
    g = n(71393),
    E = n(536802),
    y = n(543465),
    b = n(287809);

function O(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function v(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = A(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function A(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let I = new c.zF;

function S(e, t) {
    for (let n of g.A.getGuildIds()) !e(n) || u.A.isLurking(n) || m.Ay.isCurrentUserGuest(n) || t(n)
}

function T(e) {
    switch (e.type) {
        case c.PJ.FOLDER:
            return {
                folderId: e.id, folderName: e.name, folderColor: e.color, expanded: e.expanded, guildIds: e.children.map(e => e.id)
            };
        case c.PJ.GUILD:
            return {
                folderId: void 0, guildIds: [e.id]
            };
        default:
            throw Error("[SortedGuildStore] Unexpected guilds tree node type.")
    }
}

function C(e, t) {
    let n = I;
    if (I = new c.zF, 0 === e.length && t.length > 0)
        for (let e of t) I.addNode((0, c.EL)(e));
    else
        for (let t of e)
            if (0 !== t.guildIds.length)
                if (null == t.folderId) I.addNode((0, c.EL)(t.guildIds[0]));
                else {
                    let e = (0, c.xW)(t, void 0, _.A.isFolderExpanded(t.folderId));
                    for (let n of (I.addNode(e), t.guildIds)) I.addNode((0, c.EL)(n), e)
                } for (let e of I.allNodes()) e.type === c.PJ.GUILD && (u.A.isLurking(e.id) || m.Ay.isCurrentUserGuest(e.id) || null == g.A.getGuild(e.id) && !h.A.isUnavailable(e.id)) && I.removeNode(e);
    for (let e of Object.values(I.nodes)) e.type === c.PJ.FOLDER && 0 === e.children.length && I.removeNode(e);
    S(e => null == I.nodes[e], e => I.addNode((0, c.EL)(e), I.root, !1)), I.version = n.version;
    let r = a()(n, I);
    return r ? I = n : I.version = n.version + 1, !r
}

function N() {
    var e, t, n;
    return C(null != (e = d.A.getGuildFolders()) ? e : [], null != (t = null == (n = d.A.settings.guildFolders) ? void 0 : n.guildPositions) ? t : [])
}

function w() {
    var e, t;
    let n = d.A.getGuildFolders();
    return !(null != r && a()(r, n)) && C(null != (r = n) ? r : [], null != (e = null == (t = d.A.settings.guildFolders) ? void 0 : t.guildPositions) ? e : [])
}

function R(e) {
    let {
        sourceId: t,
        targetId: n,
        moveToBelow: r,
        combine: i
    } = e, a = I.getNode(t), o = I.getNode(n);
    if (null == a || null == o) return !1;
    if (s()(!(i && a.type === c.PJ.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(a.id, " with another guilds list item")), s()(!(i && null != o.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(o.id, " that's already inside of a folder")), s()(a.type !== c.PJ.FOLDER || null == o.parentId, "[SORTED GUILDS] Can't move a folder ".concat(a.id, " to inside of another folder ").concat(o.parentId)), i) {
        let e = o.type !== c.PJ.FOLDER ? I.convertToFolder(o) : o;
        I.moveInto(a, e, r)
    } else I.moveNextTo(a, o, r)
}

function P(e) {
    let {
        sourceIds: t,
        name: n
    } = e, r = t.shift();
    if (null == r) return !1;
    let i = I.getNode(r);
    if (null == i) return !1;
    let a = I.convertToFolder(i);
    a.name = n, t.forEach(e => {
        let t = I.getNode(e);
        null != t && I.moveInto(t, a, !0)
    })
}

function D(e) {
    let {
        targetId: t,
        sourceIds: n
    } = e, r = v(e, ["targetId", "sourceIds"]), i = I.getNode(t);
    if (null == i || i.type !== c.PJ.FOLDER) return !1;
    let a = "" === r.name ? void 0 : r.name;
    if (a !== i.name) {
        let e = I.cloneNode(i);
        s()(e.id === i.id, "[SORTED GUILDS] Replacement folder node must have same id."), e.name = a, I.replaceNode(i, e)
    }
    let o = I.getNode(t);
    if (null == o) return !1;
    let l = o.children.map(e => e.id).filter(p.Vq),
        u = new Set(l),
        d = new Set(n),
        f = new Set([...l].filter(e => !d.has(e)));
    n.filter(e => !u.has(e)).forEach(e => {
        let t = I.getNode(e);
        null != t && I.moveInto(t, o, !0)
    }), f.forEach(e => {
        let t = I.getNode(e);
        null != t && I.moveNextTo(t, o, !0)
    })
}

function L(e) {
    let {
        targetId: t
    } = e, n = I.getNode(t);
    if (null == n || n.type !== c.PJ.FOLDER) return !1;
    n.children.map(e => e.id).filter(p.Vq).forEach(e => {
        let t = I.getNode(e);
        null != t && I.moveNextTo(t, n, !0)
    })
}

function x(e) {
    let {
        guildId: t,
        joinedAt: n,
        user: r
    } = e, i = b.default.getCurrentUser(), a = g.A.getGuild(t);
    if ((null == i ? void 0 : i.id) !== r.id || null == a) return !1;
    let o = "string" == typeof n ? new Date(n) : n;
    return o !== a.joinedAt && null != o && N()
}

function M(e) {
    let {
        folderId: t
    } = e, n = I.getNode(t), r = _.A.isFolderExpanded(t);
    if (null == n || n.type !== c.PJ.FOLDER || n.expanded === r) return !1;
    U(n, r)
}

function j(e) {
    let {
        folderId: t,
        expanded: n
    } = e, r = I.getNode(t);
    if (null == r || r.type !== c.PJ.FOLDER || r.expanded === n) return !1;
    U(r, n)
}

function k() {
    for (let e of I.allNodes()) e.type === c.PJ.FOLDER && e.expanded && U(e, !1)
}

function U(e, t) {
    let n = I.cloneNode(e);
    s()(n.id === e.id, "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id."), n.expanded = t, I.replaceNode(e, n)
}
let G = (0, f.L_)((e, t) => e.sortedGuildNodes().map(e => e.id)),
    V = (0, f.L_)((e, t) => e.getRoots().map(T)),
    F = (0, f.L_)((e, t) => {
        let n = [];

        function r(e) {
            switch (e.type) {
                case c.PJ.FOLDER:
                case c.PJ.GUILD:
                    n.push(e)
            }
            for (let t of e.children) r(t)
        }
        return r(e.root), n
    }),
    B = (0, f.L_)((e, t) => e.root.children.map(T));
class H extends E.A {
    initialize() {
        this.waitFor(g.A, y.Ay, d.A, h.A, u.A, _.A, l.A)
    }
    getGuildsTree() {
        return I
    }
    getGuildFolders() {
        return V(I, I.version)
    }
    getGuildFolderById(e) {
        return this.getGuildFolders().find(t => t.folderId === e)
    }
    getFlattenedGuildIds() {
        return G(I, I.version)
    }
    getFlattenedGuildFolderList() {
        return F(I, I.version)
    }
    getCompatibleGuildFolders() {
        return B(I, I.version)
    }
    getFastListGuildFolders() {
        return I.getRoots()
    }
    takeSnapshot() {
        return {
            version: H.LATEST_SNAPSHOT_VERSION,
            data: {
                tree: I.getSnapshot()
            }
        }
    }
    constructor() {
        super({
            CONNECTION_OPEN: N,
            OVERLAY_INITIALIZE: N,
            CACHE_LOADED: () => this.loadCache(),
            GUILD_CREATE: N,
            GUILD_DELETE: N,
            GUILD_MEMBER_ADD: x,
            USER_SETTINGS_PROTO_UPDATE: w,
            GUILD_MOVE_BY_ID: R,
            GUILD_FOLDER_CREATE_LOCAL: P,
            GUILD_FOLDER_EDIT_LOCAL: D,
            GUILD_FOLDER_DELETE_LOCAL: L,
            TOGGLE_GUILD_FOLDER_EXPAND: M,
            SET_GUILD_FOLDER_EXPANDED: j,
            GUILD_FOLDER_COLLAPSE: k
        }), O(this, "loadCache", () => {
            let e = this.readSnapshot(H.LATEST_SNAPSHOT_VERSION),
                t = null == e ? void 0 : e.tree;
            if (null != t)
                for (let e of ((I = new c.zF).loadSnapshot(t), I.allNodes())) e.type === c.PJ.FOLDER && (e.expanded = _.A.isFolderExpanded(e.id))
        })
    }
}
O(H, "displayName", "SortedGuildStore"), O(H, "LATEST_SNAPSHOT_VERSION", 2);
let Y = new H