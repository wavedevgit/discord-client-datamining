package com.reactnativecommunity.netinfo;

import am.d;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import android.os.Handler;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: b  reason: collision with root package name */
    private final Context f18035b;

    /* renamed from: c  reason: collision with root package name */
    private final InterfaceC0213a f18036c;

    /* renamed from: e  reason: collision with root package name */
    private Handler f18038e;

    /* renamed from: a  reason: collision with root package name */
    private final c f18034a = new c();

    /* renamed from: d  reason: collision with root package name */
    private final Runnable f18037d = new b();

    /* renamed from: f  reason: collision with root package name */
    private boolean f18039f = false;

    /* renamed from: com.reactnativecommunity.netinfo.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0213a {
        void onAmazonFireDeviceConnectivityChanged(boolean z10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class b implements Runnable {
        @Override // java.lang.Runnable
        public void run() {
            if (!a.this.f18039f) {
                return;
            }
            a.this.f18035b.sendBroadcast(new Intent("com.amazon.tv.networkmonitor.CONNECTIVITY_CHECK"));
            a.this.f18038e.postDelayed(a.this.f18037d, 10000L);
        }

        private b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends BroadcastReceiver {

        /* renamed from: a  reason: collision with root package name */
        boolean f18041a;

        /* renamed from: b  reason: collision with root package name */
        private Boolean f18042b;

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            String action;
            boolean z10;
            if (intent == null) {
                action = null;
            } else {
                action = intent.getAction();
            }
            if ("com.amazon.tv.networkmonitor.INTERNET_DOWN".equals(action)) {
                z10 = false;
            } else if ("com.amazon.tv.networkmonitor.INTERNET_UP".equals(action)) {
                z10 = true;
            } else {
                return;
            }
            Boolean bool = this.f18042b;
            if (bool == null || bool.booleanValue() != z10) {
                this.f18042b = Boolean.valueOf(z10);
                a.this.f18036c.onAmazonFireDeviceConnectivityChanged(z10);
            }
        }

        private c() {
            this.f18041a = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Context context, InterfaceC0213a interfaceC0213a) {
        this.f18035b = context;
        this.f18036c = interfaceC0213a;
    }

    private boolean f() {
        if (Build.MANUFACTURER.equals("Amazon")) {
            String str = Build.MODEL;
            if (str.startsWith("AF") || str.startsWith("KF")) {
                return true;
            }
            return false;
        }
        return false;
    }

    private void h() {
        if (this.f18034a.f18041a) {
            return;
        }
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction("com.amazon.tv.networkmonitor.INTERNET_DOWN");
        intentFilter.addAction("com.amazon.tv.networkmonitor.INTERNET_UP");
        d.a(this.f18035b, this.f18034a, intentFilter, false);
        this.f18034a.f18041a = true;
    }

    private void i() {
        if (this.f18039f) {
            return;
        }
        Handler handler = new Handler();
        this.f18038e = handler;
        this.f18039f = true;
        handler.post(this.f18037d);
    }

    private void j() {
        if (!this.f18039f) {
            return;
        }
        this.f18039f = false;
        this.f18038e.removeCallbacksAndMessages(null);
        this.f18038e = null;
    }

    private void l() {
        c cVar = this.f18034a;
        if (!cVar.f18041a) {
            return;
        }
        this.f18035b.unregisterReceiver(cVar);
        this.f18034a.f18041a = false;
    }

    public void g() {
        if (!f()) {
            return;
        }
        h();
        i();
    }

    public void k() {
        if (!f()) {
            return;
        }
        j();
        l();
    }
}
