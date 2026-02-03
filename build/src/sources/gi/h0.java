package gi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h0 extends i0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f26248a;

    /* renamed from: b  reason: collision with root package name */
    private final long f26249b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(int i10, long j10) {
        this.f26248a = i10;
        this.f26249b = j10;
    }

    @Override // gi.i0
    public final int a() {
        return this.f26248a;
    }

    @Override // gi.i0
    public final long b() {
        return this.f26249b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof i0) {
            i0 i0Var = (i0) obj;
            if (this.f26248a == i0Var.a() && this.f26249b == i0Var.b()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        long j10 = this.f26249b;
        return ((int) (j10 ^ (j10 >>> 32))) ^ ((this.f26248a ^ 1000003) * 1000003);
    }

    public final String toString() {
        return "EventRecord{eventType=" + this.f26248a + ", eventTimestamp=" + this.f26249b + "}";
    }
}
