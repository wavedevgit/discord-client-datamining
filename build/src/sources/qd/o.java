package qd;

import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Timeline;
import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o extends y0 {
    private a A;
    private n B;
    private boolean C;
    private boolean D;
    private boolean E;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f47685x;

    /* renamed from: y  reason: collision with root package name */
    private final Timeline.d f47686y;

    /* renamed from: z  reason: collision with root package name */
    private final Timeline.b f47687z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends l {

        /* renamed from: t  reason: collision with root package name */
        public static final Object f47688t = new Object();

        /* renamed from: r  reason: collision with root package name */
        private final Object f47689r;

        /* renamed from: s  reason: collision with root package name */
        private final Object f47690s;

        private a(Timeline timeline, Object obj, Object obj2) {
            super(timeline);
            this.f47689r = obj;
            this.f47690s = obj2;
        }

        public static a y(MediaItem mediaItem) {
            return new a(new b(mediaItem), Timeline.d.C, f47688t);
        }

        public static a z(Timeline timeline, Object obj, Object obj2) {
            return new a(timeline, obj, obj2);
        }

        @Override // qd.l, com.google.android.exoplayer2.Timeline
        public int f(Object obj) {
            Object obj2;
            Timeline timeline = this.f47641q;
            if (f47688t.equals(obj) && (obj2 = this.f47690s) != null) {
                obj = obj2;
            }
            return timeline.f(obj);
        }

        @Override // qd.l, com.google.android.exoplayer2.Timeline
        public Timeline.b k(int i10, Timeline.b bVar, boolean z10) {
            this.f47641q.k(i10, bVar, z10);
            if (ne.w0.c(bVar.f11592e, this.f47690s) && z10) {
                bVar.f11592e = f47688t;
            }
            return bVar;
        }

        @Override // qd.l, com.google.android.exoplayer2.Timeline
        public Object q(int i10) {
            Object q10 = this.f47641q.q(i10);
            if (ne.w0.c(q10, this.f47690s)) {
                return f47688t;
            }
            return q10;
        }

        @Override // qd.l, com.google.android.exoplayer2.Timeline
        public Timeline.d s(int i10, Timeline.d dVar, long j10) {
            this.f47641q.s(i10, dVar, j10);
            if (ne.w0.c(dVar.f11602d, this.f47689r)) {
                dVar.f11602d = Timeline.d.C;
            }
            return dVar;
        }

        public a x(Timeline timeline) {
            return new a(timeline, this.f47689r, this.f47690s);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends Timeline {

        /* renamed from: q  reason: collision with root package name */
        private final MediaItem f47691q;

        public b(MediaItem mediaItem) {
            this.f47691q = mediaItem;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int f(Object obj) {
            if (obj == a.f47688t) {
                return 0;
            }
            return -1;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public Timeline.b k(int i10, Timeline.b bVar, boolean z10) {
            Integer num;
            Object obj = null;
            if (z10) {
                num = 0;
            } else {
                num = null;
            }
            if (z10) {
                obj = a.f47688t;
            }
            bVar.w(num, obj, 0, -9223372036854775807L, 0L, rd.c.f48776r, true);
            return bVar;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int m() {
            return 1;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public Object q(int i10) {
            return a.f47688t;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public Timeline.d s(int i10, Timeline.d dVar, long j10) {
            dVar.h(Timeline.d.C, this.f47691q, null, -9223372036854775807L, -9223372036854775807L, -9223372036854775807L, false, true, null, 0L, -9223372036854775807L, 0, 0, 0L);
            dVar.f11613w = true;
            return dVar;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int t() {
            return 1;
        }
    }

    public o(r rVar, boolean z10) {
        super(rVar);
        boolean z11;
        if (z10 && rVar.p()) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f47685x = z11;
        this.f47686y = new Timeline.d();
        this.f47687z = new Timeline.b();
        Timeline q10 = rVar.q();
        if (q10 != null) {
            this.A = a.z(q10, null, null);
            this.E = true;
            return;
        }
        this.A = a.y(rVar.f());
    }

    private Object V(Object obj) {
        if (this.A.f47690s != null && this.A.f47690s.equals(obj)) {
            return a.f47688t;
        }
        return obj;
    }

    private Object W(Object obj) {
        if (this.A.f47690s != null && obj.equals(a.f47688t)) {
            return this.A.f47690s;
        }
        return obj;
    }

    private void Y(long j10) {
        n nVar = this.B;
        int f10 = this.A.f(nVar.f47678d.f47705a);
        if (f10 == -1) {
            return;
        }
        long j11 = this.A.j(f10, this.f47687z).f11594o;
        if (j11 != -9223372036854775807L && j10 >= j11) {
            j10 = Math.max(0L, j11 - 1);
        }
        nVar.w(j10);
    }

    @Override // qd.f, qd.a
    public void D() {
        this.D = false;
        this.C = false;
        super.D();
    }

    @Override // qd.y0
    protected r.b L(r.b bVar) {
        return bVar.c(V(bVar.f47705a));
    }

    /* JADX WARN: Removed duplicated region for block: B:22:0x008d  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x0094  */
    /* JADX WARN: Removed duplicated region for block: B:26:0x009e  */
    /* JADX WARN: Removed duplicated region for block: B:30:0x00bb  */
    /* JADX WARN: Removed duplicated region for block: B:32:? A[RETURN, SYNTHETIC] */
    @Override // qd.y0
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected void Q(com.google.android.exoplayer2.Timeline r15) {
        /*
            r14 = this;
            boolean r0 = r14.D
            if (r0 == 0) goto L19
            qd.o$a r0 = r14.A
            qd.o$a r15 = r0.x(r15)
            r14.A = r15
            qd.n r15 = r14.B
            if (r15 == 0) goto Lae
            long r0 = r15.p()
            r14.Y(r0)
            goto Lae
        L19:
            boolean r0 = r15.u()
            if (r0 == 0) goto L36
            boolean r0 = r14.E
            if (r0 == 0) goto L2a
            qd.o$a r0 = r14.A
            qd.o$a r15 = r0.x(r15)
            goto L32
        L2a:
            java.lang.Object r0 = com.google.android.exoplayer2.Timeline.d.C
            java.lang.Object r1 = qd.o.a.f47688t
            qd.o$a r15 = qd.o.a.z(r15, r0, r1)
        L32:
            r14.A = r15
            goto Lae
        L36:
            com.google.android.exoplayer2.Timeline$d r0 = r14.f47686y
            r1 = 0
            r15.r(r1, r0)
            com.google.android.exoplayer2.Timeline$d r0 = r14.f47686y
            long r2 = r0.e()
            com.google.android.exoplayer2.Timeline$d r0 = r14.f47686y
            java.lang.Object r0 = r0.f11602d
            qd.n r4 = r14.B
            if (r4 == 0) goto L74
            long r4 = r4.q()
            qd.o$a r6 = r14.A
            qd.n r7 = r14.B
            qd.r$b r7 = r7.f47678d
            java.lang.Object r7 = r7.f47705a
            com.google.android.exoplayer2.Timeline$b r8 = r14.f47687z
            r6.l(r7, r8)
            com.google.android.exoplayer2.Timeline$b r6 = r14.f47687z
            long r6 = r6.q()
            long r6 = r6 + r4
            qd.o$a r4 = r14.A
            com.google.android.exoplayer2.Timeline$d r5 = r14.f47686y
            com.google.android.exoplayer2.Timeline$d r1 = r4.r(r1, r5)
            long r4 = r1.e()
            int r1 = (r6 > r4 ? 1 : (r6 == r4 ? 0 : -1))
            if (r1 == 0) goto L74
            r12 = r6
            goto L75
        L74:
            r12 = r2
        L75:
            com.google.android.exoplayer2.Timeline$d r9 = r14.f47686y
            com.google.android.exoplayer2.Timeline$b r10 = r14.f47687z
            r11 = 0
            r8 = r15
            android.util.Pair r15 = r8.n(r9, r10, r11, r12)
            java.lang.Object r1 = r15.first
            java.lang.Object r15 = r15.second
            java.lang.Long r15 = (java.lang.Long) r15
            long r2 = r15.longValue()
            boolean r15 = r14.E
            if (r15 == 0) goto L94
            qd.o$a r15 = r14.A
            qd.o$a r15 = r15.x(r8)
            goto L98
        L94:
            qd.o$a r15 = qd.o.a.z(r8, r0, r1)
        L98:
            r14.A = r15
            qd.n r15 = r14.B
            if (r15 == 0) goto Lae
            r14.Y(r2)
            qd.r$b r15 = r15.f47678d
            java.lang.Object r0 = r15.f47705a
            java.lang.Object r0 = r14.W(r0)
            qd.r$b r15 = r15.c(r0)
            goto Laf
        Lae:
            r15 = 0
        Laf:
            r0 = 1
            r14.E = r0
            r14.D = r0
            qd.o$a r0 = r14.A
            r14.C(r0)
            if (r15 == 0) goto Lc6
            qd.n r0 = r14.B
            java.lang.Object r0 = ne.a.e(r0)
            qd.n r0 = (qd.n) r0
            r0.a(r15)
        Lc6:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: qd.o.Q(com.google.android.exoplayer2.Timeline):void");
    }

    @Override // qd.y0
    public void T() {
        if (!this.f47685x) {
            this.C = true;
            S();
        }
    }

    @Override // qd.r
    /* renamed from: U */
    public n h(r.b bVar, le.b bVar2, long j10) {
        n nVar = new n(bVar, bVar2, j10);
        nVar.y(this.f47793v);
        if (this.D) {
            nVar.a(bVar.c(W(bVar.f47705a)));
            return nVar;
        }
        this.B = nVar;
        if (!this.C) {
            this.C = true;
            S();
        }
        return nVar;
    }

    public Timeline X() {
        return this.A;
    }

    @Override // qd.r
    public void c(p pVar) {
        ((n) pVar).x();
        if (pVar == this.B) {
            this.B = null;
        }
    }

    @Override // qd.f, qd.r
    public void o() {
    }
}
