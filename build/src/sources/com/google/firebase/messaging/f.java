package com.google.firebase.messaging;

import android.app.ActivityManager;
import android.app.KeyguardManager;
import android.app.NotificationManager;
import android.content.Context;
import android.graphics.Bitmap;
import android.os.Process;
import android.os.SystemClock;
import android.util.Log;
import androidx.core.app.NotificationCompat;
import com.google.firebase.messaging.d;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f {

    /* renamed from: a  reason: collision with root package name */
    private final ExecutorService f16452a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f16453b;

    /* renamed from: c  reason: collision with root package name */
    private final i0 f16454c;

    public f(Context context, i0 i0Var, ExecutorService executorService) {
        this.f16452a = executorService;
        this.f16453b = context;
        this.f16454c = i0Var;
    }

    private boolean b() {
        if (((KeyguardManager) this.f16453b.getSystemService("keyguard")).inKeyguardRestrictedInputMode()) {
            return false;
        }
        if (!com.google.android.gms.common.util.k.c()) {
            SystemClock.sleep(10L);
        }
        int myPid = Process.myPid();
        List<ActivityManager.RunningAppProcessInfo> runningAppProcesses = ((ActivityManager) this.f16453b.getSystemService("activity")).getRunningAppProcesses();
        if (runningAppProcesses != null) {
            Iterator<ActivityManager.RunningAppProcessInfo> it = runningAppProcesses.iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                }
                ActivityManager.RunningAppProcessInfo next = it.next();
                if (next.pid == myPid) {
                    if (next.importance == 100) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    private void c(d.a aVar) {
        if (Log.isLoggable("FirebaseMessaging", 3)) {
            Log.d("FirebaseMessaging", "Showing notification");
        }
        ((NotificationManager) this.f16453b.getSystemService("notification")).notify(aVar.f16440b, aVar.f16441c, aVar.f16439a.g());
    }

    private e0 d() {
        e0 m10 = e0.m(this.f16454c.p("gcm.n.image"));
        if (m10 != null) {
            m10.p(this.f16452a);
        }
        return m10;
    }

    private void e(NotificationCompat.Builder builder, e0 e0Var) {
        if (e0Var != null) {
            try {
                Bitmap bitmap = (Bitmap) yg.m.b(e0Var.n(), 5L, TimeUnit.SECONDS);
                builder.F(bitmap);
                builder.Z(new NotificationCompat.e().q(bitmap).p(null));
            } catch (InterruptedException unused) {
                Log.w("FirebaseMessaging", "Interrupted while downloading image, showing notification without it");
                e0Var.close();
                Thread.currentThread().interrupt();
            } catch (ExecutionException e10) {
                Log.w("FirebaseMessaging", "Failed to download image: " + e10.getCause());
            } catch (TimeoutException unused2) {
                Log.w("FirebaseMessaging", "Failed to download image in time, showing notification without it");
                e0Var.close();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean a() {
        if (this.f16454c.a("gcm.n.noui")) {
            return true;
        }
        if (b()) {
            return false;
        }
        e0 d10 = d();
        d.a e10 = d.e(this.f16453b, this.f16454c);
        e(e10.f16439a, d10);
        c(e10);
        return true;
    }
}
