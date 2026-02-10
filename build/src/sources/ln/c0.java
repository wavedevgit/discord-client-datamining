package ln;

import android.view.VelocityTracker;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c0 {

    /* renamed from: f  reason: collision with root package name */
    public static final a f36046f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final c0 f36047g = new c0(-1.0d, 0.0d);

    /* renamed from: h  reason: collision with root package name */
    private static final c0 f36048h = new c0(1.0d, 0.0d);

    /* renamed from: i  reason: collision with root package name */
    private static final c0 f36049i = new c0(0.0d, -1.0d);

    /* renamed from: j  reason: collision with root package name */
    private static final c0 f36050j = new c0(0.0d, 1.0d);

    /* renamed from: k  reason: collision with root package name */
    private static final c0 f36051k = new c0(1.0d, -1.0d);

    /* renamed from: l  reason: collision with root package name */
    private static final c0 f36052l = new c0(1.0d, 1.0d);

    /* renamed from: m  reason: collision with root package name */
    private static final c0 f36053m = new c0(-1.0d, -1.0d);

    /* renamed from: n  reason: collision with root package name */
    private static final c0 f36054n = new c0(-1.0d, 1.0d);

    /* renamed from: o  reason: collision with root package name */
    private static final c0 f36055o = new c0(0.0d, 0.0d);

    /* renamed from: a  reason: collision with root package name */
    private final double f36056a;

    /* renamed from: b  reason: collision with root package name */
    private final double f36057b;

    /* renamed from: c  reason: collision with root package name */
    private final double f36058c;

    /* renamed from: d  reason: collision with root package name */
    private final double f36059d;

    /* renamed from: e  reason: collision with root package name */
    private final double f36060e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final c0 a(int i10) {
            switch (i10) {
                case 1:
                    return c0.f36048h;
                case 2:
                    return c0.f36047g;
                case 3:
                case 7:
                default:
                    return c0.f36055o;
                case 4:
                    return c0.f36049i;
                case 5:
                    return c0.f36051k;
                case 6:
                    return c0.f36053m;
                case 8:
                    return c0.f36050j;
                case 9:
                    return c0.f36052l;
                case 10:
                    return c0.f36054n;
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
        this.f36056a = d10;
        this.f36057b = d11;
        double hypot = Math.hypot(d10, d11);
        this.f36060e = hypot;
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
        this.f36058c = d12;
        this.f36059d = z10 ? d11 / hypot : 0.0d;
    }

    private final double j(c0 c0Var) {
        return (this.f36058c * c0Var.f36058c) + (this.f36059d * c0Var.f36059d);
    }

    public final double k() {
        return this.f36060e;
    }

    public final boolean l(c0 vector, double d10) {
        Intrinsics.checkNotNullParameter(vector, "vector");
        if (j(vector) > d10) {
            return true;
        }
        return false;
    }
}
