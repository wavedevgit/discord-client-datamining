package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wh {

    /* renamed from: a  reason: collision with root package name */
    private final uh f47321a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f47322b;

    /* renamed from: c  reason: collision with root package name */
    private final String f47323c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ wh(th thVar, vh vhVar) {
        uh uhVar;
        uhVar = thVar.f47166a;
        this.f47321a = uhVar;
        this.f47322b = null;
        this.f47323c = null;
    }

    public final uh a() {
        return this.f47321a;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if ((obj instanceof wh) && hf.o.a(this.f47321a, ((wh) obj).f47321a) && hf.o.a(null, null) && hf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f47321a, null, null);
    }
}
