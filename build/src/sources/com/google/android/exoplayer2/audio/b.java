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
import oe.w0;
import org.webrtc.MediaStreamTrack;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Context f12817a;

    /* renamed from: b  reason: collision with root package name */
    private final f f12818b;

    /* renamed from: c  reason: collision with root package name */
    private final Handler f12819c;

    /* renamed from: d  reason: collision with root package name */
    private final c f12820d;

    /* renamed from: e  reason: collision with root package name */
    private final BroadcastReceiver f12821e;

    /* renamed from: f  reason: collision with root package name */
    private final d f12822f;

    /* renamed from: g  reason: collision with root package name */
    com.google.android.exoplayer2.audio.a f12823g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f12824h;

    /* renamed from: com.google.android.exoplayer2.audio.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0163b {
        public static void a(Context context, AudioDeviceCallback audioDeviceCallback, Handler handler) {
            ((AudioManager) oe.a.e((AudioManager) context.getSystemService(MediaStreamTrack.AUDIO_TRACK_KIND))).registerAudioDeviceCallback(audioDeviceCallback, handler);
        }

        public static void b(Context context, AudioDeviceCallback audioDeviceCallback) {
            ((AudioManager) oe.a.e((AudioManager) context.getSystemService(MediaStreamTrack.AUDIO_TRACK_KIND))).unregisterAudioDeviceCallback(audioDeviceCallback);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class c extends AudioDeviceCallback {
        private c() {
        }

        @Override // android.media.AudioDeviceCallback
        public void onAudioDevicesAdded(AudioDeviceInfo[] audioDeviceInfoArr) {
            b bVar = b.this;
            bVar.c(com.google.android.exoplayer2.audio.a.c(bVar.f12817a));
        }

        @Override // android.media.AudioDeviceCallback
        public void onAudioDevicesRemoved(AudioDeviceInfo[] audioDeviceInfoArr) {
            b bVar = b.this;
            bVar.c(com.google.android.exoplayer2.audio.a.c(bVar.f12817a));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class d extends ContentObserver {

        /* renamed from: a  reason: collision with root package name */
        private final ContentResolver f12826a;

        /* renamed from: b  reason: collision with root package name */
        private final Uri f12827b;

        public d(Handler handler, ContentResolver contentResolver, Uri uri) {
            super(handler);
            this.f12826a = contentResolver;
            this.f12827b = uri;
        }

        public void a() {
            this.f12826a.registerContentObserver(this.f12827b, false, this);
        }

        public void b() {
            this.f12826a.unregisterContentObserver(this);
        }

        @Override // android.database.ContentObserver
        public void onChange(boolean z10) {
            b bVar = b.this;
            bVar.c(com.google.android.exoplayer2.audio.a.c(bVar.f12817a));
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
        this.f12817a = applicationContext;
        this.f12818b = (f) oe.a.e(fVar);
        Handler y10 = w0.y();
        this.f12819c = y10;
        int i10 = w0.f39038a;
        if (i10 >= 23) {
            cVar = new c();
        } else {
            cVar = null;
        }
        this.f12820d = cVar;
        if (i10 >= 21) {
            eVar = new e();
        } else {
            eVar = null;
        }
        this.f12821e = eVar;
        Uri g10 = com.google.android.exoplayer2.audio.a.g();
        this.f12822f = g10 != null ? new d(y10, applicationContext.getContentResolver(), g10) : null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c(com.google.android.exoplayer2.audio.a aVar) {
        if (this.f12824h && !aVar.equals(this.f12823g)) {
            this.f12823g = aVar;
            this.f12818b.a(aVar);
        }
    }

    public com.google.android.exoplayer2.audio.a d() {
        c cVar;
        if (this.f12824h) {
            return (com.google.android.exoplayer2.audio.a) oe.a.e(this.f12823g);
        }
        this.f12824h = true;
        d dVar = this.f12822f;
        if (dVar != null) {
            dVar.a();
        }
        if (w0.f39038a >= 23 && (cVar = this.f12820d) != null) {
            C0163b.a(this.f12817a, cVar, this.f12819c);
        }
        Intent intent = null;
        if (this.f12821e != null) {
            intent = this.f12817a.registerReceiver(this.f12821e, new IntentFilter("android.media.action.HDMI_AUDIO_PLUG"), null, this.f12819c);
        }
        com.google.android.exoplayer2.audio.a d10 = com.google.android.exoplayer2.audio.a.d(this.f12817a, intent);
        this.f12823g = d10;
        return d10;
    }

    public void e() {
        c cVar;
        if (!this.f12824h) {
            return;
        }
        this.f12823g = null;
        if (w0.f39038a >= 23 && (cVar = this.f12820d) != null) {
            C0163b.b(this.f12817a, cVar);
        }
        BroadcastReceiver broadcastReceiver = this.f12821e;
        if (broadcastReceiver != null) {
            this.f12817a.unregisterReceiver(broadcastReceiver);
        }
        d dVar = this.f12822f;
        if (dVar != null) {
            dVar.b();
        }
        this.f12824h = false;
    }
}
