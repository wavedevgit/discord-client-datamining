package zm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f56527a;

    /* renamed from: b  reason: collision with root package name */
    private final int f56528b;

    public a(int i10, int i11) {
        this.f56527a = i10;
        this.f56528b = i11;
    }

    public final int a() {
        return c.c(this.f56527a, this.f56528b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f56527a == aVar.f56527a && this.f56528b == aVar.f56528b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f56527a) * 31) + Integer.hashCode(this.f56528b);
    }

    public String toString() {
        int i10 = this.f56527a;
        int i11 = this.f56528b;
        return "ColorProperties(color=" + i10 + ", tone=" + i11 + ")";
    }
}
