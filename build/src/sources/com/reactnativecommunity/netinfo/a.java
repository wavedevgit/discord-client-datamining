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
    private final Context f17003b;

    /* renamed from: c  reason: collision with root package name */
    private final InterfaceC0194a f17004c;

    /* renamed from: e  reason: collision with root package name */
    private Handler f17006e;

    /* renamed from: a  reason: collision with root package name */
    private final c f17002a = new c();

    /* renamed from: d  reason: collision with root package name */
    private final Runnable f17005d = new b();

    /* renamed from: f  reason: collision with root package name */
    private boolean f17007f = false;

    /* renamed from: com.reactnativecommunity.netinfo.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0194a {
        void onAmazonFireDeviceConnectivityChanged(boolean z10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class b implements Runnable {
        @Override // java.lang.Runnable
        public void run() {
            if (!a.this.f17007f) {
                return;
            }
            a.this.f17003b.sendBroadcast(new Intent("com.amazon.tv.networkmonitor.CONNECTIVITY_CHECK"));
            a.this.f17006e.postDelayed(a.this.f17005d, 10000L);
        }

        private b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends BroadcastReceiver {

        /* renamed from: a  reason: collision with root package name */
        boolean f17009a;

        /* renamed from: b  reason: collision with root package name */
        private Boolean f17010b;

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
            Boolean bool = this.f17010b;
            if (bool == null || bool.booleanValue() != z10) {
                this.f17010b = Boolean.valueOf(z10);
                a.this.f17004c.onAmazonFireDeviceConnectivityChanged(z10);
            }
        }

        private c() {
            this.f17009a = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Context context, InterfaceC0194a interfaceC0194a) {
        this.f17003b = context;
        this.f17004c = interfaceC0194a;
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
        if (this.f17002a.f17009a) {
            return;
        }
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction("com.amazon.tv.networkmonitor.INTERNET_DOWN");
        intentFilter.addAction("com.amazon.tv.networkmonitor.INTERNET_UP");
        d.a(this.f17003b, this.f17002a, intentFilter, false);
        this.f17002a.f17009a = true;
    }

    private void i() {
        if (this.f17007f) {
            return;
        }
        Handler handler = new Handler();
        this.f17006e = handler;
        this.f17007f = true;
        handler.post(this.f17005d);
    }

    private void j() {
        if (!this.f17007f) {
            return;
        }
        this.f17007f = false;
        this.f17006e.removeCallbacksAndMessages(null);
        this.f17006e = null;
    }

    private void l() {
        c cVar = this.f17002a;
        if (!cVar.f17009a) {
            return;
        }
        this.f17003b.unregisterReceiver(cVar);
        this.f17002a.f17009a = false;
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
