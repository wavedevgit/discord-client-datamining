package com.google.android.exoplayer2;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Handler;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Context f13044a;

    /* renamed from: b  reason: collision with root package name */
    private final a f13045b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f13046c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a extends BroadcastReceiver implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final InterfaceC0165b f13047d;

        /* renamed from: e  reason: collision with root package name */
        private final Handler f13048e;

        public a(Handler handler, InterfaceC0165b interfaceC0165b) {
            this.f13048e = handler;
            this.f13047d = interfaceC0165b;
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            if ("android.media.AUDIO_BECOMING_NOISY".equals(intent.getAction())) {
                this.f13048e.post(this);
            }
        }

        @Override // java.lang.Runnable
        public void run() {
            if (b.this.f13046c) {
                this.f13047d.g();
            }
        }
    }

    /* renamed from: com.google.android.exoplayer2.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0165b {
        void g();
    }

    public b(Context context, Handler handler, InterfaceC0165b interfaceC0165b) {
        this.f13044a = context.getApplicationContext();
        this.f13045b = new a(handler, interfaceC0165b);
    }

    public void b(boolean z10) {
        if (z10 && !this.f13046c) {
            this.f13044a.registerReceiver(this.f13045b, new IntentFilter("android.media.AUDIO_BECOMING_NOISY"));
            this.f13046c = true;
        } else if (!z10 && this.f13046c) {
            this.f13044a.unregisterReceiver(this.f13045b);
            this.f13046c = false;
        }
    }
}
