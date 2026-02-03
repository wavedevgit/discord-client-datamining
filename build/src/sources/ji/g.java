package ji;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g extends i0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final ii.f f31644d;

    /* renamed from: e  reason: collision with root package name */
    final i0 f31645e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(ii.f fVar, i0 i0Var) {
        this.f31644d = (ii.f) ii.m.j(fVar);
        this.f31645e = (i0) ii.m.j(i0Var);
    }

    @Override // ji.i0, java.util.Comparator
    public int compare(Object obj, Object obj2) {
        return this.f31645e.compare(this.f31644d.apply(obj), this.f31644d.apply(obj2));
    }

    @Override // java.util.Comparator
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f31644d.equals(gVar.f31644d) && this.f31645e.equals(gVar.f31645e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ii.j.b(this.f31644d, this.f31645e);
    }

    public String toString() {
        String valueOf = String.valueOf(this.f31645e);
        String valueOf2 = String.valueOf(this.f31644d);
        StringBuilder sb2 = new StringBuilder(valueOf.length() + 13 + valueOf2.length());
        sb2.append(valueOf);
        sb2.append(".onResultOf(");
        sb2.append(valueOf2);
        sb2.append(")");
        return sb2.toString();
    }
}
