package vd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public final String f52032a;

    /* renamed from: b  reason: collision with root package name */
    public final String f52033b;

    /* renamed from: c  reason: collision with root package name */
    public final int f52034c;

    /* renamed from: d  reason: collision with root package name */
    public final int f52035d;

    public b(String str, String str2, int i10, int i11) {
        this.f52032a = str;
        this.f52033b = str2;
        this.f52034c = i10;
        this.f52035d = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f52034c == bVar.f52034c && this.f52035d == bVar.f52035d && pi.j.a(this.f52032a, bVar.f52032a) && pi.j.a(this.f52033b, bVar.f52033b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return pi.j.b(this.f52032a, this.f52033b, Integer.valueOf(this.f52034c), Integer.valueOf(this.f52035d));
    }
}
