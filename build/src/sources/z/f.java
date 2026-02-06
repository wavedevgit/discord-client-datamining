package z;

import z.o0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class f extends o0.b {

    /* renamed from: a  reason: collision with root package name */
    private final p0 f55694a;

    /* renamed from: b  reason: collision with root package name */
    private final androidx.camera.core.n f55695b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(p0 p0Var, androidx.camera.core.n nVar) {
        if (p0Var != null) {
            this.f55694a = p0Var;
            if (nVar != null) {
                this.f55695b = nVar;
                return;
            }
            throw new NullPointerException("Null imageProxy");
        }
        throw new NullPointerException("Null processingRequest");
    }

    @Override // z.o0.b
    androidx.camera.core.n a() {
        return this.f55695b;
    }

    @Override // z.o0.b
    p0 b() {
        return this.f55694a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof o0.b) {
            o0.b bVar = (o0.b) obj;
            if (this.f55694a.equals(bVar.b()) && this.f55695b.equals(bVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f55694a.hashCode() ^ 1000003) * 1000003) ^ this.f55695b.hashCode();
    }

    public String toString() {
        return "InputPacket{processingRequest=" + this.f55694a + ", imageProxy=" + this.f55695b + "}";
    }
}
