package nn;

import android.view.VelocityTracker;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c0 {

    /* renamed from: f  reason: collision with root package name */
    public static final a f38585f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final c0 f38586g = new c0(-1.0d, 0.0d);

    /* renamed from: h  reason: collision with root package name */
    private static final c0 f38587h = new c0(1.0d, 0.0d);

    /* renamed from: i  reason: collision with root package name */
    private static final c0 f38588i = new c0(0.0d, -1.0d);

    /* renamed from: j  reason: collision with root package name */
    private static final c0 f38589j = new c0(0.0d, 1.0d);

    /* renamed from: k  reason: collision with root package name */
    private static final c0 f38590k = new c0(1.0d, -1.0d);

    /* renamed from: l  reason: collision with root package name */
    private static final c0 f38591l = new c0(1.0d, 1.0d);

    /* renamed from: m  reason: collision with root package name */
    private static final c0 f38592m = new c0(-1.0d, -1.0d);

    /* renamed from: n  reason: collision with root package name */
    private static final c0 f38593n = new c0(-1.0d, 1.0d);

    /* renamed from: o  reason: collision with root package name */
    private static final c0 f38594o = new c0(0.0d, 0.0d);

    /* renamed from: a  reason: collision with root package name */
    private final double f38595a;

    /* renamed from: b  reason: collision with root package name */
    private final double f38596b;

    /* renamed from: c  reason: collision with root package name */
    private final double f38597c;

    /* renamed from: d  reason: collision with root package name */
    private final double f38598d;

    /* renamed from: e  reason: collision with root package name */
    private final double f38599e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final c0 a(int i10) {
            switch (i10) {
                case 1:
                    return c0.f38587h;
                case 2:
                    return c0.f38586g;
                case 3:
                case 7:
                default:
                    return c0.f38594o;
                case 4:
                    return c0.f38588i;
                case 5:
                    return c0.f38590k;
                case 6:
                    return c0.f38592m;
                case 8:
                    return c0.f38589j;
                case 9:
                    return c0.f38591l;
                case 10:
                    return c0.f38593n;
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
        this.f38595a = d10;
        this.f38596b = d11;
        double hypot = Math.hypot(d10, d11);
        this.f38599e = hypot;
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
        this.f38597c = d12;
        this.f38598d = z10 ? d11 / hypot : 0.0d;
    }

    private final double j(c0 c0Var) {
        return (this.f38597c * c0Var.f38597c) + (this.f38598d * c0Var.f38598d);
    }

    public final double k() {
        return this.f38599e;
    }

    public final boolean l(c0 vector, double d10) {
        Intrinsics.checkNotNullParameter(vector, "vector");
        if (j(vector) > d10) {
            return true;
        }
        return false;
    }
}
