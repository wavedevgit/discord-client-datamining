package in;

import android.content.Context;
import android.graphics.PointF;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewConfiguration;
import in.d;
import in.y;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u extends d {
    private double O;
    private double P;
    private y S;
    private float T;
    private float U;
    private float Q = Float.NaN;
    private float R = Float.NaN;
    private final y.b V = new b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends d.c {

        /* renamed from: b  reason: collision with root package name */
        private final Class f27598b = u.class;

        /* renamed from: c  reason: collision with root package name */
        private final String f27599c = "PinchGestureHandler";

        @Override // in.d.c
        public String d() {
            return this.f27599c;
        }

        @Override // in.d.c
        public Class e() {
            return this.f27598b;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // in.d.c
        /* renamed from: g */
        public u a(Context context) {
            return new u();
        }

        @Override // in.d.c
        /* renamed from: h */
        public jn.h c(u handler) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            return new jn.h(handler);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements y.b {
        b() {
        }

        @Override // in.y.b
        public void a(y detector) {
            Intrinsics.checkNotNullParameter(detector, "detector");
        }

        @Override // in.y.b
        public boolean b(y detector) {
            Intrinsics.checkNotNullParameter(detector, "detector");
            u.this.T = detector.d();
            return true;
        }

        @Override // in.y.b
        public boolean c(y detector) {
            Intrinsics.checkNotNullParameter(detector, "detector");
            double b12 = u.this.b1();
            u uVar = u.this;
            uVar.O = uVar.b1() * detector.g();
            double i10 = detector.i();
            if (i10 > 0.0d) {
                u uVar2 = u.this;
                uVar2.P = (uVar2.b1() - b12) / i10;
            }
            if (Math.abs(u.this.T - detector.d()) >= u.this.U && u.this.S() == 2) {
                u.this.k();
                return true;
            }
            return true;
        }
    }

    public final float Z0() {
        return this.Q;
    }

    public final float a1() {
        return this.R;
    }

    public final double b1() {
        return this.O;
    }

    public final double c1() {
        return this.P;
    }

    @Override // in.d
    public void l(boolean z10) {
        if (S() != 4) {
            t0();
        }
        super.l(z10);
    }

    @Override // in.d
    protected void l0(MotionEvent event, MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (S() == 0) {
            View W = W();
            Intrinsics.checkNotNull(W);
            Context context = W.getContext();
            t0();
            this.S = new y(context, this.V);
            this.U = ViewConfiguration.get(context).getScaledTouchSlop();
            this.Q = event.getX();
            this.R = event.getY();
            p();
        }
        y yVar = this.S;
        if (yVar != null) {
            yVar.k(sourceEvent);
        }
        y yVar2 = this.S;
        if (yVar2 != null) {
            PointF Q0 = Q0(new PointF(yVar2.e(), yVar2.f()));
            this.Q = Q0.x;
            this.R = Q0.y;
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
    @Override // in.d
    public void o0() {
        this.S = null;
        this.Q = Float.NaN;
        this.R = Float.NaN;
        t0();
    }

    @Override // in.d
    public void t0() {
        this.P = 0.0d;
        this.O = 1.0d;
    }
}
