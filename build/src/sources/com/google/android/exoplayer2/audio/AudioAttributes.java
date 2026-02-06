package com.google.android.exoplayer2.audio;

import android.media.AudioAttributes;
import android.os.Bundle;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.g;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AudioAttributes implements com.google.android.exoplayer2.g {

    /* renamed from: r  reason: collision with root package name */
    public static final AudioAttributes f12074r = new e().a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f12075s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f12076t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f12077u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f12078v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    private static final String f12079w = w0.B0(4);

    /* renamed from: x  reason: collision with root package name */
    public static final g.a f12080x = new g.a() { // from class: nc.d
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return AudioAttributes.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f12081d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12082e;

    /* renamed from: i  reason: collision with root package name */
    public final int f12083i;

    /* renamed from: o  reason: collision with root package name */
    public final int f12084o;

    /* renamed from: p  reason: collision with root package name */
    public final int f12085p;

    /* renamed from: q  reason: collision with root package name */
    private d f12086q;

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
        public final android.media.AudioAttributes f12087a;

        private d(AudioAttributes audioAttributes) {
            AudioAttributes.Builder usage = new AudioAttributes.Builder().setContentType(audioAttributes.f12081d).setFlags(audioAttributes.f12082e).setUsage(audioAttributes.f12083i);
            int i10 = w0.f39012a;
            if (i10 >= 29) {
                b.a(usage, audioAttributes.f12084o);
            }
            if (i10 >= 32) {
                c.a(usage, audioAttributes.f12085p);
            }
            this.f12087a = usage.build();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        private int f12088a = 0;

        /* renamed from: b  reason: collision with root package name */
        private int f12089b = 0;

        /* renamed from: c  reason: collision with root package name */
        private int f12090c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f12091d = 1;

        /* renamed from: e  reason: collision with root package name */
        private int f12092e = 0;

        public AudioAttributes a() {
            return new AudioAttributes(this.f12088a, this.f12089b, this.f12090c, this.f12091d, this.f12092e);
        }

        public e b(int i10) {
            this.f12091d = i10;
            return this;
        }

        public e c(int i10) {
            this.f12088a = i10;
            return this;
        }

        public e d(int i10) {
            this.f12089b = i10;
            return this;
        }

        public e e(int i10) {
            this.f12092e = i10;
            return this;
        }

        public e f(int i10) {
            this.f12090c = i10;
            return this;
        }
    }

    public static /* synthetic */ AudioAttributes a(Bundle bundle) {
        e eVar = new e();
        String str = f12075s;
        if (bundle.containsKey(str)) {
            eVar.c(bundle.getInt(str));
        }
        String str2 = f12076t;
        if (bundle.containsKey(str2)) {
            eVar.d(bundle.getInt(str2));
        }
        String str3 = f12077u;
        if (bundle.containsKey(str3)) {
            eVar.f(bundle.getInt(str3));
        }
        String str4 = f12078v;
        if (bundle.containsKey(str4)) {
            eVar.b(bundle.getInt(str4));
        }
        String str5 = f12079w;
        if (bundle.containsKey(str5)) {
            eVar.e(bundle.getInt(str5));
        }
        return eVar.a();
    }

    public d b() {
        if (this.f12086q == null) {
            this.f12086q = new d();
        }
        return this.f12086q;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && AudioAttributes.class == obj.getClass()) {
            AudioAttributes audioAttributes = (AudioAttributes) obj;
            if (this.f12081d == audioAttributes.f12081d && this.f12082e == audioAttributes.f12082e && this.f12083i == audioAttributes.f12083i && this.f12084o == audioAttributes.f12084o && this.f12085p == audioAttributes.f12085p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f12081d) * 31) + this.f12082e) * 31) + this.f12083i) * 31) + this.f12084o) * 31) + this.f12085p;
    }

    private AudioAttributes(int i10, int i11, int i12, int i13, int i14) {
        this.f12081d = i10;
        this.f12082e = i11;
        this.f12083i = i12;
        this.f12084o = i13;
        this.f12085p = i14;
    }
}
