package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wh {

    /* renamed from: a  reason: collision with root package name */
    private final uh f47889a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f47890b;

    /* renamed from: c  reason: collision with root package name */
    private final String f47891c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ wh(th thVar, vh vhVar) {
        uh uhVar;
        uhVar = thVar.f47734a;
        this.f47889a = uhVar;
        this.f47890b = null;
        this.f47891c = null;
    }

    public final uh a() {
        return this.f47889a;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if ((obj instanceof wh) && hf.o.a(this.f47889a, ((wh) obj).f47889a) && hf.o.a(null, null) && hf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f47889a, null, null);
    }
}
