/** Chunk was on 47841 **/
/** chunk id: 635582, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
}), n(896048);
var r = n(64700),
    i = n(311907),
    l = n(181658),
    s = n(260509),
    a = n(71393),
    o = n(287809),
    c = n(493540),
    d = n(469993);

function u(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.getGuild(e)),
        [u, g] = r.useState(),
        [m, p] = r.useState(!1),
        f = (0, d.ME)(n);
    return {
        canSubmitAcceptance: (0, i.bG)([o.default], () => {
            let e = o.default.getCurrentUser();
            return null != n && (0, s.bM)(n, e)
        }, [n]),
        error: u,
        loading: m,
        submitAcceptTermsRequest: r.useCallback(async () => {
            if (null != e && (f || null != t)) {
                p(!0), g(void 0);
                try {
                    null != t ? await c.DP(e, t) : await c.Bo(e)
                } catch (e) {
                    g(new l.A(e))
                } finally {
                    p(!1)
                }
            }
        }, [e, t, f])
    }
}