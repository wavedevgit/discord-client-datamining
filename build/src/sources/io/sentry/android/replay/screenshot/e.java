package io.sentry.android.replay.screenshot;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Picture;
import android.graphics.PorterDuff;
import android.graphics.SurfaceTexture;
import android.os.Handler;
import android.view.PixelCopy;
import android.view.Surface;
import android.view.View;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.a1;
import io.sentry.android.replay.r;
import io.sentry.android.replay.s;
import io.sentry.k7;
import io.sentry.util.p;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicReference;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import or.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements k {

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.android.replay.b f28587a;

    /* renamed from: b  reason: collision with root package name */
    private final r f28588b;

    /* renamed from: c  reason: collision with root package name */
    private final k7 f28589c;

    /* renamed from: d  reason: collision with root package name */
    private final s f28590d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Bitmap f28591e;

    /* renamed from: f  reason: collision with root package name */
    private AtomicReference f28592f;

    /* renamed from: g  reason: collision with root package name */
    private final io.sentry.util.a f28593g;

    /* renamed from: h  reason: collision with root package name */
    private final Lazy f28594h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f28595i;

    /* renamed from: j  reason: collision with root package name */
    private final l f28596j;

    /* renamed from: k  reason: collision with root package name */
    private final AtomicBoolean f28597k;

    /* renamed from: l  reason: collision with root package name */
    private final SurfaceTexture f28598l;

    /* renamed from: m  reason: collision with root package name */
    private final Surface f28599m;

    /* renamed from: n  reason: collision with root package name */
    private final Runnable f28600n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function0 {
        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Matrix invoke() {
            Matrix matrix = new Matrix();
            e eVar = e.this;
            matrix.preScale(eVar.f28590d.e(), eVar.f28590d.f());
            return matrix;
        }
    }

    public e(io.sentry.android.replay.b executor, r rVar, k7 options, s config) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f28587a = executor;
        this.f28588b = rVar;
        this.f28589c = options;
        this.f28590d = config;
        this.f28592f = new AtomicReference(null);
        this.f28593g = new io.sentry.util.a();
        this.f28594h = or.l.b(o.f44233i, new a());
        this.f28595i = new AtomicBoolean(false);
        this.f28596j = new l();
        this.f28597k = new AtomicBoolean(false);
        SurfaceTexture a10 = io.sentry.android.replay.screenshot.a.a(false);
        a10.setDefaultBufferSize(config.d(), config.c());
        this.f28598l = a10;
        this.f28599m = new Surface(a10);
        p.a("ReplayCanvasStrategy");
        this.f28600n = new Runnable() { // from class: io.sentry.android.replay.screenshot.b
            @Override // java.lang.Runnable
            public final void run() {
                e.j(e.this);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(e eVar) {
        Bitmap bitmap = eVar.f28591e;
        if (bitmap != null) {
            synchronized (bitmap) {
                try {
                    if (!bitmap.isRecycled()) {
                        bitmap.recycle();
                    }
                    Unit unit = Unit.f31988a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
        eVar.f28599m.release();
        eVar.f28598l.release();
    }

    private final Matrix i() {
        return (Matrix) this.f28594h.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(final e eVar) {
        if (eVar.f28597k.get()) {
            eVar.f28589c.getLogger().c(SentryLevel.DEBUG, "Canvas Strategy already closed, skipping picture render", new Object[0]);
            return;
        }
        Picture picture = (Picture) eVar.f28592f.getAndSet(null);
        if (picture == null) {
            return;
        }
        try {
            Canvas lockHardwareCanvas = eVar.f28599m.lockHardwareCanvas();
            lockHardwareCanvas.drawColor(-16777216, PorterDuff.Mode.CLEAR);
            picture.draw(lockHardwareCanvas);
            eVar.f28599m.unlockCanvasAndPost(lockHardwareCanvas);
            if (eVar.f28591e == null) {
                a1 a10 = eVar.f28593g.a();
                if (eVar.f28591e == null) {
                    eVar.f28591e = Bitmap.createBitmap(eVar.f28590d.d(), eVar.f28590d.c(), Bitmap.Config.ARGB_8888);
                }
                Unit unit = Unit.f31988a;
                as.a.a(a10, null);
            }
            if (eVar.f28597k.get()) {
                eVar.f28589c.getLogger().c(SentryLevel.DEBUG, "Canvas Strategy already closed, skipping pixel copy request", new Object[0]);
                return;
            }
            Surface surface = eVar.f28599m;
            Bitmap bitmap = eVar.f28591e;
            Intrinsics.checkNotNull(bitmap);
            PixelCopy.request(surface, bitmap, new PixelCopy.OnPixelCopyFinishedListener() { // from class: io.sentry.android.replay.screenshot.d
                @Override // android.view.PixelCopy.OnPixelCopyFinishedListener
                public final void onPixelCopyFinished(int i10) {
                    e.k(e.this, i10);
                }
            }, eVar.f28587a.m());
        } catch (Throwable th2) {
            eVar.f28589c.getLogger().b(SentryLevel.ERROR, "Canvas Strategy: picture render failed", th2);
            eVar.f28595i.set(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(e eVar, int i10) {
        r rVar;
        if (eVar.f28597k.get()) {
            eVar.f28589c.getLogger().c(SentryLevel.DEBUG, "CanvasStrategy is closed, ignoring capture result", new Object[0]);
        } else if (i10 == 0) {
            eVar.f28595i.set(true);
            Bitmap bitmap = eVar.f28591e;
            if (bitmap != null && !bitmap.isRecycled() && (rVar = eVar.f28588b) != null) {
                rVar.m(bitmap);
            }
        } else {
            ILogger logger = eVar.f28589c.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            logger.c(sentryLevel, "Canvas Strategy: PixelCopy failed with code " + i10, new Object[0]);
            eVar.f28595i.set(false);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public boolean a() {
        return this.f28595i.get();
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void b() {
        Bitmap bitmap;
        r rVar;
        if (a() && (bitmap = this.f28591e) != null && !bitmap.isRecycled() && (rVar = this.f28588b) != null) {
            rVar.m(bitmap);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void c(View root) {
        Intrinsics.checkNotNullParameter(root, "root");
        if (!this.f28597k.get()) {
            Picture picture = new Picture();
            Canvas beginRecording = picture.beginRecording(this.f28590d.d(), this.f28590d.c());
            Intrinsics.checkNotNullExpressionValue(beginRecording, "beginRecording(...)");
            this.f28596j.e(beginRecording);
            this.f28596j.setMatrix(i());
            root.draw(this.f28596j);
            picture.endRecording();
            if (!this.f28597k.get()) {
                this.f28592f.set(picture);
                l(this.f28587a.m(), new io.sentry.android.replay.util.j("screenshot_recorder.canvas", this.f28600n));
            }
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void close() {
        this.f28597k.set(true);
        l(this.f28587a.m(), new io.sentry.android.replay.util.j("CanvasStrategy.close", new Runnable() { // from class: io.sentry.android.replay.screenshot.c
            @Override // java.lang.Runnable
            public final void run() {
                e.h(e.this);
            }
        }));
        this.f28592f.getAndSet(null);
    }

    public final void l(Handler handler, io.sentry.android.replay.util.j runnable) {
        Intrinsics.checkNotNullParameter(handler, "<this>");
        Intrinsics.checkNotNullParameter(runnable, "runnable");
        try {
            handler.post(runnable);
        } catch (Throwable th2) {
            ILogger logger = this.f28589c.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            logger.b(sentryLevel, "Canvas Strategy: failed to post runnable " + runnable.a(), th2);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void onContentChanged() {
    }
}
