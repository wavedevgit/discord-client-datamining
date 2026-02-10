package si;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f49811a;

    /* renamed from: b  reason: collision with root package name */
    private final long f49812b;

    /* renamed from: c  reason: collision with root package name */
    private final long f49813c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(long j10, long j11, long j12) {
        this.f49811a = j10;
        this.f49812b = j11;
        this.f49813c = j12;
    }

    @Override // si.l
    public long b() {
        return this.f49812b;
    }

    @Override // si.l
    public long c() {
        return this.f49811a;
    }

    @Override // si.l
    public long d() {
        return this.f49813c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f49811a == lVar.c() && this.f49812b == lVar.b() && this.f49813c == lVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f49811a;
        long j11 = this.f49812b;
        long j12 = this.f49813c;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12));
    }

    public String toString() {
        return "StartupTime{epochMillis=" + this.f49811a + ", elapsedRealtime=" + this.f49812b + ", uptimeMillis=" + this.f49813c + "}";
    }
}
