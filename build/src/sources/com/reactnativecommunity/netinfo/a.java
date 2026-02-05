package com.reactnativecommunity.netinfo;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import android.os.Handler;
import dm.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: b  reason: collision with root package name */
    private final Context f17409b;

    /* renamed from: c  reason: collision with root package name */
    private final InterfaceC0212a f17410c;

    /* renamed from: e  reason: collision with root package name */
    private Handler f17412e;

    /* renamed from: a  reason: collision with root package name */
    private final c f17408a = new c();

    /* renamed from: d  reason: collision with root package name */
    private final Runnable f17411d = new b();

    /* renamed from: f  reason: collision with root package name */
    private boolean f17413f = false;

    /* renamed from: com.reactnativecommunity.netinfo.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0212a {
        void onAmazonFireDeviceConnectivityChanged(boolean z10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class b implements Runnable {
        @Override // java.lang.Runnable
        public void run() {
            if (!a.this.f17413f) {
                return;
            }
            a.this.f17409b.sendBroadcast(new Intent("com.amazon.tv.networkmonitor.CONNECTIVITY_CHECK"));
            a.this.f17412e.postDelayed(a.this.f17411d, 10000L);
        }

        private b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends BroadcastReceiver {

        /* renamed from: a  reason: collision with root package name */
        boolean f17415a;

        /* renamed from: b  reason: collision with root package name */
        private Boolean f17416b;

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
            Boolean bool = this.f17416b;
            if (bool == null || bool.booleanValue() != z10) {
                this.f17416b = Boolean.valueOf(z10);
                a.this.f17410c.onAmazonFireDeviceConnectivityChanged(z10);
            }
        }

        private c() {
            this.f17415a = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Context context, InterfaceC0212a interfaceC0212a) {
        this.f17409b = context;
        this.f17410c = interfaceC0212a;
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
        if (this.f17408a.f17415a) {
            return;
        }
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction("com.amazon.tv.networkmonitor.INTERNET_DOWN");
        intentFilter.addAction("com.amazon.tv.networkmonitor.INTERNET_UP");
        d.a(this.f17409b, this.f17408a, intentFilter, false);
        this.f17408a.f17415a = true;
    }

    private void i() {
        if (this.f17413f) {
            return;
        }
        Handler handler = new Handler();
        this.f17412e = handler;
        this.f17413f = true;
        handler.post(this.f17411d);
    }

    private void j() {
        if (!this.f17413f) {
            return;
        }
        this.f17413f = false;
        this.f17412e.removeCallbacksAndMessages(null);
        this.f17412e = null;
    }

    private void l() {
        c cVar = this.f17408a;
        if (!cVar.f17415a) {
            return;
        }
        this.f17409b.unregisterReceiver(cVar);
        this.f17408a.f17415a = false;
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
