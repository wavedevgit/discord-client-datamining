package ui;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f51315a;

    /* renamed from: b  reason: collision with root package name */
    private final long f51316b;

    /* renamed from: c  reason: collision with root package name */
    private final long f51317c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(long j10, long j11, long j12) {
        this.f51315a = j10;
        this.f51316b = j11;
        this.f51317c = j12;
    }

    @Override // ui.l
    public long b() {
        return this.f51316b;
    }

    @Override // ui.l
    public long c() {
        return this.f51315a;
    }

    @Override // ui.l
    public long d() {
        return this.f51317c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f51315a == lVar.c() && this.f51316b == lVar.b() && this.f51317c == lVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f51315a;
        long j11 = this.f51316b;
        long j12 = this.f51317c;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12));
    }

    public String toString() {
        return "StartupTime{epochMillis=" + this.f51315a + ", elapsedRealtime=" + this.f51316b + ", uptimeMillis=" + this.f51317c + "}";
    }
}
