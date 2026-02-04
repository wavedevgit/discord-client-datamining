package z;

import z.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c extends w.a {

    /* renamed from: a  reason: collision with root package name */
    private final j0.z f55357a;

    /* renamed from: b  reason: collision with root package name */
    private final int f55358b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(j0.z zVar, int i10) {
        if (zVar != null) {
            this.f55357a = zVar;
            this.f55358b = i10;
            return;
        }
        throw new NullPointerException("Null packet");
    }

    @Override // z.w.a
    int a() {
        return this.f55358b;
    }

    @Override // z.w.a
    j0.z b() {
        return this.f55357a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof w.a) {
            w.a aVar = (w.a) obj;
            if (this.f55357a.equals(aVar.b()) && this.f55358b == aVar.a()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f55357a.hashCode() ^ 1000003) * 1000003) ^ this.f55358b;
    }

    public String toString() {
        return "In{packet=" + this.f55357a + ", jpegQuality=" + this.f55358b + "}";
    }
}
