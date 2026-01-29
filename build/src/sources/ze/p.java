package ze;

import android.content.Context;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p {

    /* renamed from: d  reason: collision with root package name */
    private static p f55649d;

    /* renamed from: a  reason: collision with root package name */
    final c f55650a;

    /* renamed from: b  reason: collision with root package name */
    GoogleSignInAccount f55651b;

    /* renamed from: c  reason: collision with root package name */
    GoogleSignInOptions f55652c;

    private p(Context context) {
        c b10 = c.b(context);
        this.f55650a = b10;
        this.f55651b = b10.c();
        this.f55652c = b10.d();
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
            p pVar = f55649d;
            if (pVar != null) {
                return pVar;
            }
            p pVar2 = new p(context);
            f55649d = pVar2;
            return pVar2;
        }
    }

    public final synchronized void b() {
        this.f55650a.a();
        this.f55651b = null;
        this.f55652c = null;
    }

    public final synchronized void c(GoogleSignInOptions googleSignInOptions, GoogleSignInAccount googleSignInAccount) {
        this.f55650a.f(googleSignInAccount, googleSignInOptions);
        this.f55651b = googleSignInAccount;
        this.f55652c = googleSignInOptions;
    }
}
