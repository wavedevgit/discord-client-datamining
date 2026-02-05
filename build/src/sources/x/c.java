package x;

import x.q;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c extends q.a {

    /* renamed from: a  reason: collision with root package name */
    private final int f53335a;

    /* renamed from: b  reason: collision with root package name */
    private final Throwable f53336b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(int i10, Throwable th2) {
        this.f53335a = i10;
        this.f53336b = th2;
    }

    @Override // x.q.a
    public Throwable c() {
        return this.f53336b;
    }

    @Override // x.q.a
    public int d() {
        return this.f53335a;
    }

    public boolean equals(Object obj) {
        Throwable th2;
        if (obj == this) {
            return true;
        }
        if (obj instanceof q.a) {
            q.a aVar = (q.a) obj;
            if (this.f53335a == aVar.d() && ((th2 = this.f53336b) != null ? th2.equals(aVar.c()) : aVar.c() == null)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10 = (this.f53335a ^ 1000003) * 1000003;
        Throwable th2 = this.f53336b;
        if (th2 == null) {
            hashCode = 0;
        } else {
            hashCode = th2.hashCode();
        }
        return i10 ^ hashCode;
    }

    public String toString() {
        return "StateError{code=" + this.f53335a + ", cause=" + this.f53336b + "}";
    }
}
