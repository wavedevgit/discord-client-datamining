package com.google.android.exoplayer2;

import android.content.Context;
import android.media.AudioFocusRequest;
import android.media.AudioManager;
import android.os.Handler;
import com.google.android.exoplayer2.audio.AudioAttributes;
import org.webrtc.MediaStreamTrack;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final AudioManager f13067a;

    /* renamed from: b  reason: collision with root package name */
    private final a f13068b;

    /* renamed from: c  reason: collision with root package name */
    private b f13069c;

    /* renamed from: d  reason: collision with root package name */
    private AudioAttributes f13070d;

    /* renamed from: f  reason: collision with root package name */
    private int f13072f;

    /* renamed from: h  reason: collision with root package name */
    private AudioFocusRequest f13074h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f13075i;

    /* renamed from: g  reason: collision with root package name */
    private float f13073g = 1.0f;

    /* renamed from: e  reason: collision with root package name */
    private int f13071e = 0;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements AudioManager.OnAudioFocusChangeListener {

        /* renamed from: d  reason: collision with root package name */
        private final Handler f13076d;

        public a(Handler handler) {
            this.f13076d = handler;
        }

        @Override // android.media.AudioManager.OnAudioFocusChangeListener
        public void onAudioFocusChange(final int i10) {
            this.f13076d.post(new Runnable() { // from class: com.google.android.exoplayer2.c
                @Override // java.lang.Runnable
                public final void run() {
                    d.this.h(i10);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void A(float f10);

        void B(int i10);
    }

    public d(Context context, Handler handler, b bVar) {
        this.f13067a = (AudioManager) oe.a.e((AudioManager) context.getApplicationContext().getSystemService(MediaStreamTrack.AUDIO_TRACK_KIND));
        this.f13069c = bVar;
        this.f13068b = new a(handler);
    }

    private void a() {
        this.f13067a.abandonAudioFocus(this.f13068b);
    }

    private void b() {
        if (this.f13071e == 0) {
            return;
        }
        if (oe.w0.f39037a >= 26) {
            c();
        } else {
            a();
        }
        n(0);
    }

    private void c() {
        AudioFocusRequest audioFocusRequest = this.f13074h;
        if (audioFocusRequest != null) {
            this.f13067a.abandonAudioFocusRequest(audioFocusRequest);
        }
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    private static int e(AudioAttributes audioAttributes) {
        if (audioAttributes == null) {
            return 0;
        }
        switch (audioAttributes.f12800i) {
            case 0:
                oe.y.i("AudioFocusManager", "Specify a proper usage in the audio attributes for audio focus handling. Using AUDIOFOCUS_GAIN by default.");
                return 1;
            case 1:
            case 14:
                return 1;
            case 2:
            case 4:
                return 2;
            case 3:
                return 0;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 12:
            case 13:
                break;
            case 11:
                if (audioAttributes.f12798d == 1) {
                    return 2;
                }
                break;
            case 15:
            default:
                oe.y.i("AudioFocusManager", "Unidentified audio usage: " + audioAttributes.f12800i);
                return 0;
            case 16:
                if (oe.w0.f39037a < 19) {
                    return 2;
                }
                return 4;
        }
        return 3;
    }

    private void f(int i10) {
        b bVar = this.f13069c;
        if (bVar != null) {
            bVar.B(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void h(int i10) {
        if (i10 != -3 && i10 != -2) {
            if (i10 != -1) {
                if (i10 != 1) {
                    oe.y.i("AudioFocusManager", "Unknown focus change type: " + i10);
                    return;
                }
                n(1);
                f(1);
                return;
            }
            f(-1);
            b();
        } else if (i10 != -2 && !q()) {
            n(3);
        } else {
            f(0);
            n(2);
        }
    }

    private int j() {
        int k10;
        if (this.f13071e == 1) {
            return 1;
        }
        if (oe.w0.f39037a >= 26) {
            k10 = l();
        } else {
            k10 = k();
        }
        if (k10 == 1) {
            n(1);
            return 1;
        }
        n(0);
        return -1;
    }

    private int k() {
        return this.f13067a.requestAudioFocus(this.f13068b, oe.w0.k0(((AudioAttributes) oe.a.e(this.f13070d)).f12800i), this.f13072f);
    }

    private int l() {
        AudioFocusRequest.Builder a10;
        AudioFocusRequest audioFocusRequest = this.f13074h;
        if (audioFocusRequest == null || this.f13075i) {
            if (audioFocusRequest == null) {
                mc.b.a();
                a10 = com.discord.chat.presentation.message.view.voicemessages.a.a(this.f13072f);
            } else {
                mc.b.a();
                a10 = mc.a.a(this.f13074h);
            }
            this.f13074h = a10.setAudioAttributes(((AudioAttributes) oe.a.e(this.f13070d)).b().f12804a).setWillPauseWhenDucked(q()).setOnAudioFocusChangeListener(this.f13068b).build();
            this.f13075i = false;
        }
        return this.f13067a.requestAudioFocus(this.f13074h);
    }

    private void n(int i10) {
        float f10;
        if (this.f13071e != i10) {
            this.f13071e = i10;
            if (i10 == 3) {
                f10 = 0.2f;
            } else {
                f10 = 1.0f;
            }
            if (this.f13073g != f10) {
                this.f13073g = f10;
                b bVar = this.f13069c;
                if (bVar != null) {
                    bVar.A(f10);
                }
            }
        }
    }

    private boolean o(int i10) {
        if (i10 == 1 || this.f13072f != 1) {
            return true;
        }
        return false;
    }

    private boolean q() {
        AudioAttributes audioAttributes = this.f13070d;
        if (audioAttributes != null && audioAttributes.f12798d == 1) {
            return true;
        }
        return false;
    }

    public float g() {
        return this.f13073g;
    }

    public void i() {
        this.f13069c = null;
        b();
    }

    public void m(AudioAttributes audioAttributes) {
        if (!oe.w0.c(this.f13070d, audioAttributes)) {
            this.f13070d = audioAttributes;
            int e10 = e(audioAttributes);
            this.f13072f = e10;
            boolean z10 = true;
            if (e10 != 1 && e10 != 0) {
                z10 = false;
            }
            oe.a.b(z10, "Automatic handling of audio focus is only available for USAGE_MEDIA and USAGE_GAME.");
        }
    }

    public int p(boolean z10, int i10) {
        if (o(i10)) {
            b();
            if (!z10) {
                return -1;
            }
            return 1;
        } else if (!z10) {
            return -1;
        } else {
            return j();
        }
    }
}
