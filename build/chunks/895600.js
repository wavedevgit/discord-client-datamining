/** chunk id: 895600 params = (module,exports,require) **/
s.d(t, {
    A: () => u
});
var r = s(627968);
s(64700);
var n = s(854378),
    i = s(651539),
    l = s(768397),
    a = s(401755),
    d = s(277316);
let c = {
    [a.IZ.CLASSROOM]: s(749576),
    [a.IZ.LOCAL_COMMUNITIES]: s(409682),
    [a.IZ.CREATORS_HOBBIES]: s(785161),
    [a.IZ.GLOBAL_COMMUNITIES]: s(371376),
    [a.IZ.FRIENDS_FAMILY]: s(585589),
    [a.IZ.STUDY_GROUPS]: s(500697),
    [a.IZ.CREATE_FROM_SCRATCH]: s(881377),
    [a.IZ.CAMPUS_CLUBS]: s(573230),
    [a.IZ.LEAGUE_CLUBS]: s(629278),
    [a.IZ.GITHUB_HACKATHON]: s(263135)
};

function u(e) {
    let {
        headerId: t,
        guildTemplate: s
    } = e, u = s.code, C = c[u];
    if (null != C) {
        let {
            header: e,
            description: c,
            author: o
        } = (0, i.A)(u);
        return (0, r.jsxs)("div", {
            children: [(0, r.jsx)("img", {
                className: d.Sl,
                src: C,
                alt: ""
            }), (0, r.jsx)(n.hE, {
                className: d.wx,
                id: t,
                children: e
            }), (0, r.jsx)(n.tK, {
                children: c
            }), s.state === a.QB.RESOLVED ? (0, r.jsx)(l.F, {
                className: d.t5,
                count: s.usageCount ?? 0,
                verifiedName: o
            }) : null]
        })
    }
    return (0, r.jsx)(l.A, {
        pillClassName: d.t5,
        guildTemplate: s,
        tall: !0
    })
}