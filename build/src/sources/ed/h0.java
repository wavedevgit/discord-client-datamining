package ed;

import android.util.SparseArray;
import android.util.SparseBooleanArray;
import android.util.SparseIntArray;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ed.i0;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import mc.l0;
import oe.s0;
import oe.w0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h0 implements uc.k {

    /* renamed from: t  reason: collision with root package name */
    public static final uc.p f21323t = new uc.p() { // from class: ed.g0
        @Override // uc.p
        public final uc.k[] b() {
            return h0.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f21324a;

    /* renamed from: b  reason: collision with root package name */
    private final int f21325b;

    /* renamed from: c  reason: collision with root package name */
    private final List f21326c;

    /* renamed from: d  reason: collision with root package name */
    private final oe.h0 f21327d;

    /* renamed from: e  reason: collision with root package name */
    private final SparseIntArray f21328e;

    /* renamed from: f  reason: collision with root package name */
    private final i0.c f21329f;

    /* renamed from: g  reason: collision with root package name */
    private final SparseArray f21330g;

    /* renamed from: h  reason: collision with root package name */
    private final SparseBooleanArray f21331h;

    /* renamed from: i  reason: collision with root package name */
    private final SparseBooleanArray f21332i;

    /* renamed from: j  reason: collision with root package name */
    private final f0 f21333j;

    /* renamed from: k  reason: collision with root package name */
    private e0 f21334k;

    /* renamed from: l  reason: collision with root package name */
    private uc.m f21335l;

    /* renamed from: m  reason: collision with root package name */
    private int f21336m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f21337n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f21338o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f21339p;

    /* renamed from: q  reason: collision with root package name */
    private i0 f21340q;

    /* renamed from: r  reason: collision with root package name */
    private int f21341r;

    /* renamed from: s  reason: collision with root package name */
    private int f21342s;

    public h0() {
        this(0);
    }

    public static /* synthetic */ uc.k[] b() {
        return new uc.k[]{new h0()};
    }

    static /* synthetic */ int k(h0 h0Var) {
        int i10 = h0Var.f21336m;
        h0Var.f21336m = i10 + 1;
        return i10;
    }

    private boolean u(uc.l lVar) {
        byte[] e10 = this.f21327d.e();
        if (9400 - this.f21327d.f() < 188) {
            int a10 = this.f21327d.a();
            if (a10 > 0) {
                System.arraycopy(e10, this.f21327d.f(), e10, 0, a10);
            }
            this.f21327d.S(e10, a10);
        }
        while (this.f21327d.a() < 188) {
            int g10 = this.f21327d.g();
            int read = lVar.read(e10, g10, 9400 - g10);
            if (read == -1) {
                return false;
            }
            this.f21327d.T(g10 + read);
        }
        return true;
    }

    private int v() {
        int f10 = this.f21327d.f();
        int g10 = this.f21327d.g();
        int a10 = j0.a(this.f21327d.e(), f10, g10);
        this.f21327d.U(a10);
        int i10 = a10 + 188;
        if (i10 > g10) {
            int i11 = this.f21341r + (a10 - f10);
            this.f21341r = i11;
            if (this.f21324a == 2 && i11 > 376) {
                throw l0.a("Cannot find sync byte. Most likely not a Transport Stream.", null);
            }
            return i10;
        }
        this.f21341r = 0;
        return i10;
    }

    private void w(long j10) {
        if (!this.f21338o) {
            this.f21338o = true;
            if (this.f21333j.b() != -9223372036854775807L) {
                e0 e0Var = new e0(this.f21333j.c(), this.f21333j.b(), j10, this.f21342s, this.f21325b);
                this.f21334k = e0Var;
                this.f21335l.j(e0Var.b());
                return;
            }
            this.f21335l.j(new z.b(this.f21333j.b()));
        }
    }

    private void x() {
        this.f21331h.clear();
        this.f21330g.clear();
        SparseArray b10 = this.f21329f.b();
        int size = b10.size();
        for (int i10 = 0; i10 < size; i10++) {
            this.f21330g.put(b10.keyAt(i10), (i0) b10.valueAt(i10));
        }
        this.f21330g.put(0, new c0(new a()));
        this.f21340q = null;
    }

    private boolean y(int i10) {
        if (this.f21324a != 2 && !this.f21337n && this.f21332i.get(i10, false)) {
            return false;
        }
        return true;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        boolean z10;
        e0 e0Var;
        boolean z11;
        if (this.f21324a != 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        int size = this.f21326c.size();
        for (int i10 = 0; i10 < size; i10++) {
            s0 s0Var = (s0) this.f21326c.get(i10);
            if (s0Var.e() == -9223372036854775807L) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (!z11) {
                long c10 = s0Var.c();
                if (c10 != -9223372036854775807L && c10 != 0 && c10 != j11) {
                    z11 = true;
                } else {
                    z11 = false;
                }
            }
            if (z11) {
                s0Var.h(j11);
            }
        }
        if (j11 != 0 && (e0Var = this.f21334k) != null) {
            e0Var.h(j11);
        }
        this.f21327d.Q(0);
        this.f21328e.clear();
        for (int i11 = 0; i11 < this.f21330g.size(); i11++) {
            ((i0) this.f21330g.valueAt(i11)).b();
        }
        this.f21341r = 0;
    }

    @Override // uc.k
    public void c(uc.m mVar) {
        this.f21335l = mVar;
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x001e, code lost:
        r1 = r1 + 1;
     */
    @Override // uc.k
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean d(uc.l r7) {
        /*
            r6 = this;
            oe.h0 r0 = r6.f21327d
            byte[] r0 = r0.e()
            r1 = 940(0x3ac, float:1.317E-42)
            r2 = 0
            r7.n(r0, r2, r1)
            r1 = r2
        Ld:
            r3 = 188(0xbc, float:2.63E-43)
            if (r1 >= r3) goto L29
            r3 = r2
        L12:
            r4 = 5
            if (r3 >= r4) goto L24
            int r4 = r3 * 188
            int r4 = r4 + r1
            r4 = r0[r4]
            r5 = 71
            if (r4 == r5) goto L21
            int r1 = r1 + 1
            goto Ld
        L21:
            int r3 = r3 + 1
            goto L12
        L24:
            r7.k(r1)
            r7 = 1
            return r7
        L29:
            return r2
        */
        throw new UnsupportedOperationException("Method not decompiled: ed.h0.d(uc.l):boolean");
    }

    @Override // uc.k
    public int h(uc.l lVar, uc.y yVar) {
        int i10;
        boolean z10;
        i0 i0Var;
        long j10;
        int i11;
        long length = lVar.getLength();
        if (this.f21337n) {
            if (length != -1 && this.f21324a != 2 && !this.f21333j.d()) {
                return this.f21333j.e(lVar, yVar, this.f21342s);
            }
            w(length);
            if (this.f21339p) {
                this.f21339p = false;
                a(0L, 0L);
                if (lVar.getPosition() != 0) {
                    yVar.f51535a = 0L;
                    return 1;
                }
            }
            e0 e0Var = this.f21334k;
            if (e0Var != null && e0Var.d()) {
                return this.f21334k.c(lVar, yVar);
            }
        }
        if (!u(lVar)) {
            return -1;
        }
        int v10 = v();
        int g10 = this.f21327d.g();
        if (v10 > g10) {
            return 0;
        }
        int q10 = this.f21327d.q();
        if ((8388608 & q10) != 0) {
            this.f21327d.U(v10);
            return 0;
        }
        if ((4194304 & q10) != 0) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        int i12 = (2096896 & q10) >> 8;
        if ((q10 & 32) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if ((q10 & 16) != 0) {
            i0Var = (i0) this.f21330g.get(i12);
        } else {
            i0Var = null;
        }
        if (i0Var == null) {
            this.f21327d.U(v10);
            return 0;
        }
        if (this.f21324a != 2) {
            int i13 = q10 & 15;
            j10 = -1;
            int i14 = this.f21328e.get(i12, i13 - 1);
            this.f21328e.put(i12, i13);
            if (i14 == i13) {
                this.f21327d.U(v10);
                return 0;
            } else if (i13 != ((i14 + 1) & 15)) {
                i0Var.b();
            }
        } else {
            j10 = -1;
        }
        if (z10) {
            int H = this.f21327d.H();
            if ((this.f21327d.H() & 64) != 0) {
                i11 = 2;
            } else {
                i11 = 0;
            }
            i10 |= i11;
            this.f21327d.V(H - 1);
        }
        boolean z11 = this.f21337n;
        if (y(i12)) {
            this.f21327d.T(v10);
            i0Var.a(this.f21327d, i10);
            this.f21327d.T(g10);
        }
        if (this.f21324a != 2 && !z11 && this.f21337n && length != j10) {
            this.f21339p = true;
        }
        this.f21327d.U(v10);
        return 0;
    }

    public h0(int i10) {
        this(1, i10, 112800);
    }

    public h0(int i10, int i11, int i12) {
        this(i10, new s0(0L), new j(i11), i12);
    }

    public h0(int i10, s0 s0Var, i0.c cVar) {
        this(i10, s0Var, cVar, 112800);
    }

    public h0(int i10, s0 s0Var, i0.c cVar, int i11) {
        this.f21329f = (i0.c) oe.a.e(cVar);
        this.f21325b = i11;
        this.f21324a = i10;
        if (i10 != 1 && i10 != 2) {
            ArrayList arrayList = new ArrayList();
            this.f21326c = arrayList;
            arrayList.add(s0Var);
        } else {
            this.f21326c = Collections.singletonList(s0Var);
        }
        this.f21327d = new oe.h0(new byte[9400], 0);
        this.f21331h = new SparseBooleanArray();
        this.f21332i = new SparseBooleanArray();
        this.f21330g = new SparseArray();
        this.f21328e = new SparseIntArray();
        this.f21333j = new f0(i11);
        this.f21335l = uc.m.f51506l;
        this.f21342s = -1;
        x();
    }

    @Override // uc.k
    public void release() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements b0 {

        /* renamed from: a  reason: collision with root package name */
        private final oe.g0 f21343a = new oe.g0(new byte[4]);

        public a() {
        }

        @Override // ed.b0
        public void a(oe.h0 h0Var) {
            if (h0Var.H() == 0 && (h0Var.H() & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                h0Var.V(6);
                int a10 = h0Var.a() / 4;
                for (int i10 = 0; i10 < a10; i10++) {
                    h0Var.k(this.f21343a, 4);
                    int h10 = this.f21343a.h(16);
                    this.f21343a.r(3);
                    if (h10 == 0) {
                        this.f21343a.r(13);
                    } else {
                        int h11 = this.f21343a.h(13);
                        if (h0.this.f21330g.get(h11) == null) {
                            h0.this.f21330g.put(h11, new c0(new b(h11)));
                            h0.k(h0.this);
                        }
                    }
                }
                if (h0.this.f21324a != 2) {
                    h0.this.f21330g.remove(0);
                }
            }
        }

        @Override // ed.b0
        public void c(s0 s0Var, uc.m mVar, i0.d dVar) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class b implements b0 {

        /* renamed from: a  reason: collision with root package name */
        private final oe.g0 f21345a = new oe.g0(new byte[5]);

        /* renamed from: b  reason: collision with root package name */
        private final SparseArray f21346b = new SparseArray();

        /* renamed from: c  reason: collision with root package name */
        private final SparseIntArray f21347c = new SparseIntArray();

        /* renamed from: d  reason: collision with root package name */
        private final int f21348d;

        public b(int i10) {
            this.f21348d = i10;
        }

        private i0.b b(oe.h0 h0Var, int i10) {
            int f10 = h0Var.f();
            int i11 = i10 + f10;
            int i12 = -1;
            String str = null;
            ArrayList arrayList = null;
            while (h0Var.f() < i11) {
                int H = h0Var.H();
                int f11 = h0Var.f() + h0Var.H();
                if (f11 > i11) {
                    break;
                }
                if (H == 5) {
                    long J = h0Var.J();
                    if (J != 1094921523) {
                        if (J != 1161904947) {
                            if (J != 1094921524) {
                                if (J == 1212503619) {
                                    i12 = 36;
                                }
                            }
                            i12 = 172;
                        }
                        i12 = 135;
                    }
                    i12 = 129;
                } else {
                    if (H != 106) {
                        if (H != 122) {
                            if (H == 127) {
                                if (h0Var.H() != 21) {
                                }
                                i12 = 172;
                            } else if (H == 123) {
                                i12 = 138;
                            } else if (H == 10) {
                                str = h0Var.E(3).trim();
                            } else if (H == 89) {
                                ArrayList arrayList2 = new ArrayList();
                                while (h0Var.f() < f11) {
                                    String trim = h0Var.E(3).trim();
                                    int H2 = h0Var.H();
                                    byte[] bArr = new byte[4];
                                    h0Var.l(bArr, 0, 4);
                                    arrayList2.add(new i0.a(trim, H2, bArr));
                                }
                                arrayList = arrayList2;
                                i12 = 89;
                            } else if (H == 111) {
                                i12 = 257;
                            }
                        }
                        i12 = 135;
                    }
                    i12 = 129;
                }
                h0Var.V(f11 - h0Var.f());
            }
            h0Var.U(i11);
            return new i0.b(i12, str, arrayList, Arrays.copyOfRange(h0Var.e(), f10, i11));
        }

        @Override // ed.b0
        public void a(oe.h0 h0Var) {
            s0 s0Var;
            int i10;
            i0 a10;
            if (h0Var.H() == 2) {
                if (h0.this.f21324a != 1 && h0.this.f21324a != 2 && h0.this.f21336m != 1) {
                    s0Var = new s0(((s0) h0.this.f21326c.get(0)).c());
                    h0.this.f21326c.add(s0Var);
                } else {
                    s0Var = (s0) h0.this.f21326c.get(0);
                }
                if ((h0Var.H() & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    h0Var.V(1);
                    int N = h0Var.N();
                    int i11 = 3;
                    h0Var.V(3);
                    h0Var.k(this.f21345a, 2);
                    this.f21345a.r(3);
                    int i12 = 13;
                    h0.this.f21342s = this.f21345a.h(13);
                    h0Var.k(this.f21345a, 2);
                    int i13 = 4;
                    this.f21345a.r(4);
                    h0Var.V(this.f21345a.h(12));
                    if (h0.this.f21324a == 2 && h0.this.f21340q == null) {
                        i0.b bVar = new i0.b(21, null, null, w0.f40716f);
                        h0 h0Var2 = h0.this;
                        h0Var2.f21340q = h0Var2.f21329f.a(21, bVar);
                        if (h0.this.f21340q != null) {
                            h0.this.f21340q.c(s0Var, h0.this.f21335l, new i0.d(N, 21, 8192));
                        }
                    }
                    this.f21346b.clear();
                    this.f21347c.clear();
                    int a11 = h0Var.a();
                    while (a11 > 0) {
                        h0Var.k(this.f21345a, 5);
                        int h10 = this.f21345a.h(8);
                        this.f21345a.r(i11);
                        int h11 = this.f21345a.h(i12);
                        this.f21345a.r(i13);
                        int h12 = this.f21345a.h(12);
                        i0.b b10 = b(h0Var, h12);
                        if (h10 == 6 || h10 == 5) {
                            h10 = b10.f21375a;
                        }
                        a11 -= h12 + 5;
                        if (h0.this.f21324a == 2) {
                            i10 = h10;
                        } else {
                            i10 = h11;
                        }
                        if (!h0.this.f21331h.get(i10)) {
                            if (h0.this.f21324a == 2 && h10 == 21) {
                                a10 = h0.this.f21340q;
                            } else {
                                a10 = h0.this.f21329f.a(h10, b10);
                            }
                            if (h0.this.f21324a != 2 || h11 < this.f21347c.get(i10, 8192)) {
                                this.f21347c.put(i10, h11);
                                this.f21346b.put(i10, a10);
                            }
                        }
                        i11 = 3;
                        i13 = 4;
                        i12 = 13;
                    }
                    int size = this.f21347c.size();
                    for (int i14 = 0; i14 < size; i14++) {
                        int keyAt = this.f21347c.keyAt(i14);
                        int valueAt = this.f21347c.valueAt(i14);
                        h0.this.f21331h.put(keyAt, true);
                        h0.this.f21332i.put(valueAt, true);
                        i0 i0Var = (i0) this.f21346b.valueAt(i14);
                        if (i0Var != null) {
                            if (i0Var != h0.this.f21340q) {
                                i0Var.c(s0Var, h0.this.f21335l, new i0.d(N, keyAt, 8192));
                            }
                            h0.this.f21330g.put(valueAt, i0Var);
                        }
                    }
                    if (h0.this.f21324a == 2) {
                        if (!h0.this.f21337n) {
                            h0.this.f21335l.q();
                            h0.this.f21336m = 0;
                            h0.this.f21337n = true;
                            return;
                        }
                        return;
                    }
                    h0.this.f21330g.remove(this.f21348d);
                    h0 h0Var3 = h0.this;
                    h0Var3.f21336m = h0Var3.f21324a == 1 ? 0 : h0.this.f21336m - 1;
                    if (h0.this.f21336m == 0) {
                        h0.this.f21335l.q();
                        h0.this.f21337n = true;
                    }
                }
            }
        }

        @Override // ed.b0
        public void c(s0 s0Var, uc.m mVar, i0.d dVar) {
        }
    }
}
