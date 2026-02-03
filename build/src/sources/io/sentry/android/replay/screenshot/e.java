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
import lr.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements k {

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.android.replay.b f29529a;

    /* renamed from: b  reason: collision with root package name */
    private final r f29530b;

    /* renamed from: c  reason: collision with root package name */
    private final k7 f29531c;

    /* renamed from: d  reason: collision with root package name */
    private final s f29532d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Bitmap f29533e;

    /* renamed from: f  reason: collision with root package name */
    private AtomicReference f29534f;

    /* renamed from: g  reason: collision with root package name */
    private final io.sentry.util.a f29535g;

    /* renamed from: h  reason: collision with root package name */
    private final Lazy f29536h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f29537i;

    /* renamed from: j  reason: collision with root package name */
    private final l f29538j;

    /* renamed from: k  reason: collision with root package name */
    private final AtomicBoolean f29539k;

    /* renamed from: l  reason: collision with root package name */
    private final SurfaceTexture f29540l;

    /* renamed from: m  reason: collision with root package name */
    private final Surface f29541m;

    /* renamed from: n  reason: collision with root package name */
    private final Runnable f29542n;

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
            matrix.preScale(eVar.f29532d.e(), eVar.f29532d.f());
            return matrix;
        }
    }

    public e(io.sentry.android.replay.b executor, r rVar, k7 options, s config) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f29529a = executor;
        this.f29530b = rVar;
        this.f29531c = options;
        this.f29532d = config;
        this.f29534f = new AtomicReference(null);
        this.f29535g = new io.sentry.util.a();
        this.f29536h = lr.l.b(o.f37121i, new a());
        this.f29537i = new AtomicBoolean(false);
        this.f29538j = new l();
        this.f29539k = new AtomicBoolean(false);
        SurfaceTexture a10 = io.sentry.android.replay.screenshot.a.a(false);
        a10.setDefaultBufferSize(config.d(), config.c());
        this.f29540l = a10;
        this.f29541m = new Surface(a10);
        p.a("ReplayCanvasStrategy");
        this.f29542n = new Runnable() { // from class: io.sentry.android.replay.screenshot.b
            @Override // java.lang.Runnable
            public final void run() {
                e.j(e.this);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(e eVar) {
        Bitmap bitmap = eVar.f29533e;
        if (bitmap != null) {
            synchronized (bitmap) {
                try {
                    if (!bitmap.isRecycled()) {
                        bitmap.recycle();
                    }
                    Unit unit = Unit.f32464a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
        eVar.f29541m.release();
        eVar.f29540l.release();
    }

    private final Matrix i() {
        return (Matrix) this.f29536h.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(final e eVar) {
        if (eVar.f29539k.get()) {
            eVar.f29531c.getLogger().c(SentryLevel.DEBUG, "Canvas Strategy already closed, skipping picture render", new Object[0]);
            return;
        }
        Picture picture = (Picture) eVar.f29534f.getAndSet(null);
        if (picture == null) {
            return;
        }
        try {
            Canvas lockHardwareCanvas = eVar.f29541m.lockHardwareCanvas();
            lockHardwareCanvas.drawColor(-16777216, PorterDuff.Mode.CLEAR);
            picture.draw(lockHardwareCanvas);
            eVar.f29541m.unlockCanvasAndPost(lockHardwareCanvas);
            if (eVar.f29533e == null) {
                a1 a10 = eVar.f29535g.a();
                if (eVar.f29533e == null) {
                    eVar.f29533e = Bitmap.createBitmap(eVar.f29532d.d(), eVar.f29532d.c(), Bitmap.Config.ARGB_8888);
                }
                Unit unit = Unit.f32464a;
                xr.a.a(a10, null);
            }
            if (eVar.f29539k.get()) {
                eVar.f29531c.getLogger().c(SentryLevel.DEBUG, "Canvas Strategy already closed, skipping pixel copy request", new Object[0]);
                return;
            }
            Surface surface = eVar.f29541m;
            Bitmap bitmap = eVar.f29533e;
            Intrinsics.checkNotNull(bitmap);
            PixelCopy.request(surface, bitmap, new PixelCopy.OnPixelCopyFinishedListener() { // from class: io.sentry.android.replay.screenshot.d
                @Override // android.view.PixelCopy.OnPixelCopyFinishedListener
                public final void onPixelCopyFinished(int i10) {
                    e.k(e.this, i10);
                }
            }, eVar.f29529a.n());
        } catch (Throwable th2) {
            eVar.f29531c.getLogger().b(SentryLevel.ERROR, "Canvas Strategy: picture render failed", th2);
            eVar.f29537i.set(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(e eVar, int i10) {
        r rVar;
        if (eVar.f29539k.get()) {
            eVar.f29531c.getLogger().c(SentryLevel.DEBUG, "CanvasStrategy is closed, ignoring capture result", new Object[0]);
        } else if (i10 == 0) {
            eVar.f29537i.set(true);
            Bitmap bitmap = eVar.f29533e;
            if (bitmap != null && !bitmap.isRecycled() && (rVar = eVar.f29530b) != null) {
                rVar.n(bitmap);
            }
        } else {
            ILogger logger = eVar.f29531c.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            logger.c(sentryLevel, "Canvas Strategy: PixelCopy failed with code " + i10, new Object[0]);
            eVar.f29537i.set(false);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public boolean a() {
        return this.f29537i.get();
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void b() {
        Bitmap bitmap;
        r rVar;
        if (a() && (bitmap = this.f29533e) != null && !bitmap.isRecycled() && (rVar = this.f29530b) != null) {
            rVar.n(bitmap);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void c(View root) {
        Intrinsics.checkNotNullParameter(root, "root");
        if (!this.f29539k.get()) {
            Picture picture = new Picture();
            Canvas beginRecording = picture.beginRecording(this.f29532d.d(), this.f29532d.c());
            Intrinsics.checkNotNullExpressionValue(beginRecording, "beginRecording(...)");
            this.f29538j.e(beginRecording);
            this.f29538j.setMatrix(i());
            root.draw(this.f29538j);
            picture.endRecording();
            if (!this.f29539k.get()) {
                this.f29534f.set(picture);
                l(this.f29529a.n(), new io.sentry.android.replay.util.j("screenshot_recorder.canvas", this.f29542n));
            }
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void close() {
        this.f29539k.set(true);
        l(this.f29529a.n(), new io.sentry.android.replay.util.j("CanvasStrategy.close", new Runnable() { // from class: io.sentry.android.replay.screenshot.c
            @Override // java.lang.Runnable
            public final void run() {
                e.h(e.this);
            }
        }));
        this.f29534f.getAndSet(null);
    }

    public final void l(Handler handler, io.sentry.android.replay.util.j runnable) {
        Intrinsics.checkNotNullParameter(handler, "<this>");
        Intrinsics.checkNotNullParameter(runnable, "runnable");
        try {
            handler.post(runnable);
        } catch (Throwable th2) {
            ILogger logger = this.f29531c.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            logger.b(sentryLevel, "Canvas Strategy: failed to post runnable " + runnable.a(), th2);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void onContentChanged() {
    }
}
