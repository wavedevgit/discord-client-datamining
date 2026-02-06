package com.google.firebase.messaging;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class d1 {

    /* renamed from: a  reason: collision with root package name */
    static final long f16444a = TimeUnit.MINUTES.toMillis(1);

    /* renamed from: b  reason: collision with root package name */
    private static final Object f16445b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static xg.a f16446c;

    private static void b(Context context) {
        if (f16446c == null) {
            xg.a aVar = new xg.a(context, 1, "wake:com.google.firebase.iid.WakeLockHolder");
            f16446c = aVar;
            aVar.d(true);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c(Intent intent) {
        synchronized (f16445b) {
            try {
                if (f16446c != null && d(intent)) {
                    f(intent, false);
                    f16446c.c();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    static boolean d(Intent intent) {
        return intent.getBooleanExtra("com.google.firebase.iid.WakeLockHolder.wakefulintent", false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e(Context context, i1 i1Var, final Intent intent) {
        synchronized (f16445b) {
            try {
                b(context);
                boolean d10 = d(intent);
                f(intent, true);
                if (!d10) {
                    f16446c.a(f16444a);
                }
                i1Var.c(intent).addOnCompleteListener(new OnCompleteListener() { // from class: com.google.firebase.messaging.c1
                    @Override // com.google.android.gms.tasks.OnCompleteListener
                    public final void onComplete(Task task) {
                        d1.c(intent);
                    }
                });
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private static void f(Intent intent, boolean z10) {
        intent.putExtra("com.google.firebase.iid.WakeLockHolder.wakefulintent", z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ComponentName g(Context context, Intent intent) {
        synchronized (f16445b) {
            try {
                b(context);
                boolean d10 = d(intent);
                f(intent, true);
                ComponentName startService = context.startService(intent);
                if (startService == null) {
                    return null;
                }
                if (!d10) {
                    f16446c.a(f16444a);
                }
                return startService;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
