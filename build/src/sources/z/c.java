package z;

import z.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c extends w.a {

    /* renamed from: a  reason: collision with root package name */
    private final j0.z f55074a;

    /* renamed from: b  reason: collision with root package name */
    private final int f55075b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(j0.z zVar, int i10) {
        if (zVar != null) {
            this.f55074a = zVar;
            this.f55075b = i10;
            return;
        }
        throw new NullPointerException("Null packet");
    }

    @Override // z.w.a
    int a() {
        return this.f55075b;
    }

    @Override // z.w.a
    j0.z b() {
        return this.f55074a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof w.a) {
            w.a aVar = (w.a) obj;
            if (this.f55074a.equals(aVar.b()) && this.f55075b == aVar.a()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f55074a.hashCode() ^ 1000003) * 1000003) ^ this.f55075b;
    }

    public String toString() {
        return "In{packet=" + this.f55074a + ", jpegQuality=" + this.f55075b + "}";
    }
}
