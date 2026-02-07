package zd;

import java.nio.ByteBuffer;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.List;
import ni.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final c f56270a = new c();

    /* renamed from: b  reason: collision with root package name */
    private final k f56271b = new k();

    /* renamed from: c  reason: collision with root package name */
    private final Deque f56272c = new ArrayDeque();

    /* renamed from: d  reason: collision with root package name */
    private int f56273d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f56274e;

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
        private final long f56276d;

        /* renamed from: e  reason: collision with root package name */
        private final s f56277e;

        public b(long j10, s sVar) {
            this.f56276d = j10;
            this.f56277e = sVar;
        }

        @Override // zd.g
        public int a(long j10) {
            if (this.f56276d > j10) {
                return 0;
            }
            return -1;
        }

        @Override // zd.g
        public List d(long j10) {
            if (j10 >= this.f56276d) {
                return this.f56277e;
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
            return this.f56276d;
        }

        @Override // zd.g
        public int f() {
            return 1;
        }
    }

    public e() {
        for (int i10 = 0; i10 < 2; i10++) {
            this.f56272c.addFirst(new a());
        }
        this.f56273d = 0;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void i(l lVar) {
        boolean z10;
        if (this.f56272c.size() < 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        ne.a.a(!this.f56272c.contains(lVar));
        lVar.h();
        this.f56272c.addFirst(lVar);
    }

    @Override // qc.d
    /* renamed from: f */
    public k d() {
        ne.a.g(!this.f56274e);
        if (this.f56273d != 0) {
            return null;
        }
        this.f56273d = 1;
        return this.f56271b;
    }

    @Override // qc.d
    public void flush() {
        ne.a.g(!this.f56274e);
        this.f56271b.h();
        this.f56273d = 0;
    }

    @Override // qc.d
    /* renamed from: g */
    public l b() {
        ne.a.g(!this.f56274e);
        if (this.f56273d == 2 && !this.f56272c.isEmpty()) {
            l lVar = (l) this.f56272c.removeFirst();
            if (this.f56271b.n()) {
                lVar.g(4);
            } else {
                k kVar = this.f56271b;
                lVar.u(this.f56271b.f46659p, new b(kVar.f46659p, this.f56270a.a(((ByteBuffer) ne.a.e(kVar.f46657i)).array())), 0L);
            }
            this.f56271b.h();
            this.f56273d = 0;
            return lVar;
        }
        return null;
    }

    @Override // qc.d
    /* renamed from: h */
    public void c(k kVar) {
        boolean z10;
        boolean z11 = true;
        ne.a.g(!this.f56274e);
        if (this.f56273d == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        if (this.f56271b != kVar) {
            z11 = false;
        }
        ne.a.a(z11);
        this.f56273d = 2;
    }

    @Override // qc.d
    public void release() {
        this.f56274e = true;
    }

    @Override // zd.h
    public void a(long j10) {
    }
}
