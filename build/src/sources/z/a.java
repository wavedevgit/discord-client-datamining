package z;

import z.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends i.b {

    /* renamed from: a  reason: collision with root package name */
    private final j0.z f55208a;

    /* renamed from: b  reason: collision with root package name */
    private final int f55209b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(j0.z zVar, int i10) {
        if (zVar != null) {
            this.f55208a = zVar;
            this.f55209b = i10;
            return;
        }
        throw new NullPointerException("Null packet");
    }

    @Override // z.i.b
    int a() {
        return this.f55209b;
    }

    @Override // z.i.b
    j0.z b() {
        return this.f55208a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof i.b) {
            i.b bVar = (i.b) obj;
            if (this.f55208a.equals(bVar.b()) && this.f55209b == bVar.a()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f55208a.hashCode() ^ 1000003) * 1000003) ^ this.f55209b;
    }

    public String toString() {
        return "In{packet=" + this.f55208a + ", jpegQuality=" + this.f55209b + "}";
    }
}
