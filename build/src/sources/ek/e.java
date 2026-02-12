package ek;

import hf.o;
import java.util.concurrent.Executor;
import qg.xe;
import qg.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final int f22905a;

    /* renamed from: b  reason: collision with root package name */
    private final int f22906b;

    /* renamed from: c  reason: collision with root package name */
    private final int f22907c;

    /* renamed from: d  reason: collision with root package name */
    private final int f22908d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f22909e;

    /* renamed from: f  reason: collision with root package name */
    private final float f22910f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f22911g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f22912a = 1;

        /* renamed from: b  reason: collision with root package name */
        private int f22913b = 1;

        /* renamed from: c  reason: collision with root package name */
        private int f22914c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f22915d = 1;

        /* renamed from: e  reason: collision with root package name */
        private boolean f22916e = false;

        /* renamed from: f  reason: collision with root package name */
        private float f22917f = 0.1f;

        /* renamed from: g  reason: collision with root package name */
        private Executor f22918g;

        public e a() {
            return new e(this.f22912a, this.f22913b, this.f22914c, this.f22915d, this.f22916e, this.f22917f, this.f22918g, null);
        }

        public a b(int i10) {
            this.f22912a = i10;
            return this;
        }

        public a c(float f10) {
            this.f22917f = f10;
            return this;
        }
    }

    /* synthetic */ e(int i10, int i11, int i12, int i13, boolean z10, float f10, Executor executor, g gVar) {
        this.f22905a = i10;
        this.f22906b = i11;
        this.f22907c = i12;
        this.f22908d = i13;
        this.f22909e = z10;
        this.f22910f = f10;
        this.f22911g = executor;
    }

    public final float a() {
        return this.f22910f;
    }

    public final int b() {
        return this.f22907c;
    }

    public final int c() {
        return this.f22906b;
    }

    public final int d() {
        return this.f22905a;
    }

    public final int e() {
        return this.f22908d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e)) {
            return false;
        }
        e eVar = (e) obj;
        if (Float.floatToIntBits(this.f22910f) == Float.floatToIntBits(eVar.f22910f) && o.a(Integer.valueOf(this.f22905a), Integer.valueOf(eVar.f22905a)) && o.a(Integer.valueOf(this.f22906b), Integer.valueOf(eVar.f22906b)) && o.a(Integer.valueOf(this.f22908d), Integer.valueOf(eVar.f22908d)) && o.a(Boolean.valueOf(this.f22909e), Boolean.valueOf(eVar.f22909e)) && o.a(Integer.valueOf(this.f22907c), Integer.valueOf(eVar.f22907c)) && o.a(this.f22911g, eVar.f22911g)) {
            return true;
        }
        return false;
    }

    public final Executor f() {
        return this.f22911g;
    }

    public final boolean g() {
        return this.f22909e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Float.floatToIntBits(this.f22910f)), Integer.valueOf(this.f22905a), Integer.valueOf(this.f22906b), Integer.valueOf(this.f22908d), Boolean.valueOf(this.f22909e), Integer.valueOf(this.f22907c), this.f22911g);
    }

    public String toString() {
        xe a10 = ye.a("FaceDetectorOptions");
        a10.b("landmarkMode", this.f22905a);
        a10.b("contourMode", this.f22906b);
        a10.b("classificationMode", this.f22907c);
        a10.b("performanceMode", this.f22908d);
        a10.d("trackingEnabled", this.f22909e);
        a10.a("minFaceSize", this.f22910f);
        return a10.toString();
    }
}
