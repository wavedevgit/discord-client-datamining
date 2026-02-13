package qi;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g extends i0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final pi.f f45899d;

    /* renamed from: e  reason: collision with root package name */
    final i0 f45900e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(pi.f fVar, i0 i0Var) {
        this.f45899d = (pi.f) pi.m.j(fVar);
        this.f45900e = (i0) pi.m.j(i0Var);
    }

    @Override // qi.i0, java.util.Comparator
    public int compare(Object obj, Object obj2) {
        return this.f45900e.compare(this.f45899d.apply(obj), this.f45899d.apply(obj2));
    }

    @Override // java.util.Comparator
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f45899d.equals(gVar.f45899d) && this.f45900e.equals(gVar.f45900e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return pi.j.b(this.f45899d, this.f45900e);
    }

    public String toString() {
        String valueOf = String.valueOf(this.f45900e);
        String valueOf2 = String.valueOf(this.f45899d);
        StringBuilder sb2 = new StringBuilder(valueOf.length() + 13 + valueOf2.length());
        sb2.append(valueOf);
        sb2.append(".onResultOf(");
        sb2.append(valueOf2);
        sb2.append(")");
        return sb2.toString();
    }
}
