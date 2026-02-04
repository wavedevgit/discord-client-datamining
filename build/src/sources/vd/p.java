package vd;

import android.net.Uri;
import android.os.Handler;
import android.util.SparseIntArray;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import com.google.android.exoplayer2.upstream.g;
import com.google.android.exoplayer2.upstream.h;
import com.google.android.exoplayer2.upstream.i;
import java.io.EOFException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import ji.s;
import lc.t0;
import lc.x;
import ne.c0;
import ne.h0;
import qd.l0;
import qd.m0;
import qd.n0;
import qd.u0;
import qd.w0;
import qd.y;
import rc.u;
import rc.v;
import tc.b0;
import tc.z;
import vd.f;
import vd.p;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements i.b, i.f, n0, tc.m, l0.d {

    /* renamed from: j0  reason: collision with root package name */
    private static final Set f51463j0 = Collections.unmodifiableSet(new HashSet(Arrays.asList(1, 2, 5)));
    private final Runnable A;
    private final Runnable B;
    private final Handler C;
    private final ArrayList D;
    private final Map E;
    private sd.f F;
    private d[] G;
    private Set I;
    private SparseIntArray J;
    private b0 K;
    private int L;
    private int M;
    private boolean N;
    private boolean O;
    private int P;
    private Format Q;
    private Format R;
    private boolean S;
    private w0 T;
    private Set U;
    private int[] V;
    private int W;
    private boolean X;
    private boolean[] Y;
    private boolean[] Z;

    /* renamed from: a0  reason: collision with root package name */
    private long f51464a0;

    /* renamed from: b0  reason: collision with root package name */
    private long f51465b0;

    /* renamed from: c0  reason: collision with root package name */
    private boolean f51466c0;

    /* renamed from: d  reason: collision with root package name */
    private final String f51467d;

    /* renamed from: d0  reason: collision with root package name */
    private boolean f51468d0;

    /* renamed from: e  reason: collision with root package name */
    private final int f51469e;

    /* renamed from: e0  reason: collision with root package name */
    private boolean f51470e0;

    /* renamed from: f0  reason: collision with root package name */
    private boolean f51471f0;

    /* renamed from: g0  reason: collision with root package name */
    private long f51472g0;

    /* renamed from: h0  reason: collision with root package name */
    private rc.m f51473h0;

    /* renamed from: i  reason: collision with root package name */
    private final b f51474i;

    /* renamed from: i0  reason: collision with root package name */
    private i f51475i0;

    /* renamed from: o  reason: collision with root package name */
    private final f f51476o;

    /* renamed from: p  reason: collision with root package name */
    private final le.b f51477p;

    /* renamed from: q  reason: collision with root package name */
    private final Format f51478q;

    /* renamed from: r  reason: collision with root package name */
    private final v f51479r;

    /* renamed from: s  reason: collision with root package name */
    private final u.a f51480s;

    /* renamed from: t  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f51481t;

    /* renamed from: v  reason: collision with root package name */
    private final y.a f51483v;

    /* renamed from: w  reason: collision with root package name */
    private final int f51484w;

    /* renamed from: y  reason: collision with root package name */
    private final ArrayList f51486y;

    /* renamed from: z  reason: collision with root package name */
    private final List f51487z;

    /* renamed from: u  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f51482u = new com.google.android.exoplayer2.upstream.i("Loader:HlsSampleStreamWrapper");

    /* renamed from: x  reason: collision with root package name */
    private final f.b f51485x = new f.b();
    private int[] H = new int[0];

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b extends n0.a {
        void c();

        void n(Uri uri);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class c implements b0 {

        /* renamed from: g  reason: collision with root package name */
        private static final Format f51488g = new Format.b().g0("application/id3").G();

        /* renamed from: h  reason: collision with root package name */
        private static final Format f51489h = new Format.b().g0("application/x-emsg").G();

        /* renamed from: a  reason: collision with root package name */
        private final id.b f51490a = new id.b();

        /* renamed from: b  reason: collision with root package name */
        private final b0 f51491b;

        /* renamed from: c  reason: collision with root package name */
        private final Format f51492c;

        /* renamed from: d  reason: collision with root package name */
        private Format f51493d;

        /* renamed from: e  reason: collision with root package name */
        private byte[] f51494e;

        /* renamed from: f  reason: collision with root package name */
        private int f51495f;

        public c(b0 b0Var, int i10) {
            this.f51491b = b0Var;
            if (i10 != 1) {
                if (i10 == 3) {
                    this.f51492c = f51489h;
                } else {
                    throw new IllegalArgumentException("Unknown metadataType: " + i10);
                }
            } else {
                this.f51492c = f51488g;
            }
            this.f51494e = new byte[0];
            this.f51495f = 0;
        }

        private boolean g(id.a aVar) {
            Format F = aVar.F();
            if (F != null && ne.w0.c(this.f51492c.f11303w, F.f11303w)) {
                return true;
            }
            return false;
        }

        private void h(int i10) {
            byte[] bArr = this.f51494e;
            if (bArr.length < i10) {
                this.f51494e = Arrays.copyOf(bArr, i10 + (i10 / 2));
            }
        }

        private h0 i(int i10, int i11) {
            int i12 = this.f51495f - i11;
            h0 h0Var = new h0(Arrays.copyOfRange(this.f51494e, i12 - i10, i12));
            byte[] bArr = this.f51494e;
            System.arraycopy(bArr, i12, bArr, 0, i11);
            this.f51495f = i11;
            return h0Var;
        }

        @Override // tc.b0
        public void b(Format format) {
            this.f51493d = format;
            this.f51491b.b(this.f51492c);
        }

        @Override // tc.b0
        public int c(le.j jVar, int i10, boolean z10, int i11) {
            h(this.f51495f + i10);
            int read = jVar.read(this.f51494e, this.f51495f, i10);
            if (read == -1) {
                if (z10) {
                    return -1;
                }
                throw new EOFException();
            }
            this.f51495f += read;
            return read;
        }

        @Override // tc.b0
        public void d(long j10, int i10, int i11, int i12, b0.a aVar) {
            ne.a.e(this.f51493d);
            h0 i13 = i(i11, i12);
            if (!ne.w0.c(this.f51493d.f11303w, this.f51492c.f11303w)) {
                if ("application/x-emsg".equals(this.f51493d.f11303w)) {
                    id.a c10 = this.f51490a.c(i13);
                    if (!g(c10)) {
                        ne.y.i("HlsSampleStreamWrapper", String.format("Ignoring EMSG. Expected it to contain wrapped %s but actual wrapped format: %s", this.f51492c.f11303w, c10.F()));
                        return;
                    }
                    i13 = new h0((byte[]) ne.a.e(c10.j2()));
                } else {
                    ne.y.i("HlsSampleStreamWrapper", "Ignoring sample for unsupported format: " + this.f51493d.f11303w);
                    return;
                }
            }
            int a10 = i13.a();
            this.f51491b.f(i13, a10);
            this.f51491b.d(j10, i10, a10, i12, aVar);
        }

        @Override // tc.b0
        public void e(h0 h0Var, int i10, int i11) {
            h(this.f51495f + i10);
            h0Var.l(this.f51494e, this.f51495f, i10);
            this.f51495f += i10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends l0 {
        private final Map H;
        private rc.m I;

        private Metadata g0(Metadata metadata) {
            if (metadata == null) {
                return null;
            }
            int e10 = metadata.e();
            int i10 = 0;
            while (true) {
                if (i10 < e10) {
                    Metadata.b d10 = metadata.d(i10);
                    if ((d10 instanceof ld.l) && "com.apple.streaming.transportStreamTimestamp".equals(((ld.l) d10).f36750e)) {
                        break;
                    }
                    i10++;
                } else {
                    i10 = -1;
                    break;
                }
            }
            if (i10 == -1) {
                return metadata;
            }
            if (e10 == 1) {
                return null;
            }
            Metadata.b[] bVarArr = new Metadata.b[e10 - 1];
            for (int i11 = 0; i11 < e10; i11++) {
                if (i11 != i10) {
                    bVarArr[i11 < i10 ? i11 : i11 - 1] = metadata.d(i11);
                }
            }
            return new Metadata(bVarArr);
        }

        @Override // qd.l0, tc.b0
        public void d(long j10, int i10, int i11, int i12, b0.a aVar) {
            super.d(j10, i10, i11, i12, aVar);
        }

        public void h0(rc.m mVar) {
            this.I = mVar;
            I();
        }

        public void i0(i iVar) {
            e0(iVar.f51425k);
        }

        @Override // qd.l0
        public Format w(Format format) {
            rc.m mVar;
            rc.m mVar2 = this.I;
            if (mVar2 == null) {
                mVar2 = format.f11306z;
            }
            if (mVar2 != null && (mVar = (rc.m) this.H.get(mVar2.f48743i)) != null) {
                mVar2 = mVar;
            }
            Metadata g02 = g0(format.f11301u);
            if (mVar2 != format.f11306z || g02 != format.f11301u) {
                format = format.b().O(mVar2).Z(g02).G();
            }
            return super.w(format);
        }

        private d(le.b bVar, v vVar, u.a aVar, Map map) {
            super(bVar, vVar, aVar);
            this.H = map;
        }
    }

    public p(String str, int i10, b bVar, f fVar, Map map, le.b bVar2, long j10, Format format, v vVar, u.a aVar, com.google.android.exoplayer2.upstream.h hVar, y.a aVar2, int i11) {
        this.f51467d = str;
        this.f51469e = i10;
        this.f51474i = bVar;
        this.f51476o = fVar;
        this.E = map;
        this.f51477p = bVar2;
        this.f51478q = format;
        this.f51479r = vVar;
        this.f51480s = aVar;
        this.f51481t = hVar;
        this.f51483v = aVar2;
        this.f51484w = i11;
        Set set = f51463j0;
        this.I = new HashSet(set.size());
        this.J = new SparseIntArray(set.size());
        this.G = new d[0];
        this.Z = new boolean[0];
        this.Y = new boolean[0];
        ArrayList arrayList = new ArrayList();
        this.f51486y = arrayList;
        this.f51487z = Collections.unmodifiableList(arrayList);
        this.D = new ArrayList();
        this.A = new Runnable() { // from class: vd.n
            @Override // java.lang.Runnable
            public final void run() {
                p.this.T();
            }
        };
        this.B = new Runnable() { // from class: vd.o
            @Override // java.lang.Runnable
            public final void run() {
                p.this.c0();
            }
        };
        this.C = ne.w0.w();
        this.f51464a0 = j10;
        this.f51465b0 = j10;
    }

    private boolean A(int i10) {
        for (int i11 = i10; i11 < this.f51486y.size(); i11++) {
            if (((i) this.f51486y.get(i11)).f51428n) {
                return false;
            }
        }
        i iVar = (i) this.f51486y.get(i10);
        for (int i12 = 0; i12 < this.G.length; i12++) {
            if (this.G[i12].C() > iVar.m(i12)) {
                return false;
            }
        }
        return true;
    }

    private static tc.j C(int i10, int i11) {
        ne.y.i("HlsSampleStreamWrapper", "Unmapped track with id " + i10 + " of type " + i11);
        return new tc.j();
    }

    private l0 D(int i10, int i11) {
        int length = this.G.length;
        boolean z10 = true;
        if (i11 != 1 && i11 != 2) {
            z10 = false;
        }
        d dVar = new d(this.f51477p, this.f51479r, this.f51480s, this.E);
        dVar.a0(this.f51464a0);
        if (z10) {
            dVar.h0(this.f51473h0);
        }
        dVar.Z(this.f51472g0);
        i iVar = this.f51475i0;
        if (iVar != null) {
            dVar.i0(iVar);
        }
        dVar.c0(this);
        int i12 = length + 1;
        int[] copyOf = Arrays.copyOf(this.H, i12);
        this.H = copyOf;
        copyOf[length] = i10;
        this.G = (d[]) ne.w0.N0(this.G, dVar);
        boolean[] copyOf2 = Arrays.copyOf(this.Z, i12);
        this.Z = copyOf2;
        copyOf2[length] = z10;
        this.X |= z10;
        this.I.add(Integer.valueOf(i11));
        this.J.append(i11, length);
        if (M(i11) > M(this.L)) {
            this.M = length;
            this.L = i11;
        }
        this.Y = Arrays.copyOf(this.Y, i12);
        return dVar;
    }

    private w0 E(u0[] u0VarArr) {
        for (int i10 = 0; i10 < u0VarArr.length; i10++) {
            u0 u0Var = u0VarArr[i10];
            Format[] formatArr = new Format[u0Var.f47764d];
            for (int i11 = 0; i11 < u0Var.f47764d; i11++) {
                Format c10 = u0Var.c(i11);
                formatArr[i11] = c10.c(this.f51479r.b(c10));
            }
            u0VarArr[i10] = new u0(u0Var.f47765e, formatArr);
        }
        return new w0(u0VarArr);
    }

    private static Format F(Format format, Format format2, boolean z10) {
        String d10;
        String str;
        int i10;
        int i11;
        if (format == null) {
            return format2;
        }
        int k10 = c0.k(format2.f11303w);
        if (ne.w0.L(format.f11300t, k10) == 1) {
            d10 = ne.w0.M(format.f11300t, k10);
            str = c0.g(d10);
        } else {
            d10 = c0.d(format.f11300t, format2.f11303w);
            str = format2.f11303w;
        }
        Format.b e02 = format2.b().U(format.f11292d).W(format.f11293e).X(format.f11294i).i0(format.f11295o).e0(format.f11296p);
        if (z10) {
            i10 = format.f11297q;
        } else {
            i10 = -1;
        }
        Format.b I = e02.I(i10);
        if (z10) {
            i11 = format.f11298r;
        } else {
            i11 = -1;
        }
        Format.b K = I.b0(i11).K(d10);
        if (k10 == 2) {
            K.n0(format.B).S(format.C).R(format.D);
        }
        if (str != null) {
            K.g0(str);
        }
        int i12 = format.J;
        if (i12 != -1 && k10 == 1) {
            K.J(i12);
        }
        Metadata metadata = format.f11301u;
        if (metadata != null) {
            Metadata metadata2 = format2.f11301u;
            if (metadata2 != null) {
                metadata = metadata2.b(metadata);
            }
            K.Z(metadata);
        }
        return K.G();
    }

    private void G(int i10) {
        ne.a.g(!this.f51482u.j());
        while (true) {
            if (i10 < this.f51486y.size()) {
                if (A(i10)) {
                    break;
                }
                i10++;
            } else {
                i10 = -1;
                break;
            }
        }
        if (i10 == -1) {
            return;
        }
        long j10 = K().f49422h;
        i H = H(i10);
        if (this.f51486y.isEmpty()) {
            this.f51465b0 = this.f51464a0;
        } else {
            ((i) ji.v.c(this.f51486y)).o();
        }
        this.f51470e0 = false;
        this.f51483v.w(this.L, H.f49421g, j10);
    }

    private i H(int i10) {
        i iVar = (i) this.f51486y.get(i10);
        ArrayList arrayList = this.f51486y;
        ne.w0.V0(arrayList, i10, arrayList.size());
        for (int i11 = 0; i11 < this.G.length; i11++) {
            this.G[i11].u(iVar.m(i11));
        }
        return iVar;
    }

    private boolean I(i iVar) {
        int i10 = iVar.f51425k;
        int length = this.G.length;
        for (int i11 = 0; i11 < length; i11++) {
            if (this.Y[i11] && this.G[i11].P() == i10) {
                return false;
            }
        }
        return true;
    }

    private static boolean J(Format format, Format format2) {
        String str = format.f11303w;
        String str2 = format2.f11303w;
        int k10 = c0.k(str);
        if (k10 != 3) {
            if (k10 != c0.k(str2)) {
                return false;
            }
            return true;
        } else if (!ne.w0.c(str, str2)) {
            return false;
        } else {
            if (("application/cea-608".equals(str) || "application/cea-708".equals(str)) && format.O != format2.O) {
                return false;
            }
            return true;
        }
    }

    private i K() {
        ArrayList arrayList = this.f51486y;
        return (i) arrayList.get(arrayList.size() - 1);
    }

    private b0 L(int i10, int i11) {
        ne.a.a(f51463j0.contains(Integer.valueOf(i11)));
        int i12 = this.J.get(i11, -1);
        if (i12 == -1) {
            return null;
        }
        if (this.I.add(Integer.valueOf(i11))) {
            this.H[i12] = i10;
        }
        if (this.H[i12] == i10) {
            return this.G[i12];
        }
        return C(i10, i11);
    }

    private static int M(int i10) {
        if (i10 == 1) {
            return 2;
        }
        if (i10 == 2) {
            return 3;
        }
        if (i10 == 3) {
            return 1;
        }
        return 0;
    }

    private void N(i iVar) {
        d[] dVarArr;
        this.f51475i0 = iVar;
        this.Q = iVar.f49418d;
        this.f51465b0 = -9223372036854775807L;
        this.f51486y.add(iVar);
        s.a j10 = ji.s.j();
        for (d dVar : this.G) {
            j10.a(Integer.valueOf(dVar.G()));
        }
        iVar.n(this, j10.k());
        for (d dVar2 : this.G) {
            dVar2.i0(iVar);
            if (iVar.f51428n) {
                dVar2.f0();
            }
        }
    }

    private static boolean O(sd.f fVar) {
        return fVar instanceof i;
    }

    private boolean P() {
        if (this.f51465b0 != -9223372036854775807L) {
            return true;
        }
        return false;
    }

    private void S() {
        int i10 = this.T.f47780d;
        int[] iArr = new int[i10];
        this.V = iArr;
        Arrays.fill(iArr, -1);
        for (int i11 = 0; i11 < i10; i11++) {
            int i12 = 0;
            while (true) {
                d[] dVarArr = this.G;
                if (i12 >= dVarArr.length) {
                    break;
                } else if (J((Format) ne.a.i(dVarArr[i12].F()), this.T.b(i11).c(0))) {
                    this.V[i11] = i12;
                    break;
                } else {
                    i12++;
                }
            }
        }
        Iterator it = this.D.iterator();
        while (it.hasNext()) {
            ((l) it.next()).b();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void T() {
        if (!this.S && this.V == null && this.N) {
            for (d dVar : this.G) {
                if (dVar.F() == null) {
                    return;
                }
            }
            if (this.T != null) {
                S();
                return;
            }
            z();
            l0();
            this.f51474i.c();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c0() {
        this.N = true;
        T();
    }

    private void g0() {
        for (d dVar : this.G) {
            dVar.V(this.f51466c0);
        }
        this.f51466c0 = false;
    }

    private boolean h0(long j10) {
        int length = this.G.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (!this.G[i10].Y(j10, false) && (this.Z[i10] || !this.X)) {
                return false;
            }
        }
        return true;
    }

    private void l0() {
        this.O = true;
    }

    private void q0(m0[] m0VarArr) {
        this.D.clear();
        for (m0 m0Var : m0VarArr) {
            if (m0Var != null) {
                this.D.add((l) m0Var);
            }
        }
    }

    private void x() {
        ne.a.g(this.O);
        ne.a.e(this.T);
        ne.a.e(this.U);
    }

    private void z() {
        Format format;
        Format F;
        Format format2;
        int length = this.G.length;
        boolean z10 = false;
        int i10 = -2;
        int i11 = -1;
        int i12 = 0;
        while (true) {
            int i13 = 2;
            if (i12 >= length) {
                break;
            }
            String str = ((Format) ne.a.i(this.G[i12].F())).f11303w;
            if (!c0.s(str)) {
                if (c0.o(str)) {
                    i13 = 1;
                } else if (c0.r(str)) {
                    i13 = 3;
                } else {
                    i13 = -2;
                }
            }
            if (M(i13) > M(i10)) {
                i11 = i12;
                i10 = i13;
            } else if (i13 == i10 && i11 != -1) {
                i11 = -1;
            }
            i12++;
        }
        u0 j10 = this.f51476o.j();
        int i14 = j10.f47764d;
        this.W = -1;
        this.V = new int[length];
        for (int i15 = 0; i15 < length; i15++) {
            this.V[i15] = i15;
        }
        u0[] u0VarArr = new u0[length];
        for (int i16 = 0; i16 < length; i16++) {
            Format format3 = (Format) ne.a.i(this.G[i16].F());
            if (i16 == i11) {
                Format[] formatArr = new Format[i14];
                for (int i17 = 0; i17 < i14; i17++) {
                    Format c10 = j10.c(i17);
                    if (i10 == 1 && (format2 = this.f51478q) != null) {
                        c10 = c10.j(format2);
                    }
                    if (i14 == 1) {
                        F = format3.j(c10);
                    } else {
                        F = F(c10, format3, true);
                    }
                    formatArr[i17] = F;
                }
                u0VarArr[i16] = new u0(this.f51467d, formatArr);
                this.W = i16;
            } else {
                if (i10 == 2 && c0.o(format3.f11303w)) {
                    format = this.f51478q;
                } else {
                    format = null;
                }
                StringBuilder sb2 = new StringBuilder();
                sb2.append(this.f51467d);
                sb2.append(":muxed:");
                sb2.append(i16 < i11 ? i16 : i16 - 1);
                u0VarArr[i16] = new u0(sb2.toString(), F(format, format3, false));
            }
        }
        this.T = E(u0VarArr);
        if (this.U == null) {
            z10 = true;
        }
        ne.a.g(z10);
        this.U = Collections.EMPTY_SET;
    }

    public void B() {
        if (!this.O) {
            f(this.f51464a0);
        }
    }

    public boolean Q(int i10) {
        if (!P() && this.G[i10].K(this.f51470e0)) {
            return true;
        }
        return false;
    }

    public boolean R() {
        if (this.L == 2) {
            return true;
        }
        return false;
    }

    public void U() {
        this.f51482u.a();
        this.f51476o.n();
    }

    public void V(int i10) {
        U();
        this.G[i10].M();
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: W */
    public void i(sd.f fVar, long j10, long j11, boolean z10) {
        this.F = null;
        LoadEventInfo loadEventInfo = new LoadEventInfo(fVar.f49415a, fVar.f49416b, fVar.f(), fVar.e(), j10, j11, fVar.a());
        this.f51481t.d(fVar.f49415a);
        this.f51483v.k(loadEventInfo, fVar.f49417c, this.f51469e, fVar.f49418d, fVar.f49419e, fVar.f49420f, fVar.f49421g, fVar.f49422h);
        if (!z10) {
            if (P() || this.P == 0) {
                g0();
            }
            if (this.P > 0) {
                this.f51474i.i(this);
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: X */
    public void j(sd.f fVar, long j10, long j11) {
        this.F = null;
        this.f51476o.p(fVar);
        LoadEventInfo loadEventInfo = new LoadEventInfo(fVar.f49415a, fVar.f49416b, fVar.f(), fVar.e(), j10, j11, fVar.a());
        this.f51481t.d(fVar.f49415a);
        this.f51483v.n(loadEventInfo, fVar.f49417c, this.f51469e, fVar.f49418d, fVar.f49419e, fVar.f49420f, fVar.f49421g, fVar.f49422h);
        if (!this.O) {
            f(this.f51464a0);
        } else {
            this.f51474i.i(this);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: Y */
    public i.c n(sd.f fVar, long j10, long j11, IOException iOException, int i10) {
        boolean z10;
        i.c cVar;
        int i11;
        boolean O = O(fVar);
        if (O && !((i) fVar).q() && (iOException instanceof g.f) && ((i11 = ((g.f) iOException).f13064o) == 410 || i11 == 404)) {
            return com.google.android.exoplayer2.upstream.i.f13080d;
        }
        long a10 = fVar.a();
        LoadEventInfo loadEventInfo = new LoadEventInfo(fVar.f49415a, fVar.f49416b, fVar.f(), fVar.e(), j10, j11, a10);
        h.c cVar2 = new h.c(loadEventInfo, new MediaLoadData(fVar.f49417c, this.f51469e, fVar.f49418d, fVar.f49419e, fVar.f49420f, ne.w0.p1(fVar.f49421g), ne.w0.p1(fVar.f49422h)), iOException, i10);
        h.b c10 = this.f51481t.c(com.google.android.exoplayer2.trackselection.h.c(this.f51476o.k()), cVar2);
        boolean z11 = false;
        if (c10 != null && c10.f13074a == 2) {
            z10 = this.f51476o.m(fVar, c10.f13075b);
        } else {
            z10 = false;
        }
        if (z10) {
            if (O && a10 == 0) {
                ArrayList arrayList = this.f51486y;
                if (((i) arrayList.remove(arrayList.size() - 1)) == fVar) {
                    z11 = true;
                }
                ne.a.g(z11);
                if (this.f51486y.isEmpty()) {
                    this.f51465b0 = this.f51464a0;
                } else {
                    ((i) ji.v.c(this.f51486y)).o();
                }
            }
            cVar = com.google.android.exoplayer2.upstream.i.f13082f;
        } else {
            long a11 = this.f51481t.a(cVar2);
            if (a11 != -9223372036854775807L) {
                cVar = com.google.android.exoplayer2.upstream.i.h(false, a11);
            } else {
                cVar = com.google.android.exoplayer2.upstream.i.f13083g;
            }
        }
        i.c cVar3 = cVar;
        boolean c11 = cVar3.c();
        this.f51483v.p(loadEventInfo, fVar.f49417c, this.f51469e, fVar.f49418d, fVar.f49419e, fVar.f49420f, fVar.f49421g, fVar.f49422h, iOException, !c11);
        if (!c11) {
            this.F = null;
            this.f51481t.d(fVar.f49415a);
        }
        if (z10) {
            if (!this.O) {
                f(this.f51464a0);
                return cVar3;
            }
            this.f51474i.i(this);
        }
        return cVar3;
    }

    public void Z() {
        this.I.clear();
    }

    @Override // qd.l0.d
    public void a(Format format) {
        this.C.post(this.A);
    }

    public boolean a0(Uri uri, h.c cVar, boolean z10) {
        long j10;
        h.b c10;
        if (!this.f51476o.o(uri)) {
            return true;
        }
        if (!z10 && (c10 = this.f51481t.c(com.google.android.exoplayer2.trackselection.h.c(this.f51476o.k()), cVar)) != null && c10.f13074a == 2) {
            j10 = c10.f13075b;
        } else {
            j10 = -9223372036854775807L;
        }
        if (this.f51476o.q(uri, j10) && j10 != -9223372036854775807L) {
            return true;
        }
        return false;
    }

    @Override // qd.n0
    public long b() {
        if (P()) {
            return this.f51465b0;
        }
        if (this.f51470e0) {
            return Long.MIN_VALUE;
        }
        return K().f49422h;
    }

    public void b0() {
        if (!this.f51486y.isEmpty()) {
            i iVar = (i) ji.v.c(this.f51486y);
            int c10 = this.f51476o.c(iVar);
            if (c10 == 1) {
                iVar.v();
            } else if (c10 == 2 && !this.f51470e0 && this.f51482u.j()) {
                this.f51482u.f();
            }
        }
    }

    @Override // tc.m
    public b0 c(int i10, int i11) {
        b0 b0Var;
        if (f51463j0.contains(Integer.valueOf(i11))) {
            b0Var = L(i10, i11);
        } else {
            int i12 = 0;
            while (true) {
                b0[] b0VarArr = this.G;
                if (i12 < b0VarArr.length) {
                    if (this.H[i12] == i10) {
                        b0Var = b0VarArr[i12];
                        break;
                    }
                    i12++;
                } else {
                    b0Var = null;
                    break;
                }
            }
        }
        if (b0Var == null) {
            if (this.f51471f0) {
                return C(i10, i11);
            }
            b0Var = D(i10, i11);
        }
        if (i11 == 5) {
            if (this.K == null) {
                this.K = new c(b0Var, this.f51484w);
            }
            return this.K;
        }
        return b0Var;
    }

    @Override // qd.n0
    public boolean d() {
        return this.f51482u.j();
    }

    public void d0(u0[] u0VarArr, int i10, int... iArr) {
        this.T = E(u0VarArr);
        this.U = new HashSet();
        for (int i11 : iArr) {
            this.U.add(this.T.b(i11));
        }
        this.W = i10;
        Handler handler = this.C;
        final b bVar = this.f51474i;
        Objects.requireNonNull(bVar);
        handler.post(new Runnable() { // from class: vd.m
            @Override // java.lang.Runnable
            public final void run() {
                p.b.this.c();
            }
        });
        l0();
    }

    public long e(long j10, t0 t0Var) {
        return this.f51476o.b(j10, t0Var);
    }

    public int e0(int i10, x xVar, qc.f fVar, int i11) {
        Format format;
        if (P()) {
            return -3;
        }
        int i12 = 0;
        if (!this.f51486y.isEmpty()) {
            int i13 = 0;
            while (i13 < this.f51486y.size() - 1 && I((i) this.f51486y.get(i13))) {
                i13++;
            }
            ne.w0.V0(this.f51486y, 0, i13);
            i iVar = (i) this.f51486y.get(0);
            Format format2 = iVar.f49418d;
            if (!format2.equals(this.R)) {
                this.f51483v.h(this.f51469e, format2, iVar.f49419e, iVar.f49420f, iVar.f49421g);
            }
            this.R = format2;
        }
        if (!this.f51486y.isEmpty() && !((i) this.f51486y.get(0)).q()) {
            return -3;
        }
        int R = this.G[i10].R(xVar, fVar, i11, this.f51470e0);
        if (R == -5) {
            Format format3 = (Format) ne.a.e(xVar.f36709b);
            if (i10 == this.M) {
                int d10 = li.e.d(this.G[i10].P());
                while (i12 < this.f51486y.size() && ((i) this.f51486y.get(i12)).f51425k != d10) {
                    i12++;
                }
                if (i12 < this.f51486y.size()) {
                    format = ((i) this.f51486y.get(i12)).f49418d;
                } else {
                    format = (Format) ne.a.e(this.Q);
                }
                format3 = format3.j(format);
            }
            xVar.f36709b = format3;
        }
        return R;
    }

    @Override // qd.n0
    public boolean f(long j10) {
        List list;
        long max;
        boolean z10;
        if (this.f51470e0 || this.f51482u.j() || this.f51482u.i()) {
            return false;
        }
        if (P()) {
            list = Collections.EMPTY_LIST;
            max = this.f51465b0;
            for (d dVar : this.G) {
                dVar.a0(this.f51465b0);
            }
        } else {
            list = this.f51487z;
            i K = K();
            if (K.h()) {
                max = K.f49422h;
            } else {
                max = Math.max(this.f51464a0, K.f49421g);
            }
        }
        List list2 = list;
        long j11 = max;
        this.f51485x.a();
        f fVar = this.f51476o;
        if (!this.O && list2.isEmpty()) {
            z10 = false;
        } else {
            z10 = true;
        }
        fVar.e(j10, j11, list2, z10, this.f51485x);
        f.b bVar = this.f51485x;
        boolean z11 = bVar.f51414b;
        sd.f fVar2 = bVar.f51413a;
        Uri uri = bVar.f51415c;
        if (z11) {
            this.f51465b0 = -9223372036854775807L;
            this.f51470e0 = true;
            return true;
        } else if (fVar2 == null) {
            if (uri != null) {
                this.f51474i.n(uri);
            }
            return false;
        } else {
            if (O(fVar2)) {
                N((i) fVar2);
            }
            this.F = fVar2;
            this.f51483v.t(new LoadEventInfo(fVar2.f49415a, fVar2.f49416b, this.f51482u.n(fVar2, this, this.f51481t.b(fVar2.f49417c))), fVar2.f49417c, this.f51469e, fVar2.f49418d, fVar2.f49419e, fVar2.f49420f, fVar2.f49421g, fVar2.f49422h);
            return true;
        }
    }

    public void f0() {
        if (this.O) {
            for (d dVar : this.G) {
                dVar.Q();
            }
        }
        this.f51482u.m(this);
        this.C.removeCallbacksAndMessages(null);
        this.S = true;
        this.D.clear();
    }

    @Override // qd.n0
    public long g() {
        ArrayList arrayList;
        if (this.f51470e0) {
            return Long.MIN_VALUE;
        }
        if (P()) {
            return this.f51465b0;
        }
        long j10 = this.f51464a0;
        i K = K();
        if (!K.h()) {
            if (this.f51486y.size() > 1) {
                K = (i) this.f51486y.get(arrayList.size() - 2);
            } else {
                K = null;
            }
        }
        if (K != null) {
            j10 = Math.max(j10, K.f49422h);
        }
        if (this.N) {
            for (d dVar : this.G) {
                j10 = Math.max(j10, dVar.z());
            }
        }
        return j10;
    }

    @Override // qd.n0
    public void h(long j10) {
        if (!this.f51482u.i() && !P()) {
            if (this.f51482u.j()) {
                ne.a.e(this.F);
                if (this.f51476o.v(j10, this.F, this.f51487z)) {
                    this.f51482u.f();
                    return;
                }
                return;
            }
            int size = this.f51487z.size();
            while (size > 0 && this.f51476o.c((i) this.f51487z.get(size - 1)) == 2) {
                size--;
            }
            if (size < this.f51487z.size()) {
                G(size);
            }
            int h10 = this.f51476o.h(j10, this.f51487z);
            if (h10 < this.f51486y.size()) {
                G(h10);
            }
        }
    }

    public boolean i0(long j10, boolean z10) {
        this.f51464a0 = j10;
        if (P()) {
            this.f51465b0 = j10;
            return true;
        }
        if (this.N && !z10 && h0(j10)) {
            return false;
        }
        this.f51465b0 = j10;
        this.f51470e0 = false;
        this.f51486y.clear();
        if (this.f51482u.j()) {
            if (this.N) {
                for (d dVar : this.G) {
                    dVar.r();
                }
            }
            this.f51482u.f();
        } else {
            this.f51482u.g();
            g0();
        }
        return true;
    }

    /* JADX WARN: Code restructure failed: missing block: B:67:0x010d, code lost:
        if (r1.p() != r13.f51476o.j().d(r14.f49418d)) goto L75;
     */
    /* JADX WARN: Removed duplicated region for block: B:71:0x0118  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean j0(com.google.android.exoplayer2.trackselection.g[] r14, boolean[] r15, qd.m0[] r16, boolean[] r17, long r18, boolean r20) {
        /*
            Method dump skipped, instructions count: 301
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: vd.p.j0(com.google.android.exoplayer2.trackselection.g[], boolean[], qd.m0[], boolean[], long, boolean):boolean");
    }

    public void k0(rc.m mVar) {
        if (!ne.w0.c(this.f51473h0, mVar)) {
            this.f51473h0 = mVar;
            int i10 = 0;
            while (true) {
                d[] dVarArr = this.G;
                if (i10 < dVarArr.length) {
                    if (this.Z[i10]) {
                        dVarArr[i10].h0(mVar);
                    }
                    i10++;
                } else {
                    return;
                }
            }
        }
    }

    public void m0(boolean z10) {
        this.f51476o.t(z10);
    }

    public void n0(long j10) {
        if (this.f51472g0 != j10) {
            this.f51472g0 = j10;
            for (d dVar : this.G) {
                dVar.Z(j10);
            }
        }
    }

    public int o0(int i10, long j10) {
        if (P()) {
            return 0;
        }
        d dVar = this.G[i10];
        int E = dVar.E(j10, this.f51470e0);
        i iVar = (i) ji.v.d(this.f51486y, null);
        if (iVar != null && !iVar.q()) {
            E = Math.min(E, iVar.m(i10) - dVar.C());
        }
        dVar.d0(E);
        return E;
    }

    @Override // com.google.android.exoplayer2.upstream.i.f
    public void p() {
        for (d dVar : this.G) {
            dVar.S();
        }
    }

    public void p0(int i10) {
        x();
        ne.a.e(this.V);
        int i11 = this.V[i10];
        ne.a.g(this.Y[i11]);
        this.Y[i11] = false;
    }

    public void r() {
        U();
        if (this.f51470e0 && !this.O) {
            throw lc.l0.a("Loading finished before preparation is complete.", null);
        }
    }

    @Override // tc.m
    public void s() {
        this.f51471f0 = true;
        this.C.post(this.B);
    }

    public w0 t() {
        x();
        return this.T;
    }

    public void u(long j10, boolean z10) {
        if (this.N && !P()) {
            int length = this.G.length;
            for (int i10 = 0; i10 < length; i10++) {
                this.G[i10].q(j10, z10, this.Y[i10]);
            }
        }
    }

    public int y(int i10) {
        x();
        ne.a.e(this.V);
        int i11 = this.V[i10];
        if (i11 == -1) {
            if (!this.U.contains(this.T.b(i10))) {
                return -2;
            }
            return -3;
        }
        boolean[] zArr = this.Y;
        if (zArr[i11]) {
            return -2;
        }
        zArr[i11] = true;
        return i11;
    }

    @Override // tc.m
    public void q(z zVar) {
    }
}
