package z;

import z.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c extends w.a {

    /* renamed from: a  reason: collision with root package name */
    private final j0.z f55090a;

    /* renamed from: b  reason: collision with root package name */
    private final int f55091b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(j0.z zVar, int i10) {
        if (zVar != null) {
            this.f55090a = zVar;
            this.f55091b = i10;
            return;
        }
        throw new NullPointerException("Null packet");
    }

    @Override // z.w.a
    int a() {
        return this.f55091b;
    }

    @Override // z.w.a
    j0.z b() {
        return this.f55090a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof w.a) {
            w.a aVar = (w.a) obj;
            if (this.f55090a.equals(aVar.b()) && this.f55091b == aVar.a()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f55090a.hashCode() ^ 1000003) * 1000003) ^ this.f55091b;
    }

    public String toString() {
        return "In{packet=" + this.f55090a + ", jpegQuality=" + this.f55091b + "}";
    }
}
