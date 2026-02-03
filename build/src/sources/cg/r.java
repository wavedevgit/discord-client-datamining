package cg;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import ef.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r extends gf.g {
    private final ue.g T;

    public r(Context context, Looper looper, gf.d dVar, ue.g gVar, e.a aVar, e.b bVar) {
        super(context, looper, 68, dVar, aVar, bVar);
        ue.f fVar = new ue.f(gVar == null ? ue.g.f50615o : gVar);
        fVar.a(n.a());
        this.T = new ue.g(fVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    public final String D() {
        return "com.google.android.gms.auth.api.credentials.internal.ICredentialsService";
    }

    @Override // gf.c
    protected final String E() {
        return "com.google.android.gms.auth.api.credentials.service.START";
    }

    @Override // gf.c, ef.a.f
    public final int n() {
        return 12800000;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    public final /* synthetic */ IInterface r(IBinder iBinder) {
        if (iBinder == null) {
            return null;
        }
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.auth.api.credentials.internal.ICredentialsService");
        if (queryLocalInterface instanceof s) {
            return (s) queryLocalInterface;
        }
        return new s(iBinder);
    }

    @Override // gf.c
    protected final Bundle z() {
        return this.T.a();
    }
}
