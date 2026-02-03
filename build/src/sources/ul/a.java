package ul;

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
import vl.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ScaleGestureDetector.OnScaleGestureListener {

    /* renamed from: h  reason: collision with root package name */
    public static final C0635a f50697h = new C0635a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final String f50698i;

    /* renamed from: j  reason: collision with root package name */
    private static final ZoomLogger f50699j;

    /* renamed from: a  reason: collision with root package name */
    private final wl.c f50700a;

    /* renamed from: b  reason: collision with root package name */
    private final wl.b f50701b;

    /* renamed from: c  reason: collision with root package name */
    private final tl.a f50702c;

    /* renamed from: d  reason: collision with root package name */
    private final vl.b f50703d;

    /* renamed from: e  reason: collision with root package name */
    private final ScaleGestureDetector f50704e;

    /* renamed from: f  reason: collision with root package name */
    private final AbsolutePoint f50705f;

    /* renamed from: g  reason: collision with root package name */
    private final AbsolutePoint f50706g;

    /* renamed from: ul.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0635a {
        public /* synthetic */ C0635a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0635a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f50707d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ PointF f50708e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(float f10, PointF pointF) {
            super(1);
            this.f50707d = f10;
            this.f50708e = pointF;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f50707d, true);
            applyUpdate.f(Float.valueOf(this.f50708e.x), Float.valueOf(this.f50708e.y));
            applyUpdate.h(true);
            applyUpdate.g(false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32464a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f50709d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbsolutePoint f50710e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(float f10, AbsolutePoint absolutePoint) {
            super(1);
            this.f50709d = f10;
            this.f50710e = absolutePoint;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f50709d, true);
            applyUpdate.d(this.f50710e, true);
            applyUpdate.g(false);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32464a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f50711d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(float f10) {
            super(1);
            this.f50711d = f10;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.i(this.f50711d, true);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32464a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f50712d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AbsolutePoint f50713e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ PointF f50714i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(float f10, AbsolutePoint absolutePoint, PointF pointF) {
            super(1);
            this.f50712d = f10;
            this.f50713e = absolutePoint;
            this.f50714i = pointF;
        }

        public final void a(c.a animateUpdate) {
            Intrinsics.checkNotNullParameter(animateUpdate, "$this$animateUpdate");
            animateUpdate.i(this.f50712d, true);
            animateUpdate.d(this.f50713e, true);
            animateUpdate.f(Float.valueOf(this.f50714i.x), Float.valueOf(this.f50714i.y));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32464a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ float f50715d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ a f50716e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ScaleGestureDetector f50717i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(float f10, a aVar, ScaleGestureDetector scaleGestureDetector) {
            super(1);
            this.f50715d = f10;
            this.f50716e = aVar;
            this.f50717i = scaleGestureDetector;
        }

        public final void a(c.a applyUpdate) {
            Intrinsics.checkNotNullParameter(applyUpdate, "$this$applyUpdate");
            applyUpdate.i(this.f50715d, true);
            applyUpdate.b(this.f50716e.f50706g, true);
            applyUpdate.f(Float.valueOf(this.f50717i.getFocusX()), Float.valueOf(this.f50717i.getFocusY()));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c.a) obj);
            return Unit.f32464a;
        }
    }

    static {
        String TAG = a.class.getSimpleName();
        f50698i = TAG;
        ZoomLogger.a aVar = ZoomLogger.f16907b;
        Intrinsics.checkNotNullExpressionValue(TAG, "TAG");
        f50699j = aVar.a(TAG);
    }

    public a(Context context, wl.c zoomManager, wl.b panManager, tl.a stateController, vl.b matrixController) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(zoomManager, "zoomManager");
        Intrinsics.checkNotNullParameter(panManager, "panManager");
        Intrinsics.checkNotNullParameter(stateController, "stateController");
        Intrinsics.checkNotNullParameter(matrixController, "matrixController");
        this.f50700a = zoomManager;
        this.f50701b = panManager;
        this.f50702c = stateController;
        this.f50703d = matrixController;
        ScaleGestureDetector scaleGestureDetector = new ScaleGestureDetector(context, this);
        this.f50704e = scaleGestureDetector;
        scaleGestureDetector.setQuickScaleEnabled(false);
        this.f50705f = new AbsolutePoint(Float.NaN, Float.NaN);
        this.f50706g = new AbsolutePoint(0.0f, 0.0f);
    }

    private final PointF b(AbsolutePoint absolutePoint) {
        float m10;
        if (this.f50703d.y() <= 1.0f) {
            PointF d10 = d(new AbsolutePoint((-this.f50703d.q()) / 2.0f, (-this.f50703d.n()) / 2.0f));
            d10.set(-d10.x, -d10.y);
            return d10;
        }
        float f10 = 0.0f;
        if (absolutePoint.c() > 0.0f) {
            m10 = this.f50703d.m();
        } else if (absolutePoint.c() < 0.0f) {
            m10 = 0.0f;
        } else {
            m10 = this.f50703d.m() / 2.0f;
        }
        if (absolutePoint.d() > 0.0f) {
            f10 = this.f50703d.l();
        } else if (absolutePoint.d() >= 0.0f) {
            f10 = this.f50703d.l() / 2.0f;
        }
        return new PointF(m10, f10);
    }

    private final AbsolutePoint c(PointF pointF) {
        return ScaledPoint.k(new ScaledPoint(this.f50703d.w() + pointF.x, this.f50703d.x() + pointF.y), this.f50703d.y(), null, 2, null);
    }

    private final PointF d(AbsolutePoint absolutePoint) {
        ScaledPoint e10 = AbsolutePoint.j(absolutePoint, this.f50703d.y(), null, 2, null).e(this.f50703d.v());
        return new PointF(e10.c(), e10.d());
    }

    private final void e() {
        if (!this.f50700a.m() && !this.f50701b.n()) {
            this.f50702c.f();
            return;
        }
        float f10 = this.f50700a.f();
        float i10 = this.f50700a.i();
        float b10 = this.f50700a.b(this.f50703d.y(), false);
        f50699j.b("onScaleEnd:", "zoom:", Float.valueOf(this.f50703d.y()), "newZoom:", Float.valueOf(b10), "max:", Float.valueOf(f10), "min:", Float.valueOf(i10));
        AbsolutePoint k10 = ScaledPoint.k(this.f50701b.f(), this.f50703d.y(), null, 2, null);
        if (k10.c() == 0.0f && k10.d() == 0.0f && Float.compare(b10, this.f50703d.y()) == 0) {
            this.f50702c.f();
            return;
        }
        PointF b11 = b(k10);
        AbsolutePoint f11 = this.f50703d.s().f(k10);
        if (Float.compare(b10, this.f50703d.y()) != 0) {
            AbsolutePoint absolutePoint = new AbsolutePoint(this.f50703d.s());
            float y10 = this.f50703d.y();
            this.f50703d.g(new b(b10, b11));
            AbsolutePoint k11 = ScaledPoint.k(this.f50701b.f(), this.f50703d.y(), null, 2, null);
            f11.g(this.f50703d.s().f(k11));
            this.f50703d.g(new c(y10, absolutePoint));
            k10 = k11;
        }
        if (k10.c() == 0.0f && k10.d() == 0.0f) {
            this.f50703d.e(new d(b10));
        } else {
            this.f50703d.e(new e(b10, f11, b11));
        }
    }

    public final boolean f(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return this.f50704e.onTouchEvent(event);
    }

    @Override // android.view.ScaleGestureDetector.OnScaleGestureListener
    public boolean onScale(ScaleGestureDetector detector) {
        Intrinsics.checkNotNullParameter(detector, "detector");
        if (!this.f50700a.l() || !this.f50702c.m()) {
            return false;
        }
        AbsolutePoint c10 = c(new PointF(-detector.getFocusX(), -detector.getFocusY()));
        if (Float.isNaN(this.f50705f.c())) {
            this.f50705f.g(c10);
            f50699j.b("onScale:", "Setting initial focus:", this.f50705f);
        } else {
            this.f50706g.g(this.f50705f.e(c10));
            f50699j.b("onScale:", "Got focus offset:", this.f50706g);
        }
        this.f50703d.g(new f(this.f50703d.y() * detector.getScaleFactor(), this, detector));
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
        f50699j.b("onScaleEnd:", "mInitialAbsFocusPoint.x:", Float.valueOf(this.f50705f.c()), "mInitialAbsFocusPoint.y:", Float.valueOf(this.f50705f.d()), "mOverZoomEnabled;", Boolean.valueOf(this.f50700a.m()));
        e();
        AbsolutePoint absolutePoint = this.f50705f;
        Float valueOf = Float.valueOf(Float.NaN);
        absolutePoint.h(valueOf, valueOf);
        AbsolutePoint absolutePoint2 = this.f50706g;
        Float valueOf2 = Float.valueOf(0.0f);
        absolutePoint2.h(valueOf2, valueOf2);
    }
}
