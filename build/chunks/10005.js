/** Chunk was on 5606 **/
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
    } = null != e ? e : {}, [o, c] = r.useState(!1), [d, u] = r.useState(!1), [p, _] = r.useState(!1), [m, g] = r.useState(!1), [f, b] = r.useState(!1), [h, A] = r.useState(!1), [E, x] = r.useState(!1), [O, C] = r.useState(!1), y = o || d || p || m || h || O, j = r.useCallback(async e => {
        if (!y) {
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
    }, [y, t, n]), T = r.useCallback(async e => {
        if (!y) {
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
    }, [y, t, n]), v = r.useCallback(async e => {
        if (!y) {
            _(!0);
            try {
                await (0, l.nt)(e, a.Ef.INACTIVE), null == n || n()
            } catch (n) {
                let e = new i.LG(n);
                null == t || t(e)
            } finally {
                _(!1)
            }
        }
    }, [y, t, n]), S = r.useCallback(async e => {
        if (!y) {
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
    }, [y, t, n]), I = r.useCallback(async () => {
        if (!f) {
            b(!0);
            try {
                await (0, l.HB)(), null == n || n()
            } catch (n) {
                let e = new i.LG(n);
                null == t || t(e)
            } finally {
                b(!1)
            }
        }
    }, [f, t, n]), N = r.useCallback(async e => {
        if (!E) {
            x(!0);
            try {
                await l.Ay.fetchTeenActivity(e), null == n || n()
            } catch (n) {
                let e = new i.LG(n);
                null == t || t(e)
            } finally {
                x(!1)
            }
        }
    }, [E, t, n]);
    return {
        acceptLinkRequest: j,
        declineLinkRequest: T,
        disconnectLinkRequest: v,
        cancelLinkRequest: S,
        selectTeenUser: N,
        getLinkCode: I,
        requestLink: r.useCallback(async (e, r) => {
            if (!h) {
                A(!0);
                try {
                    await l.Ay.requestLink(e, r), null == n || n()
                } catch (n) {
                    let e = new i.LG(n);
                    null == t || t(e)
                } finally {
                    A(!1)
                }
            }
        }, [h, t, n]),
        loadMore: r.useCallback(async e => {
            let n = s.A.getActionsForDisplayType(e),
                r = n[n.length - 1],
                a = s.A.getStartId(),
                o = s.A.getSelectedTeenId();
            if (!O && null != a && null != o) {
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
        }, [O, t]),
        isAcceptLoading: o,
        isDeclineLoading: d,
        isDisconnectLoading: p,
        isCancelLoading: m,
        isGetLinkCodeLoading: f,
        isSelectTeenUserLoading: E,
        isRequestingLink: h,
        isMoreLoading: O
    }
}