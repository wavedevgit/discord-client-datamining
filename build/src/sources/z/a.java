package z;

import z.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends i.b {

    /* renamed from: a  reason: collision with root package name */
    private final j0.z f55060a;

    /* renamed from: b  reason: collision with root package name */
    private final int f55061b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(j0.z zVar, int i10) {
        if (zVar != null) {
            this.f55060a = zVar;
            this.f55061b = i10;
            return;
        }
        throw new NullPointerException("Null packet");
    }

    @Override // z.i.b
    int a() {
        return this.f55061b;
    }

    @Override // z.i.b
    j0.z b() {
        return this.f55060a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof i.b) {
            i.b bVar = (i.b) obj;
            if (this.f55060a.equals(bVar.b()) && this.f55061b == bVar.a()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f55060a.hashCode() ^ 1000003) * 1000003) ^ this.f55061b;
    }

    public String toString() {
        return "In{packet=" + this.f55060a + ", jpegQuality=" + this.f55061b + "}";
    }
}
