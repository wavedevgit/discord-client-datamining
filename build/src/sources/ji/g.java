package ji;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g extends i0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final ii.f f31848d;

    /* renamed from: e  reason: collision with root package name */
    final i0 f31849e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(ii.f fVar, i0 i0Var) {
        this.f31848d = (ii.f) ii.m.j(fVar);
        this.f31849e = (i0) ii.m.j(i0Var);
    }

    @Override // ji.i0, java.util.Comparator
    public int compare(Object obj, Object obj2) {
        return this.f31849e.compare(this.f31848d.apply(obj), this.f31848d.apply(obj2));
    }

    @Override // java.util.Comparator
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f31848d.equals(gVar.f31848d) && this.f31849e.equals(gVar.f31849e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ii.j.b(this.f31848d, this.f31849e);
    }

    public String toString() {
        String valueOf = String.valueOf(this.f31849e);
        String valueOf2 = String.valueOf(this.f31848d);
        StringBuilder sb2 = new StringBuilder(valueOf.length() + 13 + valueOf2.length());
        sb2.append(valueOf);
        sb2.append(".onResultOf(");
        sb2.append(valueOf2);
        sb2.append(")");
        return sb2.toString();
    }
}
