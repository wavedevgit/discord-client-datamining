package xl;

import android.content.Context;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.widget.OverScroller;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import yl.c;
import zl.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements GestureDetector.OnGestureListener {
    private static final ZoomLogger A;

    /* renamed from: y  reason: collision with root package name */
    public static final a f53954y = new a(null);

    /* renamed from: z  reason: collision with root package name */
    private static final String f53955z;

    /* renamed from: d  reason: collision with root package name */
    private final zl.b f53956d;

    /* renamed from: e  reason: collision with root package name */
    private final wl.a f53957e;

    /* renamed from: i  reason: collision with root package name */
    private final yl.b f53958i;

    /* renamed from: o  reason: collision with root package name */
    private final GestureDetector f53959o;

    /* renamed from: p  reason: collision with root package name */
    private final OverScroller f53960p;

    /* renamed from: q  reason: collision with root package name */
    private final b.C0783b f53961q;

    /* renamed from: r  reason: collision with root package name */
    private final b.C0783b f53962r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f53963s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f53964t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f53965u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f53966v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f53967w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f53968x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: xl.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0713b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ScaledPoint f53969d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0713b(ScaledPoint scaledPoint) {
            super(1);
            this.f53969d = scaledPoint;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.c(this.f53969d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31988a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Runnable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ScaledPoint f53971d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(ScaledPoint scaledPoint) {
                super(1);
                this.f53971d = scaledPoint;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.e(this.f53971d, true);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f31988a;
            }
        }

        c() {
        }

        @Override // java.lang.Runnable
        public void run() {
            if (b.this.f53960p.isFinished()) {
                b.this.f53957e.f();
                b.this.f53959o.setIsLongpressEnabled(true);
            } else if (b.this.f53960p.computeScrollOffset()) {
                b.this.f53958i.g(new a(new ScaledPoint(b.this.f53960p.getCurrX(), b.this.f53960p.getCurrY())));
                b.this.f53958i.C(this);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ScaledPoint f53972d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(ScaledPoint scaledPoint) {
            super(1);
            this.f53972d = scaledPoint;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.c(this.f53972d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31988a;
        }
    }

    static {
        String TAG = b.class.getSimpleName();
        f53955z = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17313b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        A = aVar.a(TAG);
    }

    public b(Context context, zl.b panManager, wl.a stateController, yl.b matrixController) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(matrixController, "matrixController");
        this.f53956d = panManager;
        this.f53957e = stateController;
        this.f53958i = matrixController;
        GestureDetector gestureDetector = new GestureDetector(context, this);
        gestureDetector.setOnDoubleTapListener(null);
        Unit unit = Unit.f31988a;
        this.f53959o = gestureDetector;
        this.f53960p = new OverScroller(context);
        this.f53961q = new b.C0783b();
        this.f53962r = new b.C0783b();
        this.f53963s = true;
        this.f53964t = true;
        this.f53965u = true;
        this.f53966v = true;
        this.f53967w = true;
    }

    private final boolean g() {
        if (this.f53956d.n()) {
            ScaledPoint f10 = this.f53956d.f();
            if (f10.c() != 0.0f || f10.d() != 0.0f) {
                this.f53958i.e(new C0713b(f10));
                return true;
            }
            return false;
        }
        return false;
    }

    public final void e() {
        this.f53960p.forceFinished(true);
    }

    public final void f() {
        if (!g()) {
            this.f53957e.f();
        }
    }

    public final boolean h(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return this.f53959o.onTouchEvent(event);
    }

    public final void i(boolean z10) {
        this.f53963s = z10;
    }

    public final void j(boolean z10) {
        this.f53968x = z10;
    }

    public final void k(boolean z10) {
        this.f53965u = z10;
    }

    public final void l(boolean z10) {
        this.f53964t = z10;
    }

    public final void m(boolean z10) {
        this.f53967w = z10;
    }

    public final void n(boolean z10) {
        this.f53966v = z10;
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
        if (!this.f53963s || !this.f53956d.m()) {
            return false;
        }
        float f15 = 0.0f;
        if (this.f53956d.h()) {
            f12 = f10;
        } else {
            f12 = 0.0f;
        }
        int i10 = (int) f12;
        if (this.f53956d.l()) {
            f13 = f11;
        } else {
            f13 = 0.0f;
        }
        int i11 = (int) f13;
        this.f53956d.d(true, this.f53961q);
        this.f53956d.d(false, this.f53962r);
        int c10 = this.f53961q.c();
        int a10 = this.f53961q.a();
        int b10 = this.f53961q.b();
        int c11 = this.f53962r.c();
        int a11 = this.f53962r.a();
        int b11 = this.f53962r.b();
        if (!this.f53968x && (this.f53961q.d() || this.f53962r.d())) {
            return false;
        }
        if ((c10 >= b10 && c11 >= b11 && !this.f53956d.n()) || !this.f53957e.l()) {
            return false;
        }
        this.f53959o.setIsLongpressEnabled(false);
        if (this.f53956d.g()) {
            f14 = this.f53956d.i();
        } else {
            f14 = 0.0f;
        }
        if (this.f53956d.k()) {
            f15 = this.f53956d.j();
        }
        ZoomLogger zoomLogger = A;
        zoomLogger.b("startFling", "velocityX:", Integer.valueOf(i10), "velocityY:", Integer.valueOf(i11));
        zoomLogger.b("startFling", "flingX:", "min:", Integer.valueOf(c10), "max:", Integer.valueOf(b10), "start:", Integer.valueOf(a10), "overScroll:", Float.valueOf(f15));
        zoomLogger.b("startFling", "flingY:", "min:", Integer.valueOf(c11), "max:", Integer.valueOf(b11), "start:", Integer.valueOf(a11), "overScroll:", Float.valueOf(f14));
        this.f53960p.fling(a10, a11, i10, i11, c10, b10, c11, b11, (int) f14, (int) f15);
        this.f53958i.B(new c());
        return true;
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public boolean onScroll(MotionEvent motionEvent, MotionEvent motionEvent2, float f10, float f11) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (!this.f53964t) {
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
        if (!this.f53965u && z10) {
            return false;
        }
        if (!this.f53966v && z11) {
            return false;
        }
        if ((!this.f53967w && z12) || !this.f53956d.m() || !this.f53957e.n()) {
            return false;
        }
        ScaledPoint scaledPoint = new ScaledPoint(-f10, -f11);
        ScaledPoint f12 = this.f53956d.f();
        if ((f12.c() < 0.0f && scaledPoint.c() > 0.0f) || (f12.c() > 0.0f && scaledPoint.c() < 0.0f)) {
            float pow = (1.0f - ((float) Math.pow(Math.abs(f12.c()) / this.f53956d.i(), 0.4d))) * 0.6f;
            A.b("onScroll", "applying friction X:", Float.valueOf(pow));
            scaledPoint.h(scaledPoint.c() * pow);
        }
        if ((f12.d() < 0.0f && scaledPoint.d() > 0.0f) || (f12.d() > 0.0f && scaledPoint.d() < 0.0f)) {
            float pow2 = (1.0f - ((float) Math.pow(Math.abs(f12.d()) / this.f53956d.j(), 0.4d))) * 0.6f;
            A.b("onScroll", "applying friction Y:", Float.valueOf(pow2));
            scaledPoint.i(scaledPoint.d() * pow2);
        }
        if (!this.f53956d.h()) {
            scaledPoint.h(0.0f);
        }
        if (!this.f53956d.l()) {
            scaledPoint.i(0.0f);
        }
        if (scaledPoint.c() != 0.0f || scaledPoint.d() != 0.0f) {
            this.f53958i.g(new d(scaledPoint));
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
