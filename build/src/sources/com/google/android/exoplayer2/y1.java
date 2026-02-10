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
    private final Context f14220a;

    /* renamed from: b  reason: collision with root package name */
    private final Handler f14221b;

    /* renamed from: c  reason: collision with root package name */
    private final b f14222c;

    /* renamed from: d  reason: collision with root package name */
    private final AudioManager f14223d;

    /* renamed from: e  reason: collision with root package name */
    private c f14224e;

    /* renamed from: f  reason: collision with root package name */
    private int f14225f;

    /* renamed from: g  reason: collision with root package name */
    private int f14226g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f14227h;

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
            Handler handler = y1.this.f14221b;
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
        this.f14220a = applicationContext;
        this.f14221b = handler;
        this.f14222c = bVar;
        AudioManager audioManager = (AudioManager) oe.a.i((AudioManager) applicationContext.getSystemService(MediaStreamTrack.AUDIO_TRACK_KIND));
        this.f14223d = audioManager;
        this.f14225f = 3;
        this.f14226g = f(audioManager, 3);
        this.f14227h = e(audioManager, this.f14225f);
        c cVar = new c();
        try {
            applicationContext.registerReceiver(cVar, new IntentFilter("android.media.VOLUME_CHANGED_ACTION"));
            this.f14224e = cVar;
        } catch (RuntimeException e10) {
            oe.y.j("StreamVolumeManager", "Error registering stream volume receiver", e10);
        }
    }

    private static boolean e(AudioManager audioManager, int i10) {
        if (oe.w0.f39037a >= 23) {
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
            oe.y.j("StreamVolumeManager", "Could not retrieve stream volume for stream type " + i10, e10);
            return audioManager.getStreamMaxVolume(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void i() {
        int f10 = f(this.f14223d, this.f14225f);
        boolean e10 = e(this.f14223d, this.f14225f);
        if (this.f14226g == f10 && this.f14227h == e10) {
            return;
        }
        this.f14226g = f10;
        this.f14227h = e10;
        this.f14222c.w(f10, e10);
    }

    public int c() {
        return this.f14223d.getStreamMaxVolume(this.f14225f);
    }

    public int d() {
        if (oe.w0.f39037a >= 28) {
            return this.f14223d.getStreamMinVolume(this.f14225f);
        }
        return 0;
    }

    public void g() {
        c cVar = this.f14224e;
        if (cVar != null) {
            try {
                this.f14220a.unregisterReceiver(cVar);
            } catch (RuntimeException e10) {
                oe.y.j("StreamVolumeManager", "Error unregistering stream volume receiver", e10);
            }
            this.f14224e = null;
        }
    }

    public void h(int i10) {
        if (this.f14225f == i10) {
            return;
        }
        this.f14225f = i10;
        i();
        this.f14222c.t(i10);
    }
}
