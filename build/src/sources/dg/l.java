package dg;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import com.discord.chat.presentation.message.view.MediaImageViewKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l extends hf.g {
    private final Bundle T;

    public l(Context context, Looper looper, we.v vVar, hf.d dVar, gf.d dVar2, gf.k kVar) {
        super(context, looper, (int) MediaImageViewKt.OBSCURED_IMAGE_MIN_HEIGHT, dVar, dVar2, kVar);
        this.T = new Bundle();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public final String D() {
        return "com.google.android.gms.auth.api.identity.internal.ISignInService";
    }

    @Override // hf.c
    protected final String E() {
        return "com.google.android.gms.auth.api.identity.service.signin.START";
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
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.auth.api.identity.internal.ISignInService");
        if (queryLocalInterface instanceof b0) {
            return (b0) queryLocalInterface;
        }
        return new b0(iBinder);
    }

    @Override // hf.c
    public final com.google.android.gms.common.d[] u() {
        return m.f20740i;
    }

    @Override // hf.c
    protected final Bundle z() {
        return this.T;
    }
}
