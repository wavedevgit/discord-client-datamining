package dg;

import android.content.Context;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends gf.g {
    public i(Context context, Looper looper, gf.d dVar, ff.d dVar2, ff.k kVar) {
        super(context, looper, 126, dVar, dVar2, kVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    public final String D() {
        return "com.google.android.gms.auth.api.phone.internal.ISmsRetrieverApiService";
    }

    @Override // gf.c
    protected final String E() {
        return "com.google.android.gms.auth.api.phone.service.SmsRetrieverApiService.START";
    }

    @Override // gf.c
    public final boolean Q() {
        return true;
    }

    @Override // gf.c, ef.a.f
    public final int n() {
        return com.google.android.gms.common.j.f13813a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    public final /* synthetic */ IInterface r(IBinder iBinder) {
        if (iBinder == null) {
            return null;
        }
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.auth.api.phone.internal.ISmsRetrieverApiService");
        if (queryLocalInterface instanceof f) {
            return (f) queryLocalInterface;
        }
        return new f(iBinder);
    }

    @Override // gf.c
    public final com.google.android.gms.common.d[] u() {
        return c.f20807e;
    }
}
