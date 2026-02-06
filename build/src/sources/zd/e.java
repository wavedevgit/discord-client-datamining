package zd;

import java.nio.ByteBuffer;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.List;
import ni.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final c f56222a = new c();

    /* renamed from: b  reason: collision with root package name */
    private final k f56223b = new k();

    /* renamed from: c  reason: collision with root package name */
    private final Deque f56224c = new ArrayDeque();

    /* renamed from: d  reason: collision with root package name */
    private int f56225d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f56226e;

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
        private final long f56228d;

        /* renamed from: e  reason: collision with root package name */
        private final s f56229e;

        public b(long j10, s sVar) {
            this.f56228d = j10;
            this.f56229e = sVar;
        }

        @Override // zd.g
        public int a(long j10) {
            if (this.f56228d > j10) {
                return 0;
            }
            return -1;
        }

        @Override // zd.g
        public List d(long j10) {
            if (j10 >= this.f56228d) {
                return this.f56229e;
            }
            return s.t();
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
            return this.f56228d;
        }

        @Override // zd.g
        public int f() {
            return 1;
        }
    }

    public e() {
        for (int i10 = 0; i10 < 2; i10++) {
            this.f56224c.addFirst(new a());
        }
        this.f56225d = 0;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void i(l lVar) {
        boolean z10;
        if (this.f56224c.size() < 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        ne.a.a(!this.f56224c.contains(lVar));
        lVar.h();
        this.f56224c.addFirst(lVar);
    }

    @Override // qc.d
    /* renamed from: f */
    public k d() {
        ne.a.g(!this.f56226e);
        if (this.f56225d != 0) {
            return null;
        }
        this.f56225d = 1;
        return this.f56223b;
    }

    @Override // qc.d
    public void flush() {
        ne.a.g(!this.f56226e);
        this.f56223b.h();
        this.f56225d = 0;
    }

    @Override // qc.d
    /* renamed from: g */
    public l b() {
        ne.a.g(!this.f56226e);
        if (this.f56225d == 2 && !this.f56224c.isEmpty()) {
            l lVar = (l) this.f56224c.removeFirst();
            if (this.f56223b.n()) {
                lVar.g(4);
            } else {
                k kVar = this.f56223b;
                lVar.u(this.f56223b.f46611p, new b(kVar.f46611p, this.f56222a.a(((ByteBuffer) ne.a.e(kVar.f46609i)).array())), 0L);
            }
            this.f56223b.h();
            this.f56225d = 0;
            return lVar;
        }
        return null;
    }

    @Override // qc.d
    /* renamed from: h */
    public void c(k kVar) {
        boolean z10;
        boolean z11 = true;
        ne.a.g(!this.f56226e);
        if (this.f56225d == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        if (this.f56223b != kVar) {
            z11 = false;
        }
        ne.a.a(z11);
        this.f56225d = 2;
    }

    @Override // qc.d
    public void release() {
        this.f56226e = true;
    }

    @Override // zd.h
    public void a(long j10) {
    }
}
