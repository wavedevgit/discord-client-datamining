package am;

import android.content.Context;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.widget.OverScroller;
import bm.c;
import cm.b;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements GestureDetector.OnGestureListener {
    private static final ZoomLogger A;

    /* renamed from: y  reason: collision with root package name */
    public static final a f831y = new a(null);

    /* renamed from: z  reason: collision with root package name */
    private static final String f832z;

    /* renamed from: d  reason: collision with root package name */
    private final cm.b f833d;

    /* renamed from: e  reason: collision with root package name */
    private final zl.a f834e;

    /* renamed from: i  reason: collision with root package name */
    private final bm.b f835i;

    /* renamed from: o  reason: collision with root package name */
    private final GestureDetector f836o;

    /* renamed from: p  reason: collision with root package name */
    private final OverScroller f837p;

    /* renamed from: q  reason: collision with root package name */
    private final b.C0153b f838q;

    /* renamed from: r  reason: collision with root package name */
    private final b.C0153b f839r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f840s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f841t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f842u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f843v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f844w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f845x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: am.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0012b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ScaledPoint f846d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0012b(ScaledPoint scaledPoint) {
            super(1);
            this.f846d = scaledPoint;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.c(this.f846d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31765a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Runnable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ScaledPoint f848d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(ScaledPoint scaledPoint) {
                super(1);
                this.f848d = scaledPoint;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.e(this.f848d, true);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f31765a;
            }
        }

        c() {
        }

        @Override // java.lang.Runnable
        public void run() {
            if (b.this.f837p.isFinished()) {
                b.this.f834e.f();
                b.this.f836o.setIsLongpressEnabled(true);
            } else if (b.this.f837p.computeScrollOffset()) {
                b.this.f835i.h(new a(new ScaledPoint(b.this.f837p.getCurrX(), b.this.f837p.getCurrY())));
                b.this.f835i.C(this);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ScaledPoint f849d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(ScaledPoint scaledPoint) {
            super(1);
            this.f849d = scaledPoint;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.c(this.f849d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31765a;
        }
    }

    static {
        String TAG = b.class.getSimpleName();
        f832z = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17433b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        A = aVar.a(TAG);
    }

    public b(Context context, cm.b panManager, zl.a stateController, bm.b matrixController) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(matrixController, "matrixController");
        this.f833d = panManager;
        this.f834e = stateController;
        this.f835i = matrixController;
        GestureDetector gestureDetector = new GestureDetector(context, this);
        gestureDetector.setOnDoubleTapListener(null);
        Unit unit = Unit.f31765a;
        this.f836o = gestureDetector;
        this.f837p = new OverScroller(context);
        this.f838q = new b.C0153b();
        this.f839r = new b.C0153b();
        this.f840s = true;
        this.f841t = true;
        this.f842u = true;
        this.f843v = true;
        this.f844w = true;
    }

    private final boolean g() {
        if (this.f833d.n()) {
            ScaledPoint f10 = this.f833d.f();
            if (f10.c() != 0.0f || f10.d() != 0.0f) {
                this.f835i.f(new C0012b(f10));
                return true;
            }
            return false;
        }
        return false;
    }

    public final void e() {
        this.f837p.forceFinished(true);
    }

    public final void f() {
        if (!g()) {
            this.f834e.f();
        }
    }

    public final boolean h(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return this.f836o.onTouchEvent(event);
    }

    public final void i(boolean z10) {
        this.f840s = z10;
    }

    public final void j(boolean z10) {
        this.f845x = z10;
    }

    public final void k(boolean z10) {
        this.f842u = z10;
    }

    public final void l(boolean z10) {
        this.f841t = z10;
    }

    public final void m(boolean z10) {
        this.f844w = z10;
    }

    public final void n(boolean z10) {
        this.f843v = z10;
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
        if (!this.f840s || !this.f833d.m()) {
            return false;
        }
        float f15 = 0.0f;
        if (this.f833d.h()) {
            f12 = f10;
        } else {
            f12 = 0.0f;
        }
        int i10 = (int) f12;
        if (this.f833d.l()) {
            f13 = f11;
        } else {
            f13 = 0.0f;
        }
        int i11 = (int) f13;
        this.f833d.d(true, this.f838q);
        this.f833d.d(false, this.f839r);
        int c10 = this.f838q.c();
        int a10 = this.f838q.a();
        int b10 = this.f838q.b();
        int c11 = this.f839r.c();
        int a11 = this.f839r.a();
        int b11 = this.f839r.b();
        if (!this.f845x && (this.f838q.d() || this.f839r.d())) {
            return false;
        }
        if ((c10 >= b10 && c11 >= b11 && !this.f833d.n()) || !this.f834e.l()) {
            return false;
        }
        this.f836o.setIsLongpressEnabled(false);
        if (this.f833d.g()) {
            f14 = this.f833d.i();
        } else {
            f14 = 0.0f;
        }
        if (this.f833d.k()) {
            f15 = this.f833d.j();
        }
        ZoomLogger zoomLogger = A;
        zoomLogger.b("startFling", "velocityX:", Integer.valueOf(i10), "velocityY:", Integer.valueOf(i11));
        zoomLogger.b("startFling", "flingX:", "min:", Integer.valueOf(c10), "max:", Integer.valueOf(b10), "start:", Integer.valueOf(a10), "overScroll:", Float.valueOf(f15));
        zoomLogger.b("startFling", "flingY:", "min:", Integer.valueOf(c11), "max:", Integer.valueOf(b11), "start:", Integer.valueOf(a11), "overScroll:", Float.valueOf(f14));
        this.f837p.fling(a10, a11, i10, i11, c10, b10, c11, b11, (int) f14, (int) f15);
        this.f835i.B(new c());
        return true;
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public boolean onScroll(MotionEvent motionEvent, MotionEvent motionEvent2, float f10, float f11) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (!this.f841t) {
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
        if (!this.f842u && z10) {
            return false;
        }
        if (!this.f843v && z11) {
            return false;
        }
        if ((!this.f844w && z12) || !this.f833d.m() || !this.f834e.n()) {
            return false;
        }
        ScaledPoint scaledPoint = new ScaledPoint(-f10, -f11);
        ScaledPoint f12 = this.f833d.f();
        if ((f12.c() < 0.0f && scaledPoint.c() > 0.0f) || (f12.c() > 0.0f && scaledPoint.c() < 0.0f)) {
            float pow = (1.0f - ((float) Math.pow(Math.abs(f12.c()) / this.f833d.i(), 0.4d))) * 0.6f;
            A.b("onScroll", "applying friction X:", Float.valueOf(pow));
            scaledPoint.h(scaledPoint.c() * pow);
        }
        if ((f12.d() < 0.0f && scaledPoint.d() > 0.0f) || (f12.d() > 0.0f && scaledPoint.d() < 0.0f)) {
            float pow2 = (1.0f - ((float) Math.pow(Math.abs(f12.d()) / this.f833d.j(), 0.4d))) * 0.6f;
            A.b("onScroll", "applying friction Y:", Float.valueOf(pow2));
            scaledPoint.i(scaledPoint.d() * pow2);
        }
        if (!this.f833d.h()) {
            scaledPoint.h(0.0f);
        }
        if (!this.f833d.l()) {
            scaledPoint.i(0.0f);
        }
        if (scaledPoint.c() != 0.0f || scaledPoint.d() != 0.0f) {
            this.f835i.h(new d(scaledPoint));
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
