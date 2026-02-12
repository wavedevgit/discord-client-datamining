package zm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f56528a;

    /* renamed from: b  reason: collision with root package name */
    private final int f56529b;

    public a(int i10, int i11) {
        this.f56528a = i10;
        this.f56529b = i11;
    }

    public final int a() {
        return c.c(this.f56528a, this.f56529b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f56528a == aVar.f56528a && this.f56529b == aVar.f56529b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f56528a) * 31) + Integer.hashCode(this.f56529b);
    }

    public String toString() {
        int i10 = this.f56528a;
        int i11 = this.f56529b;
        return "ColorProperties(color=" + i10 + ", tone=" + i11 + ")";
    }
}
