package im;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f27447a;

    /* renamed from: b  reason: collision with root package name */
    private final double f27448b;

    /* renamed from: c  reason: collision with root package name */
    private final double f27449c;

    /* renamed from: d  reason: collision with root package name */
    private final double f27450d;

    /* renamed from: e  reason: collision with root package name */
    private final double f27451e;

    /* renamed from: f  reason: collision with root package name */
    private final int f27452f;

    /* renamed from: g  reason: collision with root package name */
    private final int f27453g;

    public d(int i10, double d10, double d11, double d12, double d13, int i11, int i12) {
        this.f27447a = i10;
        this.f27448b = d10;
        this.f27449c = d11;
        this.f27450d = d12;
        this.f27451e = d13;
        this.f27452f = i11;
        this.f27453g = i12;
    }

    public final int a() {
        return this.f27453g;
    }

    public final double b() {
        return this.f27450d;
    }

    public final double c() {
        return this.f27451e;
    }

    public final int d() {
        return this.f27452f;
    }

    public final double e() {
        return this.f27448b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (this.f27447a == dVar.f27447a && Double.compare(this.f27448b, dVar.f27448b) == 0 && Double.compare(this.f27449c, dVar.f27449c) == 0 && Double.compare(this.f27450d, dVar.f27450d) == 0 && Double.compare(this.f27451e, dVar.f27451e) == 0 && this.f27452f == dVar.f27452f && this.f27453g == dVar.f27453g) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f27449c;
    }

    public final int g() {
        return this.f27447a;
    }

    public int hashCode() {
        return (((((((((((Integer.hashCode(this.f27447a) * 31) + Double.hashCode(this.f27448b)) * 31) + Double.hashCode(this.f27449c)) * 31) + Double.hashCode(this.f27450d)) * 31) + Double.hashCode(this.f27451e)) * 31) + Integer.hashCode(this.f27452f)) * 31) + Integer.hashCode(this.f27453g);
    }

    public String toString() {
        int i10 = this.f27447a;
        double d10 = this.f27448b;
        double d11 = this.f27449c;
        double d12 = this.f27450d;
        double d13 = this.f27451e;
        int i11 = this.f27452f;
        int i12 = this.f27453g;
        return "FocusedInputSelectionChangedEventData(target=" + i10 + ", startX=" + d10 + ", startY=" + d11 + ", endX=" + d12 + ", endY=" + d13 + ", start=" + i11 + ", end=" + i12 + ")";
    }
}
