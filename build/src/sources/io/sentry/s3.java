package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s3 {

    /* renamed from: a  reason: collision with root package name */
    private io.sentry.protocol.x f28894a;

    /* renamed from: b  reason: collision with root package name */
    private j8 f28895b;

    /* renamed from: c  reason: collision with root package name */
    private j8 f28896c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f28897d;

    /* renamed from: e  reason: collision with root package name */
    private final d f28898e;

    public s3() {
        this(new io.sentry.protocol.x(), new j8(), null, null, null);
    }

    public d a() {
        return this.f28898e;
    }

    public j8 b() {
        return this.f28896c;
    }

    public Double c() {
        double doubleValue;
        Double i10 = this.f28898e.i();
        if (i10 == null) {
            doubleValue = 0.0d;
        } else {
            doubleValue = i10.doubleValue();
        }
        return Double.valueOf(doubleValue);
    }

    public j8 d() {
        return this.f28895b;
    }

    public io.sentry.protocol.x e() {
        return this.f28894a;
    }

    public Boolean f() {
        return this.f28897d;
    }

    public e8 g() {
        e8 e8Var = new e8(this.f28894a, this.f28895b, "default", null, null);
        e8Var.t("auto");
        return e8Var;
    }

    public q8 h() {
        return this.f28898e.J();
    }

    public s3(s3 s3Var) {
        this(s3Var.e(), s3Var.d(), s3Var.b(), s3Var.a(), s3Var.f());
    }

    public s3(io.sentry.protocol.x xVar, j8 j8Var, j8 j8Var2, d dVar, Boolean bool) {
        this.f28894a = xVar;
        this.f28895b = j8Var;
        this.f28896c = j8Var2;
        this.f28898e = io.sentry.util.j0.e(dVar, bool, null, null);
        this.f28897d = bool;
    }
}
