package xg;

import android.accounts.Account;
import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import android.os.RemoteException;
import android.util.Log;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import ff.e;
import hf.c;
import hf.n0;
import hf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends hf.g implements wg.e {
    public static final /* synthetic */ int X = 0;
    private final boolean T;
    private final hf.d U;
    private final Bundle V;
    private final Integer W;

    public a(Context context, Looper looper, boolean z10, hf.d dVar, Bundle bundle, e.a aVar, e.b bVar) {
        super(context, looper, 44, dVar, aVar, bVar);
        this.T = true;
        this.U = dVar;
        this.V = bundle;
        this.W = dVar.i();
    }

    public static Bundle k0(hf.d dVar) {
        dVar.h();
        Integer i10 = dVar.i();
        Bundle bundle = new Bundle();
        bundle.putParcelable("com.google.android.gms.signin.internal.clientRequestedAccount", dVar.a());
        if (i10 != null) {
            bundle.putInt("com.google.android.gms.common.internal.ClientSettings.sessionId", i10.intValue());
        }
        bundle.putBoolean("com.google.android.gms.signin.internal.offlineAccessRequested", false);
        bundle.putBoolean("com.google.android.gms.signin.internal.idTokenRequested", false);
        bundle.putString("com.google.android.gms.signin.internal.serverClientId", null);
        bundle.putBoolean("com.google.android.gms.signin.internal.usePromptModeForAuthCode", true);
        bundle.putBoolean("com.google.android.gms.signin.internal.forceCodeForRefreshToken", false);
        bundle.putString("com.google.android.gms.signin.internal.hostedDomain", null);
        bundle.putString("com.google.android.gms.signin.internal.logSessionId", null);
        bundle.putBoolean("com.google.android.gms.signin.internal.waitForAccessTokenRefresh", false);
        return bundle;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public final String D() {
        return "com.google.android.gms.signin.internal.ISignInService";
    }

    @Override // hf.c
    protected final String E() {
        return "com.google.android.gms.signin.service.START";
    }

    @Override // hf.c, ff.a.f
    public final boolean h() {
        return this.T;
    }

    @Override // wg.e
    public final void i() {
        b(new c.d(this));
    }

    @Override // wg.e
    public final void k(f fVar) {
        GoogleSignInAccount googleSignInAccount;
        q.m(fVar, "Expecting a valid ISignInCallbacks");
        try {
            Account c10 = this.U.c();
            if ("<<default account>>".equals(c10.name)) {
                googleSignInAccount = af.c.b(x()).c();
            } else {
                googleSignInAccount = null;
            }
            ((g) C()).W0(new j(1, new n0(c10, ((Integer) q.l(this.W)).intValue(), googleSignInAccount)), fVar);
        } catch (RemoteException e10) {
            Log.w("SignInClientImpl", "Remote service probably died when signIn is called");
            try {
                fVar.P(new l(1, new com.google.android.gms.common.b(8, null), null));
            } catch (RemoteException unused) {
                Log.wtf("SignInClientImpl", "ISignInCallbacks#onSignInComplete should be executed from the same process, unexpected RemoteException.", e10);
            }
        }
    }

    @Override // hf.c, ff.a.f
    public final int n() {
        return com.google.android.gms.common.k.f14498a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // hf.c
    public final /* synthetic */ IInterface r(IBinder iBinder) {
        if (iBinder == null) {
            return null;
        }
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.signin.internal.ISignInService");
        if (queryLocalInterface instanceof g) {
            return (g) queryLocalInterface;
        }
        return new g(iBinder);
    }

    @Override // hf.c
    protected final Bundle z() {
        if (!x().getPackageName().equals(this.U.f())) {
            this.V.putString("com.google.android.gms.signin.internal.realClientPackageName", this.U.f());
        }
        return this.V;
    }
}
