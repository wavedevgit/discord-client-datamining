package com.google.android.exoplayer2.audio;

import android.media.AudioAttributes;
import android.os.Bundle;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.g;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AudioAttributes implements com.google.android.exoplayer2.g {

    /* renamed from: r  reason: collision with root package name */
    public static final AudioAttributes f12791r = new e().a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f12792s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f12793t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f12794u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f12795v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    private static final String f12796w = w0.B0(4);

    /* renamed from: x  reason: collision with root package name */
    public static final g.a f12797x = new g.a() { // from class: oc.d
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return AudioAttributes.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f12798d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12799e;

    /* renamed from: i  reason: collision with root package name */
    public final int f12800i;

    /* renamed from: o  reason: collision with root package name */
    public final int f12801o;

    /* renamed from: p  reason: collision with root package name */
    public final int f12802p;

    /* renamed from: q  reason: collision with root package name */
    private d f12803q;

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
        public final android.media.AudioAttributes f12804a;

        private d(AudioAttributes audioAttributes) {
            AudioAttributes.Builder usage = new AudioAttributes.Builder().setContentType(audioAttributes.f12798d).setFlags(audioAttributes.f12799e).setUsage(audioAttributes.f12800i);
            int i10 = w0.f39037a;
            if (i10 >= 29) {
                b.a(usage, audioAttributes.f12801o);
            }
            if (i10 >= 32) {
                c.a(usage, audioAttributes.f12802p);
            }
            this.f12804a = usage.build();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        private int f12805a = 0;

        /* renamed from: b  reason: collision with root package name */
        private int f12806b = 0;

        /* renamed from: c  reason: collision with root package name */
        private int f12807c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f12808d = 1;

        /* renamed from: e  reason: collision with root package name */
        private int f12809e = 0;

        public AudioAttributes a() {
            return new AudioAttributes(this.f12805a, this.f12806b, this.f12807c, this.f12808d, this.f12809e);
        }

        public e b(int i10) {
            this.f12808d = i10;
            return this;
        }

        public e c(int i10) {
            this.f12805a = i10;
            return this;
        }

        public e d(int i10) {
            this.f12806b = i10;
            return this;
        }

        public e e(int i10) {
            this.f12809e = i10;
            return this;
        }

        public e f(int i10) {
            this.f12807c = i10;
            return this;
        }
    }

    public static /* synthetic */ AudioAttributes a(Bundle bundle) {
        e eVar = new e();
        String str = f12792s;
        if (bundle.containsKey(str)) {
            eVar.c(bundle.getInt(str));
        }
        String str2 = f12793t;
        if (bundle.containsKey(str2)) {
            eVar.d(bundle.getInt(str2));
        }
        String str3 = f12794u;
        if (bundle.containsKey(str3)) {
            eVar.f(bundle.getInt(str3));
        }
        String str4 = f12795v;
        if (bundle.containsKey(str4)) {
            eVar.b(bundle.getInt(str4));
        }
        String str5 = f12796w;
        if (bundle.containsKey(str5)) {
            eVar.e(bundle.getInt(str5));
        }
        return eVar.a();
    }

    public d b() {
        if (this.f12803q == null) {
            this.f12803q = new d();
        }
        return this.f12803q;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && AudioAttributes.class == obj.getClass()) {
            AudioAttributes audioAttributes = (AudioAttributes) obj;
            if (this.f12798d == audioAttributes.f12798d && this.f12799e == audioAttributes.f12799e && this.f12800i == audioAttributes.f12800i && this.f12801o == audioAttributes.f12801o && this.f12802p == audioAttributes.f12802p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f12798d) * 31) + this.f12799e) * 31) + this.f12800i) * 31) + this.f12801o) * 31) + this.f12802p;
    }

    private AudioAttributes(int i10, int i11, int i12, int i13, int i14) {
        this.f12798d = i10;
        this.f12799e = i11;
        this.f12800i = i12;
        this.f12801o = i13;
        this.f12802p = i14;
    }
}
