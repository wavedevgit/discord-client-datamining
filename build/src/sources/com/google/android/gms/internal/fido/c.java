package com.google.android.gms.internal.fido;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import ff.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends hf.g {
    public c(Context context, Looper looper, hf.d dVar, e.a aVar, e.b bVar) {
        super(context, looper, 119, dVar, aVar, bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public final String D() {
        return "com.google.android.gms.fido.u2f.internal.zeroparty.IU2fZeroPartyService";
    }

    @Override // hf.c
    protected final String E() {
        return "com.google.android.gms.fido.u2f.zeroparty.START";
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
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.fido.u2f.internal.zeroparty.IU2fZeroPartyService");
        if (queryLocalInterface instanceof y5) {
            return (y5) queryLocalInterface;
        }
        return new y5(iBinder);
    }

    @Override // hf.c
    protected final Bundle z() {
        Bundle bundle = new Bundle();
        bundle.putString("ACTION_START_SERVICE", "com.google.android.gms.fido.u2f.zeroparty.START");
        return bundle;
    }
}
