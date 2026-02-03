package xj;

import gf.o;
import java.util.concurrent.Executor;
import og.xe;
import og.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final int f53607a;

    /* renamed from: b  reason: collision with root package name */
    private final int f53608b;

    /* renamed from: c  reason: collision with root package name */
    private final int f53609c;

    /* renamed from: d  reason: collision with root package name */
    private final int f53610d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f53611e;

    /* renamed from: f  reason: collision with root package name */
    private final float f53612f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f53613g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f53614a = 1;

        /* renamed from: b  reason: collision with root package name */
        private int f53615b = 1;

        /* renamed from: c  reason: collision with root package name */
        private int f53616c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f53617d = 1;

        /* renamed from: e  reason: collision with root package name */
        private boolean f53618e = false;

        /* renamed from: f  reason: collision with root package name */
        private float f53619f = 0.1f;

        /* renamed from: g  reason: collision with root package name */
        private Executor f53620g;

        public e a() {
            return new e(this.f53614a, this.f53615b, this.f53616c, this.f53617d, this.f53618e, this.f53619f, this.f53620g, null);
        }

        public a b(int i10) {
            this.f53614a = i10;
            return this;
        }

        public a c(float f10) {
            this.f53619f = f10;
            return this;
        }
    }

    /* synthetic */ e(int i10, int i11, int i12, int i13, boolean z10, float f10, Executor executor, g gVar) {
        this.f53607a = i10;
        this.f53608b = i11;
        this.f53609c = i12;
        this.f53610d = i13;
        this.f53611e = z10;
        this.f53612f = f10;
        this.f53613g = executor;
    }

    public final float a() {
        return this.f53612f;
    }

    public final int b() {
        return this.f53609c;
    }

    public final int c() {
        return this.f53608b;
    }

    public final int d() {
        return this.f53607a;
    }

    public final int e() {
        return this.f53610d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e)) {
            return false;
        }
        e eVar = (e) obj;
        if (Float.floatToIntBits(this.f53612f) == Float.floatToIntBits(eVar.f53612f) && o.a(Integer.valueOf(this.f53607a), Integer.valueOf(eVar.f53607a)) && o.a(Integer.valueOf(this.f53608b), Integer.valueOf(eVar.f53608b)) && o.a(Integer.valueOf(this.f53610d), Integer.valueOf(eVar.f53610d)) && o.a(Boolean.valueOf(this.f53611e), Boolean.valueOf(eVar.f53611e)) && o.a(Integer.valueOf(this.f53609c), Integer.valueOf(eVar.f53609c)) && o.a(this.f53613g, eVar.f53613g)) {
            return true;
        }
        return false;
    }

    public final Executor f() {
        return this.f53613g;
    }

    public final boolean g() {
        return this.f53611e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Float.floatToIntBits(this.f53612f)), Integer.valueOf(this.f53607a), Integer.valueOf(this.f53608b), Integer.valueOf(this.f53610d), Boolean.valueOf(this.f53611e), Integer.valueOf(this.f53609c), this.f53613g);
    }

    public String toString() {
        xe a10 = ye.a("FaceDetectorOptions");
        a10.b("landmarkMode", this.f53607a);
        a10.b("contourMode", this.f53608b);
        a10.b("classificationMode", this.f53609c);
        a10.b("performanceMode", this.f53610d);
        a10.d("trackingEnabled", this.f53611e);
        a10.a("minFaceSize", this.f53612f);
        return a10.toString();
    }
}
