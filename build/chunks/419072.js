/** chunk id: 419072 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(311907),
    l = n(73153),
    r = n(914853),
    s = n(956753);
let a = new Set(Object.values(r.x)),
    o = {
        [r.x.FRIENDS]: {
            FAVORITES: !0,
            FRIEND_REQUESTS: !0,
            OFFLINE: !0
        },
        [r.x.MESSAGES]: {
            FAVORITES: !0
        },
        [r.x.VOICE]: {}
    },
    u = {
        ...o
    };

function d(e, t) {
    return !!(e === r.x.FRIENDS && t.startsWith("GROUP:")) || o[e]?.[t] === !0
}

function c() {
    return u = {
        ...o
    }, !0
}
class h extends i.Ay.Store {
    static displayName = "FriendsWidgetCollapsibleStore";
    initialize() {
        u = {
            ...o
        }
    }
    getCollapsedSectionOverridesForTab(e) {
        return u[e]
    }
    isSectionCollapsedByDefault(e, t) {
        return d(e, t)
    }
}
let g = e => (0, s.v$)(e, "FriendsWidgetCollapsibleStore"),
    m = new h(l.h, __OVERLAY__ ? {} : {
        OVERLAY_FRIENDS_WIDGET_TOGGLE_SECTION_COLLAPSED: g(function(e) {
            let t = e.tab;
            if (!a.has(t)) return !1;
            let n = function(e) {
                if ("string" != typeof e) return null;
                let t = e.trim();
                return "" === t ? null : t
            }(e.sectionKey);
            if (null == n) return !1;
            let i = u[t] ?? {},
                l = i[n],
                r = d(t, n),
                s = {
                    ...i,
                    [n]: !(l ?? r)
                };
            return u = {
                ...u,
                [t]: s
            }, !0
        }),
        FRIENDS_LIST_POPOUT_MOUNTED: g(c),
        OVERLAY_INITIALIZE: g(c),
        LOGOUT: g(c)
    })