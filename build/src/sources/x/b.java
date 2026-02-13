package x;

import x.q;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends q {

    /* renamed from: a  reason: collision with root package name */
    private final q.b f54581a;

    /* renamed from: b  reason: collision with root package name */
    private final q.a f54582b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(q.b bVar, q.a aVar) {
        if (bVar != null) {
            this.f54581a = bVar;
            this.f54582b = aVar;
            return;
        }
        throw new NullPointerException("Null type");
    }

    @Override // x.q
    public q.a c() {
        return this.f54582b;
    }

    @Override // x.q
    public q.b d() {
        return this.f54581a;
    }

    public boolean equals(Object obj) {
        q.a aVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof q) {
            q qVar = (q) obj;
            if (this.f54581a.equals(qVar.d()) && ((aVar = this.f54582b) != null ? aVar.equals(qVar.c()) : qVar.c() == null)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f54581a.hashCode() ^ 1000003) * 1000003;
        q.a aVar = this.f54582b;
        if (aVar == null) {
            hashCode = 0;
        } else {
            hashCode = aVar.hashCode();
        }
        return hashCode2 ^ hashCode;
    }

    public String toString() {
        return "CameraState{type=" + this.f54581a + ", error=" + this.f54582b + "}";
    }
}
