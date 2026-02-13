package zf;

import android.content.Context;
import android.os.IBinder;
import android.os.Looper;
import gf.k;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import zf.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends hf.g {
    public static final a T = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        private a() {
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(Context context, Looper looper, hf.d clientSettings, gf.d connectionCallbacks, k connectionFailedListener) {
        super(context, looper, 352, clientSettings, connectionCallbacks, connectionFailedListener);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(looper, "looper");
        Intrinsics.checkNotNullParameter(clientSettings, "clientSettings");
        Intrinsics.checkNotNullParameter(connectionCallbacks, "connectionCallbacks");
        Intrinsics.checkNotNullParameter(connectionFailedListener, "connectionFailedListener");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public String D() {
        return "com.google.android.gms.identitycredentials.internal.IIdentityCredentialService";
    }

    @Override // hf.c
    protected String E() {
        return "com.google.android.gms.identitycredentials.service.START";
    }

    @Override // hf.c
    protected boolean H() {
        return true;
    }

    @Override // hf.c
    public boolean Q() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    /* renamed from: k0 */
    public b r(IBinder iBinder) {
        Intrinsics.checkNotNullParameter(iBinder, "iBinder");
        return b.a.W0(iBinder);
    }

    @Override // hf.c, ff.a.f
    public int n() {
        return 17895000;
    }

    @Override // hf.c
    public com.google.android.gms.common.d[] u() {
        com.google.android.gms.common.d[] ALL_FEATURES = lg.d.f36390d;
        Intrinsics.checkNotNullExpressionValue(ALL_FEATURES, "ALL_FEATURES");
        return ALL_FEATURES;
    }
}
