package zd;

import java.nio.ByteBuffer;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.List;
import ji.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final c f55767a = new c();

    /* renamed from: b  reason: collision with root package name */
    private final k f55768b = new k();

    /* renamed from: c  reason: collision with root package name */
    private final Deque f55769c = new ArrayDeque();

    /* renamed from: d  reason: collision with root package name */
    private int f55770d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f55771e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends l {
        a() {
        }

        @Override // qc.g
        public void t() {
            e.this.i(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements g {

        /* renamed from: d  reason: collision with root package name */
        private final long f55773d;

        /* renamed from: e  reason: collision with root package name */
        private final s f55774e;

        public b(long j10, s sVar) {
            this.f55773d = j10;
            this.f55774e = sVar;
        }

        @Override // zd.g
        public int a(long j10) {
            if (this.f55773d > j10) {
                return 0;
            }
            return -1;
        }

        @Override // zd.g
        public List d(long j10) {
            if (j10 >= this.f55773d) {
                return this.f55774e;
            }
            return s.r();
        }

        @Override // zd.g
        public long e(int i10) {
            boolean z10;
            if (i10 == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            return this.f55773d;
        }

        @Override // zd.g
        public int f() {
            return 1;
        }
    }

    public e() {
        for (int i10 = 0; i10 < 2; i10++) {
            this.f55769c.addFirst(new a());
        }
        this.f55770d = 0;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void i(l lVar) {
        boolean z10;
        if (this.f55769c.size() < 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        ne.a.a(!this.f55769c.contains(lVar));
        lVar.h();
        this.f55769c.addFirst(lVar);
    }

    @Override // qc.d
    /* renamed from: f */
    public k d() {
        ne.a.g(!this.f55771e);
        if (this.f55770d != 0) {
            return null;
        }
        this.f55770d = 1;
        return this.f55768b;
    }

    @Override // qc.d
    public void flush() {
        ne.a.g(!this.f55771e);
        this.f55768b.h();
        this.f55770d = 0;
    }

    @Override // qc.d
    /* renamed from: g */
    public l b() {
        ne.a.g(!this.f55771e);
        if (this.f55770d == 2 && !this.f55769c.isEmpty()) {
            l lVar = (l) this.f55769c.removeFirst();
            if (this.f55768b.o()) {
                lVar.g(4);
            } else {
                k kVar = this.f55768b;
                lVar.u(this.f55768b.f47349p, new b(kVar.f47349p, this.f55767a.a(((ByteBuffer) ne.a.e(kVar.f47347i)).array())), 0L);
            }
            this.f55768b.h();
            this.f55770d = 0;
            return lVar;
        }
        return null;
    }

    @Override // qc.d
    /* renamed from: h */
    public void c(k kVar) {
        boolean z10;
        boolean z11 = true;
        ne.a.g(!this.f55771e);
        if (this.f55770d == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        if (this.f55768b != kVar) {
            z11 = false;
        }
        ne.a.a(z11);
        this.f55770d = 2;
    }

    @Override // qc.d
    public void release() {
        this.f55771e = true;
    }

    @Override // zd.h
    public void a(long j10) {
    }
}
