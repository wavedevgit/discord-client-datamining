package lm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final double f35995a;

    /* renamed from: b  reason: collision with root package name */
    private final double f35996b;

    /* renamed from: c  reason: collision with root package name */
    private final double f35997c;

    /* renamed from: d  reason: collision with root package name */
    private final double f35998d;

    /* renamed from: e  reason: collision with root package name */
    private final double f35999e;

    /* renamed from: f  reason: collision with root package name */
    private final double f36000f;

    /* renamed from: g  reason: collision with root package name */
    private final int f36001g;

    /* renamed from: h  reason: collision with root package name */
    private final int f36002h;

    public b(double d10, double d11, double d12, double d13, double d14, double d15, int i10, int i11) {
        this.f35995a = d10;
        this.f35996b = d11;
        this.f35997c = d12;
        this.f35998d = d13;
        this.f35999e = d14;
        this.f36000f = d15;
        this.f36001g = i10;
        this.f36002h = i11;
    }

    public final double a() {
        return this.f35999e;
    }

    public final double b() {
        return this.f36000f;
    }

    public final double c() {
        return this.f35998d;
    }

    public final int d() {
        return this.f36002h;
    }

    public final int e() {
        return this.f36001g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Double.compare(this.f35995a, bVar.f35995a) == 0 && Double.compare(this.f35996b, bVar.f35996b) == 0 && Double.compare(this.f35997c, bVar.f35997c) == 0 && Double.compare(this.f35998d, bVar.f35998d) == 0 && Double.compare(this.f35999e, bVar.f35999e) == 0 && Double.compare(this.f36000f, bVar.f36000f) == 0 && this.f36001g == bVar.f36001g && this.f36002h == bVar.f36002h) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f35997c;
    }

    public final double g() {
        return this.f35995a;
    }

    public final double h() {
        return this.f35996b;
    }

    public int hashCode() {
        return (((((((((((((Double.hashCode(this.f35995a) * 31) + Double.hashCode(this.f35996b)) * 31) + Double.hashCode(this.f35997c)) * 31) + Double.hashCode(this.f35998d)) * 31) + Double.hashCode(this.f35999e)) * 31) + Double.hashCode(this.f36000f)) * 31) + Integer.hashCode(this.f36001g)) * 31) + Integer.hashCode(this.f36002h);
    }

    public String toString() {
        double d10 = this.f35995a;
        double d11 = this.f35996b;
        double d12 = this.f35997c;
        double d13 = this.f35998d;
        double d14 = this.f35999e;
        double d15 = this.f36000f;
        int i10 = this.f36001g;
        int i11 = this.f36002h;
        return "FocusedInputLayoutChangedEventData(x=" + d10 + ", y=" + d11 + ", width=" + d12 + ", height=" + d13 + ", absoluteX=" + d14 + ", absoluteY=" + d15 + ", target=" + i10 + ", parentScrollViewTarget=" + i11 + ")";
    }
}
