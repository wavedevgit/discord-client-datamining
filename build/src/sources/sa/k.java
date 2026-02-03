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
    private static boolean f49350y;

    /* renamed from: d  reason: collision with root package name */
    private final CloseableReference f49351d;

    /* renamed from: e  reason: collision with root package name */
    private final Supplier f49352e;

    /* renamed from: i  reason: collision with root package name */
    private fa.c f49353i;

    /* renamed from: o  reason: collision with root package name */
    private int f49354o;

    /* renamed from: p  reason: collision with root package name */
    private int f49355p;

    /* renamed from: q  reason: collision with root package name */
    private int f49356q;

    /* renamed from: r  reason: collision with root package name */
    private int f49357r;

    /* renamed from: s  reason: collision with root package name */
    private int f49358s;

    /* renamed from: t  reason: collision with root package name */
    private int f49359t;

    /* renamed from: u  reason: collision with root package name */
    private BytesRange f49360u;

    /* renamed from: v  reason: collision with root package name */
    private ColorSpace f49361v;

    /* renamed from: w  reason: collision with root package name */
    private String f49362w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f49363x;

    public k(CloseableReference closeableReference) {
        this.f49353i = fa.c.f23687d;
        this.f49354o = -1;
        this.f49355p = 0;
        this.f49356q = -1;
        this.f49357r = -1;
        this.f49358s = 1;
        this.f49359t = -1;
        o8.j.b(Boolean.valueOf(CloseableReference.F0(closeableReference)));
        this.f49351d = closeableReference.clone();
        this.f49352e = null;
    }

    private void F0() {
        Pair b10;
        fa.c d10 = fa.e.d(N());
        this.f49353i = d10;
        if (fa.b.b(d10)) {
            b10 = e1();
        } else {
            b10 = Z0().b();
        }
        if (d10 == fa.b.f23671b && this.f49354o == -1) {
            if (b10 != null) {
                int b11 = cb.g.b(N());
                this.f49355p = b11;
                this.f49354o = cb.g.a(b11);
            }
        } else if (d10 == fa.b.f23681l && this.f49354o == -1) {
            int a10 = cb.e.a(N());
            this.f49355p = a10;
            this.f49354o = cb.g.a(a10);
        } else if (this.f49354o == -1) {
            this.f49354o = 0;
        }
    }

    public static boolean J0(k kVar) {
        if (kVar.f49354o >= 0 && kVar.f49356q >= 0 && kVar.f49357r >= 0) {
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

    private void Y0() {
        if (this.f49356q >= 0 && this.f49357r >= 0) {
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
            this.f49361v = e10.a();
            Pair b10 = e10.b();
            if (b10 != null) {
                this.f49356q = ((Integer) b10.a()).intValue();
                this.f49357r = ((Integer) b10.b()).intValue();
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
            this.f49356q = ((Integer) f10.a()).intValue();
            this.f49357r = ((Integer) f10.b()).intValue();
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
        return this.f49358s;
    }

    public void A1(int i10) {
        this.f49357r = i10;
    }

    public BytesRange B() {
        return this.f49360u;
    }

    public void B1(fa.c cVar) {
        this.f49353i = cVar;
    }

    public int C0() {
        CloseableReference closeableReference = this.f49351d;
        if (closeableReference != null && closeableReference.C0() != null) {
            return ((r8.h) this.f49351d.C0()).size();
        }
        return this.f49359t;
    }

    public String D0() {
        return this.f49362w;
    }

    public ColorSpace E() {
        Y0();
        return this.f49361v;
    }

    protected boolean E0() {
        return this.f49363x;
    }

    public void E1(int i10) {
        this.f49354o = i10;
    }

    public String F(int i10) {
        CloseableReference x10 = x();
        if (x10 == null) {
            return "";
        }
        int min = Math.min(C0(), i10);
        byte[] bArr = new byte[min];
        try {
            r8.h hVar = (r8.h) x10.C0();
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
        fa.c cVar = this.f49353i;
        if ((cVar != fa.b.f23671b && cVar != fa.b.f23682m) || this.f49352e != null) {
            return true;
        }
        o8.j.g(this.f49351d);
        r8.h hVar = (r8.h) this.f49351d.C0();
        if (i10 >= 2 && hVar.w(i10 - 2) == -1 && hVar.w(i10 - 1) == -39) {
            return true;
        }
        return false;
    }

    public fa.c L() {
        Y0();
        return this.f49353i;
    }

    public synchronized boolean M0() {
        boolean z10;
        if (!CloseableReference.F0(this.f49351d)) {
            if (this.f49352e == null) {
                z10 = false;
            }
        }
        z10 = true;
        return z10;
    }

    public InputStream N() {
        Supplier supplier = this.f49352e;
        if (supplier != null) {
            return (InputStream) supplier.get();
        }
        CloseableReference E = CloseableReference.E(this.f49351d);
        if (E != null) {
            try {
                return new r8.j((r8.h) E.C0());
            } finally {
                CloseableReference.N(E);
            }
        }
        return null;
    }

    public void U1(int i10) {
        this.f49358s = i10;
    }

    public InputStream V() {
        return (InputStream) o8.j.g(N());
    }

    public void V0() {
        if (!f49350y) {
            F0();
        } else if (this.f49363x) {
        } else {
            F0();
            this.f49363x = true;
        }
    }

    public void W1(String str) {
        this.f49362w = str;
    }

    public void Y1(int i10) {
        this.f49356q = i10;
    }

    public k a() {
        k kVar;
        Supplier supplier = this.f49352e;
        if (supplier != null) {
            kVar = new k(supplier, this.f49359t);
        } else {
            CloseableReference E = CloseableReference.E(this.f49351d);
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

    public int b1() {
        Y0();
        return this.f49355p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        CloseableReference.N(this.f49351d);
    }

    public int getHeight() {
        Y0();
        return this.f49357r;
    }

    public int getWidth() {
        Y0();
        return this.f49356q;
    }

    public void n(k kVar) {
        this.f49353i = kVar.L();
        this.f49356q = kVar.getWidth();
        this.f49357r = kVar.getHeight();
        this.f49354o = kVar.q1();
        this.f49355p = kVar.b1();
        this.f49358s = kVar.A0();
        this.f49359t = kVar.C0();
        this.f49360u = kVar.B();
        this.f49361v = kVar.E();
        this.f49363x = kVar.E0();
    }

    public int q1() {
        Y0();
        return this.f49354o;
    }

    public CloseableReference x() {
        return CloseableReference.E(this.f49351d);
    }

    public void x1(BytesRange bytesRange) {
        this.f49360u = bytesRange;
    }

    public void y1(int i10) {
        this.f49355p = i10;
    }

    public k(Supplier supplier) {
        this.f49353i = fa.c.f23687d;
        this.f49354o = -1;
        this.f49355p = 0;
        this.f49356q = -1;
        this.f49357r = -1;
        this.f49358s = 1;
        this.f49359t = -1;
        o8.j.g(supplier);
        this.f49351d = null;
        this.f49352e = supplier;
    }

    public k(Supplier supplier, int i10) {
        this(supplier);
        this.f49359t = i10;
    }
}
