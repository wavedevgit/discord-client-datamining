package z;

import x.n0;
import z.a0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends a0.a {

    /* renamed from: a  reason: collision with root package name */
    private final j0.z f54950a;

    /* renamed from: b  reason: collision with root package name */
    private final n0.g f54951b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(j0.z zVar, n0.g gVar) {
        if (zVar != null) {
            this.f54950a = zVar;
            if (gVar != null) {
                this.f54951b = gVar;
                return;
            }
            throw new NullPointerException("Null outputFileOptions");
        }
        throw new NullPointerException("Null packet");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.a0.a
    public n0.g a() {
        return this.f54951b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.a0.a
    public j0.z b() {
        return this.f54950a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof a0.a) {
            a0.a aVar = (a0.a) obj;
            if (this.f54950a.equals(aVar.b()) && this.f54951b.equals(aVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f54950a.hashCode() ^ 1000003) * 1000003) ^ this.f54951b.hashCode();
    }

    public String toString() {
        return "In{packet=" + this.f54950a + ", outputFileOptions=" + this.f54951b + "}";
    }
}
