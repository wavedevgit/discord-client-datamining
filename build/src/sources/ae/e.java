package ae;

import java.nio.ByteBuffer;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.List;
import qi.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final c f738a = new c();

    /* renamed from: b  reason: collision with root package name */
    private final k f739b = new k();

    /* renamed from: c  reason: collision with root package name */
    private final Deque f740c = new ArrayDeque();

    /* renamed from: d  reason: collision with root package name */
    private int f741d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f742e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends l {
        a() {
        }

        @Override // rc.g
        public void t() {
            e.this.i(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements g {

        /* renamed from: d  reason: collision with root package name */
        private final long f744d;

        /* renamed from: e  reason: collision with root package name */
        private final s f745e;

        public b(long j10, s sVar) {
            this.f744d = j10;
            this.f745e = sVar;
        }

        @Override // ae.g
        public int a(long j10) {
            if (this.f744d > j10) {
                return 0;
            }
            return -1;
        }

        @Override // ae.g
        public List d(long j10) {
            if (j10 >= this.f744d) {
                return this.f745e;
            }
            return s.t();
        }

        @Override // ae.g
        public long e(int i10) {
            boolean z10;
            if (i10 == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.a(z10);
            return this.f744d;
        }

        @Override // ae.g
        public int f() {
            return 1;
        }
    }

    public e() {
        for (int i10 = 0; i10 < 2; i10++) {
            this.f740c.addFirst(new a());
        }
        this.f741d = 0;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void i(l lVar) {
        boolean z10;
        if (this.f740c.size() < 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        oe.a.a(!this.f740c.contains(lVar));
        lVar.h();
        this.f740c.addFirst(lVar);
    }

    @Override // rc.d
    /* renamed from: f */
    public k d() {
        oe.a.g(!this.f742e);
        if (this.f741d != 0) {
            return null;
        }
        this.f741d = 1;
        return this.f739b;
    }

    @Override // rc.d
    public void flush() {
        oe.a.g(!this.f742e);
        this.f739b.h();
        this.f741d = 0;
    }

    @Override // rc.d
    /* renamed from: g */
    public l b() {
        oe.a.g(!this.f742e);
        if (this.f741d == 2 && !this.f740c.isEmpty()) {
            l lVar = (l) this.f740c.removeFirst();
            if (this.f739b.n()) {
                lVar.g(4);
            } else {
                k kVar = this.f739b;
                lVar.u(this.f739b.f46232p, new b(kVar.f46232p, this.f738a.a(((ByteBuffer) oe.a.e(kVar.f46230i)).array())), 0L);
            }
            this.f739b.h();
            this.f741d = 0;
            return lVar;
        }
        return null;
    }

    @Override // rc.d
    /* renamed from: h */
    public void c(k kVar) {
        boolean z10;
        boolean z11 = true;
        oe.a.g(!this.f742e);
        if (this.f741d == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        if (this.f739b != kVar) {
            z11 = false;
        }
        oe.a.a(z11);
        this.f741d = 2;
    }

    @Override // rc.d
    public void release() {
        this.f742e = true;
    }

    @Override // ae.h
    public void a(long j10) {
    }
}
