package ze;

import android.content.Context;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Looper;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.api.Scope;
import ef.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends gf.g {
    private final GoogleSignInOptions T;

    public i(Context context, Looper looper, gf.d dVar, GoogleSignInOptions googleSignInOptions, e.a aVar, e.b bVar) {
        super(context, looper, 91, dVar, aVar, bVar);
        GoogleSignInOptions.a aVar2;
        if (googleSignInOptions != null) {
            aVar2 = new GoogleSignInOptions.a(googleSignInOptions);
        } else {
            aVar2 = new GoogleSignInOptions.a();
        }
        aVar2.e(cg.n.a());
        if (!dVar.d().isEmpty()) {
            for (Scope scope : dVar.d()) {
                aVar2.d(scope, new Scope[0]);
            }
        }
        this.T = aVar2.a();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    public final String D() {
        return "com.google.android.gms.auth.api.signin.internal.ISignInService";
    }

    @Override // gf.c
    protected final String E() {
        return "com.google.android.gms.auth.api.signin.service.START";
    }

    public final GoogleSignInOptions k0() {
        return this.T;
    }

    @Override // gf.c, ef.a.f
    public final int n() {
        return com.google.android.gms.common.j.f13418a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.c
    public final /* synthetic */ IInterface r(IBinder iBinder) {
        if (iBinder == null) {
            return null;
        }
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.auth.api.signin.internal.ISignInService");
        if (queryLocalInterface instanceof u) {
            return (u) queryLocalInterface;
        }
        return new u(iBinder);
    }
}
