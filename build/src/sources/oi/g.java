package oi;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g extends i0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final ni.f f41842d;

    /* renamed from: e  reason: collision with root package name */
    final i0 f41843e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(ni.f fVar, i0 i0Var) {
        this.f41842d = (ni.f) ni.m.j(fVar);
        this.f41843e = (i0) ni.m.j(i0Var);
    }

    @Override // oi.i0, java.util.Comparator
    public int compare(Object obj, Object obj2) {
        return this.f41843e.compare(this.f41842d.apply(obj), this.f41842d.apply(obj2));
    }

    @Override // java.util.Comparator
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f41842d.equals(gVar.f41842d) && this.f41843e.equals(gVar.f41843e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ni.j.b(this.f41842d, this.f41843e);
    }

    public String toString() {
        String valueOf = String.valueOf(this.f41843e);
        String valueOf2 = String.valueOf(this.f41842d);
        StringBuilder sb2 = new StringBuilder(valueOf.length() + 13 + valueOf2.length());
        sb2.append(valueOf);
        sb2.append(".onResultOf(");
        sb2.append(valueOf2);
        sb2.append(")");
        return sb2.toString();
    }
}
