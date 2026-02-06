package zl;

import am.c;
import android.content.Context;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.widget.OverScroller;
import bm.b;
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
    public static final a f56315y = new a(null);

    /* renamed from: z  reason: collision with root package name */
    private static final String f56316z;

    /* renamed from: d  reason: collision with root package name */
    private final bm.b f56317d;

    /* renamed from: e  reason: collision with root package name */
    private final yl.a f56318e;

    /* renamed from: i  reason: collision with root package name */
    private final am.b f56319i;

    /* renamed from: o  reason: collision with root package name */
    private final GestureDetector f56320o;

    /* renamed from: p  reason: collision with root package name */
    private final OverScroller f56321p;

    /* renamed from: q  reason: collision with root package name */
    private final b.C0103b f56322q;

    /* renamed from: r  reason: collision with root package name */
    private final b.C0103b f56323r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f56324s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f56325t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f56326u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f56327v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f56328w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f56329x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: zl.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0773b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ScaledPoint f56330d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0773b(ScaledPoint scaledPoint) {
            super(1);
            this.f56330d = scaledPoint;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.c(this.f56330d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32008a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Runnable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ScaledPoint f56332d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(ScaledPoint scaledPoint) {
                super(1);
                this.f56332d = scaledPoint;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.e(this.f56332d, true);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f32008a;
            }
        }

        c() {
        }

        @Override // java.lang.Runnable
        public void run() {
            if (b.this.f56321p.isFinished()) {
                b.this.f56318e.f();
                b.this.f56320o.setIsLongpressEnabled(true);
            } else if (b.this.f56321p.computeScrollOffset()) {
                b.this.f56319i.h(new a(new ScaledPoint(b.this.f56321p.getCurrX(), b.this.f56321p.getCurrY())));
                b.this.f56319i.C(this);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ScaledPoint f56333d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(ScaledPoint scaledPoint) {
            super(1);
            this.f56333d = scaledPoint;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.c(this.f56333d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32008a;
        }
    }

    static {
        String TAG = b.class.getSimpleName();
        f56316z = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17293b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        A = aVar.a(TAG);
    }

    public b(Context context, bm.b panManager, yl.a stateController, am.b matrixController) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(matrixController, "matrixController");
        this.f56317d = panManager;
        this.f56318e = stateController;
        this.f56319i = matrixController;
        GestureDetector gestureDetector = new GestureDetector(context, this);
        gestureDetector.setOnDoubleTapListener(null);
        Unit unit = Unit.f32008a;
        this.f56320o = gestureDetector;
        this.f56321p = new OverScroller(context);
        this.f56322q = new b.C0103b();
        this.f56323r = new b.C0103b();
        this.f56324s = true;
        this.f56325t = true;
        this.f56326u = true;
        this.f56327v = true;
        this.f56328w = true;
    }

    private final boolean g() {
        if (this.f56317d.n()) {
            ScaledPoint f10 = this.f56317d.f();
            if (f10.c() != 0.0f || f10.d() != 0.0f) {
                this.f56319i.f(new C0773b(f10));
                return true;
            }
            return false;
        }
        return false;
    }

    public final void e() {
        this.f56321p.forceFinished(true);
    }

    public final void f() {
        if (!g()) {
            this.f56318e.f();
        }
    }

    public final boolean h(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return this.f56320o.onTouchEvent(event);
    }

    public final void i(boolean z10) {
        this.f56324s = z10;
    }

    public final void j(boolean z10) {
        this.f56329x = z10;
    }

    public final void k(boolean z10) {
        this.f56326u = z10;
    }

    public final void l(boolean z10) {
        this.f56325t = z10;
    }

    public final void m(boolean z10) {
        this.f56328w = z10;
    }

    public final void n(boolean z10) {
        this.f56327v = z10;
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
        if (!this.f56324s || !this.f56317d.m()) {
            return false;
        }
        float f15 = 0.0f;
        if (this.f56317d.h()) {
            f12 = f10;
        } else {
            f12 = 0.0f;
        }
        int i10 = (int) f12;
        if (this.f56317d.l()) {
            f13 = f11;
        } else {
            f13 = 0.0f;
        }
        int i11 = (int) f13;
        this.f56317d.d(true, this.f56322q);
        this.f56317d.d(false, this.f56323r);
        int c10 = this.f56322q.c();
        int a10 = this.f56322q.a();
        int b10 = this.f56322q.b();
        int c11 = this.f56323r.c();
        int a11 = this.f56323r.a();
        int b11 = this.f56323r.b();
        if (!this.f56329x && (this.f56322q.d() || this.f56323r.d())) {
            return false;
        }
        if ((c10 >= b10 && c11 >= b11 && !this.f56317d.n()) || !this.f56318e.l()) {
            return false;
        }
        this.f56320o.setIsLongpressEnabled(false);
        if (this.f56317d.g()) {
            f14 = this.f56317d.i();
        } else {
            f14 = 0.0f;
        }
        if (this.f56317d.k()) {
            f15 = this.f56317d.j();
        }
        ZoomLogger zoomLogger = A;
        zoomLogger.b("startFling", "velocityX:", Integer.valueOf(i10), "velocityY:", Integer.valueOf(i11));
        zoomLogger.b("startFling", "flingX:", "min:", Integer.valueOf(c10), "max:", Integer.valueOf(b10), "start:", Integer.valueOf(a10), "overScroll:", Float.valueOf(f15));
        zoomLogger.b("startFling", "flingY:", "min:", Integer.valueOf(c11), "max:", Integer.valueOf(b11), "start:", Integer.valueOf(a11), "overScroll:", Float.valueOf(f14));
        this.f56321p.fling(a10, a11, i10, i11, c10, b10, c11, b11, (int) f14, (int) f15);
        this.f56319i.B(new c());
        return true;
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public boolean onScroll(MotionEvent motionEvent, MotionEvent motionEvent2, float f10, float f11) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (!this.f56325t) {
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
        if (!this.f56326u && z10) {
            return false;
        }
        if (!this.f56327v && z11) {
            return false;
        }
        if ((!this.f56328w && z12) || !this.f56317d.m() || !this.f56318e.n()) {
            return false;
        }
        ScaledPoint scaledPoint = new ScaledPoint(-f10, -f11);
        ScaledPoint f12 = this.f56317d.f();
        if ((f12.c() < 0.0f && scaledPoint.c() > 0.0f) || (f12.c() > 0.0f && scaledPoint.c() < 0.0f)) {
            float pow = (1.0f - ((float) Math.pow(Math.abs(f12.c()) / this.f56317d.i(), 0.4d))) * 0.6f;
            A.b("onScroll", "applying friction X:", Float.valueOf(pow));
            scaledPoint.h(scaledPoint.c() * pow);
        }
        if ((f12.d() < 0.0f && scaledPoint.d() > 0.0f) || (f12.d() > 0.0f && scaledPoint.d() < 0.0f)) {
            float pow2 = (1.0f - ((float) Math.pow(Math.abs(f12.d()) / this.f56317d.j(), 0.4d))) * 0.6f;
            A.b("onScroll", "applying friction Y:", Float.valueOf(pow2));
            scaledPoint.i(scaledPoint.d() * pow2);
        }
        if (!this.f56317d.h()) {
            scaledPoint.h(0.0f);
        }
        if (!this.f56317d.l()) {
            scaledPoint.i(0.0f);
        }
        if (scaledPoint.c() != 0.0f || scaledPoint.d() != 0.0f) {
            this.f56319i.h(new d(scaledPoint));
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
