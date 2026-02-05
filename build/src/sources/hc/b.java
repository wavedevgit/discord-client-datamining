package hc;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends k {

    /* renamed from: a  reason: collision with root package name */
    private final long f25745a;

    /* renamed from: b  reason: collision with root package name */
    private final zb.o f25746b;

    /* renamed from: c  reason: collision with root package name */
    private final zb.i f25747c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(long j10, zb.o oVar, zb.i iVar) {
        this.f25745a = j10;
        if (oVar != null) {
            this.f25746b = oVar;
            if (iVar != null) {
                this.f25747c = iVar;
                return;
            }
            throw new NullPointerException("Null event");
        }
        throw new NullPointerException("Null transportContext");
    }

    @Override // hc.k
    public zb.i b() {
        return this.f25747c;
    }

    @Override // hc.k
    public long c() {
        return this.f25745a;
    }

    @Override // hc.k
    public zb.o d() {
        return this.f25746b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (this.f25745a == kVar.c() && this.f25746b.equals(kVar.d()) && this.f25747c.equals(kVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f25745a;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f25746b.hashCode()) * 1000003) ^ this.f25747c.hashCode();
    }

    public String toString() {
        return "PersistedEvent{id=" + this.f25745a + ", transportContext=" + this.f25746b + ", event=" + this.f25747c + "}";
    }
}
