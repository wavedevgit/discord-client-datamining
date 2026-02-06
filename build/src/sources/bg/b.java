package bg;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import android.text.TextUtils;
import ff.k;
import gf.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends g {
    private final Bundle T;

    public b(Context context, Looper looper, gf.d dVar, ue.c cVar, ff.d dVar2, k kVar) {
        super(context, looper, 16, dVar, dVar2, kVar);
        this.T = new Bundle();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    public final String D() {
        return "com.google.android.gms.auth.api.internal.IAuthService";
    }

    @Override // gf.c
    protected final String E() {
        return "com.google.android.gms.auth.service.START";
    }

    @Override // gf.c
    public final boolean Q() {
        return true;
    }

    @Override // gf.c, ef.a.f
    public final boolean g() {
        gf.d h02 = h0();
        if (!TextUtils.isEmpty(h02.b()) && !h02.e(ue.b.f51419a).isEmpty()) {
            return true;
        }
        return false;
    }

    @Override // gf.c, ef.a.f
    public final int n() {
        return com.google.android.gms.common.k.f13780a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
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

    @Override // gf.c
    protected final Bundle z() {
        return this.T;
    }
}
