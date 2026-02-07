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
    private final io.sentry.android.replay.b f27779a;

    /* renamed from: b  reason: collision with root package name */
    private final r f27780b;

    /* renamed from: c  reason: collision with root package name */
    private final k7 f27781c;

    /* renamed from: d  reason: collision with root package name */
    private final s f27782d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Bitmap f27783e;

    /* renamed from: f  reason: collision with root package name */
    private AtomicReference f27784f;

    /* renamed from: g  reason: collision with root package name */
    private final io.sentry.util.a f27785g;

    /* renamed from: h  reason: collision with root package name */
    private final Lazy f27786h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f27787i;

    /* renamed from: j  reason: collision with root package name */
    private final l f27788j;

    /* renamed from: k  reason: collision with root package name */
    private final AtomicBoolean f27789k;

    /* renamed from: l  reason: collision with root package name */
    private final SurfaceTexture f27790l;

    /* renamed from: m  reason: collision with root package name */
    private final Surface f27791m;

    /* renamed from: n  reason: collision with root package name */
    private final Runnable f27792n;

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
            matrix.preScale(eVar.f27782d.e(), eVar.f27782d.f());
            return matrix;
        }
    }

    public e(io.sentry.android.replay.b executor, r rVar, k7 options, s config) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f27779a = executor;
        this.f27780b = rVar;
        this.f27781c = options;
        this.f27782d = config;
        this.f27784f = new AtomicReference(null);
        this.f27785g = new io.sentry.util.a();
        this.f27786h = qr.l.b(o.f48093i, new a());
        this.f27787i = new AtomicBoolean(false);
        this.f27788j = new l();
        this.f27789k = new AtomicBoolean(false);
        SurfaceTexture a10 = io.sentry.android.replay.screenshot.a.a(false);
        a10.setDefaultBufferSize(config.d(), config.c());
        this.f27790l = a10;
        this.f27791m = new Surface(a10);
        p.a("ReplayCanvasStrategy");
        this.f27792n = new Runnable() { // from class: io.sentry.android.replay.screenshot.b
            @Override // java.lang.Runnable
            public final void run() {
                e.j(e.this);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(e eVar) {
        Bitmap bitmap = eVar.f27783e;
        if (bitmap != null) {
            synchronized (bitmap) {
                try {
                    if (!bitmap.isRecycled()) {
                        bitmap.recycle();
                    }
                    Unit unit = Unit.f32056a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
        eVar.f27791m.release();
        eVar.f27790l.release();
    }

    private final Matrix i() {
        return (Matrix) this.f27786h.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(final e eVar) {
        if (eVar.f27789k.get()) {
            eVar.f27781c.getLogger().c(SentryLevel.DEBUG, "Canvas Strategy already closed, skipping picture render", new Object[0]);
            return;
        }
        Picture picture = (Picture) eVar.f27784f.getAndSet(null);
        if (picture == null) {
            return;
        }
        try {
            Canvas lockHardwareCanvas = eVar.f27791m.lockHardwareCanvas();
            lockHardwareCanvas.drawColor(-16777216, PorterDuff.Mode.CLEAR);
            picture.draw(lockHardwareCanvas);
            eVar.f27791m.unlockCanvasAndPost(lockHardwareCanvas);
            if (eVar.f27783e == null) {
                a1 a10 = eVar.f27785g.a();
                if (eVar.f27783e == null) {
                    eVar.f27783e = Bitmap.createBitmap(eVar.f27782d.d(), eVar.f27782d.c(), Bitmap.Config.ARGB_8888);
                }
                Unit unit = Unit.f32056a;
                cs.a.a(a10, null);
            }
            if (eVar.f27789k.get()) {
                eVar.f27781c.getLogger().c(SentryLevel.DEBUG, "Canvas Strategy already closed, skipping pixel copy request", new Object[0]);
                return;
            }
            Surface surface = eVar.f27791m;
            Bitmap bitmap = eVar.f27783e;
            Intrinsics.checkNotNull(bitmap);
            PixelCopy.request(surface, bitmap, new PixelCopy.OnPixelCopyFinishedListener() { // from class: io.sentry.android.replay.screenshot.d
                @Override // android.view.PixelCopy.OnPixelCopyFinishedListener
                public final void onPixelCopyFinished(int i10) {
                    e.k(e.this, i10);
                }
            }, eVar.f27779a.m());
        } catch (Throwable th2) {
            eVar.f27781c.getLogger().b(SentryLevel.ERROR, "Canvas Strategy: picture render failed", th2);
            eVar.f27787i.set(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(e eVar, int i10) {
        r rVar;
        if (eVar.f27789k.get()) {
            eVar.f27781c.getLogger().c(SentryLevel.DEBUG, "CanvasStrategy is closed, ignoring capture result", new Object[0]);
        } else if (i10 == 0) {
            eVar.f27787i.set(true);
            Bitmap bitmap = eVar.f27783e;
            if (bitmap != null && !bitmap.isRecycled() && (rVar = eVar.f27780b) != null) {
                rVar.m(bitmap);
            }
        } else {
            ILogger logger = eVar.f27781c.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            logger.c(sentryLevel, "Canvas Strategy: PixelCopy failed with code " + i10, new Object[0]);
            eVar.f27787i.set(false);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public boolean a() {
        return this.f27787i.get();
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void b() {
        Bitmap bitmap;
        r rVar;
        if (a() && (bitmap = this.f27783e) != null && !bitmap.isRecycled() && (rVar = this.f27780b) != null) {
            rVar.m(bitmap);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void c(View root) {
        Intrinsics.checkNotNullParameter(root, "root");
        if (!this.f27789k.get()) {
            Picture picture = new Picture();
            Canvas beginRecording = picture.beginRecording(this.f27782d.d(), this.f27782d.c());
            Intrinsics.checkNotNullExpressionValue(beginRecording, "beginRecording(...)");
            this.f27788j.e(beginRecording);
            this.f27788j.setMatrix(i());
            root.draw(this.f27788j);
            picture.endRecording();
            if (!this.f27789k.get()) {
                this.f27784f.set(picture);
                l(this.f27779a.m(), new io.sentry.android.replay.util.j("screenshot_recorder.canvas", this.f27792n));
            }
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void close() {
        this.f27789k.set(true);
        l(this.f27779a.m(), new io.sentry.android.replay.util.j("CanvasStrategy.close", new Runnable() { // from class: io.sentry.android.replay.screenshot.c
            @Override // java.lang.Runnable
            public final void run() {
                e.h(e.this);
            }
        }));
        this.f27784f.getAndSet(null);
    }

    public final void l(Handler handler, io.sentry.android.replay.util.j runnable) {
        Intrinsics.checkNotNullParameter(handler, "<this>");
        Intrinsics.checkNotNullParameter(runnable, "runnable");
        try {
            handler.post(runnable);
        } catch (Throwable th2) {
            ILogger logger = this.f27781c.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            logger.b(sentryLevel, "Canvas Strategy: failed to post runnable " + runnable.a(), th2);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void onContentChanged() {
    }
}
