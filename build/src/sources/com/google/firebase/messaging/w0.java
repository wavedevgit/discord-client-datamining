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
import java.util.concurrent.ExecutorService;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class w0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final long f16544d;

    /* renamed from: e  reason: collision with root package name */
    private final PowerManager.WakeLock f16545e;

    /* renamed from: i  reason: collision with root package name */
    private final FirebaseMessaging f16546i;

    /* renamed from: o  reason: collision with root package name */
    ExecutorService f16547o = new ThreadPoolExecutor(0, 1, 30, TimeUnit.SECONDS, new LinkedBlockingQueue(), new of.a("firebase-iid-executor"));

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class a extends BroadcastReceiver {

        /* renamed from: a  reason: collision with root package name */
        private w0 f16548a;

        public a(w0 w0Var) {
            this.f16548a = w0Var;
        }

        public void a() {
            if (w0.c()) {
                Log.d("FirebaseMessaging", "Connectivity change received registered");
            }
            this.f16548a.b().registerReceiver(this, new IntentFilter("android.net.conn.CONNECTIVITY_CHANGE"));
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            w0 w0Var = this.f16548a;
            if (w0Var == null || !w0Var.d()) {
                return;
            }
            if (w0.c()) {
                Log.d("FirebaseMessaging", "Connectivity changed. Starting background sync.");
            }
            this.f16548a.f16546i.l(this.f16548a, 0L);
            this.f16548a.b().unregisterReceiver(this);
            this.f16548a = null;
        }
    }

    public w0(FirebaseMessaging firebaseMessaging, long j10) {
        this.f16546i = firebaseMessaging;
        this.f16544d = j10;
        PowerManager.WakeLock newWakeLock = ((PowerManager) b().getSystemService("power")).newWakeLock(1, "fiid-sync");
        this.f16545e = newWakeLock;
        newWakeLock.setReferenceCounted(false);
    }

    static boolean c() {
        if (!Log.isLoggable("FirebaseMessaging", 3)) {
            return false;
        }
        return true;
    }

    Context b() {
        return this.f16546i.m();
    }

    boolean d() {
        NetworkInfo networkInfo;
        ConnectivityManager connectivityManager = (ConnectivityManager) b().getSystemService("connectivity");
        if (connectivityManager != null) {
            networkInfo = connectivityManager.getActiveNetworkInfo();
        } else {
            networkInfo = null;
        }
        if (networkInfo != null && networkInfo.isConnected()) {
            return true;
        }
        return false;
    }

    boolean e() {
        try {
            if (this.f16546i.k() == null) {
                Log.e("FirebaseMessaging", "Token retrieval failed: null");
                return false;
            } else if (Log.isLoggable("FirebaseMessaging", 3)) {
                Log.d("FirebaseMessaging", "Token successfully retrieved");
                return true;
            } else {
                return true;
            }
        } catch (IOException e10) {
            if (c0.h(e10.getMessage())) {
                Log.w("FirebaseMessaging", "Token retrieval failed: " + e10.getMessage() + ". Will retry token retrieval");
                return false;
            } else if (e10.getMessage() == null) {
                Log.w("FirebaseMessaging", "Token retrieval failed without exception message. Will retry token retrieval");
                return false;
            } else {
                throw e10;
            }
        } catch (SecurityException unused) {
            Log.w("FirebaseMessaging", "Token retrieval failed with SecurityException. Will retry token retrieval");
            return false;
        }
    }

    @Override // java.lang.Runnable
    public void run() {
        if (s0.b().e(b())) {
            this.f16545e.acquire();
        }
        try {
            try {
                this.f16546i.y(true);
                if (!this.f16546i.x()) {
                    this.f16546i.y(false);
                    if (!s0.b().e(b())) {
                        return;
                    }
                } else if (s0.b().d(b()) && !d()) {
                    new a(this).a();
                    if (!s0.b().e(b())) {
                        return;
                    }
                } else {
                    if (e()) {
                        this.f16546i.y(false);
                    } else {
                        this.f16546i.C(this.f16544d);
                    }
                    if (!s0.b().e(b())) {
                        return;
                    }
                }
                this.f16545e.release();
            } catch (IOException e10) {
                Log.e("FirebaseMessaging", "Topic sync or token retrieval failed on hard failure exceptions: " + e10.getMessage() + ". Won't retry the operation.");
                this.f16546i.y(false);
                if (s0.b().e(b())) {
                    this.f16545e.release();
                }
            }
        } catch (Throwable th2) {
            if (s0.b().e(b())) {
                this.f16545e.release();
            }
            throw th2;
        }
    }
}
