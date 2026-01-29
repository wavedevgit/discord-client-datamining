package ei;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ a f22818d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f22819e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ int f22820i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ n f22821o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, a aVar, int i10, int i11) {
        this.f22821o = nVar;
        this.f22818d = aVar;
        this.f22819e = i10;
        this.f22820i = i11;
    }

    @Override // java.lang.Runnable
    public final void run() {
        n nVar = this.f22821o;
        a aVar = this.f22818d;
        nVar.h(new b(aVar.d(), this.f22819e, this.f22820i, aVar.a(), aVar.f(), aVar.h(), aVar.g(), aVar.c(), aVar.i()));
    }
}
