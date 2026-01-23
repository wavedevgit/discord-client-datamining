/** Chunk was on 59275 **/
/** chunk id: 564322, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    X: () => u
});
var r = n(64700),
    l = n(59520),
    s = n(440938),
    a = n(790297),
    i = n(954571),
    o = n(652215);
let c = (e, t, n, r) => {
        let {
            scrollTop: l = 0,
            scrollOffset: s = 0,
            scrollHeight: a = 0,
            scrollWidth: o = 0
        } = r;
        if (a > 0) {
            let r = (l + s) / a;
            r > 0 && i.default.track(e, {
                scroll_visible_percent: r,
                source: n,
                page_height: Math.round(a),
                page_width: Math.round(o),
                page_session_id: t
            })
        }
    },
    u = (e, t) => {
        let {
            analyticsSource: n
        } = (0, a.lC)(t), i = (0, l.I)(c, 5e3, [], {
            trailing: !0
        }), u = (0, s.uM)(), d = null == u ? void 0 : u.sessionId;
        return {
            handleScroll: r.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t && i(o.HAw.COLLECTIBLES_SHOP_SCROLLED, null != d ? d : "", n, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth
                    })
                }
            }, [i, n, d, e])
        }
    }