package nn;

import android.view.VelocityTracker;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c0 {

    /* renamed from: f  reason: collision with root package name */
    public static final a f38017f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final c0 f38018g = new c0(-1.0d, 0.0d);

    /* renamed from: h  reason: collision with root package name */
    private static final c0 f38019h = new c0(1.0d, 0.0d);

    /* renamed from: i  reason: collision with root package name */
    private static final c0 f38020i = new c0(0.0d, -1.0d);

    /* renamed from: j  reason: collision with root package name */
    private static final c0 f38021j = new c0(0.0d, 1.0d);

    /* renamed from: k  reason: collision with root package name */
    private static final c0 f38022k = new c0(1.0d, -1.0d);

    /* renamed from: l  reason: collision with root package name */
    private static final c0 f38023l = new c0(1.0d, 1.0d);

    /* renamed from: m  reason: collision with root package name */
    private static final c0 f38024m = new c0(-1.0d, -1.0d);

    /* renamed from: n  reason: collision with root package name */
    private static final c0 f38025n = new c0(-1.0d, 1.0d);

    /* renamed from: o  reason: collision with root package name */
    private static final c0 f38026o = new c0(0.0d, 0.0d);

    /* renamed from: a  reason: collision with root package name */
    private final double f38027a;

    /* renamed from: b  reason: collision with root package name */
    private final double f38028b;

    /* renamed from: c  reason: collision with root package name */
    private final double f38029c;

    /* renamed from: d  reason: collision with root package name */
    private final double f38030d;

    /* renamed from: e  reason: collision with root package name */
    private final double f38031e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final c0 a(int i10) {
            switch (i10) {
                case 1:
                    return c0.f38019h;
                case 2:
                    return c0.f38018g;
                case 3:
                case 7:
                default:
                    return c0.f38026o;
                case 4:
                    return c0.f38020i;
                case 5:
                    return c0.f38022k;
                case 6:
                    return c0.f38024m;
                case 8:
                    return c0.f38021j;
                case 9:
                    return c0.f38023l;
                case 10:
                    return c0.f38025n;
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
        this.f38027a = d10;
        this.f38028b = d11;
        double hypot = Math.hypot(d10, d11);
        this.f38031e = hypot;
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
        this.f38029c = d12;
        this.f38030d = z10 ? d11 / hypot : 0.0d;
    }

    private final double j(c0 c0Var) {
        return (this.f38029c * c0Var.f38029c) + (this.f38030d * c0Var.f38030d);
    }

    public final double k() {
        return this.f38031e;
    }

    public final boolean l(c0 vector, double d10) {
        Intrinsics.checkNotNullParameter(vector, "vector");
        if (j(vector) > d10) {
            return true;
        }
        return false;
    }
}
