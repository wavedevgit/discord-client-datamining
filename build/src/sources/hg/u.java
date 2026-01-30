package hg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class u extends j {

    /* renamed from: i  reason: collision with root package name */
    final CharSequence f27539i;

    /* renamed from: o  reason: collision with root package name */
    final o f27540o;

    /* renamed from: p  reason: collision with root package name */
    final boolean f27541p;

    /* renamed from: q  reason: collision with root package name */
    int f27542q = 0;

    /* renamed from: r  reason: collision with root package name */
    int f27543r;

    /* JADX INFO: Access modifiers changed from: protected */
    public u(b bVar, CharSequence charSequence) {
        o oVar;
        boolean z10;
        oVar = bVar.f27525a;
        this.f27540o = oVar;
        z10 = bVar.f27526b;
        this.f27541p = z10;
        this.f27543r = Integer.MAX_VALUE;
        this.f27539i = charSequence;
    }

    /* JADX WARN: Code restructure failed: missing block: B:21:0x0047, code lost:
        r3 = r5.f27543r;
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x004a, code lost:
        if (r3 != 1) goto L28;
     */
    /* JADX WARN: Code restructure failed: missing block: B:23:0x004c, code lost:
        r1 = r5.f27539i.length();
        r5.f27542q = -1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x0054, code lost:
        if (r1 <= r0) goto L25;
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x0056, code lost:
        r5.f27539i.charAt(r1 - 1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x005e, code lost:
        r5.f27543r = r3 - 1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:28:0x006b, code lost:
        return r5.f27539i.subSequence(r0, r1).toString();
     */
    @Override // hg.j
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected final /* bridge */ /* synthetic */ java.lang.Object a() {
        /*
            r5 = this;
            int r0 = r5.f27542q
        L2:
            int r1 = r5.f27542q
            r2 = -1
            if (r1 == r2) goto L6c
            int r1 = r5.d(r1)
            if (r1 != r2) goto L17
            java.lang.CharSequence r1 = r5.f27539i
            int r1 = r1.length()
            r5.f27542q = r2
            r3 = r2
            goto L1d
        L17:
            int r3 = r5.c(r1)
            r5.f27542q = r3
        L1d:
            if (r3 != r0) goto L2e
            int r3 = r3 + 1
            r5.f27542q = r3
            java.lang.CharSequence r1 = r5.f27539i
            int r1 = r1.length()
            if (r3 <= r1) goto L2
            r5.f27542q = r2
            goto L2
        L2e:
            if (r0 >= r1) goto L35
            java.lang.CharSequence r3 = r5.f27539i
            r3.charAt(r0)
        L35:
            if (r0 >= r1) goto L3e
            java.lang.CharSequence r3 = r5.f27539i
            int r4 = r1 + (-1)
            r3.charAt(r4)
        L3e:
            boolean r3 = r5.f27541p
            if (r3 == 0) goto L47
            if (r0 != r1) goto L47
            int r0 = r5.f27542q
            goto L2
        L47:
            int r3 = r5.f27543r
            r4 = 1
            if (r3 != r4) goto L5e
            java.lang.CharSequence r1 = r5.f27539i
            int r1 = r1.length()
            r5.f27542q = r2
            if (r1 <= r0) goto L61
            java.lang.CharSequence r2 = r5.f27539i
            int r3 = r1 + (-1)
            r2.charAt(r3)
            goto L61
        L5e:
            int r3 = r3 + r2
            r5.f27543r = r3
        L61:
            java.lang.CharSequence r2 = r5.f27539i
            java.lang.CharSequence r0 = r2.subSequence(r0, r1)
            java.lang.String r0 = r0.toString()
            return r0
        L6c:
            r5.b()
            r0 = 0
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: hg.u.a():java.lang.Object");
    }

    abstract int c(int i10);

    abstract int d(int i10);
}
