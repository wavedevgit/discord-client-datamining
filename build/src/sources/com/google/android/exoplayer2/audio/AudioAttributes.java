package com.google.android.exoplayer2.audio;

import android.media.AudioAttributes;
import android.os.Bundle;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.g;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AudioAttributes implements com.google.android.exoplayer2.g {

    /* renamed from: r  reason: collision with root package name */
    public static final AudioAttributes f13193r = new e().a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f13194s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f13195t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f13196u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f13197v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    private static final String f13198w = w0.B0(4);

    /* renamed from: x  reason: collision with root package name */
    public static final g.a f13199x = new g.a() { // from class: nc.d
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return AudioAttributes.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f13200d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13201e;

    /* renamed from: i  reason: collision with root package name */
    public final int f13202i;

    /* renamed from: o  reason: collision with root package name */
    public final int f13203o;

    /* renamed from: p  reason: collision with root package name */
    public final int f13204p;

    /* renamed from: q  reason: collision with root package name */
    private d f13205q;

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
        public final android.media.AudioAttributes f13206a;

        private d(AudioAttributes audioAttributes) {
            AudioAttributes.Builder usage = new AudioAttributes.Builder().setContentType(audioAttributes.f13200d).setFlags(audioAttributes.f13201e).setUsage(audioAttributes.f13202i);
            int i10 = w0.f40279a;
            if (i10 >= 29) {
                b.a(usage, audioAttributes.f13203o);
            }
            if (i10 >= 32) {
                c.a(usage, audioAttributes.f13204p);
            }
            this.f13206a = usage.build();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        private int f13207a = 0;

        /* renamed from: b  reason: collision with root package name */
        private int f13208b = 0;

        /* renamed from: c  reason: collision with root package name */
        private int f13209c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f13210d = 1;

        /* renamed from: e  reason: collision with root package name */
        private int f13211e = 0;

        public AudioAttributes a() {
            return new AudioAttributes(this.f13207a, this.f13208b, this.f13209c, this.f13210d, this.f13211e);
        }

        public e b(int i10) {
            this.f13210d = i10;
            return this;
        }

        public e c(int i10) {
            this.f13207a = i10;
            return this;
        }

        public e d(int i10) {
            this.f13208b = i10;
            return this;
        }

        public e e(int i10) {
            this.f13211e = i10;
            return this;
        }

        public e f(int i10) {
            this.f13209c = i10;
            return this;
        }
    }

    public static /* synthetic */ AudioAttributes a(Bundle bundle) {
        e eVar = new e();
        String str = f13194s;
        if (bundle.containsKey(str)) {
            eVar.c(bundle.getInt(str));
        }
        String str2 = f13195t;
        if (bundle.containsKey(str2)) {
            eVar.d(bundle.getInt(str2));
        }
        String str3 = f13196u;
        if (bundle.containsKey(str3)) {
            eVar.f(bundle.getInt(str3));
        }
        String str4 = f13197v;
        if (bundle.containsKey(str4)) {
            eVar.b(bundle.getInt(str4));
        }
        String str5 = f13198w;
        if (bundle.containsKey(str5)) {
            eVar.e(bundle.getInt(str5));
        }
        return eVar.a();
    }

    public d b() {
        if (this.f13205q == null) {
            this.f13205q = new d();
        }
        return this.f13205q;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && AudioAttributes.class == obj.getClass()) {
            AudioAttributes audioAttributes = (AudioAttributes) obj;
            if (this.f13200d == audioAttributes.f13200d && this.f13201e == audioAttributes.f13201e && this.f13202i == audioAttributes.f13202i && this.f13203o == audioAttributes.f13203o && this.f13204p == audioAttributes.f13204p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f13200d) * 31) + this.f13201e) * 31) + this.f13202i) * 31) + this.f13203o) * 31) + this.f13204p;
    }

    private AudioAttributes(int i10, int i11, int i12, int i13, int i14) {
        this.f13200d = i10;
        this.f13201e = i11;
        this.f13202i = i12;
        this.f13203o = i13;
        this.f13204p = i14;
    }
}
