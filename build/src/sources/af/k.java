package af;

import com.google.android.gms.common.api.Status;
import ff.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends n {
    /* JADX INFO: Access modifiers changed from: package-private */
    public k(ff.e eVar) {
        super(eVar);
    }

    @Override // com.google.android.gms.common.api.internal.a
    protected final /* bridge */ /* synthetic */ void d(a.b bVar) {
        i iVar = (i) bVar;
        ((u) iVar.C()).W0(new j(this), iVar.k0());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.gms.common.api.internal.BasePendingResult
    public final /* bridge */ /* synthetic */ ff.k a(Status status) {
        return status;
    }
}
