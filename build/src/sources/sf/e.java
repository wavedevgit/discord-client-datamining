package sf;

import android.content.Context;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import gf.k;
import kotlin.jvm.internal.Intrinsics;
import sf.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends hf.g {
    public static final d T = new d(null);

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(Context context, Looper looper, hf.d clientSettings, gf.d connectionCallbacks, k connectionFailedListener) {
        super(context, looper, 322, clientSettings, connectionCallbacks, connectionFailedListener);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(looper, "looper");
        Intrinsics.checkNotNullParameter(clientSettings, "clientSettings");
        Intrinsics.checkNotNullParameter(connectionCallbacks, "connectionCallbacks");
        Intrinsics.checkNotNullParameter(connectionFailedListener, "connectionFailedListener");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public final String D() {
        return "com.google.android.gms.deviceperformance.internal.IDevicePerformanceService";
    }

    @Override // hf.c
    protected final String E() {
        return "com.google.android.gms.deviceperformance.service.START";
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

    @Override // hf.c
    public final /* bridge */ /* synthetic */ IInterface r(IBinder iBinder) {
        Intrinsics.checkNotNullParameter(iBinder, "iBinder");
        return b.a.f(iBinder);
    }

    @Override // hf.c
    public final com.google.android.gms.common.d[] u() {
        com.google.android.gms.common.d[] ALL_FEATURES = kg.d.f31737b;
        Intrinsics.checkNotNullExpressionValue(ALL_FEATURES, "ALL_FEATURES");
        return ALL_FEATURES;
    }
}
