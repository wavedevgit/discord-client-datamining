package dg;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t extends hf.g {
    private final Bundle T;

    public t(Context context, Looper looper, we.m mVar, hf.d dVar, gf.d dVar2, gf.k kVar) {
        super(context, looper, 223, dVar, dVar2, kVar);
        this.T = new Bundle();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public final String D() {
        return "com.google.android.gms.auth.api.identity.internal.ICredentialSavingService";
    }

    @Override // hf.c
    protected final String E() {
        return "com.google.android.gms.auth.api.identity.service.credentialsaving.START";
    }

    @Override // hf.c
    protected final boolean H() {
        return true;
    }

    @Override // hf.c
    public final boolean Q() {
        return true;
    }

    @Override // hf.c, ff.a.f
    public final int n() {
        return 17895000;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public final /* synthetic */ IInterface r(IBinder iBinder) {
        if (iBinder == null) {
            return null;
        }
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.auth.api.identity.internal.ICredentialSavingService");
        if (queryLocalInterface instanceof w) {
            return (w) queryLocalInterface;
        }
        return new w(iBinder);
    }

    @Override // hf.c
    public final com.google.android.gms.common.d[] u() {
        return m.f21687i;
    }

    @Override // hf.c
    protected final Bundle z() {
        return this.T;
    }
}
