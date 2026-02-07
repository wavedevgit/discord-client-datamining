package km;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f31785a;

    /* renamed from: b  reason: collision with root package name */
    private final double f31786b;

    /* renamed from: c  reason: collision with root package name */
    private final double f31787c;

    /* renamed from: d  reason: collision with root package name */
    private final double f31788d;

    /* renamed from: e  reason: collision with root package name */
    private final double f31789e;

    /* renamed from: f  reason: collision with root package name */
    private final int f31790f;

    /* renamed from: g  reason: collision with root package name */
    private final int f31791g;

    public d(int i10, double d10, double d11, double d12, double d13, int i11, int i12) {
        this.f31785a = i10;
        this.f31786b = d10;
        this.f31787c = d11;
        this.f31788d = d12;
        this.f31789e = d13;
        this.f31790f = i11;
        this.f31791g = i12;
    }

    public final int a() {
        return this.f31791g;
    }

    public final double b() {
        return this.f31788d;
    }

    public final double c() {
        return this.f31789e;
    }

    public final int d() {
        return this.f31790f;
    }

    public final double e() {
        return this.f31786b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (this.f31785a == dVar.f31785a && Double.compare(this.f31786b, dVar.f31786b) == 0 && Double.compare(this.f31787c, dVar.f31787c) == 0 && Double.compare(this.f31788d, dVar.f31788d) == 0 && Double.compare(this.f31789e, dVar.f31789e) == 0 && this.f31790f == dVar.f31790f && this.f31791g == dVar.f31791g) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f31787c;
    }

    public final int g() {
        return this.f31785a;
    }

    public int hashCode() {
        return (((((((((((Integer.hashCode(this.f31785a) * 31) + Double.hashCode(this.f31786b)) * 31) + Double.hashCode(this.f31787c)) * 31) + Double.hashCode(this.f31788d)) * 31) + Double.hashCode(this.f31789e)) * 31) + Integer.hashCode(this.f31790f)) * 31) + Integer.hashCode(this.f31791g);
    }

    public String toString() {
        int i10 = this.f31785a;
        double d10 = this.f31786b;
        double d11 = this.f31787c;
        double d12 = this.f31788d;
        double d13 = this.f31789e;
        int i11 = this.f31790f;
        int i12 = this.f31791g;
        return "FocusedInputSelectionChangedEventData(target=" + i10 + ", startX=" + d10 + ", startY=" + d11 + ", endX=" + d12 + ", endY=" + d13 + ", start=" + i11 + ", end=" + i12 + ")";
    }
}
