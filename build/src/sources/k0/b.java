package k0;

import j0.l0;
import java.util.List;
import k0.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends r.b {

    /* renamed from: a  reason: collision with root package name */
    private final l0 f32648a;

    /* renamed from: b  reason: collision with root package name */
    private final l0 f32649b;

    /* renamed from: c  reason: collision with root package name */
    private final List f32650c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(l0 l0Var, l0 l0Var2, List list) {
        if (l0Var != null) {
            this.f32648a = l0Var;
            if (l0Var2 != null) {
                this.f32649b = l0Var2;
                if (list != null) {
                    this.f32650c = list;
                    return;
                }
                throw new NullPointerException("Null outConfigs");
            }
            throw new NullPointerException("Null secondarySurfaceEdge");
        }
        throw new NullPointerException("Null primarySurfaceEdge");
    }

    @Override // k0.r.b
    public List a() {
        return this.f32650c;
    }

    @Override // k0.r.b
    public l0 b() {
        return this.f32648a;
    }

    @Override // k0.r.b
    public l0 c() {
        return this.f32649b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof r.b) {
            r.b bVar = (r.b) obj;
            if (this.f32648a.equals(bVar.b()) && this.f32649b.equals(bVar.c()) && this.f32650c.equals(bVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f32648a.hashCode() ^ 1000003) * 1000003) ^ this.f32649b.hashCode()) * 1000003) ^ this.f32650c.hashCode();
    }

    public String toString() {
        return "In{primarySurfaceEdge=" + this.f32648a + ", secondarySurfaceEdge=" + this.f32649b + ", outConfigs=" + this.f32650c + "}";
    }
}
