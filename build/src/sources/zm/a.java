package zm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f57096a;

    /* renamed from: b  reason: collision with root package name */
    private final int f57097b;

    public a(int i10, int i11) {
        this.f57096a = i10;
        this.f57097b = i11;
    }

    public final int a() {
        return c.c(this.f57096a, this.f57097b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f57096a == aVar.f57096a && this.f57097b == aVar.f57097b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f57096a) * 31) + Integer.hashCode(this.f57097b);
    }

    public String toString() {
        int i10 = this.f57096a;
        int i11 = this.f57097b;
        return "ColorProperties(color=" + i10 + ", tone=" + i11 + ")";
    }
}
