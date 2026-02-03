package rm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f48871a;

    /* renamed from: b  reason: collision with root package name */
    private final int f48872b;

    public a(int i10, int i11) {
        this.f48871a = i10;
        this.f48872b = i11;
    }

    public final int a() {
        return c.c(this.f48871a, this.f48872b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f48871a == aVar.f48871a && this.f48872b == aVar.f48872b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f48871a) * 31) + Integer.hashCode(this.f48872b);
    }

    public String toString() {
        int i10 = this.f48871a;
        int i11 = this.f48872b;
        return "ColorProperties(color=" + i10 + ", tone=" + i11 + ")";
    }
}
