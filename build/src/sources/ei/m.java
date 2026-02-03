package ei;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ a f21541d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f21542e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ int f21543i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ n f21544o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, a aVar, int i10, int i11) {
        this.f21544o = nVar;
        this.f21541d = aVar;
        this.f21542e = i10;
        this.f21543i = i11;
    }

    @Override // java.lang.Runnable
    public final void run() {
        n nVar = this.f21544o;
        a aVar = this.f21541d;
        nVar.h(new b(aVar.d(), this.f21542e, this.f21543i, aVar.a(), aVar.f(), aVar.h(), aVar.g(), aVar.c(), aVar.i()));
    }
}
