package ui;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f50747a;

    /* renamed from: b  reason: collision with root package name */
    private final long f50748b;

    /* renamed from: c  reason: collision with root package name */
    private final long f50749c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(long j10, long j11, long j12) {
        this.f50747a = j10;
        this.f50748b = j11;
        this.f50749c = j12;
    }

    @Override // ui.l
    public long b() {
        return this.f50748b;
    }

    @Override // ui.l
    public long c() {
        return this.f50747a;
    }

    @Override // ui.l
    public long d() {
        return this.f50749c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f50747a == lVar.c() && this.f50748b == lVar.b() && this.f50749c == lVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f50747a;
        long j11 = this.f50748b;
        long j12 = this.f50749c;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12));
    }

    public String toString() {
        return "StartupTime{epochMillis=" + this.f50747a + ", elapsedRealtime=" + this.f50748b + ", uptimeMillis=" + this.f50749c + "}";
    }
}
