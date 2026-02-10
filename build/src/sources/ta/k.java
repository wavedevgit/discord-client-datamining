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
    private static boolean f48652y;

    /* renamed from: d  reason: collision with root package name */
    private final CloseableReference f48653d;

    /* renamed from: e  reason: collision with root package name */
    private final Supplier f48654e;

    /* renamed from: i  reason: collision with root package name */
    private ga.c f48655i;

    /* renamed from: o  reason: collision with root package name */
    private int f48656o;

    /* renamed from: p  reason: collision with root package name */
    private int f48657p;

    /* renamed from: q  reason: collision with root package name */
    private int f48658q;

    /* renamed from: r  reason: collision with root package name */
    private int f48659r;

    /* renamed from: s  reason: collision with root package name */
    private int f48660s;

    /* renamed from: t  reason: collision with root package name */
    private int f48661t;

    /* renamed from: u  reason: collision with root package name */
    private BytesRange f48662u;

    /* renamed from: v  reason: collision with root package name */
    private ColorSpace f48663v;

    /* renamed from: w  reason: collision with root package name */
    private String f48664w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f48665x;

    public k(CloseableReference closeableReference) {
        this.f48655i = ga.c.f25398d;
        this.f48656o = -1;
        this.f48657p = 0;
        this.f48658q = -1;
        this.f48659r = -1;
        this.f48660s = 1;
        this.f48661t = -1;
        p8.j.b(Boolean.valueOf(CloseableReference.C0(closeableReference)));
        this.f48653d = closeableReference.clone();
        this.f48654e = null;
    }

    private void C0() {
        Pair b10;
        ga.c d10 = ga.e.d(C());
        this.f48655i = d10;
        if (ga.b.b(d10)) {
            b10 = S0();
        } else {
            b10 = O0().b();
        }
        if (d10 == ga.b.f25382b && this.f48656o == -1) {
            if (b10 != null) {
                int b11 = db.g.b(C());
                this.f48657p = b11;
                this.f48656o = db.g.a(b11);
            }
        } else if (d10 == ga.b.f25392l && this.f48656o == -1) {
            int a10 = db.e.a(C());
            this.f48657p = a10;
            this.f48656o = db.g.a(a10);
        } else if (this.f48656o == -1) {
            this.f48656o = 0;
        }
    }

    public static boolean F0(k kVar) {
        if (kVar.f48656o >= 0 && kVar.f48658q >= 0 && kVar.f48659r >= 0) {
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
        if (this.f48658q >= 0 && this.f48659r >= 0) {
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
            this.f48663v = e10.a();
            Pair b10 = e10.b();
            if (b10 != null) {
                this.f48658q = ((Integer) b10.a()).intValue();
                this.f48659r = ((Integer) b10.b()).intValue();
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
            this.f48658q = ((Integer) f10.a()).intValue();
            this.f48659r = ((Integer) f10.b()).intValue();
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
        Supplier supplier = this.f48654e;
        if (supplier != null) {
            return (InputStream) supplier.get();
        }
        CloseableReference n10 = CloseableReference.n(this.f48653d);
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
        ga.c cVar = this.f48655i;
        if ((cVar != ga.b.f25382b && cVar != ga.b.f25393m) || this.f48654e != null) {
            return true;
        }
        p8.j.g(this.f48653d);
        s8.h hVar = (s8.h) this.f48653d.J();
        if (i10 >= 2 && hVar.B(i10 - 2) == -1 && hVar.B(i10 - 1) == -39) {
            return true;
        }
        return false;
    }

    public synchronized boolean G0() {
        boolean z10;
        if (!CloseableReference.C0(this.f48653d)) {
            if (this.f48654e == null) {
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
        return this.f48660s;
    }

    public void L0() {
        if (!f48652y) {
            C0();
        } else if (this.f48665x) {
        } else {
            C0();
            this.f48665x = true;
        }
    }

    public int Q() {
        CloseableReference closeableReference = this.f48653d;
        if (closeableReference != null && closeableReference.J() != null) {
            return ((s8.h) this.f48653d.J()).size();
        }
        return this.f48661t;
    }

    public void V0(BytesRange bytesRange) {
        this.f48662u = bytesRange;
    }

    public String Z() {
        return this.f48664w;
    }

    public void Z0(int i10) {
        this.f48657p = i10;
    }

    public k a() {
        k kVar;
        Supplier supplier = this.f48654e;
        if (supplier != null) {
            kVar = new k(supplier, this.f48661t);
        } else {
            CloseableReference n10 = CloseableReference.n(this.f48653d);
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
        this.f48659r = i10;
    }

    public void b1(ga.c cVar) {
        this.f48655i = cVar;
    }

    public int c1() {
        N0();
        return this.f48657p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        CloseableReference.z(this.f48653d);
    }

    public void f1(int i10) {
        this.f48656o = i10;
    }

    public int getHeight() {
        N0();
        return this.f48659r;
    }

    public int getWidth() {
        N0();
        return this.f48658q;
    }

    public void m(k kVar) {
        this.f48655i = kVar.z();
        this.f48658q = kVar.getWidth();
        this.f48659r = kVar.getHeight();
        this.f48656o = kVar.q1();
        this.f48657p = kVar.c1();
        this.f48660s = kVar.J();
        this.f48661t = kVar.Q();
        this.f48662u = kVar.p();
        this.f48663v = kVar.s();
        this.f48665x = kVar.z0();
    }

    public CloseableReference n() {
        return CloseableReference.n(this.f48653d);
    }

    public BytesRange p() {
        return this.f48662u;
    }

    public int q1() {
        N0();
        return this.f48656o;
    }

    public ColorSpace s() {
        N0();
        return this.f48663v;
    }

    public void w1(int i10) {
        this.f48660s = i10;
    }

    public void x1(String str) {
        this.f48664w = str;
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
        return this.f48655i;
    }

    protected boolean z0() {
        return this.f48665x;
    }

    public void z1(int i10) {
        this.f48658q = i10;
    }

    public k(Supplier supplier) {
        this.f48655i = ga.c.f25398d;
        this.f48656o = -1;
        this.f48657p = 0;
        this.f48658q = -1;
        this.f48659r = -1;
        this.f48660s = 1;
        this.f48661t = -1;
        p8.j.g(supplier);
        this.f48653d = null;
        this.f48654e = supplier;
    }

    public k(Supplier supplier, int i10) {
        this(supplier);
        this.f48661t = i10;
    }
}
