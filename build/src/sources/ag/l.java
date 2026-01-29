package ag;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;
import com.google.android.gms.tasks.Task;
import java.util.UUID;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l implements te.b {

    /* renamed from: e */
    private static te.b f610e;

    /* renamed from: a */
    private final Context f611a;

    /* renamed from: b */
    private boolean f612b;

    /* renamed from: c */
    private final ScheduledExecutorService f613c;

    /* renamed from: d */
    private final ExecutorService f614d;

    l(Context context) {
        this.f612b = false;
        ScheduledExecutorService newSingleThreadScheduledExecutor = Executors.newSingleThreadScheduledExecutor();
        this.f613c = newSingleThreadScheduledExecutor;
        this.f614d = Executors.newSingleThreadExecutor();
        this.f611a = context;
        if (!this.f612b) {
            newSingleThreadScheduledExecutor.scheduleAtFixedRate(new j(this, null), 0L, 86400L, TimeUnit.SECONDS);
            this.f612b = true;
        }
    }

    public static synchronized te.b c(Context context) {
        te.b bVar;
        synchronized (l.class) {
            try {
                gf.q.m(context, "Context must not be null");
                if (f610e == null) {
                    f610e = new l(context.getApplicationContext());
                }
                bVar = f610e;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return bVar;
    }

    public static final void e(Context context) {
        String str;
        String str2;
        if (!f(context).edit().remove("app_set_id").commit()) {
            String valueOf = String.valueOf(context.getPackageName());
            if (valueOf.length() != 0) {
                str2 = "Failed to clear app set ID generated for App ".concat(valueOf);
            } else {
                str2 = new String("Failed to clear app set ID generated for App ");
            }
            Log.e("AppSet", str2);
        }
        if (!f(context).edit().remove("app_set_id_last_used_time").commit()) {
            String valueOf2 = String.valueOf(context.getPackageName());
            if (valueOf2.length() != 0) {
                str = "Failed to clear app set ID last used time for App ".concat(valueOf2);
            } else {
                str = new String("Failed to clear app set ID last used time for App ");
            }
            Log.e("AppSet", str);
        }
    }

    private static final SharedPreferences f(Context context) {
        return context.getSharedPreferences("app_set_id_storage", 0);
    }

    private static final void g(Context context) {
        String str;
        SharedPreferences f10 = f(context);
        if (!f10.edit().putLong("app_set_id_last_used_time", com.google.android.gms.common.util.f.c().a()).commit()) {
            String valueOf = String.valueOf(context.getPackageName());
            if (valueOf.length() != 0) {
                str = "Failed to store app set ID last used time for App ".concat(valueOf);
            } else {
                str = new String("Failed to store app set ID last used time for App ");
            }
            Log.e("AppSet", str);
            throw new k("Failed to store the app set ID last used time.");
        }
    }

    public final long a() {
        long j10 = f(this.f611a).getLong("app_set_id_last_used_time", -1L);
        if (j10 == -1) {
            return -1L;
        }
        return j10 + 33696000000L;
    }

    public final /* synthetic */ void d(wg.k kVar) {
        String str;
        String str2;
        String string = f(this.f611a).getString("app_set_id", null);
        long a10 = a();
        if (string != null && com.google.android.gms.common.util.f.c().a() <= a10) {
            try {
                g(this.f611a);
            } catch (k e10) {
                kVar.b(e10);
                return;
            }
        } else {
            string = UUID.randomUUID().toString();
            try {
                Context context = this.f611a;
                if (!f(context).edit().putString("app_set_id", string).commit()) {
                    String valueOf = String.valueOf(context.getPackageName());
                    if (valueOf.length() != 0) {
                        str2 = "Failed to store app set ID generated for App ".concat(valueOf);
                    } else {
                        str2 = new String("Failed to store app set ID generated for App ");
                    }
                    Log.e("AppSet", str2);
                    throw new k("Failed to store the app set ID.");
                }
                g(context);
                Context context2 = this.f611a;
                SharedPreferences f10 = f(context2);
                if (!f10.edit().putLong("app_set_id_creation_time", com.google.android.gms.common.util.f.c().a()).commit()) {
                    String valueOf2 = String.valueOf(context2.getPackageName());
                    if (valueOf2.length() != 0) {
                        str = "Failed to store app set ID creation time for App ".concat(valueOf2);
                    } else {
                        str = new String("Failed to store app set ID creation time for App ");
                    }
                    Log.e("AppSet", str);
                    throw new k("Failed to store the app set ID creation time.");
                }
            } catch (k e11) {
                kVar.b(e11);
                return;
            }
        }
        kVar.c(new te.c(string, 1));
    }

    @Override // te.b
    public final Task h() {
        final wg.k kVar = new wg.k();
        this.f614d.execute(new Runnable() { // from class: ag.h
            @Override // java.lang.Runnable
            public final void run() {
                l.this.d(kVar);
            }
        });
        return kVar.a();
    }
}
