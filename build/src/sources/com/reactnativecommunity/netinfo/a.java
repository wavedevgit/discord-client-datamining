package com.reactnativecommunity.netinfo;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import android.os.Handler;
import im.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: b  reason: collision with root package name */
    private final Context f18278b;

    /* renamed from: c  reason: collision with root package name */
    private final InterfaceC0212a f18279c;

    /* renamed from: e  reason: collision with root package name */
    private Handler f18281e;

    /* renamed from: a  reason: collision with root package name */
    private final c f18277a = new c();

    /* renamed from: d  reason: collision with root package name */
    private final Runnable f18280d = new b();

    /* renamed from: f  reason: collision with root package name */
    private boolean f18282f = false;

    /* renamed from: com.reactnativecommunity.netinfo.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0212a {
        void onAmazonFireDeviceConnectivityChanged(boolean z10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class b implements Runnable {
        @Override // java.lang.Runnable
        public void run() {
            if (!a.this.f18282f) {
                return;
            }
            a.this.f18278b.sendBroadcast(new Intent("com.amazon.tv.networkmonitor.CONNECTIVITY_CHECK"));
            a.this.f18281e.postDelayed(a.this.f18280d, 10000L);
        }

        private b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends BroadcastReceiver {

        /* renamed from: a  reason: collision with root package name */
        boolean f18284a;

        /* renamed from: b  reason: collision with root package name */
        private Boolean f18285b;

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
            Boolean bool = this.f18285b;
            if (bool == null || bool.booleanValue() != z10) {
                this.f18285b = Boolean.valueOf(z10);
                a.this.f18279c.onAmazonFireDeviceConnectivityChanged(z10);
            }
        }

        private c() {
            this.f18284a = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Context context, InterfaceC0212a interfaceC0212a) {
        this.f18278b = context;
        this.f18279c = interfaceC0212a;
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
        if (this.f18277a.f18284a) {
            return;
        }
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction("com.amazon.tv.networkmonitor.INTERNET_DOWN");
        intentFilter.addAction("com.amazon.tv.networkmonitor.INTERNET_UP");
        d.a(this.f18278b, this.f18277a, intentFilter, false);
        this.f18277a.f18284a = true;
    }

    private void i() {
        if (this.f18282f) {
            return;
        }
        Handler handler = new Handler();
        this.f18281e = handler;
        this.f18282f = true;
        handler.post(this.f18280d);
    }

    private void j() {
        if (!this.f18282f) {
            return;
        }
        this.f18282f = false;
        this.f18281e.removeCallbacksAndMessages(null);
        this.f18281e = null;
    }

    private void l() {
        c cVar = this.f18277a;
        if (!cVar.f18284a) {
            return;
        }
        this.f18278b.unregisterReceiver(cVar);
        this.f18277a.f18284a = false;
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
