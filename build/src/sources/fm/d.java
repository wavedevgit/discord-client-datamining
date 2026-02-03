package fm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f24463a;

    /* renamed from: b  reason: collision with root package name */
    private final double f24464b;

    /* renamed from: c  reason: collision with root package name */
    private final double f24465c;

    /* renamed from: d  reason: collision with root package name */
    private final double f24466d;

    /* renamed from: e  reason: collision with root package name */
    private final double f24467e;

    /* renamed from: f  reason: collision with root package name */
    private final int f24468f;

    /* renamed from: g  reason: collision with root package name */
    private final int f24469g;

    public d(int i10, double d10, double d11, double d12, double d13, int i11, int i12) {
        this.f24463a = i10;
        this.f24464b = d10;
        this.f24465c = d11;
        this.f24466d = d12;
        this.f24467e = d13;
        this.f24468f = i11;
        this.f24469g = i12;
    }

    public final int a() {
        return this.f24469g;
    }

    public final double b() {
        return this.f24466d;
    }

    public final double c() {
        return this.f24467e;
    }

    public final int d() {
        return this.f24468f;
    }

    public final double e() {
        return this.f24464b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (this.f24463a == dVar.f24463a && Double.compare(this.f24464b, dVar.f24464b) == 0 && Double.compare(this.f24465c, dVar.f24465c) == 0 && Double.compare(this.f24466d, dVar.f24466d) == 0 && Double.compare(this.f24467e, dVar.f24467e) == 0 && this.f24468f == dVar.f24468f && this.f24469g == dVar.f24469g) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f24465c;
    }

    public final int g() {
        return this.f24463a;
    }

    public int hashCode() {
        return (((((((((((Integer.hashCode(this.f24463a) * 31) + Double.hashCode(this.f24464b)) * 31) + Double.hashCode(this.f24465c)) * 31) + Double.hashCode(this.f24466d)) * 31) + Double.hashCode(this.f24467e)) * 31) + Integer.hashCode(this.f24468f)) * 31) + Integer.hashCode(this.f24469g);
    }

    public String toString() {
        int i10 = this.f24463a;
        double d10 = this.f24464b;
        double d11 = this.f24465c;
        double d12 = this.f24466d;
        double d13 = this.f24467e;
        int i11 = this.f24468f;
        int i12 = this.f24469g;
        return "FocusedInputSelectionChangedEventData(target=" + i10 + ", startX=" + d10 + ", startY=" + d11 + ", endX=" + d12 + ", endY=" + d13 + ", start=" + i11 + ", end=" + i12 + ")";
    }
}
