package fm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f24055a;

    /* renamed from: b  reason: collision with root package name */
    private final double f24056b;

    /* renamed from: c  reason: collision with root package name */
    private final double f24057c;

    /* renamed from: d  reason: collision with root package name */
    private final double f24058d;

    /* renamed from: e  reason: collision with root package name */
    private final double f24059e;

    /* renamed from: f  reason: collision with root package name */
    private final int f24060f;

    /* renamed from: g  reason: collision with root package name */
    private final int f24061g;

    public d(int i10, double d10, double d11, double d12, double d13, int i11, int i12) {
        this.f24055a = i10;
        this.f24056b = d10;
        this.f24057c = d11;
        this.f24058d = d12;
        this.f24059e = d13;
        this.f24060f = i11;
        this.f24061g = i12;
    }

    public final int a() {
        return this.f24061g;
    }

    public final double b() {
        return this.f24058d;
    }

    public final double c() {
        return this.f24059e;
    }

    public final int d() {
        return this.f24060f;
    }

    public final double e() {
        return this.f24056b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (this.f24055a == dVar.f24055a && Double.compare(this.f24056b, dVar.f24056b) == 0 && Double.compare(this.f24057c, dVar.f24057c) == 0 && Double.compare(this.f24058d, dVar.f24058d) == 0 && Double.compare(this.f24059e, dVar.f24059e) == 0 && this.f24060f == dVar.f24060f && this.f24061g == dVar.f24061g) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f24057c;
    }

    public final int g() {
        return this.f24055a;
    }

    public int hashCode() {
        return (((((((((((Integer.hashCode(this.f24055a) * 31) + Double.hashCode(this.f24056b)) * 31) + Double.hashCode(this.f24057c)) * 31) + Double.hashCode(this.f24058d)) * 31) + Double.hashCode(this.f24059e)) * 31) + Integer.hashCode(this.f24060f)) * 31) + Integer.hashCode(this.f24061g);
    }

    public String toString() {
        int i10 = this.f24055a;
        double d10 = this.f24056b;
        double d11 = this.f24057c;
        double d12 = this.f24058d;
        double d13 = this.f24059e;
        int i11 = this.f24060f;
        int i12 = this.f24061g;
        return "FocusedInputSelectionChangedEventData(target=" + i10 + ", startX=" + d10 + ", startY=" + d11 + ", endX=" + d12 + ", endY=" + d13 + ", start=" + i11 + ", end=" + i12 + ")";
    }
}
