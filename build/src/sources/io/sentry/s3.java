package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s3 {

    /* renamed from: a  reason: collision with root package name */
    private io.sentry.protocol.x f30598a;

    /* renamed from: b  reason: collision with root package name */
    private j8 f30599b;

    /* renamed from: c  reason: collision with root package name */
    private j8 f30600c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f30601d;

    /* renamed from: e  reason: collision with root package name */
    private final d f30602e;

    public s3() {
        this(new io.sentry.protocol.x(), new j8(), null, null, null);
    }

    public d a() {
        return this.f30602e;
    }

    public j8 b() {
        return this.f30600c;
    }

    public Double c() {
        double doubleValue;
        Double i10 = this.f30602e.i();
        if (i10 == null) {
            doubleValue = 0.0d;
        } else {
            doubleValue = i10.doubleValue();
        }
        return Double.valueOf(doubleValue);
    }

    public j8 d() {
        return this.f30599b;
    }

    public io.sentry.protocol.x e() {
        return this.f30598a;
    }

    public Boolean f() {
        return this.f30601d;
    }

    public e8 g() {
        e8 e8Var = new e8(this.f30598a, this.f30599b, "default", null, null);
        e8Var.t("auto");
        return e8Var;
    }

    public q8 h() {
        return this.f30602e.J();
    }

    public s3(s3 s3Var) {
        this(s3Var.e(), s3Var.d(), s3Var.b(), s3Var.a(), s3Var.f());
    }

    public s3(io.sentry.protocol.x xVar, j8 j8Var, j8 j8Var2, d dVar, Boolean bool) {
        this.f30598a = xVar;
        this.f30599b = j8Var;
        this.f30600c = j8Var2;
        this.f30602e = io.sentry.util.j0.e(dVar, bool, null, null);
        this.f30601d = bool;
    }
}
