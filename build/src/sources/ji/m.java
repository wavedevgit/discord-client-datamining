package ji;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ a f30192d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f30193e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ int f30194i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ n f30195o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, a aVar, int i10, int i11) {
        this.f30195o = nVar;
        this.f30192d = aVar;
        this.f30193e = i10;
        this.f30194i = i11;
    }

    @Override // java.lang.Runnable
    public final void run() {
        n nVar = this.f30195o;
        a aVar = this.f30192d;
        nVar.h(new b(aVar.d(), this.f30193e, this.f30194i, aVar.a(), aVar.f(), aVar.h(), aVar.g(), aVar.c(), aVar.i()));
    }
}
