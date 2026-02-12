package li;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ a f35849d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f35850e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ int f35851i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ n f35852o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, a aVar, int i10, int i11) {
        this.f35852o = nVar;
        this.f35849d = aVar;
        this.f35850e = i10;
        this.f35851i = i11;
    }

    @Override // java.lang.Runnable
    public final void run() {
        n nVar = this.f35852o;
        a aVar = this.f35849d;
        nVar.h(new b(aVar.d(), this.f35850e, this.f35851i, aVar.a(), aVar.f(), aVar.h(), aVar.g(), aVar.c(), aVar.i()));
    }
}
