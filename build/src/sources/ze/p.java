package ze;

import android.content.Context;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p {

    /* renamed from: d  reason: collision with root package name */
    private static p f56300d;

    /* renamed from: a  reason: collision with root package name */
    final c f56301a;

    /* renamed from: b  reason: collision with root package name */
    GoogleSignInAccount f56302b;

    /* renamed from: c  reason: collision with root package name */
    GoogleSignInOptions f56303c;

    private p(Context context) {
        c b10 = c.b(context);
        this.f56301a = b10;
        this.f56302b = b10.c();
        this.f56303c = b10.d();
    }

    public static synchronized p a(Context context) {
        p d10;
        synchronized (p.class) {
            d10 = d(context.getApplicationContext());
        }
        return d10;
    }

    private static synchronized p d(Context context) {
        synchronized (p.class) {
            p pVar = f56300d;
            if (pVar != null) {
                return pVar;
            }
            p pVar2 = new p(context);
            f56300d = pVar2;
            return pVar2;
        }
    }

    public final synchronized void b() {
        this.f56301a.a();
        this.f56302b = null;
        this.f56303c = null;
    }

    public final synchronized void c(GoogleSignInOptions googleSignInOptions, GoogleSignInAccount googleSignInAccount) {
        this.f56301a.f(googleSignInAccount, googleSignInOptions);
        this.f56302b = googleSignInAccount;
        this.f56303c = googleSignInOptions;
    }
}
