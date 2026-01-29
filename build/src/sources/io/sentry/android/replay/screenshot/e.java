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
import ir.o;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicReference;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements k {

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.android.replay.b f29586a;

    /* renamed from: b  reason: collision with root package name */
    private final r f29587b;

    /* renamed from: c  reason: collision with root package name */
    private final k7 f29588c;

    /* renamed from: d  reason: collision with root package name */
    private final s f29589d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Bitmap f29590e;

    /* renamed from: f  reason: collision with root package name */
    private AtomicReference f29591f;

    /* renamed from: g  reason: collision with root package name */
    private final io.sentry.util.a f29592g;

    /* renamed from: h  reason: collision with root package name */
    private final Lazy f29593h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f29594i;

    /* renamed from: j  reason: collision with root package name */
    private final l f29595j;

    /* renamed from: k  reason: collision with root package name */
    private final AtomicBoolean f29596k;

    /* renamed from: l  reason: collision with root package name */
    private final SurfaceTexture f29597l;

    /* renamed from: m  reason: collision with root package name */
    private final Surface f29598m;

    /* renamed from: n  reason: collision with root package name */
    private final Runnable f29599n;

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
            matrix.preScale(eVar.f29589d.e(), eVar.f29589d.f());
            return matrix;
        }
    }

    public e(io.sentry.android.replay.b executor, r rVar, k7 options, s config) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f29586a = executor;
        this.f29587b = rVar;
        this.f29588c = options;
        this.f29589d = config;
        this.f29591f = new AtomicReference(null);
        this.f29592g = new io.sentry.util.a();
        this.f29593h = ir.l.a(o.f31104i, new a());
        this.f29594i = new AtomicBoolean(false);
        this.f29595j = new l();
        this.f29596k = new AtomicBoolean(false);
        SurfaceTexture a10 = io.sentry.android.replay.screenshot.a.a(false);
        a10.setDefaultBufferSize(config.d(), config.c());
        this.f29597l = a10;
        this.f29598m = new Surface(a10);
        p.a("ReplayCanvasStrategy");
        this.f29599n = new Runnable() { // from class: io.sentry.android.replay.screenshot.b
            @Override // java.lang.Runnable
            public final void run() {
                e.j(e.this);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(e eVar) {
        Bitmap bitmap = eVar.f29590e;
        if (bitmap != null) {
            synchronized (bitmap) {
                try {
                    if (!bitmap.isRecycled()) {
                        bitmap.recycle();
                    }
                    Unit unit = Unit.f33282a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
        eVar.f29598m.release();
        eVar.f29597l.release();
    }

    private final Matrix i() {
        return (Matrix) this.f29593h.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(final e eVar) {
        if (eVar.f29596k.get()) {
            eVar.f29588c.getLogger().c(SentryLevel.DEBUG, "Canvas Strategy already closed, skipping picture render", new Object[0]);
            return;
        }
        Picture picture = (Picture) eVar.f29591f.getAndSet(null);
        if (picture == null) {
            return;
        }
        try {
            Canvas lockHardwareCanvas = eVar.f29598m.lockHardwareCanvas();
            lockHardwareCanvas.drawColor(-16777216, PorterDuff.Mode.CLEAR);
            picture.draw(lockHardwareCanvas);
            eVar.f29598m.unlockCanvasAndPost(lockHardwareCanvas);
            if (eVar.f29590e == null) {
                a1 a10 = eVar.f29592g.a();
                if (eVar.f29590e == null) {
                    eVar.f29590e = Bitmap.createBitmap(eVar.f29589d.d(), eVar.f29589d.c(), Bitmap.Config.ARGB_8888);
                }
                Unit unit = Unit.f33282a;
                ur.a.a(a10, null);
            }
            if (eVar.f29596k.get()) {
                eVar.f29588c.getLogger().c(SentryLevel.DEBUG, "Canvas Strategy already closed, skipping pixel copy request", new Object[0]);
                return;
            }
            Surface surface = eVar.f29598m;
            Bitmap bitmap = eVar.f29590e;
            Intrinsics.checkNotNull(bitmap);
            PixelCopy.request(surface, bitmap, new PixelCopy.OnPixelCopyFinishedListener() { // from class: io.sentry.android.replay.screenshot.d
                @Override // android.view.PixelCopy.OnPixelCopyFinishedListener
                public final void onPixelCopyFinished(int i10) {
                    e.k(e.this, i10);
                }
            }, eVar.f29586a.n());
        } catch (Throwable th2) {
            eVar.f29588c.getLogger().b(SentryLevel.ERROR, "Canvas Strategy: picture render failed", th2);
            eVar.f29594i.set(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(e eVar, int i10) {
        r rVar;
        if (eVar.f29596k.get()) {
            eVar.f29588c.getLogger().c(SentryLevel.DEBUG, "CanvasStrategy is closed, ignoring capture result", new Object[0]);
        } else if (i10 == 0) {
            eVar.f29594i.set(true);
            Bitmap bitmap = eVar.f29590e;
            if (bitmap != null && !bitmap.isRecycled() && (rVar = eVar.f29587b) != null) {
                rVar.n(bitmap);
            }
        } else {
            ILogger logger = eVar.f29588c.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            logger.c(sentryLevel, "Canvas Strategy: PixelCopy failed with code " + i10, new Object[0]);
            eVar.f29594i.set(false);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public boolean a() {
        return this.f29594i.get();
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void b() {
        Bitmap bitmap;
        r rVar;
        if (a() && (bitmap = this.f29590e) != null && !bitmap.isRecycled() && (rVar = this.f29587b) != null) {
            rVar.n(bitmap);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void c(View root) {
        Intrinsics.checkNotNullParameter(root, "root");
        if (!this.f29596k.get()) {
            Picture picture = new Picture();
            Canvas beginRecording = picture.beginRecording(this.f29589d.d(), this.f29589d.c());
            Intrinsics.checkNotNullExpressionValue(beginRecording, "beginRecording(...)");
            this.f29595j.e(beginRecording);
            this.f29595j.setMatrix(i());
            root.draw(this.f29595j);
            picture.endRecording();
            if (!this.f29596k.get()) {
                this.f29591f.set(picture);
                l(this.f29586a.n(), new io.sentry.android.replay.util.j("screenshot_recorder.canvas", this.f29599n));
            }
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void close() {
        this.f29596k.set(true);
        l(this.f29586a.n(), new io.sentry.android.replay.util.j("CanvasStrategy.close", new Runnable() { // from class: io.sentry.android.replay.screenshot.c
            @Override // java.lang.Runnable
            public final void run() {
                e.h(e.this);
            }
        }));
        this.f29591f.getAndSet(null);
    }

    public final void l(Handler handler, io.sentry.android.replay.util.j runnable) {
        Intrinsics.checkNotNullParameter(handler, "<this>");
        Intrinsics.checkNotNullParameter(runnable, "runnable");
        try {
            handler.post(runnable);
        } catch (Throwable th2) {
            ILogger logger = this.f29588c.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            logger.b(sentryLevel, "Canvas Strategy: failed to post runnable " + runnable.a(), th2);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void onContentChanged() {
    }
}
