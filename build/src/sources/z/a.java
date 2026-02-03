package z;

import z.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends i.b {

    /* renamed from: a  reason: collision with root package name */
    private final j0.z f55346a;

    /* renamed from: b  reason: collision with root package name */
    private final int f55347b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(j0.z zVar, int i10) {
        if (zVar != null) {
            this.f55346a = zVar;
            this.f55347b = i10;
            return;
        }
        throw new NullPointerException("Null packet");
    }

    @Override // z.i.b
    int a() {
        return this.f55347b;
    }

    @Override // z.i.b
    j0.z b() {
        return this.f55346a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof i.b) {
            i.b bVar = (i.b) obj;
            if (this.f55346a.equals(bVar.b()) && this.f55347b == bVar.a()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f55346a.hashCode() ^ 1000003) * 1000003) ^ this.f55347b;
    }

    public String toString() {
        return "In{packet=" + this.f55346a + ", jpegQuality=" + this.f55347b + "}";
    }
}
