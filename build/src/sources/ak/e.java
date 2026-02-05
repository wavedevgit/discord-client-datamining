package ak;

import gf.o;
import java.util.concurrent.Executor;
import og.xe;
import og.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final int f692a;

    /* renamed from: b  reason: collision with root package name */
    private final int f693b;

    /* renamed from: c  reason: collision with root package name */
    private final int f694c;

    /* renamed from: d  reason: collision with root package name */
    private final int f695d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f696e;

    /* renamed from: f  reason: collision with root package name */
    private final float f697f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f698g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f699a = 1;

        /* renamed from: b  reason: collision with root package name */
        private int f700b = 1;

        /* renamed from: c  reason: collision with root package name */
        private int f701c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f702d = 1;

        /* renamed from: e  reason: collision with root package name */
        private boolean f703e = false;

        /* renamed from: f  reason: collision with root package name */
        private float f704f = 0.1f;

        /* renamed from: g  reason: collision with root package name */
        private Executor f705g;

        public e a() {
            return new e(this.f699a, this.f700b, this.f701c, this.f702d, this.f703e, this.f704f, this.f705g, null);
        }

        public a b(int i10) {
            this.f699a = i10;
            return this;
        }

        public a c(float f10) {
            this.f704f = f10;
            return this;
        }
    }

    /* synthetic */ e(int i10, int i11, int i12, int i13, boolean z10, float f10, Executor executor, g gVar) {
        this.f692a = i10;
        this.f693b = i11;
        this.f694c = i12;
        this.f695d = i13;
        this.f696e = z10;
        this.f697f = f10;
        this.f698g = executor;
    }

    public final float a() {
        return this.f697f;
    }

    public final int b() {
        return this.f694c;
    }

    public final int c() {
        return this.f693b;
    }

    public final int d() {
        return this.f692a;
    }

    public final int e() {
        return this.f695d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e)) {
            return false;
        }
        e eVar = (e) obj;
        if (Float.floatToIntBits(this.f697f) == Float.floatToIntBits(eVar.f697f) && o.a(Integer.valueOf(this.f692a), Integer.valueOf(eVar.f692a)) && o.a(Integer.valueOf(this.f693b), Integer.valueOf(eVar.f693b)) && o.a(Integer.valueOf(this.f695d), Integer.valueOf(eVar.f695d)) && o.a(Boolean.valueOf(this.f696e), Boolean.valueOf(eVar.f696e)) && o.a(Integer.valueOf(this.f694c), Integer.valueOf(eVar.f694c)) && o.a(this.f698g, eVar.f698g)) {
            return true;
        }
        return false;
    }

    public final Executor f() {
        return this.f698g;
    }

    public final boolean g() {
        return this.f696e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Float.floatToIntBits(this.f697f)), Integer.valueOf(this.f692a), Integer.valueOf(this.f693b), Integer.valueOf(this.f695d), Boolean.valueOf(this.f696e), Integer.valueOf(this.f694c), this.f698g);
    }

    public String toString() {
        xe a10 = ye.a("FaceDetectorOptions");
        a10.b("landmarkMode", this.f692a);
        a10.b("contourMode", this.f693b);
        a10.b("classificationMode", this.f694c);
        a10.b("performanceMode", this.f695d);
        a10.d("trackingEnabled", this.f696e);
        a10.a("minFaceSize", this.f697f);
        return a10.toString();
    }
}
