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
    private static final class C0704b implements a.f {

        /* renamed from: a  reason: collision with root package name */
        private final t f51862a;

        /* renamed from: b  reason: collision with root package name */
        private final int f51863b;

        /* renamed from: c  reason: collision with root package name */
        private final q.a f51864c;

        private long c(l lVar) {
            while (lVar.g() < lVar.getLength() - 6 && !q.h(lVar, this.f51862a, this.f51863b, this.f51864c)) {
                lVar.h(1);
            }
            if (lVar.g() >= lVar.getLength() - 6) {
                lVar.h((int) (lVar.getLength() - lVar.g()));
                return this.f51862a.f49776j;
            }
            return this.f51864c.f49763a;
        }

        @Override // tc.a.f
        public a.e a(l lVar, long j10) {
            long position = lVar.getPosition();
            long c10 = c(lVar);
            long g10 = lVar.g();
            lVar.h(Math.max(6, this.f51862a.f49769c));
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

        private C0704b(t tVar, int i10) {
            this.f51862a = tVar;
            this.f51863b = i10;
            this.f51864c = new q.a();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(final t tVar, int i10, long j10, long j11) {
        super(new a.d() { // from class: wc.a
            @Override // tc.a.d
            public final long a(long j12) {
                return t.this.i(j12);
            }
        }, new C0704b(tVar, i10), tVar.f(), 0L, tVar.f49776j, j10, j11, tVar.d(), Math.max(6, tVar.f49769c));
        Objects.requireNonNull(tVar);
    }
}
