package z;

import x.n0;
import z.a0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends a0.a {

    /* renamed from: a  reason: collision with root package name */
    private final j0.z f56433a;

    /* renamed from: b  reason: collision with root package name */
    private final n0.g f56434b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(j0.z zVar, n0.g gVar) {
        if (zVar != null) {
            this.f56433a = zVar;
            if (gVar != null) {
                this.f56434b = gVar;
                return;
            }
            throw new NullPointerException("Null outputFileOptions");
        }
        throw new NullPointerException("Null packet");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.a0.a
    public n0.g a() {
        return this.f56434b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.a0.a
    public j0.z b() {
        return this.f56433a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof a0.a) {
            a0.a aVar = (a0.a) obj;
            if (this.f56433a.equals(aVar.b()) && this.f56434b.equals(aVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f56433a.hashCode() ^ 1000003) * 1000003) ^ this.f56434b.hashCode();
    }

    public String toString() {
        return "In{packet=" + this.f56433a + ", outputFileOptions=" + this.f56434b + "}";
    }
}
