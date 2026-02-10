package lm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f36005a;

    /* renamed from: b  reason: collision with root package name */
    private final double f36006b;

    /* renamed from: c  reason: collision with root package name */
    private final double f36007c;

    /* renamed from: d  reason: collision with root package name */
    private final double f36008d;

    /* renamed from: e  reason: collision with root package name */
    private final double f36009e;

    /* renamed from: f  reason: collision with root package name */
    private final int f36010f;

    /* renamed from: g  reason: collision with root package name */
    private final int f36011g;

    public d(int i10, double d10, double d11, double d12, double d13, int i11, int i12) {
        this.f36005a = i10;
        this.f36006b = d10;
        this.f36007c = d11;
        this.f36008d = d12;
        this.f36009e = d13;
        this.f36010f = i11;
        this.f36011g = i12;
    }

    public final int a() {
        return this.f36011g;
    }

    public final double b() {
        return this.f36008d;
    }

    public final double c() {
        return this.f36009e;
    }

    public final int d() {
        return this.f36010f;
    }

    public final double e() {
        return this.f36006b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (this.f36005a == dVar.f36005a && Double.compare(this.f36006b, dVar.f36006b) == 0 && Double.compare(this.f36007c, dVar.f36007c) == 0 && Double.compare(this.f36008d, dVar.f36008d) == 0 && Double.compare(this.f36009e, dVar.f36009e) == 0 && this.f36010f == dVar.f36010f && this.f36011g == dVar.f36011g) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f36007c;
    }

    public final int g() {
        return this.f36005a;
    }

    public int hashCode() {
        return (((((((((((Integer.hashCode(this.f36005a) * 31) + Double.hashCode(this.f36006b)) * 31) + Double.hashCode(this.f36007c)) * 31) + Double.hashCode(this.f36008d)) * 31) + Double.hashCode(this.f36009e)) * 31) + Integer.hashCode(this.f36010f)) * 31) + Integer.hashCode(this.f36011g);
    }

    public String toString() {
        int i10 = this.f36005a;
        double d10 = this.f36006b;
        double d11 = this.f36007c;
        double d12 = this.f36008d;
        double d13 = this.f36009e;
        int i11 = this.f36010f;
        int i12 = this.f36011g;
        return "FocusedInputSelectionChangedEventData(target=" + i10 + ", startX=" + d10 + ", startY=" + d11 + ", endX=" + d12 + ", endY=" + d13 + ", start=" + i11 + ", end=" + i12 + ")";
    }
}
