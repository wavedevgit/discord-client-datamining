package ic;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends k {

    /* renamed from: a  reason: collision with root package name */
    private final long f27854a;

    /* renamed from: b  reason: collision with root package name */
    private final ac.o f27855b;

    /* renamed from: c  reason: collision with root package name */
    private final ac.i f27856c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(long j10, ac.o oVar, ac.i iVar) {
        this.f27854a = j10;
        if (oVar != null) {
            this.f27855b = oVar;
            if (iVar != null) {
                this.f27856c = iVar;
                return;
            }
            throw new NullPointerException("Null event");
        }
        throw new NullPointerException("Null transportContext");
    }

    @Override // ic.k
    public ac.i b() {
        return this.f27856c;
    }

    @Override // ic.k
    public long c() {
        return this.f27854a;
    }

    @Override // ic.k
    public ac.o d() {
        return this.f27855b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (this.f27854a == kVar.c() && this.f27855b.equals(kVar.d()) && this.f27856c.equals(kVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f27854a;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f27855b.hashCode()) * 1000003) ^ this.f27856c.hashCode();
    }

    public String toString() {
        return "PersistedEvent{id=" + this.f27854a + ", transportContext=" + this.f27855b + ", event=" + this.f27856c + "}";
    }
}
