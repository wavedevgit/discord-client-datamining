package com.google.android.exoplayer2;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Handler;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Context f12467a;

    /* renamed from: b  reason: collision with root package name */
    private final a f12468b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f12469c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a extends BroadcastReceiver implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final InterfaceC0188b f12470d;

        /* renamed from: e  reason: collision with root package name */
        private final Handler f12471e;

        public a(Handler handler, InterfaceC0188b interfaceC0188b) {
            this.f12471e = handler;
            this.f12470d = interfaceC0188b;
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            if ("android.media.AUDIO_BECOMING_NOISY".equals(intent.getAction())) {
                this.f12471e.post(this);
            }
        }

        @Override // java.lang.Runnable
        public void run() {
            if (b.this.f12469c) {
                this.f12470d.g();
            }
        }
    }

    /* renamed from: com.google.android.exoplayer2.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0188b {
        void g();
    }

    public b(Context context, Handler handler, InterfaceC0188b interfaceC0188b) {
        this.f12467a = context.getApplicationContext();
        this.f12468b = new a(handler, interfaceC0188b);
    }

    public void b(boolean z10) {
        if (z10 && !this.f12469c) {
            this.f12467a.registerReceiver(this.f12468b, new IntentFilter("android.media.AUDIO_BECOMING_NOISY"));
            this.f12469c = true;
        } else if (!z10 && this.f12469c) {
            this.f12467a.unregisterReceiver(this.f12468b);
            this.f12469c = false;
        }
    }
}
