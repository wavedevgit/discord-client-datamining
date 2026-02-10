package ek;

import hf.o;
import java.util.concurrent.Executor;
import qg.xe;
import qg.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final int f22904a;

    /* renamed from: b  reason: collision with root package name */
    private final int f22905b;

    /* renamed from: c  reason: collision with root package name */
    private final int f22906c;

    /* renamed from: d  reason: collision with root package name */
    private final int f22907d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f22908e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22909f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f22910g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f22911a = 1;

        /* renamed from: b  reason: collision with root package name */
        private int f22912b = 1;

        /* renamed from: c  reason: collision with root package name */
        private int f22913c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f22914d = 1;

        /* renamed from: e  reason: collision with root package name */
        private boolean f22915e = false;

        /* renamed from: f  reason: collision with root package name */
        private float f22916f = 0.1f;

        /* renamed from: g  reason: collision with root package name */
        private Executor f22917g;

        public e a() {
            return new e(this.f22911a, this.f22912b, this.f22913c, this.f22914d, this.f22915e, this.f22916f, this.f22917g, null);
        }

        public a b(int i10) {
            this.f22911a = i10;
            return this;
        }

        public a c(float f10) {
            this.f22916f = f10;
            return this;
        }
    }

    /* synthetic */ e(int i10, int i11, int i12, int i13, boolean z10, float f10, Executor executor, g gVar) {
        this.f22904a = i10;
        this.f22905b = i11;
        this.f22906c = i12;
        this.f22907d = i13;
        this.f22908e = z10;
        this.f22909f = f10;
        this.f22910g = executor;
    }

    public final float a() {
        return this.f22909f;
    }

    public final int b() {
        return this.f22906c;
    }

    public final int c() {
        return this.f22905b;
    }

    public final int d() {
        return this.f22904a;
    }

    public final int e() {
        return this.f22907d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e)) {
            return false;
        }
        e eVar = (e) obj;
        if (Float.floatToIntBits(this.f22909f) == Float.floatToIntBits(eVar.f22909f) && o.a(Integer.valueOf(this.f22904a), Integer.valueOf(eVar.f22904a)) && o.a(Integer.valueOf(this.f22905b), Integer.valueOf(eVar.f22905b)) && o.a(Integer.valueOf(this.f22907d), Integer.valueOf(eVar.f22907d)) && o.a(Boolean.valueOf(this.f22908e), Boolean.valueOf(eVar.f22908e)) && o.a(Integer.valueOf(this.f22906c), Integer.valueOf(eVar.f22906c)) && o.a(this.f22910g, eVar.f22910g)) {
            return true;
        }
        return false;
    }

    public final Executor f() {
        return this.f22910g;
    }

    public final boolean g() {
        return this.f22908e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Float.floatToIntBits(this.f22909f)), Integer.valueOf(this.f22904a), Integer.valueOf(this.f22905b), Integer.valueOf(this.f22907d), Boolean.valueOf(this.f22908e), Integer.valueOf(this.f22906c), this.f22910g);
    }

    public String toString() {
        xe a10 = ye.a("FaceDetectorOptions");
        a10.b("landmarkMode", this.f22904a);
        a10.b("contourMode", this.f22905b);
        a10.b("classificationMode", this.f22906c);
        a10.b("performanceMode", this.f22907d);
        a10.d("trackingEnabled", this.f22908e);
        a10.a("minFaceSize", this.f22909f);
        return a10.toString();
    }
}
