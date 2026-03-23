/** chunk id: 10005 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(64700),
    s = n(198982),
    l = n(899847),
    a = n(695515),
    r = n(191627);

function o(e) {
    let {
        onError: t,
        onSuccess: n
    } = e ?? {}, [o, d] = i.useState(!1), [c, u] = i.useState(!1), [m, _] = i.useState(!1), [g, A] = i.useState(!1), [x, p] = i.useState(!1), [h, T] = i.useState(!1), [E, f] = i.useState(!1), [S, C] = i.useState(!1), b = o || c || m || g || h || S, N = i.useCallback(async e => {
        if (!b) {
            d(!0);
            try {
                await (0, l.nt)(e, r.Ef.ACTIVE), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                d(!1)
            }
        }
    }, [b, t, n]), I = i.useCallback(async e => {
        if (!b) {
            u(!0);
            try {
                await (0, l.nt)(e, r.Ef.DECLINED), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                u(!1)
            }
        }
    }, [b, t, n]), v = i.useCallback(async e => {
        if (!b) {
            _(!0);
            try {
                await (0, l.nt)(e, r.Ef.INACTIVE), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                _(!1)
            }
        }
    }, [b, t, n]), j = i.useCallback(async e => {
        if (!b) {
            A(!0);
            try {
                await (0, l.e$)(e), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                A(!1)
            }
        }
    }, [b, t, n]), y = i.useCallback(async () => {
        if (!x) {
            p(!0);
            try {
                await (0, l.HB)(), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                p(!1)
            }
        }
    }, [x, t, n]), O = i.useCallback(async e => {
        if (!E) {
            f(!0);
            try {
                await l.Ay.fetchTeenActivity(e), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                f(!1)
            }
        }
    }, [E, t, n]);
    return {
        acceptLinkRequest: N,
        declineLinkRequest: I,
        disconnectLinkRequest: v,
        cancelLinkRequest: j,
        selectTeenUser: O,
        getLinkCode: y,
        requestLink: i.useCallback(async (e, i) => {
            if (!h) {
                T(!0);
                try {
                    await l.Ay.requestLink(e, i), n?.()
                } catch (n) {
                    let e = new s.LG(n);
                    t?.(e)
                } finally {
                    T(!1)
                }
            }
        }, [h, t, n]),
        loadMore: i.useCallback(async e => {
            let n = a.A.getActionsForDisplayType(e),
                i = n[n.length - 1],
                r = a.A.getStartId(),
                o = a.A.getSelectedTeenId();
            if (!S && null != r && null != o) {
                C(!0);
                try {
                    await l.Ay.fetchMoreTeenActivity(o, e, r, i.event_id)
                } catch (n) {
                    let e = new s.LG(n);
                    t?.(e)
                } finally {
                    C(!1)
                }
            }
        }, [S, t]),
        isAcceptLoading: o,
        isDeclineLoading: c,
        isDisconnectLoading: m,
        isCancelLoading: g,
        isGetLinkCodeLoading: x,
        isSelectTeenUserLoading: E,
        isRequestingLink: h,
        isMoreLoading: S
    }
}