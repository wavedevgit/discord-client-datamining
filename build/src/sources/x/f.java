package x;

import x.l1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class f extends l1.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f52865a;

    /* renamed from: b  reason: collision with root package name */
    private final l1 f52866b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(int i10, l1 l1Var) {
        this.f52865a = i10;
        if (l1Var != null) {
            this.f52866b = l1Var;
            return;
        }
        throw new NullPointerException("Null surfaceOutput");
    }

    @Override // x.l1.b
    public int a() {
        return this.f52865a;
    }

    @Override // x.l1.b
    public l1 b() {
        return this.f52866b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l1.b) {
            l1.b bVar = (l1.b) obj;
            if (this.f52865a == bVar.a() && this.f52866b.equals(bVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f52865a ^ 1000003) * 1000003) ^ this.f52866b.hashCode();
    }

    public String toString() {
        return "Event{eventCode=" + this.f52865a + ", surfaceOutput=" + this.f52866b + "}";
    }
}
