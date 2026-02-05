package hi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ a f25885d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f25886e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ int f25887i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ n f25888o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, a aVar, int i10, int i11) {
        this.f25888o = nVar;
        this.f25885d = aVar;
        this.f25886e = i10;
        this.f25887i = i11;
    }

    @Override // java.lang.Runnable
    public final void run() {
        n nVar = this.f25888o;
        a aVar = this.f25885d;
        nVar.h(new b(aVar.d(), this.f25886e, this.f25887i, aVar.a(), aVar.f(), aVar.h(), aVar.g(), aVar.c(), aVar.i()));
    }
}
