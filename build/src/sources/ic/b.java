package ic;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends k {

    /* renamed from: a  reason: collision with root package name */
    private final long f28423a;

    /* renamed from: b  reason: collision with root package name */
    private final ac.o f28424b;

    /* renamed from: c  reason: collision with root package name */
    private final ac.i f28425c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(long j10, ac.o oVar, ac.i iVar) {
        this.f28423a = j10;
        if (oVar != null) {
            this.f28424b = oVar;
            if (iVar != null) {
                this.f28425c = iVar;
                return;
            }
            throw new NullPointerException("Null event");
        }
        throw new NullPointerException("Null transportContext");
    }

    @Override // ic.k
    public ac.i b() {
        return this.f28425c;
    }

    @Override // ic.k
    public long c() {
        return this.f28423a;
    }

    @Override // ic.k
    public ac.o d() {
        return this.f28424b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (this.f28423a == kVar.c() && this.f28424b.equals(kVar.d()) && this.f28425c.equals(kVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f28423a;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f28424b.hashCode()) * 1000003) ^ this.f28425c.hashCode();
    }

    public String toString() {
        return "PersistedEvent{id=" + this.f28423a + ", transportContext=" + this.f28424b + ", event=" + this.f28425c + "}";
    }
}
