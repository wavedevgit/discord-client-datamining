package ag;

import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class o extends e {

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ yg.k f616c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(p pVar, yg.k kVar) {
        this.f616c = kVar;
    }

    @Override // ag.f
    public final void n(Status status, te.f fVar) {
        te.c cVar;
        if (fVar != null) {
            cVar = new te.c(fVar.c(), fVar.b());
        } else {
            cVar = null;
        }
        ff.r.a(status, cVar, this.f616c);
    }
}
