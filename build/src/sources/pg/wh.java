package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wh {

    /* renamed from: a  reason: collision with root package name */
    private final uh f45940a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f45941b;

    /* renamed from: c  reason: collision with root package name */
    private final String f45942c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ wh(th thVar, vh vhVar) {
        uh uhVar;
        uhVar = thVar.f45785a;
        this.f45940a = uhVar;
        this.f45941b = null;
        this.f45942c = null;
    }

    public final uh a() {
        return this.f45940a;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if ((obj instanceof wh) && gf.o.a(this.f45940a, ((wh) obj).f45940a) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f45940a, null, null);
    }
}
