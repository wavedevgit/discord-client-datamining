package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wh {

    /* renamed from: a  reason: collision with root package name */
    private final uh f47748a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f47749b;

    /* renamed from: c  reason: collision with root package name */
    private final String f47750c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ wh(th thVar, vh vhVar) {
        uh uhVar;
        uhVar = thVar.f47593a;
        this.f47748a = uhVar;
        this.f47749b = null;
        this.f47750c = null;
    }

    public final uh a() {
        return this.f47748a;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if ((obj instanceof wh) && gf.o.a(this.f47748a, ((wh) obj).f47748a) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f47748a, null, null);
    }
}
