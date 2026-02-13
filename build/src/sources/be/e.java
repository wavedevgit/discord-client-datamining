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
    private final ArrayDeque f6684a = new ArrayDeque();

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f6685b;

    /* renamed from: c  reason: collision with root package name */
    private final PriorityQueue f6686c;

    /* renamed from: d  reason: collision with root package name */
    private b f6687d;

    /* renamed from: e  reason: collision with root package name */
    private long f6688e;

    /* renamed from: f  reason: collision with root package name */
    private long f6689f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends k implements Comparable {

        /* renamed from: u  reason: collision with root package name */
        private long f6690u;

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
            long j10 = this.f46800p - bVar.f46800p;
            if (j10 == 0) {
                j10 = this.f6690u - bVar.f6690u;
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
        private g.a f6691q;

        public c(g.a aVar) {
            this.f6691q = aVar;
        }

        @Override // rc.g
        public final void t() {
            this.f6691q.a(this);
        }
    }

    public e() {
        for (int i10 = 0; i10 < 10; i10++) {
            this.f6684a.add(new b());
        }
        this.f6685b = new ArrayDeque();
        for (int i11 = 0; i11 < 2; i11++) {
            this.f6685b.add(new c(new g.a() { // from class: be.d
                @Override // rc.g.a
                public final void a(g gVar) {
                    e.this.n((e.c) gVar);
                }
            }));
        }
        this.f6686c = new PriorityQueue();
    }

    private void m(b bVar) {
        bVar.h();
        this.f6684a.add(bVar);
    }

    @Override // ae.h
    public void a(long j10) {
        this.f6688e = j10;
    }

    protected abstract ae.g e();

    protected abstract void f(k kVar);

    @Override // rc.d
    public void flush() {
        this.f6689f = 0L;
        this.f6688e = 0L;
        while (!this.f6686c.isEmpty()) {
            m((b) w0.j((b) this.f6686c.poll()));
        }
        b bVar = this.f6687d;
        if (bVar != null) {
            m(bVar);
            this.f6687d = null;
        }
    }

    @Override // rc.d
    /* renamed from: g */
    public k d() {
        boolean z10;
        if (this.f6687d == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        if (this.f6684a.isEmpty()) {
            return null;
        }
        b bVar = (b) this.f6684a.pollFirst();
        this.f6687d = bVar;
        return bVar;
    }

    @Override // rc.d
    /* renamed from: h */
    public l b() {
        if (this.f6685b.isEmpty()) {
            return null;
        }
        while (!this.f6686c.isEmpty() && ((b) w0.j((b) this.f6686c.peek())).f46800p <= this.f6688e) {
            b bVar = (b) w0.j((b) this.f6686c.poll());
            if (bVar.n()) {
                l lVar = (l) w0.j((l) this.f6685b.pollFirst());
                lVar.g(4);
                m(bVar);
                return lVar;
            }
            f(bVar);
            if (k()) {
                ae.g e10 = e();
                l lVar2 = (l) w0.j((l) this.f6685b.pollFirst());
                lVar2.u(bVar.f46800p, e10, LongCompanionObject.MAX_VALUE);
                m(bVar);
                return lVar2;
            }
            m(bVar);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final l i() {
        return (l) this.f6685b.pollFirst();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final long j() {
        return this.f6688e;
    }

    protected abstract boolean k();

    @Override // rc.d
    /* renamed from: l */
    public void c(k kVar) {
        boolean z10;
        if (kVar == this.f6687d) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        b bVar = (b) kVar;
        if (bVar.m()) {
            m(bVar);
        } else {
            long j10 = this.f6689f;
            this.f6689f = 1 + j10;
            bVar.f6690u = j10;
            this.f6686c.add(bVar);
        }
        this.f6687d = null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void n(l lVar) {
        lVar.h();
        this.f6685b.add(lVar);
    }

    @Override // rc.d
    public void release() {
    }
}
