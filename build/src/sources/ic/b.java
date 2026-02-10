package ic;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends k {

    /* renamed from: a  reason: collision with root package name */
    private final long f26735a;

    /* renamed from: b  reason: collision with root package name */
    private final ac.o f26736b;

    /* renamed from: c  reason: collision with root package name */
    private final ac.i f26737c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(long j10, ac.o oVar, ac.i iVar) {
        this.f26735a = j10;
        if (oVar != null) {
            this.f26736b = oVar;
            if (iVar != null) {
                this.f26737c = iVar;
                return;
            }
            throw new NullPointerException("Null event");
        }
        throw new NullPointerException("Null transportContext");
    }

    @Override // ic.k
    public ac.i b() {
        return this.f26737c;
    }

    @Override // ic.k
    public long c() {
        return this.f26735a;
    }

    @Override // ic.k
    public ac.o d() {
        return this.f26736b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (this.f26735a == kVar.c() && this.f26736b.equals(kVar.d()) && this.f26737c.equals(kVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f26735a;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f26736b.hashCode()) * 1000003) ^ this.f26737c.hashCode();
    }

    public String toString() {
        return "PersistedEvent{id=" + this.f26735a + ", transportContext=" + this.f26736b + ", event=" + this.f26737c + "}";
    }
}
