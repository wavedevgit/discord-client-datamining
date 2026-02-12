package zb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h extends n {

    /* renamed from: a  reason: collision with root package name */
    private final long f56288a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(long j10) {
        this.f56288a = j10;
    }

    @Override // zb.n
    public long c() {
        return this.f56288a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if ((obj instanceof n) && this.f56288a == ((n) obj).c()) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f56288a;
        return ((int) (j10 ^ (j10 >>> 32))) ^ 1000003;
    }

    public String toString() {
        return "LogResponse{nextRequestWaitMillis=" + this.f56288a + "}";
    }
}
