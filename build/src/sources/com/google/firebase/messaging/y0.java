package com.google.firebase.messaging;

import android.content.Context;
import android.content.SharedPreferences;
import java.lang.ref.WeakReference;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y0 {

    /* renamed from: d  reason: collision with root package name */
    private static WeakReference f16165d;

    /* renamed from: a  reason: collision with root package name */
    private final SharedPreferences f16166a;

    /* renamed from: b  reason: collision with root package name */
    private u0 f16167b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f16168c;

    private y0(SharedPreferences sharedPreferences, Executor executor) {
        this.f16168c = executor;
        this.f16166a = sharedPreferences;
    }

    public static synchronized y0 a(Context context, Executor executor) {
        y0 y0Var;
        synchronized (y0.class) {
            try {
                WeakReference weakReference = f16165d;
                if (weakReference != null) {
                    y0Var = (y0) weakReference.get();
                } else {
                    y0Var = null;
                }
                if (y0Var == null) {
                    y0Var = new y0(context.getSharedPreferences("com.google.android.gms.appid", 0), executor);
                    y0Var.c();
                    f16165d = new WeakReference(y0Var);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return y0Var;
    }

    private synchronized void c() {
        this.f16167b = u0.c(this.f16166a, "topic_operation_queue", ",", this.f16168c);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized x0 b() {
        return x0.a(this.f16167b.e());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized boolean d(x0 x0Var) {
        return this.f16167b.f(x0Var.e());
    }
}
