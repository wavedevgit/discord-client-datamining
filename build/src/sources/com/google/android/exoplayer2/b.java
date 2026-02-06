package com.google.android.exoplayer2;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Handler;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Context f12327a;

    /* renamed from: b  reason: collision with root package name */
    private final a f12328b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f12329c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a extends BroadcastReceiver implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final InterfaceC0161b f12330d;

        /* renamed from: e  reason: collision with root package name */
        private final Handler f12331e;

        public a(Handler handler, InterfaceC0161b interfaceC0161b) {
            this.f12331e = handler;
            this.f12330d = interfaceC0161b;
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            if ("android.media.AUDIO_BECOMING_NOISY".equals(intent.getAction())) {
                this.f12331e.post(this);
            }
        }

        @Override // java.lang.Runnable
        public void run() {
            if (b.this.f12329c) {
                this.f12330d.g();
            }
        }
    }

    /* renamed from: com.google.android.exoplayer2.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0161b {
        void g();
    }

    public b(Context context, Handler handler, InterfaceC0161b interfaceC0161b) {
        this.f12327a = context.getApplicationContext();
        this.f12328b = new a(handler, interfaceC0161b);
    }

    public void b(boolean z10) {
        if (z10 && !this.f12329c) {
            this.f12327a.registerReceiver(this.f12328b, new IntentFilter("android.media.AUDIO_BECOMING_NOISY"));
            this.f12329c = true;
        } else if (!z10 && this.f12329c) {
            this.f12327a.unregisterReceiver(this.f12328b);
            this.f12329c = false;
        }
    }
}
