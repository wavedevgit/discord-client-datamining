package ck;

import hf.o;
import java.util.concurrent.Executor;
import qg.xe;
import qg.ye;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final int f7662a;

    /* renamed from: b  reason: collision with root package name */
    private final int f7663b;

    /* renamed from: c  reason: collision with root package name */
    private final int f7664c;

    /* renamed from: d  reason: collision with root package name */
    private final int f7665d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f7666e;

    /* renamed from: f  reason: collision with root package name */
    private final float f7667f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f7668g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f7669a = 1;

        /* renamed from: b  reason: collision with root package name */
        private int f7670b = 1;

        /* renamed from: c  reason: collision with root package name */
        private int f7671c = 1;

        /* renamed from: d  reason: collision with root package name */
        private int f7672d = 1;

        /* renamed from: e  reason: collision with root package name */
        private boolean f7673e = false;

        /* renamed from: f  reason: collision with root package name */
        private float f7674f = 0.1f;

        /* renamed from: g  reason: collision with root package name */
        private Executor f7675g;

        public e a() {
            return new e(this.f7669a, this.f7670b, this.f7671c, this.f7672d, this.f7673e, this.f7674f, this.f7675g, null);
        }

        public a b(int i10) {
            this.f7669a = i10;
            return this;
        }

        public a c(float f10) {
            this.f7674f = f10;
            return this;
        }
    }

    /* synthetic */ e(int i10, int i11, int i12, int i13, boolean z10, float f10, Executor executor, g gVar) {
        this.f7662a = i10;
        this.f7663b = i11;
        this.f7664c = i12;
        this.f7665d = i13;
        this.f7666e = z10;
        this.f7667f = f10;
        this.f7668g = executor;
    }

    public final float a() {
        return this.f7667f;
    }

    public final int b() {
        return this.f7664c;
    }

    public final int c() {
        return this.f7663b;
    }

    public final int d() {
        return this.f7662a;
    }

    public final int e() {
        return this.f7665d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e)) {
            return false;
        }
        e eVar = (e) obj;
        if (Float.floatToIntBits(this.f7667f) == Float.floatToIntBits(eVar.f7667f) && o.a(Integer.valueOf(this.f7662a), Integer.valueOf(eVar.f7662a)) && o.a(Integer.valueOf(this.f7663b), Integer.valueOf(eVar.f7663b)) && o.a(Integer.valueOf(this.f7665d), Integer.valueOf(eVar.f7665d)) && o.a(Boolean.valueOf(this.f7666e), Boolean.valueOf(eVar.f7666e)) && o.a(Integer.valueOf(this.f7664c), Integer.valueOf(eVar.f7664c)) && o.a(this.f7668g, eVar.f7668g)) {
            return true;
        }
        return false;
    }

    public final Executor f() {
        return this.f7668g;
    }

    public final boolean g() {
        return this.f7666e;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(Float.floatToIntBits(this.f7667f)), Integer.valueOf(this.f7662a), Integer.valueOf(this.f7663b), Integer.valueOf(this.f7665d), Boolean.valueOf(this.f7666e), Integer.valueOf(this.f7664c), this.f7668g);
    }

    public String toString() {
        xe a10 = ye.a("FaceDetectorOptions");
        a10.b("landmarkMode", this.f7662a);
        a10.b("contourMode", this.f7663b);
        a10.b("classificationMode", this.f7664c);
        a10.b("performanceMode", this.f7665d);
        a10.d("trackingEnabled", this.f7666e);
        a10.a("minFaceSize", this.f7667f);
        return a10.toString();
    }
}
