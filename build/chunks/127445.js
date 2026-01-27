/** Chunk was on web.js **/
/** chunk id: 127445, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
}), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956);
var r = n(64700),
    i = n(671325),
    a = n(562465),
    o = n(397927),
    s = n(954571),
    l = n(676279),
    c = n(652215),
    u = n(339747),
    d = n(883364),
    f = n(336343),
    p = n(37232),
    _ = n(855249),
    h = n(909902);
let m = e => {
        let t = (0, l.TM)(),
            [n, i] = (0, r.useState)({
                modalGlowEntry: void 0,
                modalGlowIdle: void 0,
                modalGlowExit: void 0
            }),
            [o, m] = (0, r.useState)(!1),
            [g, E] = (0, r.useState)(!1),
            [y, b] = (0, r.useState)(!1),
            O = (0, r.useRef)(!0);
        (0, r.useEffect)(() => (O.current = !0, () => {
            O.current = !1
        }), []);
        let v = (0, r.useCallback)(() => null != n.modalGlowEntry && null != n.modalGlowIdle && null != n.modalGlowExit, [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit]),
            A = (0, r.useCallback)(async () => {
                if (!v() && !y) {
                    b(!0), E(!1), m(!1);
                    try {
                        let e = Date.now(),
                            [n, r, o] = await Promise.all([a.Bo.get({
                                url: t ? u.A : d.A,
                                binary: !0,
                                rejectWithError: !0
                            }), a.Bo.get({
                                url: t ? f.A : p.A,
                                binary: !0,
                                rejectWithError: !0
                            }), a.Bo.get({
                                url: t ? _.A : h.A,
                                binary: !0,
                                rejectWithError: !0
                            })]);
                        O.current && (i({
                            modalGlowEntry: window.URL.createObjectURL(n.body),
                            modalGlowExit: window.URL.createObjectURL(r.body),
                            modalGlowIdle: window.URL.createObjectURL(o.body)
                        }), m(!0), s.default.track(c.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCH_SUCCESS, {
                            load_duration_ms: Date.now() - e
                        }))
                    } catch (e) {
                        O.current && E(!0)
                    } finally {
                        O.current && b(!1)
                    }
                }
            }, [v, y, t]);
        return (0, r.useEffect)(() => {
            e && A()
        }, [e, A]), (0, r.useEffect)(() => () => {
            null != n.modalGlowEntry && window.URL.revokeObjectURL(n.modalGlowEntry), null != n.modalGlowIdle && window.URL.revokeObjectURL(n.modalGlowIdle), null != n.modalGlowExit && window.URL.revokeObjectURL(n.modalGlowExit)
        }, [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit]), {
            mediaUrls: n,
            isSuccess: o,
            isFailure: g,
            isLoading: y
        }
    },
    g = e => {
        (0, r.useEffect)(() => {
            e && s.default.track(c.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCHING)
        }, [e]);
        let {
            mediaUrls: t,
            isSuccess: n,
            isLoading: a
        } = m(e), {
            status: l
        } = (0, o.CEU)(e ? i.A : null);
        return {
            mediaUrls: t,
            isSuccess: n && l === o.BWP.Loaded,
            isLoading: a || l === o.BWP.Loading
        }
    }