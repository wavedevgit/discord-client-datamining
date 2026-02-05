package um;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f51470a;

    /* renamed from: b  reason: collision with root package name */
    private final int f51471b;

    public a(int i10, int i11) {
        this.f51470a = i10;
        this.f51471b = i11;
    }

    public final int a() {
        return c.c(this.f51470a, this.f51471b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f51470a == aVar.f51470a && this.f51471b == aVar.f51471b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f51470a) * 31) + Integer.hashCode(this.f51471b);
    }

    public String toString() {
        int i10 = this.f51470a;
        int i11 = this.f51471b;
        return "ColorProperties(color=" + i10 + ", tone=" + i11 + ")";
    }
}
