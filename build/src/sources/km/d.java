package km;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f31737a;

    /* renamed from: b  reason: collision with root package name */
    private final double f31738b;

    /* renamed from: c  reason: collision with root package name */
    private final double f31739c;

    /* renamed from: d  reason: collision with root package name */
    private final double f31740d;

    /* renamed from: e  reason: collision with root package name */
    private final double f31741e;

    /* renamed from: f  reason: collision with root package name */
    private final int f31742f;

    /* renamed from: g  reason: collision with root package name */
    private final int f31743g;

    public d(int i10, double d10, double d11, double d12, double d13, int i11, int i12) {
        this.f31737a = i10;
        this.f31738b = d10;
        this.f31739c = d11;
        this.f31740d = d12;
        this.f31741e = d13;
        this.f31742f = i11;
        this.f31743g = i12;
    }

    public final int a() {
        return this.f31743g;
    }

    public final double b() {
        return this.f31740d;
    }

    public final double c() {
        return this.f31741e;
    }

    public final int d() {
        return this.f31742f;
    }

    public final double e() {
        return this.f31738b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (this.f31737a == dVar.f31737a && Double.compare(this.f31738b, dVar.f31738b) == 0 && Double.compare(this.f31739c, dVar.f31739c) == 0 && Double.compare(this.f31740d, dVar.f31740d) == 0 && Double.compare(this.f31741e, dVar.f31741e) == 0 && this.f31742f == dVar.f31742f && this.f31743g == dVar.f31743g) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f31739c;
    }

    public final int g() {
        return this.f31737a;
    }

    public int hashCode() {
        return (((((((((((Integer.hashCode(this.f31737a) * 31) + Double.hashCode(this.f31738b)) * 31) + Double.hashCode(this.f31739c)) * 31) + Double.hashCode(this.f31740d)) * 31) + Double.hashCode(this.f31741e)) * 31) + Integer.hashCode(this.f31742f)) * 31) + Integer.hashCode(this.f31743g);
    }

    public String toString() {
        int i10 = this.f31737a;
        double d10 = this.f31738b;
        double d11 = this.f31739c;
        double d12 = this.f31740d;
        double d13 = this.f31741e;
        int i11 = this.f31742f;
        int i12 = this.f31743g;
        return "FocusedInputSelectionChangedEventData(target=" + i10 + ", startX=" + d10 + ", startY=" + d11 + ", endX=" + d12 + ", endY=" + d13 + ", start=" + i11 + ", end=" + i12 + ")";
    }
}
