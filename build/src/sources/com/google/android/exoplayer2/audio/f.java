package com.google.android.exoplayer2.audio;

import android.media.AudioDeviceInfo;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.PlaybackParameters;
import java.nio.ByteBuffer;
import mc.t1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface f {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends Exception {

        /* renamed from: d  reason: collision with root package name */
        public final int f12228d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f12229e;

        /* renamed from: i  reason: collision with root package name */
        public final Format f12230i;

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
                r3.f12228d = r4
                r3.f12229e = r9
                r3.f12230i = r8
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
        public final long f12231d;

        /* renamed from: e  reason: collision with root package name */
        public final long f12232e;

        public d(long j10, long j11) {
            super("Unexpected audio track timestamp discontinuity: expected " + j11 + ", got " + j10);
            this.f12231d = j10;
            this.f12232e = j11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e extends Exception {

        /* renamed from: d  reason: collision with root package name */
        public final int f12233d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f12234e;

        /* renamed from: i  reason: collision with root package name */
        public final Format f12235i;

        public e(int i10, Format format, boolean z10) {
            super("AudioTrack write failed: " + i10);
            this.f12234e = z10;
            this.f12233d = i10;
            this.f12235i = format;
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

    void i();

    void j(AudioAttributes audioAttributes);

    boolean k(ByteBuffer byteBuffer, long j10, int i10);

    void l(c cVar);

    int m(Format format);

    void n();

    void o();

    long p(boolean z10);

    void q(t1 t1Var);

    default void r(long j10) {
    }

    void release();

    void reset();

    void s();

    void setPreferredDevice(AudioDeviceInfo audioDeviceInfo);

    void t(float f10);

    void u();

    void v(nc.p pVar);

    void w(Format format, int i10, int[] iArr);

    void x(boolean z10);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends Exception {

        /* renamed from: d  reason: collision with root package name */
        public final Format f12227d;

        public a(Throwable th2, Format format) {
            super(th2);
            this.f12227d = format;
        }

        public a(String str, Format format) {
            super(str);
            this.f12227d = format;
        }
    }
}
