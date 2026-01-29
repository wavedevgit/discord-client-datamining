/** Chunk was on 27687 **/
/** chunk id: 687709, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => h
}), n(134528), n(947204);
var r = n(562465),
    i = n(73153),
    l = n(198982),
    s = n(867455),
    a = n(966833),
    o = n(157559),
    c = n(652215),
    d = n(985018);
let g = {
        async pinMessage(t, e) {
            let {
                id: n,
                name: i
            } = t;
            await s.A.unarchiveThreadIfNecessary(t.id), r.Bo.put({
                url: c.Rsh.PIN(n, e),
                rejectWithError: !0
            }).catch(e => {
                let n = new l.LG(e),
                    r = n.code,
                    s = d.intl.string(d.t.j2d6Km),
                    a = d.intl.string(d.t.fEptJP);
                if (null != r) switch (r) {
                    case c.t02.TOO_MANY_PINS_IN_CHANNEL:
                        s = d.intl.string(d.t.HI88Q3), a = t.isPrivate() ? d.intl.formatToPlainString(d.t.Q89oQU, {
                            maxPins: c.KL3
                        }) : d.intl.formatToPlainString(d.t.NnO1S5, {
                            maxPins: c.KL3,
                            channelName: i
                        });
                        break;
                    case c.t02.INVALID_ACCESS:
                        s = d.intl.string(d.t["25gfQX"]), a = d.intl.string(d.t.QNnTwN);
                        break;
                    case c.t02.INVALID_PIN_MESSAGE_CHANNEL:
                        s = d.intl.string(d.t["Q5G6+m"]), a = d.intl.string(d.t["5hgPfC"]);
                        break;
                    case c.t02.INVALID_THREAD_ARCHIVE_STATE:
                        s = d.intl.string(d.t.fu6Lbl), a = d.intl.string(d.t.FmrcZM);
                        break;
                    case c.t02.INVALID_ACTION_SYSTEM_MESSAGE:
                        s = d.intl.string(d.t["zV0/FC"]), a = d.intl.string(d.t.C4a7xI);
                        break;
                    case c.t02.UNKNOWN_MESSAGE:
                        s = d.intl.string(d.t.fkqPro), a = d.intl.string(d.t.H6fRIg);
                        break;
                    default:
                        var g;
                        s = d.intl.string(d.t.HI88Q3), a = null != (g = n.getAnyErrorMessage()) ? g : d.intl.string(d.t.fEptJP)
                }
                o.A.show({
                    title: s,
                    body: a,
                    confirmText: d.intl.string(d.t.BddRzS)
                })
            })
        },
        async unpinMessage(t, e) {
            await s.A.unarchiveThreadIfNecessary(t.id), r.Bo.del({
                url: c.Rsh.PIN(t.id, e),
                oldFormErrors: !0,
                rejectWithError: !0
            }).catch(() => o.A.show({
                title: d.intl.string(d.t.xFjByk),
                body: d.intl.string(d.t["0R/Toc"]),
                confirmText: d.intl.string(d.t["7NqTJn"]),
                cancelText: d.intl.string(d.t["ETE/oC"]),
                onConfirm: g.unpinMessage.bind(g, t, e)
            }))
        },
        ackPins(t) {
            i.h.dispatch({
                type: "CHANNEL_PINS_ACK",
                channelId: t
            })
        },
        fetchPins(t, e) {
            var n, l;
            let s = null != (n = null == e ? void 0 : e.reset) && n,
                o = null != (l = null == e ? void 0 : e.limit) ? l : 25,
                d = null == e ? void 0 : e.before;
            (s || function(t, e) {
                let n = a.A.getPins(t);
                if (null == n) return !0;
                switch (n.state) {
                    case a.e.FAILED:
                        return !0;
                    case a.e.LOADING:
                    case a.e.LOADED_FINISHED:
                        return !1;
                    case a.e.LOADED_HAS_MORE:
                        if (null == e) return 0 === n.items.length;
                        return n.items.at(-1).pinnedAt === e
                }
            }(t, d)) && (i.h.dispatch({
                type: "LOAD_PINNED_MESSAGES",
                channelId: t,
                reset: s
            }), r.Bo.get({
                url: c.Rsh.PINS(t),
                query: {
                    limit: o,
                    before: null == d ? void 0 : d.toISOString()
                },
                retries: 2,
                oldFormErrors: !0,
                rejectWithError: !0
            }).then(e => {
                i.h.dispatch({
                    type: "LOAD_PINNED_MESSAGES_SUCCESS",
                    pins: e.body.items,
                    channelId: t,
                    hasMore: e.body.has_more
                })
            }, () => {
                i.h.dispatch({
                    type: "LOAD_PINNED_MESSAGES_FAILURE",
                    channelId: t
                })
            }))
        }
    },
    h = g