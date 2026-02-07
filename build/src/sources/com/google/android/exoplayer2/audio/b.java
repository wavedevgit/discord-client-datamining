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
    private final Context f12099a;

    /* renamed from: b  reason: collision with root package name */
    private final f f12100b;

    /* renamed from: c  reason: collision with root package name */
    private final Handler f12101c;

    /* renamed from: d  reason: collision with root package name */
    private final c f12102d;

    /* renamed from: e  reason: collision with root package name */
    private final BroadcastReceiver f12103e;

    /* renamed from: f  reason: collision with root package name */
    private final d f12104f;

    /* renamed from: g  reason: collision with root package name */
    com.google.android.exoplayer2.audio.a f12105g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f12106h;

    /* renamed from: com.google.android.exoplayer2.audio.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0159b {
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
            bVar.c(com.google.android.exoplayer2.audio.a.c(bVar.f12099a));
        }

        @Override // android.media.AudioDeviceCallback
        public void onAudioDevicesRemoved(AudioDeviceInfo[] audioDeviceInfoArr) {
            b bVar = b.this;
            bVar.c(com.google.android.exoplayer2.audio.a.c(bVar.f12099a));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class d extends ContentObserver {

        /* renamed from: a  reason: collision with root package name */
        private final ContentResolver f12108a;

        /* renamed from: b  reason: collision with root package name */
        private final Uri f12109b;

        public d(Handler handler, ContentResolver contentResolver, Uri uri) {
            super(handler);
            this.f12108a = contentResolver;
            this.f12109b = uri;
        }

        public void a() {
            this.f12108a.registerContentObserver(this.f12109b, false, this);
        }

        public void b() {
            this.f12108a.unregisterContentObserver(this);
        }

        @Override // android.database.ContentObserver
        public void onChange(boolean z10) {
            b bVar = b.this;
            bVar.c(com.google.android.exoplayer2.audio.a.c(bVar.f12099a));
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
        this.f12099a = applicationContext;
        this.f12100b = (f) ne.a.e(fVar);
        Handler y10 = w0.y();
        this.f12101c = y10;
        int i10 = w0.f39060a;
        if (i10 >= 23) {
            cVar = new c();
        } else {
            cVar = null;
        }
        this.f12102d = cVar;
        if (i10 >= 21) {
            eVar = new e();
        } else {
            eVar = null;
        }
        this.f12103e = eVar;
        Uri g10 = com.google.android.exoplayer2.audio.a.g();
        this.f12104f = g10 != null ? new d(y10, applicationContext.getContentResolver(), g10) : null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c(com.google.android.exoplayer2.audio.a aVar) {
        if (this.f12106h && !aVar.equals(this.f12105g)) {
            this.f12105g = aVar;
            this.f12100b.a(aVar);
        }
    }

    public com.google.android.exoplayer2.audio.a d() {
        c cVar;
        if (this.f12106h) {
            return (com.google.android.exoplayer2.audio.a) ne.a.e(this.f12105g);
        }
        this.f12106h = true;
        d dVar = this.f12104f;
        if (dVar != null) {
            dVar.a();
        }
        if (w0.f39060a >= 23 && (cVar = this.f12102d) != null) {
            C0159b.a(this.f12099a, cVar, this.f12101c);
        }
        Intent intent = null;
        if (this.f12103e != null) {
            intent = this.f12099a.registerReceiver(this.f12103e, new IntentFilter("android.media.action.HDMI_AUDIO_PLUG"), null, this.f12101c);
        }
        com.google.android.exoplayer2.audio.a d10 = com.google.android.exoplayer2.audio.a.d(this.f12099a, intent);
        this.f12105g = d10;
        return d10;
    }

    public void e() {
        c cVar;
        if (!this.f12106h) {
            return;
        }
        this.f12105g = null;
        if (w0.f39060a >= 23 && (cVar = this.f12102d) != null) {
            C0159b.b(this.f12099a, cVar);
        }
        BroadcastReceiver broadcastReceiver = this.f12103e;
        if (broadcastReceiver != null) {
            this.f12099a.unregisterReceiver(broadcastReceiver);
        }
        d dVar = this.f12104f;
        if (dVar != null) {
            dVar.b();
        }
        this.f12106h = false;
    }
}
