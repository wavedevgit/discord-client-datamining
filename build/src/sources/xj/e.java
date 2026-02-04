package xj;

import gf.o;
import java.util.concurrent.Executor;
import og.xe;
import og.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final int f53325a;

    /* renamed from: b  reason: collision with root package name */
    private final int f53326b;

    /* renamed from: c  reason: collision with root package name */
    private final int f53327c;

    /* renamed from: d  reason: collision with root package name */
    private final int f53328d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f53329e;

    /* renamed from: f  reason: collision with root package name */
    private final float f53330f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f53331g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f53332a = 1;

        /* renamed from: b  reason: collision with root package name */
        private int f53333b = 1;

        /* renamed from: c  reason: collision with root package name */
        private int f53334c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f53335d = 1;

        /* renamed from: e  reason: collision with root package name */
        private boolean f53336e = false;

        /* renamed from: f  reason: collision with root package name */
        private float f53337f = 0.1f;

        /* renamed from: g  reason: collision with root package name */
        private Executor f53338g;

        public e a() {
            return new e(this.f53332a, this.f53333b, this.f53334c, this.f53335d, this.f53336e, this.f53337f, this.f53338g, null);
        }

        public a b(int i10) {
            this.f53332a = i10;
            return this;
        }

        public a c(float f10) {
            this.f53337f = f10;
            return this;
        }
    }

    /* synthetic */ e(int i10, int i11, int i12, int i13, boolean z10, float f10, Executor executor, g gVar) {
        this.f53325a = i10;
        this.f53326b = i11;
        this.f53327c = i12;
        this.f53328d = i13;
        this.f53329e = z10;
        this.f53330f = f10;
        this.f53331g = executor;
    }

    public final float a() {
        return this.f53330f;
    }

    public final int b() {
        return this.f53327c;
    }

    public final int c() {
        return this.f53326b;
    }

    public final int d() {
        return this.f53325a;
    }

    public final int e() {
        return this.f53328d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e)) {
            return false;
        }
        e eVar = (e) obj;
        if (Float.floatToIntBits(this.f53330f) == Float.floatToIntBits(eVar.f53330f) && o.a(Integer.valueOf(this.f53325a), Integer.valueOf(eVar.f53325a)) && o.a(Integer.valueOf(this.f53326b), Integer.valueOf(eVar.f53326b)) && o.a(Integer.valueOf(this.f53328d), Integer.valueOf(eVar.f53328d)) && o.a(Boolean.valueOf(this.f53329e), Boolean.valueOf(eVar.f53329e)) && o.a(Integer.valueOf(this.f53327c), Integer.valueOf(eVar.f53327c)) && o.a(this.f53331g, eVar.f53331g)) {
            return true;
        }
        return false;
    }

    public final Executor f() {
        return this.f53331g;
    }

    public final boolean g() {
        return this.f53329e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Float.floatToIntBits(this.f53330f)), Integer.valueOf(this.f53325a), Integer.valueOf(this.f53326b), Integer.valueOf(this.f53328d), Boolean.valueOf(this.f53329e), Integer.valueOf(this.f53327c), this.f53331g);
    }

    public String toString() {
        xe a10 = ye.a("FaceDetectorOptions");
        a10.b("landmarkMode", this.f53325a);
        a10.b("contourMode", this.f53326b);
        a10.b("classificationMode", this.f53327c);
        a10.b("performanceMode", this.f53328d);
        a10.d("trackingEnabled", this.f53329e);
        a10.a("minFaceSize", this.f53330f);
        return a10.toString();
    }
}
