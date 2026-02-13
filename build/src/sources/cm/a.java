package cm;

import android.content.Context;
import android.graphics.PointF;
import android.view.MotionEvent;
import android.view.ScaleGestureDetector;
import com.otaliastudios.zoom.AbsolutePoint;
import com.otaliastudios.zoom.ScaledPoint;
import com.otaliastudios.zoom.ZoomLogger;
import dm.c;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ScaleGestureDetector.OnScaleGestureListener {

    /* renamed from: h  reason: collision with root package name */
    public static final C0135a f8315h = new C0135a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final String f8316i;

    /* renamed from: j  reason: collision with root package name */
    private static final ZoomLogger f8317j;

    /* renamed from: a  reason: collision with root package name */
    private final em.c f8318a;

    /* renamed from: b  reason: collision with root package name */
    private final em.b f8319b;

    /* renamed from: c  reason: collision with root package name */
    private final bm.a f8320c;

    /* renamed from: d  reason: collision with root package name */
    private final dm.b f8321d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaleGestureDetector f8322e;

    /* renamed from: f  reason: collision with root package name */
    private final AbsolutePoint f8323f;

    /* renamed from: g  reason: collision with root package name */
    private final AbsolutePoint f8324g;

    /* renamed from: cm.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0135a {
        public /* synthetic */ C0135a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0135a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f8325d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ PointF f8326e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(float f10, PointF pointF) {
            super(1);
            this.f8325d = f10;
            this.f8326e = pointF;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f8325d, true);
            applyUpdate.f(Float.valueOf(this.f8326e.x), Float.valueOf(this.f8326e.y));
            applyUpdate.h(true);
            applyUpdate.g(false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32556a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f8327d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbsolutePoint f8328e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(float f10, AbsolutePoint absolutePoint) {
            super(1);
            this.f8327d = f10;
            this.f8328e = absolutePoint;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f8327d, true);
            applyUpdate.d(this.f8328e, true);
            applyUpdate.g(false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32556a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f8329d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(float f10) {
            super(1);
            this.f8329d = f10;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.i(this.f8329d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32556a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f8330d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbsolutePoint f8331e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ PointF f8332i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(float f10, AbsolutePoint absolutePoint, PointF pointF) {
            super(1);
            this.f8330d = f10;
            this.f8331e = absolutePoint;
            this.f8332i = pointF;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.i(this.f8330d, true);
            animateUpdate.d(this.f8331e, true);
            animateUpdate.f(Float.valueOf(this.f8332i.x), Float.valueOf(this.f8332i.y));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32556a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f8333d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ a f8334e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ScaleGestureDetector f8335i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(float f10, a aVar, ScaleGestureDetector scaleGestureDetector) {
            super(1);
            this.f8333d = f10;
            this.f8334e = aVar;
            this.f8335i = scaleGestureDetector;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f8333d, true);
            applyUpdate.b(this.f8334e.f8324g, true);
            applyUpdate.f(Float.valueOf(this.f8335i.getFocusX()), Float.valueOf(this.f8335i.getFocusY()));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32556a;
        }
    }

    static {
        String TAG = a.class.getSimpleName();
        f8316i = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18183b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f8317j = aVar.a(TAG);
    }

    public a(Context context, em.c zoomManager, em.b panManager, bm.a stateController, dm.b matrixController) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(zoomManager, "zoomManager");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(matrixController, "matrixController");
        this.f8318a = zoomManager;
        this.f8319b = panManager;
        this.f8320c = stateController;
        this.f8321d = matrixController;
        ScaleGestureDetector scaleGestureDetector = new ScaleGestureDetector(context, this);
        this.f8322e = scaleGestureDetector;
        scaleGestureDetector.setQuickScaleEnabled(false);
        this.f8323f = new AbsolutePoint(Float.NaN, Float.NaN);
        this.f8324g = new AbsolutePoint(0.0f, 0.0f);
    }

    private final PointF b(AbsolutePoint absolutePoint) {
        float m10;
        if (this.f8321d.y() <= 1.0f) {
            PointF d10 = d(new AbsolutePoint((-this.f8321d.q()) / 2.0f, (-this.f8321d.n()) / 2.0f));
            d10.set(-d10.x, -d10.y);
            return d10;
        }
        float f10 = 0.0f;
        if (absolutePoint.c() > 0.0f) {
            m10 = this.f8321d.m();
        } else if (absolutePoint.c() < 0.0f) {
            m10 = 0.0f;
        } else {
            m10 = this.f8321d.m() / 2.0f;
        }
        if (absolutePoint.d() > 0.0f) {
            f10 = this.f8321d.l();
        } else if (absolutePoint.d() >= 0.0f) {
            f10 = this.f8321d.l() / 2.0f;
        }
        return new PointF(m10, f10);
    }

    private final AbsolutePoint c(PointF pointF) {
        return ScaledPoint.k(new ScaledPoint(this.f8321d.w() + pointF.x, this.f8321d.x() + pointF.y), this.f8321d.y(), null, 2, null);
    }

    private final PointF d(AbsolutePoint absolutePoint) {
        ScaledPoint e10 = AbsolutePoint.j(absolutePoint, this.f8321d.y(), null, 2, null).e(this.f8321d.v());
        return new PointF(e10.c(), e10.d());
    }

    private final void e() {
        if (!this.f8318a.m() && !this.f8319b.n()) {
            this.f8320c.f();
            return;
        }
        float f10 = this.f8318a.f();
        float i10 = this.f8318a.i();
        float b10 = this.f8318a.b(this.f8321d.y(), false);
        f8317j.b("onScaleEnd:", "zoom:", Float.valueOf(this.f8321d.y()), "newZoom:", Float.valueOf(b10), "max:", Float.valueOf(f10), "min:", Float.valueOf(i10));
        AbsolutePoint k10 = ScaledPoint.k(this.f8319b.f(), this.f8321d.y(), null, 2, null);
        if (k10.c() == 0.0f && k10.d() == 0.0f && Float.compare(b10, this.f8321d.y()) == 0) {
            this.f8320c.f();
            return;
        }
        PointF b11 = b(k10);
        AbsolutePoint f11 = this.f8321d.s().f(k10);
        if (Float.compare(b10, this.f8321d.y()) != 0) {
            AbsolutePoint absolutePoint = new AbsolutePoint(this.f8321d.s());
            float y10 = this.f8321d.y();
            this.f8321d.h(new b(b10, b11));
            AbsolutePoint k11 = ScaledPoint.k(this.f8319b.f(), this.f8321d.y(), null, 2, null);
            f11.g(this.f8321d.s().f(k11));
            this.f8321d.h(new c(y10, absolutePoint));
            k10 = k11;
        }
        if (k10.c() == 0.0f && k10.d() == 0.0f) {
            this.f8321d.f(new d(b10));
        } else {
            this.f8321d.f(new e(b10, f11, b11));
        }
    }

    public final boolean f(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return this.f8322e.onTouchEvent(event);
    }

    @Override // android.view.ScaleGestureDetector.OnScaleGestureListener
    public boolean onScale(ScaleGestureDetector detector) {
        Intrinsics.checkNotNullParameter(detector, "detector");
        if (!this.f8318a.l() || !this.f8320c.m()) {
            return false;
        }
        AbsolutePoint c10 = c(new PointF(-detector.getFocusX(), -detector.getFocusY()));
        if (Float.isNaN(this.f8323f.c())) {
            this.f8323f.g(c10);
            f8317j.b("onScale:", "Setting initial focus:", this.f8323f);
        } else {
            this.f8324g.g(this.f8323f.e(c10));
            f8317j.b("onScale:", "Got focus offset:", this.f8324g);
        }
        this.f8321d.h(new f(this.f8321d.y() * detector.getScaleFactor(), this, detector));
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
        f8317j.b("onScaleEnd:", "mInitialAbsFocusPoint.x:", Float.valueOf(this.f8323f.c()), "mInitialAbsFocusPoint.y:", Float.valueOf(this.f8323f.d()), "mOverZoomEnabled;", Boolean.valueOf(this.f8318a.m()));
        e();
        AbsolutePoint absolutePoint = this.f8323f;
        Float valueOf = Float.valueOf(Float.NaN);
        absolutePoint.h(valueOf, valueOf);
        AbsolutePoint absolutePoint2 = this.f8324g;
        Float valueOf2 = Float.valueOf(0.0f);
        absolutePoint2.h(valueOf2, valueOf2);
    }
}
