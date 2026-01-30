/** Chunk was on 81008 **/
/** chunk id: 572723, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => A
}), n(228524), n(638769), n(896048), n(134528), n(947204);
var i = n(627968),
    r = n(64700),
    l = n(835245),
    a = n(621466),
    o = n(311907),
    s = n(562465),
    u = n(843282),
    c = n(732955),
    d = n(397927),
    m = n(817363),
    v = n(565150),
    p = n(521502),
    h = n(851023),
    f = n(349688),
    x = n(914905),
    g = n(101555),
    b = n(386976),
    j = n(32523),
    y = n(287809),
    _ = n(486020),
    w = n(405269),
    O = n(723702),
    S = n(256252),
    k = n(382913),
    E = n(985018),
    C = n(433963);

function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i
        })
    }
    return e
}
let L = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map(e => ({
    id: e,
    label: e,
    value: e
}));

function A(e) {
    var t, A, T, N;
    let {
        transitionState: I,
        onClose: D
    } = e, B = r.useRef(null), R = r.useRef(null), [M, V] = r.useState(""), [z, H] = r.useState(""), [W, Y] = r.useState(), [K, q] = r.useState(""), [U, F] = r.useState([]), [G, Z] = r.useState(), [J, X] = r.useState(), [Q, $] = r.useState(!1), [ee, et] = r.useState(""), [en, ei] = r.useState(function(e) {
        switch (e) {
            case "windows":
                return "Windows";
            case "macos":
                return "Mac OS X";
            case "linux":
                return "Linux"
        }
        return ""
    }((0, O.getOS)())), [er, el] = r.useState(""), [ea, eo] = r.useState(""), [es, eu] = r.useState(""), [ec, ed] = r.useState(""), [em, ev] = r.useState(!1), [ep, eh] = r.useState(!1), [ef, ex] = r.useState(!1), [eg, eb] = r.useState(null);
    r.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        s.Bo.get({
            url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
            query: {
                cache: e
            },
            rejectWithError: !0
        }).then(e => {
            if (null != e.body && "b5b3dc980c0a6d94253e8af4a82f70d3b7bbbb66" !== e.body.hash) {
                let e = new Date("1769790397476"),
                    t = new Date,
                    n = (0, w.Tf)(t, e);
                n.hours > 6 && eb(n.hours)
            }
        })
    }, []);
    let ej = (0, o.bG)([y.default], () => {
            let e = y.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal())
        }),
        ey = (0, o.bG)([p.A], () => {
            var e;
            return null == (e = p.A.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web
        }),
        {
            overridesInfo: e_
        } = (0, j.hI)(),
        {
            overridesInfo: ew
        } = (0, b.op)(),
        eO = Object.entries(P({}, e_, ew)).map(e => {
            let [t, {
                variantId: n
            }] = e;
            return {
                experimentId: t,
                variantId: n
            }
        });
    async function eS() {
        var e, t;
        if (ex(!1), "" === M || "" === z || null == W) return void ev(!0);
        let r = null == G || null == (t = G.features) ? void 0 : t.find(e => (0, S.wY)(e) === J);
        eh(!0), ev(!1);
        let l = (0, k.B)(U.map(e => {
                let {
                    item: t
                } = e;
                return t
            })),
            a = await (0, S.zC)({
                name: M,
                description: z,
                priority: W,
                feature: r,
                url: K,
                buildOverride: null != (e = null == ey ? void 0 : ey.id) ? e : null,
                experimentOverrides: eO
            }, !0 === Q ? {
                overridePlatformInformation: Q,
                device: ee,
                operatingSystem: en,
                operatingSystemVersion: er,
                clientVersion: ea,
                clientBuildNumber: es,
                locale: ec
            } : {
                overridePlatformInformation: Q
            }, l).catch(() => ex(!0));
        eh(!1), null != a && a.ok ? (ej && window.open(a.body.permalink_url, "_blank"), D(), (0, d.mMO)(async () => {
            let {
                default: e
            } = await n.e("71256").then(n.bind(n, 369323));
            return t => {
                var n, r;
                return (0, i.jsx)(e, (n = P({}, t), r = r = {
                    asanaTask: a.body
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, i)
                    }
                    return n
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }), n))
            }
        })) : ex(!0)
    }
    return r.useEffect(() => {
        async function e() {
            Z(await (0, S.xt)())
        }
        ej && e()
    }, [ej]), r.useEffect(() => {
        if (U.length > 0) {
            var e;
            null == (e = R.current) || e.scrollIntoView({
                behavior: "smooth",
                block: "end"
            })
        }
    }, [U]), r.useEffect(() => {
        let e = e => {
            var t, n;
            let i = null == (t = e.clipboardData) ? void 0 : t.files;
            if (null != i && i.length > 0) {
                let t = Array.from(i).filter(e => e.type.startsWith("image/"));
                if (t.length > 0) {
                    e.preventDefault(), e.stopPropagation();
                    let n = t.at(0);
                    void 0 !== n && F(e => e.some(e => {
                        var t;
                        return e.filename === n.name && (null == (t = e.item.file) ? void 0 : t.size) === n.size
                    }) ? e : [...e, new v.Ay({
                        id: (0, l.A)(),
                        file: n,
                        platform: v.xz.WEB,
                        origin: "clipboard"
                    })])
                }
            }
            let r = document.activeElement;
            if (!((0, a.vq)(r, HTMLInputElement) || (0, a.vq)(r, HTMLTextAreaElement))) {
                let t = null == (n = e.clipboardData) ? void 0 : n.getData("text");
                null != t && (e.preventDefault(), e.stopPropagation(), H(z.concat(t)))
            }
        };
        return document.addEventListener("paste", e, !0), () => {
            document.removeEventListener("paste", e, !0)
        }
    }, [z]), (0, i.jsx)(c.aFV, {
        size: "md",
        transitionState: I,
        "aria-label": E.intl.string(E.t.mCCdwi),
        title: E.intl.string(E.t["5LqopY"]),
        actions: [{
            variant: "secondary",
            text: E.intl.string(E.t["ETE/oC"]),
            onClick: D,
            autoFocus: !1
        }, {
            variant: "primary",
            text: ej ? "Submit and Open Report" : "Submit Report",
            loading: ep,
            onClick: eS,
            autoFocus: !1
        }],
        onClose: D,
        children: (0, i.jsxs)("div", {
            children: [(0, i.jsxs)(d.BJc, {
                gap: 8,
                children: [null != ey && (0, i.jsxs)(d.wx6, {
                    type: "critical",
                    children: [(0, i.jsx)(d.Heading, {
                        variant: "heading-md/medium",
                        children: E.intl.string(E.t["ZP/hEx"])
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        children: E.intl.format(E.t["yY60+7"], {
                            buildOverrideHook: () => (0, i.jsx)("b", {
                                children: null == ey ? void 0 : ey.id
                            })
                        })
                    })]
                }), null == ey && null != eg && (0, i.jsxs)(d.wx6, {
                    type: "critical",
                    children: [(0, i.jsx)(d.Heading, {
                        variant: "heading-md/medium",
                        children: E.intl.formatToPlainString(E.t["ql2Q/e"], {
                            hours: eg
                        })
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        children: E.intl.string(E.t.x18RUs)
                    })]
                }), ej && Object.keys(eO).length > 0 && (0, i.jsxs)(d.wx6, {
                    type: "critical",
                    children: [(0, i.jsx)(d.Heading, {
                        variant: "heading-md/medium",
                        children: "You have the following experiments overridden:"
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        children: eO.map(e => (0, i.jsxs)("div", {
                            children: [e.experimentId, " (variant ", e.variantId, ")"]
                        }, e.experimentId))
                    })]
                })]
            }), (0, i.jsxs)(d.BJc, {
                gap: 24,
                padding: {
                    top: 8,
                    bottom: 8
                },
                children: [(0, i.jsx)(d.ksK, {
                    label: E.intl.string(E.t.OZRgjw),
                    error: em && "" === M ? E.intl.string(E.t.EkokLy) : null,
                    placeholder: "Something is broken on this screen.",
                    type: "text",
                    value: M,
                    maxLength: 100,
                    onChange: V,
                    autoFocus: !0
                }), (0, i.jsx)(d.fs1, {
                    label: E.intl.string(E.t["1SplH2"]),
                    error: em && "" === z ? E.intl.string(E.t.EkokLy) : null,
                    placeholder: "What did you expect to see?",
                    value: z,
                    onChange: H,
                    description: ej ? "You can add additional information/media on the ticket after submitting" : void 0
                }), (0, i.jsx)(u.Te, {
                    label: E.intl.string(E.t.xMXLda),
                    errorMessage: em && void 0 === W ? E.intl.string(E.t.EkokLy) : null,
                    renderOptionLabel: e => {
                        let t;
                        return t = e.priority, (0, i.jsxs)("div", {
                            className: C.jS,
                            children: [(0, i.jsxs)("div", {
                                className: C.Kt,
                                children: [(0, i.jsx)("img", {
                                    alt: "",
                                    className: C.YN,
                                    src: (0, _._O)({
                                        id: t.emoji,
                                        animated: !0,
                                        size: 48
                                    })
                                }), (0, i.jsx)(d.Text, {
                                    color: "text-strong",
                                    variant: "text-sm/semibold",
                                    className: C.n8,
                                    children: t.title
                                })]
                            }), (0, i.jsx)(d.Text, {
                                color: "text-default",
                                variant: "text-xs/normal",
                                className: C.dP,
                                children: t.description
                            })]
                        })
                    },
                    onChange: Y,
                    options: (0, S.lx)().map(e => ({
                        priority: e,
                        value: e.value,
                        label: e.title
                    })),
                    optionClassName: C.sI,
                    value: W,
                    maxVisibleItems: 4,
                    closeOnSelect: !0,
                    "data-migration-pending": !0
                }), ej && (0, i.jsx)(d.ZiE, {
                    selectionMode: "single",
                    label: E.intl.string(E.t["77VVd8"]),
                    value: J,
                    options: null != (t = null == G || null == (N = G.features) || null == (T = N.filter(e => "" !== (0, S.wY)(e))) || null == (A = T.map(e => {
                        var t;
                        return {
                            id: (0, S.wY)(e),
                            label: null != (t = e.name) ? t : "",
                            value: (0, S.wY)(e)
                        }
                    })) ? void 0 : A.sort((e, t) => e.label.localeCompare(t.label))) ? t : [],
                    disabled: null == G,
                    onSelectionChange: e => X(e)
                }), (0, i.jsx)(d.ksK, {
                    label: E.intl.string(E.t["7p5pqh"]),
                    placeholder: E.intl.string(E.t.HewMzo),
                    type: "text",
                    value: K,
                    maxLength: 5e3,
                    onChange: q
                }), (0, i.jsx)(d.Checkbox, {
                    checked: Q,
                    onChange: e => $(e),
                    label: E.intl.string(E.t.ayhqiH)
                }), Q ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(d.ksK, {
                        label: E.intl.string(E.t.rrI4Tk),
                        placeholder: "Device",
                        value: ee,
                        onChange: e => et(e)
                    }), (0, i.jsx)(d.l6P, {
                        label: E.intl.string(E.t.kcHxi6),
                        value: en,
                        options: L,
                        onSelectionChange: ei,
                        selectionMode: "single",
                        fullWidth: !0
                    }), (0, i.jsx)(d.ksK, {
                        label: E.intl.string(E.t.rEtxdg),
                        placeholder: "Operating System Version",
                        value: er,
                        onChange: e => el(e)
                    }), (0, i.jsx)(d.ksK, {
                        label: E.intl.string(E.t["wy1M/t"]),
                        placeholder: "Client Version",
                        value: ea,
                        onChange: e => eo(e)
                    }), (0, i.jsx)(d.ksK, {
                        label: E.intl.string(E.t.f7kbVu),
                        placeholder: "Client Build Number",
                        value: es,
                        onChange: e => eu(e)
                    }), (0, i.jsx)(d.ksK, {
                        label: E.intl.string(E.t["4Z5+zg"]),
                        placeholder: "Locale",
                        value: ec,
                        onChange: e => ed(e)
                    })]
                }) : null, (0, i.jsx)(d.Button, {
                    variant: "secondary",
                    text: E.intl.string(E.t.HVxmOD),
                    onClick: () => {
                        var e;
                        null == (e = B.current) || e.activateUploadDialogue()
                    },
                    fullWidth: !0
                }), (0, i.jsx)("div", {
                    className: C.Fg,
                    children: (0, i.jsx)(m.A, {
                        ref: B,
                        onChange: e => {
                            var t, n;
                            (null == (n = e.currentTarget) || null == (t = n.files) ? void 0 : t[0]) != null && F([...U, ...Array.from(e.currentTarget.files).map(e => new v.Ay({
                                id: (0, l.A)(),
                                file: e,
                                platform: v.xz.WEB,
                                origin: "file_picker"
                            }))])
                        },
                        multiple: !0
                    })
                }), U.length > 0 ? (0, i.jsx)(d.D0$, {
                    label: "Preview",
                    children: (0, i.jsx)("div", {
                        ref: R,
                        className: C.ZO,
                        children: U.length > 0 && U.map(e => (0, i.jsxs)("div", {
                            className: C.oh,
                            children: [(0, i.jsxs)("div", {
                                children: [(0, i.jsx)(x.J, {
                                    size: f.L.SMALL,
                                    upload: e
                                }), (0, i.jsx)("div", {
                                    className: C.eA,
                                    children: (0, i.jsx)(g.Ay, {
                                        children: (0, i.jsx)(h.A, {
                                            tooltip: E.intl.string(E.t.vN7REz),
                                            onClick: () => {
                                                var t;
                                                return t = e.id, void F(U.filter(e => e.id !== t))
                                            },
                                            dangerous: !0,
                                            children: (0, i.jsx)(d.ucK, {
                                                size: "md",
                                                color: "currentColor"
                                            })
                                        })
                                    })
                                })]
                            }), (0, i.jsx)(d.Text, {
                                variant: "text-xxs/medium",
                                color: "text-subtle",
                                children: e.filename
                            })]
                        }, e.id))
                    })
                }) : null, ef ? (0, i.jsx)(d.Text, {
                    color: "text-feedback-critical",
                    variant: "text-sm/normal",
                    children: "Something went wrong, try again!"
                }) : null]
            })]
        })
    })
}