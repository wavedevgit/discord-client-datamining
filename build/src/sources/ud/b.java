package ud;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public final String f50160a;

    /* renamed from: b  reason: collision with root package name */
    public final String f50161b;

    /* renamed from: c  reason: collision with root package name */
    public final int f50162c;

    /* renamed from: d  reason: collision with root package name */
    public final int f50163d;

    public b(String str, String str2, int i10, int i11) {
        this.f50160a = str;
        this.f50161b = str2;
        this.f50162c = i10;
        this.f50163d = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f50162c == bVar.f50162c && this.f50163d == bVar.f50163d && ii.j.a(this.f50160a, bVar.f50160a) && ii.j.a(this.f50161b, bVar.f50161b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ii.j.b(this.f50160a, this.f50161b, Integer.valueOf(this.f50162c), Integer.valueOf(this.f50163d));
    }
}
