package km;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final double f31775a;

    /* renamed from: b  reason: collision with root package name */
    private final double f31776b;

    /* renamed from: c  reason: collision with root package name */
    private final double f31777c;

    /* renamed from: d  reason: collision with root package name */
    private final double f31778d;

    /* renamed from: e  reason: collision with root package name */
    private final double f31779e;

    /* renamed from: f  reason: collision with root package name */
    private final double f31780f;

    /* renamed from: g  reason: collision with root package name */
    private final int f31781g;

    /* renamed from: h  reason: collision with root package name */
    private final int f31782h;

    public b(double d10, double d11, double d12, double d13, double d14, double d15, int i10, int i11) {
        this.f31775a = d10;
        this.f31776b = d11;
        this.f31777c = d12;
        this.f31778d = d13;
        this.f31779e = d14;
        this.f31780f = d15;
        this.f31781g = i10;
        this.f31782h = i11;
    }

    public final double a() {
        return this.f31779e;
    }

    public final double b() {
        return this.f31780f;
    }

    public final double c() {
        return this.f31778d;
    }

    public final int d() {
        return this.f31782h;
    }

    public final int e() {
        return this.f31781g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Double.compare(this.f31775a, bVar.f31775a) == 0 && Double.compare(this.f31776b, bVar.f31776b) == 0 && Double.compare(this.f31777c, bVar.f31777c) == 0 && Double.compare(this.f31778d, bVar.f31778d) == 0 && Double.compare(this.f31779e, bVar.f31779e) == 0 && Double.compare(this.f31780f, bVar.f31780f) == 0 && this.f31781g == bVar.f31781g && this.f31782h == bVar.f31782h) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f31777c;
    }

    public final double g() {
        return this.f31775a;
    }

    public final double h() {
        return this.f31776b;
    }

    public int hashCode() {
        return (((((((((((((Double.hashCode(this.f31775a) * 31) + Double.hashCode(this.f31776b)) * 31) + Double.hashCode(this.f31777c)) * 31) + Double.hashCode(this.f31778d)) * 31) + Double.hashCode(this.f31779e)) * 31) + Double.hashCode(this.f31780f)) * 31) + Integer.hashCode(this.f31781g)) * 31) + Integer.hashCode(this.f31782h);
    }

    public String toString() {
        double d10 = this.f31775a;
        double d11 = this.f31776b;
        double d12 = this.f31777c;
        double d13 = this.f31778d;
        double d14 = this.f31779e;
        double d15 = this.f31780f;
        int i10 = this.f31781g;
        int i11 = this.f31782h;
        return "FocusedInputLayoutChangedEventData(x=" + d10 + ", y=" + d11 + ", width=" + d12 + ", height=" + d13 + ", absoluteX=" + d14 + ", absoluteY=" + d15 + ", target=" + i10 + ", parentScrollViewTarget=" + i11 + ")";
    }
}
