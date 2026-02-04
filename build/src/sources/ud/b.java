package ud;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public final String f50500a;

    /* renamed from: b  reason: collision with root package name */
    public final String f50501b;

    /* renamed from: c  reason: collision with root package name */
    public final int f50502c;

    /* renamed from: d  reason: collision with root package name */
    public final int f50503d;

    public b(String str, String str2, int i10, int i11) {
        this.f50500a = str;
        this.f50501b = str2;
        this.f50502c = i10;
        this.f50503d = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f50502c == bVar.f50502c && this.f50503d == bVar.f50503d && ii.j.a(this.f50500a, bVar.f50500a) && ii.j.a(this.f50501b, bVar.f50501b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ii.j.b(this.f50500a, this.f50501b, Integer.valueOf(this.f50502c), Integer.valueOf(this.f50503d));
    }
}
