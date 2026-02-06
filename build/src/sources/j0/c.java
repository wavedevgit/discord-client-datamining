package j0;

import j0.t0;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c extends t0.b {

    /* renamed from: a  reason: collision with root package name */
    private final l0 f29560a;

    /* renamed from: b  reason: collision with root package name */
    private final List f29561b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(l0 l0Var, List list) {
        if (l0Var != null) {
            this.f29560a = l0Var;
            if (list != null) {
                this.f29561b = list;
                return;
            }
            throw new NullPointerException("Null outConfigs");
        }
        throw new NullPointerException("Null surfaceEdge");
    }

    @Override // j0.t0.b
    public List a() {
        return this.f29561b;
    }

    @Override // j0.t0.b
    public l0 b() {
        return this.f29560a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof t0.b) {
            t0.b bVar = (t0.b) obj;
            if (this.f29560a.equals(bVar.b()) && this.f29561b.equals(bVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f29560a.hashCode() ^ 1000003) * 1000003) ^ this.f29561b.hashCode();
    }

    public String toString() {
        return "In{surfaceEdge=" + this.f29560a + ", outConfigs=" + this.f29561b + "}";
    }
}
