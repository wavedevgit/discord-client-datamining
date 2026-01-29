package jf;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import ff.k;
import gf.g;
import gf.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends g {
    private final x T;

    public e(Context context, Looper looper, gf.d dVar, x xVar, ff.d dVar2, k kVar) {
        super(context, looper, 270, dVar, dVar2, kVar);
        this.T = xVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    public final String D() {
        return "com.google.android.gms.common.internal.service.IClientTelemetryService";
    }

    @Override // gf.c
    protected final String E() {
        return "com.google.android.gms.common.telemetry.service.START";
    }

    @Override // gf.c
    protected final boolean H() {
        return true;
    }

    @Override // gf.c, ef.a.f
    public final int n() {
        return 203400000;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    public final /* synthetic */ IInterface r(IBinder iBinder) {
        if (iBinder == null) {
            return null;
        }
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.common.internal.service.IClientTelemetryService");
        if (queryLocalInterface instanceof a) {
            return (a) queryLocalInterface;
        }
        return new a(iBinder);
    }

    @Override // gf.c
    public final com.google.android.gms.common.d[] u() {
        return fg.d.f25182b;
    }

    @Override // gf.c
    protected final Bundle z() {
        return this.T.b();
    }
}
