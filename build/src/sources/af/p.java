package af;

import android.content.Context;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p {

    /* renamed from: d  reason: collision with root package name */
    private static p f768d;

    /* renamed from: a  reason: collision with root package name */
    final c f769a;

    /* renamed from: b  reason: collision with root package name */
    GoogleSignInAccount f770b;

    /* renamed from: c  reason: collision with root package name */
    GoogleSignInOptions f771c;

    private p(Context context) {
        c b10 = c.b(context);
        this.f769a = b10;
        this.f770b = b10.c();
        this.f771c = b10.d();
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
            p pVar = f768d;
            if (pVar != null) {
                return pVar;
            }
            p pVar2 = new p(context);
            f768d = pVar2;
            return pVar2;
        }
    }

    public final synchronized void b() {
        this.f769a.a();
        this.f770b = null;
        this.f771c = null;
    }

    public final synchronized void c(GoogleSignInOptions googleSignInOptions, GoogleSignInAccount googleSignInAccount) {
        this.f769a.f(googleSignInAccount, googleSignInOptions);
        this.f770b = googleSignInAccount;
        this.f771c = googleSignInOptions;
    }
}
