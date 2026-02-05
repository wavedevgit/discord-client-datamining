package com.google.firebase.messaging;

import android.content.SharedPreferences;
import android.text.TextUtils;
import android.util.Log;
import java.util.ArrayDeque;
import java.util.Iterator;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u0 {

    /* renamed from: a  reason: collision with root package name */
    private final SharedPreferences f16530a;

    /* renamed from: b  reason: collision with root package name */
    private final String f16531b;

    /* renamed from: c  reason: collision with root package name */
    private final String f16532c;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f16534e;

    /* renamed from: d  reason: collision with root package name */
    final ArrayDeque f16533d = new ArrayDeque();

    /* renamed from: f  reason: collision with root package name */
    private boolean f16535f = false;

    private u0(SharedPreferences sharedPreferences, String str, String str2, Executor executor) {
        this.f16530a = sharedPreferences;
        this.f16531b = str;
        this.f16532c = str2;
        this.f16534e = executor;
    }

    private boolean b(boolean z10) {
        if (z10 && !this.f16535f) {
            i();
        }
        return z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static u0 c(SharedPreferences sharedPreferences, String str, String str2, Executor executor) {
        u0 u0Var = new u0(sharedPreferences, str, str2, executor);
        u0Var.d();
        return u0Var;
    }

    private void d() {
        synchronized (this.f16533d) {
            try {
                this.f16533d.clear();
                String string = this.f16530a.getString(this.f16531b, "");
                if (!TextUtils.isEmpty(string) && string.contains(this.f16532c)) {
                    String[] split = string.split(this.f16532c, -1);
                    if (split.length == 0) {
                        Log.e("FirebaseMessaging", "Corrupted queue. Please check the queue contents and item separator provided");
                    }
                    for (String str : split) {
                        if (!TextUtils.isEmpty(str)) {
                            this.f16533d.add(str);
                        }
                    }
                }
            } finally {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void h() {
        synchronized (this.f16533d) {
            this.f16530a.edit().putString(this.f16531b, g()).commit();
        }
    }

    private void i() {
        this.f16534e.execute(new Runnable() { // from class: com.google.firebase.messaging.t0
            @Override // java.lang.Runnable
            public final void run() {
                u0.this.h();
            }
        });
    }

    public String e() {
        String str;
        synchronized (this.f16533d) {
            str = (String) this.f16533d.peek();
        }
        return str;
    }

    public boolean f(Object obj) {
        boolean b10;
        synchronized (this.f16533d) {
            b10 = b(this.f16533d.remove(obj));
        }
        return b10;
    }

    public String g() {
        StringBuilder sb2 = new StringBuilder();
        Iterator it = this.f16533d.iterator();
        while (it.hasNext()) {
            sb2.append((String) it.next());
            sb2.append(this.f16532c);
        }
        return sb2.toString();
    }
}
