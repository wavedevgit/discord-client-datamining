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
import as.o;
import as.v;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements k {

    /* renamed from: a  reason: collision with root package name */
    private final r f29507a;

    /* renamed from: b  reason: collision with root package name */
    private final k7 f29508b;

    /* renamed from: c  reason: collision with root package name */
    private final s f29509c;

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.android.replay.util.c f29510d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f29511e;

    /* renamed from: f  reason: collision with root package name */
    private final io.sentry.android.replay.util.g f29512f;

    /* renamed from: g  reason: collision with root package name */
    private final Lazy f29513g;

    /* renamed from: h  reason: collision with root package name */
    private final Bitmap f29514h;

    /* renamed from: i  reason: collision with root package name */
    private final Lazy f29515i;

    /* renamed from: j  reason: collision with root package name */
    private final Lazy f29516j;

    /* renamed from: k  reason: collision with root package name */
    private final AtomicBoolean f29517k;

    /* renamed from: l  reason: collision with root package name */
    private final Lazy f29518l;

    /* renamed from: m  reason: collision with root package name */
    private final AtomicBoolean f29519m;

    /* renamed from: n  reason: collision with root package name */
    private final AtomicBoolean f29520n;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ List f29522e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Canvas f29523i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(List list, Canvas canvas) {
            super(1);
            this.f29522e = list;
            this.f29523i = canvas;
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
                    a10 = v.a(e10, Integer.valueOf(jVar.r(jVar.f29514h, node.d())));
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
                Canvas canvas = this.f29523i;
                j jVar2 = j.this;
                for (Rect rect : list) {
                    canvas.drawRoundRect(new RectF(rect), 10.0f, 10.0f, jVar2.s());
                }
                if (j.this.f29508b.getReplayController().y()) {
                    this.f29522e.addAll(list);
                }
            }
            return Boolean.TRUE;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f29524d = new b();

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
            matrix.preScale(jVar.f29509c.e(), jVar.f29509c.f());
            return matrix;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final d f29526d = new d();

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
        this.f29507a = rVar;
        this.f29508b = options;
        this.f29509c = config;
        this.f29510d = debugOverlayDrawable;
        this.f29511e = executorProvider.a();
        this.f29512f = executorProvider.i();
        o oVar = o.f6083i;
        this.f29513g = as.l.a(oVar, d.f29526d);
        Bitmap createBitmap = Bitmap.createBitmap(config.d(), config.c(), Bitmap.Config.ARGB_8888);
        Intrinsics.checkNotNullExpressionValue(createBitmap, "createBitmap(...)");
        this.f29514h = createBitmap;
        this.f29515i = as.l.a(oVar, new e());
        this.f29516j = as.l.a(oVar, new c());
        this.f29517k = new AtomicBoolean(false);
        this.f29518l = as.l.a(oVar, b.f29524d);
        this.f29519m = new AtomicBoolean(false);
        this.f29520n = new AtomicBoolean(false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(final j jVar, final View view, int i10) {
        if (jVar.f29520n.get()) {
            jVar.f29508b.getLogger().c(SentryLevel.DEBUG, "PixelCopyStrategy is closed, ignoring capture result", new Object[0]);
        } else if (i10 != 0) {
            jVar.f29508b.getLogger().c(SentryLevel.INFO, "Failed to capture replay recording: %d", Integer.valueOf(i10));
            jVar.f29517k.set(false);
        } else if (jVar.f29519m.get()) {
            jVar.f29508b.getLogger().c(SentryLevel.INFO, "Failed to determine view hierarchy, not capturing", new Object[0]);
            jVar.f29517k.set(false);
        } else {
            final io.sentry.android.replay.viewhierarchy.b a10 = io.sentry.android.replay.viewhierarchy.b.f29615m.a(view, null, 0, jVar.f29508b);
            n.k(view, a10, jVar.f29508b);
            jVar.f29511e.submit(new io.sentry.android.replay.util.j("screenshot_recorder.mask", new Runnable() { // from class: io.sentry.android.replay.screenshot.h
                @Override // java.lang.Runnable
                public final void run() {
                    j.o(j.this, a10, view);
                }
            }));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(final j jVar, io.sentry.android.replay.viewhierarchy.b bVar, final View view) {
        if (!jVar.f29520n.get() && !jVar.f29514h.isRecycled()) {
            final ArrayList arrayList = new ArrayList();
            Canvas canvas = new Canvas(jVar.f29514h);
            canvas.setMatrix(jVar.t());
            bVar.h(new a(arrayList, canvas));
            if (jVar.f29508b.getReplayController().y()) {
                jVar.f29512f.b(new Runnable() { // from class: io.sentry.android.replay.screenshot.i
                    @Override // java.lang.Runnable
                    public final void run() {
                        j.p(j.this, view, arrayList);
                    }
                });
            }
            r rVar = jVar.f29507a;
            if (rVar != null) {
                rVar.m(jVar.f29514h);
            }
            jVar.f29517k.set(true);
            jVar.f29519m.set(false);
            return;
        }
        jVar.f29508b.getLogger().c(SentryLevel.DEBUG, "PixelCopyStrategy is closed, skipping masking", new Object[0]);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void p(j jVar, View view, List list) {
        if (jVar.f29510d.getCallback() == null) {
            view.getOverlay().add(jVar.f29510d);
        }
        jVar.f29510d.b(list);
        view.postInvalidate();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void q(j jVar) {
        if (!jVar.f29514h.isRecycled()) {
            synchronized (jVar.f29514h) {
                try {
                    if (!jVar.f29514h.isRecycled()) {
                        jVar.f29514h.recycle();
                    }
                    Unit unit = Unit.f32556a;
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
        if (!this.f29520n.get() && !bitmap.isRecycled() && !u().isRecycled()) {
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
        return (Paint) this.f29518l.getValue();
    }

    private final Matrix t() {
        return (Matrix) this.f29516j.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Bitmap u() {
        return (Bitmap) this.f29513g.getValue();
    }

    private final Canvas v() {
        return (Canvas) this.f29515i.getValue();
    }

    @Override // io.sentry.android.replay.screenshot.k
    public boolean a() {
        return this.f29517k.get();
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void b() {
        r rVar;
        if (a() && !this.f29514h.isRecycled() && (rVar = this.f29507a) != null) {
            rVar.m(this.f29514h);
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void c(final View root) {
        Intrinsics.checkNotNullParameter(root, "root");
        Window a10 = x.a(root);
        if (a10 == null) {
            this.f29508b.getLogger().c(SentryLevel.DEBUG, "Window is invalid, not capturing screenshot", new Object[0]);
        } else if (this.f29520n.get()) {
            this.f29508b.getLogger().c(SentryLevel.DEBUG, "PixelCopyStrategy is closed, not capturing screenshot", new Object[0]);
        } else {
            try {
                this.f29519m.set(false);
                PixelCopy.request(a10, this.f29514h, new PixelCopy.OnPixelCopyFinishedListener() { // from class: io.sentry.android.replay.screenshot.f
                    @Override // android.view.PixelCopy.OnPixelCopyFinishedListener
                    public final void onPixelCopyFinished(int i10) {
                        j.n(j.this, root, i10);
                    }
                }, this.f29512f.a());
            } catch (Throwable th2) {
                this.f29508b.getLogger().b(SentryLevel.WARNING, "Failed to capture replay recording", th2);
                this.f29517k.set(false);
            }
        }
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void close() {
        this.f29520n.set(true);
        this.f29511e.submit(new io.sentry.android.replay.util.j("PixelCopyStrategy.close", new Runnable() { // from class: io.sentry.android.replay.screenshot.g
            @Override // java.lang.Runnable
            public final void run() {
                j.q(j.this);
            }
        }));
    }

    @Override // io.sentry.android.replay.screenshot.k
    public void onContentChanged() {
        this.f29519m.set(true);
    }
}
