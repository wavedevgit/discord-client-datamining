package hg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class d0 extends s {

    /* renamed from: i  reason: collision with root package name */
    final CharSequence f25832i;

    /* renamed from: o  reason: collision with root package name */
    final x f25833o;

    /* renamed from: p  reason: collision with root package name */
    final boolean f25834p;

    /* renamed from: q  reason: collision with root package name */
    int f25835q = 0;

    /* renamed from: r  reason: collision with root package name */
    int f25836r = Integer.MAX_VALUE;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(e0 e0Var, CharSequence charSequence) {
        this.f25833o = e0Var.f();
        this.f25834p = e0Var.g();
        this.f25832i = charSequence;
    }

    /* JADX WARN: Code restructure failed: missing block: B:21:0x0047, code lost:
        r3 = r5.f25836r;
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x004a, code lost:
        if (r3 != 1) goto L29;
     */
    /* JADX WARN: Code restructure failed: missing block: B:23:0x004c, code lost:
        r1 = r5.f25832i;
        r3 = r1.length();
        r5.f25835q = -1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x0054, code lost:
        if (r3 <= r0) goto L25;
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x0056, code lost:
        r1.charAt(r3 - 1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x005b, code lost:
        r1 = r3;
     */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x005d, code lost:
        r5.f25836r = r3 - 1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x006a, code lost:
        return r5.f25832i.subSequence(r0, r1).toString();
     */
    @Override // hg.s
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected final /* bridge */ /* synthetic */ java.lang.Object a() {
        /*
            r5 = this;
            int r0 = r5.f25835q
        L2:
            int r1 = r5.f25835q
            r2 = -1
            if (r1 == r2) goto L6b
            int r1 = r5.c(r1)
            if (r1 != r2) goto L17
            java.lang.CharSequence r1 = r5.f25832i
            int r1 = r1.length()
            r5.f25835q = r2
            r3 = r2
            goto L1d
        L17:
            int r3 = r5.d(r1)
            r5.f25835q = r3
        L1d:
            if (r3 != r0) goto L2e
            int r3 = r3 + 1
            r5.f25835q = r3
            java.lang.CharSequence r1 = r5.f25832i
            int r1 = r1.length()
            if (r3 <= r1) goto L2
            r5.f25835q = r2
            goto L2
        L2e:
            if (r0 >= r1) goto L35
            java.lang.CharSequence r3 = r5.f25832i
            r3.charAt(r0)
        L35:
            if (r0 >= r1) goto L3e
            java.lang.CharSequence r3 = r5.f25832i
            int r4 = r1 + (-1)
            r3.charAt(r4)
        L3e:
            boolean r3 = r5.f25834p
            if (r3 == 0) goto L47
            if (r0 != r1) goto L47
            int r0 = r5.f25835q
            goto L2
        L47:
            int r3 = r5.f25836r
            r4 = 1
            if (r3 != r4) goto L5d
            java.lang.CharSequence r1 = r5.f25832i
            int r3 = r1.length()
            r5.f25835q = r2
            if (r3 <= r0) goto L5b
            int r2 = r3 + (-1)
            r1.charAt(r2)
        L5b:
            r1 = r3
            goto L60
        L5d:
            int r3 = r3 + r2
            r5.f25836r = r3
        L60:
            java.lang.CharSequence r2 = r5.f25832i
            java.lang.CharSequence r0 = r2.subSequence(r0, r1)
            java.lang.String r0 = r0.toString()
            return r0
        L6b:
            r5.b()
            r0 = 0
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: hg.d0.a():java.lang.Object");
    }

    abstract int c(int i10);

    abstract int d(int i10);
}
