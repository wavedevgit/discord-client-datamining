package li;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h0 extends i0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f35947a;

    /* renamed from: b  reason: collision with root package name */
    private final long f35948b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(int i10, long j10) {
        this.f35947a = i10;
        this.f35948b = j10;
    }

    @Override // li.i0
    public final int a() {
        return this.f35947a;
    }

    @Override // li.i0
    public final long b() {
        return this.f35948b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof i0) {
            i0 i0Var = (i0) obj;
            if (this.f35947a == i0Var.a() && this.f35948b == i0Var.b()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        long j10 = this.f35948b;
        return ((int) (j10 ^ (j10 >>> 32))) ^ ((this.f35947a ^ 1000003) * 1000003);
    }

    public final String toString() {
        return "EventRecord{eventType=" + this.f35947a + ", eventTimestamp=" + this.f35948b + "}";
    }
}
