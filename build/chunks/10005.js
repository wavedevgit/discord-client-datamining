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
    } = e ?? {}, [o, d] = i.useState(!1), [c, u] = i.useState(!1), [_, m] = i.useState(!1), [g, A] = i.useState(!1), [x, h] = i.useState(!1), [p, T] = i.useState(!1), [E, S] = i.useState(!1), [C, f] = i.useState(!1), N = o || c || _ || g || p || C, I = i.useCallback(async e => {
        if (!N) {
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
    }, [N, t, n]), b = i.useCallback(async e => {
        if (!N) {
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
    }, [N, t, n]), v = i.useCallback(async e => {
        if (!N) {
            m(!0);
            try {
                await (0, l.nt)(e, r.Ef.INACTIVE), n?.()
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
    }, [N, t, n]), y = i.useCallback(async () => {
        if (!x) {
            h(!0);
            try {
                await (0, l.HB)(), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                h(!1)
            }
        }
    }, [x, t, n]), O = i.useCallback(async e => {
        if (!E) {
            S(!0);
            try {
                await l.Ay.fetchTeenActivity(e), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                S(!1)
            }
        }
    }, [E, t, n]);
    return {
        acceptLinkRequest: I,
        declineLinkRequest: b,
        disconnectLinkRequest: v,
        cancelLinkRequest: j,
        selectTeenUser: O,
        getLinkCode: y,
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
            let n = a.A.getActionsForDisplayType(e),
                i = n[n.length - 1],
                r = a.A.getStartId(),
                o = a.A.getSelectedTeenId();
            if (!C && null != r && null != o) {
                f(!0);
                try {
                    await l.Ay.fetchMoreTeenActivity(o, e, r, i.event_id)
                } catch (n) {
                    let e = new s.LG(n);
                    t?.(e)
                } finally {
                    f(!1)
                }
            }
        }, [C, t]),
        isAcceptLoading: o,
        isDeclineLoading: c,
        isDisconnectLoading: _,
        isCancelLoading: g,
        isGetLinkCodeLoading: x,
        isSelectTeenUserLoading: E,
        isRequestingLink: p,
        isMoreLoading: C
    }
}