package com.google.android.exoplayer2.audio;

import android.media.AudioAttributes;
import android.os.Bundle;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.g;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AudioAttributes implements com.google.android.exoplayer2.g {

    /* renamed from: r  reason: collision with root package name */
    public static final AudioAttributes f11790r = new e().a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f11791s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f11792t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f11793u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f11794v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    private static final String f11795w = w0.B0(4);

    /* renamed from: x  reason: collision with root package name */
    public static final g.a f11796x = new g.a() { // from class: nc.d
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return AudioAttributes.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f11797d;

    /* renamed from: e  reason: collision with root package name */
    public final int f11798e;

    /* renamed from: i  reason: collision with root package name */
    public final int f11799i;

    /* renamed from: o  reason: collision with root package name */
    public final int f11800o;

    /* renamed from: p  reason: collision with root package name */
    public final int f11801p;

    /* renamed from: q  reason: collision with root package name */
    private d f11802q;

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
        public final android.media.AudioAttributes f11803a;

        private d(AudioAttributes audioAttributes) {
            AudioAttributes.Builder usage = new AudioAttributes.Builder().setContentType(audioAttributes.f11797d).setFlags(audioAttributes.f11798e).setUsage(audioAttributes.f11799i);
            int i10 = w0.f40197a;
            if (i10 >= 29) {
                b.a(usage, audioAttributes.f11800o);
            }
            if (i10 >= 32) {
                c.a(usage, audioAttributes.f11801p);
            }
            this.f11803a = usage.build();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        private int f11804a = 0;

        /* renamed from: b  reason: collision with root package name */
        private int f11805b = 0;

        /* renamed from: c  reason: collision with root package name */
        private int f11806c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f11807d = 1;

        /* renamed from: e  reason: collision with root package name */
        private int f11808e = 0;

        public AudioAttributes a() {
            return new AudioAttributes(this.f11804a, this.f11805b, this.f11806c, this.f11807d, this.f11808e);
        }

        public e b(int i10) {
            this.f11807d = i10;
            return this;
        }

        public e c(int i10) {
            this.f11804a = i10;
            return this;
        }

        public e d(int i10) {
            this.f11805b = i10;
            return this;
        }

        public e e(int i10) {
            this.f11808e = i10;
            return this;
        }

        public e f(int i10) {
            this.f11806c = i10;
            return this;
        }
    }

    public static /* synthetic */ AudioAttributes a(Bundle bundle) {
        e eVar = new e();
        String str = f11791s;
        if (bundle.containsKey(str)) {
            eVar.c(bundle.getInt(str));
        }
        String str2 = f11792t;
        if (bundle.containsKey(str2)) {
            eVar.d(bundle.getInt(str2));
        }
        String str3 = f11793u;
        if (bundle.containsKey(str3)) {
            eVar.f(bundle.getInt(str3));
        }
        String str4 = f11794v;
        if (bundle.containsKey(str4)) {
            eVar.b(bundle.getInt(str4));
        }
        String str5 = f11795w;
        if (bundle.containsKey(str5)) {
            eVar.e(bundle.getInt(str5));
        }
        return eVar.a();
    }

    public d b() {
        if (this.f11802q == null) {
            this.f11802q = new d();
        }
        return this.f11802q;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && AudioAttributes.class == obj.getClass()) {
            AudioAttributes audioAttributes = (AudioAttributes) obj;
            if (this.f11797d == audioAttributes.f11797d && this.f11798e == audioAttributes.f11798e && this.f11799i == audioAttributes.f11799i && this.f11800o == audioAttributes.f11800o && this.f11801p == audioAttributes.f11801p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f11797d) * 31) + this.f11798e) * 31) + this.f11799i) * 31) + this.f11800o) * 31) + this.f11801p;
    }

    private AudioAttributes(int i10, int i11, int i12, int i13, int i14) {
        this.f11797d = i10;
        this.f11798e = i11;
        this.f11799i = i12;
        this.f11800o = i13;
        this.f11801p = i14;
    }
}
