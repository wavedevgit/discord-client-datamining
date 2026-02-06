package kn;

import android.view.VelocityTracker;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c0 {

    /* renamed from: f  reason: collision with root package name */
    public static final a f31778f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final c0 f31779g = new c0(-1.0d, 0.0d);

    /* renamed from: h  reason: collision with root package name */
    private static final c0 f31780h = new c0(1.0d, 0.0d);

    /* renamed from: i  reason: collision with root package name */
    private static final c0 f31781i = new c0(0.0d, -1.0d);

    /* renamed from: j  reason: collision with root package name */
    private static final c0 f31782j = new c0(0.0d, 1.0d);

    /* renamed from: k  reason: collision with root package name */
    private static final c0 f31783k = new c0(1.0d, -1.0d);

    /* renamed from: l  reason: collision with root package name */
    private static final c0 f31784l = new c0(1.0d, 1.0d);

    /* renamed from: m  reason: collision with root package name */
    private static final c0 f31785m = new c0(-1.0d, -1.0d);

    /* renamed from: n  reason: collision with root package name */
    private static final c0 f31786n = new c0(-1.0d, 1.0d);

    /* renamed from: o  reason: collision with root package name */
    private static final c0 f31787o = new c0(0.0d, 0.0d);

    /* renamed from: a  reason: collision with root package name */
    private final double f31788a;

    /* renamed from: b  reason: collision with root package name */
    private final double f31789b;

    /* renamed from: c  reason: collision with root package name */
    private final double f31790c;

    /* renamed from: d  reason: collision with root package name */
    private final double f31791d;

    /* renamed from: e  reason: collision with root package name */
    private final double f31792e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final c0 a(int i10) {
            switch (i10) {
                case 1:
                    return c0.f31780h;
                case 2:
                    return c0.f31779g;
                case 3:
                case 7:
                default:
                    return c0.f31787o;
                case 4:
                    return c0.f31781i;
                case 5:
                    return c0.f31783k;
                case 6:
                    return c0.f31785m;
                case 8:
                    return c0.f31782j;
                case 9:
                    return c0.f31784l;
                case 10:
                    return c0.f31786n;
            }
        }

        public final c0 b(VelocityTracker tracker) {
            Intrinsics.checkNotNullParameter(tracker, "tracker");
            tracker.computeCurrentVelocity(1000);
            return new c0(tracker.getXVelocity(), tracker.getYVelocity());
        }

        private a() {
        }
    }

    public c0(double d10, double d11) {
        boolean z10;
        double d12;
        this.f31788a = d10;
        this.f31789b = d11;
        double hypot = Math.hypot(d10, d11);
        this.f31792e = hypot;
        if (hypot > 0.1d) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            d12 = d10 / hypot;
        } else {
            d12 = 0.0d;
        }
        this.f31790c = d12;
        this.f31791d = z10 ? d11 / hypot : 0.0d;
    }

    private final double j(c0 c0Var) {
        return (this.f31790c * c0Var.f31790c) + (this.f31791d * c0Var.f31791d);
    }

    public final double k() {
        return this.f31792e;
    }

    public final boolean l(c0 vector, double d10) {
        Intrinsics.checkNotNullParameter(vector, "vector");
        if (j(vector) > d10) {
            return true;
        }
        return false;
    }
}
