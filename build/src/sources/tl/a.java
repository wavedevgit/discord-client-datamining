package tl;

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
import ul.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ScaleGestureDetector.OnScaleGestureListener {

    /* renamed from: h  reason: collision with root package name */
    public static final C0640a f49636h = new C0640a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final String f49637i;

    /* renamed from: j  reason: collision with root package name */
    private static final ZoomLogger f49638j;

    /* renamed from: a  reason: collision with root package name */
    private final vl.c f49639a;

    /* renamed from: b  reason: collision with root package name */
    private final vl.b f49640b;

    /* renamed from: c  reason: collision with root package name */
    private final sl.a f49641c;

    /* renamed from: d  reason: collision with root package name */
    private final ul.b f49642d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaleGestureDetector f49643e;

    /* renamed from: f  reason: collision with root package name */
    private final AbsolutePoint f49644f;

    /* renamed from: g  reason: collision with root package name */
    private final AbsolutePoint f49645g;

    /* renamed from: tl.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0640a {
        public /* synthetic */ C0640a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0640a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f49646d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ PointF f49647e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(float f10, PointF pointF) {
            super(1);
            this.f49646d = f10;
            this.f49647e = pointF;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f49646d, true);
            applyUpdate.f(Float.valueOf(this.f49647e.x), Float.valueOf(this.f49647e.y));
            applyUpdate.h(true);
            applyUpdate.g(false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33282a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f49648d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbsolutePoint f49649e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(float f10, AbsolutePoint absolutePoint) {
            super(1);
            this.f49648d = f10;
            this.f49649e = absolutePoint;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f49648d, true);
            applyUpdate.d(this.f49649e, true);
            applyUpdate.g(false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33282a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f49650d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(float f10) {
            super(1);
            this.f49650d = f10;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.i(this.f49650d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33282a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f49651d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbsolutePoint f49652e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ PointF f49653i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(float f10, AbsolutePoint absolutePoint, PointF pointF) {
            super(1);
            this.f49651d = f10;
            this.f49652e = absolutePoint;
            this.f49653i = pointF;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.i(this.f49651d, true);
            animateUpdate.d(this.f49652e, true);
            animateUpdate.f(Float.valueOf(this.f49653i.x), Float.valueOf(this.f49653i.y));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33282a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f49654d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ a f49655e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ScaleGestureDetector f49656i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(float f10, a aVar, ScaleGestureDetector scaleGestureDetector) {
            super(1);
            this.f49654d = f10;
            this.f49655e = aVar;
            this.f49656i = scaleGestureDetector;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f49654d, true);
            applyUpdate.b(this.f49655e.f49645g, true);
            applyUpdate.f(Float.valueOf(this.f49656i.getFocusX()), Float.valueOf(this.f49656i.getFocusY()));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33282a;
        }
    }

    static {
        String TAG = a.class.getSimpleName();
        f49637i = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18306b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f49638j = aVar.a(TAG);
    }

    public a(Context context, vl.c zoomManager, vl.b panManager, sl.a stateController, ul.b matrixController) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(zoomManager, "zoomManager");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(matrixController, "matrixController");
        this.f49639a = zoomManager;
        this.f49640b = panManager;
        this.f49641c = stateController;
        this.f49642d = matrixController;
        ScaleGestureDetector scaleGestureDetector = new ScaleGestureDetector(context, this);
        this.f49643e = scaleGestureDetector;
        scaleGestureDetector.setQuickScaleEnabled(false);
        this.f49644f = new AbsolutePoint(Float.NaN, Float.NaN);
        this.f49645g = new AbsolutePoint(0.0f, 0.0f);
    }

    private final PointF b(AbsolutePoint absolutePoint) {
        float m10;
        if (this.f49642d.y() <= 1.0f) {
            PointF d10 = d(new AbsolutePoint((-this.f49642d.q()) / 2.0f, (-this.f49642d.n()) / 2.0f));
            d10.set(-d10.x, -d10.y);
            return d10;
        }
        float f10 = 0.0f;
        if (absolutePoint.c() > 0.0f) {
            m10 = this.f49642d.m();
        } else if (absolutePoint.c() < 0.0f) {
            m10 = 0.0f;
        } else {
            m10 = this.f49642d.m() / 2.0f;
        }
        if (absolutePoint.d() > 0.0f) {
            f10 = this.f49642d.l();
        } else if (absolutePoint.d() >= 0.0f) {
            f10 = this.f49642d.l() / 2.0f;
        }
        return new PointF(m10, f10);
    }

    private final AbsolutePoint c(PointF pointF) {
        return ScaledPoint.k(new ScaledPoint(this.f49642d.w() + pointF.x, this.f49642d.x() + pointF.y), this.f49642d.y(), null, 2, null);
    }

    private final PointF d(AbsolutePoint absolutePoint) {
        ScaledPoint e10 = AbsolutePoint.j(absolutePoint, this.f49642d.y(), null, 2, null).e(this.f49642d.v());
        return new PointF(e10.c(), e10.d());
    }

    private final void e() {
        if (!this.f49639a.m() && !this.f49640b.n()) {
            this.f49641c.f();
            return;
        }
        float f10 = this.f49639a.f();
        float i10 = this.f49639a.i();
        float b10 = this.f49639a.b(this.f49642d.y(), false);
        f49638j.b("onScaleEnd:", "zoom:", Float.valueOf(this.f49642d.y()), "newZoom:", Float.valueOf(b10), "max:", Float.valueOf(f10), "min:", Float.valueOf(i10));
        AbsolutePoint k10 = ScaledPoint.k(this.f49640b.f(), this.f49642d.y(), null, 2, null);
        if (k10.c() == 0.0f && k10.d() == 0.0f && Float.compare(b10, this.f49642d.y()) == 0) {
            this.f49641c.f();
            return;
        }
        PointF b11 = b(k10);
        AbsolutePoint f11 = this.f49642d.s().f(k10);
        if (Float.compare(b10, this.f49642d.y()) != 0) {
            AbsolutePoint absolutePoint = new AbsolutePoint(this.f49642d.s());
            float y10 = this.f49642d.y();
            this.f49642d.g(new b(b10, b11));
            AbsolutePoint k11 = ScaledPoint.k(this.f49640b.f(), this.f49642d.y(), null, 2, null);
            f11.g(this.f49642d.s().f(k11));
            this.f49642d.g(new c(y10, absolutePoint));
            k10 = k11;
        }
        if (k10.c() == 0.0f && k10.d() == 0.0f) {
            this.f49642d.e(new d(b10));
        } else {
            this.f49642d.e(new e(b10, f11, b11));
        }
    }

    public final boolean f(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return this.f49643e.onTouchEvent(event);
    }

    @Override // android.view.ScaleGestureDetector.OnScaleGestureListener
    public boolean onScale(ScaleGestureDetector detector) {
        Intrinsics.checkNotNullParameter(detector, "detector");
        if (!this.f49639a.l() || !this.f49641c.m()) {
            return false;
        }
        AbsolutePoint c10 = c(new PointF(-detector.getFocusX(), -detector.getFocusY()));
        if (Float.isNaN(this.f49644f.c())) {
            this.f49644f.g(c10);
            f49638j.b("onScale:", "Setting initial focus:", this.f49644f);
        } else {
            this.f49645g.g(this.f49644f.e(c10));
            f49638j.b("onScale:", "Got focus offset:", this.f49645g);
        }
        this.f49642d.g(new f(this.f49642d.y() * detector.getScaleFactor(), this, detector));
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
        f49638j.b("onScaleEnd:", "mInitialAbsFocusPoint.x:", Float.valueOf(this.f49644f.c()), "mInitialAbsFocusPoint.y:", Float.valueOf(this.f49644f.d()), "mOverZoomEnabled;", Boolean.valueOf(this.f49639a.m()));
        e();
        AbsolutePoint absolutePoint = this.f49644f;
        Float valueOf = Float.valueOf(Float.NaN);
        absolutePoint.h(valueOf, valueOf);
        AbsolutePoint absolutePoint2 = this.f49645g;
        Float valueOf2 = Float.valueOf(0.0f);
        absolutePoint2.h(valueOf2, valueOf2);
    }
}
