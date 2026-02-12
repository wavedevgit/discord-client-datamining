package j0;

import j0.t0;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c extends t0.b {

    /* renamed from: a  reason: collision with root package name */
    private final l0 f30663a;

    /* renamed from: b  reason: collision with root package name */
    private final List f30664b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(l0 l0Var, List list) {
        if (l0Var != null) {
            this.f30663a = l0Var;
            if (list != null) {
                this.f30664b = list;
                return;
            }
            throw new NullPointerException("Null outConfigs");
        }
        throw new NullPointerException("Null surfaceEdge");
    }

    @Override // j0.t0.b
    public List a() {
        return this.f30664b;
    }

    @Override // j0.t0.b
    public l0 b() {
        return this.f30663a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof t0.b) {
            t0.b bVar = (t0.b) obj;
            if (this.f30663a.equals(bVar.b()) && this.f30664b.equals(bVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f30663a.hashCode() ^ 1000003) * 1000003) ^ this.f30664b.hashCode();
    }

    public String toString() {
        return "In{surfaceEdge=" + this.f30663a + ", outConfigs=" + this.f30664b + "}";
    }
}
