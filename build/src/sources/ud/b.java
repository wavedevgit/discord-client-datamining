package ud;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public final String f50216a;

    /* renamed from: b  reason: collision with root package name */
    public final String f50217b;

    /* renamed from: c  reason: collision with root package name */
    public final int f50218c;

    /* renamed from: d  reason: collision with root package name */
    public final int f50219d;

    public b(String str, String str2, int i10, int i11) {
        this.f50216a = str;
        this.f50217b = str2;
        this.f50218c = i10;
        this.f50219d = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f50218c == bVar.f50218c && this.f50219d == bVar.f50219d && ii.j.a(this.f50216a, bVar.f50216a) && ii.j.a(this.f50217b, bVar.f50217b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ii.j.b(this.f50216a, this.f50217b, Integer.valueOf(this.f50218c), Integer.valueOf(this.f50219d));
    }
}
