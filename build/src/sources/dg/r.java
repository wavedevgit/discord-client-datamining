package dg;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import ff.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r extends hf.g {
    private final ve.g T;

    public r(Context context, Looper looper, hf.d dVar, ve.g gVar, e.a aVar, e.b bVar) {
        super(context, looper, 68, dVar, aVar, bVar);
        ve.f fVar = new ve.f(gVar == null ? ve.g.f52333o : gVar);
        fVar.a(n.a());
        this.T = new ve.g(fVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public final String D() {
        return "com.google.android.gms.auth.api.credentials.internal.ICredentialsService";
    }

    @Override // hf.c
    protected final String E() {
        return "com.google.android.gms.auth.api.credentials.service.START";
    }

    @Override // hf.c, ff.a.f
    public final int n() {
        return 12800000;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
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

    @Override // hf.c
    protected final Bundle z() {
        return this.T.a();
    }
}
