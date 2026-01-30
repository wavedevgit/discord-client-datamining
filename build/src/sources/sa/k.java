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
    private static boolean f48886y;

    /* renamed from: d  reason: collision with root package name */
    private final CloseableReference f48887d;

    /* renamed from: e  reason: collision with root package name */
    private final Supplier f48888e;

    /* renamed from: i  reason: collision with root package name */
    private fa.c f48889i;

    /* renamed from: o  reason: collision with root package name */
    private int f48890o;

    /* renamed from: p  reason: collision with root package name */
    private int f48891p;

    /* renamed from: q  reason: collision with root package name */
    private int f48892q;

    /* renamed from: r  reason: collision with root package name */
    private int f48893r;

    /* renamed from: s  reason: collision with root package name */
    private int f48894s;

    /* renamed from: t  reason: collision with root package name */
    private int f48895t;

    /* renamed from: u  reason: collision with root package name */
    private BytesRange f48896u;

    /* renamed from: v  reason: collision with root package name */
    private ColorSpace f48897v;

    /* renamed from: w  reason: collision with root package name */
    private String f48898w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f48899x;

    public k(CloseableReference closeableReference) {
        this.f48889i = fa.c.f24884d;
        this.f48890o = -1;
        this.f48891p = 0;
        this.f48892q = -1;
        this.f48893r = -1;
        this.f48894s = 1;
        this.f48895t = -1;
        o8.j.b(Boolean.valueOf(CloseableReference.I0(closeableReference)));
        this.f48887d = closeableReference.clone();
        this.f48888e = null;
    }

    private void F0() {
        Pair b10;
        fa.c d10 = fa.e.d(N());
        this.f48889i = d10;
        if (fa.b.b(d10)) {
            b10 = d1();
        } else {
            b10 = Y0().b();
        }
        if (d10 == fa.b.f24868b && this.f48890o == -1) {
            if (b10 != null) {
                int b11 = cb.g.b(N());
                this.f48891p = b11;
                this.f48890o = cb.g.a(b11);
            }
        } else if (d10 == fa.b.f24878l && this.f48890o == -1) {
            int a10 = cb.e.a(N());
            this.f48891p = a10;
            this.f48890o = cb.g.a(a10);
        } else if (this.f48890o == -1) {
            this.f48890o = 0;
        }
    }

    public static boolean J0(k kVar) {
        if (kVar.f48890o >= 0 && kVar.f48892q >= 0 && kVar.f48893r >= 0) {
            return true;
        }
        return false;
    }

    public static boolean R0(k kVar) {
        if (kVar != null && kVar.M0()) {
            return true;
        }
        return false;
    }

    private void X0() {
        if (this.f48892q >= 0 && this.f48893r >= 0) {
            return;
        }
        U0();
    }

    private cb.f Y0() {
        InputStream inputStream;
        try {
            inputStream = N();
        } catch (Throwable th2) {
            th = th2;
            inputStream = null;
        }
        try {
            cb.f e10 = cb.d.e(inputStream);
            this.f48897v = e10.a();
            Pair b10 = e10.b();
            if (b10 != null) {
                this.f48892q = ((Integer) b10.a()).intValue();
                this.f48893r = ((Integer) b10.b()).intValue();
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

    private Pair d1() {
        InputStream N = N();
        if (N == null) {
            return null;
        }
        Pair f10 = cb.j.f(N);
        if (f10 != null) {
            this.f48892q = ((Integer) f10.a()).intValue();
            this.f48893r = ((Integer) f10.b()).intValue();
        }
        return f10;
    }

    public static k h(k kVar) {
        if (kVar != null) {
            return kVar.a();
        }
        return null;
    }

    public static void l(k kVar) {
        if (kVar != null) {
            kVar.close();
        }
    }

    public int A0() {
        return this.f48894s;
    }

    public void A1(int i10) {
        this.f48893r = i10;
    }

    public BytesRange B() {
        return this.f48896u;
    }

    public void B1(fa.c cVar) {
        this.f48889i = cVar;
    }

    public int C0() {
        CloseableReference closeableReference = this.f48887d;
        if (closeableReference != null && closeableReference.D0() != null) {
            return ((r8.h) this.f48887d.D0()).size();
        }
        return this.f48895t;
    }

    public String D0() {
        return this.f48898w;
    }

    public ColorSpace E() {
        X0();
        return this.f48897v;
    }

    protected boolean E0() {
        return this.f48899x;
    }

    public void E1(int i10) {
        this.f48890o = i10;
    }

    public String F(int i10) {
        CloseableReference x10 = x();
        if (x10 == null) {
            return "";
        }
        int min = Math.min(C0(), i10);
        byte[] bArr = new byte[min];
        try {
            r8.h hVar = (r8.h) x10.D0();
            if (hVar == null) {
                return "";
            }
            hVar.o(0, bArr, 0, min);
            x10.close();
            StringBuilder sb2 = new StringBuilder(min * 2);
            for (int i11 = 0; i11 < min; i11++) {
                sb2.append(String.format("%02X", Byte.valueOf(bArr[i11])));
            }
            return sb2.toString();
        } finally {
            x10.close();
        }
    }

    public boolean I0(int i10) {
        fa.c cVar = this.f48889i;
        if ((cVar != fa.b.f24868b && cVar != fa.b.f24879m) || this.f48888e != null) {
            return true;
        }
        o8.j.g(this.f48887d);
        r8.h hVar = (r8.h) this.f48887d.D0();
        if (i10 >= 2 && hVar.w(i10 - 2) == -1 && hVar.w(i10 - 1) == -39) {
            return true;
        }
        return false;
    }

    public fa.c L() {
        X0();
        return this.f48889i;
    }

    public synchronized boolean M0() {
        boolean z10;
        if (!CloseableReference.I0(this.f48887d)) {
            if (this.f48888e == null) {
                z10 = false;
            }
        }
        z10 = true;
        return z10;
    }

    public InputStream N() {
        Supplier supplier = this.f48888e;
        if (supplier != null) {
            return (InputStream) supplier.get();
        }
        CloseableReference E = CloseableReference.E(this.f48887d);
        if (E != null) {
            try {
                return new r8.j((r8.h) E.D0());
            } finally {
                CloseableReference.N(E);
            }
        }
        return null;
    }

    public void U0() {
        if (!f48886y) {
            F0();
        } else if (this.f48899x) {
        } else {
            F0();
            this.f48899x = true;
        }
    }

    public void U1(int i10) {
        this.f48894s = i10;
    }

    public InputStream V() {
        return (InputStream) o8.j.g(N());
    }

    public void W1(String str) {
        this.f48898w = str;
    }

    public void Y1(int i10) {
        this.f48892q = i10;
    }

    public k a() {
        k kVar;
        Supplier supplier = this.f48888e;
        if (supplier != null) {
            kVar = new k(supplier, this.f48895t);
        } else {
            CloseableReference E = CloseableReference.E(this.f48887d);
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
            kVar.n(this);
        }
        return kVar;
    }

    public int a1() {
        X0();
        return this.f48891p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        CloseableReference.N(this.f48887d);
    }

    public int getHeight() {
        X0();
        return this.f48893r;
    }

    public int getWidth() {
        X0();
        return this.f48892q;
    }

    public void n(k kVar) {
        this.f48889i = kVar.L();
        this.f48892q = kVar.getWidth();
        this.f48893r = kVar.getHeight();
        this.f48890o = kVar.q1();
        this.f48891p = kVar.a1();
        this.f48894s = kVar.A0();
        this.f48895t = kVar.C0();
        this.f48896u = kVar.B();
        this.f48897v = kVar.E();
        this.f48899x = kVar.E0();
    }

    public int q1() {
        X0();
        return this.f48890o;
    }

    public CloseableReference x() {
        return CloseableReference.E(this.f48887d);
    }

    public void x1(BytesRange bytesRange) {
        this.f48896u = bytesRange;
    }

    public void y1(int i10) {
        this.f48891p = i10;
    }

    public k(Supplier supplier) {
        this.f48889i = fa.c.f24884d;
        this.f48890o = -1;
        this.f48891p = 0;
        this.f48892q = -1;
        this.f48893r = -1;
        this.f48894s = 1;
        this.f48895t = -1;
        o8.j.g(supplier);
        this.f48887d = null;
        this.f48888e = supplier;
    }

    public k(Supplier supplier, int i10) {
        this(supplier);
        this.f48895t = i10;
    }
}
