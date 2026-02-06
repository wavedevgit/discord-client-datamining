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
import qr.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements k {

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.android.replay.b f27731a;

    /* renamed from: b  reason: collision with root package name */
    private final r f27732b;

    /* renamed from: c  reason: collision with root package name */
    private final k7 f27733c;

    /* renamed from: d  reason: collision with root package name */
    private final s f27734d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Bitmap f27735e;

    /* renamed from: f  reason: collision with root package name */
    private AtomicReference f27736f;

    /* renamed from: g  reason: collision with root package name */
    private final io.sentry.util.a f27737g;

    /* renamed from: h  reason: collision with root package name */
    private final Lazy f27738h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f27739i;

    /* renamed from: j  reason: collision with root package name */
    private final l f27740j;

    /* renamed from: k  reason: collision with root package name */
    private final AtomicBoolean f27741k;

    /* renamed from: l  reason: collision with root package name */
    private final SurfaceTexture f27742l;

    /* renamed from: m  reason: collision with root package name */
    private final Surface f27743m;

    /* renamed from: n  reason: collision with root package name */
    private final Runnable f27744n;

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
            matrix.preScale(eVar.f27734d.e(), eVar.f27734d.f());
            return matrix;
        }
    }

    public e(io.sentry.android.replay.b executor, r rVar, k7 options, s config) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f27731a = executor;
        this.f27732b = rVar;
        this.f27733c = options;
        this.f27734d = config;
        this.f27736f = new AtomicReference(null);
        this.f27737g = new io.sentry.util.a();
        this.f27738h = qr.l.b(o.f48045i, new a());
        this.f27739i = new AtomicBoolean(false);
        this.f27740j = new l();
        this.f27741k = new AtomicBoolean(false);
        SurfaceTexture a10 = io.sentry.android.replay.screenshot.a.a(false);
        a10.setDefaultBufferSize(config.d(), config.c());
        this.f27742l = a10;
        this.f27743m = new Surface(a10);
        p.a("ReplayCanvasStrategy");
        this.f27744n = new Runnable() { // from class: io.sentry.android.replay.screenshot.b
            @Override // java.lang.Runnable
            public final void run() {
                e.j(e.this);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(e eVar) {
        Bitmap bitmap = eVar.f27735e;
        if (bitmap != null) {
            synchronized (bitmap) {
                try {
                    if (!bitmap.isRecycled()) {
                        bitmap.recycle();
                    }
                    Unit unit = Unit.f32008a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
        eVar.f27743m.release();
        eVar.f27742l.release();
    }

    private final Matrix i() {
        return (Matrix) this.f27738h.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(final e eVar) {
        if (eVar.f27741k.get()) {
            eVar.f27733c.getLogger().c(SentryLevel.DEBUG, "Canvas Strategy already closed, skipping picture render", new Object[0]);
            return;
        }
        Picture picture = (Picture) eVar.f27736f.getAndSet(null);
        if (picture == null) {
            return;
        }
        try {
            Canvas lockHardwareCanvas = eVar.f27743m.lockHardwareCanvas();
            lockHardwareCanvas.drawColor(-16777216, PorterDuff.Mode.CLEAR);
            picture.draw(lockHardwareCanvas);
            eVar.f27743m.unlockCanvasAndPost(lockHardwareCanvas);
            if (eVar.f27735e == null) {
                a1 a10 = eVar.f27737g.a();
                if (eVar.f27735e == null) {
                    eVar.f27735e = Bitmap.createBitmap(eVar.f27734d.d(), eVar.f27734d.c(), Bitmap.Config.ARGB_8888);
                }
                Unit unit = Unit.f32008a;
                cs.a.a(a10, null);
            }
            if (eVar.f27741k.get()) {
                eVar.f27733c.getLogger().c(SentryLevel.DEBUG, "Canvas Strategy already closed, skipping pixel copy request", new Object[0]);
                return;
            }
            Surface surface = eVar.f27743m;
            Bitmap bitmap = eVar.f27735e;
            Intrinsics.checkNotNull(bitmap);
            PixelCopy.request(surface, bitmap, new PixelCopy.OnPixelCopyFinishedListener() { // from class: io.sentry.android.replay.screenshot.d
                @Override // android.view.PixelCopy.OnPixelCopyFinishedListener
                public final void onPixelCopyFinished(int i10) {
                    e.k(e.this, i10);
                }
            }, eVar.f27731a.m());
        } catch (Throwable th2) {
            eVar.f27733c.getLogger().b(SentryLevel.ERROR, "Canvas Strategy: picture render failed", th2);
            eVar.f27739i.set(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(e eVar, int i10) {
        r rVar;
        if (eVar.f27741k.get()) {
            eVar.f27733c.getLogger().c(SentryLevel.DEBUG, "CanvasStrategy is closed, ignoring capture result", new Object[0]);
        } else if (i10 == 0) {
            eVar.f27739i.set(true);
            Bitmap bitmap = eVar.f27735e;
            if (bitmap != null && !bitmap.isRecycled() && (rVar = eVar.f27732b) != null) {
                rVar.m(bitmap);
            }
        } else {
            ILogger logger = eVar.f27733c.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            logger.c(sentryLevel, "Canvas Strategy: PixelCopy failed with code " + i10, new Object[0]);
            eVar.f27739i.set(false);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public boolean a() {
        return this.f27739i.get();
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void b() {
        Bitmap bitmap;
        r rVar;
        if (a() && (bitmap = this.f27735e) != null && !bitmap.isRecycled() && (rVar = this.f27732b) != null) {
            rVar.m(bitmap);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void c(View root) {
        Intrinsics.checkNotNullParameter(root, "root");
        if (!this.f27741k.get()) {
            Picture picture = new Picture();
            Canvas beginRecording = picture.beginRecording(this.f27734d.d(), this.f27734d.c());
            Intrinsics.checkNotNullExpressionValue(beginRecording, "beginRecording(...)");
            this.f27740j.e(beginRecording);
            this.f27740j.setMatrix(i());
            root.draw(this.f27740j);
            picture.endRecording();
            if (!this.f27741k.get()) {
                this.f27736f.set(picture);
                l(this.f27731a.m(), new io.sentry.android.replay.util.j("screenshot_recorder.canvas", this.f27744n));
            }
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void close() {
        this.f27741k.set(true);
        l(this.f27731a.m(), new io.sentry.android.replay.util.j("CanvasStrategy.close", new Runnable() { // from class: io.sentry.android.replay.screenshot.c
            @Override // java.lang.Runnable
            public final void run() {
                e.h(e.this);
            }
        }));
        this.f27736f.getAndSet(null);
    }

    public final void l(Handler handler, io.sentry.android.replay.util.j runnable) {
        Intrinsics.checkNotNullParameter(handler, "<this>");
        Intrinsics.checkNotNullParameter(runnable, "runnable");
        try {
            handler.post(runnable);
        } catch (Throwable th2) {
            ILogger logger = this.f27733c.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            logger.b(sentryLevel, "Canvas Strategy: failed to post runnable " + runnable.a(), th2);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void onContentChanged() {
    }
}
