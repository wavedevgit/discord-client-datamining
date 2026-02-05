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
    private final Context f13542a;

    /* renamed from: b  reason: collision with root package name */
    private final Handler f13543b;

    /* renamed from: c  reason: collision with root package name */
    private final b f13544c;

    /* renamed from: d  reason: collision with root package name */
    private final AudioManager f13545d;

    /* renamed from: e  reason: collision with root package name */
    private c f13546e;

    /* renamed from: f  reason: collision with root package name */
    private int f13547f;

    /* renamed from: g  reason: collision with root package name */
    private int f13548g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f13549h;

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
            Handler handler = y1.this.f13543b;
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
        this.f13542a = applicationContext;
        this.f13543b = handler;
        this.f13544c = bVar;
        AudioManager audioManager = (AudioManager) ne.a.i((AudioManager) applicationContext.getSystemService(MediaStreamTrack.AUDIO_TRACK_KIND));
        this.f13545d = audioManager;
        this.f13547f = 3;
        this.f13548g = f(audioManager, 3);
        this.f13549h = e(audioManager, this.f13547f);
        c cVar = new c();
        try {
            applicationContext.registerReceiver(cVar, new IntentFilter("android.media.VOLUME_CHANGED_ACTION"));
            this.f13546e = cVar;
        } catch (RuntimeException e10) {
            ne.y.j("StreamVolumeManager", "Error registering stream volume receiver", e10);
        }
    }

    private static boolean e(AudioManager audioManager, int i10) {
        if (ne.w0.f39657a >= 23) {
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
        int f10 = f(this.f13545d, this.f13547f);
        boolean e10 = e(this.f13545d, this.f13547f);
        if (this.f13548g == f10 && this.f13549h == e10) {
            return;
        }
        this.f13548g = f10;
        this.f13549h = e10;
        this.f13544c.w(f10, e10);
    }

    public int c() {
        return this.f13545d.getStreamMaxVolume(this.f13547f);
    }

    public int d() {
        if (ne.w0.f39657a >= 28) {
            return this.f13545d.getStreamMinVolume(this.f13547f);
        }
        return 0;
    }

    public void g() {
        c cVar = this.f13546e;
        if (cVar != null) {
            try {
                this.f13542a.unregisterReceiver(cVar);
            } catch (RuntimeException e10) {
                ne.y.j("StreamVolumeManager", "Error unregistering stream volume receiver", e10);
            }
            this.f13546e = null;
        }
    }

    public void h(int i10) {
        if (this.f13547f == i10) {
            return;
        }
        this.f13547f = i10;
        i();
        this.f13544c.t(i10);
    }
}
