package x;

import x.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends q {

    /* renamed from: a  reason: collision with root package name */
    private final q.b f52851a;

    /* renamed from: b  reason: collision with root package name */
    private final q.a f52852b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(q.b bVar, q.a aVar) {
        if (bVar != null) {
            this.f52851a = bVar;
            this.f52852b = aVar;
            return;
        }
        throw new NullPointerException("Null type");
    }

    @Override // x.q
    public q.a c() {
        return this.f52852b;
    }

    @Override // x.q
    public q.b d() {
        return this.f52851a;
    }

    public boolean equals(Object obj) {
        q.a aVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof q) {
            q qVar = (q) obj;
            if (this.f52851a.equals(qVar.d()) && ((aVar = this.f52852b) != null ? aVar.equals(qVar.c()) : qVar.c() == null)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f52851a.hashCode() ^ 1000003) * 1000003;
        q.a aVar = this.f52852b;
        if (aVar == null) {
            hashCode = 0;
        } else {
            hashCode = aVar.hashCode();
        }
        return hashCode2 ^ hashCode;
    }

    public String toString() {
        return "CameraState{type=" + this.f52851a + ", error=" + this.f52852b + "}";
    }
}
