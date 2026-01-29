package dd;

import ne.s0;
import ne.w0;
import tc.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class x extends tc.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b implements a.f {

        /* renamed from: a  reason: collision with root package name */
        private final s0 f22093a;

        /* renamed from: b  reason: collision with root package name */
        private final ne.h0 f22094b;

        private a.e c(ne.h0 h0Var, long j10, long j11) {
            int i10 = -1;
            int i11 = -1;
            long j12 = -9223372036854775807L;
            while (h0Var.a() >= 4) {
                if (x.k(h0Var.e(), h0Var.f()) != 442) {
                    h0Var.V(1);
                } else {
                    h0Var.V(4);
                    long l10 = y.l(h0Var);
                    if (l10 != -9223372036854775807L) {
                        long b10 = this.f22093a.b(l10);
                        if (b10 > j10) {
                            if (j12 == -9223372036854775807L) {
                                return a.e.d(b10, j11);
                            }
                            return a.e.e(j11 + i11);
                        } else if (100000 + b10 > j10) {
                            return a.e.e(j11 + h0Var.f());
                        } else {
                            i11 = h0Var.f();
                            j12 = b10;
                        }
                    }
                    d(h0Var);
                    i10 = h0Var.f();
                }
            }
            if (j12 != -9223372036854775807L) {
                return a.e.f(j12, j11 + i10);
            }
            return a.e.f49394d;
        }

        private static void d(ne.h0 h0Var) {
            int k10;
            int g10 = h0Var.g();
            if (h0Var.a() < 10) {
                h0Var.U(g10);
                return;
            }
            h0Var.V(9);
            int H = h0Var.H() & 7;
            if (h0Var.a() < H) {
                h0Var.U(g10);
                return;
            }
            h0Var.V(H);
            if (h0Var.a() < 4) {
                h0Var.U(g10);
                return;
            }
            if (x.k(h0Var.e(), h0Var.f()) == 443) {
                h0Var.V(4);
                int N = h0Var.N();
                if (h0Var.a() < N) {
                    h0Var.U(g10);
                    return;
                }
                h0Var.V(N);
            }
            while (h0Var.a() >= 4 && (k10 = x.k(h0Var.e(), h0Var.f())) != 442 && k10 != 441 && (k10 >>> 8) == 1) {
                h0Var.V(4);
                if (h0Var.a() < 2) {
                    h0Var.U(g10);
                    return;
                }
                h0Var.U(Math.min(h0Var.g(), h0Var.f() + h0Var.N()));
            }
        }

        @Override // tc.a.f
        public a.e a(tc.l lVar, long j10) {
            long position = lVar.getPosition();
            int min = (int) Math.min(20000L, lVar.getLength() - position);
            this.f22094b.Q(min);
            lVar.n(this.f22094b.e(), 0, min);
            return c(this.f22094b, j10, position);
        }

        @Override // tc.a.f
        public void b() {
            this.f22094b.R(w0.f40284f);
        }

        private b(s0 s0Var) {
            this.f22093a = s0Var;
            this.f22094b = new ne.h0();
        }
    }

    public x(s0 s0Var, long j10, long j11) {
        super(new a.b(), new b(s0Var), j10, 0L, j10 + 1, 0L, j11, 188L, 1000);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int k(byte[] bArr, int i10) {
        return (bArr[i10 + 3] & 255) | ((bArr[i10] & 255) << 24) | ((bArr[i10 + 1] & 255) << 16) | ((bArr[i10 + 2] & 255) << 8);
    }
}
