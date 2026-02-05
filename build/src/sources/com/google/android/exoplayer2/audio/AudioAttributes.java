package com.google.android.exoplayer2.audio;

import android.media.AudioAttributes;
import android.os.Bundle;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.g;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AudioAttributes implements com.google.android.exoplayer2.g {

    /* renamed from: r  reason: collision with root package name */
    public static final AudioAttributes f12175r = new e().a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f12176s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f12177t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f12178u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f12179v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    private static final String f12180w = w0.B0(4);

    /* renamed from: x  reason: collision with root package name */
    public static final g.a f12181x = new g.a() { // from class: nc.d
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return AudioAttributes.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f12182d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12183e;

    /* renamed from: i  reason: collision with root package name */
    public final int f12184i;

    /* renamed from: o  reason: collision with root package name */
    public final int f12185o;

    /* renamed from: p  reason: collision with root package name */
    public final int f12186p;

    /* renamed from: q  reason: collision with root package name */
    private d f12187q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {
        public static void a(AudioAttributes.Builder builder, int i10) {
            builder.setAllowedCapturePolicy(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class c {
        public static void a(AudioAttributes.Builder builder, int i10) {
            builder.setSpatializationBehavior(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        public final android.media.AudioAttributes f12188a;

        private d(AudioAttributes audioAttributes) {
            AudioAttributes.Builder usage = new AudioAttributes.Builder().setContentType(audioAttributes.f12182d).setFlags(audioAttributes.f12183e).setUsage(audioAttributes.f12184i);
            int i10 = w0.f39657a;
            if (i10 >= 29) {
                b.a(usage, audioAttributes.f12185o);
            }
            if (i10 >= 32) {
                c.a(usage, audioAttributes.f12186p);
            }
            this.f12188a = usage.build();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        private int f12189a = 0;

        /* renamed from: b  reason: collision with root package name */
        private int f12190b = 0;

        /* renamed from: c  reason: collision with root package name */
        private int f12191c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f12192d = 1;

        /* renamed from: e  reason: collision with root package name */
        private int f12193e = 0;

        public AudioAttributes a() {
            return new AudioAttributes(this.f12189a, this.f12190b, this.f12191c, this.f12192d, this.f12193e);
        }

        public e b(int i10) {
            this.f12192d = i10;
            return this;
        }

        public e c(int i10) {
            this.f12189a = i10;
            return this;
        }

        public e d(int i10) {
            this.f12190b = i10;
            return this;
        }

        public e e(int i10) {
            this.f12193e = i10;
            return this;
        }

        public e f(int i10) {
            this.f12191c = i10;
            return this;
        }
    }

    public static /* synthetic */ AudioAttributes a(Bundle bundle) {
        e eVar = new e();
        String str = f12176s;
        if (bundle.containsKey(str)) {
            eVar.c(bundle.getInt(str));
        }
        String str2 = f12177t;
        if (bundle.containsKey(str2)) {
            eVar.d(bundle.getInt(str2));
        }
        String str3 = f12178u;
        if (bundle.containsKey(str3)) {
            eVar.f(bundle.getInt(str3));
        }
        String str4 = f12179v;
        if (bundle.containsKey(str4)) {
            eVar.b(bundle.getInt(str4));
        }
        String str5 = f12180w;
        if (bundle.containsKey(str5)) {
            eVar.e(bundle.getInt(str5));
        }
        return eVar.a();
    }

    public d b() {
        if (this.f12187q == null) {
            this.f12187q = new d();
        }
        return this.f12187q;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && AudioAttributes.class == obj.getClass()) {
            AudioAttributes audioAttributes = (AudioAttributes) obj;
            if (this.f12182d == audioAttributes.f12182d && this.f12183e == audioAttributes.f12183e && this.f12184i == audioAttributes.f12184i && this.f12185o == audioAttributes.f12185o && this.f12186p == audioAttributes.f12186p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f12182d) * 31) + this.f12183e) * 31) + this.f12184i) * 31) + this.f12185o) * 31) + this.f12186p;
    }

    private AudioAttributes(int i10, int i11, int i12, int i13, int i14) {
        this.f12182d = i10;
        this.f12183e = i11;
        this.f12184i = i12;
        this.f12185o = i13;
        this.f12186p = i14;
    }
}
