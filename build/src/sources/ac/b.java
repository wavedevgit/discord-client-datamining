package ac;

import ac.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends g {

    /* renamed from: a  reason: collision with root package name */
    private final g.a f451a;

    /* renamed from: b  reason: collision with root package name */
    private final long f452b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(g.a aVar, long j10) {
        if (aVar != null) {
            this.f451a = aVar;
            this.f452b = j10;
            return;
        }
        throw new NullPointerException("Null status");
    }

    @Override // ac.g
    public long b() {
        return this.f452b;
    }

    @Override // ac.g
    public g.a c() {
        return this.f451a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f451a.equals(gVar.c()) && this.f452b == gVar.b()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f452b;
        return ((this.f451a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)));
    }

    public String toString() {
        return "BackendResponse{status=" + this.f451a + ", nextRequestWaitMillis=" + this.f452b + "}";
    }
}
