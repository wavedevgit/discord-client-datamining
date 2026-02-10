package xm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f55081a;

    /* renamed from: b  reason: collision with root package name */
    private final int f55082b;

    public a(int i10, int i11) {
        this.f55081a = i10;
        this.f55082b = i11;
    }

    public final int a() {
        return c.c(this.f55081a, this.f55082b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f55081a == aVar.f55081a && this.f55082b == aVar.f55082b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f55081a) * 31) + Integer.hashCode(this.f55082b);
    }

    public String toString() {
        int i10 = this.f55081a;
        int i11 = this.f55082b;
        return "ColorProperties(color=" + i10 + ", tone=" + i11 + ")";
    }
}
