package kn;

import android.content.Context;
import android.graphics.PointF;
import android.view.MotionEvent;
import kn.d;
import kn.w;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x extends d {
    public static final a U = new a(null);
    private w O;
    private double P;
    private double Q;
    private float R = Float.NaN;
    private float S = Float.NaN;
    private final w.a T = new c();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends d.c {

        /* renamed from: b  reason: collision with root package name */
        private final Class f31955b = x.class;

        /* renamed from: c  reason: collision with root package name */
        private final String f31956c = "RotationGestureHandler";

        @Override // kn.d.c
        public String d() {
            return this.f31956c;
        }

        @Override // kn.d.c
        public Class e() {
            return this.f31955b;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // kn.d.c
        /* renamed from: g */
        public x a(Context context) {
            return new x();
        }

        @Override // kn.d.c
        /* renamed from: h */
        public ln.i c(x handler) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            return new ln.i(handler);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements w.a {
        c() {
        }

        @Override // kn.w.a
        public void a(w detector) {
            Intrinsics.checkNotNullParameter(detector, "detector");
            x.this.B();
        }

        @Override // kn.w.a
        public boolean b(w detector) {
            Intrinsics.checkNotNullParameter(detector, "detector");
            return true;
        }

        @Override // kn.w.a
        public boolean c(w detector) {
            Intrinsics.checkNotNullParameter(detector, "detector");
            double Y0 = x.this.Y0();
            x xVar = x.this;
            xVar.P = xVar.Y0() + detector.d();
            long e10 = detector.e();
            if (e10 > 0) {
                x xVar2 = x.this;
                xVar2.Q = (xVar2.Y0() - Y0) / e10;
            }
            if (Math.abs(x.this.Y0()) >= 0.08726646259971647d && x.this.S() == 2) {
                x.this.k();
                return true;
            }
            return true;
        }
    }

    public final float W0() {
        return this.R;
    }

    public final float X0() {
        return this.S;
    }

    public final double Y0() {
        return this.P;
    }

    public final double Z0() {
        return this.Q;
    }

    @Override // kn.d
    public void l(boolean z10) {
        if (S() != 4) {
            t0();
        }
        super.l(z10);
    }

    @Override // kn.d
    protected void l0(MotionEvent event, MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (S() == 0) {
            t0();
            this.O = new w(this.T);
            this.R = event.getX();
            this.S = event.getY();
            p();
        }
        w wVar = this.O;
        if (wVar != null) {
            wVar.f(sourceEvent);
        }
        w wVar2 = this.O;
        if (wVar2 != null) {
            PointF Q0 = Q0(new PointF(wVar2.b(), wVar2.c()));
            this.R = Q0.x;
            this.S = Q0.y;
        }
        if (sourceEvent.getActionMasked() == 1) {
            if (S() == 4) {
                B();
            } else {
                D();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kn.d
    public void o0() {
        this.O = null;
        this.R = Float.NaN;
        this.S = Float.NaN;
        t0();
    }

    @Override // kn.d
    public void t0() {
        this.Q = 0.0d;
        this.P = 0.0d;
    }
}
