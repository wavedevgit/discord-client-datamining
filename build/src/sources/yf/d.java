package yf;

import android.content.Context;
import android.os.IBinder;
import android.os.Looper;
import ff.k;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import yf.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends gf.g {
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
    public d(Context context, Looper looper, gf.d clientSettings, ff.d connectionCallbacks, k connectionFailedListener) {
        super(context, looper, 352, clientSettings, connectionCallbacks, connectionFailedListener);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(looper, "looper");
        Intrinsics.checkNotNullParameter(clientSettings, "clientSettings");
        Intrinsics.checkNotNullParameter(connectionCallbacks, "connectionCallbacks");
        Intrinsics.checkNotNullParameter(connectionFailedListener, "connectionFailedListener");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    public String D() {
        return "com.google.android.gms.identitycredentials.internal.IIdentityCredentialService";
    }

    @Override // gf.c
    protected String E() {
        return "com.google.android.gms.identitycredentials.service.START";
    }

    @Override // gf.c
    protected boolean H() {
        return true;
    }

    @Override // gf.c
    public boolean Q() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    /* renamed from: k0 */
    public b r(IBinder iBinder) {
        Intrinsics.checkNotNullParameter(iBinder, "iBinder");
        return b.a.W0(iBinder);
    }

    @Override // gf.c, ef.a.f
    public int n() {
        return 17895000;
    }

    @Override // gf.c
    public com.google.android.gms.common.d[] u() {
        com.google.android.gms.common.d[] ALL_FEATURES = kg.d.f31656d;
        Intrinsics.checkNotNullExpressionValue(ALL_FEATURES, "ALL_FEATURES");
        return ALL_FEATURES;
    }
}
