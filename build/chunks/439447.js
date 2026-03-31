/** chunk id: 439447 params = (module,exports,require) **/
i.d(t, {
    A: () => p
});
var n, a, l = i(627968),
    s = i(64700),
    r = i(499979),
    o = i(451988),
    c = i(985018),
    d = ((n = d || {}).ACTIVITY_FEED = "ACTIVITY_FEED", n.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW", n.USER_ACTIVITY = "USER_ACTIVITY", n.USER_ACTIVITY_VOICE_USER = "USER_ACTIVITY_VOICE_USER", n.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED", n.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED", n.VOICE_CHANNEL_HISTORY = "VOICE_CHANNEL_HISTORY", n),
    u = ((a = u || {}).START = "START", a.END = "END", a.TIME = "TIME", a);
let m = e => (t, i) => null == i ? "" : c.intl.format(e(), {
        time: t,
        ...i
    }),
    _ = {
        ACTIVITY_FEED: {
            START: {
                [r.pJ.SECONDS]: () => c.intl.string(c.t["ahzZr+"]),
                [r.pJ.MINUTES]: e => c.intl.formatToPlainString(c.t["03mIHW"], {
                    time: e
                }),
                [r.pJ.HOURS]: e => c.intl.formatToPlainString(c.t.eNoooU, {
                    time: e
                }),
                [r.pJ.DAYS]: e => c.intl.formatToPlainString(c.t["2rUo/p"], {
                    time: e
                })
            },
            END: {
                [r.pJ.SECONDS]: () => c.intl.string(c.t.EluAd9),
                [r.pJ.MINUTES]: e => c.intl.formatToPlainString(c.t.BZxG8Z, {
                    time: e
                }),
                [r.pJ.HOURS]: e => c.intl.formatToPlainString(c.t.cRMUpw, {
                    time: e
                }),
                [r.pJ.DAYS]: e => c.intl.formatToPlainString(c.t.yP1T84, {
                    time: e
                }),
                [r.pJ.WEEKS]: e => c.intl.formatToPlainString(c.t.AWkdqe, {
                    time: e
                }),
                [r.pJ.MONTHS]: e => c.intl.formatToPlainString(c.t.upamA7, {
                    time: e
                }),
                [r.pJ.YEARS]: e => c.intl.formatToPlainString(c.t.vfMC2h, {
                    time: e
                })
            }
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [r.pJ.SECONDS]: m(() => c.t.Bf3PRU),
                [r.pJ.MINUTES]: m(() => c.t["A9P+dT"]),
                [r.pJ.HOURS]: m(() => c.t.KwVzfh),
                [r.pJ.DAYS]: m(() => c.t.hbUpBN)
            },
            END: {
                [r.pJ.SECONDS]: e => c.intl.formatToPlainString(c.t.C3MTOD, {
                    seconds: e
                }),
                [r.pJ.MINUTES]: e => c.intl.formatToPlainString(c.t["GqQ/Y9"], {
                    minutes: e
                }),
                [r.pJ.HOURS]: e => c.intl.formatToPlainString(c.t.c5zfWZ, {
                    hours: e
                }),
                [r.pJ.DAYS]: e => c.intl.formatToPlainString(c.t.amjnaI, {
                    days: e
                })
            }
        },
        USER_ACTIVITY: {
            START: {
                [r.pJ.SECONDS]: function(e, t) {
                    return arguments.length > 2 && void 0 !== arguments[2] && arguments[2], c.intl.string(c.t["ahzZr+"])
                },
                [r.pJ.MINUTES]: function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return i ? c.intl.formatToPlainString(c.t["03mIHW"], {
                        time: e
                    }) : n ? c.intl.formatToPlainString(c.t.w5w79N, {
                        time: e
                    }) : c.intl.formatToPlainString(c.t["vQml+P"], {
                        time: e
                    })
                },
                [r.pJ.HOURS]: function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return i ? c.intl.formatToPlainString(c.t.eNoooU, {
                        time: e
                    }) : n ? c.intl.formatToPlainString(c.t.EPkGyE, {
                        time: e
                    }) : c.intl.formatToPlainString(c.t["4Wq+6x"], {
                        time: e
                    })
                },
                [r.pJ.DAYS]: function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return i ? c.intl.formatToPlainString(c.t["2rUo/p"], {
                        time: e
                    }) : n ? c.intl.formatToPlainString(c.t.V3g3dS, {
                        time: e
                    }) : c.intl.formatToPlainString(c.t["jN3/fR"], {
                        time: e
                    })
                }
            }
        },
        USER_ACTIVITY_VOICE_USER: {
            START: {
                [r.pJ.SECONDS]: () => c.intl.string(c.t["ahzZr+"]),
                [r.pJ.MINUTES]: function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return i ? c.intl.formatToPlainString(c.t["03mIHW"], {
                        time: e
                    }) : c.intl.formatToPlainString(c.t.w5w79N, {
                        time: e
                    })
                },
                [r.pJ.HOURS]: function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return i ? c.intl.formatToPlainString(c.t.eNoooU, {
                        time: e
                    }) : c.intl.formatToPlainString(c.t.EPkGyE, {
                        time: e
                    })
                },
                [r.pJ.DAYS]: function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return i ? c.intl.formatToPlainString(c.t["2rUo/p"], {
                        time: e
                    }) : c.intl.formatToPlainString(c.t.V3g3dS, {
                        time: e
                    })
                }
            }
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [r.pJ.NONE]: () => c.intl.string(c.t.LqDiCt),
                [r.pJ.SECONDS]: e => c.intl.formatToPlainString(c.t.xDIDBL, {
                    time: e
                }),
                [r.pJ.MINUTES]: e => c.intl.formatToPlainString(c.t.KGqJce, {
                    time: e
                }),
                [r.pJ.HOURS]: e => c.intl.formatToPlainString(c.t.OLchUE, {
                    time: e
                })
            }
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [r.pJ.NONE]: () => c.intl.string(c.t.EoWLru),
                [r.pJ.SECONDS]: () => c.intl.string(c.t.QTHa8b),
                [r.pJ.MINUTES]: e => c.intl.formatToPlainString(c.t.SVEfcd, {
                    time: e
                }),
                [r.pJ.HOURS]: e => c.intl.formatToPlainString(c.t["0Gbusd"], {
                    time: e
                }),
                [r.pJ.DAYS]: e => c.intl.formatToPlainString(c.t.hnPZZ7, {
                    time: e
                }),
                [r.pJ.WEEKS]: e => c.intl.formatToPlainString(c.t.L3fTpL, {
                    time: e
                }),
                [r.pJ.MONTHS]: e => c.intl.formatToPlainString(c.t.xAFWQV, {
                    time: e
                }),
                [r.pJ.YEARS]: e => c.intl.formatToPlainString(c.t["9Yr3NW"], {
                    time: e
                })
            }
        },
        VOICE_CHANNEL_HISTORY: {
            END: {
                [r.pJ.SECONDS]: () => c.intl.string(c.t["1QsMmY"]),
                [r.pJ.MINUTES]: e => c.intl.formatToPlainString(c.t.LRNgHp, {
                    count: e
                }),
                [r.pJ.HOURS]: e => c.intl.formatToPlainString(c.t.raJpz3, {
                    count: e
                }),
                [r.pJ.DAYS]: e => c.intl.formatToPlainString(c.t.KkvKhi, {
                    count: e
                })
            }
        }
    };

function p(e) {
    return class extends s.PureComponent {
        static Locations = d;
        static Types = u;
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
                a = 0;
            return null != e ? a = n - e : null != t && (a = n - t), Math.abs(a) / 1e3 / 60
        }
        update = () => {
            this.setState({
                time: this.getDiff()
            })
        };
        getTimeUnit(e, t, i) {
            let n = (0, r.Ul)(e, e => (function(e, t, i) {
                let n = _[i];
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
                enableUserHoverActivities: a,
                ...s
            } = this.props, {
                time: o
            } = this.state, c = this.getType();
            if (null == c) return null;
            let d = this.getTimeUnit(o, t, c),
                u = _[t][c];
            if (null == u) return null;
            let m = u[d],
                p = Math.floor((0, r.eZ)(o, d));
            return (0, l.jsx)(e, {
                ...s,
                children: m?.(p, i, n, a)
            })
        }
    }
}