package ki;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h0 extends i0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f31727a;

    /* renamed from: b  reason: collision with root package name */
    private final long f31728b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(int i10, long j10) {
        this.f31727a = i10;
        this.f31728b = j10;
    }

    @Override // ki.i0
    public final int a() {
        return this.f31727a;
    }

    @Override // ki.i0
    public final long b() {
        return this.f31728b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof i0) {
            i0 i0Var = (i0) obj;
            if (this.f31727a == i0Var.a() && this.f31728b == i0Var.b()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        long j10 = this.f31728b;
        return ((int) (j10 ^ (j10 >>> 32))) ^ ((this.f31727a ^ 1000003) * 1000003);
    }

    public final String toString() {
        return "EventRecord{eventType=" + this.f31727a + ", eventTimestamp=" + this.f31728b + "}";
    }
}
