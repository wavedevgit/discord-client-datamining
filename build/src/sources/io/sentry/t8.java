package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t8 extends e8 {
    private static final io.sentry.protocol.g0 E = io.sentry.protocol.g0.CUSTOM;
    private String A;
    private io.sentry.protocol.g0 B;
    private s8 C;
    private boolean D;

    public t8(String str, String str2) {
        this(str, str2, (s8) null);
    }

    public static t8 x(s3 s3Var) {
        s8 s8Var;
        Boolean f10 = s3Var.f();
        d a10 = s3Var.a();
        Double j10 = a10.j();
        if (f10 == null) {
            s8Var = null;
        } else {
            s8Var = new s8(f10, j10, s3Var.c());
        }
        return new t8(s3Var.e(), s3Var.d(), s3Var.b(), s8Var, a10);
    }

    public io.sentry.protocol.g0 A() {
        return this.B;
    }

    public void B(boolean z10) {
        this.D = z10;
    }

    public String y() {
        return this.A;
    }

    public s8 z() {
        return this.C;
    }

    public t8(String str, io.sentry.protocol.g0 g0Var, String str2) {
        this(str, g0Var, str2, null);
    }

    public t8(String str, String str2, s8 s8Var) {
        this(str, io.sentry.protocol.g0.CUSTOM, str2, s8Var);
    }

    public t8(String str, io.sentry.protocol.g0 g0Var, String str2, s8 s8Var) {
        super(str2);
        this.D = false;
        this.A = (String) io.sentry.util.y.c(str, "name is required");
        this.B = g0Var;
        u(s8Var);
        this.f28974x = io.sentry.util.j0.d(null, s8Var);
    }

    public t8(io.sentry.protocol.x xVar, j8 j8Var, j8 j8Var2, s8 s8Var, d dVar) {
        super(xVar, j8Var, "default", j8Var2, null);
        this.D = false;
        this.A = "<unlabeled transaction>";
        this.C = s8Var;
        this.B = E;
        this.f28974x = io.sentry.util.j0.d(dVar, s8Var);
    }
}
