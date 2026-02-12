package vd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public final String f51464a;

    /* renamed from: b  reason: collision with root package name */
    public final String f51465b;

    /* renamed from: c  reason: collision with root package name */
    public final int f51466c;

    /* renamed from: d  reason: collision with root package name */
    public final int f51467d;

    public b(String str, String str2, int i10, int i11) {
        this.f51464a = str;
        this.f51465b = str2;
        this.f51466c = i10;
        this.f51467d = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f51466c == bVar.f51466c && this.f51467d == bVar.f51467d && pi.j.a(this.f51464a, bVar.f51464a) && pi.j.a(this.f51465b, bVar.f51465b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return pi.j.b(this.f51464a, this.f51465b, Integer.valueOf(this.f51466c), Integer.valueOf(this.f51467d));
    }
}
