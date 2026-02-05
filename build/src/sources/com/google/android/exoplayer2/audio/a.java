package com.google.android.exoplayer2.audio;

import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.media.AudioAttributes;
import android.media.AudioDeviceInfo;
import android.media.AudioFormat;
import android.media.AudioManager;
import android.media.AudioTrack;
import android.net.Uri;
import android.provider.Settings;
import android.util.Pair;
import com.google.android.exoplayer2.Format;
import java.util.Arrays;
import mi.s;
import mi.t;
import mi.t0;
import mi.u;
import ne.c0;
import ne.w0;
import org.webrtc.MediaStreamTrack;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: c  reason: collision with root package name */
    public static final a f12194c = new a(new int[]{2}, 10);

    /* renamed from: d  reason: collision with root package name */
    private static final mi.s f12195d = mi.s.v(2, 5, 6);

    /* renamed from: e  reason: collision with root package name */
    private static final t f12196e = new t.a().f(5, 6).f(17, 6).f(7, 6).f(30, 10).f(18, 6).f(6, 8).f(8, 8).f(14, 8).c();

    /* renamed from: a  reason: collision with root package name */
    private final int[] f12197a;

    /* renamed from: b  reason: collision with root package name */
    private final int f12198b;

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: com.google.android.exoplayer2.audio.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0165a {
        private static final u a() {
            u.a i10 = new u.a().i(8, 7);
            int i11 = w0.f39657a;
            if (i11 >= 31) {
                i10.i(26, 27);
            }
            if (i11 >= 33) {
                i10.a(30);
            }
            return i10.l();
        }

        public static final boolean b(Context context) {
            AudioDeviceInfo[] devices = ((AudioManager) ne.a.e((AudioManager) context.getSystemService(MediaStreamTrack.AUDIO_TRACK_KIND))).getDevices(2);
            u a10 = a();
            for (AudioDeviceInfo audioDeviceInfo : devices) {
                if (a10.contains(Integer.valueOf(audioDeviceInfo.getType()))) {
                    return true;
                }
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private static final android.media.AudioAttributes f12199a = new AudioAttributes.Builder().setUsage(1).setContentType(3).setFlags(0).build();

        public static mi.s a() {
            s.a j10 = mi.s.j();
            t0 r10 = a.f12196e.keySet().r();
            while (r10.hasNext()) {
                Integer num = (Integer) r10.next();
                int intValue = num.intValue();
                if (w0.f39657a >= 34 || intValue != 30) {
                    if (AudioTrack.isDirectPlaybackSupported(new AudioFormat.Builder().setChannelMask(12).setEncoding(intValue).setSampleRate(48000).build(), f12199a)) {
                        j10.a(num);
                    }
                }
            }
            j10.a(2);
            return j10.k();
        }

        public static int b(int i10, int i11) {
            for (int i12 = 10; i12 > 0; i12--) {
                if (AudioTrack.isDirectPlaybackSupported(new AudioFormat.Builder().setEncoding(i10).setSampleRate(i11).setChannelMask(w0.H(i12)).build(), f12199a)) {
                    return i12;
                }
            }
            return 0;
        }
    }

    public a(int[] iArr, int i10) {
        if (iArr != null) {
            int[] copyOf = Arrays.copyOf(iArr, iArr.length);
            this.f12197a = copyOf;
            Arrays.sort(copyOf);
        } else {
            this.f12197a = new int[0];
        }
        this.f12198b = i10;
    }

    private static boolean b() {
        if (w0.f39657a >= 17) {
            String str = w0.f39659c;
            if ("Amazon".equals(str) || "Xiaomi".equals(str)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public static a c(Context context) {
        return d(context, context.registerReceiver(null, new IntentFilter("android.media.action.HDMI_AUDIO_PLUG")));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a d(Context context, Intent intent) {
        int i10 = w0.f39657a;
        if (i10 >= 23 && C0165a.b(context)) {
            return f12194c;
        }
        u.a aVar = new u.a();
        if (b() && Settings.Global.getInt(context.getContentResolver(), "external_surround_sound_enabled", 0) == 1) {
            aVar.j(f12195d);
        }
        if (i10 >= 29 && (w0.H0(context) || w0.C0(context))) {
            aVar.j(b.a());
            return new a(oi.e.l(aVar.l()), 10);
        } else if (intent != null && intent.getIntExtra("android.media.extra.AUDIO_PLUG_STATE", 0) == 1) {
            int[] intArrayExtra = intent.getIntArrayExtra("android.media.extra.ENCODINGS");
            if (intArrayExtra != null) {
                aVar.j(oi.e.c(intArrayExtra));
            }
            return new a(oi.e.l(aVar.l()), intent.getIntExtra("android.media.extra.MAX_CHANNEL_COUNT", 10));
        } else {
            u l10 = aVar.l();
            if (!l10.isEmpty()) {
                return new a(oi.e.l(l10), 10);
            }
            return f12194c;
        }
    }

    private static int e(int i10) {
        int i11 = w0.f39657a;
        if (i11 <= 28) {
            if (i10 == 7) {
                i10 = 8;
            } else if (i10 == 3 || i10 == 4 || i10 == 5) {
                i10 = 6;
            }
        }
        if (i11 <= 26 && "fugu".equals(w0.f39658b) && i10 == 1) {
            i10 = 2;
        }
        return w0.H(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Uri g() {
        if (b()) {
            return Settings.Global.getUriFor("external_surround_sound_enabled");
        }
        return null;
    }

    private static int h(int i10, int i11) {
        if (w0.f39657a >= 29) {
            return b.b(i10, i11);
        }
        return ((Integer) ne.a.e((Integer) f12196e.getOrDefault(Integer.valueOf(i10), 0))).intValue();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Arrays.equals(this.f12197a, aVar.f12197a) && this.f12198b == aVar.f12198b) {
            return true;
        }
        return false;
    }

    public Pair f(Format format) {
        int f10 = c0.f((String) ne.a.e(format.f11688w), format.f11685t);
        if (!f12196e.containsKey(Integer.valueOf(f10))) {
            return null;
        }
        if (f10 == 18 && !j(18)) {
            f10 = 6;
        } else if ((f10 == 8 && !j(8)) || (f10 == 30 && !j(30))) {
            f10 = 7;
        }
        if (!j(f10)) {
            return null;
        }
        int i10 = format.J;
        if (i10 != -1 && f10 != 18) {
            if (format.f11688w.equals("audio/vnd.dts.uhd;profile=p2")) {
                if (i10 > 10) {
                    return null;
                }
            } else if (i10 > this.f12198b) {
                return null;
            }
        } else {
            int i11 = format.K;
            if (i11 == -1) {
                i11 = 48000;
            }
            i10 = h(f10, i11);
        }
        int e10 = e(i10);
        if (e10 == 0) {
            return null;
        }
        return Pair.create(Integer.valueOf(f10), Integer.valueOf(e10));
    }

    public int hashCode() {
        return this.f12198b + (Arrays.hashCode(this.f12197a) * 31);
    }

    public boolean i(Format format) {
        if (f(format) != null) {
            return true;
        }
        return false;
    }

    public boolean j(int i10) {
        if (Arrays.binarySearch(this.f12197a, i10) >= 0) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "AudioCapabilities[maxChannelCount=" + this.f12198b + ", supportedEncodings=" + Arrays.toString(this.f12197a) + "]";
    }
}
