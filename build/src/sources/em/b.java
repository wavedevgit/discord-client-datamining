package em;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final double f22922a;

    /* renamed from: b  reason: collision with root package name */
    private final double f22923b;

    /* renamed from: c  reason: collision with root package name */
    private final double f22924c;

    /* renamed from: d  reason: collision with root package name */
    private final double f22925d;

    /* renamed from: e  reason: collision with root package name */
    private final double f22926e;

    /* renamed from: f  reason: collision with root package name */
    private final double f22927f;

    /* renamed from: g  reason: collision with root package name */
    private final int f22928g;

    /* renamed from: h  reason: collision with root package name */
    private final int f22929h;

    public b(double d10, double d11, double d12, double d13, double d14, double d15, int i10, int i11) {
        this.f22922a = d10;
        this.f22923b = d11;
        this.f22924c = d12;
        this.f22925d = d13;
        this.f22926e = d14;
        this.f22927f = d15;
        this.f22928g = i10;
        this.f22929h = i11;
    }

    public final double a() {
        return this.f22926e;
    }

    public final double b() {
        return this.f22927f;
    }

    public final double c() {
        return this.f22925d;
    }

    public final int d() {
        return this.f22929h;
    }

    public final int e() {
        return this.f22928g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Double.compare(this.f22922a, bVar.f22922a) == 0 && Double.compare(this.f22923b, bVar.f22923b) == 0 && Double.compare(this.f22924c, bVar.f22924c) == 0 && Double.compare(this.f22925d, bVar.f22925d) == 0 && Double.compare(this.f22926e, bVar.f22926e) == 0 && Double.compare(this.f22927f, bVar.f22927f) == 0 && this.f22928g == bVar.f22928g && this.f22929h == bVar.f22929h) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f22924c;
    }

    public final double g() {
        return this.f22922a;
    }

    public final double h() {
        return this.f22923b;
    }

    public int hashCode() {
        return (((((((((((((Double.hashCode(this.f22922a) * 31) + Double.hashCode(this.f22923b)) * 31) + Double.hashCode(this.f22924c)) * 31) + Double.hashCode(this.f22925d)) * 31) + Double.hashCode(this.f22926e)) * 31) + Double.hashCode(this.f22927f)) * 31) + Integer.hashCode(this.f22928g)) * 31) + Integer.hashCode(this.f22929h);
    }

    public String toString() {
        double d10 = this.f22922a;
        double d11 = this.f22923b;
        double d12 = this.f22924c;
        double d13 = this.f22925d;
        double d14 = this.f22926e;
        double d15 = this.f22927f;
        int i10 = this.f22928g;
        int i11 = this.f22929h;
        return "FocusedInputLayoutChangedEventData(x=" + d10 + ", y=" + d11 + ", width=" + d12 + ", height=" + d13 + ", absoluteX=" + d14 + ", absoluteY=" + d15 + ", target=" + i10 + ", parentScrollViewTarget=" + i11 + ")";
    }
}
