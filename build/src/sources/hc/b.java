package hc;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends k {

    /* renamed from: a  reason: collision with root package name */
    private final long f25921a;

    /* renamed from: b  reason: collision with root package name */
    private final zb.o f25922b;

    /* renamed from: c  reason: collision with root package name */
    private final zb.i f25923c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(long j10, zb.o oVar, zb.i iVar) {
        this.f25921a = j10;
        if (oVar != null) {
            this.f25922b = oVar;
            if (iVar != null) {
                this.f25923c = iVar;
                return;
            }
            throw new NullPointerException("Null event");
        }
        throw new NullPointerException("Null transportContext");
    }

    @Override // hc.k
    public zb.i b() {
        return this.f25923c;
    }

    @Override // hc.k
    public long c() {
        return this.f25921a;
    }

    @Override // hc.k
    public zb.o d() {
        return this.f25922b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (this.f25921a == kVar.c() && this.f25922b.equals(kVar.d()) && this.f25923c.equals(kVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f25921a;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f25922b.hashCode()) * 1000003) ^ this.f25923c.hashCode();
    }

    public String toString() {
        return "PersistedEvent{id=" + this.f25921a + ", transportContext=" + this.f25922b + ", event=" + this.f25923c + "}";
    }
}
