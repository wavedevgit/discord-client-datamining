package ud;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public final String f51313a;

    /* renamed from: b  reason: collision with root package name */
    public final String f51314b;

    /* renamed from: c  reason: collision with root package name */
    public final int f51315c;

    /* renamed from: d  reason: collision with root package name */
    public final int f51316d;

    public b(String str, String str2, int i10, int i11) {
        this.f51313a = str;
        this.f51314b = str2;
        this.f51315c = i10;
        this.f51316d = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f51315c == bVar.f51315c && this.f51316d == bVar.f51316d && mi.j.a(this.f51313a, bVar.f51313a) && mi.j.a(this.f51314b, bVar.f51314b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return mi.j.b(this.f51313a, this.f51314b, Integer.valueOf(this.f51315c), Integer.valueOf(this.f51316d));
    }
}
