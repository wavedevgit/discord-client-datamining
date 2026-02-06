package ze;

import android.content.Context;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p {

    /* renamed from: d  reason: collision with root package name */
    private static p f56252d;

    /* renamed from: a  reason: collision with root package name */
    final c f56253a;

    /* renamed from: b  reason: collision with root package name */
    GoogleSignInAccount f56254b;

    /* renamed from: c  reason: collision with root package name */
    GoogleSignInOptions f56255c;

    private p(Context context) {
        c b10 = c.b(context);
        this.f56253a = b10;
        this.f56254b = b10.c();
        this.f56255c = b10.d();
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
            p pVar = f56252d;
            if (pVar != null) {
                return pVar;
            }
            p pVar2 = new p(context);
            f56252d = pVar2;
            return pVar2;
        }
    }

    public final synchronized void b() {
        this.f56253a.a();
        this.f56254b = null;
        this.f56255c = null;
    }

    public final synchronized void c(GoogleSignInOptions googleSignInOptions, GoogleSignInAccount googleSignInAccount) {
        this.f56253a.f(googleSignInAccount, googleSignInOptions);
        this.f56254b = googleSignInAccount;
        this.f56255c = googleSignInOptions;
    }
}
