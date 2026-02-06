package hc;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends k {

    /* renamed from: a  reason: collision with root package name */
    private final long f25873a;

    /* renamed from: b  reason: collision with root package name */
    private final zb.o f25874b;

    /* renamed from: c  reason: collision with root package name */
    private final zb.i f25875c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(long j10, zb.o oVar, zb.i iVar) {
        this.f25873a = j10;
        if (oVar != null) {
            this.f25874b = oVar;
            if (iVar != null) {
                this.f25875c = iVar;
                return;
            }
            throw new NullPointerException("Null event");
        }
        throw new NullPointerException("Null transportContext");
    }

    @Override // hc.k
    public zb.i b() {
        return this.f25875c;
    }

    @Override // hc.k
    public long c() {
        return this.f25873a;
    }

    @Override // hc.k
    public zb.o d() {
        return this.f25874b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (this.f25873a == kVar.c() && this.f25874b.equals(kVar.d()) && this.f25875c.equals(kVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f25873a;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f25874b.hashCode()) * 1000003) ^ this.f25875c.hashCode();
    }

    public String toString() {
        return "PersistedEvent{id=" + this.f25873a + ", transportContext=" + this.f25874b + ", event=" + this.f25875c + "}";
    }
}
