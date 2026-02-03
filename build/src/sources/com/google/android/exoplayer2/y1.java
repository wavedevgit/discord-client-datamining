package com.google.android.exoplayer2;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.media.AudioManager;
import android.os.Handler;
import org.webrtc.MediaStreamTrack;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class y1 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f14189a;

    /* renamed from: b  reason: collision with root package name */
    private final Handler f14190b;

    /* renamed from: c  reason: collision with root package name */
    private final b f14191c;

    /* renamed from: d  reason: collision with root package name */
    private final AudioManager f14192d;

    /* renamed from: e  reason: collision with root package name */
    private c f14193e;

    /* renamed from: f  reason: collision with root package name */
    private int f14194f;

    /* renamed from: g  reason: collision with root package name */
    private int f14195g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f14196h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void t(int i10);

        void w(int i10, boolean z10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class c extends BroadcastReceiver {
        private c() {
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            Handler handler = y1.this.f14190b;
            final y1 y1Var = y1.this;
            handler.post(new Runnable() { // from class: com.google.android.exoplayer2.z1
                @Override // java.lang.Runnable
                public final void run() {
                    y1.this.i();
                }
            });
        }
    }

    public y1(Context context, Handler handler, b bVar) {
        Context applicationContext = context.getApplicationContext();
        this.f14189a = applicationContext;
        this.f14190b = handler;
        this.f14191c = bVar;
        AudioManager audioManager = (AudioManager) ne.a.i((AudioManager) applicationContext.getSystemService(MediaStreamTrack.AUDIO_TRACK_KIND));
        this.f14192d = audioManager;
        this.f14194f = 3;
        this.f14195g = f(audioManager, 3);
        this.f14196h = e(audioManager, this.f14194f);
        c cVar = new c();
        try {
            applicationContext.registerReceiver(cVar, new IntentFilter("android.media.VOLUME_CHANGED_ACTION"));
            this.f14193e = cVar;
        } catch (RuntimeException e10) {
            ne.y.j("StreamVolumeManager", "Error registering stream volume receiver", e10);
        }
    }

    private static boolean e(AudioManager audioManager, int i10) {
        if (ne.w0.f40158a >= 23) {
            return audioManager.isStreamMute(i10);
        }
        if (f(audioManager, i10) == 0) {
            return true;
        }
        return false;
    }

    private static int f(AudioManager audioManager, int i10) {
        try {
            return audioManager.getStreamVolume(i10);
        } catch (RuntimeException e10) {
            ne.y.j("StreamVolumeManager", "Could not retrieve stream volume for stream type " + i10, e10);
            return audioManager.getStreamMaxVolume(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void i() {
        int f10 = f(this.f14192d, this.f14194f);
        boolean e10 = e(this.f14192d, this.f14194f);
        if (this.f14195g == f10 && this.f14196h == e10) {
            return;
        }
        this.f14195g = f10;
        this.f14196h = e10;
        this.f14191c.w(f10, e10);
    }

    public int c() {
        return this.f14192d.getStreamMaxVolume(this.f14194f);
    }

    public int d() {
        if (ne.w0.f40158a >= 28) {
            return this.f14192d.getStreamMinVolume(this.f14194f);
        }
        return 0;
    }

    public void g() {
        c cVar = this.f14193e;
        if (cVar != null) {
            try {
                this.f14189a.unregisterReceiver(cVar);
            } catch (RuntimeException e10) {
                ne.y.j("StreamVolumeManager", "Error unregistering stream volume receiver", e10);
            }
            this.f14193e = null;
        }
    }

    public void h(int i10) {
        if (this.f14194f == i10) {
            return;
        }
        this.f14194f = i10;
        i();
        this.f14191c.t(i10);
    }
}
