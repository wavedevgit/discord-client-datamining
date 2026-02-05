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
    private final AudioManager f12451a;

    /* renamed from: b  reason: collision with root package name */
    private final a f12452b;

    /* renamed from: c  reason: collision with root package name */
    private b f12453c;

    /* renamed from: d  reason: collision with root package name */
    private AudioAttributes f12454d;

    /* renamed from: f  reason: collision with root package name */
    private int f12456f;

    /* renamed from: h  reason: collision with root package name */
    private AudioFocusRequest f12458h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f12459i;

    /* renamed from: g  reason: collision with root package name */
    private float f12457g = 1.0f;

    /* renamed from: e  reason: collision with root package name */
    private int f12455e = 0;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements AudioManager.OnAudioFocusChangeListener {

        /* renamed from: d  reason: collision with root package name */
        private final Handler f12460d;

        public a(Handler handler) {
            this.f12460d = handler;
        }

        @Override // android.media.AudioManager.OnAudioFocusChangeListener
        public void onAudioFocusChange(final int i10) {
            this.f12460d.post(new Runnable() { // from class: com.google.android.exoplayer2.c
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
        this.f12451a = (AudioManager) ne.a.e((AudioManager) context.getApplicationContext().getSystemService(MediaStreamTrack.AUDIO_TRACK_KIND));
        this.f12453c = bVar;
        this.f12452b = new a(handler);
    }

    private void a() {
        this.f12451a.abandonAudioFocus(this.f12452b);
    }

    private void b() {
        if (this.f12455e == 0) {
            return;
        }
        if (ne.w0.f39657a >= 26) {
            c();
        } else {
            a();
        }
        n(0);
    }

    private void c() {
        AudioFocusRequest audioFocusRequest = this.f12458h;
        if (audioFocusRequest != null) {
            this.f12451a.abandonAudioFocusRequest(audioFocusRequest);
        }
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    private static int e(AudioAttributes audioAttributes) {
        if (audioAttributes == null) {
            return 0;
        }
        switch (audioAttributes.f12184i) {
            case 0:
                ne.y.i("AudioFocusManager", "Specify a proper usage in the audio attributes for audio focus handling. Using AUDIOFOCUS_GAIN by default.");
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
                if (audioAttributes.f12182d == 1) {
                    return 2;
                }
                break;
            case 15:
            default:
                ne.y.i("AudioFocusManager", "Unidentified audio usage: " + audioAttributes.f12184i);
                return 0;
            case 16:
                if (ne.w0.f39657a < 19) {
                    return 2;
                }
                return 4;
        }
        return 3;
    }

    private void f(int i10) {
        b bVar = this.f12453c;
        if (bVar != null) {
            bVar.B(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void h(int i10) {
        if (i10 != -3 && i10 != -2) {
            if (i10 != -1) {
                if (i10 != 1) {
                    ne.y.i("AudioFocusManager", "Unknown focus change type: " + i10);
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
        if (this.f12455e == 1) {
            return 1;
        }
        if (ne.w0.f39657a >= 26) {
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
        return this.f12451a.requestAudioFocus(this.f12452b, ne.w0.k0(((AudioAttributes) ne.a.e(this.f12454d)).f12184i), this.f12456f);
    }

    private int l() {
        AudioFocusRequest.Builder a10;
        AudioFocusRequest audioFocusRequest = this.f12458h;
        if (audioFocusRequest == null || this.f12459i) {
            if (audioFocusRequest == null) {
                lc.b.a();
                a10 = com.discord.chat.presentation.message.view.voicemessages.a.a(this.f12456f);
            } else {
                lc.b.a();
                a10 = lc.a.a(this.f12458h);
            }
            this.f12458h = a10.setAudioAttributes(((AudioAttributes) ne.a.e(this.f12454d)).b().f12188a).setWillPauseWhenDucked(q()).setOnAudioFocusChangeListener(this.f12452b).build();
            this.f12459i = false;
        }
        return this.f12451a.requestAudioFocus(this.f12458h);
    }

    private void n(int i10) {
        float f10;
        if (this.f12455e != i10) {
            this.f12455e = i10;
            if (i10 == 3) {
                f10 = 0.2f;
            } else {
                f10 = 1.0f;
            }
            if (this.f12457g != f10) {
                this.f12457g = f10;
                b bVar = this.f12453c;
                if (bVar != null) {
                    bVar.A(f10);
                }
            }
        }
    }

    private boolean o(int i10) {
        if (i10 == 1 || this.f12456f != 1) {
            return true;
        }
        return false;
    }

    private boolean q() {
        AudioAttributes audioAttributes = this.f12454d;
        if (audioAttributes != null && audioAttributes.f12182d == 1) {
            return true;
        }
        return false;
    }

    public float g() {
        return this.f12457g;
    }

    public void i() {
        this.f12453c = null;
        b();
    }

    public void m(AudioAttributes audioAttributes) {
        if (!ne.w0.c(this.f12454d, audioAttributes)) {
            this.f12454d = audioAttributes;
            int e10 = e(audioAttributes);
            this.f12456f = e10;
            boolean z10 = true;
            if (e10 != 1 && e10 != 0) {
                z10 = false;
            }
            ne.a.b(z10, "Automatic handling of audio focus is only available for USAGE_MEDIA and USAGE_GAME.");
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
