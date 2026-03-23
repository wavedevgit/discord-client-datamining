/** chunk id: 439447 params = (module,exports,require) **/
i.d(t, {
    A: () => p
});
var n, l, r = i(627968),
    s = i(64700),
    a = i(499979),
    o = i(451988),
    d = i(985018),
    u = ((n = u || {}).ACTIVITY_FEED = "ACTIVITY_FEED", n.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW", n.USER_ACTIVITY = "USER_ACTIVITY", n.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED", n.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED", n.VOICE_CHANNEL_HISTORY = "VOICE_CHANNEL_HISTORY", n),
    c = ((l = c || {}).START = "START", l.END = "END", l.TIME = "TIME", l);
let A = e => (t, i) => null == i ? "" : d.intl.format(e(), {
        time: t,
        ...i
    }),
    m = {
        ACTIVITY_FEED: {
            START: {
                [a.pJ.SECONDS]: () => d.intl.string(d.t["ahzZr+"]),
                [a.pJ.MINUTES]: e => d.intl.formatToPlainString(d.t["03mIHW"], {
                    time: e
                }),
                [a.pJ.HOURS]: e => d.intl.formatToPlainString(d.t.eNoooU, {
                    time: e
                }),
                [a.pJ.DAYS]: e => d.intl.formatToPlainString(d.t["2rUo/p"], {
                    time: e
                })
            },
            END: {
                [a.pJ.SECONDS]: () => d.intl.string(d.t.EluAd9),
                [a.pJ.MINUTES]: e => d.intl.formatToPlainString(d.t.BZxG8Z, {
                    time: e
                }),
                [a.pJ.HOURS]: e => d.intl.formatToPlainString(d.t.cRMUpw, {
                    time: e
                }),
                [a.pJ.DAYS]: e => d.intl.formatToPlainString(d.t.yP1T84, {
                    time: e
                }),
                [a.pJ.WEEKS]: e => d.intl.formatToPlainString(d.t.AWkdqe, {
                    time: e
                }),
                [a.pJ.MONTHS]: e => d.intl.formatToPlainString(d.t.upamA7, {
                    time: e
                }),
                [a.pJ.YEARS]: e => d.intl.formatToPlainString(d.t.vfMC2h, {
                    time: e
                })
            }
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [a.pJ.SECONDS]: A(() => d.t.Bf3PRU),
                [a.pJ.MINUTES]: A(() => d.t["A9P+dT"]),
                [a.pJ.HOURS]: A(() => d.t.KwVzfh),
                [a.pJ.DAYS]: A(() => d.t.hbUpBN)
            },
            END: {
                [a.pJ.SECONDS]: e => d.intl.formatToPlainString(d.t.C3MTOD, {
                    seconds: e
                }),
                [a.pJ.MINUTES]: e => d.intl.formatToPlainString(d.t["GqQ/Y9"], {
                    minutes: e
                }),
                [a.pJ.HOURS]: e => d.intl.formatToPlainString(d.t.c5zfWZ, {
                    hours: e
                }),
                [a.pJ.DAYS]: e => d.intl.formatToPlainString(d.t.amjnaI, {
                    days: e
                })
            }
        },
        USER_ACTIVITY: {
            START: {
                [a.pJ.SECONDS]: function(e, t) {
                    return arguments.length > 2 && void 0 !== arguments[2] && arguments[2], d.intl.string(d.t["ahzZr+"])
                },
                [a.pJ.MINUTES]: function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return i ? d.intl.formatToPlainString(d.t["03mIHW"], {
                        time: e
                    }) : n ? d.intl.formatToPlainString(d.t.w5w79N, {
                        time: e
                    }) : d.intl.formatToPlainString(d.t["vQml+P"], {
                        time: e
                    })
                },
                [a.pJ.HOURS]: function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return i ? d.intl.formatToPlainString(d.t.eNoooU, {
                        time: e
                    }) : n ? d.intl.formatToPlainString(d.t.EPkGyE, {
                        time: e
                    }) : d.intl.formatToPlainString(d.t["4Wq+6x"], {
                        time: e
                    })
                },
                [a.pJ.DAYS]: function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return i ? d.intl.formatToPlainString(d.t["2rUo/p"], {
                        time: e
                    }) : n ? d.intl.formatToPlainString(d.t.V3g3dS, {
                        time: e
                    }) : d.intl.formatToPlainString(d.t["jN3/fR"], {
                        time: e
                    })
                }
            }
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [a.pJ.NONE]: () => d.intl.string(d.t.LqDiCt),
                [a.pJ.SECONDS]: e => d.intl.formatToPlainString(d.t.xDIDBL, {
                    time: e
                }),
                [a.pJ.MINUTES]: e => d.intl.formatToPlainString(d.t.KGqJce, {
                    time: e
                }),
                [a.pJ.HOURS]: e => d.intl.formatToPlainString(d.t.OLchUE, {
                    time: e
                })
            }
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [a.pJ.NONE]: () => d.intl.string(d.t.EoWLru),
                [a.pJ.SECONDS]: () => d.intl.string(d.t.QTHa8b),
                [a.pJ.MINUTES]: e => d.intl.formatToPlainString(d.t.SVEfcd, {
                    time: e
                }),
                [a.pJ.HOURS]: e => d.intl.formatToPlainString(d.t["0Gbusd"], {
                    time: e
                }),
                [a.pJ.DAYS]: e => d.intl.formatToPlainString(d.t.hnPZZ7, {
                    time: e
                }),
                [a.pJ.WEEKS]: e => d.intl.formatToPlainString(d.t.L3fTpL, {
                    time: e
                }),
                [a.pJ.MONTHS]: e => d.intl.formatToPlainString(d.t.xAFWQV, {
                    time: e
                }),
                [a.pJ.YEARS]: e => d.intl.formatToPlainString(d.t["9Yr3NW"], {
                    time: e
                })
            }
        },
        VOICE_CHANNEL_HISTORY: {
            END: {
                [a.pJ.SECONDS]: () => d.intl.string(d.t["1QsMmY"]),
                [a.pJ.MINUTES]: e => d.intl.formatToPlainString(d.t.LRNgHp, {
                    count: e
                }),
                [a.pJ.HOURS]: e => d.intl.formatToPlainString(d.t.raJpz3, {
                    count: e
                }),
                [a.pJ.DAYS]: e => d.intl.formatToPlainString(d.t.KkvKhi, {
                    count: e
                })
            }
        }
    };

function p(e) {
    return class extends s.PureComponent {
        static Locations = u;
        static Types = c;
        timer = new o.IX;
        state = {
            time: this.getDiff()
        };
        componentDidMount() {
            this.timer.start(1e4, this.update)
        }
        componentDidUpdate(e) {
            let {
                start: t,
                end: i,
                time: n
            } = this.props;
            (e.start !== t || e.end !== i || e.time !== n) && this.update()
        }
        componentWillUnmount() {
            this.timer.stop()
        }
        getDiff() {
            let {
                start: e,
                end: t,
                time: i
            } = this.props;
            if (null != i) return i / 1e3 / 60;
            let n = Date.now(),
                l = 0;
            return null != e ? l = n - e : null != t && (l = n - t), Math.abs(l) / 1e3 / 60
        }
        update = () => {
            this.setState({
                time: this.getDiff()
            })
        };
        getTimeUnit(e, t, i) {
            let n = (0, a.Ul)(e, e => (function(e, t, i) {
                let n = m[i];
                if (null != n) {
                    let i = n[t];
                    if (null != i) return null != i[e]
                }
                return !1
            })(e, i, t));
            if (null == n) throw Error(`Could not get the time unit in PlayTime with time: ${e} for type: ${i} in location: ${t}`);
            return n
        }
        getType() {
            let {
                start: e,
                end: t,
                time: i
            } = this.props;
            return null != e ? "START" : null != t ? "END" : null != i ? "TIME" : null
        }
        render() {
            let {
                location: t,
                messageProps: i,
                isApplicationStreaming: n,
                enableUserHoverActivities: l,
                ...s
            } = this.props, {
                time: o
            } = this.state, d = this.getType();
            if (null == d) return null;
            let u = this.getTimeUnit(o, t, d),
                c = m[t][d];
            if (null == c) return null;
            let A = c[u],
                p = Math.floor((0, a.eZ)(o, u));
            return (0, r.jsx)(e, {
                ...s,
                children: A?.(p, i, n, l)
            })
        }
    }
}