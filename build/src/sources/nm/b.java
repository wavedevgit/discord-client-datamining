package nm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final double f38534a;

    /* renamed from: b  reason: collision with root package name */
    private final double f38535b;

    /* renamed from: c  reason: collision with root package name */
    private final double f38536c;

    /* renamed from: d  reason: collision with root package name */
    private final double f38537d;

    /* renamed from: e  reason: collision with root package name */
    private final double f38538e;

    /* renamed from: f  reason: collision with root package name */
    private final double f38539f;

    /* renamed from: g  reason: collision with root package name */
    private final int f38540g;

    /* renamed from: h  reason: collision with root package name */
    private final int f38541h;

    public b(double d10, double d11, double d12, double d13, double d14, double d15, int i10, int i11) {
        this.f38534a = d10;
        this.f38535b = d11;
        this.f38536c = d12;
        this.f38537d = d13;
        this.f38538e = d14;
        this.f38539f = d15;
        this.f38540g = i10;
        this.f38541h = i11;
    }

    public final double a() {
        return this.f38538e;
    }

    public final double b() {
        return this.f38539f;
    }

    public final double c() {
        return this.f38537d;
    }

    public final int d() {
        return this.f38541h;
    }

    public final int e() {
        return this.f38540g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Double.compare(this.f38534a, bVar.f38534a) == 0 && Double.compare(this.f38535b, bVar.f38535b) == 0 && Double.compare(this.f38536c, bVar.f38536c) == 0 && Double.compare(this.f38537d, bVar.f38537d) == 0 && Double.compare(this.f38538e, bVar.f38538e) == 0 && Double.compare(this.f38539f, bVar.f38539f) == 0 && this.f38540g == bVar.f38540g && this.f38541h == bVar.f38541h) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f38536c;
    }

    public final double g() {
        return this.f38534a;
    }

    public final double h() {
        return this.f38535b;
    }

    public int hashCode() {
        return (((((((((((((Double.hashCode(this.f38534a) * 31) + Double.hashCode(this.f38535b)) * 31) + Double.hashCode(this.f38536c)) * 31) + Double.hashCode(this.f38537d)) * 31) + Double.hashCode(this.f38538e)) * 31) + Double.hashCode(this.f38539f)) * 31) + Integer.hashCode(this.f38540g)) * 31) + Integer.hashCode(this.f38541h);
    }

    public String toString() {
        double d10 = this.f38534a;
        double d11 = this.f38535b;
        double d12 = this.f38536c;
        double d13 = this.f38537d;
        double d14 = this.f38538e;
        double d15 = this.f38539f;
        int i10 = this.f38540g;
        int i11 = this.f38541h;
        return "FocusedInputLayoutChangedEventData(x=" + d10 + ", y=" + d11 + ", width=" + d12 + ", height=" + d13 + ", absoluteX=" + d14 + ", absoluteY=" + d15 + ", target=" + i10 + ", parentScrollViewTarget=" + i11 + ")";
    }
}
