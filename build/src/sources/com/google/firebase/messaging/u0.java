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
    private final SharedPreferences f16136a;

    /* renamed from: b  reason: collision with root package name */
    private final String f16137b;

    /* renamed from: c  reason: collision with root package name */
    private final String f16138c;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f16140e;

    /* renamed from: d  reason: collision with root package name */
    final ArrayDeque f16139d = new ArrayDeque();

    /* renamed from: f  reason: collision with root package name */
    private boolean f16141f = false;

    private u0(SharedPreferences sharedPreferences, String str, String str2, Executor executor) {
        this.f16136a = sharedPreferences;
        this.f16137b = str;
        this.f16138c = str2;
        this.f16140e = executor;
    }

    private boolean b(boolean z10) {
        if (z10 && !this.f16141f) {
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
        synchronized (this.f16139d) {
            try {
                this.f16139d.clear();
                String string = this.f16136a.getString(this.f16137b, "");
                if (!TextUtils.isEmpty(string) && string.contains(this.f16138c)) {
                    String[] split = string.split(this.f16138c, -1);
                    if (split.length == 0) {
                        Log.e("FirebaseMessaging", "Corrupted queue. Please check the queue contents and item separator provided");
                    }
                    for (String str : split) {
                        if (!TextUtils.isEmpty(str)) {
                            this.f16139d.add(str);
                        }
                    }
                }
            } finally {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void h() {
        synchronized (this.f16139d) {
            this.f16136a.edit().putString(this.f16137b, g()).commit();
        }
    }

    private void i() {
        this.f16140e.execute(new Runnable() { // from class: com.google.firebase.messaging.t0
            @Override // java.lang.Runnable
            public final void run() {
                u0.this.h();
            }
        });
    }

    public String e() {
        String str;
        synchronized (this.f16139d) {
            str = (String) this.f16139d.peek();
        }
        return str;
    }

    public boolean f(Object obj) {
        boolean b10;
        synchronized (this.f16139d) {
            b10 = b(this.f16139d.remove(obj));
        }
        return b10;
    }

    public String g() {
        StringBuilder sb2 = new StringBuilder();
        Iterator it = this.f16139d.iterator();
        while (it.hasNext()) {
            sb2.append((String) it.next());
            sb2.append(this.f16138c);
        }
        return sb2.toString();
    }
}
