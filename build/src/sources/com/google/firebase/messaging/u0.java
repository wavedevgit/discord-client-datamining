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
    private final SharedPreferences f17168a;

    /* renamed from: b  reason: collision with root package name */
    private final String f17169b;

    /* renamed from: c  reason: collision with root package name */
    private final String f17170c;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f17172e;

    /* renamed from: d  reason: collision with root package name */
    final ArrayDeque f17171d = new ArrayDeque();

    /* renamed from: f  reason: collision with root package name */
    private boolean f17173f = false;

    private u0(SharedPreferences sharedPreferences, String str, String str2, Executor executor) {
        this.f17168a = sharedPreferences;
        this.f17169b = str;
        this.f17170c = str2;
        this.f17172e = executor;
    }

    private boolean b(boolean z10) {
        if (z10 && !this.f17173f) {
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
        synchronized (this.f17171d) {
            try {
                this.f17171d.clear();
                String string = this.f17168a.getString(this.f17169b, "");
                if (!TextUtils.isEmpty(string) && string.contains(this.f17170c)) {
                    String[] split = string.split(this.f17170c, -1);
                    if (split.length == 0) {
                        Log.e("FirebaseMessaging", "Corrupted queue. Please check the queue contents and item separator provided");
                    }
                    for (String str : split) {
                        if (!TextUtils.isEmpty(str)) {
                            this.f17171d.add(str);
                        }
                    }
                }
            } finally {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void h() {
        synchronized (this.f17171d) {
            this.f17168a.edit().putString(this.f17169b, g()).commit();
        }
    }

    private void i() {
        this.f17172e.execute(new Runnable() { // from class: com.google.firebase.messaging.t0
            @Override // java.lang.Runnable
            public final void run() {
                u0.this.h();
            }
        });
    }

    public String e() {
        String str;
        synchronized (this.f17171d) {
            str = (String) this.f17171d.peek();
        }
        return str;
    }

    public boolean f(Object obj) {
        boolean b10;
        synchronized (this.f17171d) {
            b10 = b(this.f17171d.remove(obj));
        }
        return b10;
    }

    public String g() {
        StringBuilder sb2 = new StringBuilder();
        Iterator it = this.f17171d.iterator();
        while (it.hasNext()) {
            sb2.append((String) it.next());
            sb2.append(this.f17170c);
        }
        return sb2.toString();
    }
}
