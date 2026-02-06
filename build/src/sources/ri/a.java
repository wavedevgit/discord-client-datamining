package ri;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f48938a;

    /* renamed from: b  reason: collision with root package name */
    private final long f48939b;

    /* renamed from: c  reason: collision with root package name */
    private final long f48940c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(long j10, long j11, long j12) {
        this.f48938a = j10;
        this.f48939b = j11;
        this.f48940c = j12;
    }

    @Override // ri.l
    public long b() {
        return this.f48939b;
    }

    @Override // ri.l
    public long c() {
        return this.f48938a;
    }

    @Override // ri.l
    public long d() {
        return this.f48940c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f48938a == lVar.c() && this.f48939b == lVar.b() && this.f48940c == lVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f48938a;
        long j11 = this.f48939b;
        long j12 = this.f48940c;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12));
    }

    public String toString() {
        return "StartupTime{epochMillis=" + this.f48938a + ", elapsedRealtime=" + this.f48939b + ", uptimeMillis=" + this.f48940c + "}";
    }
}
