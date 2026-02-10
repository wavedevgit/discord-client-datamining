package bg;

import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class o extends e {

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ zg.k f6710c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(p pVar, zg.k kVar) {
        this.f6710c = kVar;
    }

    @Override // bg.f
    public final void l(Status status, ue.f fVar) {
        ue.c cVar;
        if (fVar != null) {
            cVar = new ue.c(fVar.c(), fVar.b());
        } else {
            cVar = null;
        }
        gf.r.a(status, cVar, this.f6710c);
    }
}
