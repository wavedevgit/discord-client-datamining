package x;

import x.q;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c extends q.a {

    /* renamed from: a  reason: collision with root package name */
    private final int f54026a;

    /* renamed from: b  reason: collision with root package name */
    private final Throwable f54027b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(int i10, Throwable th2) {
        this.f54026a = i10;
        this.f54027b = th2;
    }

    @Override // x.q.a
    public Throwable c() {
        return this.f54027b;
    }

    @Override // x.q.a
    public int d() {
        return this.f54026a;
    }

    public boolean equals(Object obj) {
        Throwable th2;
        if (obj == this) {
            return true;
        }
        if (obj instanceof q.a) {
            q.a aVar = (q.a) obj;
            if (this.f54026a == aVar.d() && ((th2 = this.f54027b) != null ? th2.equals(aVar.c()) : aVar.c() == null)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10 = (this.f54026a ^ 1000003) * 1000003;
        Throwable th2 = this.f54027b;
        if (th2 == null) {
            hashCode = 0;
        } else {
            hashCode = th2.hashCode();
        }
        return i10 ^ hashCode;
    }

    public String toString() {
        return "StateError{code=" + this.f54026a + ", cause=" + this.f54027b + "}";
    }
}
