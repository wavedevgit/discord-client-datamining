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
    public static final C0772a f56294h = new C0772a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final String f56295i;

    /* renamed from: j  reason: collision with root package name */
    private static final ZoomLogger f56296j;

    /* renamed from: a  reason: collision with root package name */
    private final bm.c f56297a;

    /* renamed from: b  reason: collision with root package name */
    private final bm.b f56298b;

    /* renamed from: c  reason: collision with root package name */
    private final yl.a f56299c;

    /* renamed from: d  reason: collision with root package name */
    private final am.b f56300d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaleGestureDetector f56301e;

    /* renamed from: f  reason: collision with root package name */
    private final AbsolutePoint f56302f;

    /* renamed from: g  reason: collision with root package name */
    private final AbsolutePoint f56303g;

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
        final /* synthetic */ float f56304d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ PointF f56305e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(float f10, PointF pointF) {
            super(1);
            this.f56304d = f10;
            this.f56305e = pointF;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f56304d, true);
            applyUpdate.f(Float.valueOf(this.f56305e.x), Float.valueOf(this.f56305e.y));
            applyUpdate.h(true);
            applyUpdate.g(false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32008a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f56306d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbsolutePoint f56307e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(float f10, AbsolutePoint absolutePoint) {
            super(1);
            this.f56306d = f10;
            this.f56307e = absolutePoint;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f56306d, true);
            applyUpdate.d(this.f56307e, true);
            applyUpdate.g(false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32008a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f56308d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(float f10) {
            super(1);
            this.f56308d = f10;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.i(this.f56308d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32008a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f56309d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbsolutePoint f56310e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ PointF f56311i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(float f10, AbsolutePoint absolutePoint, PointF pointF) {
            super(1);
            this.f56309d = f10;
            this.f56310e = absolutePoint;
            this.f56311i = pointF;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.i(this.f56309d, true);
            animateUpdate.d(this.f56310e, true);
            animateUpdate.f(Float.valueOf(this.f56311i.x), Float.valueOf(this.f56311i.y));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32008a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f56312d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ a f56313e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ScaleGestureDetector f56314i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(float f10, a aVar, ScaleGestureDetector scaleGestureDetector) {
            super(1);
            this.f56312d = f10;
            this.f56313e = aVar;
            this.f56314i = scaleGestureDetector;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f56312d, true);
            applyUpdate.b(this.f56313e.f56303g, true);
            applyUpdate.f(Float.valueOf(this.f56314i.getFocusX()), Float.valueOf(this.f56314i.getFocusY()));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32008a;
        }
    }

    static {
        String TAG = a.class.getSimpleName();
        f56295i = TAG;
        ZoomLogger.a aVar = ZoomLogger.f17293b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f56296j = aVar.a(TAG);
    }

    public a(Context context, bm.c zoomManager, bm.b panManager, yl.a stateController, am.b matrixController) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(zoomManager, "zoomManager");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(matrixController, "matrixController");
        this.f56297a = zoomManager;
        this.f56298b = panManager;
        this.f56299c = stateController;
        this.f56300d = matrixController;
        ScaleGestureDetector scaleGestureDetector = new ScaleGestureDetector(context, this);
        this.f56301e = scaleGestureDetector;
        scaleGestureDetector.setQuickScaleEnabled(false);
        this.f56302f = new AbsolutePoint(Float.NaN, Float.NaN);
        this.f56303g = new AbsolutePoint(0.0f, 0.0f);
    }

    private final PointF b(AbsolutePoint absolutePoint) {
        float m10;
        if (this.f56300d.y() <= 1.0f) {
            PointF d10 = d(new AbsolutePoint((-this.f56300d.q()) / 2.0f, (-this.f56300d.n()) / 2.0f));
            d10.set(-d10.x, -d10.y);
            return d10;
        }
        float f10 = 0.0f;
        if (absolutePoint.c() > 0.0f) {
            m10 = this.f56300d.m();
        } else if (absolutePoint.c() < 0.0f) {
            m10 = 0.0f;
        } else {
            m10 = this.f56300d.m() / 2.0f;
        }
        if (absolutePoint.d() > 0.0f) {
            f10 = this.f56300d.l();
        } else if (absolutePoint.d() >= 0.0f) {
            f10 = this.f56300d.l() / 2.0f;
        }
        return new PointF(m10, f10);
    }

    private final AbsolutePoint c(PointF pointF) {
        return ScaledPoint.k(new ScaledPoint(this.f56300d.w() + pointF.x, this.f56300d.x() + pointF.y), this.f56300d.y(), null, 2, null);
    }

    private final PointF d(AbsolutePoint absolutePoint) {
        ScaledPoint e10 = AbsolutePoint.j(absolutePoint, this.f56300d.y(), null, 2, null).e(this.f56300d.v());
        return new PointF(e10.c(), e10.d());
    }

    private final void e() {
        if (!this.f56297a.m() && !this.f56298b.n()) {
            this.f56299c.f();
            return;
        }
        float f10 = this.f56297a.f();
        float i10 = this.f56297a.i();
        float b10 = this.f56297a.b(this.f56300d.y(), false);
        f56296j.b("onScaleEnd:", "zoom:", Float.valueOf(this.f56300d.y()), "newZoom:", Float.valueOf(b10), "max:", Float.valueOf(f10), "min:", Float.valueOf(i10));
        AbsolutePoint k10 = ScaledPoint.k(this.f56298b.f(), this.f56300d.y(), null, 2, null);
        if (k10.c() == 0.0f && k10.d() == 0.0f && Float.compare(b10, this.f56300d.y()) == 0) {
            this.f56299c.f();
            return;
        }
        PointF b11 = b(k10);
        AbsolutePoint f11 = this.f56300d.s().f(k10);
        if (Float.compare(b10, this.f56300d.y()) != 0) {
            AbsolutePoint absolutePoint = new AbsolutePoint(this.f56300d.s());
            float y10 = this.f56300d.y();
            this.f56300d.h(new b(b10, b11));
            AbsolutePoint k11 = ScaledPoint.k(this.f56298b.f(), this.f56300d.y(), null, 2, null);
            f11.g(this.f56300d.s().f(k11));
            this.f56300d.h(new c(y10, absolutePoint));
            k10 = k11;
        }
        if (k10.c() == 0.0f && k10.d() == 0.0f) {
            this.f56300d.f(new d(b10));
        } else {
            this.f56300d.f(new e(b10, f11, b11));
        }
    }

    public final boolean f(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return this.f56301e.onTouchEvent(event);
    }

    @Override // android.view.ScaleGestureDetector.OnScaleGestureListener
    public boolean onScale(ScaleGestureDetector detector) {
        Intrinsics.checkNotNullParameter(detector, "detector");
        if (!this.f56297a.l() || !this.f56299c.m()) {
            return false;
        }
        AbsolutePoint c10 = c(new PointF(-detector.getFocusX(), -detector.getFocusY()));
        if (Float.isNaN(this.f56302f.c())) {
            this.f56302f.g(c10);
            f56296j.b("onScale:", "Setting initial focus:", this.f56302f);
        } else {
            this.f56303g.g(this.f56302f.e(c10));
            f56296j.b("onScale:", "Got focus offset:", this.f56303g);
        }
        this.f56300d.h(new f(this.f56300d.y() * detector.getScaleFactor(), this, detector));
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
        f56296j.b("onScaleEnd:", "mInitialAbsFocusPoint.x:", Float.valueOf(this.f56302f.c()), "mInitialAbsFocusPoint.y:", Float.valueOf(this.f56302f.d()), "mOverZoomEnabled;", Boolean.valueOf(this.f56297a.m()));
        e();
        AbsolutePoint absolutePoint = this.f56302f;
        Float valueOf = Float.valueOf(Float.NaN);
        absolutePoint.h(valueOf, valueOf);
        AbsolutePoint absolutePoint2 = this.f56303g;
        Float valueOf2 = Float.valueOf(0.0f);
        absolutePoint2.h(valueOf2, valueOf2);
    }
}
