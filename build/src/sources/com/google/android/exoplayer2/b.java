package com.google.android.exoplayer2;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Handler;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Context f13075a;

    /* renamed from: b  reason: collision with root package name */
    private final a f13076b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f13077c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a extends BroadcastReceiver implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final InterfaceC0171b f13078d;

        /* renamed from: e  reason: collision with root package name */
        private final Handler f13079e;

        public a(Handler handler, InterfaceC0171b interfaceC0171b) {
            this.f13079e = handler;
            this.f13078d = interfaceC0171b;
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            if ("android.media.AUDIO_BECOMING_NOISY".equals(intent.getAction())) {
                this.f13079e.post(this);
            }
        }

        @Override // java.lang.Runnable
        public void run() {
            if (b.this.f13077c) {
                this.f13078d.g();
            }
        }
    }

    /* renamed from: com.google.android.exoplayer2.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0171b {
        void g();
    }

    public b(Context context, Handler handler, InterfaceC0171b interfaceC0171b) {
        this.f13075a = context.getApplicationContext();
        this.f13076b = new a(handler, interfaceC0171b);
    }

    public void b(boolean z10) {
        if (z10 && !this.f13077c) {
            this.f13075a.registerReceiver(this.f13076b, new IntentFilter("android.media.AUDIO_BECOMING_NOISY"));
            this.f13077c = true;
        } else if (!z10 && this.f13077c) {
            this.f13075a.unregisterReceiver(this.f13076b);
            this.f13077c = false;
        }
    }
}
