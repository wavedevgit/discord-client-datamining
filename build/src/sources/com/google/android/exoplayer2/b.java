package com.google.android.exoplayer2;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Handler;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Context f12428a;

    /* renamed from: b  reason: collision with root package name */
    private final a f12429b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f12430c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a extends BroadcastReceiver implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final InterfaceC0168b f12431d;

        /* renamed from: e  reason: collision with root package name */
        private final Handler f12432e;

        public a(Handler handler, InterfaceC0168b interfaceC0168b) {
            this.f12432e = handler;
            this.f12431d = interfaceC0168b;
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            if ("android.media.AUDIO_BECOMING_NOISY".equals(intent.getAction())) {
                this.f12432e.post(this);
            }
        }

        @Override // java.lang.Runnable
        public void run() {
            if (b.this.f12430c) {
                this.f12431d.g();
            }
        }
    }

    /* renamed from: com.google.android.exoplayer2.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0168b {
        void g();
    }

    public b(Context context, Handler handler, InterfaceC0168b interfaceC0168b) {
        this.f12428a = context.getApplicationContext();
        this.f12429b = new a(handler, interfaceC0168b);
    }

    public void b(boolean z10) {
        if (z10 && !this.f12430c) {
            this.f12428a.registerReceiver(this.f12429b, new IntentFilter("android.media.AUDIO_BECOMING_NOISY"));
            this.f12430c = true;
        } else if (!z10 && this.f12430c) {
            this.f12428a.unregisterReceiver(this.f12429b);
            this.f12430c = false;
        }
    }
}
