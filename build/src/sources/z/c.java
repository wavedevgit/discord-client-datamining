package z;

import z.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c extends w.a {

    /* renamed from: a  reason: collision with root package name */
    private final j0.z f54946a;

    /* renamed from: b  reason: collision with root package name */
    private final int f54947b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(j0.z zVar, int i10) {
        if (zVar != null) {
            this.f54946a = zVar;
            this.f54947b = i10;
            return;
        }
        throw new NullPointerException("Null packet");
    }

    @Override // z.w.a
    int a() {
        return this.f54947b;
    }

    @Override // z.w.a
    j0.z b() {
        return this.f54946a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof w.a) {
            w.a aVar = (w.a) obj;
            if (this.f54946a.equals(aVar.b()) && this.f54947b == aVar.a()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f54946a.hashCode() ^ 1000003) * 1000003) ^ this.f54947b;
    }

    public String toString() {
        return "In{packet=" + this.f54946a + ", jpegQuality=" + this.f54947b + "}";
    }
}
