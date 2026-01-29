package ni;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f41937a;

    /* renamed from: b  reason: collision with root package name */
    private final long f41938b;

    /* renamed from: c  reason: collision with root package name */
    private final long f41939c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(long j10, long j11, long j12) {
        this.f41937a = j10;
        this.f41938b = j11;
        this.f41939c = j12;
    }

    @Override // ni.l
    public long b() {
        return this.f41938b;
    }

    @Override // ni.l
    public long c() {
        return this.f41937a;
    }

    @Override // ni.l
    public long d() {
        return this.f41939c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f41937a == lVar.c() && this.f41938b == lVar.b() && this.f41939c == lVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f41937a;
        long j11 = this.f41938b;
        long j12 = this.f41939c;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12));
    }

    public String toString() {
        return "StartupTime{epochMillis=" + this.f41937a + ", elapsedRealtime=" + this.f41938b + ", uptimeMillis=" + this.f41939c + "}";
    }
}
