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
    private static boolean f49879y;

    /* renamed from: d  reason: collision with root package name */
    private final CloseableReference f49880d;

    /* renamed from: e  reason: collision with root package name */
    private final Supplier f49881e;

    /* renamed from: i  reason: collision with root package name */
    private fa.c f49882i;

    /* renamed from: o  reason: collision with root package name */
    private int f49883o;

    /* renamed from: p  reason: collision with root package name */
    private int f49884p;

    /* renamed from: q  reason: collision with root package name */
    private int f49885q;

    /* renamed from: r  reason: collision with root package name */
    private int f49886r;

    /* renamed from: s  reason: collision with root package name */
    private int f49887s;

    /* renamed from: t  reason: collision with root package name */
    private int f49888t;

    /* renamed from: u  reason: collision with root package name */
    private BytesRange f49889u;

    /* renamed from: v  reason: collision with root package name */
    private ColorSpace f49890v;

    /* renamed from: w  reason: collision with root package name */
    private String f49891w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f49892x;

    public k(CloseableReference closeableReference) {
        this.f49882i = fa.c.f23013d;
        this.f49883o = -1;
        this.f49884p = 0;
        this.f49885q = -1;
        this.f49886r = -1;
        this.f49887s = 1;
        this.f49888t = -1;
        o8.j.b(Boolean.valueOf(CloseableReference.I0(closeableReference)));
        this.f49880d = closeableReference.clone();
        this.f49881e = null;
    }

    private void F0() {
        Pair b10;
        fa.c d10 = fa.e.d(C());
        this.f49882i = d10;
        if (fa.b.b(d10)) {
            b10 = d1();
        } else {
            b10 = Y0().b();
        }
        if (d10 == fa.b.f22997b && this.f49883o == -1) {
            if (b10 != null) {
                int b11 = cb.g.b(C());
                this.f49884p = b11;
                this.f49883o = cb.g.a(b11);
            }
        } else if (d10 == fa.b.f23007l && this.f49883o == -1) {
            int a10 = cb.e.a(C());
            this.f49884p = a10;
            this.f49883o = cb.g.a(a10);
        } else if (this.f49883o == -1) {
            this.f49883o = 0;
        }
    }

    public static boolean J0(k kVar) {
        if (kVar.f49883o >= 0 && kVar.f49885q >= 0 && kVar.f49886r >= 0) {
            return true;
        }
        return false;
    }

    public static boolean L0(k kVar) {
        if (kVar != null && kVar.K0()) {
            return true;
        }
        return false;
    }

    private void V0() {
        if (this.f49885q >= 0 && this.f49886r >= 0) {
            return;
        }
        O0();
    }

    private cb.f Y0() {
        InputStream inputStream;
        try {
            inputStream = C();
        } catch (Throwable th2) {
            th = th2;
            inputStream = null;
        }
        try {
            cb.f e10 = cb.d.e(inputStream);
            this.f49890v = e10.a();
            Pair b10 = e10.b();
            if (b10 != null) {
                this.f49885q = ((Integer) b10.a()).intValue();
                this.f49886r = ((Integer) b10.b()).intValue();
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
        InputStream C = C();
        if (C == null) {
            return null;
        }
        Pair f10 = cb.j.f(C);
        if (f10 != null) {
            this.f49885q = ((Integer) f10.a()).intValue();
            this.f49886r = ((Integer) f10.b()).intValue();
        }
        return f10;
    }

    public static k g(k kVar) {
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

    public void A1(fa.c cVar) {
        this.f49882i = cVar;
    }

    public InputStream C() {
        Supplier supplier = this.f49881e;
        if (supplier != null) {
            return (InputStream) supplier.get();
        }
        CloseableReference n10 = CloseableReference.n(this.f49880d);
        if (n10 != null) {
            try {
                return new r8.j((r8.h) n10.J());
            } finally {
                CloseableReference.z(n10);
            }
        }
        return null;
    }

    public void D1(int i10) {
        this.f49883o = i10;
    }

    protected boolean E0() {
        return this.f49892x;
    }

    public InputStream I() {
        return (InputStream) o8.j.g(C());
    }

    public boolean I0(int i10) {
        fa.c cVar = this.f49882i;
        if ((cVar != fa.b.f22997b && cVar != fa.b.f23008m) || this.f49881e != null) {
            return true;
        }
        o8.j.g(this.f49880d);
        r8.h hVar = (r8.h) this.f49880d.J();
        if (i10 >= 2 && hVar.B(i10 - 2) == -1 && hVar.B(i10 - 1) == -39) {
            return true;
        }
        return false;
    }

    public int J() {
        return this.f49887s;
    }

    public synchronized boolean K0() {
        boolean z10;
        if (!CloseableReference.I0(this.f49880d)) {
            if (this.f49881e == null) {
                z10 = false;
            }
        }
        z10 = true;
        return z10;
    }

    public void O0() {
        if (!f49879y) {
            F0();
        } else if (this.f49892x) {
        } else {
            F0();
            this.f49892x = true;
        }
    }

    public int P() {
        CloseableReference closeableReference = this.f49880d;
        if (closeableReference != null && closeableReference.J() != null) {
            return ((r8.h) this.f49880d.J()).size();
        }
        return this.f49888t;
    }

    public void T1(int i10) {
        this.f49887s = i10;
    }

    public void V1(String str) {
        this.f49891w = str;
    }

    public void X1(int i10) {
        this.f49885q = i10;
    }

    public String Y() {
        return this.f49891w;
    }

    public k a() {
        k kVar;
        Supplier supplier = this.f49881e;
        if (supplier != null) {
            kVar = new k(supplier, this.f49888t);
        } else {
            CloseableReference n10 = CloseableReference.n(this.f49880d);
            if (n10 == null) {
                kVar = null;
            } else {
                try {
                    kVar = new k(n10);
                } finally {
                    CloseableReference.z(n10);
                }
            }
        }
        if (kVar != null) {
            kVar.m(this);
        }
        return kVar;
    }

    public int a1() {
        V0();
        return this.f49884p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        CloseableReference.z(this.f49880d);
    }

    public int getHeight() {
        V0();
        return this.f49886r;
    }

    public int getWidth() {
        V0();
        return this.f49885q;
    }

    public void m(k kVar) {
        this.f49882i = kVar.z();
        this.f49885q = kVar.getWidth();
        this.f49886r = kVar.getHeight();
        this.f49883o = kVar.p1();
        this.f49884p = kVar.a1();
        this.f49887s = kVar.J();
        this.f49888t = kVar.P();
        this.f49889u = kVar.p();
        this.f49890v = kVar.s();
        this.f49892x = kVar.E0();
    }

    public CloseableReference n() {
        return CloseableReference.n(this.f49880d);
    }

    public BytesRange p() {
        return this.f49889u;
    }

    public int p1() {
        V0();
        return this.f49883o;
    }

    public ColorSpace s() {
        V0();
        return this.f49890v;
    }

    public void w1(BytesRange bytesRange) {
        this.f49889u = bytesRange;
    }

    public void x1(int i10) {
        this.f49884p = i10;
    }

    public String y(int i10) {
        CloseableReference n10 = n();
        if (n10 == null) {
            return "";
        }
        int min = Math.min(P(), i10);
        byte[] bArr = new byte[min];
        try {
            r8.h hVar = (r8.h) n10.J();
            if (hVar == null) {
                return "";
            }
            hVar.q(0, bArr, 0, min);
            n10.close();
            StringBuilder sb2 = new StringBuilder(min * 2);
            for (int i11 = 0; i11 < min; i11++) {
                sb2.append(String.format("%02X", Byte.valueOf(bArr[i11])));
            }
            return sb2.toString();
        } finally {
            n10.close();
        }
    }

    public fa.c z() {
        V0();
        return this.f49882i;
    }

    public void z1(int i10) {
        this.f49886r = i10;
    }

    public k(Supplier supplier) {
        this.f49882i = fa.c.f23013d;
        this.f49883o = -1;
        this.f49884p = 0;
        this.f49885q = -1;
        this.f49886r = -1;
        this.f49887s = 1;
        this.f49888t = -1;
        o8.j.g(supplier);
        this.f49880d = null;
        this.f49881e = supplier;
    }

    public k(Supplier supplier, int i10) {
        this(supplier);
        this.f49888t = i10;
    }
}
