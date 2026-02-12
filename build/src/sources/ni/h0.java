package ni;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h0 extends i0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f37918a;

    /* renamed from: b  reason: collision with root package name */
    private final long f37919b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(int i10, long j10) {
        this.f37918a = i10;
        this.f37919b = j10;
    }

    @Override // ni.i0
    public final int a() {
        return this.f37918a;
    }

    @Override // ni.i0
    public final long b() {
        return this.f37919b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof i0) {
            i0 i0Var = (i0) obj;
            if (this.f37918a == i0Var.a() && this.f37919b == i0Var.b()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        long j10 = this.f37919b;
        return ((int) (j10 ^ (j10 >>> 32))) ^ ((this.f37918a ^ 1000003) * 1000003);
    }

    public final String toString() {
        return "EventRecord{eventType=" + this.f37918a + ", eventTimestamp=" + this.f37919b + "}";
    }
}
