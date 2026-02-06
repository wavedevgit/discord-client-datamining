package k0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends d {

    /* renamed from: a  reason: collision with root package name */
    private final l0.f f31351a;

    /* renamed from: b  reason: collision with root package name */
    private final l0.f f31352b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(l0.f fVar, l0.f fVar2) {
        if (fVar != null) {
            this.f31351a = fVar;
            if (fVar2 != null) {
                this.f31352b = fVar2;
                return;
            }
            throw new NullPointerException("Null secondaryOutConfig");
        }
        throw new NullPointerException("Null primaryOutConfig");
    }

    @Override // k0.d
    public l0.f a() {
        return this.f31351a;
    }

    @Override // k0.d
    public l0.f b() {
        return this.f31352b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            if (this.f31351a.equals(dVar.a()) && this.f31352b.equals(dVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f31351a.hashCode() ^ 1000003) * 1000003) ^ this.f31352b.hashCode();
    }

    public String toString() {
        return "DualOutConfig{primaryOutConfig=" + this.f31351a + ", secondaryOutConfig=" + this.f31352b + "}";
    }
}
