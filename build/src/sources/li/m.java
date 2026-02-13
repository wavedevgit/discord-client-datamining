package li;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ a f36417d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f36418e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ int f36419i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ n f36420o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, a aVar, int i10, int i11) {
        this.f36420o = nVar;
        this.f36417d = aVar;
        this.f36418e = i10;
        this.f36419i = i11;
    }

    @Override // java.lang.Runnable
    public final void run() {
        n nVar = this.f36420o;
        a aVar = this.f36417d;
        nVar.h(new b(aVar.d(), this.f36418e, this.f36419i, aVar.a(), aVar.f(), aVar.h(), aVar.g(), aVar.c(), aVar.i()));
    }
}
