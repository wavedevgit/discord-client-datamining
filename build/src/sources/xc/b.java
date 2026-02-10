package xc;

import java.util.Objects;
import uc.a;
import uc.l;
import uc.q;
import uc.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends uc.a {

    /* renamed from: xc.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0763b implements a.f {

        /* renamed from: a  reason: collision with root package name */
        private final t f54728a;

        /* renamed from: b  reason: collision with root package name */
        private final int f54729b;

        /* renamed from: c  reason: collision with root package name */
        private final q.a f54730c;

        private long c(l lVar) {
            while (lVar.g() < lVar.getLength() - 6 && !q.h(lVar, this.f54728a, this.f54729b, this.f54730c)) {
                lVar.h(1);
            }
            if (lVar.g() >= lVar.getLength() - 6) {
                lVar.h((int) (lVar.getLength() - lVar.g()));
                return this.f54728a.f51521j;
            }
            return this.f54730c.f51508a;
        }

        @Override // uc.a.f
        public a.e a(l lVar, long j10) {
            long position = lVar.getPosition();
            long c10 = c(lVar);
            long g10 = lVar.g();
            lVar.h(Math.max(6, this.f54728a.f51514c));
            long c11 = c(lVar);
            long g11 = lVar.g();
            if (c10 <= j10 && c11 > j10) {
                return a.e.e(g10);
            }
            if (c11 <= j10) {
                return a.e.f(c11, g11);
            }
            return a.e.d(c10, position);
        }

        private C0763b(t tVar, int i10) {
            this.f54728a = tVar;
            this.f54729b = i10;
            this.f54730c = new q.a();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(final t tVar, int i10, long j10, long j11) {
        super(new a.d() { // from class: xc.a
            @Override // uc.a.d
            public final long a(long j12) {
                return t.this.i(j12);
            }
        }, new C0763b(tVar, i10), tVar.f(), 0L, tVar.f51521j, j10, j11, tVar.d(), Math.max(6, tVar.f51514c));
        Objects.requireNonNull(tVar);
    }
}
