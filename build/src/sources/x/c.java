package x;

import x.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c extends q.a {

    /* renamed from: a  reason: collision with root package name */
    private final int f52865a;

    /* renamed from: b  reason: collision with root package name */
    private final Throwable f52866b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(int i10, Throwable th2) {
        this.f52865a = i10;
        this.f52866b = th2;
    }

    @Override // x.q.a
    public Throwable c() {
        return this.f52866b;
    }

    @Override // x.q.a
    public int d() {
        return this.f52865a;
    }

    public boolean equals(Object obj) {
        Throwable th2;
        if (obj == this) {
            return true;
        }
        if (obj instanceof q.a) {
            q.a aVar = (q.a) obj;
            if (this.f52865a == aVar.d() && ((th2 = this.f52866b) != null ? th2.equals(aVar.c()) : aVar.c() == null)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10 = (this.f52865a ^ 1000003) * 1000003;
        Throwable th2 = this.f52866b;
        if (th2 == null) {
            hashCode = 0;
        } else {
            hashCode = th2.hashCode();
        }
        return i10 ^ hashCode;
    }

    public String toString() {
        return "StateError{code=" + this.f52865a + ", cause=" + this.f52866b + "}";
    }
}
