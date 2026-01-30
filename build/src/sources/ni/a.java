package ni;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f41953a;

    /* renamed from: b  reason: collision with root package name */
    private final long f41954b;

    /* renamed from: c  reason: collision with root package name */
    private final long f41955c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(long j10, long j11, long j12) {
        this.f41953a = j10;
        this.f41954b = j11;
        this.f41955c = j12;
    }

    @Override // ni.l
    public long b() {
        return this.f41954b;
    }

    @Override // ni.l
    public long c() {
        return this.f41953a;
    }

    @Override // ni.l
    public long d() {
        return this.f41955c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f41953a == lVar.c() && this.f41954b == lVar.b() && this.f41955c == lVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f41953a;
        long j11 = this.f41954b;
        long j12 = this.f41955c;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12));
    }

    public String toString() {
        return "StartupTime{epochMillis=" + this.f41953a + ", elapsedRealtime=" + this.f41954b + ", uptimeMillis=" + this.f41955c + "}";
    }
}
