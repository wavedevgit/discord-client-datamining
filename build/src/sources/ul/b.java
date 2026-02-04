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
    public static final a f50715y = new a(null);

    /* renamed from: z  reason: collision with root package name */
    private static final String f50716z;

    /* renamed from: d  reason: collision with root package name */
    private final wl.b f50717d;

    /* renamed from: e  reason: collision with root package name */
    private final tl.a f50718e;

    /* renamed from: i  reason: collision with root package name */
    private final vl.b f50719i;

    /* renamed from: o  reason: collision with root package name */
    private final GestureDetector f50720o;

    /* renamed from: p  reason: collision with root package name */
    private final OverScroller f50721p;

    /* renamed from: q  reason: collision with root package name */
    private final b.C0699b f50722q;

    /* renamed from: r  reason: collision with root package name */
    private final b.C0699b f50723r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f50724s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f50725t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f50726u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f50727v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f50728w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f50729x;

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
    public static final class C0636b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ScaledPoint f50730d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0636b(ScaledPoint scaledPoint) {
            super(1);
            this.f50730d = scaledPoint;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.c(this.f50730d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32464a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Runnable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ScaledPoint f50732d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(ScaledPoint scaledPoint) {
                super(1);
                this.f50732d = scaledPoint;
            }

            public final void a(c.a applyUpdate) {
                Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
                applyUpdate.e(this.f50732d, true);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.a) obj);
                return Unit.f32464a;
            }
        }

        c() {
        }

        @Override // java.lang.Runnable
        public void run() {
            if (b.this.f50721p.isFinished()) {
                b.this.f50718e.f();
                b.this.f50720o.setIsLongpressEnabled(true);
            } else if (b.this.f50721p.computeScrollOffset()) {
                b.this.f50719i.g(new a(new ScaledPoint(b.this.f50721p.getCurrX(), b.this.f50721p.getCurrY())));
                b.this.f50719i.C(this);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ScaledPoint f50733d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(ScaledPoint scaledPoint) {
            super(1);
            this.f50733d = scaledPoint;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.c(this.f50733d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32464a;
        }
    }

    static {
        String TAG = b.class.getSimpleName();
        f50716z = TAG;
        ZoomLogger.a aVar = ZoomLogger.f16907b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        A = aVar.a(TAG);
    }

    public b(Context context, wl.b panManager, tl.a stateController, vl.b matrixController) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(matrixController, "matrixController");
        this.f50717d = panManager;
        this.f50718e = stateController;
        this.f50719i = matrixController;
        GestureDetector gestureDetector = new GestureDetector(context, this);
        gestureDetector.setOnDoubleTapListener(null);
        Unit unit = Unit.f32464a;
        this.f50720o = gestureDetector;
        this.f50721p = new OverScroller(context);
        this.f50722q = new b.C0699b();
        this.f50723r = new b.C0699b();
        this.f50724s = true;
        this.f50725t = true;
        this.f50726u = true;
        this.f50727v = true;
        this.f50728w = true;
    }

    private final boolean g() {
        if (this.f50717d.n()) {
            ScaledPoint f10 = this.f50717d.f();
            if (f10.c() != 0.0f || f10.d() != 0.0f) {
                this.f50719i.e(new C0636b(f10));
                return true;
            }
            return false;
        }
        return false;
    }

    public final void e() {
        this.f50721p.forceFinished(true);
    }

    public final void f() {
        if (!g()) {
            this.f50718e.f();
        }
    }

    public final boolean h(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return this.f50720o.onTouchEvent(event);
    }

    public final void i(boolean z10) {
        this.f50724s = z10;
    }

    public final void j(boolean z10) {
        this.f50729x = z10;
    }

    public final void k(boolean z10) {
        this.f50726u = z10;
    }

    public final void l(boolean z10) {
        this.f50725t = z10;
    }

    public final void m(boolean z10) {
        this.f50728w = z10;
    }

    public final void n(boolean z10) {
        this.f50727v = z10;
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
        if (!this.f50724s || !this.f50717d.m()) {
            return false;
        }
        float f15 = 0.0f;
        if (this.f50717d.h()) {
            f12 = f10;
        } else {
            f12 = 0.0f;
        }
        int i10 = (int) f12;
        if (this.f50717d.l()) {
            f13 = f11;
        } else {
            f13 = 0.0f;
        }
        int i11 = (int) f13;
        this.f50717d.d(true, this.f50722q);
        this.f50717d.d(false, this.f50723r);
        int c10 = this.f50722q.c();
        int a10 = this.f50722q.a();
        int b10 = this.f50722q.b();
        int c11 = this.f50723r.c();
        int a11 = this.f50723r.a();
        int b11 = this.f50723r.b();
        if (!this.f50729x && (this.f50722q.d() || this.f50723r.d())) {
            return false;
        }
        if ((c10 >= b10 && c11 >= b11 && !this.f50717d.n()) || !this.f50718e.l()) {
            return false;
        }
        this.f50720o.setIsLongpressEnabled(false);
        if (this.f50717d.g()) {
            f14 = this.f50717d.i();
        } else {
            f14 = 0.0f;
        }
        if (this.f50717d.k()) {
            f15 = this.f50717d.j();
        }
        ZoomLogger zoomLogger = A;
        zoomLogger.b("startFling", "velocityX:", Integer.valueOf(i10), "velocityY:", Integer.valueOf(i11));
        zoomLogger.b("startFling", "flingX:", "min:", Integer.valueOf(c10), "max:", Integer.valueOf(b10), "start:", Integer.valueOf(a10), "overScroll:", Float.valueOf(f15));
        zoomLogger.b("startFling", "flingY:", "min:", Integer.valueOf(c11), "max:", Integer.valueOf(b11), "start:", Integer.valueOf(a11), "overScroll:", Float.valueOf(f14));
        this.f50721p.fling(a10, a11, i10, i11, c10, b10, c11, b11, (int) f14, (int) f15);
        this.f50719i.B(new c());
        return true;
    }

    @Override // android.view.GestureDetector.OnGestureListener
    public boolean onScroll(MotionEvent motionEvent, MotionEvent motionEvent2, float f10, float f11) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (!this.f50725t) {
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
        if (!this.f50726u && z10) {
            return false;
        }
        if (!this.f50727v && z11) {
            return false;
        }
        if ((!this.f50728w && z12) || !this.f50717d.m() || !this.f50718e.n()) {
            return false;
        }
        ScaledPoint scaledPoint = new ScaledPoint(-f10, -f11);
        ScaledPoint f12 = this.f50717d.f();
        if ((f12.c() < 0.0f && scaledPoint.c() > 0.0f) || (f12.c() > 0.0f && scaledPoint.c() < 0.0f)) {
            float pow = (1.0f - ((float) Math.pow(Math.abs(f12.c()) / this.f50717d.i(), 0.4d))) * 0.6f;
            A.b("onScroll", "applying friction X:", Float.valueOf(pow));
            scaledPoint.h(scaledPoint.c() * pow);
        }
        if ((f12.d() < 0.0f && scaledPoint.d() > 0.0f) || (f12.d() > 0.0f && scaledPoint.d() < 0.0f)) {
            float pow2 = (1.0f - ((float) Math.pow(Math.abs(f12.d()) / this.f50717d.j(), 0.4d))) * 0.6f;
            A.b("onScroll", "applying friction Y:", Float.valueOf(pow2));
            scaledPoint.i(scaledPoint.d() * pow2);
        }
        if (!this.f50717d.h()) {
            scaledPoint.h(0.0f);
        }
        if (!this.f50717d.l()) {
            scaledPoint.i(0.0f);
        }
        if (scaledPoint.c() != 0.0f || scaledPoint.d() != 0.0f) {
            this.f50719i.g(new d(scaledPoint));
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
