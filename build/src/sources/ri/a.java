package ri;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f48986a;

    /* renamed from: b  reason: collision with root package name */
    private final long f48987b;

    /* renamed from: c  reason: collision with root package name */
    private final long f48988c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(long j10, long j11, long j12) {
        this.f48986a = j10;
        this.f48987b = j11;
        this.f48988c = j12;
    }

    @Override // ri.l
    public long b() {
        return this.f48987b;
    }

    @Override // ri.l
    public long c() {
        return this.f48986a;
    }

    @Override // ri.l
    public long d() {
        return this.f48988c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f48986a == lVar.c() && this.f48987b == lVar.b() && this.f48988c == lVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f48986a;
        long j11 = this.f48987b;
        long j12 = this.f48988c;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12));
    }

    public String toString() {
        return "StartupTime{epochMillis=" + this.f48986a + ", elapsedRealtime=" + this.f48987b + ", uptimeMillis=" + this.f48988c + "}";
    }
}
