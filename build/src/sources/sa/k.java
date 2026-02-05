package sa;

import android.graphics.ColorSpace;
import com.facebook.common.internal.Supplier;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.common.BytesRange;
import java.io.Closeable;
import java.io.IOException;
import java.io.InputStream;
import kotlin.Pair;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements Closeable {

    /* renamed from: y  reason: collision with root package name */
    private static boolean f49496y;

    /* renamed from: d  reason: collision with root package name */
    private final CloseableReference f49497d;

    /* renamed from: e  reason: collision with root package name */
    private final Supplier f49498e;

    /* renamed from: i  reason: collision with root package name */
    private fa.c f49499i;

    /* renamed from: o  reason: collision with root package name */
    private int f49500o;

    /* renamed from: p  reason: collision with root package name */
    private int f49501p;

    /* renamed from: q  reason: collision with root package name */
    private int f49502q;

    /* renamed from: r  reason: collision with root package name */
    private int f49503r;

    /* renamed from: s  reason: collision with root package name */
    private int f49504s;

    /* renamed from: t  reason: collision with root package name */
    private int f49505t;

    /* renamed from: u  reason: collision with root package name */
    private BytesRange f49506u;

    /* renamed from: v  reason: collision with root package name */
    private ColorSpace f49507v;

    /* renamed from: w  reason: collision with root package name */
    private String f49508w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f49509x;

    public k(CloseableReference closeableReference) {
        this.f49499i = fa.c.f22712d;
        this.f49500o = -1;
        this.f49501p = 0;
        this.f49502q = -1;
        this.f49503r = -1;
        this.f49504s = 1;
        this.f49505t = -1;
        o8.j.b(Boolean.valueOf(CloseableReference.K0(closeableReference)));
        this.f49497d = closeableReference.clone();
        this.f49498e = null;
    }

    private void F0() {
        Pair b10;
        fa.c d10 = fa.e.d(N());
        this.f49499i = d10;
        if (fa.b.b(d10)) {
            b10 = e1();
        } else {
            b10 = Z0().b();
        }
        if (d10 == fa.b.f22696b && this.f49500o == -1) {
            if (b10 != null) {
                int b11 = cb.g.b(N());
                this.f49501p = b11;
                this.f49500o = cb.g.a(b11);
            }
        } else if (d10 == fa.b.f22706l && this.f49500o == -1) {
            int a10 = cb.e.a(N());
            this.f49501p = a10;
            this.f49500o = cb.g.a(a10);
        } else if (this.f49500o == -1) {
            this.f49500o = 0;
        }
    }

    public static boolean K0(k kVar) {
        if (kVar.f49500o >= 0 && kVar.f49502q >= 0 && kVar.f49503r >= 0) {
            return true;
        }
        return false;
    }

    public static boolean S0(k kVar) {
        if (kVar != null && kVar.N0()) {
            return true;
        }
        return false;
    }

    private void Y0() {
        if (this.f49502q >= 0 && this.f49503r >= 0) {
            return;
        }
        V0();
    }

    private cb.f Z0() {
        InputStream inputStream;
        try {
            inputStream = N();
        } catch (Throwable th2) {
            th = th2;
            inputStream = null;
        }
        try {
            cb.f e10 = cb.d.e(inputStream);
            this.f49507v = e10.a();
            Pair b10 = e10.b();
            if (b10 != null) {
                this.f49502q = ((Integer) b10.a()).intValue();
                this.f49503r = ((Integer) b10.b()).intValue();
            }
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException unused) {
                }
            }
            return e10;
        } catch (Throwable th3) {
            th = th3;
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException unused2) {
                }
            }
            throw th;
        }
    }

    private Pair e1() {
        InputStream N = N();
        if (N == null) {
            return null;
        }
        Pair f10 = cb.j.f(N);
        if (f10 != null) {
            this.f49502q = ((Integer) f10.a()).intValue();
            this.f49503r = ((Integer) f10.b()).intValue();
        }
        return f10;
    }

    public static k h(k kVar) {
        if (kVar != null) {
            return kVar.a();
        }
        return null;
    }

    public static void k(k kVar) {
        if (kVar != null) {
            kVar.close();
        }
    }

    public void A1(int i10) {
        this.f49503r = i10;
    }

    public void B1(fa.c cVar) {
        this.f49499i = cVar;
    }

    public int C0() {
        CloseableReference closeableReference = this.f49497d;
        if (closeableReference != null && closeableReference.E0() != null) {
            return ((r8.h) this.f49497d.E0()).size();
        }
        return this.f49505t;
    }

    public String D0() {
        return this.f49508w;
    }

    public ColorSpace E() {
        Y0();
        return this.f49507v;
    }

    protected boolean E0() {
        return this.f49509x;
    }

    public void E1(int i10) {
        this.f49500o = i10;
    }

    public String F(int i10) {
        CloseableReference o10 = o();
        if (o10 == null) {
            return "";
        }
        int min = Math.min(C0(), i10);
        byte[] bArr = new byte[min];
        try {
            r8.h hVar = (r8.h) o10.E0();
            if (hVar == null) {
                return "";
            }
            hVar.p(0, bArr, 0, min);
            o10.close();
            StringBuilder sb2 = new StringBuilder(min * 2);
            for (int i11 = 0; i11 < min; i11++) {
                sb2.append(String.format("%02X", Byte.valueOf(bArr[i11])));
            }
            return sb2.toString();
        } finally {
            o10.close();
        }
    }

    public boolean I0(int i10) {
        fa.c cVar = this.f49499i;
        if ((cVar != fa.b.f22696b && cVar != fa.b.f22707m) || this.f49498e != null) {
            return true;
        }
        o8.j.g(this.f49497d);
        r8.h hVar = (r8.h) this.f49497d.E0();
        if (i10 >= 2 && hVar.x(i10 - 2) == -1 && hVar.x(i10 - 1) == -39) {
            return true;
        }
        return false;
    }

    public fa.c L() {
        Y0();
        return this.f49499i;
    }

    public InputStream N() {
        Supplier supplier = this.f49498e;
        if (supplier != null) {
            return (InputStream) supplier.get();
        }
        CloseableReference E = CloseableReference.E(this.f49497d);
        if (E != null) {
            try {
                return new r8.j((r8.h) E.E0());
            } finally {
                CloseableReference.N(E);
            }
        }
        return null;
    }

    public synchronized boolean N0() {
        boolean z10;
        if (!CloseableReference.K0(this.f49497d)) {
            if (this.f49498e == null) {
                z10 = false;
            }
        }
        z10 = true;
        return z10;
    }

    public void U1(int i10) {
        this.f49504s = i10;
    }

    public InputStream V() {
        return (InputStream) o8.j.g(N());
    }

    public void V0() {
        if (!f49496y) {
            F0();
        } else if (this.f49509x) {
        } else {
            F0();
            this.f49509x = true;
        }
    }

    public int W() {
        return this.f49504s;
    }

    public void W1(String str) {
        this.f49508w = str;
    }

    public void Y1(int i10) {
        this.f49502q = i10;
    }

    public k a() {
        k kVar;
        Supplier supplier = this.f49498e;
        if (supplier != null) {
            kVar = new k(supplier, this.f49505t);
        } else {
            CloseableReference E = CloseableReference.E(this.f49497d);
            if (E == null) {
                kVar = null;
            } else {
                try {
                    kVar = new k(E);
                } finally {
                    CloseableReference.N(E);
                }
            }
        }
        if (kVar != null) {
            kVar.m(this);
        }
        return kVar;
    }

    public int b1() {
        Y0();
        return this.f49501p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        CloseableReference.N(this.f49497d);
    }

    public int getHeight() {
        Y0();
        return this.f49503r;
    }

    public int getWidth() {
        Y0();
        return this.f49502q;
    }

    public void m(k kVar) {
        this.f49499i = kVar.L();
        this.f49502q = kVar.getWidth();
        this.f49503r = kVar.getHeight();
        this.f49500o = kVar.q1();
        this.f49501p = kVar.b1();
        this.f49504s = kVar.W();
        this.f49505t = kVar.C0();
        this.f49506u = kVar.y();
        this.f49507v = kVar.E();
        this.f49509x = kVar.E0();
    }

    public CloseableReference o() {
        return CloseableReference.E(this.f49497d);
    }

    public int q1() {
        Y0();
        return this.f49500o;
    }

    public void x1(BytesRange bytesRange) {
        this.f49506u = bytesRange;
    }

    public BytesRange y() {
        return this.f49506u;
    }

    public void y1(int i10) {
        this.f49501p = i10;
    }

    public k(Supplier supplier) {
        this.f49499i = fa.c.f22712d;
        this.f49500o = -1;
        this.f49501p = 0;
        this.f49502q = -1;
        this.f49503r = -1;
        this.f49504s = 1;
        this.f49505t = -1;
        o8.j.g(supplier);
        this.f49497d = null;
        this.f49498e = supplier;
    }

    public k(Supplier supplier, int i10) {
        this(supplier);
        this.f49505t = i10;
    }
}
