package ed;

import oe.s0;
import oe.w0;
import uc.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e0 extends uc.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a implements a.f {

        /* renamed from: a  reason: collision with root package name */
        private final s0 f22452a;

        /* renamed from: b  reason: collision with root package name */
        private final oe.h0 f22453b = new oe.h0();

        /* renamed from: c  reason: collision with root package name */
        private final int f22454c;

        /* renamed from: d  reason: collision with root package name */
        private final int f22455d;

        public a(int i10, s0 s0Var, int i11) {
            this.f22454c = i10;
            this.f22452a = s0Var;
            this.f22455d = i11;
        }

        private a.e c(oe.h0 h0Var, long j10, long j11) {
            int a10;
            int a11;
            int g10 = h0Var.g();
            long j12 = -1;
            long j13 = -1;
            long j14 = -9223372036854775807L;
            while (h0Var.a() >= 188 && (a11 = (a10 = j0.a(h0Var.e(), h0Var.f(), g10)) + 188) <= g10) {
                long c10 = j0.c(h0Var, a10, this.f22454c);
                if (c10 != -9223372036854775807L) {
                    long b10 = this.f22452a.b(c10);
                    if (b10 > j10) {
                        if (j14 == -9223372036854775807L) {
                            return a.e.d(b10, j11);
                        }
                        return a.e.e(j11 + j13);
                    } else if (100000 + b10 > j10) {
                        return a.e.e(j11 + a10);
                    } else {
                        j13 = a10;
                        j14 = b10;
                    }
                }
                h0Var.U(a11);
                j12 = a11;
            }
            if (j14 != -9223372036854775807L) {
                return a.e.f(j14, j11 + j12);
            }
            return a.e.f51175d;
        }

        @Override // uc.a.f
        public a.e a(uc.l lVar, long j10) {
            long position = lVar.getPosition();
            int min = (int) Math.min(this.f22455d, lVar.getLength() - position);
            this.f22453b.Q(min);
            lVar.n(this.f22453b.e(), 0, min);
            return c(this.f22453b, j10, position);
        }

        @Override // uc.a.f
        public void b() {
            this.f22453b.R(w0.f39611f);
        }
    }

    public e0(s0 s0Var, long j10, long j11, int i10, int i11) {
        super(new a.b(), new a(i10, s0Var, i11), j10, 0L, j10 + 1, 0L, j11, 188L, 940);
    }
}
