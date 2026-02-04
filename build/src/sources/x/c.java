package x;

import x.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c extends q.a {

    /* renamed from: a  reason: collision with root package name */
    private final int f52791a;

    /* renamed from: b  reason: collision with root package name */
    private final Throwable f52792b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(int i10, Throwable th2) {
        this.f52791a = i10;
        this.f52792b = th2;
    }

    @Override // x.q.a
    public Throwable c() {
        return this.f52792b;
    }

    @Override // x.q.a
    public int d() {
        return this.f52791a;
    }

    public boolean equals(Object obj) {
        Throwable th2;
        if (obj == this) {
            return true;
        }
        if (obj instanceof q.a) {
            q.a aVar = (q.a) obj;
            if (this.f52791a == aVar.d() && ((th2 = this.f52792b) != null ? th2.equals(aVar.c()) : aVar.c() == null)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10 = (this.f52791a ^ 1000003) * 1000003;
        Throwable th2 = this.f52792b;
        if (th2 == null) {
            hashCode = 0;
        } else {
            hashCode = th2.hashCode();
        }
        return i10 ^ hashCode;
    }

    public String toString() {
        return "StateError{code=" + this.f52791a + ", cause=" + this.f52792b + "}";
    }
}
