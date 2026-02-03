package hc;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends k {

    /* renamed from: a  reason: collision with root package name */
    private final long f26904a;

    /* renamed from: b  reason: collision with root package name */
    private final zb.o f26905b;

    /* renamed from: c  reason: collision with root package name */
    private final zb.i f26906c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(long j10, zb.o oVar, zb.i iVar) {
        this.f26904a = j10;
        if (oVar != null) {
            this.f26905b = oVar;
            if (iVar != null) {
                this.f26906c = iVar;
                return;
            }
            throw new NullPointerException("Null event");
        }
        throw new NullPointerException("Null transportContext");
    }

    @Override // hc.k
    public zb.i b() {
        return this.f26906c;
    }

    @Override // hc.k
    public long c() {
        return this.f26904a;
    }

    @Override // hc.k
    public zb.o d() {
        return this.f26905b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (this.f26904a == kVar.c() && this.f26905b.equals(kVar.d()) && this.f26906c.equals(kVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f26904a;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f26905b.hashCode()) * 1000003) ^ this.f26906c.hashCode();
    }

    public String toString() {
        return "PersistedEvent{id=" + this.f26904a + ", transportContext=" + this.f26905b + ", event=" + this.f26906c + "}";
    }
}
