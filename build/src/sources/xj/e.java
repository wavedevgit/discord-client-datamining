package xj;

import gf.o;
import java.util.concurrent.Executor;
import og.xe;
import og.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final int f53383a;

    /* renamed from: b  reason: collision with root package name */
    private final int f53384b;

    /* renamed from: c  reason: collision with root package name */
    private final int f53385c;

    /* renamed from: d  reason: collision with root package name */
    private final int f53386d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f53387e;

    /* renamed from: f  reason: collision with root package name */
    private final float f53388f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f53389g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f53390a = 1;

        /* renamed from: b  reason: collision with root package name */
        private int f53391b = 1;

        /* renamed from: c  reason: collision with root package name */
        private int f53392c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f53393d = 1;

        /* renamed from: e  reason: collision with root package name */
        private boolean f53394e = false;

        /* renamed from: f  reason: collision with root package name */
        private float f53395f = 0.1f;

        /* renamed from: g  reason: collision with root package name */
        private Executor f53396g;

        public e a() {
            return new e(this.f53390a, this.f53391b, this.f53392c, this.f53393d, this.f53394e, this.f53395f, this.f53396g, null);
        }

        public a b(int i10) {
            this.f53390a = i10;
            return this;
        }

        public a c(float f10) {
            this.f53395f = f10;
            return this;
        }
    }

    /* synthetic */ e(int i10, int i11, int i12, int i13, boolean z10, float f10, Executor executor, g gVar) {
        this.f53383a = i10;
        this.f53384b = i11;
        this.f53385c = i12;
        this.f53386d = i13;
        this.f53387e = z10;
        this.f53388f = f10;
        this.f53389g = executor;
    }

    public final float a() {
        return this.f53388f;
    }

    public final int b() {
        return this.f53385c;
    }

    public final int c() {
        return this.f53384b;
    }

    public final int d() {
        return this.f53383a;
    }

    public final int e() {
        return this.f53386d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e)) {
            return false;
        }
        e eVar = (e) obj;
        if (Float.floatToIntBits(this.f53388f) == Float.floatToIntBits(eVar.f53388f) && o.a(Integer.valueOf(this.f53383a), Integer.valueOf(eVar.f53383a)) && o.a(Integer.valueOf(this.f53384b), Integer.valueOf(eVar.f53384b)) && o.a(Integer.valueOf(this.f53386d), Integer.valueOf(eVar.f53386d)) && o.a(Boolean.valueOf(this.f53387e), Boolean.valueOf(eVar.f53387e)) && o.a(Integer.valueOf(this.f53385c), Integer.valueOf(eVar.f53385c)) && o.a(this.f53389g, eVar.f53389g)) {
            return true;
        }
        return false;
    }

    public final Executor f() {
        return this.f53389g;
    }

    public final boolean g() {
        return this.f53387e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Float.floatToIntBits(this.f53388f)), Integer.valueOf(this.f53383a), Integer.valueOf(this.f53384b), Integer.valueOf(this.f53386d), Boolean.valueOf(this.f53387e), Integer.valueOf(this.f53385c), this.f53389g);
    }

    public String toString() {
        xe a10 = ye.a("FaceDetectorOptions");
        a10.b("landmarkMode", this.f53383a);
        a10.b("contourMode", this.f53384b);
        a10.b("classificationMode", this.f53385c);
        a10.b("performanceMode", this.f53386d);
        a10.d("trackingEnabled", this.f53387e);
        a10.a("minFaceSize", this.f53388f);
        return a10.toString();
    }
}
