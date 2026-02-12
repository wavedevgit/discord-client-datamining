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
    private final Context f14221a;

    /* renamed from: b  reason: collision with root package name */
    private final Handler f14222b;

    /* renamed from: c  reason: collision with root package name */
    private final b f14223c;

    /* renamed from: d  reason: collision with root package name */
    private final AudioManager f14224d;

    /* renamed from: e  reason: collision with root package name */
    private c f14225e;

    /* renamed from: f  reason: collision with root package name */
    private int f14226f;

    /* renamed from: g  reason: collision with root package name */
    private int f14227g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f14228h;

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
            Handler handler = y1.this.f14222b;
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
        this.f14221a = applicationContext;
        this.f14222b = handler;
        this.f14223c = bVar;
        AudioManager audioManager = (AudioManager) oe.a.i((AudioManager) applicationContext.getSystemService(MediaStreamTrack.AUDIO_TRACK_KIND));
        this.f14224d = audioManager;
        this.f14226f = 3;
        this.f14227g = f(audioManager, 3);
        this.f14228h = e(audioManager, this.f14226f);
        c cVar = new c();
        try {
            applicationContext.registerReceiver(cVar, new IntentFilter("android.media.VOLUME_CHANGED_ACTION"));
            this.f14225e = cVar;
        } catch (RuntimeException e10) {
            oe.y.j("StreamVolumeManager", "Error registering stream volume receiver", e10);
        }
    }

    private static boolean e(AudioManager audioManager, int i10) {
        if (oe.w0.f39038a >= 23) {
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
        int f10 = f(this.f14224d, this.f14226f);
        boolean e10 = e(this.f14224d, this.f14226f);
        if (this.f14227g == f10 && this.f14228h == e10) {
            return;
        }
        this.f14227g = f10;
        this.f14228h = e10;
        this.f14223c.w(f10, e10);
    }

    public int c() {
        return this.f14224d.getStreamMaxVolume(this.f14226f);
    }

    public int d() {
        if (oe.w0.f39038a >= 28) {
            return this.f14224d.getStreamMinVolume(this.f14226f);
        }
        return 0;
    }

    public void g() {
        c cVar = this.f14225e;
        if (cVar != null) {
            try {
                this.f14221a.unregisterReceiver(cVar);
            } catch (RuntimeException e10) {
                oe.y.j("StreamVolumeManager", "Error unregistering stream volume receiver", e10);
            }
            this.f14225e = null;
        }
    }

    public void h(int i10) {
        if (this.f14226f == i10) {
            return;
        }
        this.f14226f = i10;
        i();
        this.f14223c.t(i10);
    }
}
