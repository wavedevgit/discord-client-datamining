/** chunk id: 10005 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(64700),
    s = n(198982),
    l = n(899847),
    r = n(695515),
    a = n(191627);

function o(e) {
    let {
        onError: t,
        onSuccess: n
    } = e ?? {}, [o, d] = i.useState(!1), [c, u] = i.useState(!1), [_, m] = i.useState(!1), [g, A] = i.useState(!1), [h, x] = i.useState(!1), [p, T] = i.useState(!1), [E, C] = i.useState(!1), [S, f] = i.useState(!1), N = o || c || _ || g || p || S, b = i.useCallback(async e => {
        if (!N) {
            d(!0);
            try {
                await (0, l.nt)(e, a.Ef.ACTIVE), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                d(!1)
            }
        }
    }, [N, t, n]), I = i.useCallback(async e => {
        if (!N) {
            u(!0);
            try {
                await (0, l.nt)(e, a.Ef.DECLINED), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                u(!1)
            }
        }
    }, [N, t, n]), v = i.useCallback(async e => {
        if (!N) {
            m(!0);
            try {
                await (0, l.nt)(e, a.Ef.INACTIVE), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                m(!1)
            }
        }
    }, [N, t, n]), j = i.useCallback(async e => {
        if (!N) {
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
    }, [N, t, n]), O = i.useCallback(async () => {
        if (!h) {
            x(!0);
            try {
                await (0, l.HB)(), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                x(!1)
            }
        }
    }, [h, t, n]), y = i.useCallback(async e => {
        if (!E) {
            C(!0);
            try {
                await l.Ay.fetchTeenActivity(e), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                C(!1)
            }
        }
    }, [E, t, n]);
    return {
        acceptLinkRequest: b,
        declineLinkRequest: I,
        disconnectLinkRequest: v,
        cancelLinkRequest: j,
        selectTeenUser: y,
        getLinkCode: O,
        requestLink: i.useCallback(async (e, i) => {
            if (!p) {
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
        }, [p, t, n]),
        loadMore: i.useCallback(async e => {
            let n = r.A.getActionsForDisplayType(e),
                i = n[n.length - 1],
                a = r.A.getStartId(),
                o = r.A.getSelectedTeenId();
            if (!S && null != a && null != o) {
                f(!0);
                try {
                    await l.Ay.fetchMoreTeenActivity(o, e, a, i.event_id)
                } catch (n) {
                    let e = new s.LG(n);
                    t?.(e)
                } finally {
                    f(!1)
                }
            }
        }, [S, t]),
        isAcceptLoading: o,
        isDeclineLoading: c,
        isDisconnectLoading: _,
        isCancelLoading: g,
        isGetLinkCodeLoading: h,
        isSelectTeenUserLoading: E,
        isRequestingLink: p,
        isMoreLoading: S
    }
}