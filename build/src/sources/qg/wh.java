package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wh {

    /* renamed from: a  reason: collision with root package name */
    private final uh f47700a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f47701b;

    /* renamed from: c  reason: collision with root package name */
    private final String f47702c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ wh(th thVar, vh vhVar) {
        uh uhVar;
        uhVar = thVar.f47545a;
        this.f47700a = uhVar;
        this.f47701b = null;
        this.f47702c = null;
    }

    public final uh a() {
        return this.f47700a;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if ((obj instanceof wh) && gf.o.a(this.f47700a, ((wh) obj).f47700a) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f47700a, null, null);
    }
}
