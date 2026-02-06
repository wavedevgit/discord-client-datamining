package com.google.firebase.messaging;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.PowerManager;
import android.util.Log;
import java.io.IOException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b1 implements Runnable {

    /* renamed from: q  reason: collision with root package name */
    private static final Object f16421q = new Object();

    /* renamed from: r  reason: collision with root package name */
    private static Boolean f16422r;

    /* renamed from: s  reason: collision with root package name */
    private static Boolean f16423s;

    /* renamed from: d  reason: collision with root package name */
    private final Context f16424d;

    /* renamed from: e  reason: collision with root package name */
    private final h0 f16425e;

    /* renamed from: i  reason: collision with root package name */
    private final PowerManager.WakeLock f16426i;

    /* renamed from: o  reason: collision with root package name */
    private final a1 f16427o;

    /* renamed from: p  reason: collision with root package name */
    private final long f16428p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends BroadcastReceiver {

        /* renamed from: a  reason: collision with root package name */
        private b1 f16429a;

        public a(b1 b1Var) {
            this.f16429a = b1Var;
        }

        public void a() {
            if (b1.b()) {
                Log.d("FirebaseMessaging", "Connectivity change received registered");
            }
            b1.this.f16424d.registerReceiver(this, new IntentFilter("android.net.conn.CONNECTIVITY_CHANGE"));
        }

        @Override // android.content.BroadcastReceiver
        public synchronized void onReceive(Context context, Intent intent) {
            try {
                b1 b1Var = this.f16429a;
                if (b1Var == null) {
                    return;
                }
                if (!b1Var.i()) {
                    return;
                }
                if (b1.b()) {
                    Log.d("FirebaseMessaging", "Connectivity changed. Starting background sync.");
                }
                this.f16429a.f16427o.k(this.f16429a, 0L);
                context.unregisterReceiver(this);
                this.f16429a = null;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b1(a1 a1Var, Context context, h0 h0Var, long j10) {
        this.f16427o = a1Var;
        this.f16424d = context;
        this.f16428p = j10;
        this.f16425e = h0Var;
        this.f16426i = ((PowerManager) context.getSystemService("power")).newWakeLock(1, "wake:com.google.firebase.messaging");
    }

    static /* synthetic */ boolean b() {
        return j();
    }

    private static String e(String str) {
        return "Missing Permission: " + str + ". This permission should normally be included by the manifest merger, but may needed to be manually added to your manifest";
    }

    private static boolean f(Context context) {
        boolean booleanValue;
        boolean booleanValue2;
        synchronized (f16421q) {
            try {
                Boolean bool = f16423s;
                if (bool == null) {
                    booleanValue = g(context, "android.permission.ACCESS_NETWORK_STATE", bool);
                } else {
                    booleanValue = bool.booleanValue();
                }
                Boolean valueOf = Boolean.valueOf(booleanValue);
                f16423s = valueOf;
                booleanValue2 = valueOf.booleanValue();
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return booleanValue2;
    }

    private static boolean g(Context context, String str, Boolean bool) {
        boolean z10;
        if (bool != null) {
            return bool.booleanValue();
        }
        if (context.checkCallingOrSelfPermission(str) == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10 && Log.isLoggable("FirebaseMessaging", 3)) {
            Log.d("FirebaseMessaging", e(str));
        }
        return z10;
    }

    private static boolean h(Context context) {
        boolean booleanValue;
        boolean booleanValue2;
        synchronized (f16421q) {
            try {
                Boolean bool = f16422r;
                if (bool == null) {
                    booleanValue = g(context, "android.permission.WAKE_LOCK", bool);
                } else {
                    booleanValue = bool.booleanValue();
                }
                Boolean valueOf = Boolean.valueOf(booleanValue);
                f16422r = valueOf;
                booleanValue2 = valueOf.booleanValue();
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return booleanValue2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public synchronized boolean i() {
        NetworkInfo networkInfo;
        boolean z10;
        try {
            ConnectivityManager connectivityManager = (ConnectivityManager) this.f16424d.getSystemService("connectivity");
            if (connectivityManager != null) {
                networkInfo = connectivityManager.getActiveNetworkInfo();
            } else {
                networkInfo = null;
            }
            if (networkInfo != null) {
                if (networkInfo.isConnected()) {
                    z10 = true;
                }
            }
            z10 = false;
        } catch (Throwable th2) {
            throw th2;
        }
        return z10;
    }

    private static boolean j() {
        if (!Log.isLoggable("FirebaseMessaging", 3)) {
            return false;
        }
        return true;
    }

    @Override // java.lang.Runnable
    public void run() {
        if (h(this.f16424d)) {
            this.f16426i.acquire(e.f16447a);
        }
        try {
            try {
                try {
                    this.f16427o.l(true);
                    if (!this.f16425e.g()) {
                        this.f16427o.l(false);
                        if (h(this.f16424d)) {
                            try {
                                this.f16426i.release();
                            } catch (RuntimeException unused) {
                                Log.i("FirebaseMessaging", "TopicsSyncTask's wakelock was already released due to timeout.");
                            }
                        }
                    } else if (f(this.f16424d) && !i()) {
                        new a(this).a();
                        if (h(this.f16424d)) {
                            try {
                                this.f16426i.release();
                            } catch (RuntimeException unused2) {
                                Log.i("FirebaseMessaging", "TopicsSyncTask's wakelock was already released due to timeout.");
                            }
                        }
                    } else {
                        if (this.f16427o.o()) {
                            this.f16427o.l(false);
                        } else {
                            this.f16427o.p(this.f16428p);
                        }
                        if (h(this.f16424d)) {
                            this.f16426i.release();
                        }
                    }
                } catch (Throwable th2) {
                    if (h(this.f16424d)) {
                        try {
                            this.f16426i.release();
                        } catch (RuntimeException unused3) {
                            Log.i("FirebaseMessaging", "TopicsSyncTask's wakelock was already released due to timeout.");
                        }
                    }
                    throw th2;
                }
            } catch (IOException e10) {
                Log.e("FirebaseMessaging", "Failed to sync topics. Won't retry sync. " + e10.getMessage());
                this.f16427o.l(false);
                if (h(this.f16424d)) {
                    this.f16426i.release();
                }
            }
        } catch (RuntimeException unused4) {
            Log.i("FirebaseMessaging", "TopicsSyncTask's wakelock was already released due to timeout.");
        }
    }
}
