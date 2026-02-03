package xj;

import gf.o;
import java.util.concurrent.Executor;
import og.xe;
import og.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final int f53328a;

    /* renamed from: b  reason: collision with root package name */
    private final int f53329b;

    /* renamed from: c  reason: collision with root package name */
    private final int f53330c;

    /* renamed from: d  reason: collision with root package name */
    private final int f53331d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f53332e;

    /* renamed from: f  reason: collision with root package name */
    private final float f53333f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f53334g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f53335a = 1;

        /* renamed from: b  reason: collision with root package name */
        private int f53336b = 1;

        /* renamed from: c  reason: collision with root package name */
        private int f53337c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f53338d = 1;

        /* renamed from: e  reason: collision with root package name */
        private boolean f53339e = false;

        /* renamed from: f  reason: collision with root package name */
        private float f53340f = 0.1f;

        /* renamed from: g  reason: collision with root package name */
        private Executor f53341g;

        public e a() {
            return new e(this.f53335a, this.f53336b, this.f53337c, this.f53338d, this.f53339e, this.f53340f, this.f53341g, null);
        }

        public a b(int i10) {
            this.f53335a = i10;
            return this;
        }

        public a c(float f10) {
            this.f53340f = f10;
            return this;
        }
    }

    /* synthetic */ e(int i10, int i11, int i12, int i13, boolean z10, float f10, Executor executor, g gVar) {
        this.f53328a = i10;
        this.f53329b = i11;
        this.f53330c = i12;
        this.f53331d = i13;
        this.f53332e = z10;
        this.f53333f = f10;
        this.f53334g = executor;
    }

    public final float a() {
        return this.f53333f;
    }

    public final int b() {
        return this.f53330c;
    }

    public final int c() {
        return this.f53329b;
    }

    public final int d() {
        return this.f53328a;
    }

    public final int e() {
        return this.f53331d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e)) {
            return false;
        }
        e eVar = (e) obj;
        if (Float.floatToIntBits(this.f53333f) == Float.floatToIntBits(eVar.f53333f) && o.a(Integer.valueOf(this.f53328a), Integer.valueOf(eVar.f53328a)) && o.a(Integer.valueOf(this.f53329b), Integer.valueOf(eVar.f53329b)) && o.a(Integer.valueOf(this.f53331d), Integer.valueOf(eVar.f53331d)) && o.a(Boolean.valueOf(this.f53332e), Boolean.valueOf(eVar.f53332e)) && o.a(Integer.valueOf(this.f53330c), Integer.valueOf(eVar.f53330c)) && o.a(this.f53334g, eVar.f53334g)) {
            return true;
        }
        return false;
    }

    public final Executor f() {
        return this.f53334g;
    }

    public final boolean g() {
        return this.f53332e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Float.floatToIntBits(this.f53333f)), Integer.valueOf(this.f53328a), Integer.valueOf(this.f53329b), Integer.valueOf(this.f53331d), Boolean.valueOf(this.f53332e), Integer.valueOf(this.f53330c), this.f53334g);
    }

    public String toString() {
        xe a10 = ye.a("FaceDetectorOptions");
        a10.b("landmarkMode", this.f53328a);
        a10.b("contourMode", this.f53329b);
        a10.b("classificationMode", this.f53330c);
        a10.b("performanceMode", this.f53331d);
        a10.d("trackingEnabled", this.f53332e);
        a10.a("minFaceSize", this.f53333f);
        return a10.toString();
    }
}
