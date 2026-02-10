package kf;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import gf.k;
import hf.g;
import hf.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends g {
    private final x T;

    public e(Context context, Looper looper, hf.d dVar, x xVar, gf.d dVar2, k kVar) {
        super(context, looper, 270, dVar, dVar2, kVar);
        this.T = xVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public final String D() {
        return "com.google.android.gms.common.internal.service.IClientTelemetryService";
    }

    @Override // hf.c
    protected final String E() {
        return "com.google.android.gms.common.telemetry.service.START";
    }

    @Override // hf.c
    protected final boolean H() {
        return true;
    }

    @Override // hf.c, ff.a.f
    public final int n() {
        return 203400000;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
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

    @Override // hf.c
    public final com.google.android.gms.common.d[] u() {
        return gg.d.f25696b;
    }

    @Override // hf.c
    protected final Bundle z() {
        return this.T.b();
    }
}
