package hc;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends k {

    /* renamed from: a  reason: collision with root package name */
    private final long f27430a;

    /* renamed from: b  reason: collision with root package name */
    private final zb.o f27431b;

    /* renamed from: c  reason: collision with root package name */
    private final zb.i f27432c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(long j10, zb.o oVar, zb.i iVar) {
        this.f27430a = j10;
        if (oVar != null) {
            this.f27431b = oVar;
            if (iVar != null) {
                this.f27432c = iVar;
                return;
            }
            throw new NullPointerException("Null event");
        }
        throw new NullPointerException("Null transportContext");
    }

    @Override // hc.k
    public zb.i b() {
        return this.f27432c;
    }

    @Override // hc.k
    public long c() {
        return this.f27430a;
    }

    @Override // hc.k
    public zb.o d() {
        return this.f27431b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (this.f27430a == kVar.c() && this.f27431b.equals(kVar.d()) && this.f27432c.equals(kVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f27430a;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f27431b.hashCode()) * 1000003) ^ this.f27432c.hashCode();
    }

    public String toString() {
        return "PersistedEvent{id=" + this.f27430a + ", transportContext=" + this.f27431b + ", event=" + this.f27432c + "}";
    }
}
