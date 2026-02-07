package ud;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public final String f51361a;

    /* renamed from: b  reason: collision with root package name */
    public final String f51362b;

    /* renamed from: c  reason: collision with root package name */
    public final int f51363c;

    /* renamed from: d  reason: collision with root package name */
    public final int f51364d;

    public b(String str, String str2, int i10, int i11) {
        this.f51361a = str;
        this.f51362b = str2;
        this.f51363c = i10;
        this.f51364d = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f51363c == bVar.f51363c && this.f51364d == bVar.f51364d && mi.j.a(this.f51361a, bVar.f51361a) && mi.j.a(this.f51362b, bVar.f51362b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return mi.j.b(this.f51361a, this.f51362b, Integer.valueOf(this.f51363c), Integer.valueOf(this.f51364d));
    }
}
