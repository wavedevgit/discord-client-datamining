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
    static final long f17334a = TimeUnit.MINUTES.toMillis(1);

    /* renamed from: b  reason: collision with root package name */
    private static final Object f17335b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static yg.a f17336c;

    private static void b(Context context) {
        if (f17336c == null) {
            yg.a aVar = new yg.a(context, 1, "wake:com.google.firebase.iid.WakeLockHolder");
            f17336c = aVar;
            aVar.d(true);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c(Intent intent) {
        synchronized (f17335b) {
            try {
                if (f17336c != null && d(intent)) {
                    f(intent, false);
                    f17336c.c();
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
        synchronized (f17335b) {
            try {
                b(context);
                boolean d10 = d(intent);
                f(intent, true);
                if (!d10) {
                    f17336c.a(f17334a);
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
        synchronized (f17335b) {
            try {
                b(context);
                boolean d10 = d(intent);
                f(intent, true);
                ComponentName startService = context.startService(intent);
                if (startService == null) {
                    return null;
                }
                if (!d10) {
                    f17336c.a(f17334a);
                }
                return startService;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
