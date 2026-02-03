package fm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final double f24453a;

    /* renamed from: b  reason: collision with root package name */
    private final double f24454b;

    /* renamed from: c  reason: collision with root package name */
    private final double f24455c;

    /* renamed from: d  reason: collision with root package name */
    private final double f24456d;

    /* renamed from: e  reason: collision with root package name */
    private final double f24457e;

    /* renamed from: f  reason: collision with root package name */
    private final double f24458f;

    /* renamed from: g  reason: collision with root package name */
    private final int f24459g;

    /* renamed from: h  reason: collision with root package name */
    private final int f24460h;

    public b(double d10, double d11, double d12, double d13, double d14, double d15, int i10, int i11) {
        this.f24453a = d10;
        this.f24454b = d11;
        this.f24455c = d12;
        this.f24456d = d13;
        this.f24457e = d14;
        this.f24458f = d15;
        this.f24459g = i10;
        this.f24460h = i11;
    }

    public final double a() {
        return this.f24457e;
    }

    public final double b() {
        return this.f24458f;
    }

    public final double c() {
        return this.f24456d;
    }

    public final int d() {
        return this.f24460h;
    }

    public final int e() {
        return this.f24459g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Double.compare(this.f24453a, bVar.f24453a) == 0 && Double.compare(this.f24454b, bVar.f24454b) == 0 && Double.compare(this.f24455c, bVar.f24455c) == 0 && Double.compare(this.f24456d, bVar.f24456d) == 0 && Double.compare(this.f24457e, bVar.f24457e) == 0 && Double.compare(this.f24458f, bVar.f24458f) == 0 && this.f24459g == bVar.f24459g && this.f24460h == bVar.f24460h) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f24455c;
    }

    public final double g() {
        return this.f24453a;
    }

    public final double h() {
        return this.f24454b;
    }

    public int hashCode() {
        return (((((((((((((Double.hashCode(this.f24453a) * 31) + Double.hashCode(this.f24454b)) * 31) + Double.hashCode(this.f24455c)) * 31) + Double.hashCode(this.f24456d)) * 31) + Double.hashCode(this.f24457e)) * 31) + Double.hashCode(this.f24458f)) * 31) + Integer.hashCode(this.f24459g)) * 31) + Integer.hashCode(this.f24460h);
    }

    public String toString() {
        double d10 = this.f24453a;
        double d11 = this.f24454b;
        double d12 = this.f24455c;
        double d13 = this.f24456d;
        double d14 = this.f24457e;
        double d15 = this.f24458f;
        int i10 = this.f24459g;
        int i11 = this.f24460h;
        return "FocusedInputLayoutChangedEventData(x=" + d10 + ", y=" + d11 + ", width=" + d12 + ", height=" + d13 + ", absoluteX=" + d14 + ", absoluteY=" + d15 + ", target=" + i10 + ", parentScrollViewTarget=" + i11 + ")";
    }
}
