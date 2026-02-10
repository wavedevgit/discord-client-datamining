package com.google.firebase.messaging;

import android.content.Context;
import android.content.SharedPreferences;
import java.lang.ref.WeakReference;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y0 {

    /* renamed from: d  reason: collision with root package name */
    private static WeakReference f16679d;

    /* renamed from: a  reason: collision with root package name */
    private final SharedPreferences f16680a;

    /* renamed from: b  reason: collision with root package name */
    private u0 f16681b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f16682c;

    private y0(SharedPreferences sharedPreferences, Executor executor) {
        this.f16682c = executor;
        this.f16680a = sharedPreferences;
    }

    public static synchronized y0 a(Context context, Executor executor) {
        y0 y0Var;
        synchronized (y0.class) {
            try {
                WeakReference weakReference = f16679d;
                if (weakReference != null) {
                    y0Var = (y0) weakReference.get();
                } else {
                    y0Var = null;
                }
                if (y0Var == null) {
                    y0Var = new y0(context.getSharedPreferences("com.google.android.gms.appid", 0), executor);
                    y0Var.c();
                    f16679d = new WeakReference(y0Var);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return y0Var;
    }

    private synchronized void c() {
        this.f16681b = u0.c(this.f16680a, "topic_operation_queue", ",", this.f16682c);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized x0 b() {
        return x0.a(this.f16681b.e());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized boolean d(x0 x0Var) {
        return this.f16681b.f(x0Var.e());
    }
}
