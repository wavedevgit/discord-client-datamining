package cm;

import android.content.Context;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.widget.OverScroller;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomLogger;
import dm.c;
import em.b;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements GestureDetector.OnGestureListener {
    private static final ZoomLogger A;

    /* renamed from: y  reason: collision with root package name */
    public static final a f8336y = new a(null);

    /* renamed from: z  reason: collision with root package name */
    private static final String f8337z;

    /* renamed from: d  reason: collision with root package name */
    private final em.b f8338d;

    /* renamed from: e  reason: collision with root package name */
    private final bm.a f8339e;

    /* renamed from: i  reason: collision with root package name */
    private final dm.b f8340i;

    /* renamed from: o  reason: collision with root package name */
    private final GestureDetector f8341o;

    /* renamed from: p  reason: collision with root package name */
    private final OverScroller f8342p;

    /* renamed from: q  reason: collision with root package name */
    private final b.C0304b f8343q;

    /* renamed from: r  reason: collision with root package name */
    private final b.C0304b f8344r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f8345s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f8346t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f8347u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f8348v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f8349w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f8350x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: cm.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0136b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ScaledPoint f8351d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0136b(ScaledPoint scaledPoint) {
            super(1);
            this.f8351d = scaledPoint;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.c(this.f8351d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32556a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Runnable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ScaledPoint f8353d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(ScaledPoint scaledPoint) {
                super(1);
                this.f8353d = scaledPoint;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.e(this.f8353d, true);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f32556a;
            }
        }

        c() {
        }

        @Override // java.lang.Runnable
        public void run() {
            if (b.this.f8342p.isFinished()) {
                b.this.f8339e.f();
                b.this.f8341o.setIsLongpressEnabled(true);
            } else if (b.this.f8342p.computeScrollOffset()) {
                b.this.f8340i.h(new a(new ScaledPoint(b.this.f8342p.getCurrX(), b.this.f8342p.getCurrY())));
                b.this.f8340i.C(this);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ScaledPoint f8354d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(ScaledPoint scaledPoint) {
            super(1);
            this.f8354d = scaledPoint;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.c(this.f8354d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32556a;
        }
    }

    static {
        String TAG = b.class.getSimpleName();
        f8337z = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18183b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        A = aVar.a(TAG);
    }

    public b(Context context, em.b panManager, bm.a stateController, dm.b matrixController) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(matrixController, "matrixController");
        this.f8338d = panManager;
        this.f8339e = stateController;
        this.f8340i = matrixController;
        GestureDetector gestureDetector = new GestureDetector(context, this);
        gestureDetector.setOnDoubleTapListener(null);
        Unit unit = Unit.f32556a;
        this.f8341o = gestureDetector;
        this.f8342p = new OverScroller(context);
        this.f8343q = new b.C0304b();
        this.f8344r = new b.C0304b();
        this.f8345s = true;
        this.f8346t = true;
        this.f8347u = true;
        this.f8348v = true;
        this.f8349w = true;
    }

    private final boolean g() {
        if (this.f8338d.n()) {
            ScaledPoint f10 = this.f8338d.f();
            if (f10.c() != 0.0f || f10.d() != 0.0f) {
                this.f8340i.f(new C0136b(f10));
                return true;
            }
            return false;
        }
        return false;
    }

    public final void e() {
        this.f8342p.forceFinished(true);
    }

    public final void f() {
        if (!g()) {
            this.f8339e.f();
        }
    }

    public final boolean h(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return this.f8341o.onTouchEvent(event);
    }

    public final void i(boolean z10) {
        this.f8345s = z10;
    }

    public final void j(boolean z10) {
        this.f8350x = z10;
    }

    public final void k(boolean z10) {
        this.f8347u = z10;
    }

    public final void l(boolean z10) {
        this.f8346t = z10;
    }

    public final void m(boolean z10) {
        this.f8349w = z10;
    }

    public final void n(boolean z10) {
        this.f8348v = z10;
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public boolean onDown(MotionEvent e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        e();
        return true;
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public boolean onFling(MotionEvent motionEvent, MotionEvent motionEvent2, float f10, float f11) {
        float f12;
        float f13;
        float f14;
        if (!this.f8345s || !this.f8338d.m()) {
            return false;
        }
        float f15 = 0.0f;
        if (this.f8338d.h()) {
            f12 = f10;
        } else {
            f12 = 0.0f;
        }
        int i10 = (int) f12;
        if (this.f8338d.l()) {
            f13 = f11;
        } else {
            f13 = 0.0f;
        }
        int i11 = (int) f13;
        this.f8338d.d(true, this.f8343q);
        this.f8338d.d(false, this.f8344r);
        int c10 = this.f8343q.c();
        int a10 = this.f8343q.a();
        int b10 = this.f8343q.b();
        int c11 = this.f8344r.c();
        int a11 = this.f8344r.a();
        int b11 = this.f8344r.b();
        if (!this.f8350x && (this.f8343q.d() || this.f8344r.d())) {
            return false;
        }
        if ((c10 >= b10 && c11 >= b11 && !this.f8338d.n()) || !this.f8339e.l()) {
            return false;
        }
        this.f8341o.setIsLongpressEnabled(false);
        if (this.f8338d.g()) {
            f14 = this.f8338d.i();
        } else {
            f14 = 0.0f;
        }
        if (this.f8338d.k()) {
            f15 = this.f8338d.j();
        }
        ZoomLogger zoomLogger = A;
        zoomLogger.b("startFling", "velocityX:", Integer.valueOf(i10), "velocityY:", Integer.valueOf(i11));
        zoomLogger.b("startFling", "flingX:", "min:", Integer.valueOf(c10), "max:", Integer.valueOf(b10), "start:", Integer.valueOf(a10), "overScroll:", Float.valueOf(f15));
        zoomLogger.b("startFling", "flingY:", "min:", Integer.valueOf(c11), "max:", Integer.valueOf(b11), "start:", Integer.valueOf(a11), "overScroll:", Float.valueOf(f14));
        this.f8342p.fling(a10, a11, i10, i11, c10, b10, c11, b11, (int) f14, (int) f15);
        this.f8340i.B(new c());
        return true;
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public boolean onScroll(MotionEvent motionEvent, MotionEvent motionEvent2, float f10, float f11) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (!this.f8346t) {
            return false;
        }
        if (motionEvent2 == null || motionEvent2.getPointerCount() != 1) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (motionEvent2 == null || motionEvent2.getPointerCount() != 2) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (motionEvent2 == null || motionEvent2.getPointerCount() != 3) {
            z12 = false;
        } else {
            z12 = true;
        }
        if (!this.f8347u && z10) {
            return false;
        }
        if (!this.f8348v && z11) {
            return false;
        }
        if ((!this.f8349w && z12) || !this.f8338d.m() || !this.f8339e.n()) {
            return false;
        }
        ScaledPoint scaledPoint = new ScaledPoint(-f10, -f11);
        ScaledPoint f12 = this.f8338d.f();
        if ((f12.c() < 0.0f && scaledPoint.c() > 0.0f) || (f12.c() > 0.0f && scaledPoint.c() < 0.0f)) {
            float pow = (1.0f - ((float) Math.pow(Math.abs(f12.c()) / this.f8338d.i(), 0.4d))) * 0.6f;
            A.b("onScroll", "applying friction X:", Float.valueOf(pow));
            scaledPoint.h(scaledPoint.c() * pow);
        }
        if ((f12.d() < 0.0f && scaledPoint.d() > 0.0f) || (f12.d() > 0.0f && scaledPoint.d() < 0.0f)) {
            float pow2 = (1.0f - ((float) Math.pow(Math.abs(f12.d()) / this.f8338d.j(), 0.4d))) * 0.6f;
            A.b("onScroll", "applying friction Y:", Float.valueOf(pow2));
            scaledPoint.i(scaledPoint.d() * pow2);
        }
        if (!this.f8338d.h()) {
            scaledPoint.h(0.0f);
        }
        if (!this.f8338d.l()) {
            scaledPoint.i(0.0f);
        }
        if (scaledPoint.c() != 0.0f || scaledPoint.d() != 0.0f) {
            this.f8340i.h(new d(scaledPoint));
        }
        return true;
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public boolean onSingleTapUp(MotionEvent motionEvent) {
        return false;
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public void onLongPress(MotionEvent motionEvent) {
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public void onShowPress(MotionEvent motionEvent) {
    }
}
