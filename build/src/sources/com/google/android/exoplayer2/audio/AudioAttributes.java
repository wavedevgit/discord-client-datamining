package com.google.android.exoplayer2.audio;

import android.media.AudioAttributes;
import android.os.Bundle;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.g;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AudioAttributes implements com.google.android.exoplayer2.g {

    /* renamed from: r  reason: collision with root package name */
    public static final AudioAttributes f12214r = new e().a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f12215s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f12216t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f12217u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f12218v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    private static final String f12219w = w0.B0(4);

    /* renamed from: x  reason: collision with root package name */
    public static final g.a f12220x = new g.a() { // from class: oc.d
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return AudioAttributes.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f12221d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12222e;

    /* renamed from: i  reason: collision with root package name */
    public final int f12223i;

    /* renamed from: o  reason: collision with root package name */
    public final int f12224o;

    /* renamed from: p  reason: collision with root package name */
    public final int f12225p;

    /* renamed from: q  reason: collision with root package name */
    private d f12226q;

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
        public final android.media.AudioAttributes f12227a;

        private d(AudioAttributes audioAttributes) {
            AudioAttributes.Builder usage = new AudioAttributes.Builder().setContentType(audioAttributes.f12221d).setFlags(audioAttributes.f12222e).setUsage(audioAttributes.f12223i);
            int i10 = w0.f40711a;
            if (i10 >= 29) {
                b.a(usage, audioAttributes.f12224o);
            }
            if (i10 >= 32) {
                c.a(usage, audioAttributes.f12225p);
            }
            this.f12227a = usage.build();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        private int f12228a = 0;

        /* renamed from: b  reason: collision with root package name */
        private int f12229b = 0;

        /* renamed from: c  reason: collision with root package name */
        private int f12230c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f12231d = 1;

        /* renamed from: e  reason: collision with root package name */
        private int f12232e = 0;

        public AudioAttributes a() {
            return new AudioAttributes(this.f12228a, this.f12229b, this.f12230c, this.f12231d, this.f12232e);
        }

        public e b(int i10) {
            this.f12231d = i10;
            return this;
        }

        public e c(int i10) {
            this.f12228a = i10;
            return this;
        }

        public e d(int i10) {
            this.f12229b = i10;
            return this;
        }

        public e e(int i10) {
            this.f12232e = i10;
            return this;
        }

        public e f(int i10) {
            this.f12230c = i10;
            return this;
        }
    }

    public static /* synthetic */ AudioAttributes a(Bundle bundle) {
        e eVar = new e();
        String str = f12215s;
        if (bundle.containsKey(str)) {
            eVar.c(bundle.getInt(str));
        }
        String str2 = f12216t;
        if (bundle.containsKey(str2)) {
            eVar.d(bundle.getInt(str2));
        }
        String str3 = f12217u;
        if (bundle.containsKey(str3)) {
            eVar.f(bundle.getInt(str3));
        }
        String str4 = f12218v;
        if (bundle.containsKey(str4)) {
            eVar.b(bundle.getInt(str4));
        }
        String str5 = f12219w;
        if (bundle.containsKey(str5)) {
            eVar.e(bundle.getInt(str5));
        }
        return eVar.a();
    }

    public d b() {
        if (this.f12226q == null) {
            this.f12226q = new d();
        }
        return this.f12226q;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && AudioAttributes.class == obj.getClass()) {
            AudioAttributes audioAttributes = (AudioAttributes) obj;
            if (this.f12221d == audioAttributes.f12221d && this.f12222e == audioAttributes.f12222e && this.f12223i == audioAttributes.f12223i && this.f12224o == audioAttributes.f12224o && this.f12225p == audioAttributes.f12225p) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((527 + this.f12221d) * 31) + this.f12222e) * 31) + this.f12223i) * 31) + this.f12224o) * 31) + this.f12225p;
    }

    private AudioAttributes(int i10, int i11, int i12, int i13, int i14) {
        this.f12221d = i10;
        this.f12222e = i11;
        this.f12223i = i12;
        this.f12224o = i13;
        this.f12225p = i14;
    }
}
