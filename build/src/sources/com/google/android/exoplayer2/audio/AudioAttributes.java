package com.google.android.exoplayer2.audio;

import android.media.AudioAttributes;
import android.os.Bundle;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.g;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AudioAttributes implements com.google.android.exoplayer2.g {

    /* renamed from: r  reason: collision with root package name */
    public static final AudioAttributes f12792r = new e().a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f12793s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f12794t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f12795u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f12796v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    private static final String f12797w = w0.B0(4);

    /* renamed from: x  reason: collision with root package name */
    public static final g.a f12798x = new g.a() { // from class: oc.d
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return AudioAttributes.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f12799d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12800e;

    /* renamed from: i  reason: collision with root package name */
    public final int f12801i;

    /* renamed from: o  reason: collision with root package name */
    public final int f12802o;

    /* renamed from: p  reason: collision with root package name */
    public final int f12803p;

    /* renamed from: q  reason: collision with root package name */
    private d f12804q;

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
        public final android.media.AudioAttributes f12805a;

        private d(AudioAttributes audioAttributes) {
            AudioAttributes.Builder usage = new AudioAttributes.Builder().setContentType(audioAttributes.f12799d).setFlags(audioAttributes.f12800e).setUsage(audioAttributes.f12801i);
            int i10 = w0.f39038a;
            if (i10 >= 29) {
                b.a(usage, audioAttributes.f12802o);
            }
            if (i10 >= 32) {
                c.a(usage, audioAttributes.f12803p);
            }
            this.f12805a = usage.build();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        private int f12806a = 0;

        /* renamed from: b  reason: collision with root package name */
        private int f12807b = 0;

        /* renamed from: c  reason: collision with root package name */
        private int f12808c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f12809d = 1;

        /* renamed from: e  reason: collision with root package name */
        private int f12810e = 0;

        public AudioAttributes a() {
            return new AudioAttributes(this.f12806a, this.f12807b, this.f12808c, this.f12809d, this.f12810e);
        }

        public e b(int i10) {
            this.f12809d = i10;
            return this;
        }

        public e c(int i10) {
            this.f12806a = i10;
            return this;
        }

        public e d(int i10) {
            this.f12807b = i10;
            return this;
        }

        public e e(int i10) {
            this.f12810e = i10;
            return this;
        }

        public e f(int i10) {
            this.f12808c = i10;
            return this;
        }
    }

    public static /* synthetic */ AudioAttributes a(Bundle bundle) {
        e eVar = new e();
        String str = f12793s;
        if (bundle.containsKey(str)) {
            eVar.c(bundle.getInt(str));
        }
        String str2 = f12794t;
        if (bundle.containsKey(str2)) {
            eVar.d(bundle.getInt(str2));
        }
        String str3 = f12795u;
        if (bundle.containsKey(str3)) {
            eVar.f(bundle.getInt(str3));
        }
        String str4 = f12796v;
        if (bundle.containsKey(str4)) {
            eVar.b(bundle.getInt(str4));
        }
        String str5 = f12797w;
        if (bundle.containsKey(str5)) {
            eVar.e(bundle.getInt(str5));
        }
        return eVar.a();
    }

    public d b() {
        if (this.f12804q == null) {
            this.f12804q = new d();
        }
        return this.f12804q;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && AudioAttributes.class == obj.getClass()) {
            AudioAttributes audioAttributes = (AudioAttributes) obj;
            if (this.f12799d == audioAttributes.f12799d && this.f12800e == audioAttributes.f12800e && this.f12801i == audioAttributes.f12801i && this.f12802o == audioAttributes.f12802o && this.f12803p == audioAttributes.f12803p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f12799d) * 31) + this.f12800e) * 31) + this.f12801i) * 31) + this.f12802o) * 31) + this.f12803p;
    }

    private AudioAttributes(int i10, int i11, int i12, int i13, int i14) {
        this.f12799d = i10;
        this.f12800e = i11;
        this.f12801i = i12;
        this.f12802o = i13;
        this.f12803p = i14;
    }
}
