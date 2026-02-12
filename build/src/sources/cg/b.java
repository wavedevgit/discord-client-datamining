package cg;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import android.text.TextUtils;
import gf.k;
import hf.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends g {
    private final Bundle T;

    public b(Context context, Looper looper, hf.d dVar, ve.c cVar, gf.d dVar2, k kVar) {
        super(context, looper, 16, dVar, dVar2, kVar);
        this.T = new Bundle();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public final String D() {
        return "com.google.android.gms.auth.api.internal.IAuthService";
    }

    @Override // hf.c
    protected final String E() {
        return "com.google.android.gms.auth.service.START";
    }

    @Override // hf.c
    public final boolean Q() {
        return true;
    }

    @Override // hf.c, ff.a.f
    public final boolean h() {
        hf.d h02 = h0();
        if (!TextUtils.isEmpty(h02.b()) && !h02.e(ve.b.f51570a).isEmpty()) {
            return true;
        }
        return false;
    }

    @Override // hf.c, ff.a.f
    public final int n() {
        return com.google.android.gms.common.k.f14498a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public final /* synthetic */ IInterface r(IBinder iBinder) {
        if (iBinder == null) {
            return null;
        }
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.auth.api.internal.IAuthService");
        if (queryLocalInterface instanceof c) {
            return (c) queryLocalInterface;
        }
        return new c(iBinder);
    }

    @Override // hf.c
    protected final Bundle z() {
        return this.T;
    }
}
