package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wh {

    /* renamed from: a  reason: collision with root package name */
    private final uh f48866a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f48867b;

    /* renamed from: c  reason: collision with root package name */
    private final String f48868c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ wh(th thVar, vh vhVar) {
        uh uhVar;
        uhVar = thVar.f48711a;
        this.f48866a = uhVar;
        this.f48867b = null;
        this.f48868c = null;
    }

    public final uh a() {
        return this.f48866a;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if ((obj instanceof wh) && hf.o.a(this.f48866a, ((wh) obj).f48866a) && hf.o.a(null, null) && hf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f48866a, null, null);
    }
}
