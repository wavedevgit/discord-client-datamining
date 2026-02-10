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
import rr.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements k {

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.android.replay.b f27979a;

    /* renamed from: b  reason: collision with root package name */
    private final r f27980b;

    /* renamed from: c  reason: collision with root package name */
    private final k7 f27981c;

    /* renamed from: d  reason: collision with root package name */
    private final s f27982d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Bitmap f27983e;

    /* renamed from: f  reason: collision with root package name */
    private AtomicReference f27984f;

    /* renamed from: g  reason: collision with root package name */
    private final io.sentry.util.a f27985g;

    /* renamed from: h  reason: collision with root package name */
    private final Lazy f27986h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f27987i;

    /* renamed from: j  reason: collision with root package name */
    private final l f27988j;

    /* renamed from: k  reason: collision with root package name */
    private final AtomicBoolean f27989k;

    /* renamed from: l  reason: collision with root package name */
    private final SurfaceTexture f27990l;

    /* renamed from: m  reason: collision with root package name */
    private final Surface f27991m;

    /* renamed from: n  reason: collision with root package name */
    private final Runnable f27992n;

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
            matrix.preScale(eVar.f27982d.e(), eVar.f27982d.f());
            return matrix;
        }
    }

    public e(io.sentry.android.replay.b executor, r rVar, k7 options, s config) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f27979a = executor;
        this.f27980b = rVar;
        this.f27981c = options;
        this.f27982d = config;
        this.f27984f = new AtomicReference(null);
        this.f27985g = new io.sentry.util.a();
        this.f27986h = rr.l.b(o.f49211i, new a());
        this.f27987i = new AtomicBoolean(false);
        this.f27988j = new l();
        this.f27989k = new AtomicBoolean(false);
        SurfaceTexture a10 = io.sentry.android.replay.screenshot.a.a(false);
        a10.setDefaultBufferSize(config.d(), config.c());
        this.f27990l = a10;
        this.f27991m = new Surface(a10);
        p.a("ReplayCanvasStrategy");
        this.f27992n = new Runnable() { // from class: io.sentry.android.replay.screenshot.b
            @Override // java.lang.Runnable
            public final void run() {
                e.j(e.this);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(e eVar) {
        Bitmap bitmap = eVar.f27983e;
        if (bitmap != null) {
            synchronized (bitmap) {
                try {
                    if (!bitmap.isRecycled()) {
                        bitmap.recycle();
                    }
                    Unit unit = Unit.f31765a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
        eVar.f27991m.release();
        eVar.f27990l.release();
    }

    private final Matrix i() {
        return (Matrix) this.f27986h.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(final e eVar) {
        if (eVar.f27989k.get()) {
            eVar.f27981c.getLogger().c(SentryLevel.DEBUG, "Canvas Strategy already closed, skipping picture render", new Object[0]);
            return;
        }
        Picture picture = (Picture) eVar.f27984f.getAndSet(null);
        if (picture == null) {
            return;
        }
        try {
            Canvas lockHardwareCanvas = eVar.f27991m.lockHardwareCanvas();
            lockHardwareCanvas.drawColor(-16777216, PorterDuff.Mode.CLEAR);
            picture.draw(lockHardwareCanvas);
            eVar.f27991m.unlockCanvasAndPost(lockHardwareCanvas);
            if (eVar.f27983e == null) {
                a1 a10 = eVar.f27985g.a();
                if (eVar.f27983e == null) {
                    eVar.f27983e = Bitmap.createBitmap(eVar.f27982d.d(), eVar.f27982d.c(), Bitmap.Config.ARGB_8888);
                }
                Unit unit = Unit.f31765a;
                ds.a.a(a10, null);
            }
            if (eVar.f27989k.get()) {
                eVar.f27981c.getLogger().c(SentryLevel.DEBUG, "Canvas Strategy already closed, skipping pixel copy request", new Object[0]);
                return;
            }
            Surface surface = eVar.f27991m;
            Bitmap bitmap = eVar.f27983e;
            Intrinsics.checkNotNull(bitmap);
            PixelCopy.request(surface, bitmap, new PixelCopy.OnPixelCopyFinishedListener() { // from class: io.sentry.android.replay.screenshot.d
                @Override // android.view.PixelCopy.OnPixelCopyFinishedListener
                public final void onPixelCopyFinished(int i10) {
                    e.k(e.this, i10);
                }
            }, eVar.f27979a.m());
        } catch (Throwable th2) {
            eVar.f27981c.getLogger().b(SentryLevel.ERROR, "Canvas Strategy: picture render failed", th2);
            eVar.f27987i.set(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(e eVar, int i10) {
        r rVar;
        if (eVar.f27989k.get()) {
            eVar.f27981c.getLogger().c(SentryLevel.DEBUG, "CanvasStrategy is closed, ignoring capture result", new Object[0]);
        } else if (i10 == 0) {
            eVar.f27987i.set(true);
            Bitmap bitmap = eVar.f27983e;
            if (bitmap != null && !bitmap.isRecycled() && (rVar = eVar.f27980b) != null) {
                rVar.m(bitmap);
            }
        } else {
            ILogger logger = eVar.f27981c.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            logger.c(sentryLevel, "Canvas Strategy: PixelCopy failed with code " + i10, new Object[0]);
            eVar.f27987i.set(false);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public boolean a() {
        return this.f27987i.get();
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void b() {
        Bitmap bitmap;
        r rVar;
        if (a() && (bitmap = this.f27983e) != null && !bitmap.isRecycled() && (rVar = this.f27980b) != null) {
            rVar.m(bitmap);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void c(View root) {
        Intrinsics.checkNotNullParameter(root, "root");
        if (!this.f27989k.get()) {
            Picture picture = new Picture();
            Canvas beginRecording = picture.beginRecording(this.f27982d.d(), this.f27982d.c());
            Intrinsics.checkNotNullExpressionValue(beginRecording, "beginRecording(...)");
            this.f27988j.e(beginRecording);
            this.f27988j.setMatrix(i());
            root.draw(this.f27988j);
            picture.endRecording();
            if (!this.f27989k.get()) {
                this.f27984f.set(picture);
                l(this.f27979a.m(), new io.sentry.android.replay.util.j("screenshot_recorder.canvas", this.f27992n));
            }
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void close() {
        this.f27989k.set(true);
        l(this.f27979a.m(), new io.sentry.android.replay.util.j("CanvasStrategy.close", new Runnable() { // from class: io.sentry.android.replay.screenshot.c
            @Override // java.lang.Runnable
            public final void run() {
                e.h(e.this);
            }
        }));
        this.f27984f.getAndSet(null);
    }

    public final void l(Handler handler, io.sentry.android.replay.util.j runnable) {
        Intrinsics.checkNotNullParameter(handler, "<this>");
        Intrinsics.checkNotNullParameter(runnable, "runnable");
        try {
            handler.post(runnable);
        } catch (Throwable th2) {
            ILogger logger = this.f27981c.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            logger.b(sentryLevel, "Canvas Strategy: failed to post runnable " + runnable.a(), th2);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void onContentChanged() {
    }
}
