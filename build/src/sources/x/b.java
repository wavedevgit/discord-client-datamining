package x;

import x.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends q {

    /* renamed from: a  reason: collision with root package name */
    private final q.b f53059a;

    /* renamed from: b  reason: collision with root package name */
    private final q.a f53060b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(q.b bVar, q.a aVar) {
        if (bVar != null) {
            this.f53059a = bVar;
            this.f53060b = aVar;
            return;
        }
        throw new NullPointerException("Null type");
    }

    @Override // x.q
    public q.a c() {
        return this.f53060b;
    }

    @Override // x.q
    public q.b d() {
        return this.f53059a;
    }

    public boolean equals(Object obj) {
        q.a aVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof q) {
            q qVar = (q) obj;
            if (this.f53059a.equals(qVar.d()) && ((aVar = this.f53060b) != null ? aVar.equals(qVar.c()) : qVar.c() == null)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f53059a.hashCode() ^ 1000003) * 1000003;
        q.a aVar = this.f53060b;
        if (aVar == null) {
            hashCode = 0;
        } else {
            hashCode = aVar.hashCode();
        }
        return hashCode2 ^ hashCode;
    }

    public String toString() {
        return "CameraState{type=" + this.f53059a + ", error=" + this.f53060b + "}";
    }
}
