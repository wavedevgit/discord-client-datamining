package rd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements b0 {

    /* renamed from: a  reason: collision with root package name */
    private final uc.p f46837a;

    /* renamed from: b  reason: collision with root package name */
    private uc.k f46838b;

    /* renamed from: c  reason: collision with root package name */
    private uc.l f46839c;

    public c(uc.p pVar) {
        this.f46837a = pVar;
    }

    @Override // rd.b0
    public void a(long j10, long j11) {
        ((uc.k) oe.a.e(this.f46838b)).a(j10, j11);
    }

    @Override // rd.b0
    public void b() {
        uc.k kVar = this.f46838b;
        if (kVar instanceof bd.f) {
            ((bd.f) kVar).j();
        }
    }

    @Override // rd.b0
    public int c(uc.y yVar) {
        return ((uc.k) oe.a.e(this.f46838b)).h((uc.l) oe.a.e(this.f46839c), yVar);
    }

    @Override // rd.b0
    public long d() {
        uc.l lVar = this.f46839c;
        if (lVar != null) {
            return lVar.getPosition();
        }
        return -1L;
    }

    /* JADX WARN: Code restructure failed: missing block: B:20:0x0041, code lost:
        if (r1.getPosition() != r11) goto L28;
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x0044, code lost:
        r14 = false;
     */
    /* JADX WARN: Code restructure failed: missing block: B:35:0x006c, code lost:
        if (r1.getPosition() != r11) goto L28;
     */
    @Override // rd.b0
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void e(me.j r8, android.net.Uri r9, java.util.Map r10, long r11, long r13, uc.m r15) {
        /*
            r7 = this;
            uc.e r1 = new uc.e
            r2 = r8
            r3 = r11
            r5 = r13
            r1.<init>(r2, r3, r5)
            r7.f46839c = r1
            uc.k r8 = r7.f46838b
            if (r8 == 0) goto Lf
            return
        Lf:
            uc.p r8 = r7.f46837a
            uc.k[] r8 = r8.a(r9, r10)
            int r10 = r8.length
            r11 = 0
            r12 = 1
            if (r10 != r12) goto L1f
            r8 = r8[r11]
            r7.f46838b = r8
            goto L76
        L1f:
            int r10 = r8.length
            r13 = r11
        L21:
            if (r13 >= r10) goto L72
            r14 = r8[r13]
            boolean r0 = r14.d(r1)     // Catch: java.lang.Throwable -> L34 java.io.EOFException -> L62
            if (r0 == 0) goto L37
            r7.f46838b = r14     // Catch: java.lang.Throwable -> L34 java.io.EOFException -> L62
            oe.a.g(r12)
            r1.e()
            goto L72
        L34:
            r0 = move-exception
            r8 = r0
            goto L4e
        L37:
            uc.k r14 = r7.f46838b
            if (r14 != 0) goto L46
            long r5 = r1.getPosition()
            int r14 = (r5 > r3 ? 1 : (r5 == r3 ? 0 : -1))
            if (r14 != 0) goto L44
            goto L46
        L44:
            r14 = r11
            goto L47
        L46:
            r14 = r12
        L47:
            oe.a.g(r14)
            r1.e()
            goto L6f
        L4e:
            uc.k r9 = r7.f46838b
            if (r9 != 0) goto L5a
            long r9 = r1.getPosition()
            int r9 = (r9 > r3 ? 1 : (r9 == r3 ? 0 : -1))
            if (r9 != 0) goto L5b
        L5a:
            r11 = r12
        L5b:
            oe.a.g(r11)
            r1.e()
            throw r8
        L62:
            uc.k r14 = r7.f46838b
            if (r14 != 0) goto L46
            long r5 = r1.getPosition()
            int r14 = (r5 > r3 ? 1 : (r5 == r3 ? 0 : -1))
            if (r14 != 0) goto L44
            goto L46
        L6f:
            int r13 = r13 + 1
            goto L21
        L72:
            uc.k r10 = r7.f46838b
            if (r10 == 0) goto L7c
        L76:
            uc.k r8 = r7.f46838b
            r8.c(r15)
            return
        L7c:
            rd.x0 r10 = new rd.x0
            java.lang.StringBuilder r11 = new java.lang.StringBuilder
            r11.<init>()
            java.lang.String r12 = "None of the available extractors ("
            r11.append(r12)
            java.lang.String r8 = oe.w0.N(r8)
            r11.append(r8)
            java.lang.String r8 = ") could read the stream."
            r11.append(r8)
            java.lang.String r8 = r11.toString()
            java.lang.Object r9 = oe.a.e(r9)
            android.net.Uri r9 = (android.net.Uri) r9
            r10.<init>(r8, r9)
            throw r10
        */
        throw new UnsupportedOperationException("Method not decompiled: rd.c.e(me.j, android.net.Uri, java.util.Map, long, long, uc.m):void");
    }

    @Override // rd.b0
    public void release() {
        uc.k kVar = this.f46838b;
        if (kVar != null) {
            kVar.release();
            this.f46838b = null;
        }
        this.f46839c = null;
    }
}
