package ze;

import android.content.Context;
import android.os.Binder;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v extends q {

    /* renamed from: c  reason: collision with root package name */
    private final Context f55653c;

    public v(Context context) {
        this.f55653c = context;
    }

    private final void f() {
        if (com.google.android.gms.common.util.n.a(this.f55653c, Binder.getCallingUid())) {
            return;
        }
        int callingUid = Binder.getCallingUid();
        throw new SecurityException("Calling UID " + callingUid + " is not Google Play services.");
    }

    @Override // ze.r
    public final void j() {
        f();
        p.a(this.f55653c).b();
    }

    @Override // ze.r
    public final void p() {
        f();
        c b10 = c.b(this.f55653c);
        GoogleSignInAccount c10 = b10.c();
        GoogleSignInOptions googleSignInOptions = GoogleSignInOptions.f14722w;
        if (c10 != null) {
            googleSignInOptions = b10.d();
        }
        com.google.android.gms.auth.api.signin.b a10 = com.google.android.gms.auth.api.signin.a.a(this.f55653c, googleSignInOptions);
        if (c10 != null) {
            a10.C();
        } else {
            a10.D();
        }
    }
}
