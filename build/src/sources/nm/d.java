package nm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f37975a;

    /* renamed from: b  reason: collision with root package name */
    private final double f37976b;

    /* renamed from: c  reason: collision with root package name */
    private final double f37977c;

    /* renamed from: d  reason: collision with root package name */
    private final double f37978d;

    /* renamed from: e  reason: collision with root package name */
    private final double f37979e;

    /* renamed from: f  reason: collision with root package name */
    private final int f37980f;

    /* renamed from: g  reason: collision with root package name */
    private final int f37981g;

    public d(int i10, double d10, double d11, double d12, double d13, int i11, int i12) {
        this.f37975a = i10;
        this.f37976b = d10;
        this.f37977c = d11;
        this.f37978d = d12;
        this.f37979e = d13;
        this.f37980f = i11;
        this.f37981g = i12;
    }

    public final int a() {
        return this.f37981g;
    }

    public final double b() {
        return this.f37978d;
    }

    public final double c() {
        return this.f37979e;
    }

    public final int d() {
        return this.f37980f;
    }

    public final double e() {
        return this.f37976b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (this.f37975a == dVar.f37975a && Double.compare(this.f37976b, dVar.f37976b) == 0 && Double.compare(this.f37977c, dVar.f37977c) == 0 && Double.compare(this.f37978d, dVar.f37978d) == 0 && Double.compare(this.f37979e, dVar.f37979e) == 0 && this.f37980f == dVar.f37980f && this.f37981g == dVar.f37981g) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f37977c;
    }

    public final int g() {
        return this.f37975a;
    }

    public int hashCode() {
        return (((((((((((Integer.hashCode(this.f37975a) * 31) + Double.hashCode(this.f37976b)) * 31) + Double.hashCode(this.f37977c)) * 31) + Double.hashCode(this.f37978d)) * 31) + Double.hashCode(this.f37979e)) * 31) + Integer.hashCode(this.f37980f)) * 31) + Integer.hashCode(this.f37981g);
    }

    public String toString() {
        int i10 = this.f37975a;
        double d10 = this.f37976b;
        double d11 = this.f37977c;
        double d12 = this.f37978d;
        double d13 = this.f37979e;
        int i11 = this.f37980f;
        int i12 = this.f37981g;
        return "FocusedInputSelectionChangedEventData(target=" + i10 + ", startX=" + d10 + ", startY=" + d11 + ", endX=" + d12 + ", endY=" + d13 + ", start=" + i11 + ", end=" + i12 + ")";
    }
}
