package com.google.android.exoplayer2;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Handler;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Context f12043a;

    /* renamed from: b  reason: collision with root package name */
    private final a f12044b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f12045c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a extends BroadcastReceiver implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final InterfaceC0152b f12046d;

        /* renamed from: e  reason: collision with root package name */
        private final Handler f12047e;

        public a(Handler handler, InterfaceC0152b interfaceC0152b) {
            this.f12047e = handler;
            this.f12046d = interfaceC0152b;
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            if ("android.media.AUDIO_BECOMING_NOISY".equals(intent.getAction())) {
                this.f12047e.post(this);
            }
        }

        @Override // java.lang.Runnable
        public void run() {
            if (b.this.f12045c) {
                this.f12046d.g();
            }
        }
    }

    /* renamed from: com.google.android.exoplayer2.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0152b {
        void g();
    }

    public b(Context context, Handler handler, InterfaceC0152b interfaceC0152b) {
        this.f12043a = context.getApplicationContext();
        this.f12044b = new a(handler, interfaceC0152b);
    }

    public void b(boolean z10) {
        if (z10 && !this.f12045c) {
            this.f12043a.registerReceiver(this.f12044b, new IntentFilter("android.media.AUDIO_BECOMING_NOISY"));
            this.f12045c = true;
        } else if (!z10 && this.f12045c) {
            this.f12043a.unregisterReceiver(this.f12044b);
            this.f12045c = false;
        }
    }
}
