package ze;

import android.content.Context;
import android.content.SharedPreferences;
import android.text.TextUtils;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import org.json.JSONException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c {

    /* renamed from: c  reason: collision with root package name */
    private static final Lock f55509c = new ReentrantLock();

    /* renamed from: d  reason: collision with root package name */
    private static c f55510d;

    /* renamed from: a  reason: collision with root package name */
    private final Lock f55511a = new ReentrantLock();

    /* renamed from: b  reason: collision with root package name */
    private final SharedPreferences f55512b;

    c(Context context) {
        this.f55512b = context.getSharedPreferences("com.google.android.gms.signin", 0);
    }

    public static c b(Context context) {
        gf.q.l(context);
        Lock lock = f55509c;
        lock.lock();
        try {
            if (f55510d == null) {
                f55510d = new c(context.getApplicationContext());
            }
            c cVar = f55510d;
            lock.unlock();
            return cVar;
        } catch (Throwable th2) {
            f55509c.unlock();
            throw th2;
        }
    }

    private static final String i(String str, String str2) {
        return str + ":" + str2;
    }

    public void a() {
        this.f55511a.lock();
        try {
            this.f55512b.edit().clear().apply();
        } finally {
            this.f55511a.unlock();
        }
    }

    public GoogleSignInAccount c() {
        String g10;
        String g11 = g("defaultGoogleSignInAccount");
        if (!TextUtils.isEmpty(g11) && (g10 = g(i("googleSignInAccount", g11))) != null) {
            try {
                return GoogleSignInAccount.o(g10);
            } catch (JSONException unused) {
            }
        }
        return null;
    }

    public GoogleSignInOptions d() {
        String g10;
        String g11 = g("defaultGoogleSignInAccount");
        if (!TextUtils.isEmpty(g11) && (g10 = g(i("googleSignInOptions", g11))) != null) {
            try {
                return GoogleSignInOptions.n(g10);
            } catch (JSONException unused) {
            }
        }
        return null;
    }

    public String e() {
        return g("refreshToken");
    }

    public void f(GoogleSignInAccount googleSignInAccount, GoogleSignInOptions googleSignInOptions) {
        gf.q.l(googleSignInAccount);
        gf.q.l(googleSignInOptions);
        h("defaultGoogleSignInAccount", googleSignInAccount.p());
        gf.q.l(googleSignInAccount);
        gf.q.l(googleSignInOptions);
        String p10 = googleSignInAccount.p();
        h(i("googleSignInAccount", p10), googleSignInAccount.q());
        h(i("googleSignInOptions", p10), googleSignInOptions.r());
    }

    protected final String g(String str) {
        this.f55511a.lock();
        try {
            return this.f55512b.getString(str, null);
        } finally {
            this.f55511a.unlock();
        }
    }

    protected final void h(String str, String str2) {
        this.f55511a.lock();
        try {
            this.f55512b.edit().putString(str, str2).apply();
        } finally {
            this.f55511a.unlock();
        }
    }
}
