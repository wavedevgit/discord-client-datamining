package com.google.android.exoplayer2.audio;

import android.media.AudioAttributes;
import android.os.Bundle;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.g;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AudioAttributes implements com.google.android.exoplayer2.g {

    /* renamed from: r  reason: collision with root package name */
    public static final AudioAttributes f12822r = new e().a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f12823s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f12824t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f12825u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f12826v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    private static final String f12827w = w0.B0(4);

    /* renamed from: x  reason: collision with root package name */
    public static final g.a f12828x = new g.a() { // from class: nc.d
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return AudioAttributes.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f12829d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12830e;

    /* renamed from: i  reason: collision with root package name */
    public final int f12831i;

    /* renamed from: o  reason: collision with root package name */
    public final int f12832o;

    /* renamed from: p  reason: collision with root package name */
    public final int f12833p;

    /* renamed from: q  reason: collision with root package name */
    private d f12834q;

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
        public final android.media.AudioAttributes f12835a;

        private d(AudioAttributes audioAttributes) {
            AudioAttributes.Builder usage = new AudioAttributes.Builder().setContentType(audioAttributes.f12829d).setFlags(audioAttributes.f12830e).setUsage(audioAttributes.f12831i);
            int i10 = w0.f40158a;
            if (i10 >= 29) {
                b.a(usage, audioAttributes.f12832o);
            }
            if (i10 >= 32) {
                c.a(usage, audioAttributes.f12833p);
            }
            this.f12835a = usage.build();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        private int f12836a = 0;

        /* renamed from: b  reason: collision with root package name */
        private int f12837b = 0;

        /* renamed from: c  reason: collision with root package name */
        private int f12838c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f12839d = 1;

        /* renamed from: e  reason: collision with root package name */
        private int f12840e = 0;

        public AudioAttributes a() {
            return new AudioAttributes(this.f12836a, this.f12837b, this.f12838c, this.f12839d, this.f12840e);
        }

        public e b(int i10) {
            this.f12839d = i10;
            return this;
        }

        public e c(int i10) {
            this.f12836a = i10;
            return this;
        }

        public e d(int i10) {
            this.f12837b = i10;
            return this;
        }

        public e e(int i10) {
            this.f12840e = i10;
            return this;
        }

        public e f(int i10) {
            this.f12838c = i10;
            return this;
        }
    }

    public static /* synthetic */ AudioAttributes a(Bundle bundle) {
        e eVar = new e();
        String str = f12823s;
        if (bundle.containsKey(str)) {
            eVar.c(bundle.getInt(str));
        }
        String str2 = f12824t;
        if (bundle.containsKey(str2)) {
            eVar.d(bundle.getInt(str2));
        }
        String str3 = f12825u;
        if (bundle.containsKey(str3)) {
            eVar.f(bundle.getInt(str3));
        }
        String str4 = f12826v;
        if (bundle.containsKey(str4)) {
            eVar.b(bundle.getInt(str4));
        }
        String str5 = f12827w;
        if (bundle.containsKey(str5)) {
            eVar.e(bundle.getInt(str5));
        }
        return eVar.a();
    }

    public d b() {
        if (this.f12834q == null) {
            this.f12834q = new d();
        }
        return this.f12834q;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && AudioAttributes.class == obj.getClass()) {
            AudioAttributes audioAttributes = (AudioAttributes) obj;
            if (this.f12829d == audioAttributes.f12829d && this.f12830e == audioAttributes.f12830e && this.f12831i == audioAttributes.f12831i && this.f12832o == audioAttributes.f12832o && this.f12833p == audioAttributes.f12833p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f12829d) * 31) + this.f12830e) * 31) + this.f12831i) * 31) + this.f12832o) * 31) + this.f12833p;
    }

    private AudioAttributes(int i10, int i11, int i12, int i13, int i14) {
        this.f12829d = i10;
        this.f12830e = i11;
        this.f12831i = i12;
        this.f12832o = i13;
        this.f12833p = i14;
    }
}
