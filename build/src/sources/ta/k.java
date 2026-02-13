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
    private static boolean f49221y;

    /* renamed from: d  reason: collision with root package name */
    private final CloseableReference f49222d;

    /* renamed from: e  reason: collision with root package name */
    private final Supplier f49223e;

    /* renamed from: i  reason: collision with root package name */
    private ga.c f49224i;

    /* renamed from: o  reason: collision with root package name */
    private int f49225o;

    /* renamed from: p  reason: collision with root package name */
    private int f49226p;

    /* renamed from: q  reason: collision with root package name */
    private int f49227q;

    /* renamed from: r  reason: collision with root package name */
    private int f49228r;

    /* renamed from: s  reason: collision with root package name */
    private int f49229s;

    /* renamed from: t  reason: collision with root package name */
    private int f49230t;

    /* renamed from: u  reason: collision with root package name */
    private BytesRange f49231u;

    /* renamed from: v  reason: collision with root package name */
    private ColorSpace f49232v;

    /* renamed from: w  reason: collision with root package name */
    private String f49233w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f49234x;

    public k(CloseableReference closeableReference) {
        this.f49224i = ga.c.f25399d;
        this.f49225o = -1;
        this.f49226p = 0;
        this.f49227q = -1;
        this.f49228r = -1;
        this.f49229s = 1;
        this.f49230t = -1;
        p8.j.b(Boolean.valueOf(CloseableReference.C0(closeableReference)));
        this.f49222d = closeableReference.clone();
        this.f49223e = null;
    }

    private void C0() {
        Pair b10;
        ga.c d10 = ga.e.d(C());
        this.f49224i = d10;
        if (ga.b.b(d10)) {
            b10 = S0();
        } else {
            b10 = O0().b();
        }
        if (d10 == ga.b.f25383b && this.f49225o == -1) {
            if (b10 != null) {
                int b11 = db.g.b(C());
                this.f49226p = b11;
                this.f49225o = db.g.a(b11);
            }
        } else if (d10 == ga.b.f25393l && this.f49225o == -1) {
            int a10 = db.e.a(C());
            this.f49226p = a10;
            this.f49225o = db.g.a(a10);
        } else if (this.f49225o == -1) {
            this.f49225o = 0;
        }
    }

    public static boolean F0(k kVar) {
        if (kVar.f49225o >= 0 && kVar.f49227q >= 0 && kVar.f49228r >= 0) {
            return true;
        }
        return false;
    }

    public static boolean H0(k kVar) {
        if (kVar != null && kVar.G0()) {
            return true;
        }
        return false;
    }

    private void N0() {
        if (this.f49227q >= 0 && this.f49228r >= 0) {
            return;
        }
        L0();
    }

    private db.f O0() {
        InputStream inputStream;
        try {
            inputStream = C();
        } catch (Throwable th2) {
            th = th2;
            inputStream = null;
        }
        try {
            db.f e10 = db.d.e(inputStream);
            this.f49232v = e10.a();
            Pair b10 = e10.b();
            if (b10 != null) {
                this.f49227q = ((Integer) b10.a()).intValue();
                this.f49228r = ((Integer) b10.b()).intValue();
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

    private Pair S0() {
        InputStream C = C();
        if (C == null) {
            return null;
        }
        Pair f10 = db.j.f(C);
        if (f10 != null) {
            this.f49227q = ((Integer) f10.a()).intValue();
            this.f49228r = ((Integer) f10.b()).intValue();
        }
        return f10;
    }

    public static k h(k kVar) {
        if (kVar != null) {
            return kVar.a();
        }
        return null;
    }

    public static void i(k kVar) {
        if (kVar != null) {
            kVar.close();
        }
    }

    public InputStream C() {
        Supplier supplier = this.f49223e;
        if (supplier != null) {
            return (InputStream) supplier.get();
        }
        CloseableReference n10 = CloseableReference.n(this.f49222d);
        if (n10 != null) {
            try {
                return new s8.j((s8.h) n10.J());
            } finally {
                CloseableReference.z(n10);
            }
        }
        return null;
    }

    public boolean E0(int i10) {
        ga.c cVar = this.f49224i;
        if ((cVar != ga.b.f25383b && cVar != ga.b.f25394m) || this.f49223e != null) {
            return true;
        }
        p8.j.g(this.f49222d);
        s8.h hVar = (s8.h) this.f49222d.J();
        if (i10 >= 2 && hVar.B(i10 - 2) == -1 && hVar.B(i10 - 1) == -39) {
            return true;
        }
        return false;
    }

    public synchronized boolean G0() {
        boolean z10;
        if (!CloseableReference.C0(this.f49222d)) {
            if (this.f49223e == null) {
                z10 = false;
            }
        }
        z10 = true;
        return z10;
    }

    public InputStream I() {
        return (InputStream) p8.j.g(C());
    }

    public int J() {
        return this.f49229s;
    }

    public void L0() {
        if (!f49221y) {
            C0();
        } else if (this.f49234x) {
        } else {
            C0();
            this.f49234x = true;
        }
    }

    public int Q() {
        CloseableReference closeableReference = this.f49222d;
        if (closeableReference != null && closeableReference.J() != null) {
            return ((s8.h) this.f49222d.J()).size();
        }
        return this.f49230t;
    }

    public void V0(BytesRange bytesRange) {
        this.f49231u = bytesRange;
    }

    public String Z() {
        return this.f49233w;
    }

    public void Z0(int i10) {
        this.f49226p = i10;
    }

    public k a() {
        k kVar;
        Supplier supplier = this.f49223e;
        if (supplier != null) {
            kVar = new k(supplier, this.f49230t);
        } else {
            CloseableReference n10 = CloseableReference.n(this.f49222d);
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

    public void a1(int i10) {
        this.f49228r = i10;
    }

    public void b1(ga.c cVar) {
        this.f49224i = cVar;
    }

    public int c1() {
        N0();
        return this.f49226p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        CloseableReference.z(this.f49222d);
    }

    public void f1(int i10) {
        this.f49225o = i10;
    }

    public int getHeight() {
        N0();
        return this.f49228r;
    }

    public int getWidth() {
        N0();
        return this.f49227q;
    }

    public void m(k kVar) {
        this.f49224i = kVar.z();
        this.f49227q = kVar.getWidth();
        this.f49228r = kVar.getHeight();
        this.f49225o = kVar.q1();
        this.f49226p = kVar.c1();
        this.f49229s = kVar.J();
        this.f49230t = kVar.Q();
        this.f49231u = kVar.p();
        this.f49232v = kVar.s();
        this.f49234x = kVar.z0();
    }

    public CloseableReference n() {
        return CloseableReference.n(this.f49222d);
    }

    public BytesRange p() {
        return this.f49231u;
    }

    public int q1() {
        N0();
        return this.f49225o;
    }

    public ColorSpace s() {
        N0();
        return this.f49232v;
    }

    public void w1(int i10) {
        this.f49229s = i10;
    }

    public void x1(String str) {
        this.f49233w = str;
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
        N0();
        return this.f49224i;
    }

    protected boolean z0() {
        return this.f49234x;
    }

    public void z1(int i10) {
        this.f49227q = i10;
    }

    public k(Supplier supplier) {
        this.f49224i = ga.c.f25399d;
        this.f49225o = -1;
        this.f49226p = 0;
        this.f49227q = -1;
        this.f49228r = -1;
        this.f49229s = 1;
        this.f49230t = -1;
        p8.j.g(supplier);
        this.f49222d = null;
        this.f49223e = supplier;
    }

    public k(Supplier supplier, int i10) {
        this(supplier);
        this.f49230t = i10;
    }
}
