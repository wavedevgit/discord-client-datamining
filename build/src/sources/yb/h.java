package yb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h extends n {

    /* renamed from: a  reason: collision with root package name */
    private final long f54205a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(long j10) {
        this.f54205a = j10;
    }

    @Override // yb.n
    public long c() {
        return this.f54205a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if ((obj instanceof n) && this.f54205a == ((n) obj).c()) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f54205a;
        return ((int) (j10 ^ (j10 >>> 32))) ^ 1000003;
    }

    public String toString() {
        return "LogResponse{nextRequestWaitMillis=" + this.f54205a + "}";
    }
}
