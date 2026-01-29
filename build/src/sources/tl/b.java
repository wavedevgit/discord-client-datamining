package tl;

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
import ul.c;
import vl.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements GestureDetector.OnGestureListener {
    private static final ZoomLogger A;

    /* renamed from: y  reason: collision with root package name */
    public static final a f49657y = new a(null);

    /* renamed from: z  reason: collision with root package name */
    private static final String f49658z;

    /* renamed from: d  reason: collision with root package name */
    private final vl.b f49659d;

    /* renamed from: e  reason: collision with root package name */
    private final sl.a f49660e;

    /* renamed from: i  reason: collision with root package name */
    private final ul.b f49661i;

    /* renamed from: o  reason: collision with root package name */
    private final GestureDetector f49662o;

    /* renamed from: p  reason: collision with root package name */
    private final OverScroller f49663p;

    /* renamed from: q  reason: collision with root package name */
    private final b.C0679b f49664q;

    /* renamed from: r  reason: collision with root package name */
    private final b.C0679b f49665r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f49666s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f49667t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f49668u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f49669v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f49670w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f49671x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: tl.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0641b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ScaledPoint f49672d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0641b(ScaledPoint scaledPoint) {
            super(1);
            this.f49672d = scaledPoint;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.c(this.f49672d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33282a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Runnable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ScaledPoint f49674d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(ScaledPoint scaledPoint) {
                super(1);
                this.f49674d = scaledPoint;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.e(this.f49674d, true);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f33282a;
            }
        }

        c() {
        }

        @Override // java.lang.Runnable
        public void run() {
            if (b.this.f49663p.isFinished()) {
                b.this.f49660e.f();
                b.this.f49662o.setIsLongpressEnabled(true);
            } else if (b.this.f49663p.computeScrollOffset()) {
                b.this.f49661i.g(new a(new ScaledPoint(b.this.f49663p.getCurrX(), b.this.f49663p.getCurrY())));
                b.this.f49661i.C(this);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ScaledPoint f49675d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(ScaledPoint scaledPoint) {
            super(1);
            this.f49675d = scaledPoint;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.c(this.f49675d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33282a;
        }
    }

    static {
        String TAG = b.class.getSimpleName();
        f49658z = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18306b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        A = aVar.a(TAG);
    }

    public b(Context context, vl.b panManager, sl.a stateController, ul.b matrixController) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(matrixController, "matrixController");
        this.f49659d = panManager;
        this.f49660e = stateController;
        this.f49661i = matrixController;
        GestureDetector gestureDetector = new GestureDetector(context, this);
        gestureDetector.setOnDoubleTapListener(null);
        Unit unit = Unit.f33282a;
        this.f49662o = gestureDetector;
        this.f49663p = new OverScroller(context);
        this.f49664q = new b.C0679b();
        this.f49665r = new b.C0679b();
        this.f49666s = true;
        this.f49667t = true;
        this.f49668u = true;
        this.f49669v = true;
        this.f49670w = true;
    }

    private final boolean g() {
        if (this.f49659d.n()) {
            ScaledPoint f10 = this.f49659d.f();
            if (f10.c() != 0.0f || f10.d() != 0.0f) {
                this.f49661i.e(new C0641b(f10));
                return true;
            }
            return false;
        }
        return false;
    }

    public final void e() {
        this.f49663p.forceFinished(true);
    }

    public final void f() {
        if (!g()) {
            this.f49660e.f();
        }
    }

    public final boolean h(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return this.f49662o.onTouchEvent(event);
    }

    public final void i(boolean z10) {
        this.f49666s = z10;
    }

    public final void j(boolean z10) {
        this.f49671x = z10;
    }

    public final void k(boolean z10) {
        this.f49668u = z10;
    }

    public final void l(boolean z10) {
        this.f49667t = z10;
    }

    public final void m(boolean z10) {
        this.f49670w = z10;
    }

    public final void n(boolean z10) {
        this.f49669v = z10;
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
        if (!this.f49666s || !this.f49659d.m()) {
            return false;
        }
        float f15 = 0.0f;
        if (this.f49659d.h()) {
            f12 = f10;
        } else {
            f12 = 0.0f;
        }
        int i10 = (int) f12;
        if (this.f49659d.l()) {
            f13 = f11;
        } else {
            f13 = 0.0f;
        }
        int i11 = (int) f13;
        this.f49659d.d(true, this.f49664q);
        this.f49659d.d(false, this.f49665r);
        int c10 = this.f49664q.c();
        int a10 = this.f49664q.a();
        int b10 = this.f49664q.b();
        int c11 = this.f49665r.c();
        int a11 = this.f49665r.a();
        int b11 = this.f49665r.b();
        if (!this.f49671x && (this.f49664q.d() || this.f49665r.d())) {
            return false;
        }
        if ((c10 >= b10 && c11 >= b11 && !this.f49659d.n()) || !this.f49660e.l()) {
            return false;
        }
        this.f49662o.setIsLongpressEnabled(false);
        if (this.f49659d.g()) {
            f14 = this.f49659d.i();
        } else {
            f14 = 0.0f;
        }
        if (this.f49659d.k()) {
            f15 = this.f49659d.j();
        }
        ZoomLogger zoomLogger = A;
        zoomLogger.b("startFling", "velocityX:", Integer.valueOf(i10), "velocityY:", Integer.valueOf(i11));
        zoomLogger.b("startFling", "flingX:", "min:", Integer.valueOf(c10), "max:", Integer.valueOf(b10), "start:", Integer.valueOf(a10), "overScroll:", Float.valueOf(f15));
        zoomLogger.b("startFling", "flingY:", "min:", Integer.valueOf(c11), "max:", Integer.valueOf(b11), "start:", Integer.valueOf(a11), "overScroll:", Float.valueOf(f14));
        this.f49663p.fling(a10, a11, i10, i11, c10, b10, c11, b11, (int) f14, (int) f15);
        this.f49661i.B(new c());
        return true;
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public boolean onScroll(MotionEvent motionEvent, MotionEvent motionEvent2, float f10, float f11) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (!this.f49667t) {
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
        if (!this.f49668u && z10) {
            return false;
        }
        if (!this.f49669v && z11) {
            return false;
        }
        if ((!this.f49670w && z12) || !this.f49659d.m() || !this.f49660e.n()) {
            return false;
        }
        ScaledPoint scaledPoint = new ScaledPoint(-f10, -f11);
        ScaledPoint f12 = this.f49659d.f();
        if ((f12.c() < 0.0f && scaledPoint.c() > 0.0f) || (f12.c() > 0.0f && scaledPoint.c() < 0.0f)) {
            float pow = (1.0f - ((float) Math.pow(Math.abs(f12.c()) / this.f49659d.i(), 0.4d))) * 0.6f;
            A.b("onScroll", "applying friction X:", Float.valueOf(pow));
            scaledPoint.h(scaledPoint.c() * pow);
        }
        if ((f12.d() < 0.0f && scaledPoint.d() > 0.0f) || (f12.d() > 0.0f && scaledPoint.d() < 0.0f)) {
            float pow2 = (1.0f - ((float) Math.pow(Math.abs(f12.d()) / this.f49659d.j(), 0.4d))) * 0.6f;
            A.b("onScroll", "applying friction Y:", Float.valueOf(pow2));
            scaledPoint.i(scaledPoint.d() * pow2);
        }
        if (!this.f49659d.h()) {
            scaledPoint.h(0.0f);
        }
        if (!this.f49659d.l()) {
            scaledPoint.i(0.0f);
        }
        if (scaledPoint.c() != 0.0f || scaledPoint.d() != 0.0f) {
            this.f49661i.g(new d(scaledPoint));
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
