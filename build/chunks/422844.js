/** chunk id: 422844, original params: e,t,s (module,exports,require) **/
s.d(t, {
    R: () => A,
    p: () => b
}), s(896048);
var i = s(284009),
    n = s.n(i),
    r = s(353640),
    l = s(371444),
    a = s(392421),
    o = s(602137),
    d = s(121894),
    h = s(311907),
    c = s(734057),
    u = s(679804);

function g(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
            return Object.getOwnPropertyDescriptor(s, e).enumerable
        }))), i.forEach(function(t) {
            g(e, t, s[t])
        })
    }
    return e
}
let v = new Set,
    p = {
        layoutType: l.C.LIST,
        sortOrder: o.T.CREATION_DATE,
        tagFilter: v,
        scrollPosition: 0,
        tagSetting: a.n.MATCH_SOME
    };
class f {
    constructor(e, t) {
        g(this, "set", void 0), g(this, "get", void 0), g(this, "channelStates", void 0), g(this, "setChannelState", void 0), g(this, "getChannelState", void 0), g(this, "toggleTagFilter", void 0), g(this, "setTagFilter", void 0), g(this, "setSortOrder", void 0), g(this, "setLayoutType", void 0), g(this, "setTagSetting", void 0), g(this, "setScrollPosition", void 0), this.set = e, this.get = t, this.channelStates = {}, this.setChannelState = (e, t) => {
            let s = this.get(),
                i = this.getChannelState(e),
                n = m({}, s.channelStates);
            n[e] = m({}, i, t), (0, d.r)(() => this.set({
                channelStates: n
            }))
        }, this.getChannelState = e => {
            if (null == e) return p;
            let {
                channelStates: t
            } = this.get(), s = t[e];
            if (null == s) {
                let t = c.A.getChannel(e);
                n()(null != t, "[Forum Channel Store] The channel should not be missing."), s = {
                    layoutType: t.getDefaultLayout(),
                    sortOrder: t.getDefaultSortOrder(),
                    tagFilter: v,
                    scrollPosition: 0,
                    tagSetting: t.getDefaultTagSetting()
                }
            }
            return s
        }, this.toggleTagFilter = (e, t) => {
            let s = new Set(this.getChannelState(e).tagFilter);
            s.has(t) ? s.delete(t) : s.add(t), this.setTagFilter(e, s)
        }, this.setTagFilter = (e, t) => {
            this.setChannelState(e, {
                tagFilter: t
            }), u.A.setFilterTagIds(t)
        }, this.setSortOrder = (e, t) => {
            this.setChannelState(e, {
                sortOrder: t
            }), u.A.setSortOrder(t)
        }, this.setLayoutType = (e, t) => {
            this.setChannelState(e, {
                layoutType: t
            }), u.A.setLayout(t)
        }, this.setTagSetting = (e, t) => {
            this.setChannelState(e, {
                tagSetting: t
            }), u.A.setTagSetting(t)
        }, this.setScrollPosition = (e, t) => {
            this.setChannelState(e, {
                scrollPosition: t
            })
        }
    }
}
let x = (0, r.v)((e, t) => new f(e, t)),
    A = e => {
        let t = x();
        return null == (0, h.bG)([c.A], () => c.A.getChannel(e)) ? p : t.getChannelState(e)
    },
    b = () => x