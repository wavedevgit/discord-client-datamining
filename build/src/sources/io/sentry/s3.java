package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s3 {

    /* renamed from: a  reason: collision with root package name */
    private io.sentry.protocol.x f28846a;

    /* renamed from: b  reason: collision with root package name */
    private j8 f28847b;

    /* renamed from: c  reason: collision with root package name */
    private j8 f28848c;

    /* renamed from: d  reason: collision with root package name */
    private Boolean f28849d;

    /* renamed from: e  reason: collision with root package name */
    private final d f28850e;

    public s3() {
        this(new io.sentry.protocol.x(), new j8(), null, null, null);
    }

    public d a() {
        return this.f28850e;
    }

    public j8 b() {
        return this.f28848c;
    }

    public Double c() {
        double doubleValue;
        Double i10 = this.f28850e.i();
        if (i10 == null) {
            doubleValue = 0.0d;
        } else {
            doubleValue = i10.doubleValue();
        }
        return Double.valueOf(doubleValue);
    }

    public j8 d() {
        return this.f28847b;
    }

    public io.sentry.protocol.x e() {
        return this.f28846a;
    }

    public Boolean f() {
        return this.f28849d;
    }

    public e8 g() {
        e8 e8Var = new e8(this.f28846a, this.f28847b, "default", null, null);
        e8Var.t("auto");
        return e8Var;
    }

    public q8 h() {
        return this.f28850e.J();
    }

    public s3(s3 s3Var) {
        this(s3Var.e(), s3Var.d(), s3Var.b(), s3Var.a(), s3Var.f());
    }

    public s3(io.sentry.protocol.x xVar, j8 j8Var, j8 j8Var2, d dVar, Boolean bool) {
        this.f28846a = xVar;
        this.f28847b = j8Var;
        this.f28848c = j8Var2;
        this.f28850e = io.sentry.util.j0.e(dVar, bool, null, null);
        this.f28849d = bool;
    }
}
