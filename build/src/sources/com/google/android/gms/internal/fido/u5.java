package com.google.android.gms.internal.fido;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import ff.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u5 extends hf.g {
    public u5(Context context, Looper looper, hf.d dVar, e.a aVar, e.b bVar) {
        super(context, looper, 148, dVar, aVar, bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public final String D() {
        return "com.google.android.gms.fido.fido2.internal.regular.IFido2AppService";
    }

    @Override // hf.c
    protected final String E() {
        return "com.google.android.gms.fido.fido2.regular.START";
    }

    @Override // hf.c
    public final boolean Q() {
        return true;
    }

    @Override // hf.c, ff.a.f
    public final int n() {
        return 13000000;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public final /* synthetic */ IInterface r(IBinder iBinder) {
        if (iBinder == null) {
            return null;
        }
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.fido.fido2.internal.regular.IFido2AppService");
        if (queryLocalInterface instanceof x5) {
            return (x5) queryLocalInterface;
        }
        return new x5(iBinder);
    }

    @Override // hf.c
    public final com.google.android.gms.common.d[] u() {
        return new com.google.android.gms.common.d[]{vf.b.f51582b, vf.b.f51581a};
    }

    @Override // hf.c
    protected final Bundle z() {
        Bundle bundle = new Bundle();
        bundle.putString("FIDO2_ACTION_START_SERVICE", "com.google.android.gms.fido.fido2.regular.START");
        return bundle;
    }
}
