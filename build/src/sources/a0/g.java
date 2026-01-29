package a0;

import a0.l2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class g extends l2.a {

    /* renamed from: a  reason: collision with root package name */
    private final Throwable f53a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(Throwable th2) {
        if (th2 != null) {
            this.f53a = th2;
            return;
        }
        throw new NullPointerException("Null error");
    }

    @Override // a0.l2.a
    public Throwable a() {
        return this.f53a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l2.a) {
            return this.f53a.equals(((l2.a) obj).a());
        }
        return false;
    }

    public int hashCode() {
        return this.f53a.hashCode() ^ 1000003;
    }

    public String toString() {
        return "ErrorWrapper{error=" + this.f53a + "}";
    }
}
