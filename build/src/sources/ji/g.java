package ji;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g extends i0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final ii.f f32110d;

    /* renamed from: e  reason: collision with root package name */
    final i0 f32111e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(ii.f fVar, i0 i0Var) {
        this.f32110d = (ii.f) ii.m.j(fVar);
        this.f32111e = (i0) ii.m.j(i0Var);
    }

    @Override // ji.i0, java.util.Comparator
    public int compare(Object obj, Object obj2) {
        return this.f32111e.compare(this.f32110d.apply(obj), this.f32110d.apply(obj2));
    }

    @Override // java.util.Comparator
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f32110d.equals(gVar.f32110d) && this.f32111e.equals(gVar.f32111e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ii.j.b(this.f32110d, this.f32111e);
    }

    public String toString() {
        String valueOf = String.valueOf(this.f32111e);
        String valueOf2 = String.valueOf(this.f32110d);
        StringBuilder sb2 = new StringBuilder(valueOf.length() + 13 + valueOf2.length());
        sb2.append(valueOf);
        sb2.append(".onResultOf(");
        sb2.append(valueOf2);
        sb2.append(")");
        return sb2.toString();
    }
}
