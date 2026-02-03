package ze;

import android.content.Context;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p {

    /* renamed from: d  reason: collision with root package name */
    private static p f55797d;

    /* renamed from: a  reason: collision with root package name */
    final c f55798a;

    /* renamed from: b  reason: collision with root package name */
    GoogleSignInAccount f55799b;

    /* renamed from: c  reason: collision with root package name */
    GoogleSignInOptions f55800c;

    private p(Context context) {
        c b10 = c.b(context);
        this.f55798a = b10;
        this.f55799b = b10.c();
        this.f55800c = b10.d();
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
            p pVar = f55797d;
            if (pVar != null) {
                return pVar;
            }
            p pVar2 = new p(context);
            f55797d = pVar2;
            return pVar2;
        }
    }

    public final synchronized void b() {
        this.f55798a.a();
        this.f55799b = null;
        this.f55800c = null;
    }

    public final synchronized void c(GoogleSignInOptions googleSignInOptions, GoogleSignInAccount googleSignInAccount) {
        this.f55798a.f(googleSignInAccount, googleSignInOptions);
        this.f55799b = googleSignInAccount;
        this.f55800c = googleSignInOptions;
    }
}
