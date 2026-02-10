package bc;

import bc.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends g {

    /* renamed from: a  reason: collision with root package name */
    private final g.a f6439a;

    /* renamed from: b  reason: collision with root package name */
    private final long f6440b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(g.a aVar, long j10) {
        if (aVar != null) {
            this.f6439a = aVar;
            this.f6440b = j10;
            return;
        }
        throw new NullPointerException("Null status");
    }

    @Override // bc.g
    public long b() {
        return this.f6440b;
    }

    @Override // bc.g
    public g.a c() {
        return this.f6439a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f6439a.equals(gVar.c()) && this.f6440b == gVar.b()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f6440b;
        return ((this.f6439a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)));
    }

    public String toString() {
        return "BackendResponse{status=" + this.f6439a + ", nextRequestWaitMillis=" + this.f6440b + "}";
    }
}
