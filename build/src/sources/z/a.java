package z;

import z.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends i.b {

    /* renamed from: a  reason: collision with root package name */
    private final j0.z f56415a;

    /* renamed from: b  reason: collision with root package name */
    private final int f56416b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(j0.z zVar, int i10) {
        if (zVar != null) {
            this.f56415a = zVar;
            this.f56416b = i10;
            return;
        }
        throw new NullPointerException("Null packet");
    }

    @Override // z.i.b
    int a() {
        return this.f56416b;
    }

    @Override // z.i.b
    j0.z b() {
        return this.f56415a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof i.b) {
            i.b bVar = (i.b) obj;
            if (this.f56415a.equals(bVar.b()) && this.f56416b == bVar.a()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f56415a.hashCode() ^ 1000003) * 1000003) ^ this.f56416b;
    }

    public String toString() {
        return "In{packet=" + this.f56415a + ", jpegQuality=" + this.f56416b + "}";
    }
}
