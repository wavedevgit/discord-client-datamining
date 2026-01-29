package com.google.android.exoplayer2;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Handler;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Context f13446a;

    /* renamed from: b  reason: collision with root package name */
    private final a f13447b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f13448c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a extends BroadcastReceiver implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final InterfaceC0166b f13449d;

        /* renamed from: e  reason: collision with root package name */
        private final Handler f13450e;

        public a(Handler handler, InterfaceC0166b interfaceC0166b) {
            this.f13450e = handler;
            this.f13449d = interfaceC0166b;
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            if ("android.media.AUDIO_BECOMING_NOISY".equals(intent.getAction())) {
                this.f13450e.post(this);
            }
        }

        @Override // java.lang.Runnable
        public void run() {
            if (b.this.f13448c) {
                this.f13449d.g();
            }
        }
    }

    /* renamed from: com.google.android.exoplayer2.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0166b {
        void g();
    }

    public b(Context context, Handler handler, InterfaceC0166b interfaceC0166b) {
        this.f13446a = context.getApplicationContext();
        this.f13447b = new a(handler, interfaceC0166b);
    }

    public void b(boolean z10) {
        if (z10 && !this.f13448c) {
            this.f13446a.registerReceiver(this.f13447b, new IntentFilter("android.media.AUDIO_BECOMING_NOISY"));
            this.f13448c = true;
        } else if (!z10 && this.f13448c) {
            this.f13446a.unregisterReceiver(this.f13447b);
            this.f13448c = false;
        }
    }
}
