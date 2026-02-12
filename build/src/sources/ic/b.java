package ic;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends k {

    /* renamed from: a  reason: collision with root package name */
    private final long f27855a;

    /* renamed from: b  reason: collision with root package name */
    private final ac.o f27856b;

    /* renamed from: c  reason: collision with root package name */
    private final ac.i f27857c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(long j10, ac.o oVar, ac.i iVar) {
        this.f27855a = j10;
        if (oVar != null) {
            this.f27856b = oVar;
            if (iVar != null) {
                this.f27857c = iVar;
                return;
            }
            throw new NullPointerException("Null event");
        }
        throw new NullPointerException("Null transportContext");
    }

    @Override // ic.k
    public ac.i b() {
        return this.f27857c;
    }

    @Override // ic.k
    public long c() {
        return this.f27855a;
    }

    @Override // ic.k
    public ac.o d() {
        return this.f27856b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (this.f27855a == kVar.c() && this.f27856b.equals(kVar.d()) && this.f27857c.equals(kVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f27855a;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f27856b.hashCode()) * 1000003) ^ this.f27857c.hashCode();
    }

    public String toString() {
        return "PersistedEvent{id=" + this.f27855a + ", transportContext=" + this.f27856b + ", event=" + this.f27857c + "}";
    }
}
