package mi;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g extends i0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final li.f f38606d;

    /* renamed from: e  reason: collision with root package name */
    final i0 f38607e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(li.f fVar, i0 i0Var) {
        this.f38606d = (li.f) li.m.j(fVar);
        this.f38607e = (i0) li.m.j(i0Var);
    }

    @Override // mi.i0, java.util.Comparator
    public int compare(Object obj, Object obj2) {
        return this.f38607e.compare(this.f38606d.apply(obj), this.f38606d.apply(obj2));
    }

    @Override // java.util.Comparator
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f38606d.equals(gVar.f38606d) && this.f38607e.equals(gVar.f38607e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return li.j.b(this.f38606d, this.f38607e);
    }

    public String toString() {
        String valueOf = String.valueOf(this.f38607e);
        String valueOf2 = String.valueOf(this.f38606d);
        StringBuilder sb2 = new StringBuilder(valueOf.length() + 13 + valueOf2.length());
        sb2.append(valueOf);
        sb2.append(".onResultOf(");
        sb2.append(valueOf2);
        sb2.append(")");
        return sb2.toString();
    }
}
