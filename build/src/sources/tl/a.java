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
    public static final C0640a f49652h = new C0640a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final String f49653i;

    /* renamed from: j  reason: collision with root package name */
    private static final ZoomLogger f49654j;

    /* renamed from: a  reason: collision with root package name */
    private final vl.c f49655a;

    /* renamed from: b  reason: collision with root package name */
    private final vl.b f49656b;

    /* renamed from: c  reason: collision with root package name */
    private final sl.a f49657c;

    /* renamed from: d  reason: collision with root package name */
    private final ul.b f49658d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaleGestureDetector f49659e;

    /* renamed from: f  reason: collision with root package name */
    private final AbsolutePoint f49660f;

    /* renamed from: g  reason: collision with root package name */
    private final AbsolutePoint f49661g;

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
        final /* synthetic */ float f49662d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ PointF f49663e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(float f10, PointF pointF) {
            super(1);
            this.f49662d = f10;
            this.f49663e = pointF;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f49662d, true);
            applyUpdate.f(Float.valueOf(this.f49663e.x), Float.valueOf(this.f49663e.y));
            applyUpdate.h(true);
            applyUpdate.g(false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33298a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f49664d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbsolutePoint f49665e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(float f10, AbsolutePoint absolutePoint) {
            super(1);
            this.f49664d = f10;
            this.f49665e = absolutePoint;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f49664d, true);
            applyUpdate.d(this.f49665e, true);
            applyUpdate.g(false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33298a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f49666d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(float f10) {
            super(1);
            this.f49666d = f10;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.i(this.f49666d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33298a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f49667d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbsolutePoint f49668e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ PointF f49669i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(float f10, AbsolutePoint absolutePoint, PointF pointF) {
            super(1);
            this.f49667d = f10;
            this.f49668e = absolutePoint;
            this.f49669i = pointF;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.i(this.f49667d, true);
            animateUpdate.d(this.f49668e, true);
            animateUpdate.f(Float.valueOf(this.f49669i.x), Float.valueOf(this.f49669i.y));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33298a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f49670d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ a f49671e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ScaleGestureDetector f49672i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(float f10, a aVar, ScaleGestureDetector scaleGestureDetector) {
            super(1);
            this.f49670d = f10;
            this.f49671e = aVar;
            this.f49672i = scaleGestureDetector;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f49670d, true);
            applyUpdate.b(this.f49671e.f49661g, true);
            applyUpdate.f(Float.valueOf(this.f49672i.getFocusX()), Float.valueOf(this.f49672i.getFocusY()));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f33298a;
        }
    }

    static {
        String TAG = a.class.getSimpleName();
        f49653i = TAG;
        ZoomLogger.a aVar = ZoomLogger.f18306b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f49654j = aVar.a(TAG);
    }

    public a(Context context, vl.c zoomManager, vl.b panManager, sl.a stateController, ul.b matrixController) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(zoomManager, "zoomManager");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(matrixController, "matrixController");
        this.f49655a = zoomManager;
        this.f49656b = panManager;
        this.f49657c = stateController;
        this.f49658d = matrixController;
        ScaleGestureDetector scaleGestureDetector = new ScaleGestureDetector(context, this);
        this.f49659e = scaleGestureDetector;
        scaleGestureDetector.setQuickScaleEnabled(false);
        this.f49660f = new AbsolutePoint(Float.NaN, Float.NaN);
        this.f49661g = new AbsolutePoint(0.0f, 0.0f);
    }

    private final PointF b(AbsolutePoint absolutePoint) {
        float m10;
        if (this.f49658d.y() <= 1.0f) {
            PointF d10 = d(new AbsolutePoint((-this.f49658d.q()) / 2.0f, (-this.f49658d.n()) / 2.0f));
            d10.set(-d10.x, -d10.y);
            return d10;
        }
        float f10 = 0.0f;
        if (absolutePoint.c() > 0.0f) {
            m10 = this.f49658d.m();
        } else if (absolutePoint.c() < 0.0f) {
            m10 = 0.0f;
        } else {
            m10 = this.f49658d.m() / 2.0f;
        }
        if (absolutePoint.d() > 0.0f) {
            f10 = this.f49658d.l();
        } else if (absolutePoint.d() >= 0.0f) {
            f10 = this.f49658d.l() / 2.0f;
        }
        return new PointF(m10, f10);
    }

    private final AbsolutePoint c(PointF pointF) {
        return ScaledPoint.k(new ScaledPoint(this.f49658d.w() + pointF.x, this.f49658d.x() + pointF.y), this.f49658d.y(), null, 2, null);
    }

    private final PointF d(AbsolutePoint absolutePoint) {
        ScaledPoint e10 = AbsolutePoint.j(absolutePoint, this.f49658d.y(), null, 2, null).e(this.f49658d.v());
        return new PointF(e10.c(), e10.d());
    }

    private final void e() {
        if (!this.f49655a.m() && !this.f49656b.n()) {
            this.f49657c.f();
            return;
        }
        float f10 = this.f49655a.f();
        float i10 = this.f49655a.i();
        float b10 = this.f49655a.b(this.f49658d.y(), false);
        f49654j.b("onScaleEnd:", "zoom:", Float.valueOf(this.f49658d.y()), "newZoom:", Float.valueOf(b10), "max:", Float.valueOf(f10), "min:", Float.valueOf(i10));
        AbsolutePoint k10 = ScaledPoint.k(this.f49656b.f(), this.f49658d.y(), null, 2, null);
        if (k10.c() == 0.0f && k10.d() == 0.0f && Float.compare(b10, this.f49658d.y()) == 0) {
            this.f49657c.f();
            return;
        }
        PointF b11 = b(k10);
        AbsolutePoint f11 = this.f49658d.s().f(k10);
        if (Float.compare(b10, this.f49658d.y()) != 0) {
            AbsolutePoint absolutePoint = new AbsolutePoint(this.f49658d.s());
            float y10 = this.f49658d.y();
            this.f49658d.g(new b(b10, b11));
            AbsolutePoint k11 = ScaledPoint.k(this.f49656b.f(), this.f49658d.y(), null, 2, null);
            f11.g(this.f49658d.s().f(k11));
            this.f49658d.g(new c(y10, absolutePoint));
            k10 = k11;
        }
        if (k10.c() == 0.0f && k10.d() == 0.0f) {
            this.f49658d.e(new d(b10));
        } else {
            this.f49658d.e(new e(b10, f11, b11));
        }
    }

    public final boolean f(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return this.f49659e.onTouchEvent(event);
    }

    @Override // android.view.ScaleGestureDetector.OnScaleGestureListener
    public boolean onScale(ScaleGestureDetector detector) {
        Intrinsics.checkNotNullParameter(detector, "detector");
        if (!this.f49655a.l() || !this.f49657c.m()) {
            return false;
        }
        AbsolutePoint c10 = c(new PointF(-detector.getFocusX(), -detector.getFocusY()));
        if (Float.isNaN(this.f49660f.c())) {
            this.f49660f.g(c10);
            f49654j.b("onScale:", "Setting initial focus:", this.f49660f);
        } else {
            this.f49661g.g(this.f49660f.e(c10));
            f49654j.b("onScale:", "Got focus offset:", this.f49661g);
        }
        this.f49658d.g(new f(this.f49658d.y() * detector.getScaleFactor(), this, detector));
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
        f49654j.b("onScaleEnd:", "mInitialAbsFocusPoint.x:", Float.valueOf(this.f49660f.c()), "mInitialAbsFocusPoint.y:", Float.valueOf(this.f49660f.d()), "mOverZoomEnabled;", Boolean.valueOf(this.f49655a.m()));
        e();
        AbsolutePoint absolutePoint = this.f49660f;
        Float valueOf = Float.valueOf(Float.NaN);
        absolutePoint.h(valueOf, valueOf);
        AbsolutePoint absolutePoint2 = this.f49661g;
        Float valueOf2 = Float.valueOf(0.0f);
        absolutePoint2.h(valueOf2, valueOf2);
    }
}
