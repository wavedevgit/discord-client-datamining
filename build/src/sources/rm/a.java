package rm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f48868a;

    /* renamed from: b  reason: collision with root package name */
    private final int f48869b;

    public a(int i10, int i11) {
        this.f48868a = i10;
        this.f48869b = i11;
    }

    public final int a() {
        return c.c(this.f48868a, this.f48869b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f48868a == aVar.f48868a && this.f48869b == aVar.f48869b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f48868a) * 31) + Integer.hashCode(this.f48869b);
    }

    public String toString() {
        int i10 = this.f48868a;
        int i11 = this.f48869b;
        return "ColorProperties(color=" + i10 + ", tone=" + i11 + ")";
    }
}
