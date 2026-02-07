package zl;

import am.c;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ScaleGestureDetector.OnScaleGestureListener {

    /* renamed from: h  reason: collision with root package name */
    public static final C0772a f56342h = new C0772a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final String f56343i;

    /* renamed from: j  reason: collision with root package name */
    private static final ZoomLogger f56344j;

    /* renamed from: a  reason: collision with root package name */
    private final bm.c f56345a;

    /* renamed from: b  reason: collision with root package name */
    private final bm.b f56346b;

    /* renamed from: c  reason: collision with root package name */
    private final yl.a f56347c;

    /* renamed from: d  reason: collision with root package name */
    private final am.b f56348d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaleGestureDetector f56349e;

    /* renamed from: f  reason: collision with root package name */
    private final AbsolutePoint f56350f;

    /* renamed from: g  reason: collision with root package name */
    private final AbsolutePoint f56351g;

    /* renamed from: zl.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0772a {
        public /* synthetic */ C0772a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0772a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f56352d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ PointF f56353e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(float f10, PointF pointF) {
            super(1);
            this.f56352d = f10;
            this.f56353e = pointF;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f56352d, true);
            applyUpdate.f(Float.valueOf(this.f56353e.x), Float.valueOf(this.f56353e.y));
            applyUpdate.h(true);
            applyUpdate.g(false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32056a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f56354d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbsolutePoint f56355e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(float f10, AbsolutePoint absolutePoint) {
            super(1);
            this.f56354d = f10;
            this.f56355e = absolutePoint;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f56354d, true);
            applyUpdate.d(this.f56355e, true);
            applyUpdate.g(false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32056a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f56356d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(float f10) {
            super(1);
            this.f56356d = f10;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.i(this.f56356d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32056a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f56357d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbsolutePoint f56358e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ PointF f56359i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(float f10, AbsolutePoint absolutePoint, PointF pointF) {
            super(1);
            this.f56357d = f10;
            this.f56358e = absolutePoint;
            this.f56359i = pointF;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.i(this.f56357d, true);
            animateUpdate.d(this.f56358e, true);
            animateUpdate.f(Float.valueOf(this.f56359i.x), Float.valueOf(this.f56359i.y));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32056a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f56360d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ a f56361e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ScaleGestureDetector f56362i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(float f10, a aVar, ScaleGestureDetector scaleGestureDetector) {
            super(1);
            this.f56360d = f10;
            this.f56361e = aVar;
            this.f56362i = scaleGestureDetector;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f56360d, true);
            applyUpdate.b(this.f56361e.f56351g, true);
            applyUpdate.f(Float.valueOf(this.f56362i.getFocusX()), Float.valueOf(this.f56362i.getFocusY()));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32056a;
        }
    }

    static {
        String TAG = a.class.getSimpleName();
        f56343i = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17293b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f56344j = aVar.a(TAG);
    }

    public a(Context context, bm.c zoomManager, bm.b panManager, yl.a stateController, am.b matrixController) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(zoomManager, "zoomManager");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(matrixController, "matrixController");
        this.f56345a = zoomManager;
        this.f56346b = panManager;
        this.f56347c = stateController;
        this.f56348d = matrixController;
        ScaleGestureDetector scaleGestureDetector = new ScaleGestureDetector(context, this);
        this.f56349e = scaleGestureDetector;
        scaleGestureDetector.setQuickScaleEnabled(false);
        this.f56350f = new AbsolutePoint(Float.NaN, Float.NaN);
        this.f56351g = new AbsolutePoint(0.0f, 0.0f);
    }

    private final PointF b(AbsolutePoint absolutePoint) {
        float m10;
        if (this.f56348d.y() <= 1.0f) {
            PointF d10 = d(new AbsolutePoint((-this.f56348d.q()) / 2.0f, (-this.f56348d.n()) / 2.0f));
            d10.set(-d10.x, -d10.y);
            return d10;
        }
        float f10 = 0.0f;
        if (absolutePoint.c() > 0.0f) {
            m10 = this.f56348d.m();
        } else if (absolutePoint.c() < 0.0f) {
            m10 = 0.0f;
        } else {
            m10 = this.f56348d.m() / 2.0f;
        }
        if (absolutePoint.d() > 0.0f) {
            f10 = this.f56348d.l();
        } else if (absolutePoint.d() >= 0.0f) {
            f10 = this.f56348d.l() / 2.0f;
        }
        return new PointF(m10, f10);
    }

    private final AbsolutePoint c(PointF pointF) {
        return ScaledPoint.k(new ScaledPoint(this.f56348d.w() + pointF.x, this.f56348d.x() + pointF.y), this.f56348d.y(), null, 2, null);
    }

    private final PointF d(AbsolutePoint absolutePoint) {
        ScaledPoint e10 = AbsolutePoint.j(absolutePoint, this.f56348d.y(), null, 2, null).e(this.f56348d.v());
        return new PointF(e10.c(), e10.d());
    }

    private final void e() {
        if (!this.f56345a.m() && !this.f56346b.n()) {
            this.f56347c.f();
            return;
        }
        float f10 = this.f56345a.f();
        float i10 = this.f56345a.i();
        float b10 = this.f56345a.b(this.f56348d.y(), false);
        f56344j.b("onScaleEnd:", "zoom:", Float.valueOf(this.f56348d.y()), "newZoom:", Float.valueOf(b10), "max:", Float.valueOf(f10), "min:", Float.valueOf(i10));
        AbsolutePoint k10 = ScaledPoint.k(this.f56346b.f(), this.f56348d.y(), null, 2, null);
        if (k10.c() == 0.0f && k10.d() == 0.0f && Float.compare(b10, this.f56348d.y()) == 0) {
            this.f56347c.f();
            return;
        }
        PointF b11 = b(k10);
        AbsolutePoint f11 = this.f56348d.s().f(k10);
        if (Float.compare(b10, this.f56348d.y()) != 0) {
            AbsolutePoint absolutePoint = new AbsolutePoint(this.f56348d.s());
            float y10 = this.f56348d.y();
            this.f56348d.h(new b(b10, b11));
            AbsolutePoint k11 = ScaledPoint.k(this.f56346b.f(), this.f56348d.y(), null, 2, null);
            f11.g(this.f56348d.s().f(k11));
            this.f56348d.h(new c(y10, absolutePoint));
            k10 = k11;
        }
        if (k10.c() == 0.0f && k10.d() == 0.0f) {
            this.f56348d.f(new d(b10));
        } else {
            this.f56348d.f(new e(b10, f11, b11));
        }
    }

    public final boolean f(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return this.f56349e.onTouchEvent(event);
    }

    @Override // android.view.ScaleGestureDetector.OnScaleGestureListener
    public boolean onScale(ScaleGestureDetector detector) {
        Intrinsics.checkNotNullParameter(detector, "detector");
        if (!this.f56345a.l() || !this.f56347c.m()) {
            return false;
        }
        AbsolutePoint c10 = c(new PointF(-detector.getFocusX(), -detector.getFocusY()));
        if (Float.isNaN(this.f56350f.c())) {
            this.f56350f.g(c10);
            f56344j.b("onScale:", "Setting initial focus:", this.f56350f);
        } else {
            this.f56351g.g(this.f56350f.e(c10));
            f56344j.b("onScale:", "Got focus offset:", this.f56351g);
        }
        this.f56348d.h(new f(this.f56348d.y() * detector.getScaleFactor(), this, detector));
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
        f56344j.b("onScaleEnd:", "mInitialAbsFocusPoint.x:", Float.valueOf(this.f56350f.c()), "mInitialAbsFocusPoint.y:", Float.valueOf(this.f56350f.d()), "mOverZoomEnabled;", Boolean.valueOf(this.f56345a.m()));
        e();
        AbsolutePoint absolutePoint = this.f56350f;
        Float valueOf = Float.valueOf(Float.NaN);
        absolutePoint.h(valueOf, valueOf);
        AbsolutePoint absolutePoint2 = this.f56351g;
        Float valueOf2 = Float.valueOf(0.0f);
        absolutePoint2.h(valueOf2, valueOf2);
    }
}
