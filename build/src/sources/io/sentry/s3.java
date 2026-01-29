package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s3 {

    /* renamed from: a  reason: collision with root package name */
    private io.sentry.protocol.x f30701a;

    /* renamed from: b  reason: collision with root package name */
    private j8 f30702b;

    /* renamed from: c  reason: collision with root package name */
    private j8 f30703c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f30704d;

    /* renamed from: e  reason: collision with root package name */
    private final d f30705e;

    public s3() {
        this(new io.sentry.protocol.x(), new j8(), null, null, null);
    }

    public d a() {
        return this.f30705e;
    }

    public j8 b() {
        return this.f30703c;
    }

    public Double c() {
        double doubleValue;
        Double i10 = this.f30705e.i();
        if (i10 == null) {
            doubleValue = 0.0d;
        } else {
            doubleValue = i10.doubleValue();
        }
        return Double.valueOf(doubleValue);
    }

    public j8 d() {
        return this.f30702b;
    }

    public io.sentry.protocol.x e() {
        return this.f30701a;
    }

    public Boolean f() {
        return this.f30704d;
    }

    public e8 g() {
        e8 e8Var = new e8(this.f30701a, this.f30702b, "default", null, null);
        e8Var.t("auto");
        return e8Var;
    }

    public q8 h() {
        return this.f30705e.J();
    }

    public s3(s3 s3Var) {
        this(s3Var.e(), s3Var.d(), s3Var.b(), s3Var.a(), s3Var.f());
    }

    public s3(io.sentry.protocol.x xVar, j8 j8Var, j8 j8Var2, d dVar, Boolean bool) {
        this.f30701a = xVar;
        this.f30702b = j8Var;
        this.f30703c = j8Var2;
        this.f30705e = io.sentry.util.j0.e(dVar, bool, null, null);
        this.f30704d = bool;
    }
}
