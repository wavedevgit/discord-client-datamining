/** Chunk was on 28636 **/
/** chunk id: 656106, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Fr: () => u,
    JX: () => d,
    YR: () => c,
    eM: () => s,
    kq: () => o
}), n(896048), n(680155), n(323874), n(14289), n(35956);
var r = n(976860),
    l = n(767599),
    i = n(310419),
    a = n(652215);
let s = () => {
        let e = {
            previousView: (0, i.R4)()
        };
        (0, r.pX)(a.BVt.GLOBAL_DISCOVERY_APPS, {
            state: e
        })
    },
    o = e => {
        let {
            categoryId: t
        } = e, n = {
            previousView: (0, i.R4)()
        };
        (0, r.pX)(a.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t), {
            state: n
        })
    },
    c = e => {
        let {
            applicationId: t
        } = e, n = {
            previousView: (0, i.R4)()
        };
        (0, r.pX)(a.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t), {
            state: n
        })
    },
    d = function() {
        let {
            query: e,
            categoryId: t,
            page: n
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = {
            previousView: (0, i.R4)()
        }, o = new URLSearchParams;
        null != e && "" !== e && o.set("q", e), null != t && t !== l.lj && o.set("category_id", t.toString()), null != n && n > 1 && o.set("page", n.toString()), (0, r.pX)(a.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, {
            state: s,
            search: o.toString()
        })
    },
    u = e => {
        let {
            location: {
                state: t
            }
        } = (0, r.JK)();
        (0, r.bG)(e, t)
    }