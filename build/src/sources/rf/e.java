package rf;

import android.content.Context;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import ff.k;
import kotlin.jvm.internal.Intrinsics;
import rf.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends gf.g {
    public static final d T = new d(null);

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(Context context, Looper looper, gf.d clientSettings, ff.d connectionCallbacks, k connectionFailedListener) {
        super(context, looper, 322, clientSettings, connectionCallbacks, connectionFailedListener);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(looper, "looper");
        Intrinsics.checkNotNullParameter(clientSettings, "clientSettings");
        Intrinsics.checkNotNullParameter(connectionCallbacks, "connectionCallbacks");
        Intrinsics.checkNotNullParameter(connectionFailedListener, "connectionFailedListener");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    public final String D() {
        return "com.google.android.gms.deviceperformance.internal.IDevicePerformanceService";
    }

    @Override // gf.c
    protected final String E() {
        return "com.google.android.gms.deviceperformance.service.START";
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

    @Override // gf.c
    public final /* bridge */ /* synthetic */ IInterface r(IBinder iBinder) {
        Intrinsics.checkNotNullParameter(iBinder, "iBinder");
        return b.a.f(iBinder);
    }

    @Override // gf.c
    public final com.google.android.gms.common.d[] u() {
        com.google.android.gms.common.d[] ALL_FEATURES = jg.d.f29880b;
        Intrinsics.checkNotNullExpressionValue(ALL_FEATURES, "ALL_FEATURES");
        return ALL_FEATURES;
    }
}
