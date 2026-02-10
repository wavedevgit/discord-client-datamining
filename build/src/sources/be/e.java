package be;

import ae.h;
import ae.k;
import ae.l;
import be.e;
import java.util.ArrayDeque;
import java.util.PriorityQueue;
import kotlin.jvm.internal.LongCompanionObject;
import oe.w0;
import rc.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayDeque f6578a = new ArrayDeque();

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f6579b;

    /* renamed from: c  reason: collision with root package name */
    private final PriorityQueue f6580c;

    /* renamed from: d  reason: collision with root package name */
    private b f6581d;

    /* renamed from: e  reason: collision with root package name */
    private long f6582e;

    /* renamed from: f  reason: collision with root package name */
    private long f6583f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends k implements Comparable {

        /* renamed from: u  reason: collision with root package name */
        private long f6584u;

        private b() {
        }

        @Override // java.lang.Comparable
        /* renamed from: A */
        public int compareTo(b bVar) {
            if (n() != bVar.n()) {
                if (!n()) {
                    return -1;
                }
                return 1;
            }
            long j10 = this.f47777p - bVar.f47777p;
            if (j10 == 0) {
                j10 = this.f6584u - bVar.f6584u;
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
        private g.a f6585q;

        public c(g.a aVar) {
            this.f6585q = aVar;
        }

        @Override // rc.g
        public final void t() {
            this.f6585q.a(this);
        }
    }

    public e() {
        for (int i10 = 0; i10 < 10; i10++) {
            this.f6578a.add(new b());
        }
        this.f6579b = new ArrayDeque();
        for (int i11 = 0; i11 < 2; i11++) {
            this.f6579b.add(new c(new g.a() { // from class: be.d
                @Override // rc.g.a
                public final void a(g gVar) {
                    e.this.n((e.c) gVar);
                }
            }));
        }
        this.f6580c = new PriorityQueue();
    }

    private void m(b bVar) {
        bVar.h();
        this.f6578a.add(bVar);
    }

    @Override // ae.h
    public void a(long j10) {
        this.f6582e = j10;
    }

    protected abstract ae.g e();

    protected abstract void f(k kVar);

    @Override // rc.d
    public void flush() {
        this.f6583f = 0L;
        this.f6582e = 0L;
        while (!this.f6580c.isEmpty()) {
            m((b) w0.j((b) this.f6580c.poll()));
        }
        b bVar = this.f6581d;
        if (bVar != null) {
            m(bVar);
            this.f6581d = null;
        }
    }

    @Override // rc.d
    /* renamed from: g */
    public k d() {
        boolean z10;
        if (this.f6581d == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        if (this.f6578a.isEmpty()) {
            return null;
        }
        b bVar = (b) this.f6578a.pollFirst();
        this.f6581d = bVar;
        return bVar;
    }

    @Override // rc.d
    /* renamed from: h */
    public l b() {
        if (this.f6579b.isEmpty()) {
            return null;
        }
        while (!this.f6580c.isEmpty() && ((b) w0.j((b) this.f6580c.peek())).f47777p <= this.f6582e) {
            b bVar = (b) w0.j((b) this.f6580c.poll());
            if (bVar.n()) {
                l lVar = (l) w0.j((l) this.f6579b.pollFirst());
                lVar.g(4);
                m(bVar);
                return lVar;
            }
            f(bVar);
            if (k()) {
                ae.g e10 = e();
                l lVar2 = (l) w0.j((l) this.f6579b.pollFirst());
                lVar2.u(bVar.f47777p, e10, LongCompanionObject.MAX_VALUE);
                m(bVar);
                return lVar2;
            }
            m(bVar);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final l i() {
        return (l) this.f6579b.pollFirst();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final long j() {
        return this.f6582e;
    }

    protected abstract boolean k();

    @Override // rc.d
    /* renamed from: l */
    public void c(k kVar) {
        boolean z10;
        if (kVar == this.f6581d) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        b bVar = (b) kVar;
        if (bVar.m()) {
            m(bVar);
        } else {
            long j10 = this.f6583f;
            this.f6583f = 1 + j10;
            bVar.f6584u = j10;
            this.f6580c.add(bVar);
        }
        this.f6581d = null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void n(l lVar) {
        lVar.h();
        this.f6579b.add(lVar);
    }

    @Override // rc.d
    public void release() {
    }
}
