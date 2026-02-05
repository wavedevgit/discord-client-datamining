package im;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final double f27437a;

    /* renamed from: b  reason: collision with root package name */
    private final double f27438b;

    /* renamed from: c  reason: collision with root package name */
    private final double f27439c;

    /* renamed from: d  reason: collision with root package name */
    private final double f27440d;

    /* renamed from: e  reason: collision with root package name */
    private final double f27441e;

    /* renamed from: f  reason: collision with root package name */
    private final double f27442f;

    /* renamed from: g  reason: collision with root package name */
    private final int f27443g;

    /* renamed from: h  reason: collision with root package name */
    private final int f27444h;

    public b(double d10, double d11, double d12, double d13, double d14, double d15, int i10, int i11) {
        this.f27437a = d10;
        this.f27438b = d11;
        this.f27439c = d12;
        this.f27440d = d13;
        this.f27441e = d14;
        this.f27442f = d15;
        this.f27443g = i10;
        this.f27444h = i11;
    }

    public final double a() {
        return this.f27441e;
    }

    public final double b() {
        return this.f27442f;
    }

    public final double c() {
        return this.f27440d;
    }

    public final int d() {
        return this.f27444h;
    }

    public final int e() {
        return this.f27443g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Double.compare(this.f27437a, bVar.f27437a) == 0 && Double.compare(this.f27438b, bVar.f27438b) == 0 && Double.compare(this.f27439c, bVar.f27439c) == 0 && Double.compare(this.f27440d, bVar.f27440d) == 0 && Double.compare(this.f27441e, bVar.f27441e) == 0 && Double.compare(this.f27442f, bVar.f27442f) == 0 && this.f27443g == bVar.f27443g && this.f27444h == bVar.f27444h) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f27439c;
    }

    public final double g() {
        return this.f27437a;
    }

    public final double h() {
        return this.f27438b;
    }

    public int hashCode() {
        return (((((((((((((Double.hashCode(this.f27437a) * 31) + Double.hashCode(this.f27438b)) * 31) + Double.hashCode(this.f27439c)) * 31) + Double.hashCode(this.f27440d)) * 31) + Double.hashCode(this.f27441e)) * 31) + Double.hashCode(this.f27442f)) * 31) + Integer.hashCode(this.f27443g)) * 31) + Integer.hashCode(this.f27444h);
    }

    public String toString() {
        double d10 = this.f27437a;
        double d11 = this.f27438b;
        double d12 = this.f27439c;
        double d13 = this.f27440d;
        double d14 = this.f27441e;
        double d15 = this.f27442f;
        int i10 = this.f27443g;
        int i11 = this.f27444h;
        return "FocusedInputLayoutChangedEventData(x=" + d10 + ", y=" + d11 + ", width=" + d12 + ", height=" + d13 + ", absoluteX=" + d14 + ", absoluteY=" + d15 + ", target=" + i10 + ", parentScrollViewTarget=" + i11 + ")";
    }
}
