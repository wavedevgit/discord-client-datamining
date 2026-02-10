package io.sentry.android.replay.screenshot;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.RectF;
import android.view.PixelCopy;
import android.view.View;
import android.view.Window;
import io.sentry.SentryLevel;
import io.sentry.android.replay.r;
import io.sentry.android.replay.s;
import io.sentry.android.replay.util.m;
import io.sentry.android.replay.util.n;
import io.sentry.android.replay.viewhierarchy.b;
import io.sentry.android.replay.x;
import io.sentry.k7;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.atomic.AtomicBoolean;
import kotlin.Lazy;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import rr.o;
import rr.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements k {

    /* renamed from: a  reason: collision with root package name */
    private final r f28003a;

    /* renamed from: b  reason: collision with root package name */
    private final k7 f28004b;

    /* renamed from: c  reason: collision with root package name */
    private final s f28005c;

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.android.replay.util.c f28006d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f28007e;

    /* renamed from: f  reason: collision with root package name */
    private final io.sentry.android.replay.util.g f28008f;

    /* renamed from: g  reason: collision with root package name */
    private final Lazy f28009g;

    /* renamed from: h  reason: collision with root package name */
    private final Bitmap f28010h;

    /* renamed from: i  reason: collision with root package name */
    private final Lazy f28011i;

    /* renamed from: j  reason: collision with root package name */
    private final Lazy f28012j;

    /* renamed from: k  reason: collision with root package name */
    private final AtomicBoolean f28013k;

    /* renamed from: l  reason: collision with root package name */
    private final Lazy f28014l;

    /* renamed from: m  reason: collision with root package name */
    private final AtomicBoolean f28015m;

    /* renamed from: n  reason: collision with root package name */
    private final AtomicBoolean f28016n;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ List f28018e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Canvas f28019i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(List list, Canvas canvas) {
            super(1);
            this.f28018e = list;
            this.f28019i = canvas;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(io.sentry.android.replay.viewhierarchy.b node) {
            Pair a10;
            Integer i10;
            Intrinsics.checkNotNullParameter(node, "node");
            if (node.c() && node.e() > 0 && node.b() > 0) {
                if (node.d() == null) {
                    return Boolean.FALSE;
                }
                if (node instanceof b.c) {
                    List e10 = CollectionsKt.e(node.d());
                    j jVar = j.this;
                    a10 = v.a(e10, Integer.valueOf(jVar.r(jVar.f28010h, node.d())));
                } else {
                    int i11 = -16777216;
                    if (node instanceof b.d) {
                        b.d dVar = (b.d) node;
                        m j10 = dVar.j();
                        if ((j10 != null && (i10 = j10.e()) != null) || (i10 = dVar.i()) != null) {
                            i11 = i10.intValue();
                        }
                        a10 = v.a(n.d(dVar.j(), node.d(), dVar.k(), dVar.l()), Integer.valueOf(i11));
                    } else {
                        a10 = v.a(CollectionsKt.e(node.d()), -16777216);
                    }
                }
                List<Rect> list = (List) a10.a();
                j.this.s().setColor(((Number) a10.b()).intValue());
                Canvas canvas = this.f28019i;
                j jVar2 = j.this;
                for (Rect rect : list) {
                    canvas.drawRoundRect(new RectF(rect), 10.0f, 10.0f, jVar2.s());
                }
                if (j.this.f28004b.getReplayController().y()) {
                    this.f28018e.addAll(list);
                }
            }
            return Boolean.TRUE;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f28020d = new b();

        b() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Paint invoke() {
            return new Paint();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function0 {
        c() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Matrix invoke() {
            Matrix matrix = new Matrix();
            j jVar = j.this;
            matrix.preScale(jVar.f28005c.e(), jVar.f28005c.f());
            return matrix;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final d f28022d = new d();

        d() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Bitmap invoke() {
            Bitmap createBitmap = Bitmap.createBitmap(1, 1, Bitmap.Config.ARGB_8888);
            Intrinsics.checkNotNullExpressionValue(createBitmap, "createBitmap(...)");
            return createBitmap;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e extends Lambda implements Function0 {
        e() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Canvas invoke() {
            return new Canvas(j.this.u());
        }
    }

    public j(io.sentry.android.replay.b executorProvider, r rVar, k7 options, s config, io.sentry.android.replay.util.c debugOverlayDrawable) {
        Intrinsics.checkNotNullParameter(executorProvider, "executorProvider");
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(config, "config");
        Intrinsics.checkNotNullParameter(debugOverlayDrawable, "debugOverlayDrawable");
        this.f28003a = rVar;
        this.f28004b = options;
        this.f28005c = config;
        this.f28006d = debugOverlayDrawable;
        this.f28007e = executorProvider.a();
        this.f28008f = executorProvider.k();
        o oVar = o.f49211i;
        this.f28009g = rr.l.b(oVar, d.f28022d);
        Bitmap createBitmap = Bitmap.createBitmap(config.d(), config.c(), Bitmap.Config.ARGB_8888);
        Intrinsics.checkNotNullExpressionValue(createBitmap, "createBitmap(...)");
        this.f28010h = createBitmap;
        this.f28011i = rr.l.b(oVar, new e());
        this.f28012j = rr.l.b(oVar, new c());
        this.f28013k = new AtomicBoolean(false);
        this.f28014l = rr.l.b(oVar, b.f28020d);
        this.f28015m = new AtomicBoolean(false);
        this.f28016n = new AtomicBoolean(false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(final j jVar, final View view, int i10) {
        if (jVar.f28016n.get()) {
            jVar.f28004b.getLogger().c(SentryLevel.DEBUG, "PixelCopyStrategy is closed, ignoring capture result", new Object[0]);
        } else if (i10 != 0) {
            jVar.f28004b.getLogger().c(SentryLevel.INFO, "Failed to capture replay recording: %d", Integer.valueOf(i10));
            jVar.f28013k.set(false);
        } else if (jVar.f28015m.get()) {
            jVar.f28004b.getLogger().c(SentryLevel.INFO, "Failed to determine view hierarchy, not capturing", new Object[0]);
            jVar.f28013k.set(false);
        } else {
            final io.sentry.android.replay.viewhierarchy.b a10 = io.sentry.android.replay.viewhierarchy.b.f28111m.a(view, null, 0, jVar.f28004b);
            n.k(view, a10, jVar.f28004b);
            jVar.f28007e.submit(new io.sentry.android.replay.util.j("screenshot_recorder.mask", new Runnable() { // from class: io.sentry.android.replay.screenshot.h
                @Override // java.lang.Runnable
                public final void run() {
                    j.o(j.this, a10, view);
                }
            }));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(final j jVar, io.sentry.android.replay.viewhierarchy.b bVar, final View view) {
        if (!jVar.f28016n.get() && !jVar.f28010h.isRecycled()) {
            final ArrayList arrayList = new ArrayList();
            Canvas canvas = new Canvas(jVar.f28010h);
            canvas.setMatrix(jVar.t());
            bVar.h(new a(arrayList, canvas));
            if (jVar.f28004b.getReplayController().y()) {
                jVar.f28008f.b(new Runnable() { // from class: io.sentry.android.replay.screenshot.i
                    @Override // java.lang.Runnable
                    public final void run() {
                        j.p(j.this, view, arrayList);
                    }
                });
            }
            r rVar = jVar.f28003a;
            if (rVar != null) {
                rVar.m(jVar.f28010h);
            }
            jVar.f28013k.set(true);
            jVar.f28015m.set(false);
            return;
        }
        jVar.f28004b.getLogger().c(SentryLevel.DEBUG, "PixelCopyStrategy is closed, skipping masking", new Object[0]);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void p(j jVar, View view, List list) {
        if (jVar.f28006d.getCallback() == null) {
            view.getOverlay().add(jVar.f28006d);
        }
        jVar.f28006d.b(list);
        view.postInvalidate();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void q(j jVar) {
        if (!jVar.f28010h.isRecycled()) {
            synchronized (jVar.f28010h) {
                try {
                    if (!jVar.f28010h.isRecycled()) {
                        jVar.f28010h.recycle();
                    }
                    Unit unit = Unit.f31765a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
        if (!jVar.u().isRecycled()) {
            jVar.u().recycle();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int r(Bitmap bitmap, Rect rect) {
        if (!this.f28016n.get() && !bitmap.isRecycled() && !u().isRecycled()) {
            Rect rect2 = new Rect(rect);
            RectF rectF = new RectF(rect2);
            t().mapRect(rectF);
            rectF.round(rect2);
            v().drawBitmap(bitmap, rect2, new Rect(0, 0, 1, 1), (Paint) null);
            return u().getPixel(0, 0);
        }
        return -16777216;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Paint s() {
        return (Paint) this.f28014l.getValue();
    }

    private final Matrix t() {
        return (Matrix) this.f28012j.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Bitmap u() {
        return (Bitmap) this.f28009g.getValue();
    }

    private final Canvas v() {
        return (Canvas) this.f28011i.getValue();
    }

    @Override // io.sentry.android.replay.screenshot.k
    public boolean a() {
        return this.f28013k.get();
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void b() {
        r rVar;
        if (a() && !this.f28010h.isRecycled() && (rVar = this.f28003a) != null) {
            rVar.m(this.f28010h);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void c(final View root) {
        Intrinsics.checkNotNullParameter(root, "root");
        Window a10 = x.a(root);
        if (a10 == null) {
            this.f28004b.getLogger().c(SentryLevel.DEBUG, "Window is invalid, not capturing screenshot", new Object[0]);
        } else if (this.f28016n.get()) {
            this.f28004b.getLogger().c(SentryLevel.DEBUG, "PixelCopyStrategy is closed, not capturing screenshot", new Object[0]);
        } else {
            try {
                this.f28015m.set(false);
                PixelCopy.request(a10, this.f28010h, new PixelCopy.OnPixelCopyFinishedListener() { // from class: io.sentry.android.replay.screenshot.f
                    @Override // android.view.PixelCopy.OnPixelCopyFinishedListener
                    public final void onPixelCopyFinished(int i10) {
                        j.n(j.this, root, i10);
                    }
                }, this.f28008f.a());
            } catch (Throwable th2) {
                this.f28004b.getLogger().b(SentryLevel.WARNING, "Failed to capture replay recording", th2);
                this.f28013k.set(false);
            }
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void close() {
        this.f28016n.set(true);
        this.f28007e.submit(new io.sentry.android.replay.util.j("PixelCopyStrategy.close", new Runnable() { // from class: io.sentry.android.replay.screenshot.g
            @Override // java.lang.Runnable
            public final void run() {
                j.q(j.this);
            }
        }));
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void onContentChanged() {
        this.f28015m.set(true);
    }
}
