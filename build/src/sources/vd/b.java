package vd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public final String f51463a;

    /* renamed from: b  reason: collision with root package name */
    public final String f51464b;

    /* renamed from: c  reason: collision with root package name */
    public final int f51465c;

    /* renamed from: d  reason: collision with root package name */
    public final int f51466d;

    public b(String str, String str2, int i10, int i11) {
        this.f51463a = str;
        this.f51464b = str2;
        this.f51465c = i10;
        this.f51466d = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f51465c == bVar.f51465c && this.f51466d == bVar.f51466d && pi.j.a(this.f51463a, bVar.f51463a) && pi.j.a(this.f51464b, bVar.f51464b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return pi.j.b(this.f51463a, this.f51464b, Integer.valueOf(this.f51465c), Integer.valueOf(this.f51466d));
    }
}
