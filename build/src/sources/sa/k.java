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
    private static boolean f48940y;

    /* renamed from: d  reason: collision with root package name */
    private final CloseableReference f48941d;

    /* renamed from: e  reason: collision with root package name */
    private final Supplier f48942e;

    /* renamed from: i  reason: collision with root package name */
    private fa.c f48943i;

    /* renamed from: o  reason: collision with root package name */
    private int f48944o;

    /* renamed from: p  reason: collision with root package name */
    private int f48945p;

    /* renamed from: q  reason: collision with root package name */
    private int f48946q;

    /* renamed from: r  reason: collision with root package name */
    private int f48947r;

    /* renamed from: s  reason: collision with root package name */
    private int f48948s;

    /* renamed from: t  reason: collision with root package name */
    private int f48949t;

    /* renamed from: u  reason: collision with root package name */
    private BytesRange f48950u;

    /* renamed from: v  reason: collision with root package name */
    private ColorSpace f48951v;

    /* renamed from: w  reason: collision with root package name */
    private String f48952w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f48953x;

    public k(CloseableReference closeableReference) {
        this.f48943i = fa.c.f24095d;
        this.f48944o = -1;
        this.f48945p = 0;
        this.f48946q = -1;
        this.f48947r = -1;
        this.f48948s = 1;
        this.f48949t = -1;
        o8.j.b(Boolean.valueOf(CloseableReference.K0(closeableReference)));
        this.f48941d = closeableReference.clone();
        this.f48942e = null;
    }

    private void G0() {
        Pair b10;
        fa.c d10 = fa.e.d(N());
        this.f48943i = d10;
        if (fa.b.b(d10)) {
            b10 = e1();
        } else {
            b10 = Z0().b();
        }
        if (d10 == fa.b.f24079b && this.f48944o == -1) {
            if (b10 != null) {
                int b11 = cb.g.b(N());
                this.f48945p = b11;
                this.f48944o = cb.g.a(b11);
            }
        } else if (d10 == fa.b.f24089l && this.f48944o == -1) {
            int a10 = cb.e.a(N());
            this.f48945p = a10;
            this.f48944o = cb.g.a(a10);
        } else if (this.f48944o == -1) {
            this.f48944o = 0;
        }
    }

    public static boolean K0(k kVar) {
        if (kVar.f48944o >= 0 && kVar.f48946q >= 0 && kVar.f48947r >= 0) {
            return true;
        }
        return false;
    }

    public static boolean O0(k kVar) {
        if (kVar != null && kVar.L0()) {
            return true;
        }
        return false;
    }

    private void Y0() {
        if (this.f48946q >= 0 && this.f48947r >= 0) {
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
            this.f48951v = e10.a();
            Pair b10 = e10.b();
            if (b10 != null) {
                this.f48946q = ((Integer) b10.a()).intValue();
                this.f48947r = ((Integer) b10.b()).intValue();
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
            this.f48946q = ((Integer) f10.a()).intValue();
            this.f48947r = ((Integer) f10.b()).intValue();
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

    public void A1(int i10) {
        this.f48947r = i10;
    }

    public BytesRange B() {
        return this.f48950u;
    }

    public void B1(fa.c cVar) {
        this.f48943i = cVar;
    }

    public int D0() {
        CloseableReference closeableReference = this.f48941d;
        if (closeableReference != null && closeableReference.F0() != null) {
            return ((r8.h) this.f48941d.F0()).size();
        }
        return this.f48949t;
    }

    public ColorSpace E() {
        Y0();
        return this.f48951v;
    }

    public String E0() {
        return this.f48952w;
    }

    public void E1(int i10) {
        this.f48944o = i10;
    }

    public String F(int i10) {
        CloseableReference x10 = x();
        if (x10 == null) {
            return "";
        }
        int min = Math.min(D0(), i10);
        byte[] bArr = new byte[min];
        try {
            r8.h hVar = (r8.h) x10.F0();
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

    protected boolean F0() {
        return this.f48953x;
    }

    public boolean J0(int i10) {
        fa.c cVar = this.f48943i;
        if ((cVar != fa.b.f24079b && cVar != fa.b.f24090m) || this.f48942e != null) {
            return true;
        }
        o8.j.g(this.f48941d);
        r8.h hVar = (r8.h) this.f48941d.F0();
        if (i10 >= 2 && hVar.w(i10 - 2) == -1 && hVar.w(i10 - 1) == -39) {
            return true;
        }
        return false;
    }

    public fa.c L() {
        Y0();
        return this.f48943i;
    }

    public synchronized boolean L0() {
        boolean z10;
        if (!CloseableReference.K0(this.f48941d)) {
            if (this.f48942e == null) {
                z10 = false;
            }
        }
        z10 = true;
        return z10;
    }

    public InputStream N() {
        Supplier supplier = this.f48942e;
        if (supplier != null) {
            return (InputStream) supplier.get();
        }
        CloseableReference E = CloseableReference.E(this.f48941d);
        if (E != null) {
            try {
                return new r8.j((r8.h) E.F0());
            } finally {
                CloseableReference.N(E);
            }
        }
        return null;
    }

    public void U1(int i10) {
        this.f48948s = i10;
    }

    public InputStream V() {
        return (InputStream) o8.j.g(N());
    }

    public void V0() {
        if (!f48940y) {
            G0();
        } else if (this.f48953x) {
        } else {
            G0();
            this.f48953x = true;
        }
    }

    public void W1(String str) {
        this.f48952w = str;
    }

    public void Y1(int i10) {
        this.f48946q = i10;
    }

    public k a() {
        k kVar;
        Supplier supplier = this.f48942e;
        if (supplier != null) {
            kVar = new k(supplier, this.f48949t);
        } else {
            CloseableReference E = CloseableReference.E(this.f48941d);
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
        return this.f48945p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        CloseableReference.N(this.f48941d);
    }

    public int getHeight() {
        Y0();
        return this.f48947r;
    }

    public int getWidth() {
        Y0();
        return this.f48946q;
    }

    public void n(k kVar) {
        this.f48943i = kVar.L();
        this.f48946q = kVar.getWidth();
        this.f48947r = kVar.getHeight();
        this.f48944o = kVar.q1();
        this.f48945p = kVar.b1();
        this.f48948s = kVar.t0();
        this.f48949t = kVar.D0();
        this.f48950u = kVar.B();
        this.f48951v = kVar.E();
        this.f48953x = kVar.F0();
    }

    public int q1() {
        Y0();
        return this.f48944o;
    }

    public int t0() {
        return this.f48948s;
    }

    public CloseableReference x() {
        return CloseableReference.E(this.f48941d);
    }

    public void x1(BytesRange bytesRange) {
        this.f48950u = bytesRange;
    }

    public void y1(int i10) {
        this.f48945p = i10;
    }

    public k(Supplier supplier) {
        this.f48943i = fa.c.f24095d;
        this.f48944o = -1;
        this.f48945p = 0;
        this.f48946q = -1;
        this.f48947r = -1;
        this.f48948s = 1;
        this.f48949t = -1;
        o8.j.g(supplier);
        this.f48941d = null;
        this.f48942e = supplier;
    }

    public k(Supplier supplier, int i10) {
        this(supplier);
        this.f48949t = i10;
    }
}
