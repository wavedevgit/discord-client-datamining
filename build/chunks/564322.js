/** chunk id: 564322, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    X: () => d
});
var n = s(64700),
    r = s(59520),
    l = s(440938),
    i = s(790297),
    a = s(954571),
    o = s(652215);
let c = (e, t, s, n) => {
        let {
            scrollTop: r = 0,
            scrollOffset: l = 0,
            scrollHeight: i = 0,
            scrollWidth: o = 0
        } = n;
        if (i > 0) {
            let n = (r + l) / i;
            n > 0 && a.default.track(e, {
                scroll_visible_percent: n,
                source: s,
                page_height: Math.round(i),
                page_width: Math.round(o),
                page_session_id: t
            })
        }
    },
    d = (e, t) => {
        let {
            analyticsSource: s
        } = (0, i.lC)(t), a = (0, r.I)(c, 5e3, [], {
            trailing: !0
        }), d = (0, l.uM)(), u = d?.sessionId;
        return {
            handleScroll: n.useCallback(() => {
                if (null != e.current) {
                    let t = e.current.getScrollerNode();
                    null != t && a(o.HAw.COLLECTIBLES_SHOP_SCROLLED, null != u ? u : "", s, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth
                    })
                }
            }, [a, s, u, e])
        }
    }