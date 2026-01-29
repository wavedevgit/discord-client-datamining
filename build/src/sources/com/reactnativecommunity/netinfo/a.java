package com.reactnativecommunity.netinfo;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import android.os.Handler;
import zl.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: b  reason: collision with root package name */
    private final Context f18402b;

    /* renamed from: c  reason: collision with root package name */
    private final InterfaceC0208a f18403c;

    /* renamed from: e  reason: collision with root package name */
    private Handler f18405e;

    /* renamed from: a  reason: collision with root package name */
    private final c f18401a = new c();

    /* renamed from: d  reason: collision with root package name */
    private final Runnable f18404d = new b();

    /* renamed from: f  reason: collision with root package name */
    private boolean f18406f = false;

    /* renamed from: com.reactnativecommunity.netinfo.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0208a {
        void onAmazonFireDeviceConnectivityChanged(boolean z10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class b implements Runnable {
        @Override // java.lang.Runnable
        public void run() {
            if (!a.this.f18406f) {
                return;
            }
            a.this.f18402b.sendBroadcast(new Intent("com.amazon.tv.networkmonitor.CONNECTIVITY_CHECK"));
            a.this.f18405e.postDelayed(a.this.f18404d, 10000L);
        }

        private b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends BroadcastReceiver {

        /* renamed from: a  reason: collision with root package name */
        boolean f18408a;

        /* renamed from: b  reason: collision with root package name */
        private Boolean f18409b;

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
            Boolean bool = this.f18409b;
            if (bool == null || bool.booleanValue() != z10) {
                this.f18409b = Boolean.valueOf(z10);
                a.this.f18403c.onAmazonFireDeviceConnectivityChanged(z10);
            }
        }

        private c() {
            this.f18408a = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Context context, InterfaceC0208a interfaceC0208a) {
        this.f18402b = context;
        this.f18403c = interfaceC0208a;
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
        if (this.f18401a.f18408a) {
            return;
        }
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction("com.amazon.tv.networkmonitor.INTERNET_DOWN");
        intentFilter.addAction("com.amazon.tv.networkmonitor.INTERNET_UP");
        d.a(this.f18402b, this.f18401a, intentFilter, false);
        this.f18401a.f18408a = true;
    }

    private void i() {
        if (this.f18406f) {
            return;
        }
        Handler handler = new Handler();
        this.f18405e = handler;
        this.f18406f = true;
        handler.post(this.f18404d);
    }

    private void j() {
        if (!this.f18406f) {
            return;
        }
        this.f18406f = false;
        this.f18405e.removeCallbacksAndMessages(null);
        this.f18405e = null;
    }

    private void l() {
        c cVar = this.f18401a;
        if (!cVar.f18408a) {
            return;
        }
        this.f18402b.unregisterReceiver(cVar);
        this.f18401a.f18408a = false;
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
