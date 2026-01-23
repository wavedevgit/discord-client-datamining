/** Chunk was on 97492 **/
/** chunk id: 55294, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b,
    N: () => y
});
var r = n(64700),
    l = n(942381),
    i = n(465532),
    s = n(843472),
    a = n(608299),
    o = n(23658),
    c = n(425059),
    u = n(218152),
    d = n(451909),
    p = n(31717),
    h = n(522602),
    f = n(393309),
    g = n(381941),
    m = n(985018);

function b(e) {
    let {
        parentChannel: t,
        parentMessageId: n,
        threadSettings: l,
        privateThreadMode: c,
        location: u,
        onThreadCreated: b,
        useDefaultThreadName: A
    } = e, y = r.useCallback((e, t, n, r) => {
        s.A.sendMessage(e.id, d.Ay.parse(e, n), void 0, {
            eagerDispatch: !1,
            location: g.Hx.THREAD_CREATION,
            stickerIds: r,
            attachmentsToUpload: t,
            onAttachmentUploadError: (r, l, s, c) => {
                var u;
                (0, o.openUploadError)({
                    title: m.intl.string(m.t.B3vFdU),
                    help: null != (u = null == c ? void 0 : c.message) ? u : m.intl.string(m.t.zMEjJg)
                }), "" !== n && "" === p.A.getDraft(e.id, p.C.FirstThreadMessage) && i.A.saveDraft(e.id, n, p.C.FirstThreadMessage), 0 === h.A.getUploadCount(e.id, p.C.FirstThreadMessage) && a.A.setUploads({
                    channelId: e.id,
                    uploads: t,
                    draftType: p.C.FirstThreadMessage
                })
            }
        })
    }, []);
    return (0, f.r$)({
        parentChannel: t,
        parentMessageId: n,
        threadSettings: l,
        privateThreadMode: c,
        location: u,
        onThreadCreated: b,
        useDefaultThreadName: A,
        uploadHandler: y
    })
}
async function A(e) {
    let t = new c.A,
        n = await t.uploadFiles(e);
    return {
        uploaderFile: t._file,
        files: n
    }
}

function y(e) {
    let {
        parentChannel: t
    } = e, {
        name: n,
        appliedTags: r
    } = (0, u.kU)(e => {
        let {
            name: t,
            appliedTags: n
        } = e;
        return {
            name: t,
            appliedTags: n
        }
    }, l.x);
    return (0, f.w0)({
        parentChannel: t,
        name: n,
        appliedTags: r,
        upload: A
    })
}