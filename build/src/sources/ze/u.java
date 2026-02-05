package ze;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u extends cg.a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public u(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.auth.api.signin.internal.ISignInService");
    }

    public final void W0(t tVar, GoogleSignInOptions googleSignInOptions) {
        Parcel e10 = e();
        cg.p.d(e10, tVar);
        cg.p.c(e10, googleSignInOptions);
        f(102, e10);
    }

    public final void h(t tVar, GoogleSignInOptions googleSignInOptions) {
        Parcel e10 = e();
        cg.p.d(e10, tVar);
        cg.p.c(e10, googleSignInOptions);
        f(103, e10);
    }
}
