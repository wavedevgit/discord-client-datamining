package ei;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ a f22850d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f22851e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ int f22852i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ n f22853o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, a aVar, int i10, int i11) {
        this.f22853o = nVar;
        this.f22850d = aVar;
        this.f22851e = i10;
        this.f22852i = i11;
    }

    @Override // java.lang.Runnable
    public final void run() {
        n nVar = this.f22853o;
        a aVar = this.f22850d;
        nVar.h(new b(aVar.d(), this.f22851e, this.f22852i, aVar.a(), aVar.f(), aVar.h(), aVar.g(), aVar.c(), aVar.i()));
    }
}
