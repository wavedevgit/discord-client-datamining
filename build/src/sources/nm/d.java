package nm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f38544a;

    /* renamed from: b  reason: collision with root package name */
    private final double f38545b;

    /* renamed from: c  reason: collision with root package name */
    private final double f38546c;

    /* renamed from: d  reason: collision with root package name */
    private final double f38547d;

    /* renamed from: e  reason: collision with root package name */
    private final double f38548e;

    /* renamed from: f  reason: collision with root package name */
    private final int f38549f;

    /* renamed from: g  reason: collision with root package name */
    private final int f38550g;

    public d(int i10, double d10, double d11, double d12, double d13, int i11, int i12) {
        this.f38544a = i10;
        this.f38545b = d10;
        this.f38546c = d11;
        this.f38547d = d12;
        this.f38548e = d13;
        this.f38549f = i11;
        this.f38550g = i12;
    }

    public final int a() {
        return this.f38550g;
    }

    public final double b() {
        return this.f38547d;
    }

    public final double c() {
        return this.f38548e;
    }

    public final int d() {
        return this.f38549f;
    }

    public final double e() {
        return this.f38545b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (this.f38544a == dVar.f38544a && Double.compare(this.f38545b, dVar.f38545b) == 0 && Double.compare(this.f38546c, dVar.f38546c) == 0 && Double.compare(this.f38547d, dVar.f38547d) == 0 && Double.compare(this.f38548e, dVar.f38548e) == 0 && this.f38549f == dVar.f38549f && this.f38550g == dVar.f38550g) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f38546c;
    }

    public final int g() {
        return this.f38544a;
    }

    public int hashCode() {
        return (((((((((((Integer.hashCode(this.f38544a) * 31) + Double.hashCode(this.f38545b)) * 31) + Double.hashCode(this.f38546c)) * 31) + Double.hashCode(this.f38547d)) * 31) + Double.hashCode(this.f38548e)) * 31) + Integer.hashCode(this.f38549f)) * 31) + Integer.hashCode(this.f38550g);
    }

    public String toString() {
        int i10 = this.f38544a;
        double d10 = this.f38545b;
        double d11 = this.f38546c;
        double d12 = this.f38547d;
        double d13 = this.f38548e;
        int i11 = this.f38549f;
        int i12 = this.f38550g;
        return "FocusedInputSelectionChangedEventData(target=" + i10 + ", startX=" + d10 + ", startY=" + d11 + ", endX=" + d12 + ", endY=" + d13 + ", start=" + i11 + ", end=" + i12 + ")";
    }
}
