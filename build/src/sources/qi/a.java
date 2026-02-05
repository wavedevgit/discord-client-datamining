package qi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f47915a;

    /* renamed from: b  reason: collision with root package name */
    private final long f47916b;

    /* renamed from: c  reason: collision with root package name */
    private final long f47917c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(long j10, long j11, long j12) {
        this.f47915a = j10;
        this.f47916b = j11;
        this.f47917c = j12;
    }

    @Override // qi.l
    public long b() {
        return this.f47916b;
    }

    @Override // qi.l
    public long c() {
        return this.f47915a;
    }

    @Override // qi.l
    public long d() {
        return this.f47917c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f47915a == lVar.c() && this.f47916b == lVar.b() && this.f47917c == lVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f47915a;
        long j11 = this.f47916b;
        long j12 = this.f47917c;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12));
    }

    public String toString() {
        return "StartupTime{epochMillis=" + this.f47915a + ", elapsedRealtime=" + this.f47916b + ", uptimeMillis=" + this.f47917c + "}";
    }
}
