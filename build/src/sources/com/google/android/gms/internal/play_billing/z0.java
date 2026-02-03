package com.google.android.gms.internal.play_billing;

import java.util.logging.Level;
import java.util.logging.Logger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class z0 extends g0 {

    /* renamed from: b  reason: collision with root package name */
    private static final Logger f15061b = Logger.getLogger(z0.class.getName());

    /* renamed from: c  reason: collision with root package name */
    private static final boolean f15062c = g4.C();

    /* renamed from: a  reason: collision with root package name */
    a1 f15063a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ z0(y0 y0Var) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int t(int i10, v2 v2Var, g3 g3Var) {
        int w10 = w(i10 << 3);
        return w10 + w10 + ((z) v2Var).d(g3Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int u(v2 v2Var, g3 g3Var) {
        int d10 = ((z) v2Var).d(g3Var);
        return w(d10) + d10;
    }

    public static int v(String str) {
        int length;
        try {
            length = l4.c(str);
        } catch (k4 unused) {
            length = str.getBytes(y1.f15040b).length;
        }
        return w(length) + length;
    }

    public static int w(int i10) {
        return (352 - (Integer.numberOfLeadingZeros(i10) * 9)) >>> 6;
    }

    public static int x(long j10) {
        return (640 - (Long.numberOfLeadingZeros(j10) * 9)) >>> 6;
    }

    public static z0 y(byte[] bArr, int i10, int i11) {
        return new w0(bArr, 0, i11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(String str, k4 k4Var) {
        f15061b.logp(Level.WARNING, "com.google.protobuf.CodedOutputStream", "inefficientWriteStringNoTag", "Converting ill-formed UTF-16. Your Protocol Buffer will not round trip correctly!", (Throwable) k4Var);
        byte[] bytes = str.getBytes(y1.f15040b);
        try {
            int length = bytes.length;
            q(length);
            m(bytes, 0, length);
        } catch (IndexOutOfBoundsException e10) {
            throw new x0(e10);
        }
    }

    public abstract int c();

    public abstract void d(byte b10);

    public abstract void e(int i10, boolean z10);

    public abstract void f(int i10, r0 r0Var);

    public abstract void g(int i10, int i11);

    public abstract void h(int i10);

    public abstract void i(int i10, long j10);

    public abstract void j(long j10);

    public abstract void k(int i10, int i11);

    public abstract void l(int i10);

    public abstract void m(byte[] bArr, int i10, int i11);

    public abstract void n(int i10, String str);

    public abstract void o(int i10, int i11);

    public abstract void p(int i10, int i11);

    public abstract void q(int i10);

    public abstract void r(int i10, long j10);

    public abstract void s(long j10);

    public final void z() {
        if (c() == 0) {
            return;
        }
        throw new IllegalStateException("Did not write as much data as expected.");
    }
}
