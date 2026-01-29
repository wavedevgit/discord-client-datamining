package dd;

import android.util.SparseArray;
import android.util.SparseBooleanArray;
import android.util.SparseIntArray;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import dd.i0;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import lc.l0;
import ne.s0;
import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h0 implements tc.k {

    /* renamed from: t  reason: collision with root package name */
    public static final tc.p f21828t = new tc.p() { // from class: dd.g0
        @Override // tc.p
        public final tc.k[] b() {
            return h0.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f21829a;

    /* renamed from: b  reason: collision with root package name */
    private final int f21830b;

    /* renamed from: c  reason: collision with root package name */
    private final List f21831c;

    /* renamed from: d  reason: collision with root package name */
    private final ne.h0 f21832d;

    /* renamed from: e  reason: collision with root package name */
    private final SparseIntArray f21833e;

    /* renamed from: f  reason: collision with root package name */
    private final i0.c f21834f;

    /* renamed from: g  reason: collision with root package name */
    private final SparseArray f21835g;

    /* renamed from: h  reason: collision with root package name */
    private final SparseBooleanArray f21836h;

    /* renamed from: i  reason: collision with root package name */
    private final SparseBooleanArray f21837i;

    /* renamed from: j  reason: collision with root package name */
    private final f0 f21838j;

    /* renamed from: k  reason: collision with root package name */
    private e0 f21839k;

    /* renamed from: l  reason: collision with root package name */
    private tc.m f21840l;

    /* renamed from: m  reason: collision with root package name */
    private int f21841m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f21842n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f21843o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f21844p;

    /* renamed from: q  reason: collision with root package name */
    private i0 f21845q;

    /* renamed from: r  reason: collision with root package name */
    private int f21846r;

    /* renamed from: s  reason: collision with root package name */
    private int f21847s;

    public h0() {
        this(0);
    }

    public static /* synthetic */ tc.k[] b() {
        return new tc.k[]{new h0()};
    }

    static /* synthetic */ int k(h0 h0Var) {
        int i10 = h0Var.f21841m;
        h0Var.f21841m = i10 + 1;
        return i10;
    }

    private boolean u(tc.l lVar) {
        byte[] e10 = this.f21832d.e();
        if (9400 - this.f21832d.f() < 188) {
            int a10 = this.f21832d.a();
            if (a10 > 0) {
                System.arraycopy(e10, this.f21832d.f(), e10, 0, a10);
            }
            this.f21832d.S(e10, a10);
        }
        while (this.f21832d.a() < 188) {
            int g10 = this.f21832d.g();
            int read = lVar.read(e10, g10, 9400 - g10);
            if (read == -1) {
                return false;
            }
            this.f21832d.T(g10 + read);
        }
        return true;
    }

    private int v() {
        int f10 = this.f21832d.f();
        int g10 = this.f21832d.g();
        int a10 = j0.a(this.f21832d.e(), f10, g10);
        this.f21832d.U(a10);
        int i10 = a10 + 188;
        if (i10 > g10) {
            int i11 = this.f21846r + (a10 - f10);
            this.f21846r = i11;
            if (this.f21829a == 2 && i11 > 376) {
                throw l0.a("Cannot find sync byte. Most likely not a Transport Stream.", null);
            }
            return i10;
        }
        this.f21846r = 0;
        return i10;
    }

    private void w(long j10) {
        if (!this.f21843o) {
            this.f21843o = true;
            if (this.f21838j.b() != -9223372036854775807L) {
                e0 e0Var = new e0(this.f21838j.c(), this.f21838j.b(), j10, this.f21847s, this.f21830b);
                this.f21839k = e0Var;
                this.f21840l.q(e0Var.b());
                return;
            }
            this.f21840l.q(new z.b(this.f21838j.b()));
        }
    }

    private void x() {
        this.f21836h.clear();
        this.f21835g.clear();
        SparseArray a10 = this.f21834f.a();
        int size = a10.size();
        for (int i10 = 0; i10 < size; i10++) {
            this.f21835g.put(a10.keyAt(i10), (i0) a10.valueAt(i10));
        }
        this.f21835g.put(0, new c0(new a()));
        this.f21845q = null;
    }

    private boolean y(int i10) {
        if (this.f21829a != 2 && !this.f21842n && this.f21837i.get(i10, false)) {
            return false;
        }
        return true;
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        boolean z10;
        e0 e0Var;
        boolean z11;
        if (this.f21829a != 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        int size = this.f21831c.size();
        for (int i10 = 0; i10 < size; i10++) {
            s0 s0Var = (s0) this.f21831c.get(i10);
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
        if (j11 != 0 && (e0Var = this.f21839k) != null) {
            e0Var.h(j11);
        }
        this.f21832d.Q(0);
        this.f21833e.clear();
        for (int i11 = 0; i11 < this.f21835g.size(); i11++) {
            ((i0) this.f21835g.valueAt(i11)).c();
        }
        this.f21846r = 0;
    }

    @Override // tc.k
    public void c(tc.m mVar) {
        this.f21840l = mVar;
    }

    @Override // tc.k
    public int d(tc.l lVar, tc.y yVar) {
        int i10;
        boolean z10;
        i0 i0Var;
        long j10;
        int i11;
        long length = lVar.getLength();
        if (this.f21842n) {
            if (length != -1 && this.f21829a != 2 && !this.f21838j.d()) {
                return this.f21838j.e(lVar, yVar, this.f21847s);
            }
            w(length);
            if (this.f21844p) {
                this.f21844p = false;
                a(0L, 0L);
                if (lVar.getPosition() != 0) {
                    yVar.f49502a = 0L;
                    return 1;
                }
            }
            e0 e0Var = this.f21839k;
            if (e0Var != null && e0Var.d()) {
                return this.f21839k.c(lVar, yVar);
            }
        }
        if (!u(lVar)) {
            return -1;
        }
        int v10 = v();
        int g10 = this.f21832d.g();
        if (v10 > g10) {
            return 0;
        }
        int q10 = this.f21832d.q();
        if ((8388608 & q10) != 0) {
            this.f21832d.U(v10);
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
            i0Var = (i0) this.f21835g.get(i12);
        } else {
            i0Var = null;
        }
        if (i0Var == null) {
            this.f21832d.U(v10);
            return 0;
        }
        if (this.f21829a != 2) {
            int i13 = q10 & 15;
            j10 = -1;
            int i14 = this.f21833e.get(i12, i13 - 1);
            this.f21833e.put(i12, i13);
            if (i14 == i13) {
                this.f21832d.U(v10);
                return 0;
            } else if (i13 != ((i14 + 1) & 15)) {
                i0Var.c();
            }
        } else {
            j10 = -1;
        }
        if (z10) {
            int H = this.f21832d.H();
            if ((this.f21832d.H() & 64) != 0) {
                i11 = 2;
            } else {
                i11 = 0;
            }
            i10 |= i11;
            this.f21832d.V(H - 1);
        }
        boolean z11 = this.f21842n;
        if (y(i12)) {
            this.f21832d.T(v10);
            i0Var.b(this.f21832d, i10);
            this.f21832d.T(g10);
        }
        if (this.f21829a != 2 && !z11 && this.f21842n && length != j10) {
            this.f21844p = true;
        }
        this.f21832d.U(v10);
        return 0;
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x001e, code lost:
        r1 = r1 + 1;
     */
    @Override // tc.k
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean f(tc.l r7) {
        /*
            r6 = this;
            ne.h0 r0 = r6.f21832d
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
        throw new UnsupportedOperationException("Method not decompiled: dd.h0.f(tc.l):boolean");
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
        this.f21834f = (i0.c) ne.a.e(cVar);
        this.f21830b = i11;
        this.f21829a = i10;
        if (i10 != 1 && i10 != 2) {
            ArrayList arrayList = new ArrayList();
            this.f21831c = arrayList;
            arrayList.add(s0Var);
        } else {
            this.f21831c = Collections.singletonList(s0Var);
        }
        this.f21832d = new ne.h0(new byte[9400], 0);
        this.f21836h = new SparseBooleanArray();
        this.f21837i = new SparseBooleanArray();
        this.f21835g = new SparseArray();
        this.f21833e = new SparseIntArray();
        this.f21838j = new f0(i11);
        this.f21840l = tc.m.f49473l;
        this.f21847s = -1;
        x();
    }

    @Override // tc.k
    public void release() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements b0 {

        /* renamed from: a  reason: collision with root package name */
        private final ne.g0 f21848a = new ne.g0(new byte[4]);

        public a() {
        }

        @Override // dd.b0
        public void b(ne.h0 h0Var) {
            if (h0Var.H() == 0 && (h0Var.H() & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                h0Var.V(6);
                int a10 = h0Var.a() / 4;
                for (int i10 = 0; i10 < a10; i10++) {
                    h0Var.k(this.f21848a, 4);
                    int h10 = this.f21848a.h(16);
                    this.f21848a.r(3);
                    if (h10 == 0) {
                        this.f21848a.r(13);
                    } else {
                        int h11 = this.f21848a.h(13);
                        if (h0.this.f21835g.get(h11) == null) {
                            h0.this.f21835g.put(h11, new c0(new b(h11)));
                            h0.k(h0.this);
                        }
                    }
                }
                if (h0.this.f21829a != 2) {
                    h0.this.f21835g.remove(0);
                }
            }
        }

        @Override // dd.b0
        public void a(s0 s0Var, tc.m mVar, i0.d dVar) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class b implements b0 {

        /* renamed from: a  reason: collision with root package name */
        private final ne.g0 f21850a = new ne.g0(new byte[5]);

        /* renamed from: b  reason: collision with root package name */
        private final SparseArray f21851b = new SparseArray();

        /* renamed from: c  reason: collision with root package name */
        private final SparseIntArray f21852c = new SparseIntArray();

        /* renamed from: d  reason: collision with root package name */
        private final int f21853d;

        public b(int i10) {
            this.f21853d = i10;
        }

        private i0.b c(ne.h0 h0Var, int i10) {
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

        @Override // dd.b0
        public void b(ne.h0 h0Var) {
            s0 s0Var;
            int i10;
            i0 b10;
            if (h0Var.H() == 2) {
                if (h0.this.f21829a != 1 && h0.this.f21829a != 2 && h0.this.f21841m != 1) {
                    s0Var = new s0(((s0) h0.this.f21831c.get(0)).c());
                    h0.this.f21831c.add(s0Var);
                } else {
                    s0Var = (s0) h0.this.f21831c.get(0);
                }
                if ((h0Var.H() & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    h0Var.V(1);
                    int N = h0Var.N();
                    int i11 = 3;
                    h0Var.V(3);
                    h0Var.k(this.f21850a, 2);
                    this.f21850a.r(3);
                    int i12 = 13;
                    h0.this.f21847s = this.f21850a.h(13);
                    h0Var.k(this.f21850a, 2);
                    int i13 = 4;
                    this.f21850a.r(4);
                    h0Var.V(this.f21850a.h(12));
                    if (h0.this.f21829a == 2 && h0.this.f21845q == null) {
                        i0.b bVar = new i0.b(21, null, null, w0.f40284f);
                        h0 h0Var2 = h0.this;
                        h0Var2.f21845q = h0Var2.f21834f.b(21, bVar);
                        if (h0.this.f21845q != null) {
                            h0.this.f21845q.a(s0Var, h0.this.f21840l, new i0.d(N, 21, 8192));
                        }
                    }
                    this.f21851b.clear();
                    this.f21852c.clear();
                    int a10 = h0Var.a();
                    while (a10 > 0) {
                        h0Var.k(this.f21850a, 5);
                        int h10 = this.f21850a.h(8);
                        this.f21850a.r(i11);
                        int h11 = this.f21850a.h(i12);
                        this.f21850a.r(i13);
                        int h12 = this.f21850a.h(12);
                        i0.b c10 = c(h0Var, h12);
                        if (h10 == 6 || h10 == 5) {
                            h10 = c10.f21880a;
                        }
                        a10 -= h12 + 5;
                        if (h0.this.f21829a == 2) {
                            i10 = h10;
                        } else {
                            i10 = h11;
                        }
                        if (!h0.this.f21836h.get(i10)) {
                            if (h0.this.f21829a == 2 && h10 == 21) {
                                b10 = h0.this.f21845q;
                            } else {
                                b10 = h0.this.f21834f.b(h10, c10);
                            }
                            if (h0.this.f21829a != 2 || h11 < this.f21852c.get(i10, 8192)) {
                                this.f21852c.put(i10, h11);
                                this.f21851b.put(i10, b10);
                            }
                        }
                        i11 = 3;
                        i13 = 4;
                        i12 = 13;
                    }
                    int size = this.f21852c.size();
                    for (int i14 = 0; i14 < size; i14++) {
                        int keyAt = this.f21852c.keyAt(i14);
                        int valueAt = this.f21852c.valueAt(i14);
                        h0.this.f21836h.put(keyAt, true);
                        h0.this.f21837i.put(valueAt, true);
                        i0 i0Var = (i0) this.f21851b.valueAt(i14);
                        if (i0Var != null) {
                            if (i0Var != h0.this.f21845q) {
                                i0Var.a(s0Var, h0.this.f21840l, new i0.d(N, keyAt, 8192));
                            }
                            h0.this.f21835g.put(valueAt, i0Var);
                        }
                    }
                    if (h0.this.f21829a == 2) {
                        if (!h0.this.f21842n) {
                            h0.this.f21840l.s();
                            h0.this.f21841m = 0;
                            h0.this.f21842n = true;
                            return;
                        }
                        return;
                    }
                    h0.this.f21835g.remove(this.f21853d);
                    h0 h0Var3 = h0.this;
                    h0Var3.f21841m = h0Var3.f21829a == 1 ? 0 : h0.this.f21841m - 1;
                    if (h0.this.f21841m == 0) {
                        h0.this.f21840l.s();
                        h0.this.f21842n = true;
                    }
                }
            }
        }

        @Override // dd.b0
        public void a(s0 s0Var, tc.m mVar, i0.d dVar) {
        }
    }
}
