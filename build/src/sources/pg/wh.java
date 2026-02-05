package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wh {

    /* renamed from: a  reason: collision with root package name */
    private final uh f45870a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f45871b;

    /* renamed from: c  reason: collision with root package name */
    private final String f45872c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ wh(th thVar, vh vhVar) {
        uh uhVar;
        uhVar = thVar.f45715a;
        this.f45870a = uhVar;
        this.f45871b = null;
        this.f45872c = null;
    }

    public final uh a() {
        return this.f45870a;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if ((obj instanceof wh) && gf.o.a(this.f45870a, ((wh) obj).f45870a) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f45870a, null, null);
    }
}
