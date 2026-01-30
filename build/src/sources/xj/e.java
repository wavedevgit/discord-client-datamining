package xj;

import gf.o;
import java.util.concurrent.Executor;
import og.xe;
import og.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final int f53399a;

    /* renamed from: b  reason: collision with root package name */
    private final int f53400b;

    /* renamed from: c  reason: collision with root package name */
    private final int f53401c;

    /* renamed from: d  reason: collision with root package name */
    private final int f53402d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f53403e;

    /* renamed from: f  reason: collision with root package name */
    private final float f53404f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f53405g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f53406a = 1;

        /* renamed from: b  reason: collision with root package name */
        private int f53407b = 1;

        /* renamed from: c  reason: collision with root package name */
        private int f53408c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f53409d = 1;

        /* renamed from: e  reason: collision with root package name */
        private boolean f53410e = false;

        /* renamed from: f  reason: collision with root package name */
        private float f53411f = 0.1f;

        /* renamed from: g  reason: collision with root package name */
        private Executor f53412g;

        public e a() {
            return new e(this.f53406a, this.f53407b, this.f53408c, this.f53409d, this.f53410e, this.f53411f, this.f53412g, null);
        }

        public a b(int i10) {
            this.f53406a = i10;
            return this;
        }

        public a c(float f10) {
            this.f53411f = f10;
            return this;
        }
    }

    /* synthetic */ e(int i10, int i11, int i12, int i13, boolean z10, float f10, Executor executor, g gVar) {
        this.f53399a = i10;
        this.f53400b = i11;
        this.f53401c = i12;
        this.f53402d = i13;
        this.f53403e = z10;
        this.f53404f = f10;
        this.f53405g = executor;
    }

    public final float a() {
        return this.f53404f;
    }

    public final int b() {
        return this.f53401c;
    }

    public final int c() {
        return this.f53400b;
    }

    public final int d() {
        return this.f53399a;
    }

    public final int e() {
        return this.f53402d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e)) {
            return false;
        }
        e eVar = (e) obj;
        if (Float.floatToIntBits(this.f53404f) == Float.floatToIntBits(eVar.f53404f) && o.a(Integer.valueOf(this.f53399a), Integer.valueOf(eVar.f53399a)) && o.a(Integer.valueOf(this.f53400b), Integer.valueOf(eVar.f53400b)) && o.a(Integer.valueOf(this.f53402d), Integer.valueOf(eVar.f53402d)) && o.a(Boolean.valueOf(this.f53403e), Boolean.valueOf(eVar.f53403e)) && o.a(Integer.valueOf(this.f53401c), Integer.valueOf(eVar.f53401c)) && o.a(this.f53405g, eVar.f53405g)) {
            return true;
        }
        return false;
    }

    public final Executor f() {
        return this.f53405g;
    }

    public final boolean g() {
        return this.f53403e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Float.floatToIntBits(this.f53404f)), Integer.valueOf(this.f53399a), Integer.valueOf(this.f53400b), Integer.valueOf(this.f53402d), Boolean.valueOf(this.f53403e), Integer.valueOf(this.f53401c), this.f53405g);
    }

    public String toString() {
        xe a10 = ye.a("FaceDetectorOptions");
        a10.b("landmarkMode", this.f53399a);
        a10.b("contourMode", this.f53400b);
        a10.b("classificationMode", this.f53401c);
        a10.b("performanceMode", this.f53402d);
        a10.d("trackingEnabled", this.f53403e);
        a10.a("minFaceSize", this.f53404f);
        return a10.toString();
    }
}
