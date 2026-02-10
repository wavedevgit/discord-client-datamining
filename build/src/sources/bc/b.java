package bc;

import bc.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends g {

    /* renamed from: a  reason: collision with root package name */
    private final g.a f6545a;

    /* renamed from: b  reason: collision with root package name */
    private final long f6546b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(g.a aVar, long j10) {
        if (aVar != null) {
            this.f6545a = aVar;
            this.f6546b = j10;
            return;
        }
        throw new NullPointerException("Null status");
    }

    @Override // bc.g
    public long b() {
        return this.f6546b;
    }

    @Override // bc.g
    public g.a c() {
        return this.f6545a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f6545a.equals(gVar.c()) && this.f6546b == gVar.b()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f6546b;
        return ((this.f6545a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)));
    }

    public String toString() {
        return "BackendResponse{status=" + this.f6545a + ", nextRequestWaitMillis=" + this.f6546b + "}";
    }
}
