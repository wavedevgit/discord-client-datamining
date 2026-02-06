package ii;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ a f26740d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f26741e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ int f26742i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ n f26743o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(n nVar, a aVar, int i10, int i11) {
        this.f26743o = nVar;
        this.f26740d = aVar;
        this.f26741e = i10;
        this.f26742i = i11;
    }

    @Override // java.lang.Runnable
    public final void run() {
        n nVar = this.f26743o;
        a aVar = this.f26740d;
        nVar.h(new b(aVar.d(), this.f26741e, this.f26742i, aVar.a(), aVar.f(), aVar.h(), aVar.g(), aVar.c(), aVar.i()));
    }
}
