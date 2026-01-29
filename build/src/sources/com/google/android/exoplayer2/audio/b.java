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
    private final Context f13218a;

    /* renamed from: b  reason: collision with root package name */
    private final f f13219b;

    /* renamed from: c  reason: collision with root package name */
    private final Handler f13220c;

    /* renamed from: d  reason: collision with root package name */
    private final c f13221d;

    /* renamed from: e  reason: collision with root package name */
    private final BroadcastReceiver f13222e;

    /* renamed from: f  reason: collision with root package name */
    private final d f13223f;

    /* renamed from: g  reason: collision with root package name */
    com.google.android.exoplayer2.audio.a f13224g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f13225h;

    /* renamed from: com.google.android.exoplayer2.audio.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0164b {
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
            bVar.c(com.google.android.exoplayer2.audio.a.c(bVar.f13218a));
        }

        @Override // android.media.AudioDeviceCallback
        public void onAudioDevicesRemoved(AudioDeviceInfo[] audioDeviceInfoArr) {
            b bVar = b.this;
            bVar.c(com.google.android.exoplayer2.audio.a.c(bVar.f13218a));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class d extends ContentObserver {

        /* renamed from: a  reason: collision with root package name */
        private final ContentResolver f13227a;

        /* renamed from: b  reason: collision with root package name */
        private final Uri f13228b;

        public d(Handler handler, ContentResolver contentResolver, Uri uri) {
            super(handler);
            this.f13227a = contentResolver;
            this.f13228b = uri;
        }

        public void a() {
            this.f13227a.registerContentObserver(this.f13228b, false, this);
        }

        public void b() {
            this.f13227a.unregisterContentObserver(this);
        }

        @Override // android.database.ContentObserver
        public void onChange(boolean z10) {
            b bVar = b.this;
            bVar.c(com.google.android.exoplayer2.audio.a.c(bVar.f13218a));
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
        this.f13218a = applicationContext;
        this.f13219b = (f) ne.a.e(fVar);
        Handler y10 = w0.y();
        this.f13220c = y10;
        int i10 = w0.f40279a;
        if (i10 >= 23) {
            cVar = new c();
        } else {
            cVar = null;
        }
        this.f13221d = cVar;
        if (i10 >= 21) {
            eVar = new e();
        } else {
            eVar = null;
        }
        this.f13222e = eVar;
        Uri g10 = com.google.android.exoplayer2.audio.a.g();
        this.f13223f = g10 != null ? new d(y10, applicationContext.getContentResolver(), g10) : null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c(com.google.android.exoplayer2.audio.a aVar) {
        if (this.f13225h && !aVar.equals(this.f13224g)) {
            this.f13224g = aVar;
            this.f13219b.a(aVar);
        }
    }

    public com.google.android.exoplayer2.audio.a d() {
        c cVar;
        if (this.f13225h) {
            return (com.google.android.exoplayer2.audio.a) ne.a.e(this.f13224g);
        }
        this.f13225h = true;
        d dVar = this.f13223f;
        if (dVar != null) {
            dVar.a();
        }
        if (w0.f40279a >= 23 && (cVar = this.f13221d) != null) {
            C0164b.a(this.f13218a, cVar, this.f13220c);
        }
        Intent intent = null;
        if (this.f13222e != null) {
            intent = this.f13218a.registerReceiver(this.f13222e, new IntentFilter("android.media.action.HDMI_AUDIO_PLUG"), null, this.f13220c);
        }
        com.google.android.exoplayer2.audio.a d10 = com.google.android.exoplayer2.audio.a.d(this.f13218a, intent);
        this.f13224g = d10;
        return d10;
    }

    public void e() {
        c cVar;
        if (!this.f13225h) {
            return;
        }
        this.f13224g = null;
        if (w0.f40279a >= 23 && (cVar = this.f13221d) != null) {
            C0164b.b(this.f13218a, cVar);
        }
        BroadcastReceiver broadcastReceiver = this.f13222e;
        if (broadcastReceiver != null) {
            this.f13218a.unregisterReceiver(broadcastReceiver);
        }
        d dVar = this.f13223f;
        if (dVar != null) {
            dVar.b();
        }
        this.f13225h = false;
    }
}
