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
import as.o;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements k {

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.android.replay.b f28915a;

    /* renamed from: b  reason: collision with root package name */
    private final r f28916b;

    /* renamed from: c  reason: collision with root package name */
    private final k7 f28917c;

    /* renamed from: d  reason: collision with root package name */
    private final s f28918d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Bitmap f28919e;

    /* renamed from: f  reason: collision with root package name */
    private AtomicReference f28920f;

    /* renamed from: g  reason: collision with root package name */
    private final io.sentry.util.a f28921g;

    /* renamed from: h  reason: collision with root package name */
    private final Lazy f28922h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f28923i;

    /* renamed from: j  reason: collision with root package name */
    private final l f28924j;

    /* renamed from: k  reason: collision with root package name */
    private final AtomicBoolean f28925k;

    /* renamed from: l  reason: collision with root package name */
    private final SurfaceTexture f28926l;

    /* renamed from: m  reason: collision with root package name */
    private final Surface f28927m;

    /* renamed from: n  reason: collision with root package name */
    private final Runnable f28928n;

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
            matrix.preScale(eVar.f28918d.e(), eVar.f28918d.f());
            return matrix;
        }
    }

    public e(io.sentry.android.replay.b executor, r rVar, k7 options, s config) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f28915a = executor;
        this.f28916b = rVar;
        this.f28917c = options;
        this.f28918d = config;
        this.f28920f = new AtomicReference(null);
        this.f28921g = new io.sentry.util.a();
        this.f28922h = as.l.a(o.f6083i, new a());
        this.f28923i = new AtomicBoolean(false);
        this.f28924j = new l();
        this.f28925k = new AtomicBoolean(false);
        SurfaceTexture a10 = io.sentry.android.replay.screenshot.a.a(false);
        a10.setDefaultBufferSize(config.d(), config.c());
        this.f28926l = a10;
        this.f28927m = new Surface(a10);
        p.a("ReplayCanvasStrategy");
        this.f28928n = new Runnable() { // from class: io.sentry.android.replay.screenshot.b
            @Override // java.lang.Runnable
            public final void run() {
                e.j(e.this);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(e eVar) {
        Bitmap bitmap = eVar.f28919e;
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
        eVar.f28927m.release();
        eVar.f28926l.release();
    }

    private final Matrix i() {
        return (Matrix) this.f28922h.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(final e eVar) {
        if (eVar.f28925k.get()) {
            eVar.f28917c.getLogger().c(SentryLevel.DEBUG, "Canvas Strategy already closed, skipping picture render", new Object[0]);
            return;
        }
        Picture picture = (Picture) eVar.f28920f.getAndSet(null);
        if (picture == null) {
            return;
        }
        try {
            Canvas lockHardwareCanvas = eVar.f28927m.lockHardwareCanvas();
            lockHardwareCanvas.drawColor(-16777216, PorterDuff.Mode.CLEAR);
            picture.draw(lockHardwareCanvas);
            eVar.f28927m.unlockCanvasAndPost(lockHardwareCanvas);
            if (eVar.f28919e == null) {
                a1 a10 = eVar.f28921g.a();
                if (eVar.f28919e == null) {
                    eVar.f28919e = Bitmap.createBitmap(eVar.f28918d.d(), eVar.f28918d.c(), Bitmap.Config.ARGB_8888);
                }
                Unit unit = Unit.f31988a;
                ms.a.a(a10, null);
            }
            if (eVar.f28925k.get()) {
                eVar.f28917c.getLogger().c(SentryLevel.DEBUG, "Canvas Strategy already closed, skipping pixel copy request", new Object[0]);
                return;
            }
            Surface surface = eVar.f28927m;
            Bitmap bitmap = eVar.f28919e;
            Intrinsics.checkNotNull(bitmap);
            PixelCopy.request(surface, bitmap, new PixelCopy.OnPixelCopyFinishedListener() { // from class: io.sentry.android.replay.screenshot.d
                @Override // android.view.PixelCopy.OnPixelCopyFinishedListener
                public final void onPixelCopyFinished(int i10) {
                    e.k(e.this, i10);
                }
            }, eVar.f28915a.m());
        } catch (Throwable th2) {
            eVar.f28917c.getLogger().b(SentryLevel.ERROR, "Canvas Strategy: picture render failed", th2);
            eVar.f28923i.set(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(e eVar, int i10) {
        r rVar;
        if (eVar.f28925k.get()) {
            eVar.f28917c.getLogger().c(SentryLevel.DEBUG, "CanvasStrategy is closed, ignoring capture result", new Object[0]);
        } else if (i10 == 0) {
            eVar.f28923i.set(true);
            Bitmap bitmap = eVar.f28919e;
            if (bitmap != null && !bitmap.isRecycled() && (rVar = eVar.f28916b) != null) {
                rVar.m(bitmap);
            }
        } else {
            ILogger logger = eVar.f28917c.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            logger.c(sentryLevel, "Canvas Strategy: PixelCopy failed with code " + i10, new Object[0]);
            eVar.f28923i.set(false);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public boolean a() {
        return this.f28923i.get();
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void b() {
        Bitmap bitmap;
        r rVar;
        if (a() && (bitmap = this.f28919e) != null && !bitmap.isRecycled() && (rVar = this.f28916b) != null) {
            rVar.m(bitmap);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void c(View root) {
        Intrinsics.checkNotNullParameter(root, "root");
        if (!this.f28925k.get()) {
            Picture picture = new Picture();
            Canvas beginRecording = picture.beginRecording(this.f28918d.d(), this.f28918d.c());
            Intrinsics.checkNotNullExpressionValue(beginRecording, "beginRecording(...)");
            this.f28924j.e(beginRecording);
            this.f28924j.setMatrix(i());
            root.draw(this.f28924j);
            picture.endRecording();
            if (!this.f28925k.get()) {
                this.f28920f.set(picture);
                l(this.f28915a.m(), new io.sentry.android.replay.util.j("screenshot_recorder.canvas", this.f28928n));
            }
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void close() {
        this.f28925k.set(true);
        l(this.f28915a.m(), new io.sentry.android.replay.util.j("CanvasStrategy.close", new Runnable() { // from class: io.sentry.android.replay.screenshot.c
            @Override // java.lang.Runnable
            public final void run() {
                e.h(e.this);
            }
        }));
        this.f28920f.getAndSet(null);
    }

    public final void l(Handler handler, io.sentry.android.replay.util.j runnable) {
        Intrinsics.checkNotNullParameter(handler, "<this>");
        Intrinsics.checkNotNullParameter(runnable, "runnable");
        try {
            handler.post(runnable);
        } catch (Throwable th2) {
            ILogger logger = this.f28917c.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            logger.b(sentryLevel, "Canvas Strategy: failed to post runnable " + runnable.a(), th2);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void onContentChanged() {
    }
}
