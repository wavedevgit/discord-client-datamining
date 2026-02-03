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
    private final Context f11815a;

    /* renamed from: b  reason: collision with root package name */
    private final f f11816b;

    /* renamed from: c  reason: collision with root package name */
    private final Handler f11817c;

    /* renamed from: d  reason: collision with root package name */
    private final c f11818d;

    /* renamed from: e  reason: collision with root package name */
    private final BroadcastReceiver f11819e;

    /* renamed from: f  reason: collision with root package name */
    private final d f11820f;

    /* renamed from: g  reason: collision with root package name */
    com.google.android.exoplayer2.audio.a f11821g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f11822h;

    /* renamed from: com.google.android.exoplayer2.audio.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0150b {
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
            bVar.c(com.google.android.exoplayer2.audio.a.c(bVar.f11815a));
        }

        @Override // android.media.AudioDeviceCallback
        public void onAudioDevicesRemoved(AudioDeviceInfo[] audioDeviceInfoArr) {
            b bVar = b.this;
            bVar.c(com.google.android.exoplayer2.audio.a.c(bVar.f11815a));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class d extends ContentObserver {

        /* renamed from: a  reason: collision with root package name */
        private final ContentResolver f11824a;

        /* renamed from: b  reason: collision with root package name */
        private final Uri f11825b;

        public d(Handler handler, ContentResolver contentResolver, Uri uri) {
            super(handler);
            this.f11824a = contentResolver;
            this.f11825b = uri;
        }

        public void a() {
            this.f11824a.registerContentObserver(this.f11825b, false, this);
        }

        public void b() {
            this.f11824a.unregisterContentObserver(this);
        }

        @Override // android.database.ContentObserver
        public void onChange(boolean z10) {
            b bVar = b.this;
            bVar.c(com.google.android.exoplayer2.audio.a.c(bVar.f11815a));
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
        this.f11815a = applicationContext;
        this.f11816b = (f) ne.a.e(fVar);
        Handler y10 = w0.y();
        this.f11817c = y10;
        int i10 = w0.f40197a;
        if (i10 >= 23) {
            cVar = new c();
        } else {
            cVar = null;
        }
        this.f11818d = cVar;
        if (i10 >= 21) {
            eVar = new e();
        } else {
            eVar = null;
        }
        this.f11819e = eVar;
        Uri g10 = com.google.android.exoplayer2.audio.a.g();
        this.f11820f = g10 != null ? new d(y10, applicationContext.getContentResolver(), g10) : null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c(com.google.android.exoplayer2.audio.a aVar) {
        if (this.f11822h && !aVar.equals(this.f11821g)) {
            this.f11821g = aVar;
            this.f11816b.a(aVar);
        }
    }

    public com.google.android.exoplayer2.audio.a d() {
        c cVar;
        if (this.f11822h) {
            return (com.google.android.exoplayer2.audio.a) ne.a.e(this.f11821g);
        }
        this.f11822h = true;
        d dVar = this.f11820f;
        if (dVar != null) {
            dVar.a();
        }
        if (w0.f40197a >= 23 && (cVar = this.f11818d) != null) {
            C0150b.a(this.f11815a, cVar, this.f11817c);
        }
        Intent intent = null;
        if (this.f11819e != null) {
            intent = this.f11815a.registerReceiver(this.f11819e, new IntentFilter("android.media.action.HDMI_AUDIO_PLUG"), null, this.f11817c);
        }
        com.google.android.exoplayer2.audio.a d10 = com.google.android.exoplayer2.audio.a.d(this.f11815a, intent);
        this.f11821g = d10;
        return d10;
    }

    public void e() {
        c cVar;
        if (!this.f11822h) {
            return;
        }
        this.f11821g = null;
        if (w0.f40197a >= 23 && (cVar = this.f11818d) != null) {
            C0150b.b(this.f11815a, cVar);
        }
        BroadcastReceiver broadcastReceiver = this.f11819e;
        if (broadcastReceiver != null) {
            this.f11815a.unregisterReceiver(broadcastReceiver);
        }
        d dVar = this.f11820f;
        if (dVar != null) {
            dVar.b();
        }
        this.f11822h = false;
    }
}
