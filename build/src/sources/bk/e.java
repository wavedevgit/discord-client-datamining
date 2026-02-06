package bk;

import gf.o;
import java.util.concurrent.Executor;
import pg.xe;
import pg.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final int f6821a;

    /* renamed from: b  reason: collision with root package name */
    private final int f6822b;

    /* renamed from: c  reason: collision with root package name */
    private final int f6823c;

    /* renamed from: d  reason: collision with root package name */
    private final int f6824d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f6825e;

    /* renamed from: f  reason: collision with root package name */
    private final float f6826f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f6827g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f6828a = 1;

        /* renamed from: b  reason: collision with root package name */
        private int f6829b = 1;

        /* renamed from: c  reason: collision with root package name */
        private int f6830c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f6831d = 1;

        /* renamed from: e  reason: collision with root package name */
        private boolean f6832e = false;

        /* renamed from: f  reason: collision with root package name */
        private float f6833f = 0.1f;

        /* renamed from: g  reason: collision with root package name */
        private Executor f6834g;

        public e a() {
            return new e(this.f6828a, this.f6829b, this.f6830c, this.f6831d, this.f6832e, this.f6833f, this.f6834g, null);
        }

        public a b(int i10) {
            this.f6828a = i10;
            return this;
        }

        public a c(float f10) {
            this.f6833f = f10;
            return this;
        }
    }

    /* synthetic */ e(int i10, int i11, int i12, int i13, boolean z10, float f10, Executor executor, g gVar) {
        this.f6821a = i10;
        this.f6822b = i11;
        this.f6823c = i12;
        this.f6824d = i13;
        this.f6825e = z10;
        this.f6826f = f10;
        this.f6827g = executor;
    }

    public final float a() {
        return this.f6826f;
    }

    public final int b() {
        return this.f6823c;
    }

    public final int c() {
        return this.f6822b;
    }

    public final int d() {
        return this.f6821a;
    }

    public final int e() {
        return this.f6824d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e)) {
            return false;
        }
        e eVar = (e) obj;
        if (Float.floatToIntBits(this.f6826f) == Float.floatToIntBits(eVar.f6826f) && o.a(Integer.valueOf(this.f6821a), Integer.valueOf(eVar.f6821a)) && o.a(Integer.valueOf(this.f6822b), Integer.valueOf(eVar.f6822b)) && o.a(Integer.valueOf(this.f6824d), Integer.valueOf(eVar.f6824d)) && o.a(Boolean.valueOf(this.f6825e), Boolean.valueOf(eVar.f6825e)) && o.a(Integer.valueOf(this.f6823c), Integer.valueOf(eVar.f6823c)) && o.a(this.f6827g, eVar.f6827g)) {
            return true;
        }
        return false;
    }

    public final Executor f() {
        return this.f6827g;
    }

    public final boolean g() {
        return this.f6825e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Float.floatToIntBits(this.f6826f)), Integer.valueOf(this.f6821a), Integer.valueOf(this.f6822b), Integer.valueOf(this.f6824d), Boolean.valueOf(this.f6825e), Integer.valueOf(this.f6823c), this.f6827g);
    }

    public String toString() {
        xe a10 = ye.a("FaceDetectorOptions");
        a10.b("landmarkMode", this.f6821a);
        a10.b("contourMode", this.f6822b);
        a10.b("classificationMode", this.f6823c);
        a10.b("performanceMode", this.f6824d);
        a10.d("trackingEnabled", this.f6825e);
        a10.a("minFaceSize", this.f6826f);
        return a10.toString();
    }
}
