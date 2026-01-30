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
    public static final a f49673y = new a(null);

    /* renamed from: z  reason: collision with root package name */
    private static final String f49674z;

    /* renamed from: d  reason: collision with root package name */
    private final vl.b f49675d;

    /* renamed from: e  reason: collision with root package name */
    private final sl.a f49676e;

    /* renamed from: i  reason: collision with root package name */
    private final ul.b f49677i;

    /* renamed from: o  reason: collision with root package name */
    private final GestureDetector f49678o;

    /* renamed from: p  reason: collision with root package name */
    private final OverScroller f49679p;

    /* renamed from: q  reason: collision with root package name */
    private final b.C0679b f49680q;

    /* renamed from: r  reason: collision with root package name */
    private final b.C0679b f49681r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f49682s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f49683t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f49684u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f49685v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f49686w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f49687x;

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
        final /* synthetic */ ScaledPoint f49688d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0641b(ScaledPoint scaledPoint) {
            super(1);
            this.f49688d = scaledPoint;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.c(this.f49688d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33298a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Runnable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ScaledPoint f49690d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(ScaledPoint scaledPoint) {
                super(1);
                this.f49690d = scaledPoint;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.e(this.f49690d, true);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f33298a;
            }
        }

        c() {
        }

        @Override // java.lang.Runnable
        public void run() {
            if (b.this.f49679p.isFinished()) {
                b.this.f49676e.f();
                b.this.f49678o.setIsLongpressEnabled(true);
            } else if (b.this.f49679p.computeScrollOffset()) {
                b.this.f49677i.g(new a(new ScaledPoint(b.this.f49679p.getCurrX(), b.this.f49679p.getCurrY())));
                b.this.f49677i.C(this);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ScaledPoint f49691d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(ScaledPoint scaledPoint) {
            super(1);
            this.f49691d = scaledPoint;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.c(this.f49691d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33298a;
        }
    }

    static {
        String TAG = b.class.getSimpleName();
        f49674z = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18306b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        A = aVar.a(TAG);
    }

    public b(Context context, vl.b panManager, sl.a stateController, ul.b matrixController) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(matrixController, "matrixController");
        this.f49675d = panManager;
        this.f49676e = stateController;
        this.f49677i = matrixController;
        GestureDetector gestureDetector = new GestureDetector(context, this);
        gestureDetector.setOnDoubleTapListener(null);
        Unit unit = Unit.f33298a;
        this.f49678o = gestureDetector;
        this.f49679p = new OverScroller(context);
        this.f49680q = new b.C0679b();
        this.f49681r = new b.C0679b();
        this.f49682s = true;
        this.f49683t = true;
        this.f49684u = true;
        this.f49685v = true;
        this.f49686w = true;
    }

    private final boolean g() {
        if (this.f49675d.n()) {
            ScaledPoint f10 = this.f49675d.f();
            if (f10.c() != 0.0f || f10.d() != 0.0f) {
                this.f49677i.e(new C0641b(f10));
                return true;
            }
            return false;
        }
        return false;
    }

    public final void e() {
        this.f49679p.forceFinished(true);
    }

    public final void f() {
        if (!g()) {
            this.f49676e.f();
        }
    }

    public final boolean h(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return this.f49678o.onTouchEvent(event);
    }

    public final void i(boolean z10) {
        this.f49682s = z10;
    }

    public final void j(boolean z10) {
        this.f49687x = z10;
    }

    public final void k(boolean z10) {
        this.f49684u = z10;
    }

    public final void l(boolean z10) {
        this.f49683t = z10;
    }

    public final void m(boolean z10) {
        this.f49686w = z10;
    }

    public final void n(boolean z10) {
        this.f49685v = z10;
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
        if (!this.f49682s || !this.f49675d.m()) {
            return false;
        }
        float f15 = 0.0f;
        if (this.f49675d.h()) {
            f12 = f10;
        } else {
            f12 = 0.0f;
        }
        int i10 = (int) f12;
        if (this.f49675d.l()) {
            f13 = f11;
        } else {
            f13 = 0.0f;
        }
        int i11 = (int) f13;
        this.f49675d.d(true, this.f49680q);
        this.f49675d.d(false, this.f49681r);
        int c10 = this.f49680q.c();
        int a10 = this.f49680q.a();
        int b10 = this.f49680q.b();
        int c11 = this.f49681r.c();
        int a11 = this.f49681r.a();
        int b11 = this.f49681r.b();
        if (!this.f49687x && (this.f49680q.d() || this.f49681r.d())) {
            return false;
        }
        if ((c10 >= b10 && c11 >= b11 && !this.f49675d.n()) || !this.f49676e.l()) {
            return false;
        }
        this.f49678o.setIsLongpressEnabled(false);
        if (this.f49675d.g()) {
            f14 = this.f49675d.i();
        } else {
            f14 = 0.0f;
        }
        if (this.f49675d.k()) {
            f15 = this.f49675d.j();
        }
        ZoomLogger zoomLogger = A;
        zoomLogger.b("startFling", "velocityX:", Integer.valueOf(i10), "velocityY:", Integer.valueOf(i11));
        zoomLogger.b("startFling", "flingX:", "min:", Integer.valueOf(c10), "max:", Integer.valueOf(b10), "start:", Integer.valueOf(a10), "overScroll:", Float.valueOf(f15));
        zoomLogger.b("startFling", "flingY:", "min:", Integer.valueOf(c11), "max:", Integer.valueOf(b11), "start:", Integer.valueOf(a11), "overScroll:", Float.valueOf(f14));
        this.f49679p.fling(a10, a11, i10, i11, c10, b10, c11, b11, (int) f14, (int) f15);
        this.f49677i.B(new c());
        return true;
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public boolean onScroll(MotionEvent motionEvent, MotionEvent motionEvent2, float f10, float f11) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (!this.f49683t) {
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
        if (!this.f49684u && z10) {
            return false;
        }
        if (!this.f49685v && z11) {
            return false;
        }
        if ((!this.f49686w && z12) || !this.f49675d.m() || !this.f49676e.n()) {
            return false;
        }
        ScaledPoint scaledPoint = new ScaledPoint(-f10, -f11);
        ScaledPoint f12 = this.f49675d.f();
        if ((f12.c() < 0.0f && scaledPoint.c() > 0.0f) || (f12.c() > 0.0f && scaledPoint.c() < 0.0f)) {
            float pow = (1.0f - ((float) Math.pow(Math.abs(f12.c()) / this.f49675d.i(), 0.4d))) * 0.6f;
            A.b("onScroll", "applying friction X:", Float.valueOf(pow));
            scaledPoint.h(scaledPoint.c() * pow);
        }
        if ((f12.d() < 0.0f && scaledPoint.d() > 0.0f) || (f12.d() > 0.0f && scaledPoint.d() < 0.0f)) {
            float pow2 = (1.0f - ((float) Math.pow(Math.abs(f12.d()) / this.f49675d.j(), 0.4d))) * 0.6f;
            A.b("onScroll", "applying friction Y:", Float.valueOf(pow2));
            scaledPoint.i(scaledPoint.d() * pow2);
        }
        if (!this.f49675d.h()) {
            scaledPoint.h(0.0f);
        }
        if (!this.f49675d.l()) {
            scaledPoint.i(0.0f);
        }
        if (scaledPoint.c() != 0.0f || scaledPoint.d() != 0.0f) {
            this.f49677i.g(new d(scaledPoint));
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
