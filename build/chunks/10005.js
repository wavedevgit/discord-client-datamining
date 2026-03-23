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
    } = e ?? {}, [o, d] = i.useState(!1), [c, u] = i.useState(!1), [m, _] = i.useState(!1), [g, A] = i.useState(!1), [x, p] = i.useState(!1), [h, f] = i.useState(!1), [T, E] = i.useState(!1), [S, b] = i.useState(!1), C = o || c || m || g || h || S, N = i.useCallback(async e => {
        if (!C) {
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
    }, [C, t, n]), v = i.useCallback(async e => {
        if (!C) {
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
    }, [C, t, n]), I = i.useCallback(async e => {
        if (!C) {
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
    }, [C, t, n]), j = i.useCallback(async e => {
        if (!C) {
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
    }, [C, t, n]), y = i.useCallback(async () => {
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
        if (!T) {
            E(!0);
            try {
                await l.Ay.fetchTeenActivity(e), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                E(!1)
            }
        }
    }, [T, t, n]);
    return {
        acceptLinkRequest: N,
        declineLinkRequest: v,
        disconnectLinkRequest: I,
        cancelLinkRequest: j,
        selectTeenUser: O,
        getLinkCode: y,
        requestLink: i.useCallback(async (e, i) => {
            if (!h) {
                f(!0);
                try {
                    await l.Ay.requestLink(e, i), n?.()
                } catch (n) {
                    let e = new s.LG(n);
                    t?.(e)
                } finally {
                    f(!1)
                }
            }
        }, [h, t, n]),
        loadMore: i.useCallback(async e => {
            let n = a.A.getActionsForDisplayType(e),
                i = n[n.length - 1],
                r = a.A.getStartId(),
                o = a.A.getSelectedTeenId();
            if (!S && null != r && null != o) {
                b(!0);
                try {
                    await l.Ay.fetchMoreTeenActivity(o, e, r, i.event_id)
                } catch (n) {
                    let e = new s.LG(n);
                    t?.(e)
                } finally {
                    b(!1)
                }
            }
        }, [S, t]),
        isAcceptLoading: o,
        isDeclineLoading: c,
        isDisconnectLoading: m,
        isCancelLoading: g,
        isGetLinkCodeLoading: x,
        isSelectTeenUserLoading: T,
        isRequestingLink: h,
        isMoreLoading: S
    }
}