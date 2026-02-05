package ud;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public final String f51272a;

    /* renamed from: b  reason: collision with root package name */
    public final String f51273b;

    /* renamed from: c  reason: collision with root package name */
    public final int f51274c;

    /* renamed from: d  reason: collision with root package name */
    public final int f51275d;

    public b(String str, String str2, int i10, int i11) {
        this.f51272a = str;
        this.f51273b = str2;
        this.f51274c = i10;
        this.f51275d = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f51274c == bVar.f51274c && this.f51275d == bVar.f51275d && li.j.a(this.f51272a, bVar.f51272a) && li.j.a(this.f51273b, bVar.f51273b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return li.j.b(this.f51272a, this.f51273b, Integer.valueOf(this.f51274c), Integer.valueOf(this.f51275d));
    }
}
