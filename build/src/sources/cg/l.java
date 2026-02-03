package cg;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import com.discord.chat.presentation.message.view.MediaImageViewKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l extends gf.g {
    private final Bundle T;

    public l(Context context, Looper looper, ve.v vVar, gf.d dVar, ff.d dVar2, ff.k kVar) {
        super(context, looper, (int) MediaImageViewKt.OBSCURED_IMAGE_MIN_HEIGHT, dVar, dVar2, kVar);
        this.T = new Bundle();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    public final String D() {
        return "com.google.android.gms.auth.api.identity.internal.ISignInService";
    }

    @Override // gf.c
    protected final String E() {
        return "com.google.android.gms.auth.api.identity.service.signin.START";
    }

    @Override // gf.c
    protected final boolean H() {
        return true;
    }

    @Override // gf.c
    public final boolean Q() {
        return true;
    }

    @Override // gf.c, ef.a.f
    public final int n() {
        return 17895000;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    public final /* synthetic */ IInterface r(IBinder iBinder) {
        if (iBinder == null) {
            return null;
        }
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.auth.api.identity.internal.ISignInService");
        if (queryLocalInterface instanceof b0) {
            return (b0) queryLocalInterface;
        }
        return new b0(iBinder);
    }

    @Override // gf.c
    public final com.google.android.gms.common.d[] u() {
        return m.f7198i;
    }

    @Override // gf.c
    protected final Bundle z() {
        return this.T;
    }
}
