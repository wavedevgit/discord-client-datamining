package ui;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f50746a;

    /* renamed from: b  reason: collision with root package name */
    private final long f50747b;

    /* renamed from: c  reason: collision with root package name */
    private final long f50748c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(long j10, long j11, long j12) {
        this.f50746a = j10;
        this.f50747b = j11;
        this.f50748c = j12;
    }

    @Override // ui.l
    public long b() {
        return this.f50747b;
    }

    @Override // ui.l
    public long c() {
        return this.f50746a;
    }

    @Override // ui.l
    public long d() {
        return this.f50748c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f50746a == lVar.c() && this.f50747b == lVar.b() && this.f50748c == lVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f50746a;
        long j11 = this.f50747b;
        long j12 = this.f50748c;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12));
    }

    public String toString() {
        return "StartupTime{epochMillis=" + this.f50746a + ", elapsedRealtime=" + this.f50747b + ", uptimeMillis=" + this.f50748c + "}";
    }
}
