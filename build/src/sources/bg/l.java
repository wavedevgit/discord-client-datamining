package bg;

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
public final class l implements ue.b {

    /* renamed from: e */
    private static ue.b f6704e;

    /* renamed from: a */
    private final Context f6705a;

    /* renamed from: b */
    private boolean f6706b;

    /* renamed from: c */
    private final ScheduledExecutorService f6707c;

    /* renamed from: d */
    private final ExecutorService f6708d;

    l(Context context) {
        this.f6706b = false;
        ScheduledExecutorService newSingleThreadScheduledExecutor = Executors.newSingleThreadScheduledExecutor();
        this.f6707c = newSingleThreadScheduledExecutor;
        this.f6708d = Executors.newSingleThreadExecutor();
        this.f6705a = context;
        if (!this.f6706b) {
            newSingleThreadScheduledExecutor.scheduleAtFixedRate(new j(this, null), 0L, 86400L, TimeUnit.SECONDS);
            this.f6706b = true;
        }
    }

    public static synchronized ue.b c(Context context) {
        ue.b bVar;
        synchronized (l.class) {
            try {
                hf.q.m(context, "Context must not be null");
                if (f6704e == null) {
                    f6704e = new l(context.getApplicationContext());
                }
                bVar = f6704e;
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

    private static final void h(Context context) {
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
        long j10 = f(this.f6705a).getLong("app_set_id_last_used_time", -1L);
        if (j10 == -1) {
            return -1L;
        }
        return j10 + 33696000000L;
    }

    public final /* synthetic */ void d(zg.k kVar) {
        String str;
        String str2;
        String string = f(this.f6705a).getString("app_set_id", null);
        long a10 = a();
        if (string != null && com.google.android.gms.common.util.f.c().a() <= a10) {
            try {
                h(this.f6705a);
            } catch (k e10) {
                kVar.b(e10);
                return;
            }
        } else {
            string = UUID.randomUUID().toString();
            try {
                Context context = this.f6705a;
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
                h(context);
                Context context2 = this.f6705a;
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
        kVar.c(new ue.c(string, 1));
    }

    @Override // ue.b
    public final Task g() {
        final zg.k kVar = new zg.k();
        this.f6708d.execute(new Runnable() { // from class: bg.h
            @Override // java.lang.Runnable
            public final void run() {
                l.this.d(kVar);
            }
        });
        return kVar.a();
    }
}
