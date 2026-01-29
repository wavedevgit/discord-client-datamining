package com.google.firebase.messaging;

import android.content.Context;
import android.content.Intent;
import android.util.Base64;
import android.util.Log;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class m {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f17515c = new Object();

    /* renamed from: d  reason: collision with root package name */
    private static i1 f17516d;

    /* renamed from: a  reason: collision with root package name */
    private final Context f17517a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f17518b = new g2.i();

    public m(Context context) {
        this.f17517a = context;
    }

    public static /* synthetic */ Task a(Context context, Intent intent, boolean z10, Task task) {
        if (com.google.android.gms.common.util.k.e() && ((Integer) task.l()).intValue() == 402) {
            return e(context, intent, z10).h(new g2.i(), new wg.c() { // from class: com.google.firebase.messaging.k
                @Override // wg.c
                public final Object a(Task task2) {
                    return m.d(task2);
                }
            });
        }
        return task;
    }

    public static /* synthetic */ Integer c(Task task) {
        return -1;
    }

    public static /* synthetic */ Integer d(Task task) {
        return 403;
    }

    private static Task e(Context context, Intent intent, boolean z10) {
        if (Log.isLoggable("FirebaseMessaging", 3)) {
            Log.d("FirebaseMessaging", "Binding to service");
        }
        i1 f10 = f(context, "com.google.firebase.MESSAGING_EVENT");
        if (z10) {
            if (s0.b().e(context)) {
                d1.e(context, f10, intent);
            } else {
                f10.c(intent);
            }
            return wg.m.f(-1);
        }
        return f10.c(intent).h(new g2.i(), new wg.c() { // from class: com.google.firebase.messaging.l
            @Override // wg.c
            public final Object a(Task task) {
                return m.c(task);
            }
        });
    }

    private static i1 f(Context context, String str) {
        i1 i1Var;
        synchronized (f17515c) {
            try {
                if (f17516d == null) {
                    f17516d = new i1(context, str);
                }
                i1Var = f17516d;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return i1Var;
    }

    public Task g(Intent intent) {
        String stringExtra = intent.getStringExtra("gcm.rawData64");
        if (stringExtra != null) {
            intent.putExtra("rawData", Base64.decode(stringExtra, 0));
            intent.removeExtra("gcm.rawData64");
        }
        return h(this.f17517a, intent);
    }

    public Task h(final Context context, final Intent intent) {
        boolean z10;
        final boolean z11 = false;
        if (com.google.android.gms.common.util.k.e() && context.getApplicationInfo().targetSdkVersion >= 26) {
            z10 = true;
        } else {
            z10 = false;
        }
        if ((intent.getFlags() & 268435456) != 0) {
            z11 = true;
        }
        if (z10 && !z11) {
            return e(context, intent, z11);
        }
        return wg.m.c(this.f17518b, new Callable() { // from class: com.google.firebase.messaging.i
            @Override // java.util.concurrent.Callable
            public final Object call() {
                Integer valueOf;
                valueOf = Integer.valueOf(s0.b().g(context, intent));
                return valueOf;
            }
        }).i(this.f17518b, new wg.c() { // from class: com.google.firebase.messaging.j
            @Override // wg.c
            public final Object a(Task task) {
                return m.a(context, intent, z11, task);
            }
        });
    }
}
