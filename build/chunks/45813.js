/** Chunk was on 72752 **/
/** chunk id: 45813, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => A
}), r(896048);
var n = r(627968),
    o = r(64700),
    l = r(989349),
    a = r.n(l),
    i = r(158954),
    c = r(397927),
    d = r(871751),
    s = r(259407),
    u = r(607470),
    _ = r(472501),
    m = r(46054),
    h = r(652176),
    b = r(550997),
    p = r(652215),
    g = r(985018),
    f = r(903957);

function y(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
let O = m.A.reactParserFor(b.default.getDefaultRules(f)),
    j = {};
class x extends o.PureComponent {
    track(e, t, r) {
        this.props.track(e, t, r)
    }
    renderFooter() {
        return (0, n.jsxs)("div", {
            className: f.footer,
            children: [(0, n.jsx)(c.MzZ, {
                "aria-label": g.intl.string(g.t["/84uiD"]),
                className: f.socialLink,
                href: (0, _.A)(p.Pq7.TWITTER),
                target: "blank",
                children: (0, n.jsx)(c.p3p, {
                    size: "xs",
                    color: "currentColor"
                })
            }), (0, n.jsx)(c.MzZ, {
                "aria-label": g.intl.string(g.t["h0or/l"]),
                className: f.socialLink,
                href: p.w7I.FACEBOOK_URL,
                target: "blank",
                children: (0, n.jsx)(c.Zc1, {
                    size: "xs",
                    color: "currentColor"
                })
            }), (0, n.jsx)(c.MzZ, {
                "aria-label": g.intl.string(g.t["5uVPyf"]),
                className: f.socialLink,
                href: p.w7I.INSTAGRAM_URL,
                target: "blank",
                children: (0, n.jsx)(c.LyU, {
                    size: "xs",
                    color: "currentColor"
                })
            }), (0, n.jsx)(c.Text, {
                variant: "text-xs/normal",
                children: g.intl.string(g.t.EjVVI7)
            })]
        })
    }
    renderVideo() {
        let {
            changeLog: e
        } = this.props, t = e.youtube_video_id, o = e.video, l = e.image;
        if (null != t && "" !== t) return (0, n.jsx)(d.rr, {
            className: f.video,
            allowFullScreen: !1,
            href: "https://youtu.be/".concat(t),
            thumbnail: {
                url: "https://i.ytimg.com/vi/".concat(t, "/hqdefault.jpg"),
                width: 432,
                height: 240
            },
            video: {
                url: "https://www.youtube.com/embed/".concat(t, "?vq=large&rel=0&controls=0&showinfo=0"),
                width: 432,
                height: 240
            },
            provider: s.mt.YOUTUBE,
            maxWidth: 432,
            maxHeight: 240,
            renderVideoComponent: h.$o,
            renderImageComponent: h.LL,
            renderLinkComponent: h.bU,
            onPlay: () => {
                this.track(p.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0)
            }
        });
        if (null != o && "" !== o) {
            let e = o.startsWith("https://") ? o : r(274516)("./".concat(o));
            return (0, n.jsx)(u.A, {
                src: e,
                poster: l,
                width: 432,
                height: 240,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                className: f.video,
                onPlay: () => {
                    this.track(p.HAw.CHANGE_LOG_VIDEO_INTERACTED, {}, !0)
                }
            })
        }
        if (null == l || "" === l) return null;
        {
            let e = l.startsWith("https://") ? l : r(274516)("./".concat(l));
            return (0, n.jsx)("img", {
                className: f.image,
                alt: "",
                src: e,
                width: 432,
                height: 240
            })
        }
    }
    render() {
        var e, t;
        let r = this.props,
            {
                changeLog: o,
                onScroll: l,
                track: c
            } = r,
            d = function(e, t) {
                if (null == e) return {};
                var r, n, o, l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l
                }
                if (l = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = {},
                            l = Object.getOwnPropertyNames(e);
                        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                        return o
                    }(e, t), Object.getOwnPropertySymbols)
                    for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(r, ["changeLog", "onScroll", "track"]);
        return (0, n.jsx)(i.Modal, (e = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    y(e, t, r[t])
                })
            }
            return e
        }({}, d), t = t = {
            title: g.intl.string(g.t.LRmNAl),
            subtitle: g.intl.format(g.t.Fb8xx2, {
                date: null != o.date && "" !== o.date ? a()(o.date).toDate() : new Date
            }),
            actions: [],
            actionBarInput: this.renderFooter(),
            onClose: () => Promise.resolve(this.props.onClose()),
            scrollerRef: this.scrollerRef,
            onScroll: this.handleScroll,
            children: (0, n.jsxs)("div", {
                tabIndex: 0,
                role: "region",
                "aria-label": g.intl.string(g.t.HzBchE),
                children: [this.renderVideo(), O(o.body, !1, {
                    changeLog: this,
                    interpolations: j,
                    onLinkClick: this.trackLinkClick
                })]
            })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
            }
            return r
        })(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e))
    }
    constructor(...e) {
        super(...e), y(this, "scrollerRef", o.createRef()), y(this, "handleScroll", () => {
            let {
                current: e
            } = this.scrollerRef;
            if (null != e) {
                var t, r;
                null == (t = (r = this.props).onScroll) || t.call(r, e)
            }
        }), y(this, "trackLinkClick", e => {
            this.props.track(p.HAw.CHANGE_LOG_CTA_CLICKED, {
                cta_type: "inline_link",
                target: e
            }, !1)
        })
    }
}
let A = x