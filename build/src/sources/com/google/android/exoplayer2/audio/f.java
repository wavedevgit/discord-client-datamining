package com.google.android.exoplayer2.audio;

import android.media.AudioDeviceInfo;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.PlaybackParameters;
import java.nio.ByteBuffer;
import nc.t1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface f {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends Exception {

        /* renamed from: d  reason: collision with root package name */
        public final int f12845d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f12846e;

        /* renamed from: i  reason: collision with root package name */
        public final Format f12847i;

        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public b(int r4, int r5, int r6, int r7, com.google.android.exoplayer2.Format r8, boolean r9, java.lang.Exception r10) {
            /*
                r3 = this;
                java.lang.StringBuilder r0 = new java.lang.StringBuilder
                r0.<init>()
                java.lang.String r1 = "AudioTrack init failed "
                r0.append(r1)
                r0.append(r4)
                java.lang.String r1 = " "
                r0.append(r1)
                java.lang.String r2 = "Config("
                r0.append(r2)
                r0.append(r5)
                java.lang.String r5 = ", "
                r0.append(r5)
                r0.append(r6)
                r0.append(r5)
                r0.append(r7)
                java.lang.String r5 = ")"
                r0.append(r5)
                r0.append(r1)
                r0.append(r8)
                if (r9 == 0) goto L38
                java.lang.String r5 = " (recoverable)"
                goto L3a
            L38:
                java.lang.String r5 = ""
            L3a:
                r0.append(r5)
                java.lang.String r5 = r0.toString()
                r3.<init>(r5, r10)
                r3.f12845d = r4
                r3.f12846e = r9
                r3.f12847i = r8
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.audio.f.b.<init>(int, int, int, int, com.google.android.exoplayer2.Format, boolean, java.lang.Exception):void");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface c {
        void a(Exception exc);

        void b(long j10);

        void c();

        void d(int i10, long j10, long j11);

        void e();

        void f();

        void g();

        void onSkipSilenceEnabledChanged(boolean z10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends Exception {

        /* renamed from: d  reason: collision with root package name */
        public final long f12848d;

        /* renamed from: e  reason: collision with root package name */
        public final long f12849e;

        public d(long j10, long j11) {
            super("Unexpected audio track timestamp discontinuity: expected " + j11 + ", got " + j10);
            this.f12848d = j10;
            this.f12849e = j11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e extends Exception {

        /* renamed from: d  reason: collision with root package name */
        public final int f12850d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f12851e;

        /* renamed from: i  reason: collision with root package name */
        public final Format f12852i;

        public e(int i10, Format format, boolean z10) {
            super("AudioTrack write failed: " + i10);
            this.f12851e = z10;
            this.f12850d = i10;
            this.f12852i = format;
        }
    }

    boolean a(Format format);

    void b();

    PlaybackParameters c();

    boolean d();

    void e();

    void f(PlaybackParameters playbackParameters);

    void flush();

    boolean g();

    void h(int i10);

    void i(t1 t1Var);

    void j();

    void k(AudioAttributes audioAttributes);

    void l(oc.p pVar);

    boolean m(ByteBuffer byteBuffer, long j10, int i10);

    void n(c cVar);

    int o(Format format);

    void p();

    void q();

    long r(boolean z10);

    void release();

    void reset();

    default void s(long j10) {
    }

    void setPreferredDevice(AudioDeviceInfo audioDeviceInfo);

    void t();

    void u(float f10);

    void v();

    void w(Format format, int i10, int[] iArr);

    void x(boolean z10);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends Exception {

        /* renamed from: d  reason: collision with root package name */
        public final Format f12844d;

        public a(Throwable th2, Format format) {
            super(th2);
            this.f12844d = format;
        }

        public a(String str, Format format) {
            super(str);
            this.f12844d = format;
        }
    }
}
