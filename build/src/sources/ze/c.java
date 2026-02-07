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
    private static final Lock f56288c = new ReentrantLock();

    /* renamed from: d  reason: collision with root package name */
    private static c f56289d;

    /* renamed from: a  reason: collision with root package name */
    private final Lock f56290a = new ReentrantLock();

    /* renamed from: b  reason: collision with root package name */
    private final SharedPreferences f56291b;

    c(Context context) {
        this.f56291b = context.getSharedPreferences("com.google.android.gms.signin", 0);
    }

    public static c b(Context context) {
        gf.q.l(context);
        Lock lock = f56288c;
        lock.lock();
        try {
            if (f56289d == null) {
                f56289d = new c(context.getApplicationContext());
            }
            c cVar = f56289d;
            lock.unlock();
            return cVar;
        } catch (Throwable th2) {
            f56288c.unlock();
            throw th2;
        }
    }

    private static final String i(String str, String str2) {
        return str + ":" + str2;
    }

    public void a() {
        this.f56290a.lock();
        try {
            this.f56291b.edit().clear().apply();
        } finally {
            this.f56290a.unlock();
        }
    }

    public GoogleSignInAccount c() {
        String g10;
        String g11 = g("defaultGoogleSignInAccount");
        if (!TextUtils.isEmpty(g11) && (g10 = g(i("googleSignInAccount", g11))) != null) {
            try {
                return GoogleSignInAccount.p(g10);
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
                return GoogleSignInOptions.o(g10);
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
        h("defaultGoogleSignInAccount", googleSignInAccount.q());
        gf.q.l(googleSignInAccount);
        gf.q.l(googleSignInOptions);
        String q10 = googleSignInAccount.q();
        h(i("googleSignInAccount", q10), googleSignInAccount.r());
        h(i("googleSignInOptions", q10), googleSignInOptions.t());
    }

    protected final String g(String str) {
        this.f56290a.lock();
        try {
            return this.f56291b.getString(str, null);
        } finally {
            this.f56290a.unlock();
        }
    }

    protected final void h(String str, String str2) {
        this.f56290a.lock();
        try {
            this.f56291b.edit().putString(str, str2).apply();
        } finally {
            this.f56290a.unlock();
        }
    }
}
