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
    private final SharedPreferences f17400a;

    /* renamed from: b  reason: collision with root package name */
    private final String f17401b;

    /* renamed from: c  reason: collision with root package name */
    private final String f17402c;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f17404e;

    /* renamed from: d  reason: collision with root package name */
    final ArrayDeque f17403d = new ArrayDeque();

    /* renamed from: f  reason: collision with root package name */
    private boolean f17405f = false;

    private u0(SharedPreferences sharedPreferences, String str, String str2, Executor executor) {
        this.f17400a = sharedPreferences;
        this.f17401b = str;
        this.f17402c = str2;
        this.f17404e = executor;
    }

    private boolean b(boolean z10) {
        if (z10 && !this.f17405f) {
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
        synchronized (this.f17403d) {
            try {
                this.f17403d.clear();
                String string = this.f17400a.getString(this.f17401b, "");
                if (!TextUtils.isEmpty(string) && string.contains(this.f17402c)) {
                    String[] split = string.split(this.f17402c, -1);
                    if (split.length == 0) {
                        Log.e("FirebaseMessaging", "Corrupted queue. Please check the queue contents and item separator provided");
                    }
                    for (String str : split) {
                        if (!TextUtils.isEmpty(str)) {
                            this.f17403d.add(str);
                        }
                    }
                }
            } finally {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void h() {
        synchronized (this.f17403d) {
            this.f17400a.edit().putString(this.f17401b, g()).commit();
        }
    }

    private void i() {
        this.f17404e.execute(new Runnable() { // from class: com.google.firebase.messaging.t0
            @Override // java.lang.Runnable
            public final void run() {
                u0.this.h();
            }
        });
    }

    public String e() {
        String str;
        synchronized (this.f17403d) {
            str = (String) this.f17403d.peek();
        }
        return str;
    }

    public boolean f(Object obj) {
        boolean b10;
        synchronized (this.f17403d) {
            b10 = b(this.f17403d.remove(obj));
        }
        return b10;
    }

    public String g() {
        StringBuilder sb2 = new StringBuilder();
        Iterator it = this.f17403d.iterator();
        while (it.hasNext()) {
            sb2.append((String) it.next());
            sb2.append(this.f17402c);
        }
        return sb2.toString();
    }
}
