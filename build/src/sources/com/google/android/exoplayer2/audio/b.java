package com.google.android.exoplayer2.audio;

import android.content.BroadcastReceiver;
import android.content.ContentResolver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.database.ContentObserver;
import android.media.AudioDeviceCallback;
import android.media.AudioDeviceInfo;
import android.media.AudioManager;
import android.net.Uri;
import android.os.Handler;
import ne.w0;
import org.webrtc.MediaStreamTrack;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Context f12847a;

    /* renamed from: b  reason: collision with root package name */
    private final f f12848b;

    /* renamed from: c  reason: collision with root package name */
    private final Handler f12849c;

    /* renamed from: d  reason: collision with root package name */
    private final c f12850d;

    /* renamed from: e  reason: collision with root package name */
    private final BroadcastReceiver f12851e;

    /* renamed from: f  reason: collision with root package name */
    private final d f12852f;

    /* renamed from: g  reason: collision with root package name */
    com.google.android.exoplayer2.audio.a f12853g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f12854h;

    /* renamed from: com.google.android.exoplayer2.audio.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0169b {
        public static void a(Context context, AudioDeviceCallback audioDeviceCallback, Handler handler) {
            ((AudioManager) ne.a.e((AudioManager) context.getSystemService(MediaStreamTrack.AUDIO_TRACK_KIND))).registerAudioDeviceCallback(audioDeviceCallback, handler);
        }

        public static void b(Context context, AudioDeviceCallback audioDeviceCallback) {
            ((AudioManager) ne.a.e((AudioManager) context.getSystemService(MediaStreamTrack.AUDIO_TRACK_KIND))).unregisterAudioDeviceCallback(audioDeviceCallback);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class c extends AudioDeviceCallback {
        private c() {
        }

        @Override // android.media.AudioDeviceCallback
        public void onAudioDevicesAdded(AudioDeviceInfo[] audioDeviceInfoArr) {
            b bVar = b.this;
            bVar.c(com.google.android.exoplayer2.audio.a.c(bVar.f12847a));
        }

        @Override // android.media.AudioDeviceCallback
        public void onAudioDevicesRemoved(AudioDeviceInfo[] audioDeviceInfoArr) {
            b bVar = b.this;
            bVar.c(com.google.android.exoplayer2.audio.a.c(bVar.f12847a));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class d extends ContentObserver {

        /* renamed from: a  reason: collision with root package name */
        private final ContentResolver f12856a;

        /* renamed from: b  reason: collision with root package name */
        private final Uri f12857b;

        public d(Handler handler, ContentResolver contentResolver, Uri uri) {
            super(handler);
            this.f12856a = contentResolver;
            this.f12857b = uri;
        }

        public void a() {
            this.f12856a.registerContentObserver(this.f12857b, false, this);
        }

        public void b() {
            this.f12856a.unregisterContentObserver(this);
        }

        @Override // android.database.ContentObserver
        public void onChange(boolean z10) {
            b bVar = b.this;
            bVar.c(com.google.android.exoplayer2.audio.a.c(bVar.f12847a));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class e extends BroadcastReceiver {
        private e() {
        }

        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            if (!isInitialStickyBroadcast()) {
                b.this.c(com.google.android.exoplayer2.audio.a.d(context, intent));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface f {
        void a(com.google.android.exoplayer2.audio.a aVar);
    }

    public b(Context context, f fVar) {
        c cVar;
        e eVar;
        Context applicationContext = context.getApplicationContext();
        this.f12847a = applicationContext;
        this.f12848b = (f) ne.a.e(fVar);
        Handler y10 = w0.y();
        this.f12849c = y10;
        int i10 = w0.f40158a;
        if (i10 >= 23) {
            cVar = new c();
        } else {
            cVar = null;
        }
        this.f12850d = cVar;
        if (i10 >= 21) {
            eVar = new e();
        } else {
            eVar = null;
        }
        this.f12851e = eVar;
        Uri g10 = com.google.android.exoplayer2.audio.a.g();
        this.f12852f = g10 != null ? new d(y10, applicationContext.getContentResolver(), g10) : null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c(com.google.android.exoplayer2.audio.a aVar) {
        if (this.f12854h && !aVar.equals(this.f12853g)) {
            this.f12853g = aVar;
            this.f12848b.a(aVar);
        }
    }

    public com.google.android.exoplayer2.audio.a d() {
        c cVar;
        if (this.f12854h) {
            return (com.google.android.exoplayer2.audio.a) ne.a.e(this.f12853g);
        }
        this.f12854h = true;
        d dVar = this.f12852f;
        if (dVar != null) {
            dVar.a();
        }
        if (w0.f40158a >= 23 && (cVar = this.f12850d) != null) {
            C0169b.a(this.f12847a, cVar, this.f12849c);
        }
        Intent intent = null;
        if (this.f12851e != null) {
            intent = this.f12847a.registerReceiver(this.f12851e, new IntentFilter("android.media.action.HDMI_AUDIO_PLUG"), null, this.f12849c);
        }
        com.google.android.exoplayer2.audio.a d10 = com.google.android.exoplayer2.audio.a.d(this.f12847a, intent);
        this.f12853g = d10;
        return d10;
    }

    public void e() {
        c cVar;
        if (!this.f12854h) {
            return;
        }
        this.f12853g = null;
        if (w0.f40158a >= 23 && (cVar = this.f12850d) != null) {
            C0169b.b(this.f12847a, cVar);
        }
        BroadcastReceiver broadcastReceiver = this.f12851e;
        if (broadcastReceiver != null) {
            this.f12847a.unregisterReceiver(broadcastReceiver);
        }
        d dVar = this.f12852f;
        if (dVar != null) {
            dVar.b();
        }
        this.f12854h = false;
    }
}
