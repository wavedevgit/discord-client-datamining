package cf;

import android.content.Context;
import android.os.IBinder;
import android.os.Looper;
import cf.b;
import gf.k;
import hf.g;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends g {
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
    public e(Context context, Looper looper, hf.d clientSettings, gf.d connectionCallbacks, k connectionFailedListener) {
        super(context, looper, 381, clientSettings, connectionCallbacks, connectionFailedListener);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(looper, "looper");
        Intrinsics.checkNotNullParameter(clientSettings, "clientSettings");
        Intrinsics.checkNotNullParameter(connectionCallbacks, "connectionCallbacks");
        Intrinsics.checkNotNullParameter(connectionFailedListener, "connectionFailedListener");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public String D() {
        return "com.google.android.gms.auth.blockstore.restorecredential.internal.IRestoreCredentialService";
    }

    @Override // hf.c
    protected String E() {
        return "com.google.android.gms.auth.blockstore.restorecredential.service.START_RESTORE_CRED";
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
    public b r(IBinder binder) {
        Intrinsics.checkNotNullParameter(binder, "binder");
        b W0 = b.a.W0(binder);
        Intrinsics.checkNotNullExpressionValue(W0, "asInterface(...)");
        return W0;
    }

    @Override // hf.c, ff.a.f
    public int n() {
        return 17895000;
    }

    @Override // hf.c
    public com.google.android.gms.common.d[] u() {
        com.google.android.gms.common.d[] ALL_FEATURES = fg.b.f22632l;
        Intrinsics.checkNotNullExpressionValue(ALL_FEATURES, "ALL_FEATURES");
        return ALL_FEATURES;
    }
}
