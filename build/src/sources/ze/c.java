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
    private static final Lock f55653c = new ReentrantLock();

    /* renamed from: d  reason: collision with root package name */
    private static c f55654d;

    /* renamed from: a  reason: collision with root package name */
    private final Lock f55655a = new ReentrantLock();

    /* renamed from: b  reason: collision with root package name */
    private final SharedPreferences f55656b;

    c(Context context) {
        this.f55656b = context.getSharedPreferences("com.google.android.gms.signin", 0);
    }

    public static c b(Context context) {
        gf.q.l(context);
        Lock lock = f55653c;
        lock.lock();
        try {
            if (f55654d == null) {
                f55654d = new c(context.getApplicationContext());
            }
            c cVar = f55654d;
            lock.unlock();
            return cVar;
        } catch (Throwable th2) {
            f55653c.unlock();
            throw th2;
        }
    }

    private static final String i(String str, String str2) {
        return str + ":" + str2;
    }

    public void a() {
        this.f55655a.lock();
        try {
            this.f55656b.edit().clear().apply();
        } finally {
            this.f55655a.unlock();
        }
    }

    public GoogleSignInAccount c() {
        String g10;
        String g11 = g("defaultGoogleSignInAccount");
        if (!TextUtils.isEmpty(g11) && (g10 = g(i("googleSignInAccount", g11))) != null) {
            try {
                return GoogleSignInAccount.n(g10);
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
                return GoogleSignInOptions.m(g10);
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
        h("defaultGoogleSignInAccount", googleSignInAccount.o());
        gf.q.l(googleSignInAccount);
        gf.q.l(googleSignInOptions);
        String o10 = googleSignInAccount.o();
        h(i("googleSignInAccount", o10), googleSignInAccount.p());
        h(i("googleSignInOptions", o10), googleSignInOptions.q());
    }

    protected final String g(String str) {
        this.f55655a.lock();
        try {
            return this.f55656b.getString(str, null);
        } finally {
            this.f55655a.unlock();
        }
    }

    protected final void h(String str, String str2) {
        this.f55655a.lock();
        try {
            this.f55656b.edit().putString(str, str2).apply();
        } finally {
            this.f55655a.unlock();
        }
    }
}
