package ud;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public final String f50503a;

    /* renamed from: b  reason: collision with root package name */
    public final String f50504b;

    /* renamed from: c  reason: collision with root package name */
    public final int f50505c;

    /* renamed from: d  reason: collision with root package name */
    public final int f50506d;

    public b(String str, String str2, int i10, int i11) {
        this.f50503a = str;
        this.f50504b = str2;
        this.f50505c = i10;
        this.f50506d = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f50505c == bVar.f50505c && this.f50506d == bVar.f50506d && ii.j.a(this.f50503a, bVar.f50503a) && ii.j.a(this.f50504b, bVar.f50504b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ii.j.b(this.f50503a, this.f50504b, Integer.valueOf(this.f50505c), Integer.valueOf(this.f50506d));
    }
}
