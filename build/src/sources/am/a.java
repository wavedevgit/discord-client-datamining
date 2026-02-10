package am;

import android.content.Context;
import android.graphics.PointF;
import android.view.MotionEvent;
import android.view.ScaleGestureDetector;
import bm.c;
import com.otaliastudios.zoom.AbsolutePoint;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ScaleGestureDetector.OnScaleGestureListener {

    /* renamed from: h  reason: collision with root package name */
    public static final C0011a f810h = new C0011a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final String f811i;

    /* renamed from: j  reason: collision with root package name */
    private static final ZoomLogger f812j;

    /* renamed from: a  reason: collision with root package name */
    private final cm.c f813a;

    /* renamed from: b  reason: collision with root package name */
    private final cm.b f814b;

    /* renamed from: c  reason: collision with root package name */
    private final zl.a f815c;

    /* renamed from: d  reason: collision with root package name */
    private final bm.b f816d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaleGestureDetector f817e;

    /* renamed from: f  reason: collision with root package name */
    private final AbsolutePoint f818f;

    /* renamed from: g  reason: collision with root package name */
    private final AbsolutePoint f819g;

    /* renamed from: am.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0011a {
        public /* synthetic */ C0011a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0011a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f820d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ PointF f821e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(float f10, PointF pointF) {
            super(1);
            this.f820d = f10;
            this.f821e = pointF;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f820d, true);
            applyUpdate.f(Float.valueOf(this.f821e.x), Float.valueOf(this.f821e.y));
            applyUpdate.h(true);
            applyUpdate.g(false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31765a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f822d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbsolutePoint f823e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(float f10, AbsolutePoint absolutePoint) {
            super(1);
            this.f822d = f10;
            this.f823e = absolutePoint;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f822d, true);
            applyUpdate.d(this.f823e, true);
            applyUpdate.g(false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31765a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f824d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(float f10) {
            super(1);
            this.f824d = f10;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.i(this.f824d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31765a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f825d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbsolutePoint f826e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ PointF f827i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(float f10, AbsolutePoint absolutePoint, PointF pointF) {
            super(1);
            this.f825d = f10;
            this.f826e = absolutePoint;
            this.f827i = pointF;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.i(this.f825d, true);
            animateUpdate.d(this.f826e, true);
            animateUpdate.f(Float.valueOf(this.f827i.x), Float.valueOf(this.f827i.y));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31765a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f828d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ a f829e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ScaleGestureDetector f830i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(float f10, a aVar, ScaleGestureDetector scaleGestureDetector) {
            super(1);
            this.f828d = f10;
            this.f829e = aVar;
            this.f830i = scaleGestureDetector;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f828d, true);
            applyUpdate.b(this.f829e.f819g, true);
            applyUpdate.f(Float.valueOf(this.f830i.getFocusX()), Float.valueOf(this.f830i.getFocusY()));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f31765a;
        }
    }

    static {
        String TAG = a.class.getSimpleName();
        f811i = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17433b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f812j = aVar.a(TAG);
    }

    public a(Context context, cm.c zoomManager, cm.b panManager, zl.a stateController, bm.b matrixController) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(zoomManager, "zoomManager");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(matrixController, "matrixController");
        this.f813a = zoomManager;
        this.f814b = panManager;
        this.f815c = stateController;
        this.f816d = matrixController;
        ScaleGestureDetector scaleGestureDetector = new ScaleGestureDetector(context, this);
        this.f817e = scaleGestureDetector;
        scaleGestureDetector.setQuickScaleEnabled(false);
        this.f818f = new AbsolutePoint(Float.NaN, Float.NaN);
        this.f819g = new AbsolutePoint(0.0f, 0.0f);
    }

    private final PointF b(AbsolutePoint absolutePoint) {
        float m10;
        if (this.f816d.y() <= 1.0f) {
            PointF d10 = d(new AbsolutePoint((-this.f816d.q()) / 2.0f, (-this.f816d.n()) / 2.0f));
            d10.set(-d10.x, -d10.y);
            return d10;
        }
        float f10 = 0.0f;
        if (absolutePoint.c() > 0.0f) {
            m10 = this.f816d.m();
        } else if (absolutePoint.c() < 0.0f) {
            m10 = 0.0f;
        } else {
            m10 = this.f816d.m() / 2.0f;
        }
        if (absolutePoint.d() > 0.0f) {
            f10 = this.f816d.l();
        } else if (absolutePoint.d() >= 0.0f) {
            f10 = this.f816d.l() / 2.0f;
        }
        return new PointF(m10, f10);
    }

    private final AbsolutePoint c(PointF pointF) {
        return ScaledPoint.k(new ScaledPoint(this.f816d.w() + pointF.x, this.f816d.x() + pointF.y), this.f816d.y(), null, 2, null);
    }

    private final PointF d(AbsolutePoint absolutePoint) {
        ScaledPoint e10 = AbsolutePoint.j(absolutePoint, this.f816d.y(), null, 2, null).e(this.f816d.v());
        return new PointF(e10.c(), e10.d());
    }

    private final void e() {
        if (!this.f813a.m() && !this.f814b.n()) {
            this.f815c.f();
            return;
        }
        float f10 = this.f813a.f();
        float i10 = this.f813a.i();
        float b10 = this.f813a.b(this.f816d.y(), false);
        f812j.b("onScaleEnd:", "zoom:", Float.valueOf(this.f816d.y()), "newZoom:", Float.valueOf(b10), "max:", Float.valueOf(f10), "min:", Float.valueOf(i10));
        AbsolutePoint k10 = ScaledPoint.k(this.f814b.f(), this.f816d.y(), null, 2, null);
        if (k10.c() == 0.0f && k10.d() == 0.0f && Float.compare(b10, this.f816d.y()) == 0) {
            this.f815c.f();
            return;
        }
        PointF b11 = b(k10);
        AbsolutePoint f11 = this.f816d.s().f(k10);
        if (Float.compare(b10, this.f816d.y()) != 0) {
            AbsolutePoint absolutePoint = new AbsolutePoint(this.f816d.s());
            float y10 = this.f816d.y();
            this.f816d.h(new b(b10, b11));
            AbsolutePoint k11 = ScaledPoint.k(this.f814b.f(), this.f816d.y(), null, 2, null);
            f11.g(this.f816d.s().f(k11));
            this.f816d.h(new c(y10, absolutePoint));
            k10 = k11;
        }
        if (k10.c() == 0.0f && k10.d() == 0.0f) {
            this.f816d.f(new d(b10));
        } else {
            this.f816d.f(new e(b10, f11, b11));
        }
    }

    public final boolean f(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return this.f817e.onTouchEvent(event);
    }

    @Override // android.view.ScaleGestureDetector.OnScaleGestureListener
    public boolean onScale(ScaleGestureDetector detector) {
        Intrinsics.checkNotNullParameter(detector, "detector");
        if (!this.f813a.l() || !this.f815c.m()) {
            return false;
        }
        AbsolutePoint c10 = c(new PointF(-detector.getFocusX(), -detector.getFocusY()));
        if (Float.isNaN(this.f818f.c())) {
            this.f818f.g(c10);
            f812j.b("onScale:", "Setting initial focus:", this.f818f);
        } else {
            this.f819g.g(this.f818f.e(c10));
            f812j.b("onScale:", "Got focus offset:", this.f819g);
        }
        this.f816d.h(new f(this.f816d.y() * detector.getScaleFactor(), this, detector));
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
        f812j.b("onScaleEnd:", "mInitialAbsFocusPoint.x:", Float.valueOf(this.f818f.c()), "mInitialAbsFocusPoint.y:", Float.valueOf(this.f818f.d()), "mOverZoomEnabled;", Boolean.valueOf(this.f813a.m()));
        e();
        AbsolutePoint absolutePoint = this.f818f;
        Float valueOf = Float.valueOf(Float.NaN);
        absolutePoint.h(valueOf, valueOf);
        AbsolutePoint absolutePoint2 = this.f819g;
        Float valueOf2 = Float.valueOf(0.0f);
        absolutePoint2.h(valueOf2, valueOf2);
    }
}
