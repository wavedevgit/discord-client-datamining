package em;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f22932a;

    /* renamed from: b  reason: collision with root package name */
    private final double f22933b;

    /* renamed from: c  reason: collision with root package name */
    private final double f22934c;

    /* renamed from: d  reason: collision with root package name */
    private final double f22935d;

    /* renamed from: e  reason: collision with root package name */
    private final double f22936e;

    /* renamed from: f  reason: collision with root package name */
    private final int f22937f;

    /* renamed from: g  reason: collision with root package name */
    private final int f22938g;

    public d(int i10, double d10, double d11, double d12, double d13, int i11, int i12) {
        this.f22932a = i10;
        this.f22933b = d10;
        this.f22934c = d11;
        this.f22935d = d12;
        this.f22936e = d13;
        this.f22937f = i11;
        this.f22938g = i12;
    }

    public final int a() {
        return this.f22938g;
    }

    public final double b() {
        return this.f22935d;
    }

    public final double c() {
        return this.f22936e;
    }

    public final int d() {
        return this.f22937f;
    }

    public final double e() {
        return this.f22933b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (this.f22932a == dVar.f22932a && Double.compare(this.f22933b, dVar.f22933b) == 0 && Double.compare(this.f22934c, dVar.f22934c) == 0 && Double.compare(this.f22935d, dVar.f22935d) == 0 && Double.compare(this.f22936e, dVar.f22936e) == 0 && this.f22937f == dVar.f22937f && this.f22938g == dVar.f22938g) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f22934c;
    }

    public final int g() {
        return this.f22932a;
    }

    public int hashCode() {
        return (((((((((((Integer.hashCode(this.f22932a) * 31) + Double.hashCode(this.f22933b)) * 31) + Double.hashCode(this.f22934c)) * 31) + Double.hashCode(this.f22935d)) * 31) + Double.hashCode(this.f22936e)) * 31) + Integer.hashCode(this.f22937f)) * 31) + Integer.hashCode(this.f22938g);
    }

    public String toString() {
        int i10 = this.f22932a;
        double d10 = this.f22933b;
        double d11 = this.f22934c;
        double d12 = this.f22935d;
        double d13 = this.f22936e;
        int i11 = this.f22937f;
        int i12 = this.f22938g;
        return "FocusedInputSelectionChangedEventData(target=" + i10 + ", startX=" + d10 + ", startY=" + d11 + ", endX=" + d12 + ", endY=" + d13 + ", start=" + i11 + ", end=" + i12 + ")";
    }
}
