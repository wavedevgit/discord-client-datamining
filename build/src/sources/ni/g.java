package ni;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g extends i0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final mi.f f40769d;

    /* renamed from: e  reason: collision with root package name */
    final i0 f40770e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(mi.f fVar, i0 i0Var) {
        this.f40769d = (mi.f) mi.m.j(fVar);
        this.f40770e = (i0) mi.m.j(i0Var);
    }

    @Override // ni.i0, java.util.Comparator
    public int compare(Object obj, Object obj2) {
        return this.f40770e.compare(this.f40769d.apply(obj), this.f40769d.apply(obj2));
    }

    @Override // java.util.Comparator
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f40769d.equals(gVar.f40769d) && this.f40770e.equals(gVar.f40770e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return mi.j.b(this.f40769d, this.f40770e);
    }

    public String toString() {
        String valueOf = String.valueOf(this.f40770e);
        String valueOf2 = String.valueOf(this.f40769d);
        StringBuilder sb2 = new StringBuilder(valueOf.length() + 13 + valueOf2.length());
        sb2.append(valueOf);
        sb2.append(".onResultOf(");
        sb2.append(valueOf2);
        sb2.append(")");
        return sb2.toString();
    }
}
