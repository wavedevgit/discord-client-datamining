package ae;

import ae.e;
import java.util.ArrayDeque;
import java.util.PriorityQueue;
import kotlin.jvm.internal.LongCompanionObject;
import ne.w0;
import qc.g;
import zd.h;
import zd.k;
import zd.l;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayDeque f590a = new ArrayDeque();

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f591b;

    /* renamed from: c  reason: collision with root package name */
    private final PriorityQueue f592c;

    /* renamed from: d  reason: collision with root package name */
    private b f593d;

    /* renamed from: e  reason: collision with root package name */
    private long f594e;

    /* renamed from: f  reason: collision with root package name */
    private long f595f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends k implements Comparable {

        /* renamed from: u  reason: collision with root package name */
        private long f596u;

        private b() {
        }

        @Override // java.lang.Comparable
        /* renamed from: A */
        public int compareTo(b bVar) {
            if (o() != bVar.o()) {
                if (!o()) {
                    return -1;
                }
                return 1;
            }
            long j10 = this.f47349p - bVar.f47349p;
            if (j10 == 0) {
                j10 = this.f596u - bVar.f596u;
                if (j10 == 0) {
                    return 0;
                }
            }
            if (j10 <= 0) {
                return -1;
            }
            return 1;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends l {

        /* renamed from: q  reason: collision with root package name */
        private g.a f597q;

        public c(g.a aVar) {
            this.f597q = aVar;
        }

        @Override // qc.g
        public final void t() {
            this.f597q.a(this);
        }
    }

    public e() {
        for (int i10 = 0; i10 < 10; i10++) {
            this.f590a.add(new b());
        }
        this.f591b = new ArrayDeque();
        for (int i11 = 0; i11 < 2; i11++) {
            this.f591b.add(new c(new g.a() { // from class: ae.d
                @Override // qc.g.a
                public final void a(g gVar) {
                    e.this.n((e.c) gVar);
                }
            }));
        }
        this.f592c = new PriorityQueue();
    }

    private void m(b bVar) {
        bVar.h();
        this.f590a.add(bVar);
    }

    @Override // zd.h
    public void a(long j10) {
        this.f594e = j10;
    }

    protected abstract zd.g e();

    protected abstract void f(k kVar);

    @Override // qc.d
    public void flush() {
        this.f595f = 0L;
        this.f594e = 0L;
        while (!this.f592c.isEmpty()) {
            m((b) w0.j((b) this.f592c.poll()));
        }
        b bVar = this.f593d;
        if (bVar != null) {
            m(bVar);
            this.f593d = null;
        }
    }

    @Override // qc.d
    /* renamed from: g */
    public k d() {
        boolean z10;
        if (this.f593d == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        if (this.f590a.isEmpty()) {
            return null;
        }
        b bVar = (b) this.f590a.pollFirst();
        this.f593d = bVar;
        return bVar;
    }

    @Override // qc.d
    /* renamed from: h */
    public l b() {
        if (this.f591b.isEmpty()) {
            return null;
        }
        while (!this.f592c.isEmpty() && ((b) w0.j((b) this.f592c.peek())).f47349p <= this.f594e) {
            b bVar = (b) w0.j((b) this.f592c.poll());
            if (bVar.o()) {
                l lVar = (l) w0.j((l) this.f591b.pollFirst());
                lVar.g(4);
                m(bVar);
                return lVar;
            }
            f(bVar);
            if (k()) {
                zd.g e10 = e();
                l lVar2 = (l) w0.j((l) this.f591b.pollFirst());
                lVar2.u(bVar.f47349p, e10, LongCompanionObject.MAX_VALUE);
                m(bVar);
                return lVar2;
            }
            m(bVar);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final l i() {
        return (l) this.f591b.pollFirst();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final long j() {
        return this.f594e;
    }

    protected abstract boolean k();

    @Override // qc.d
    /* renamed from: l */
    public void c(k kVar) {
        boolean z10;
        if (kVar == this.f593d) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        b bVar = (b) kVar;
        if (bVar.m()) {
            m(bVar);
        } else {
            long j10 = this.f595f;
            this.f595f = 1 + j10;
            bVar.f596u = j10;
            this.f592c.add(bVar);
        }
        this.f593d = null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void n(l lVar) {
        lVar.h();
        this.f591b.add(lVar);
    }

    @Override // qc.d
    public void release() {
    }
}
