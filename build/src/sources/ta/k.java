package ta;

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
    private static boolean f50720y;

    /* renamed from: d  reason: collision with root package name */
    private final CloseableReference f50721d;

    /* renamed from: e  reason: collision with root package name */
    private final Supplier f50722e;

    /* renamed from: i  reason: collision with root package name */
    private ga.c f50723i;

    /* renamed from: o  reason: collision with root package name */
    private int f50724o;

    /* renamed from: p  reason: collision with root package name */
    private int f50725p;

    /* renamed from: q  reason: collision with root package name */
    private int f50726q;

    /* renamed from: r  reason: collision with root package name */
    private int f50727r;

    /* renamed from: s  reason: collision with root package name */
    private int f50728s;

    /* renamed from: t  reason: collision with root package name */
    private int f50729t;

    /* renamed from: u  reason: collision with root package name */
    private BytesRange f50730u;

    /* renamed from: v  reason: collision with root package name */
    private ColorSpace f50731v;

    /* renamed from: w  reason: collision with root package name */
    private String f50732w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f50733x;

    public k(CloseableReference closeableReference) {
        this.f50723i = ga.c.f24098d;
        this.f50724o = -1;
        this.f50725p = 0;
        this.f50726q = -1;
        this.f50727r = -1;
        this.f50728s = 1;
        this.f50729t = -1;
        p8.j.b(Boolean.valueOf(CloseableReference.G0(closeableReference)));
        this.f50721d = closeableReference.clone();
        this.f50722e = null;
    }

    private void D0() {
        Pair b10;
        ga.c d10 = ga.e.d(C());
        this.f50723i = d10;
        if (ga.b.b(d10)) {
            b10 = a1();
        } else {
            b10 = W0().b();
        }
        if (d10 == ga.b.f24082b && this.f50724o == -1) {
            if (b10 != null) {
                int b11 = db.g.b(C());
                this.f50725p = b11;
                this.f50724o = db.g.a(b11);
            }
        } else if (d10 == ga.b.f24092l && this.f50724o == -1) {
            int a10 = db.e.a(C());
            this.f50725p = a10;
            this.f50724o = db.g.a(a10);
        } else if (this.f50724o == -1) {
            this.f50724o = 0;
        }
    }

    public static boolean H0(k kVar) {
        if (kVar.f50724o >= 0 && kVar.f50726q >= 0 && kVar.f50727r >= 0) {
            return true;
        }
        return false;
    }

    public static boolean O0(k kVar) {
        if (kVar != null && kVar.J0()) {
            return true;
        }
        return false;
    }

    private void V0() {
        if (this.f50726q >= 0 && this.f50727r >= 0) {
            return;
        }
        R0();
    }

    private db.f W0() {
        InputStream inputStream;
        try {
            inputStream = C();
        } catch (Throwable th2) {
            th = th2;
            inputStream = null;
        }
        try {
            db.f e10 = db.d.e(inputStream);
            this.f50731v = e10.a();
            Pair b10 = e10.b();
            if (b10 != null) {
                this.f50726q = ((Integer) b10.a()).intValue();
                this.f50727r = ((Integer) b10.b()).intValue();
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

    private Pair a1() {
        InputStream C = C();
        if (C == null) {
            return null;
        }
        Pair f10 = db.j.f(C);
        if (f10 != null) {
            this.f50726q = ((Integer) f10.a()).intValue();
            this.f50727r = ((Integer) f10.b()).intValue();
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

    public InputStream C() {
        Supplier supplier = this.f50722e;
        if (supplier != null) {
            return (InputStream) supplier.get();
        }
        CloseableReference n10 = CloseableReference.n(this.f50721d);
        if (n10 != null) {
            try {
                return new s8.j((s8.h) n10.J());
            } finally {
                CloseableReference.z(n10);
            }
        }
        return null;
    }

    protected boolean C0() {
        return this.f50733x;
    }

    public boolean G0(int i10) {
        ga.c cVar = this.f50723i;
        if ((cVar != ga.b.f24082b && cVar != ga.b.f24093m) || this.f50722e != null) {
            return true;
        }
        p8.j.g(this.f50721d);
        s8.h hVar = (s8.h) this.f50721d.J();
        if (i10 >= 2 && hVar.B(i10 - 2) == -1 && hVar.B(i10 - 1) == -39) {
            return true;
        }
        return false;
    }

    public InputStream I() {
        return (InputStream) p8.j.g(C());
    }

    public int J() {
        return this.f50728s;
    }

    public synchronized boolean J0() {
        boolean z10;
        if (!CloseableReference.G0(this.f50721d)) {
            if (this.f50722e == null) {
                z10 = false;
            }
        }
        z10 = true;
        return z10;
    }

    public int Q() {
        CloseableReference closeableReference = this.f50721d;
        if (closeableReference != null && closeableReference.J() != null) {
            return ((s8.h) this.f50721d.J()).size();
        }
        return this.f50729t;
    }

    public void R0() {
        if (!f50720y) {
            D0();
        } else if (this.f50733x) {
        } else {
            D0();
            this.f50733x = true;
        }
    }

    public void S1(int i10) {
        this.f50728s = i10;
    }

    public void U1(String str) {
        this.f50732w = str;
    }

    public void W1(int i10) {
        this.f50726q = i10;
    }

    public int X0() {
        V0();
        return this.f50725p;
    }

    public String Z() {
        return this.f50732w;
    }

    public k a() {
        k kVar;
        Supplier supplier = this.f50722e;
        if (supplier != null) {
            kVar = new k(supplier, this.f50729t);
        } else {
            CloseableReference n10 = CloseableReference.n(this.f50721d);
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

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        CloseableReference.z(this.f50721d);
    }

    public int getHeight() {
        V0();
        return this.f50727r;
    }

    public int getWidth() {
        V0();
        return this.f50726q;
    }

    public int l1() {
        V0();
        return this.f50724o;
    }

    public void m(k kVar) {
        this.f50723i = kVar.z();
        this.f50726q = kVar.getWidth();
        this.f50727r = kVar.getHeight();
        this.f50724o = kVar.l1();
        this.f50725p = kVar.X0();
        this.f50728s = kVar.J();
        this.f50729t = kVar.Q();
        this.f50730u = kVar.p();
        this.f50731v = kVar.s();
        this.f50733x = kVar.C0();
    }

    public CloseableReference n() {
        return CloseableReference.n(this.f50721d);
    }

    public BytesRange p() {
        return this.f50730u;
    }

    public void r1(BytesRange bytesRange) {
        this.f50730u = bytesRange;
    }

    public ColorSpace s() {
        V0();
        return this.f50731v;
    }

    public void s1(int i10) {
        this.f50725p = i10;
    }

    public void u1(int i10) {
        this.f50727r = i10;
    }

    public void w1(ga.c cVar) {
        this.f50723i = cVar;
    }

    public String y(int i10) {
        CloseableReference n10 = n();
        if (n10 == null) {
            return "";
        }
        int min = Math.min(Q(), i10);
        byte[] bArr = new byte[min];
        try {
            s8.h hVar = (s8.h) n10.J();
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

    public ga.c z() {
        V0();
        return this.f50723i;
    }

    public void z1(int i10) {
        this.f50724o = i10;
    }

    public k(Supplier supplier) {
        this.f50723i = ga.c.f24098d;
        this.f50724o = -1;
        this.f50725p = 0;
        this.f50726q = -1;
        this.f50727r = -1;
        this.f50728s = 1;
        this.f50729t = -1;
        p8.j.g(supplier);
        this.f50721d = null;
        this.f50722e = supplier;
    }

    public k(Supplier supplier, int i10) {
        this(supplier);
        this.f50729t = i10;
    }
}
