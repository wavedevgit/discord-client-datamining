package ud;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public final String f50144a;

    /* renamed from: b  reason: collision with root package name */
    public final String f50145b;

    /* renamed from: c  reason: collision with root package name */
    public final int f50146c;

    /* renamed from: d  reason: collision with root package name */
    public final int f50147d;

    public b(String str, String str2, int i10, int i11) {
        this.f50144a = str;
        this.f50145b = str2;
        this.f50146c = i10;
        this.f50147d = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f50146c == bVar.f50146c && this.f50147d == bVar.f50147d && ii.j.a(this.f50144a, bVar.f50144a) && ii.j.a(this.f50145b, bVar.f50145b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ii.j.b(this.f50144a, this.f50145b, Integer.valueOf(this.f50146c), Integer.valueOf(this.f50147d));
    }
}
