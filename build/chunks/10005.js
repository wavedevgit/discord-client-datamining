/** Chunk was on web.js **/
/** chunk id: 10005, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
}), n(896048);
var r = n(64700),
    i = n(198982),
    a = n(899847),
    s = n(695515),
    o = n(191627);

function l(e) {
    let {
        onError: t,
        onSuccess: n
    } = null != e ? e : {}, [l, c] = r.useState(!1), [u, d] = r.useState(!1), [f, p] = r.useState(!1), [_, h] = r.useState(!1), [m, g] = r.useState(!1), [E, y] = r.useState(!1), [b, O] = r.useState(!1), [v, A] = r.useState(!1), I = l || u || f || _ || E || v, S = r.useCallback(async e => {
        if (!I) {
            c(!0);
            try {
                await (0, a.nt)(e, o.Ef.ACTIVE), null == n || n()
            } catch (n) {
                let e = new i.LG(n);
                null == t || t(e)
            } finally {
                c(!1)
            }
        }
    }, [I, t, n]), T = r.useCallback(async e => {
        if (!I) {
            d(!0);
            try {
                await (0, a.nt)(e, o.Ef.DECLINED), null == n || n()
            } catch (n) {
                let e = new i.LG(n);
                null == t || t(e)
            } finally {
                d(!1)
            }
        }
    }, [I, t, n]), C = r.useCallback(async e => {
        if (!I) {
            p(!0);
            try {
                await (0, a.nt)(e, o.Ef.INACTIVE), null == n || n()
            } catch (n) {
                let e = new i.LG(n);
                null == t || t(e)
            } finally {
                p(!1)
            }
        }
    }, [I, t, n]), N = r.useCallback(async e => {
        if (!I) {
            h(!0);
            try {
                await (0, a.e$)(e), null == n || n()
            } catch (n) {
                let e = new i.LG(n);
                null == t || t(e)
            } finally {
                h(!1)
            }
        }
    }, [I, t, n]), w = r.useCallback(async () => {
        if (!m) {
            g(!0);
            try {
                await (0, a.HB)(), null == n || n()
            } catch (n) {
                let e = new i.LG(n);
                null == t || t(e)
            } finally {
                g(!1)
            }
        }
    }, [m, t, n]), R = r.useCallback(async e => {
        if (!b) {
            O(!0);
            try {
                await a.Ay.fetchTeenActivity(e), null == n || n()
            } catch (n) {
                let e = new i.LG(n);
                null == t || t(e)
            } finally {
                O(!1)
            }
        }
    }, [b, t, n]);
    return {
        acceptLinkRequest: S,
        declineLinkRequest: T,
        disconnectLinkRequest: C,
        cancelLinkRequest: N,
        selectTeenUser: R,
        getLinkCode: w,
        requestLink: r.useCallback(async (e, r) => {
            if (!E) {
                y(!0);
                try {
                    await a.Ay.requestLink(e, r), null == n || n()
                } catch (n) {
                    let e = new i.LG(n);
                    null == t || t(e)
                } finally {
                    y(!1)
                }
            }
        }, [E, t, n]),
        loadMore: r.useCallback(async e => {
            let n = s.A.getActionsForDisplayType(e),
                r = n[n.length - 1],
                o = s.A.getStartId(),
                l = s.A.getSelectedTeenId();
            if (!v && null != o && null != l) {
                A(!0);
                try {
                    await a.Ay.fetchMoreTeenActivity(l, e, o, r.event_id)
                } catch (n) {
                    let e = new i.LG(n);
                    null == t || t(e)
                } finally {
                    A(!1)
                }
            }
        }, [v, t]),
        isAcceptLoading: l,
        isDeclineLoading: u,
        isDisconnectLoading: f,
        isCancelLoading: _,
        isGetLinkCodeLoading: m,
        isSelectTeenUserLoading: b,
        isRequestingLink: E,
        isMoreLoading: v
    }
}