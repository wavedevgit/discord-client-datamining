/** chunk id: 518960 params = (module,exports,require) **/
n.d(t, {
    R: () => O,
    V: () => x
});
var r = n(367513),
    i = n(843472),
    a = n(608299),
    o = n(23658),
    l = n(743445),
    _ = n(565150),
    s = n(58149),
    c = n(313961),
    d = n(301169),
    u = n(522602),
    m = n(287809),
    p = n(954571),
    f = n(453771),
    h = n(927578),
    E = n(382287),
    I = n(652215),
    T = n(381941),
    g = n(788868),
    C = n(985018);

function x(e, t, n) {
    let r = m.default.getCurrentUser(),
        i = e.guild_id,
        a = f.o2(i),
        l = Array.from(t).map(e => e.size),
        _ = Array.from(t).map(e => null != e.type ? e.type : "unknown"),
        c = l.reduce((e, t) => e + t, 0),
        d = l.length > 0 ? Math.max(...l) : 0,
        u = l.length;
    if (d > a) {
        let t = n?.reduce((e, t) => e + t, 0);
        (0, s.zV)(I.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: i,
            user_individual_file_size_limit: a,
            pre_compression_file_sizes: l,
            pre_compression_aggregate_file_size: c,
            num_attachments: u,
            error_type: T.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: _,
            post_compression_file_sizes: n,
            post_compression_aggregate_file_size: t
        }), (0, o.openUploadError)({
            title: C.intl.string(C.t["/tGlcj"]),
            help: (0, E.WQ)(r, i),
            showPremiumUpsell: !(0, h.YE)(r, g.PremiumTypes.TIER_2),
            fileSize: d
        });
        return
    }(0, o.openUploadError)({
        title: C.intl.string(C.t["/tGlcj"]),
        help: C.intl.formatToPlainString(C.t.tUOJdH, {
            maxSize: f.Hb(f.bB())
        })
    })
}
async function O(e, t, n) {
    let {
        filesMetadata: s,
        requireConfirm: m = !0,
        isThumbnail: f = !1,
        origin: h
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != s && s.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let g = t.getGuildId(),
        O = Array.from(e),
        A = O.map(e => ({
            originalContentType: e.type,
            preCompressionSize: e.size
        }));
    if (await Promise.resolve(), (0, E.fJ)(O, g)) return void x(t, O);
    if (u.A.getUploadCount(t.id, n) + O.length > I.XgB) {
        (0, o.openUploadError)({
            title: C.intl.string(C.t.wOr6hB),
            help: C.intl.formatToPlainString(C.t["qqyp/e"], {
                limit: I.XgB
            })
        }), p.default.track(I.HAw.UPLOAD_FILE_LIMIT_ERROR, {
            existing_count: u.A.getUploadCount(t.id, n),
            new_count: O.length
        });
        return
    }
    if (t.type !== I.rbe.GUILD_VOICE && t.type !== I.rbe.GUILD_STAGE_VOICE || c.A.getChatOpen(t.id) || r.A.updateChatOpen(t.id, !0), m) {
        let e = O.map((e, t) => ({
            file: e,
            platform: _.xz.WEB,
            isThumbnail: f,
            origin: h,
            compressionMetadata: A[t],
            ...s?.[t]
        }));
        a.A.addFiles({
            files: e,
            channelId: t.id,
            draftType: n
        })
    } else {
        let e = O.map((e, n) => {
            let r = null != s ? s[n] : {};
            return new l.bK({
                file: e,
                platform: _.xz.WEB,
                isThumbnail: f,
                origin: h,
                compressionMetadata: A[n],
                ...r
            }, t.id)
        });
        i.A.sendMessage(t.id, {
            content: "",
            tts: !1,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: T.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, n, r) => {
                (0, d.k)({
                    file: e,
                    guildId: t.getGuildId(),
                    analyticsLocations: [],
                    code: n,
                    reason: r
                })
            }
        })
    }
}