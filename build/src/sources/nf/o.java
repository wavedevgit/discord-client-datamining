package nf;

import android.content.Context;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o extends hf.g {
    /* JADX INFO: Access modifiers changed from: protected */
    public o(Context context, Looper looper, hf.d dVar, gf.d dVar2, gf.k kVar) {
        super(context, looper, 308, dVar, dVar2, kVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public final String D() {
        return "com.google.android.gms.common.moduleinstall.internal.IModuleInstallService";
    }

    @Override // hf.c
    protected final String E() {
        return "com.google.android.gms.chimera.container.moduleinstall.ModuleInstallService.START";
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
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.common.moduleinstall.internal.IModuleInstallService");
        if (queryLocalInterface instanceof g) {
            return (g) queryLocalInterface;
        }
        return new g(iBinder);
    }

    @Override // hf.c
    public final com.google.android.gms.common.d[] u() {
        return gg.i.f24400b;
    }
}
