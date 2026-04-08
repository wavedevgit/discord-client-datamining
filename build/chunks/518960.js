/** chunk id: 518960 params = (module,exports,require) **/
i.d(t, {
    R: () => I,
    V: () => x
});
var n = i(367513),
    a = i(843472),
    l = i(608299),
    o = i(23658),
    r = i(743445),
    s = i(565150),
    c = i(58149),
    d = i(313961),
    u = i(301169),
    h = i(522602),
    m = i(287809),
    p = i(954571),
    g = i(453771),
    _ = i(927578),
    f = i(382287),
    A = i(652215),
    T = i(381941),
    b = i(788868),
    E = i(985018);

function x(e, t, i) {
    let n = m.default.getCurrentUser(),
        a = e.guild_id,
        l = g.o2(a),
        r = Array.from(t).map(e => e.size),
        s = Array.from(t).map(e => null != e.type ? e.type : "unknown"),
        d = r.reduce((e, t) => e + t, 0),
        u = r.length > 0 ? Math.max(...r) : 0,
        h = r.length;
    if (u > l) {
        let t = i?.reduce((e, t) => e + t, 0);
        (0, c.zV)(A.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: a,
            user_individual_file_size_limit: l,
            pre_compression_file_sizes: r,
            pre_compression_aggregate_file_size: d,
            num_attachments: h,
            error_type: T.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: s,
            post_compression_file_sizes: i,
            post_compression_aggregate_file_size: t
        }), (0, o.openUploadError)({
            title: E.intl.string(E.t["/tGlcj"]),
            help: (0, f.WQ)(n, a),
            showPremiumUpsell: !(0, _.YE)(n, b.PremiumTypes.TIER_2),
            fileSize: u
        });
        return
    }(0, o.openUploadError)({
        title: E.intl.string(E.t["/tGlcj"]),
        help: E.intl.formatToPlainString(E.t.tUOJdH, {
            maxSize: g.Hb(g.bB())
        })
    })
}
async function I(e, t, i) {
    let {
        filesMetadata: c,
        requireConfirm: m = !0,
        isThumbnail: g = !1,
        origin: _
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != c && c.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let b = t.getGuildId(),
        I = Array.from(e),
        N = I.map(e => ({
            originalContentType: e.type,
            preCompressionSize: e.size
        }));
    if (await Promise.resolve(), (0, f.fJ)(I, b)) return void x(t, I);
    if (h.A.getUploadCount(t.id, i) + I.length > A.XgB) {
        (0, o.openUploadError)({
            title: E.intl.string(E.t.wOr6hB),
            help: E.intl.formatToPlainString(E.t["qqyp/e"], {
                limit: A.XgB
            })
        }), p.default.track(A.HAw.UPLOAD_FILE_LIMIT_ERROR, {
            existing_count: h.A.getUploadCount(t.id, i),
            new_count: I.length
        });
        return
    }
    if (t.type !== A.rbe.GUILD_VOICE && t.type !== A.rbe.GUILD_STAGE_VOICE || d.A.getChatOpen(t.id) || n.A.updateChatOpen(t.id, !0), m) {
        let e = I.map((e, t) => ({
            file: e,
            platform: s.xz.WEB,
            isThumbnail: g,
            origin: _,
            compressionMetadata: N[t],
            ...c?.[t]
        }));
        l.A.addFiles({
            files: e,
            channelId: t.id,
            draftType: i
        })
    } else {
        let e = I.map((e, i) => {
            let n = null != c ? c[i] : {};
            return new r.bK({
                file: e,
                platform: s.xz.WEB,
                isThumbnail: g,
                origin: _,
                compressionMetadata: N[i],
                ...n
            }, t.id)
        });
        a.A.sendMessage(t.id, {
            content: "",
            tts: !1,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: T.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, i, n) => {
                (0, u.k)({
                    file: e,
                    guildId: t.getGuildId(),
                    analyticsLocations: [],
                    code: i,
                    reason: n
                })
            }
        })
    }
}