package xl;

import android.content.Context;
import android.graphics.PointF;
import android.view.MotionEvent;
import android.view.ScaleGestureDetector;
import com.otaliastudios.zoom.AbsolutePoint;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import yl.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ScaleGestureDetector.OnScaleGestureListener {

    /* renamed from: h  reason: collision with root package name */
    public static final C0712a f53933h = new C0712a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final String f53934i;

    /* renamed from: j  reason: collision with root package name */
    private static final ZoomLogger f53935j;

    /* renamed from: a  reason: collision with root package name */
    private final zl.c f53936a;

    /* renamed from: b  reason: collision with root package name */
    private final zl.b f53937b;

    /* renamed from: c  reason: collision with root package name */
    private final wl.a f53938c;

    /* renamed from: d  reason: collision with root package name */
    private final yl.b f53939d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaleGestureDetector f53940e;

    /* renamed from: f  reason: collision with root package name */
    private final AbsolutePoint f53941f;

    /* renamed from: g  reason: collision with root package name */
    private final AbsolutePoint f53942g;

    /* renamed from: xl.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0712a {
        public /* synthetic */ C0712a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0712a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f53943d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ PointF f53944e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(float f10, PointF pointF) {
            super(1);
            this.f53943d = f10;
            this.f53944e = pointF;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f53943d, true);
            applyUpdate.f(Float.valueOf(this.f53944e.x), Float.valueOf(this.f53944e.y));
            applyUpdate.h(true);
            applyUpdate.g(false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31988a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f53945d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbsolutePoint f53946e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(float f10, AbsolutePoint absolutePoint) {
            super(1);
            this.f53945d = f10;
            this.f53946e = absolutePoint;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f53945d, true);
            applyUpdate.d(this.f53946e, true);
            applyUpdate.g(false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31988a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f53947d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(float f10) {
            super(1);
            this.f53947d = f10;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.i(this.f53947d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31988a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f53948d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbsolutePoint f53949e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ PointF f53950i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(float f10, AbsolutePoint absolutePoint, PointF pointF) {
            super(1);
            this.f53948d = f10;
            this.f53949e = absolutePoint;
            this.f53950i = pointF;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.i(this.f53948d, true);
            animateUpdate.d(this.f53949e, true);
            animateUpdate.f(Float.valueOf(this.f53950i.x), Float.valueOf(this.f53950i.y));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31988a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f53951d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ a f53952e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ScaleGestureDetector f53953i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(float f10, a aVar, ScaleGestureDetector scaleGestureDetector) {
            super(1);
            this.f53951d = f10;
            this.f53952e = aVar;
            this.f53953i = scaleGestureDetector;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f53951d, true);
            applyUpdate.b(this.f53952e.f53942g, true);
            applyUpdate.f(Float.valueOf(this.f53953i.getFocusX()), Float.valueOf(this.f53953i.getFocusY()));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31988a;
        }
    }

    static {
        String TAG = a.class.getSimpleName();
        f53934i = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17313b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f53935j = aVar.a(TAG);
    }

    public a(Context context, zl.c zoomManager, zl.b panManager, wl.a stateController, yl.b matrixController) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(zoomManager, "zoomManager");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(matrixController, "matrixController");
        this.f53936a = zoomManager;
        this.f53937b = panManager;
        this.f53938c = stateController;
        this.f53939d = matrixController;
        ScaleGestureDetector scaleGestureDetector = new ScaleGestureDetector(context, this);
        this.f53940e = scaleGestureDetector;
        scaleGestureDetector.setQuickScaleEnabled(false);
        this.f53941f = new AbsolutePoint(Float.NaN, Float.NaN);
        this.f53942g = new AbsolutePoint(0.0f, 0.0f);
    }

    private final PointF b(AbsolutePoint absolutePoint) {
        float m10;
        if (this.f53939d.y() <= 1.0f) {
            PointF d10 = d(new AbsolutePoint((-this.f53939d.q()) / 2.0f, (-this.f53939d.n()) / 2.0f));
            d10.set(-d10.x, -d10.y);
            return d10;
        }
        float f10 = 0.0f;
        if (absolutePoint.c() > 0.0f) {
            m10 = this.f53939d.m();
        } else if (absolutePoint.c() < 0.0f) {
            m10 = 0.0f;
        } else {
            m10 = this.f53939d.m() / 2.0f;
        }
        if (absolutePoint.d() > 0.0f) {
            f10 = this.f53939d.l();
        } else if (absolutePoint.d() >= 0.0f) {
            f10 = this.f53939d.l() / 2.0f;
        }
        return new PointF(m10, f10);
    }

    private final AbsolutePoint c(PointF pointF) {
        return ScaledPoint.k(new ScaledPoint(this.f53939d.w() + pointF.x, this.f53939d.x() + pointF.y), this.f53939d.y(), null, 2, null);
    }

    private final PointF d(AbsolutePoint absolutePoint) {
        ScaledPoint e10 = AbsolutePoint.j(absolutePoint, this.f53939d.y(), null, 2, null).e(this.f53939d.v());
        return new PointF(e10.c(), e10.d());
    }

    private final void e() {
        if (!this.f53936a.m() && !this.f53937b.n()) {
            this.f53938c.f();
            return;
        }
        float f10 = this.f53936a.f();
        float i10 = this.f53936a.i();
        float b10 = this.f53936a.b(this.f53939d.y(), false);
        f53935j.b("onScaleEnd:", "zoom:", Float.valueOf(this.f53939d.y()), "newZoom:", Float.valueOf(b10), "max:", Float.valueOf(f10), "min:", Float.valueOf(i10));
        AbsolutePoint k10 = ScaledPoint.k(this.f53937b.f(), this.f53939d.y(), null, 2, null);
        if (k10.c() == 0.0f && k10.d() == 0.0f && Float.compare(b10, this.f53939d.y()) == 0) {
            this.f53938c.f();
            return;
        }
        PointF b11 = b(k10);
        AbsolutePoint f11 = this.f53939d.s().f(k10);
        if (Float.compare(b10, this.f53939d.y()) != 0) {
            AbsolutePoint absolutePoint = new AbsolutePoint(this.f53939d.s());
            float y10 = this.f53939d.y();
            this.f53939d.g(new b(b10, b11));
            AbsolutePoint k11 = ScaledPoint.k(this.f53937b.f(), this.f53939d.y(), null, 2, null);
            f11.g(this.f53939d.s().f(k11));
            this.f53939d.g(new c(y10, absolutePoint));
            k10 = k11;
        }
        if (k10.c() == 0.0f && k10.d() == 0.0f) {
            this.f53939d.e(new d(b10));
        } else {
            this.f53939d.e(new e(b10, f11, b11));
        }
    }

    public final boolean f(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return this.f53940e.onTouchEvent(event);
    }

    @Override // android.view.ScaleGestureDetector.OnScaleGestureListener
    public boolean onScale(ScaleGestureDetector detector) {
        Intrinsics.checkNotNullParameter(detector, "detector");
        if (!this.f53936a.l() || !this.f53938c.m()) {
            return false;
        }
        AbsolutePoint c10 = c(new PointF(-detector.getFocusX(), -detector.getFocusY()));
        if (Float.isNaN(this.f53941f.c())) {
            this.f53941f.g(c10);
            f53935j.b("onScale:", "Setting initial focus:", this.f53941f);
        } else {
            this.f53942g.g(this.f53941f.e(c10));
            f53935j.b("onScale:", "Got focus offset:", this.f53942g);
        }
        this.f53939d.g(new f(this.f53939d.y() * detector.getScaleFactor(), this, detector));
        return true;
    }

    @Override // android.view.ScaleGestureDetector.OnScaleGestureListener
    public boolean onScaleBegin(ScaleGestureDetector detector) {
        Intrinsics.checkNotNullParameter(detector, "detector");
        return true;
    }

    @Override // android.view.ScaleGestureDetector.OnScaleGestureListener
    public void onScaleEnd(ScaleGestureDetector detector) {
        Intrinsics.checkNotNullParameter(detector, "detector");
        f53935j.b("onScaleEnd:", "mInitialAbsFocusPoint.x:", Float.valueOf(this.f53941f.c()), "mInitialAbsFocusPoint.y:", Float.valueOf(this.f53941f.d()), "mOverZoomEnabled;", Boolean.valueOf(this.f53936a.m()));
        e();
        AbsolutePoint absolutePoint = this.f53941f;
        Float valueOf = Float.valueOf(Float.NaN);
        absolutePoint.h(valueOf, valueOf);
        AbsolutePoint absolutePoint2 = this.f53942g;
        Float valueOf2 = Float.valueOf(0.0f);
        absolutePoint2.h(valueOf2, valueOf2);
    }
}
