package vd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public final String f52221a;

    /* renamed from: b  reason: collision with root package name */
    public final String f52222b;

    /* renamed from: c  reason: collision with root package name */
    public final int f52223c;

    /* renamed from: d  reason: collision with root package name */
    public final int f52224d;

    public b(String str, String str2, int i10, int i11) {
        this.f52221a = str;
        this.f52222b = str2;
        this.f52223c = i10;
        this.f52224d = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f52223c == bVar.f52223c && this.f52224d == bVar.f52224d && ni.j.a(this.f52221a, bVar.f52221a) && ni.j.a(this.f52222b, bVar.f52222b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ni.j.b(this.f52221a, this.f52222b, Integer.valueOf(this.f52223c), Integer.valueOf(this.f52224d));
    }
}
