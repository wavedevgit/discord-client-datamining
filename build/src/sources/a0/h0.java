package a0;

import a0.n0;
import x.i1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h0 implements h2 {

    /* renamed from: d  reason: collision with root package name */
    private final x.i1 f72d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements x.i1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ long f73d;

        a(long j10) {
            this.f73d = j10;
        }

        @Override // x.i1
        public long b() {
            return this.f73d;
        }

        @Override // x.i1
        public i1.c e(i1.b bVar) {
            if (bVar.a() == 1) {
                return i1.c.f54253d;
            }
            return i1.c.f54254e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements h2 {

        /* renamed from: d  reason: collision with root package name */
        private final x.i1 f75d;

        public b(long j10) {
            this.f75d = new h0(j10);
        }

        @Override // x.i1
        public long b() {
            return this.f75d.b();
        }

        @Override // a0.h2
        public x.i1 c(long j10) {
            return new b(j10);
        }

        @Override // x.i1
        public i1.c e(i1.b bVar) {
            if (!this.f75d.e(bVar).d()) {
                Throwable b10 = bVar.b();
                if (b10 instanceof n0.b) {
                    x.y0.c("CameraX", "The device might underreport the amount of the cameras. Finish the initialize task since we are already reaching the maximum number of retries.");
                    if (((n0.b) b10).a() > 0) {
                        return i1.c.f54256g;
                    }
                }
                return i1.c.f54253d;
            }
            return i1.c.f54254e;
        }
    }

    public h0(long j10) {
        this.f72d = new r2(j10, new a(j10));
    }

    @Override // x.i1
    public long b() {
        return this.f72d.b();
    }

    @Override // a0.h2
    public x.i1 c(long j10) {
        return new h0(j10);
    }

    @Override // x.i1
    public i1.c e(i1.b bVar) {
        return this.f72d.e(bVar);
    }
}
