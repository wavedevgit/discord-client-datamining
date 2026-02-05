package io.sentry.android.replay.video;

import android.media.MediaCodec;
import android.media.MediaCodecInfo;
import android.media.MediaCodecList;
import android.media.MediaCrypto;
import android.media.MediaFormat;
import android.util.Range;
import android.view.Surface;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.k7;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.text.StringsKt;
import or.l;
import or.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final k7 f28704a;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.android.replay.video.a f28705b;

    /* renamed from: c  reason: collision with root package name */
    private final Function0 f28706c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f28707d;

    /* renamed from: e  reason: collision with root package name */
    private final MediaCodec f28708e;

    /* renamed from: f  reason: collision with root package name */
    private final Lazy f28709f;

    /* renamed from: g  reason: collision with root package name */
    private final MediaCodec.BufferInfo f28710g;

    /* renamed from: h  reason: collision with root package name */
    private final io.sentry.android.replay.video.b f28711h;

    /* renamed from: i  reason: collision with root package name */
    private Surface f28712i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f28713d = new a();

        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        public final Boolean invoke() {
            boolean z10 = false;
            MediaCodecInfo[] codecInfos = new MediaCodecList(0).getCodecInfos();
            Intrinsics.checkNotNullExpressionValue(codecInfos, "getCodecInfos(...)");
            int length = codecInfos.length;
            int i10 = 0;
            while (true) {
                if (i10 >= length) {
                    break;
                }
                String name = codecInfos[i10].getName();
                Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                if (StringsKt.V(name, "c2.exynos", false, 2, null)) {
                    z10 = true;
                    break;
                }
                i10++;
            }
            return Boolean.valueOf(z10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function0 {
        b() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final MediaFormat invoke() {
            int a10 = c.this.g().a();
            try {
                MediaCodecInfo.VideoCapabilities videoCapabilities = c.this.e().getCodecInfo().getCapabilitiesForType(c.this.g().d()).getVideoCapabilities();
                if (!videoCapabilities.getBitrateRange().contains((Range<Integer>) Integer.valueOf(a10))) {
                    ILogger logger = c.this.h().getLogger();
                    SentryLevel sentryLevel = SentryLevel.DEBUG;
                    logger.c(sentryLevel, "Encoder doesn't support the provided bitRate: " + a10 + ", the value will be clamped to the closest one", new Object[0]);
                    Integer clamp = videoCapabilities.getBitrateRange().clamp(Integer.valueOf(a10));
                    Intrinsics.checkNotNullExpressionValue(clamp, "clamp(...)");
                    a10 = clamp.intValue();
                }
            } catch (Throwable th2) {
                c.this.h().getLogger().b(SentryLevel.DEBUG, "Could not retrieve MediaCodec info", th2);
            }
            MediaFormat createVideoFormat = MediaFormat.createVideoFormat(c.this.g().d(), c.this.g().f(), c.this.g().e());
            Intrinsics.checkNotNullExpressionValue(createVideoFormat, "createVideoFormat(...)");
            createVideoFormat.setInteger("color-format", 2130708361);
            createVideoFormat.setInteger("bitrate", a10);
            createVideoFormat.setFloat("frame-rate", c.this.g().c());
            createVideoFormat.setInteger("i-frame-interval", 6);
            return createVideoFormat;
        }
    }

    public c(k7 options, io.sentry.android.replay.video.a muxerConfig, Function0 function0) {
        MediaCodec createEncoderByType;
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(muxerConfig, "muxerConfig");
        this.f28704a = options;
        this.f28705b = muxerConfig;
        this.f28706c = function0;
        o oVar = o.f44233i;
        this.f28707d = l.b(oVar, a.f28713d);
        if (d()) {
            createEncoderByType = MediaCodec.createByCodecName("c2.android.avc.encoder");
        } else {
            createEncoderByType = MediaCodec.createEncoderByType(muxerConfig.d());
        }
        Intrinsics.checkNotNull(createEncoderByType);
        this.f28708e = createEncoderByType;
        this.f28709f = l.b(oVar, new b());
        this.f28710g = new MediaCodec.BufferInfo();
        String absolutePath = muxerConfig.b().getAbsolutePath();
        Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
        this.f28711h = new io.sentry.android.replay.video.b(absolutePath, muxerConfig.c());
    }

    /* JADX WARN: Code restructure failed: missing block: B:63:0x01e0, code lost:
        throw new java.lang.RuntimeException("encoderOutputBuffer " + r2 + " was null");
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void a(boolean r9) {
        /*
            Method dump skipped, instructions count: 481
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.android.replay.video.c.a(boolean):void");
    }

    private final boolean d() {
        return ((Boolean) this.f28707d.getValue()).booleanValue();
    }

    private final MediaFormat f() {
        return (MediaFormat) this.f28709f.getValue();
    }

    /* JADX WARN: Removed duplicated region for block: B:19:0x0054  */
    /* JADX WARN: Removed duplicated region for block: B:22:0x005c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void b(android.graphics.Bitmap r8) {
        /*
            r7 = this;
            java.lang.String r0 = "image"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r8, r0)
            java.lang.String r0 = android.os.Build.MANUFACTURER
            java.lang.String r1 = "MANUFACTURER"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
            java.lang.String r2 = "xiaomi"
            r3 = 1
            boolean r2 = kotlin.text.StringsKt.T(r0, r2, r3)
            r4 = 0
            if (r2 != 0) goto L4a
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
            java.lang.String r1 = "motorola"
            boolean r0 = kotlin.text.StringsKt.T(r0, r1, r3)
            if (r0 != 0) goto L4a
            io.sentry.android.replay.util.l r0 = io.sentry.android.replay.util.l.f28668a
            io.sentry.android.replay.util.l$a r1 = io.sentry.android.replay.util.l.a.SOC_MANUFACTURER
            r2 = 2
            java.lang.String r5 = io.sentry.android.replay.util.l.b(r0, r1, r4, r2, r4)
            java.lang.String r6 = "spreadtrum"
            boolean r5 = kotlin.text.StringsKt.A(r5, r6, r3)
            if (r5 != 0) goto L4a
            java.lang.String r0 = io.sentry.android.replay.util.l.b(r0, r1, r4, r2, r4)
            java.lang.String r1 = "unisoc"
            boolean r0 = kotlin.text.StringsKt.A(r0, r1, r3)
            if (r0 == 0) goto L3f
            goto L4a
        L3f:
            android.view.Surface r0 = r7.f28712i
            if (r0 == 0) goto L48
            android.graphics.Canvas r0 = r0.lockHardwareCanvas()
            goto L52
        L48:
            r0 = r4
            goto L52
        L4a:
            android.view.Surface r0 = r7.f28712i
            if (r0 == 0) goto L48
            android.graphics.Canvas r0 = r0.lockCanvas(r4)
        L52:
            if (r0 == 0) goto L58
            r1 = 0
            r0.drawBitmap(r8, r1, r1, r4)
        L58:
            android.view.Surface r8 = r7.f28712i
            if (r8 == 0) goto L5f
            r8.unlockCanvasAndPost(r0)
        L5f:
            r8 = 0
            r7.a(r8)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.android.replay.video.c.b(android.graphics.Bitmap):void");
    }

    public final long c() {
        return this.f28711h.a();
    }

    public final MediaCodec e() {
        return this.f28708e;
    }

    public final io.sentry.android.replay.video.a g() {
        return this.f28705b;
    }

    public final k7 h() {
        return this.f28704a;
    }

    public final void i() {
        try {
            Function0 function0 = this.f28706c;
            if (function0 != null) {
                function0.invoke();
            }
            a(true);
            this.f28708e.stop();
            this.f28708e.release();
            Surface surface = this.f28712i;
            if (surface != null) {
                surface.release();
            }
            this.f28711h.d();
        } catch (Throwable th2) {
            this.f28704a.getLogger().b(SentryLevel.DEBUG, "Failed to properly release video encoder", th2);
        }
    }

    public final void j() {
        this.f28708e.configure(f(), (Surface) null, (MediaCrypto) null, 1);
        this.f28712i = this.f28708e.createInputSurface();
        this.f28708e.start();
        a(false);
    }

    public /* synthetic */ c(k7 k7Var, io.sentry.android.replay.video.a aVar, Function0 function0, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(k7Var, aVar, (i10 & 4) != 0 ? null : function0);
    }
}
