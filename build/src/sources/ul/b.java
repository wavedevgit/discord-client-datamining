package ul;

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
import vl.c;
import wl.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements GestureDetector.OnGestureListener {
    private static final ZoomLogger A;

    /* renamed from: y  reason: collision with root package name */
    public static final a f50431y = new a(null);

    /* renamed from: z  reason: collision with root package name */
    private static final String f50432z;

    /* renamed from: d  reason: collision with root package name */
    private final wl.b f50433d;

    /* renamed from: e  reason: collision with root package name */
    private final tl.a f50434e;

    /* renamed from: i  reason: collision with root package name */
    private final vl.b f50435i;

    /* renamed from: o  reason: collision with root package name */
    private final GestureDetector f50436o;

    /* renamed from: p  reason: collision with root package name */
    private final OverScroller f50437p;

    /* renamed from: q  reason: collision with root package name */
    private final b.C0707b f50438q;

    /* renamed from: r  reason: collision with root package name */
    private final b.C0707b f50439r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f50440s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f50441t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f50442u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f50443v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f50444w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f50445x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: ul.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0662b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ScaledPoint f50446d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0662b(ScaledPoint scaledPoint) {
            super(1);
            this.f50446d = scaledPoint;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.c(this.f50446d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33074a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Runnable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ScaledPoint f50448d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(ScaledPoint scaledPoint) {
                super(1);
                this.f50448d = scaledPoint;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.e(this.f50448d, true);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f33074a;
            }
        }

        c() {
        }

        @Override // java.lang.Runnable
        public void run() {
            if (b.this.f50437p.isFinished()) {
                b.this.f50434e.f();
                b.this.f50436o.setIsLongpressEnabled(true);
            } else if (b.this.f50437p.computeScrollOffset()) {
                b.this.f50435i.g(new a(new ScaledPoint(b.this.f50437p.getCurrX(), b.this.f50437p.getCurrY())));
                b.this.f50435i.C(this);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ScaledPoint f50449d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(ScaledPoint scaledPoint) {
            super(1);
            this.f50449d = scaledPoint;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.c(this.f50449d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33074a;
        }
    }

    static {
        String TAG = b.class.getSimpleName();
        f50432z = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17939b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        A = aVar.a(TAG);
    }

    public b(Context context, wl.b panManager, tl.a stateController, vl.b matrixController) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(matrixController, "matrixController");
        this.f50433d = panManager;
        this.f50434e = stateController;
        this.f50435i = matrixController;
        GestureDetector gestureDetector = new GestureDetector(context, this);
        gestureDetector.setOnDoubleTapListener(null);
        Unit unit = Unit.f33074a;
        this.f50436o = gestureDetector;
        this.f50437p = new OverScroller(context);
        this.f50438q = new b.C0707b();
        this.f50439r = new b.C0707b();
        this.f50440s = true;
        this.f50441t = true;
        this.f50442u = true;
        this.f50443v = true;
        this.f50444w = true;
    }

    private final boolean g() {
        if (this.f50433d.n()) {
            ScaledPoint f10 = this.f50433d.f();
            if (f10.c() != 0.0f || f10.d() != 0.0f) {
                this.f50435i.e(new C0662b(f10));
                return true;
            }
            return false;
        }
        return false;
    }

    public final void e() {
        this.f50437p.forceFinished(true);
    }

    public final void f() {
        if (!g()) {
            this.f50434e.f();
        }
    }

    public final boolean h(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return this.f50436o.onTouchEvent(event);
    }

    public final void i(boolean z10) {
        this.f50440s = z10;
    }

    public final void j(boolean z10) {
        this.f50445x = z10;
    }

    public final void k(boolean z10) {
        this.f50442u = z10;
    }

    public final void l(boolean z10) {
        this.f50441t = z10;
    }

    public final void m(boolean z10) {
        this.f50444w = z10;
    }

    public final void n(boolean z10) {
        this.f50443v = z10;
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
        if (!this.f50440s || !this.f50433d.m()) {
            return false;
        }
        float f15 = 0.0f;
        if (this.f50433d.h()) {
            f12 = f10;
        } else {
            f12 = 0.0f;
        }
        int i10 = (int) f12;
        if (this.f50433d.l()) {
            f13 = f11;
        } else {
            f13 = 0.0f;
        }
        int i11 = (int) f13;
        this.f50433d.d(true, this.f50438q);
        this.f50433d.d(false, this.f50439r);
        int c10 = this.f50438q.c();
        int a10 = this.f50438q.a();
        int b10 = this.f50438q.b();
        int c11 = this.f50439r.c();
        int a11 = this.f50439r.a();
        int b11 = this.f50439r.b();
        if (!this.f50445x && (this.f50438q.d() || this.f50439r.d())) {
            return false;
        }
        if ((c10 >= b10 && c11 >= b11 && !this.f50433d.n()) || !this.f50434e.l()) {
            return false;
        }
        this.f50436o.setIsLongpressEnabled(false);
        if (this.f50433d.g()) {
            f14 = this.f50433d.i();
        } else {
            f14 = 0.0f;
        }
        if (this.f50433d.k()) {
            f15 = this.f50433d.j();
        }
        ZoomLogger zoomLogger = A;
        zoomLogger.b("startFling", "velocityX:", Integer.valueOf(i10), "velocityY:", Integer.valueOf(i11));
        zoomLogger.b("startFling", "flingX:", "min:", Integer.valueOf(c10), "max:", Integer.valueOf(b10), "start:", Integer.valueOf(a10), "overScroll:", Float.valueOf(f15));
        zoomLogger.b("startFling", "flingY:", "min:", Integer.valueOf(c11), "max:", Integer.valueOf(b11), "start:", Integer.valueOf(a11), "overScroll:", Float.valueOf(f14));
        this.f50437p.fling(a10, a11, i10, i11, c10, b10, c11, b11, (int) f14, (int) f15);
        this.f50435i.B(new c());
        return true;
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public boolean onScroll(MotionEvent motionEvent, MotionEvent motionEvent2, float f10, float f11) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (!this.f50441t) {
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
        if (!this.f50442u && z10) {
            return false;
        }
        if (!this.f50443v && z11) {
            return false;
        }
        if ((!this.f50444w && z12) || !this.f50433d.m() || !this.f50434e.n()) {
            return false;
        }
        ScaledPoint scaledPoint = new ScaledPoint(-f10, -f11);
        ScaledPoint f12 = this.f50433d.f();
        if ((f12.c() < 0.0f && scaledPoint.c() > 0.0f) || (f12.c() > 0.0f && scaledPoint.c() < 0.0f)) {
            float pow = (1.0f - ((float) Math.pow(Math.abs(f12.c()) / this.f50433d.i(), 0.4d))) * 0.6f;
            A.b("onScroll", "applying friction X:", Float.valueOf(pow));
            scaledPoint.h(scaledPoint.c() * pow);
        }
        if ((f12.d() < 0.0f && scaledPoint.d() > 0.0f) || (f12.d() > 0.0f && scaledPoint.d() < 0.0f)) {
            float pow2 = (1.0f - ((float) Math.pow(Math.abs(f12.d()) / this.f50433d.j(), 0.4d))) * 0.6f;
            A.b("onScroll", "applying friction Y:", Float.valueOf(pow2));
            scaledPoint.i(scaledPoint.d() * pow2);
        }
        if (!this.f50433d.h()) {
            scaledPoint.h(0.0f);
        }
        if (!this.f50433d.l()) {
            scaledPoint.i(0.0f);
        }
        if (scaledPoint.c() != 0.0f || scaledPoint.d() != 0.0f) {
            this.f50435i.g(new d(scaledPoint));
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
