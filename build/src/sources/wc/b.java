package wc;

import java.util.Objects;
import tc.a;
import tc.l;
import tc.q;
import tc.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends tc.a {

    /* renamed from: wc.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0698b implements a.f {

        /* renamed from: a  reason: collision with root package name */
        private final t f52738a;

        /* renamed from: b  reason: collision with root package name */
        private final int f52739b;

        /* renamed from: c  reason: collision with root package name */
        private final q.a f52740c;

        private long c(l lVar) {
            while (lVar.g() < lVar.getLength() - 6 && !q.h(lVar, this.f52738a, this.f52739b, this.f52740c)) {
                lVar.h(1);
            }
            if (lVar.g() >= lVar.getLength() - 6) {
                lVar.h((int) (lVar.getLength() - lVar.g()));
                return this.f52738a.f50589j;
            }
            return this.f52740c.f50576a;
        }

        @Override // tc.a.f
        public a.e a(l lVar, long j10) {
            long position = lVar.getPosition();
            long c10 = c(lVar);
            long g10 = lVar.g();
            lVar.h(Math.max(6, this.f52738a.f50582c));
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

        private C0698b(t tVar, int i10) {
            this.f52738a = tVar;
            this.f52739b = i10;
            this.f52740c = new q.a();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(final t tVar, int i10, long j10, long j11) {
        super(new a.d() { // from class: wc.a
            @Override // tc.a.d
            public final long a(long j12) {
                return t.this.i(j12);
            }
        }, new C0698b(tVar, i10), tVar.f(), 0L, tVar.f50589j, j10, j11, tVar.d(), Math.max(6, tVar.f50582c));
        Objects.requireNonNull(tVar);
    }
}
