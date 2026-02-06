package com.reactnativecommunity.netinfo;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import android.os.Handler;
import fm.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: b  reason: collision with root package name */
    private final Context f17389b;

    /* renamed from: c  reason: collision with root package name */
    private final InterfaceC0204a f17390c;

    /* renamed from: e  reason: collision with root package name */
    private Handler f17392e;

    /* renamed from: a  reason: collision with root package name */
    private final c f17388a = new c();

    /* renamed from: d  reason: collision with root package name */
    private final Runnable f17391d = new b();

    /* renamed from: f  reason: collision with root package name */
    private boolean f17393f = false;

    /* renamed from: com.reactnativecommunity.netinfo.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0204a {
        void onAmazonFireDeviceConnectivityChanged(boolean z10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class b implements Runnable {
        @Override // java.lang.Runnable
        public void run() {
            if (!a.this.f17393f) {
                return;
            }
            a.this.f17389b.sendBroadcast(new Intent("com.amazon.tv.networkmonitor.CONNECTIVITY_CHECK"));
            a.this.f17392e.postDelayed(a.this.f17391d, 10000L);
        }

        private b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends BroadcastReceiver {

        /* renamed from: a  reason: collision with root package name */
        boolean f17395a;

        /* renamed from: b  reason: collision with root package name */
        private Boolean f17396b;

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
            Boolean bool = this.f17396b;
            if (bool == null || bool.booleanValue() != z10) {
                this.f17396b = Boolean.valueOf(z10);
                a.this.f17390c.onAmazonFireDeviceConnectivityChanged(z10);
            }
        }

        private c() {
            this.f17395a = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Context context, InterfaceC0204a interfaceC0204a) {
        this.f17389b = context;
        this.f17390c = interfaceC0204a;
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
        if (this.f17388a.f17395a) {
            return;
        }
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction("com.amazon.tv.networkmonitor.INTERNET_DOWN");
        intentFilter.addAction("com.amazon.tv.networkmonitor.INTERNET_UP");
        d.a(this.f17389b, this.f17388a, intentFilter, false);
        this.f17388a.f17395a = true;
    }

    private void i() {
        if (this.f17393f) {
            return;
        }
        Handler handler = new Handler();
        this.f17392e = handler;
        this.f17393f = true;
        handler.post(this.f17391d);
    }

    private void j() {
        if (!this.f17393f) {
            return;
        }
        this.f17393f = false;
        this.f17392e.removeCallbacksAndMessages(null);
        this.f17392e = null;
    }

    private void l() {
        c cVar = this.f17388a;
        if (!cVar.f17395a) {
            return;
        }
        this.f17389b.unregisterReceiver(cVar);
        this.f17388a.f17395a = false;
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
