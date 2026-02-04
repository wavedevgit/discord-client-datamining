/** chunk id: 10005, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(896048);
var r = n(64700),
    i = n(198982),
    l = n(899847),
    s = n(695515),
    a = n(191627);

function o(e) {
    let {
        onError: t,
        onSuccess: n
    } = null != e ? e : {}, [o, c] = r.useState(!1), [d, u] = r.useState(!1), [_, p] = r.useState(!1), [m, g] = r.useState(!1), [A, f] = r.useState(!1), [b, h] = r.useState(!1), [E, O] = r.useState(!1), [x, C] = r.useState(!1), S = o || d || _ || m || b || x, T = r.useCallback(async e => {
        if (!S) {
            c(!0);
            try {
                await (0, l.nt)(e, a.Ef.ACTIVE), null == n || n()
            } catch (n) {
                let e = new i.LG(n);
                null == t || t(e)
            } finally {
                c(!1)
            }
        }
    }, [S, t, n]), I = r.useCallback(async e => {
        if (!S) {
            u(!0);
            try {
                await (0, l.nt)(e, a.Ef.DECLINED), null == n || n()
            } catch (n) {
                let e = new i.LG(n);
                null == t || t(e)
            } finally {
                u(!1)
            }
        }
    }, [S, t, n]), N = r.useCallback(async e => {
        if (!S) {
            p(!0);
            try {
                await (0, l.nt)(e, a.Ef.INACTIVE), null == n || n()
            } catch (n) {
                let e = new i.LG(n);
                null == t || t(e)
            } finally {
                p(!1)
            }
        }
    }, [S, t, n]), y = r.useCallback(async e => {
        if (!S) {
            g(!0);
            try {
                await (0, l.e$)(e), null == n || n()
            } catch (n) {
                let e = new i.LG(n);
                null == t || t(e)
            } finally {
                g(!1)
            }
        }
    }, [S, t, n]), j = r.useCallback(async () => {
        if (!A) {
            f(!0);
            try {
                await (0, l.HB)(), null == n || n()
            } catch (n) {
                let e = new i.LG(n);
                null == t || t(e)
            } finally {
                f(!1)
            }
        }
    }, [A, t, n]), v = r.useCallback(async e => {
        if (!E) {
            O(!0);
            try {
                await l.Ay.fetchTeenActivity(e), null == n || n()
            } catch (n) {
                let e = new i.LG(n);
                null == t || t(e)
            } finally {
                O(!1)
            }
        }
    }, [E, t, n]);
    return {
        acceptLinkRequest: T,
        declineLinkRequest: I,
        disconnectLinkRequest: N,
        cancelLinkRequest: y,
        selectTeenUser: v,
        getLinkCode: j,
        requestLink: r.useCallback(async (e, r) => {
            if (!b) {
                h(!0);
                try {
                    await l.Ay.requestLink(e, r), null == n || n()
                } catch (n) {
                    let e = new i.LG(n);
                    null == t || t(e)
                } finally {
                    h(!1)
                }
            }
        }, [b, t, n]),
        loadMore: r.useCallback(async e => {
            let n = s.A.getActionsForDisplayType(e),
                r = n[n.length - 1],
                a = s.A.getStartId(),
                o = s.A.getSelectedTeenId();
            if (!x && null != a && null != o) {
                C(!0);
                try {
                    await l.Ay.fetchMoreTeenActivity(o, e, a, r.event_id)
                } catch (n) {
                    let e = new i.LG(n);
                    null == t || t(e)
                } finally {
                    C(!1)
                }
            }
        }, [x, t]),
        isAcceptLoading: o,
        isDeclineLoading: d,
        isDisconnectLoading: _,
        isCancelLoading: m,
        isGetLinkCodeLoading: A,
        isSelectTeenUserLoading: E,
        isRequestingLink: b,
        isMoreLoading: x
    }
}