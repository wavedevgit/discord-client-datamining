package wm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f53870a;

    /* renamed from: b  reason: collision with root package name */
    private final int f53871b;

    public a(int i10, int i11) {
        this.f53870a = i10;
        this.f53871b = i11;
    }

    public final int a() {
        return c.c(this.f53870a, this.f53871b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f53870a == aVar.f53870a && this.f53871b == aVar.f53871b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f53870a) * 31) + Integer.hashCode(this.f53871b);
    }

    public String toString() {
        int i10 = this.f53870a;
        int i11 = this.f53871b;
        return "ColorProperties(color=" + i10 + ", tone=" + i11 + ")";
    }
}
