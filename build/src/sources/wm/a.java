package wm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f53918a;

    /* renamed from: b  reason: collision with root package name */
    private final int f53919b;

    public a(int i10, int i11) {
        this.f53918a = i10;
        this.f53919b = i11;
    }

    public final int a() {
        return c.c(this.f53918a, this.f53919b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f53918a == aVar.f53918a && this.f53919b == aVar.f53919b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f53918a) * 31) + Integer.hashCode(this.f53919b);
    }

    public String toString() {
        int i10 = this.f53918a;
        int i11 = this.f53919b;
        return "ColorProperties(color=" + i10 + ", tone=" + i11 + ")";
    }
}
