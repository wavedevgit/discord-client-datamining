package nm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f37976a;

    /* renamed from: b  reason: collision with root package name */
    private final double f37977b;

    /* renamed from: c  reason: collision with root package name */
    private final double f37978c;

    /* renamed from: d  reason: collision with root package name */
    private final double f37979d;

    /* renamed from: e  reason: collision with root package name */
    private final double f37980e;

    /* renamed from: f  reason: collision with root package name */
    private final int f37981f;

    /* renamed from: g  reason: collision with root package name */
    private final int f37982g;

    public d(int i10, double d10, double d11, double d12, double d13, int i11, int i12) {
        this.f37976a = i10;
        this.f37977b = d10;
        this.f37978c = d11;
        this.f37979d = d12;
        this.f37980e = d13;
        this.f37981f = i11;
        this.f37982g = i12;
    }

    public final int a() {
        return this.f37982g;
    }

    public final double b() {
        return this.f37979d;
    }

    public final double c() {
        return this.f37980e;
    }

    public final int d() {
        return this.f37981f;
    }

    public final double e() {
        return this.f37977b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (this.f37976a == dVar.f37976a && Double.compare(this.f37977b, dVar.f37977b) == 0 && Double.compare(this.f37978c, dVar.f37978c) == 0 && Double.compare(this.f37979d, dVar.f37979d) == 0 && Double.compare(this.f37980e, dVar.f37980e) == 0 && this.f37981f == dVar.f37981f && this.f37982g == dVar.f37982g) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f37978c;
    }

    public final int g() {
        return this.f37976a;
    }

    public int hashCode() {
        return (((((((((((Integer.hashCode(this.f37976a) * 31) + Double.hashCode(this.f37977b)) * 31) + Double.hashCode(this.f37978c)) * 31) + Double.hashCode(this.f37979d)) * 31) + Double.hashCode(this.f37980e)) * 31) + Integer.hashCode(this.f37981f)) * 31) + Integer.hashCode(this.f37982g);
    }

    public String toString() {
        int i10 = this.f37976a;
        double d10 = this.f37977b;
        double d11 = this.f37978c;
        double d12 = this.f37979d;
        double d13 = this.f37980e;
        int i11 = this.f37981f;
        int i12 = this.f37982g;
        return "FocusedInputSelectionChangedEventData(target=" + i10 + ", startX=" + d10 + ", startY=" + d11 + ", endX=" + d12 + ", endY=" + d13 + ", start=" + i11 + ", end=" + i12 + ")";
    }
}
