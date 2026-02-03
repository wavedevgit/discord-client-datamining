package bd;

import android.util.Pair;
import bd.a;
import bd.d;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import ji.s;
import kotlin.jvm.internal.LongCompanionObject;
import lc.l0;
import ne.c0;
import ne.h0;
import ne.w0;
import ne.y;
import tc.v;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static final byte[] f6377a = w0.s0("OpusHead");

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f6378a;

        /* renamed from: b  reason: collision with root package name */
        public int f6379b;

        /* renamed from: c  reason: collision with root package name */
        public int f6380c;

        /* renamed from: d  reason: collision with root package name */
        public long f6381d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f6382e;

        /* renamed from: f  reason: collision with root package name */
        private final h0 f6383f;

        /* renamed from: g  reason: collision with root package name */
        private final h0 f6384g;

        /* renamed from: h  reason: collision with root package name */
        private int f6385h;

        /* renamed from: i  reason: collision with root package name */
        private int f6386i;

        public a(h0 h0Var, h0 h0Var2, boolean z10) {
            this.f6384g = h0Var;
            this.f6383f = h0Var2;
            this.f6382e = z10;
            h0Var2.U(12);
            this.f6378a = h0Var2.L();
            h0Var.U(12);
            this.f6386i = h0Var.L();
            tc.n.a(h0Var.q() == 1, "first_chunk must be 1");
            this.f6379b = -1;
        }

        public boolean a() {
            long J;
            int i10;
            int i11 = this.f6379b + 1;
            this.f6379b = i11;
            if (i11 == this.f6378a) {
                return false;
            }
            if (this.f6382e) {
                J = this.f6383f.M();
            } else {
                J = this.f6383f.J();
            }
            this.f6381d = J;
            if (this.f6379b == this.f6385h) {
                this.f6380c = this.f6384g.L();
                this.f6384g.V(4);
                int i12 = this.f6386i - 1;
                this.f6386i = i12;
                if (i12 > 0) {
                    i10 = this.f6384g.L() - 1;
                } else {
                    i10 = -1;
                }
                this.f6385h = i10;
            }
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: bd.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0101b {

        /* renamed from: a  reason: collision with root package name */
        private final String f6387a;

        /* renamed from: b  reason: collision with root package name */
        private final byte[] f6388b;

        /* renamed from: c  reason: collision with root package name */
        private final long f6389c;

        /* renamed from: d  reason: collision with root package name */
        private final long f6390d;

        public C0101b(String str, byte[] bArr, long j10, long j11) {
            this.f6387a = str;
            this.f6388b = bArr;
            this.f6389c = j10;
            this.f6390d = j11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Metadata f6391a;

        /* renamed from: b  reason: collision with root package name */
        public final long f6392b;

        public c(Metadata metadata, long j10) {
            this.f6391a = metadata;
            this.f6392b = j10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface d {
        int a();

        int b();

        int c();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        public final p[] f6393a;

        /* renamed from: b  reason: collision with root package name */
        public Format f6394b;

        /* renamed from: c  reason: collision with root package name */
        public int f6395c;

        /* renamed from: d  reason: collision with root package name */
        public int f6396d = 0;

        public e(int i10) {
            this.f6393a = new p[i10];
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f implements d {

        /* renamed from: a  reason: collision with root package name */
        private final int f6397a;

        /* renamed from: b  reason: collision with root package name */
        private final int f6398b;

        /* renamed from: c  reason: collision with root package name */
        private final h0 f6399c;

        public f(a.b bVar, Format format) {
            h0 h0Var = bVar.f6376b;
            this.f6399c = h0Var;
            h0Var.U(12);
            int L = h0Var.L();
            if ("audio/raw".equals(format.f11303w)) {
                int i02 = w0.i0(format.L, format.J);
                if (L == 0 || L % i02 != 0) {
                    y.i("AtomParsers", "Audio sample size mismatch. stsd sample size: " + i02 + ", stsz sample size: " + L);
                    L = i02;
                }
            }
            this.f6397a = L == 0 ? -1 : L;
            this.f6398b = h0Var.L();
        }

        @Override // bd.b.d
        public int a() {
            int i10 = this.f6397a;
            if (i10 == -1) {
                return this.f6399c.L();
            }
            return i10;
        }

        @Override // bd.b.d
        public int b() {
            return this.f6397a;
        }

        @Override // bd.b.d
        public int c() {
            return this.f6398b;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g implements d {

        /* renamed from: a  reason: collision with root package name */
        private final h0 f6400a;

        /* renamed from: b  reason: collision with root package name */
        private final int f6401b;

        /* renamed from: c  reason: collision with root package name */
        private final int f6402c;

        /* renamed from: d  reason: collision with root package name */
        private int f6403d;

        /* renamed from: e  reason: collision with root package name */
        private int f6404e;

        public g(a.b bVar) {
            h0 h0Var = bVar.f6376b;
            this.f6400a = h0Var;
            h0Var.U(12);
            this.f6402c = h0Var.L() & SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f6401b = h0Var.L();
        }

        @Override // bd.b.d
        public int a() {
            int i10 = this.f6402c;
            if (i10 == 8) {
                return this.f6400a.H();
            }
            if (i10 == 16) {
                return this.f6400a.N();
            }
            int i11 = this.f6403d;
            this.f6403d = i11 + 1;
            if (i11 % 2 == 0) {
                int H = this.f6400a.H();
                this.f6404e = H;
                return (H & 240) >> 4;
            }
            return this.f6404e & 15;
        }

        @Override // bd.b.d
        public int b() {
            return -1;
        }

        @Override // bd.b.d
        public int c() {
            return this.f6401b;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h {

        /* renamed from: a  reason: collision with root package name */
        private final int f6405a;

        /* renamed from: b  reason: collision with root package name */
        private final long f6406b;

        /* renamed from: c  reason: collision with root package name */
        private final int f6407c;

        public h(int i10, long j10, int i11) {
            this.f6405a = i10;
            this.f6406b = j10;
            this.f6407c = i11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class i {

        /* renamed from: a  reason: collision with root package name */
        public final Metadata f6408a;

        /* renamed from: b  reason: collision with root package name */
        public final Metadata f6409b;

        /* renamed from: c  reason: collision with root package name */
        public final Metadata f6410c;

        public i(Metadata metadata, Metadata metadata2, Metadata metadata3) {
            this.f6408a = metadata;
            this.f6409b = metadata2;
            this.f6410c = metadata3;
        }
    }

    private static o A(a.C0100a c0100a, a.b bVar, long j10, rc.m mVar, boolean z10, boolean z11) {
        long j11;
        long[] jArr;
        long[] jArr2;
        a.C0100a f10;
        Pair i10;
        a.C0100a c0100a2 = (a.C0100a) ne.a.e(c0100a.f(1835297121));
        int e10 = e(l(((a.b) ne.a.e(c0100a2.g(1751411826))).f6376b));
        if (e10 == -1) {
            return null;
        }
        h z12 = z(((a.b) ne.a.e(c0100a.g(1953196132))).f6376b);
        long j12 = -9223372036854775807L;
        if (j10 == -9223372036854775807L) {
            j11 = z12.f6406b;
        } else {
            j11 = j10;
        }
        long j13 = q(bVar.f6376b).f6392b;
        if (j11 != -9223372036854775807L) {
            j12 = w0.X0(j11, 1000000L, j13);
        }
        long j14 = j12;
        Pair n10 = n(((a.b) ne.a.e(c0100a2.g(1835296868))).f6376b);
        a.b g10 = ((a.C0100a) ne.a.e(((a.C0100a) ne.a.e(c0100a2.f(1835626086))).f(1937007212))).g(1937011556);
        if (g10 != null) {
            e x10 = x(g10.f6376b, z12.f6405a, z12.f6407c, (String) n10.second, mVar, z11);
            if (!z10 && (f10 = c0100a.f(1701082227)) != null && (i10 = i(f10)) != null) {
                jArr2 = (long[]) i10.second;
                jArr = (long[]) i10.first;
            } else {
                jArr = null;
                jArr2 = null;
            }
            if (x10.f6394b == null) {
                return null;
            }
            return new o(z12.f6405a, e10, ((Long) n10.first).longValue(), j13, j14, x10.f6394b, x10.f6396d, x10.f6393a, x10.f6395c, jArr, jArr2);
        }
        throw l0.a("Malformed sample table (stbl) missing sample description (stsd)", null);
    }

    public static List B(a.C0100a c0100a, v vVar, long j10, rc.m mVar, boolean z10, boolean z11, ii.f fVar) {
        o oVar;
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < c0100a.f6375d.size(); i10++) {
            a.C0100a c0100a2 = (a.C0100a) c0100a.f6375d.get(i10);
            if (c0100a2.f6372a == 1953653099 && (oVar = (o) fVar.apply(A(c0100a2, (a.b) ne.a.e(c0100a.g(1836476516)), j10, mVar, z10, z11))) != null) {
                arrayList.add(w(oVar, (a.C0100a) ne.a.e(((a.C0100a) ne.a.e(((a.C0100a) ne.a.e(c0100a2.f(1835297121))).f(1835626086))).f(1937007212)), vVar));
            }
        }
        return arrayList;
    }

    public static i C(a.b bVar) {
        h0 h0Var = bVar.f6376b;
        h0Var.U(8);
        Metadata metadata = null;
        Metadata metadata2 = null;
        Metadata metadata3 = null;
        while (h0Var.a() >= 8) {
            int f10 = h0Var.f();
            int q10 = h0Var.q();
            int q11 = h0Var.q();
            if (q11 == 1835365473) {
                h0Var.U(f10);
                metadata = D(h0Var, f10 + q10);
            } else if (q11 == 1936553057) {
                h0Var.U(f10);
                metadata2 = v(h0Var, f10 + q10);
            } else if (q11 == -1451722374) {
                metadata3 = F(h0Var);
            }
            h0Var.U(f10 + q10);
        }
        return new i(metadata, metadata2, metadata3);
    }

    private static Metadata D(h0 h0Var, int i10) {
        h0Var.V(8);
        f(h0Var);
        while (h0Var.f() < i10) {
            int f10 = h0Var.f();
            int q10 = h0Var.q();
            if (h0Var.q() == 1768715124) {
                h0Var.U(f10);
                return m(h0Var, f10 + q10);
            }
            h0Var.U(f10 + q10);
        }
        return null;
    }

    private static void E(h0 h0Var, int i10, int i11, int i12, int i13, int i14, rc.m mVar, e eVar, int i15) {
        String str;
        byte[] bArr;
        boolean z10;
        rc.m mVar2;
        int i16;
        int i17;
        String str2;
        float f10;
        List list;
        int i18;
        int i19;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        String str3;
        boolean z15;
        boolean z16;
        boolean z17;
        int i20;
        int i21;
        int i22;
        String str4;
        boolean z18;
        int i23 = i11;
        int i24 = i12;
        rc.m mVar3 = mVar;
        e eVar2 = eVar;
        h0Var.U(i23 + 16);
        h0Var.V(16);
        int N = h0Var.N();
        int N2 = h0Var.N();
        h0Var.V(50);
        int f11 = h0Var.f();
        int i25 = i10;
        if (i25 == 1701733238) {
            Pair t10 = t(h0Var, i23, i24);
            if (t10 != null) {
                i25 = ((Integer) t10.first).intValue();
                if (mVar3 == null) {
                    mVar3 = null;
                } else {
                    mVar3 = mVar3.c(((p) t10.second).f6518b);
                }
                eVar2.f6393a[i15] = (p) t10.second;
            }
            h0Var.U(f11);
        }
        String str5 = "video/3gpp";
        if (i25 == 1831958048) {
            str = "video/mpeg";
        } else if (i25 == 1211250227) {
            str = "video/3gpp";
        } else {
            str = null;
        }
        float f12 = 1.0f;
        String str6 = null;
        List list2 = null;
        byte[] bArr2 = null;
        int i26 = -1;
        int i27 = -1;
        int i28 = -1;
        int i29 = -1;
        ByteBuffer byteBuffer = null;
        C0101b c0101b = null;
        boolean z19 = false;
        while (f11 - i23 < i24) {
            h0Var.U(f11);
            int f13 = h0Var.f();
            int q10 = h0Var.q();
            if (q10 == 0 && h0Var.f() - i11 == i24) {
                break;
            }
            if (q10 > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            tc.n.a(z10, "childAtomSize must be positive");
            int q11 = h0Var.q();
            if (q11 == 1635148611) {
                if (str == null) {
                    z18 = true;
                } else {
                    z18 = false;
                }
                tc.n.a(z18, null);
                h0Var.U(f13 + 8);
                oe.a b10 = oe.a.b(h0Var);
                list2 = b10.f42453a;
                eVar2.f6395c = b10.f42454b;
                if (!z19) {
                    f12 = b10.f42460h;
                }
                str6 = b10.f42461i;
                i20 = b10.f42457e;
                i21 = b10.f42458f;
                i22 = b10.f42459g;
                str4 = "video/avc";
            } else if (q11 == 1752589123) {
                if (str == null) {
                    z17 = true;
                } else {
                    z17 = false;
                }
                tc.n.a(z17, null);
                h0Var.U(f13 + 8);
                oe.f a10 = oe.f.a(h0Var);
                list2 = a10.f42495a;
                eVar2.f6395c = a10.f42496b;
                if (!z19) {
                    f12 = a10.f42502h;
                }
                str6 = a10.f42503i;
                i20 = a10.f42499e;
                i21 = a10.f42500f;
                i22 = a10.f42501g;
                str4 = "video/hevc";
            } else {
                if (q11 == 1685480259 || q11 == 1685485123) {
                    mVar2 = mVar3;
                    i16 = f11;
                    i17 = i25;
                    str2 = str5;
                    f10 = f12;
                    list = list2;
                    i18 = i27;
                    i19 = i29;
                    oe.d a11 = oe.d.a(h0Var);
                    if (a11 != null) {
                        str6 = a11.f42480c;
                        str = "video/dolby-vision";
                    }
                } else {
                    i16 = f11;
                    if (q11 == 1987076931) {
                        if (str == null) {
                            z15 = true;
                        } else {
                            z15 = false;
                        }
                        tc.n.a(z15, null);
                        if (i25 == 1987063864) {
                            str3 = "video/x-vnd.on2.vp8";
                        } else {
                            str3 = "video/x-vnd.on2.vp9";
                        }
                        h0Var.U(f13 + 12);
                        h0Var.V(2);
                        if ((h0Var.H() & 1) != 0) {
                            z16 = true;
                        } else {
                            z16 = false;
                        }
                        int H = h0Var.H();
                        int H2 = h0Var.H();
                        i27 = oe.c.h(H);
                        if (z16) {
                            i28 = 1;
                        } else {
                            i28 = 2;
                        }
                        i29 = oe.c.i(H2);
                    } else if (q11 == 1635135811) {
                        if (str == null) {
                            z14 = true;
                        } else {
                            z14 = false;
                        }
                        tc.n.a(z14, null);
                        str3 = "video/av01";
                    } else if (q11 == 1668050025) {
                        if (byteBuffer == null) {
                            byteBuffer = a();
                        }
                        ByteBuffer byteBuffer2 = byteBuffer;
                        byteBuffer2.position(21);
                        byteBuffer2.putShort(h0Var.D());
                        byteBuffer2.putShort(h0Var.D());
                        byteBuffer = byteBuffer2;
                        mVar2 = mVar3;
                        i17 = i25;
                        str2 = str5;
                        f11 = i16 + q10;
                        i23 = i11;
                        i24 = i12;
                        eVar2 = eVar;
                        i25 = i17;
                        str5 = str2;
                        mVar3 = mVar2;
                    } else if (q11 == 1835295606) {
                        if (byteBuffer == null) {
                            byteBuffer = a();
                        }
                        ByteBuffer byteBuffer3 = byteBuffer;
                        short D = h0Var.D();
                        short D2 = h0Var.D();
                        short D3 = h0Var.D();
                        i17 = i25;
                        short D4 = h0Var.D();
                        str2 = str5;
                        short D5 = h0Var.D();
                        short D6 = h0Var.D();
                        mVar2 = mVar3;
                        short D7 = h0Var.D();
                        List list3 = list2;
                        short D8 = h0Var.D();
                        long J = h0Var.J();
                        long J2 = h0Var.J();
                        byteBuffer3.position(1);
                        byteBuffer3.putShort(D5);
                        byteBuffer3.putShort(D6);
                        byteBuffer3.putShort(D);
                        byteBuffer3.putShort(D2);
                        byteBuffer3.putShort(D3);
                        byteBuffer3.putShort(D4);
                        byteBuffer3.putShort(D7);
                        byteBuffer3.putShort(D8);
                        byteBuffer3.putShort((short) (J / 10000));
                        byteBuffer3.putShort((short) (J2 / 10000));
                        byteBuffer = byteBuffer3;
                        list2 = list3;
                        f12 = f12;
                        f11 = i16 + q10;
                        i23 = i11;
                        i24 = i12;
                        eVar2 = eVar;
                        i25 = i17;
                        str5 = str2;
                        mVar3 = mVar2;
                    } else {
                        mVar2 = mVar3;
                        i17 = i25;
                        str2 = str5;
                        f10 = f12;
                        list = list2;
                        if (q11 == 1681012275) {
                            if (str == null) {
                                z13 = true;
                            } else {
                                z13 = false;
                            }
                            tc.n.a(z13, null);
                            str = str2;
                        } else if (q11 == 1702061171) {
                            if (str == null) {
                                z12 = true;
                            } else {
                                z12 = false;
                            }
                            tc.n.a(z12, null);
                            c0101b = j(h0Var, f13);
                            String str7 = c0101b.f6387a;
                            byte[] bArr3 = c0101b.f6388b;
                            if (bArr3 != null) {
                                list2 = s.s(bArr3);
                            } else {
                                list2 = list;
                            }
                            str = str7;
                            f12 = f10;
                            f11 = i16 + q10;
                            i23 = i11;
                            i24 = i12;
                            eVar2 = eVar;
                            i25 = i17;
                            str5 = str2;
                            mVar3 = mVar2;
                        } else if (q11 == 1885434736) {
                            f12 = r(h0Var, f13);
                            list2 = list;
                            z19 = true;
                            f11 = i16 + q10;
                            i23 = i11;
                            i24 = i12;
                            eVar2 = eVar;
                            i25 = i17;
                            str5 = str2;
                            mVar3 = mVar2;
                        } else if (q11 == 1937126244) {
                            bArr2 = s(h0Var, f13, q10);
                        } else if (q11 == 1936995172) {
                            int H3 = h0Var.H();
                            h0Var.V(3);
                            if (H3 == 0) {
                                int H4 = h0Var.H();
                                if (H4 != 0) {
                                    if (H4 != 1) {
                                        if (H4 != 2) {
                                            if (H4 == 3) {
                                                i26 = 3;
                                            }
                                        } else {
                                            i26 = 2;
                                        }
                                    } else {
                                        i26 = 1;
                                    }
                                } else {
                                    i26 = 0;
                                }
                            }
                        } else {
                            i18 = i27;
                            if (q11 == 1668246642) {
                                i19 = i29;
                                if (i18 == -1 && i19 == -1) {
                                    int q12 = h0Var.q();
                                    if (q12 != 1852009592 && q12 != 1852009571) {
                                        y.i("AtomParsers", "Unsupported color type: " + bd.a.a(q12));
                                    } else {
                                        int N3 = h0Var.N();
                                        int N4 = h0Var.N();
                                        h0Var.V(2);
                                        if (q10 == 19 && (h0Var.H() & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                                            z11 = true;
                                        } else {
                                            z11 = false;
                                        }
                                        i27 = oe.c.h(N3);
                                        if (z11) {
                                            i28 = 1;
                                        } else {
                                            i28 = 2;
                                        }
                                        i29 = oe.c.i(N4);
                                    }
                                }
                            } else {
                                i19 = i29;
                            }
                        }
                        list2 = list;
                        f12 = f10;
                        f11 = i16 + q10;
                        i23 = i11;
                        i24 = i12;
                        eVar2 = eVar;
                        i25 = i17;
                        str5 = str2;
                        mVar3 = mVar2;
                    }
                    str = str3;
                    mVar2 = mVar3;
                    i17 = i25;
                    str2 = str5;
                    f11 = i16 + q10;
                    i23 = i11;
                    i24 = i12;
                    eVar2 = eVar;
                    i25 = i17;
                    str5 = str2;
                    mVar3 = mVar2;
                }
                i29 = i19;
                i27 = i18;
                list2 = list;
                f12 = f10;
                f11 = i16 + q10;
                i23 = i11;
                i24 = i12;
                eVar2 = eVar;
                i25 = i17;
                str5 = str2;
                mVar3 = mVar2;
            }
            i29 = i22;
            i27 = i20;
            mVar2 = mVar3;
            i16 = f11;
            i28 = i21;
            i17 = i25;
            str2 = str5;
            str = str4;
            f11 = i16 + q10;
            i23 = i11;
            i24 = i12;
            eVar2 = eVar;
            i25 = i17;
            str5 = str2;
            mVar3 = mVar2;
        }
        rc.m mVar4 = mVar3;
        float f14 = f12;
        List list4 = list2;
        int i30 = i27;
        int i31 = i29;
        if (str == null) {
            return;
        }
        Format.b O = new Format.b().T(i13).g0(str).K(str6).n0(N).S(N2).c0(f14).f0(i14).d0(bArr2).j0(i26).V(list4).O(mVar4);
        int i32 = i28;
        if (i30 != -1 || i32 != -1 || i31 != -1 || byteBuffer != null) {
            if (byteBuffer != null) {
                bArr = byteBuffer.array();
            } else {
                bArr = null;
            }
            O.L(new oe.c(i30, i32, i31, bArr));
        }
        if (c0101b != null) {
            O.I(li.e.k(c0101b.f6389c)).b0(li.e.k(c0101b.f6390d));
        }
        eVar.f6394b = O.G();
    }

    private static Metadata F(h0 h0Var) {
        short D = h0Var.D();
        h0Var.V(2);
        String E = h0Var.E(D);
        int max = Math.max(E.lastIndexOf(43), E.lastIndexOf(45));
        try {
            return new Metadata(new oc.b(Float.parseFloat(E.substring(0, max)), Float.parseFloat(E.substring(max, E.length() - 1))));
        } catch (IndexOutOfBoundsException | NumberFormatException unused) {
            return null;
        }
    }

    private static ByteBuffer a() {
        return ByteBuffer.allocate(25).order(ByteOrder.LITTLE_ENDIAN);
    }

    private static boolean b(long[] jArr, long j10, long j11, long j12) {
        int length = jArr.length - 1;
        int q10 = w0.q(4, 0, length);
        int q11 = w0.q(jArr.length - 4, 0, length);
        if (jArr[0] <= j11 && j11 < jArr[q10] && jArr[q11] < j12 && j12 <= j10) {
            return true;
        }
        return false;
    }

    private static boolean c(int i10) {
        if (i10 != 1) {
            return true;
        }
        return false;
    }

    private static int d(h0 h0Var, int i10, int i11, int i12) {
        boolean z10;
        boolean z11;
        int f10 = h0Var.f();
        if (f10 >= i11) {
            z10 = true;
        } else {
            z10 = false;
        }
        tc.n.a(z10, null);
        while (f10 - i11 < i12) {
            h0Var.U(f10);
            int q10 = h0Var.q();
            if (q10 > 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            tc.n.a(z11, "childAtomSize must be positive");
            if (h0Var.q() == i10) {
                return f10;
            }
            f10 += q10;
        }
        return -1;
    }

    private static int e(int i10) {
        if (i10 == 1936684398) {
            return 1;
        }
        if (i10 == 1986618469) {
            return 2;
        }
        if (i10 != 1952807028 && i10 != 1935832172 && i10 != 1937072756 && i10 != 1668047728) {
            if (i10 == 1835365473) {
                return 5;
            }
            return -1;
        }
        return 3;
    }

    public static void f(h0 h0Var) {
        int f10 = h0Var.f();
        h0Var.V(4);
        if (h0Var.q() != 1751411826) {
            f10 += 4;
        }
        h0Var.U(f10);
    }

    /* JADX WARN: Removed duplicated region for block: B:99:0x016a  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static void g(ne.h0 r22, int r23, int r24, int r25, int r26, java.lang.String r27, boolean r28, rc.m r29, bd.b.e r30, int r31) {
        /*
            Method dump skipped, instructions count: 862
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: bd.b.g(ne.h0, int, int, int, int, java.lang.String, boolean, rc.m, bd.b$e, int):void");
    }

    static Pair h(h0 h0Var, int i10, int i11) {
        boolean z10;
        boolean z11;
        int i12 = i10 + 8;
        boolean z12 = false;
        int i13 = -1;
        int i14 = 0;
        String str = null;
        Integer num = null;
        while (i12 - i10 < i11) {
            h0Var.U(i12);
            int q10 = h0Var.q();
            int q11 = h0Var.q();
            if (q11 == 1718775137) {
                num = Integer.valueOf(h0Var.q());
            } else if (q11 == 1935894637) {
                h0Var.V(4);
                str = h0Var.E(4);
            } else if (q11 == 1935894633) {
                i13 = i12;
                i14 = q10;
            }
            i12 += q10;
        }
        if (!"cenc".equals(str) && !"cbc1".equals(str) && !"cens".equals(str) && !"cbcs".equals(str)) {
            return null;
        }
        if (num != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        tc.n.a(z10, "frma atom is mandatory");
        if (i13 != -1) {
            z11 = true;
        } else {
            z11 = false;
        }
        tc.n.a(z11, "schi atom is mandatory");
        p u10 = u(h0Var, i13, i14, str);
        if (u10 != null) {
            z12 = true;
        }
        tc.n.a(z12, "tenc atom is mandatory");
        return Pair.create(num, (p) w0.j(u10));
    }

    private static Pair i(a.C0100a c0100a) {
        long J;
        long q10;
        a.b g10 = c0100a.g(1701606260);
        if (g10 == null) {
            return null;
        }
        h0 h0Var = g10.f6376b;
        h0Var.U(8);
        int c10 = bd.a.c(h0Var.q());
        int L = h0Var.L();
        long[] jArr = new long[L];
        long[] jArr2 = new long[L];
        for (int i10 = 0; i10 < L; i10++) {
            if (c10 == 1) {
                J = h0Var.M();
            } else {
                J = h0Var.J();
            }
            jArr[i10] = J;
            if (c10 == 1) {
                q10 = h0Var.A();
            } else {
                q10 = h0Var.q();
            }
            jArr2[i10] = q10;
            if (h0Var.D() == 1) {
                h0Var.V(2);
            } else {
                throw new IllegalArgumentException("Unsupported media rate.");
            }
        }
        return Pair.create(jArr, jArr2);
    }

    private static C0101b j(h0 h0Var, int i10) {
        long j10;
        h0Var.U(i10 + 12);
        h0Var.V(1);
        k(h0Var);
        h0Var.V(2);
        int H = h0Var.H();
        if ((H & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            h0Var.V(2);
        }
        if ((H & 64) != 0) {
            h0Var.V(h0Var.H());
        }
        if ((H & 32) != 0) {
            h0Var.V(2);
        }
        h0Var.V(1);
        k(h0Var);
        String h10 = c0.h(h0Var.H());
        if (!"audio/mpeg".equals(h10) && !"audio/vnd.dts".equals(h10) && !"audio/vnd.dts.hd".equals(h10)) {
            h0Var.V(4);
            long J = h0Var.J();
            long J2 = h0Var.J();
            h0Var.V(1);
            int k10 = k(h0Var);
            long j11 = J2;
            byte[] bArr = new byte[k10];
            h0Var.l(bArr, 0, k10);
            if (j11 <= 0) {
                j11 = -1;
            }
            if (J > 0) {
                j10 = J;
            } else {
                j10 = -1;
            }
            return new C0101b(h10, bArr, j11, j10);
        }
        return new C0101b(h10, null, -1L, -1L);
    }

    private static int k(h0 h0Var) {
        int H = h0Var.H();
        int i10 = H & 127;
        while ((H & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
            H = h0Var.H();
            i10 = (i10 << 7) | (H & 127);
        }
        return i10;
    }

    private static int l(h0 h0Var) {
        h0Var.U(16);
        return h0Var.q();
    }

    private static Metadata m(h0 h0Var, int i10) {
        h0Var.V(8);
        ArrayList arrayList = new ArrayList();
        while (h0Var.f() < i10) {
            Metadata.b c10 = bd.h.c(h0Var);
            if (c10 != null) {
                arrayList.add(c10);
            }
        }
        if (arrayList.isEmpty()) {
            return null;
        }
        return new Metadata(arrayList);
    }

    private static Pair n(h0 h0Var) {
        int i10;
        int i11 = 8;
        h0Var.U(8);
        int c10 = bd.a.c(h0Var.q());
        if (c10 == 0) {
            i10 = 8;
        } else {
            i10 = 16;
        }
        h0Var.V(i10);
        long J = h0Var.J();
        if (c10 == 0) {
            i11 = 4;
        }
        h0Var.V(i11);
        int N = h0Var.N();
        return Pair.create(Long.valueOf(J), "" + ((char) (((N >> 10) & 31) + 96)) + ((char) (((N >> 5) & 31) + 96)) + ((char) ((N & 31) + 96)));
    }

    public static Metadata o(a.C0100a c0100a) {
        a.b g10 = c0100a.g(1751411826);
        a.b g11 = c0100a.g(1801812339);
        a.b g12 = c0100a.g(1768715124);
        if (g10 == null || g11 == null || g12 == null || l(g10.f6376b) != 1835299937) {
            return null;
        }
        h0 h0Var = g11.f6376b;
        h0Var.U(12);
        int q10 = h0Var.q();
        String[] strArr = new String[q10];
        for (int i10 = 0; i10 < q10; i10++) {
            int q11 = h0Var.q();
            h0Var.V(4);
            strArr[i10] = h0Var.E(q11 - 8);
        }
        h0 h0Var2 = g12.f6376b;
        h0Var2.U(8);
        ArrayList arrayList = new ArrayList();
        while (h0Var2.a() > 8) {
            int f10 = h0Var2.f();
            int q12 = h0Var2.q();
            int q13 = h0Var2.q() - 1;
            if (q13 >= 0 && q13 < q10) {
                md.a f11 = bd.h.f(h0Var2, f10 + q12, strArr[q13]);
                if (f11 != null) {
                    arrayList.add(f11);
                }
            } else {
                y.i("AtomParsers", "Skipped metadata with unknown key index: " + q13);
            }
            h0Var2.U(f10 + q12);
        }
        if (arrayList.isEmpty()) {
            return null;
        }
        return new Metadata(arrayList);
    }

    private static void p(h0 h0Var, int i10, int i11, int i12, e eVar) {
        h0Var.U(i11 + 16);
        if (i10 == 1835365492) {
            h0Var.B();
            String B = h0Var.B();
            if (B != null) {
                eVar.f6394b = new Format.b().T(i12).g0(B).G();
            }
        }
    }

    public static c q(h0 h0Var) {
        long j10;
        h0Var.U(8);
        if (bd.a.c(h0Var.q()) == 0) {
            j10 = h0Var.J();
            h0Var.V(4);
        } else {
            long A = h0Var.A();
            h0Var.V(8);
            j10 = A;
        }
        return new c(new Metadata(new oc.a((j10 - 2082844800) * 1000)), h0Var.J());
    }

    private static float r(h0 h0Var, int i10) {
        h0Var.U(i10 + 8);
        return h0Var.L() / h0Var.L();
    }

    private static byte[] s(h0 h0Var, int i10, int i11) {
        int i12 = i10 + 8;
        while (i12 - i10 < i11) {
            h0Var.U(i12);
            int q10 = h0Var.q();
            if (h0Var.q() == 1886547818) {
                return Arrays.copyOfRange(h0Var.e(), i12, q10 + i12);
            }
            i12 += q10;
        }
        return null;
    }

    private static Pair t(h0 h0Var, int i10, int i11) {
        boolean z10;
        Pair h10;
        int f10 = h0Var.f();
        while (f10 - i10 < i11) {
            h0Var.U(f10);
            int q10 = h0Var.q();
            if (q10 > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            tc.n.a(z10, "childAtomSize must be positive");
            if (h0Var.q() == 1936289382 && (h10 = h(h0Var, f10, q10)) != null) {
                return h10;
            }
            f10 += q10;
        }
        return null;
    }

    private static p u(h0 h0Var, int i10, int i11, String str) {
        int i12;
        int i13;
        boolean z10;
        int i14 = i10 + 8;
        while (true) {
            byte[] bArr = null;
            if (i14 - i10 >= i11) {
                return null;
            }
            h0Var.U(i14);
            int q10 = h0Var.q();
            if (h0Var.q() == 1952804451) {
                int c10 = bd.a.c(h0Var.q());
                h0Var.V(1);
                if (c10 == 0) {
                    h0Var.V(1);
                    i13 = 0;
                    i12 = 0;
                } else {
                    int H = h0Var.H();
                    i12 = H & 15;
                    i13 = (H & 240) >> 4;
                }
                if (h0Var.H() == 1) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                int H2 = h0Var.H();
                byte[] bArr2 = new byte[16];
                h0Var.l(bArr2, 0, 16);
                if (z10 && H2 == 0) {
                    int H3 = h0Var.H();
                    bArr = new byte[H3];
                    h0Var.l(bArr, 0, H3);
                }
                return new p(z10, str, H2, bArr2, i13, i12, bArr);
            }
            i14 += q10;
        }
    }

    private static Metadata v(h0 h0Var, int i10) {
        float f10;
        h0Var.V(12);
        while (h0Var.f() < i10) {
            int f11 = h0Var.f();
            int q10 = h0Var.q();
            if (h0Var.q() == 1935766900) {
                if (q10 < 14) {
                    return null;
                }
                h0Var.V(5);
                int H = h0Var.H();
                if (H != 12 && H != 13) {
                    return null;
                }
                if (H == 12) {
                    f10 = 240.0f;
                } else {
                    f10 = 120.0f;
                }
                h0Var.V(1);
                return new Metadata(new md.e(f10, h0Var.H()));
            }
            h0Var.U(f11 + q10);
        }
        return null;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r10v15 */
    /* JADX WARN: Type inference failed for: r10v16, types: [boolean] */
    /* JADX WARN: Type inference failed for: r10v18 */
    /* JADX WARN: Type inference failed for: r11v17 */
    /* JADX WARN: Type inference failed for: r11v18 */
    /* JADX WARN: Type inference failed for: r11v23, types: [boolean] */
    private static r w(o oVar, a.C0100a c0100a, v vVar) {
        d gVar;
        boolean z10;
        h0 h0Var;
        h0 h0Var2;
        int i10;
        int i11;
        int i12;
        int i13;
        int i14;
        long j10;
        long[] jArr;
        int i15;
        int i16;
        long j11;
        int i17;
        String str;
        int[] iArr;
        long[] jArr2;
        int i18;
        int[] iArr2;
        int i19;
        ?? r10;
        int[] iArr3;
        int i20;
        long[] jArr3;
        int[] iArr4;
        int[] iArr5;
        int[] iArr6;
        long j12;
        int[] iArr7;
        int i21;
        ?? r11;
        int i22;
        int i23;
        int i24;
        a.b g10 = c0100a.g(1937011578);
        if (g10 != null) {
            gVar = new f(g10, oVar.f6511f);
        } else {
            a.b g11 = c0100a.g(1937013298);
            if (g11 != null) {
                gVar = new g(g11);
            } else {
                throw l0.a("Track has no sample table size information", null);
            }
        }
        int c10 = gVar.c();
        if (c10 == 0) {
            return new r(oVar, new long[0], new int[0], 0, new long[0], new int[0], 0L);
        }
        a.b g12 = c0100a.g(1937007471);
        if (g12 == null) {
            g12 = (a.b) ne.a.e(c0100a.g(1668232756));
            z10 = true;
        } else {
            z10 = false;
        }
        h0 h0Var3 = g12.f6376b;
        h0 h0Var4 = ((a.b) ne.a.e(c0100a.g(1937011555))).f6376b;
        h0 h0Var5 = ((a.b) ne.a.e(c0100a.g(1937011827))).f6376b;
        a.b g13 = c0100a.g(1937011571);
        if (g13 != null) {
            h0Var = g13.f6376b;
        } else {
            h0Var = null;
        }
        a.b g14 = c0100a.g(1668576371);
        if (g14 != null) {
            h0Var2 = g14.f6376b;
        } else {
            h0Var2 = null;
        }
        a aVar = new a(h0Var4, h0Var3, z10);
        h0Var5.U(12);
        int L = h0Var5.L() - 1;
        int L2 = h0Var5.L();
        int L3 = h0Var5.L();
        if (h0Var2 != null) {
            h0Var2.U(12);
            i10 = h0Var2.L();
        } else {
            i10 = 0;
        }
        if (h0Var != null) {
            h0Var.U(12);
            i12 = h0Var.L();
            if (i12 > 0) {
                i11 = h0Var.L() - 1;
                i13 = 0;
            } else {
                i11 = -1;
                i13 = 0;
                h0Var = null;
            }
        } else {
            i11 = -1;
            i12 = 0;
            i13 = 0;
        }
        int b10 = gVar.b();
        String str2 = oVar.f6511f.f11303w;
        if (b10 != -1 && (("audio/raw".equals(str2) || "audio/g711-mlaw".equals(str2) || "audio/g711-alaw".equals(str2)) && L == 0 && i10 == 0 && i12 == 0)) {
            i14 = 1;
        } else {
            i14 = i13;
        }
        d dVar = gVar;
        if (i14 != 0) {
            int i25 = aVar.f6378a;
            long[] jArr4 = new long[i25];
            int[] iArr8 = new int[i25];
            while (aVar.a()) {
                int i26 = aVar.f6379b;
                jArr4[i26] = aVar.f6381d;
                iArr8[i26] = aVar.f6380c;
            }
            d.b a10 = bd.d.a(b10, jArr4, iArr8, L3);
            long[] jArr5 = a10.f6415a;
            iArr = a10.f6416b;
            int i27 = a10.f6417c;
            long[] jArr6 = a10.f6418d;
            int[] iArr9 = a10.f6419e;
            j11 = a10.f6420f;
            jArr2 = jArr5;
            i18 = i27;
            jArr = jArr6;
            iArr2 = iArr9;
            j10 = 0;
        } else {
            long[] jArr7 = new long[c10];
            j10 = 0;
            int[] iArr10 = new int[c10];
            jArr = new long[c10];
            h0 h0Var6 = h0Var2;
            int[] iArr11 = new int[c10];
            h0 h0Var7 = h0Var;
            int i28 = i11;
            int i29 = i13;
            int i30 = i29;
            int i31 = i30;
            int i32 = i31;
            long j13 = 0;
            long j14 = 0;
            int i33 = i10;
            int i34 = L3;
            int i35 = L2;
            int i36 = L;
            int i37 = i32;
            while (true) {
                if (i29 < c10) {
                    long j15 = j14;
                    int i38 = i31;
                    boolean z11 = true;
                    while (i38 == 0) {
                        z11 = aVar.a();
                        if (!z11) {
                            break;
                        }
                        int i39 = i35;
                        long j16 = aVar.f6381d;
                        i38 = aVar.f6380c;
                        j15 = j16;
                        i35 = i39;
                        i34 = i34;
                        c10 = c10;
                    }
                    int i40 = c10;
                    i15 = i35;
                    int i41 = i34;
                    if (!z11) {
                        y.i("AtomParsers", "Unexpected end of chunk data");
                        long[] copyOf = Arrays.copyOf(jArr7, i29);
                        iArr10 = Arrays.copyOf(iArr10, i29);
                        jArr = Arrays.copyOf(jArr, i29);
                        iArr11 = Arrays.copyOf(iArr11, i29);
                        jArr7 = copyOf;
                        c10 = i29;
                        i16 = i38;
                        break;
                    }
                    if (h0Var6 != null) {
                        int i42 = i32;
                        while (i42 == 0 && i33 > 0) {
                            i42 = h0Var6.L();
                            i30 = h0Var6.q();
                            i33--;
                        }
                        i32 = i42 - 1;
                    }
                    jArr7[i29] = j15;
                    int a11 = dVar.a();
                    iArr10[i29] = a11;
                    if (a11 > i37) {
                        i37 = a11;
                    }
                    jArr[i29] = j13 + i30;
                    if (h0Var7 == null) {
                        i19 = 1;
                    } else {
                        i19 = i13;
                    }
                    iArr11[i29] = i19;
                    if (i29 == i28) {
                        iArr11[i29] = 1;
                        i12--;
                        if (i12 > 0) {
                            i28 = ((h0) ne.a.e(h0Var7)).L() - 1;
                        }
                    }
                    j13 += i41;
                    int i43 = i15 - 1;
                    if (i43 == 0 && i36 > 0) {
                        i43 = h0Var5.L();
                        i36--;
                        i34 = h0Var5.q();
                    } else {
                        i34 = i41;
                    }
                    i35 = i43;
                    i31 = i38 - 1;
                    i29++;
                    j14 = j15 + iArr10[i29];
                    c10 = i40;
                } else {
                    i15 = i35;
                    i16 = i31;
                    break;
                }
            }
            j11 = j13 + i30;
            if (h0Var6 != null) {
                while (i33 > 0) {
                    if (h0Var6.L() != 0) {
                        i17 = i13;
                        break;
                    }
                    h0Var6.q();
                    i33--;
                }
            }
            i17 = 1;
            if (i12 != 0 || i15 != 0 || i16 != 0 || i36 != 0 || i32 != 0 || i17 == 0) {
                StringBuilder sb2 = new StringBuilder();
                sb2.append("Inconsistent stbl box for track ");
                sb2.append(oVar.f6506a);
                sb2.append(": remainingSynchronizationSamples ");
                sb2.append(i12);
                sb2.append(", remainingSamplesAtTimestampDelta ");
                sb2.append(i15);
                sb2.append(", remainingSamplesInChunk ");
                sb2.append(i16);
                sb2.append(", remainingTimestampDeltaChanges ");
                sb2.append(i36);
                sb2.append(", remainingSamplesAtTimestampOffset ");
                sb2.append(i32);
                if (i17 == 0) {
                    str = ", ctts invalid";
                } else {
                    str = "";
                }
                sb2.append(str);
                y.i("AtomParsers", sb2.toString());
            }
            iArr = iArr10;
            jArr2 = jArr7;
            i18 = i37;
            iArr2 = iArr11;
        }
        long j17 = j11;
        long X0 = w0.X0(j17, 1000000L, oVar.f6508c);
        long[] jArr8 = oVar.f6513h;
        if (jArr8 == null) {
            w0.Z0(jArr, 1000000L, oVar.f6508c);
            return new r(oVar, jArr2, iArr, i18, jArr, iArr2, X0);
        }
        int[] iArr12 = iArr;
        int i44 = c10;
        int[] iArr13 = iArr12;
        if (jArr8.length == 1 && oVar.f6507b == 1 && jArr.length >= 2) {
            long j18 = ((long[]) ne.a.e(oVar.f6514i))[i13];
            long X02 = j18 + w0.X0(oVar.f6513h[i13], oVar.f6508c, oVar.f6509d);
            long[] jArr9 = jArr2;
            long[] jArr10 = jArr;
            boolean b11 = b(jArr10, j17, j18, X02);
            jArr = jArr10;
            j17 = j17;
            if (b11) {
                long X03 = w0.X0(j18 - jArr[i13], oVar.f6511f.K, oVar.f6508c);
                long X04 = w0.X0(j17 - X02, oVar.f6511f.K, oVar.f6508c);
                if ((X03 != j10 || X04 != j10) && X03 <= 2147483647L && X04 <= 2147483647L) {
                    vVar.f49994a = (int) X03;
                    vVar.f49995b = (int) X04;
                    w0.Z0(jArr, 1000000L, oVar.f6508c);
                    return new r(oVar, jArr9, iArr13, i18, jArr, iArr2, w0.X0(oVar.f6513h[i13], 1000000L, oVar.f6509d));
                }
            }
            jArr2 = jArr9;
            iArr13 = iArr13;
        }
        long[] jArr11 = oVar.f6513h;
        if (jArr11.length == 1 && jArr11[i13] == j10) {
            long j19 = ((long[]) ne.a.e(oVar.f6514i))[i13];
            for (int i45 = i13; i45 < jArr.length; i45++) {
                jArr[i45] = w0.X0(jArr[i45] - j19, 1000000L, oVar.f6508c);
            }
            return new r(oVar, jArr2, iArr13, i18, jArr, iArr2, w0.X0(j17 - j19, 1000000L, oVar.f6508c));
        }
        if (oVar.f6507b == 1) {
            r10 = 1;
        } else {
            r10 = i13;
        }
        int[] iArr14 = new int[jArr11.length];
        int[] iArr15 = new int[jArr11.length];
        long[] jArr12 = (long[]) ne.a.e(oVar.f6514i);
        int i46 = i13;
        int i47 = i46;
        int i48 = i47;
        int i49 = i48;
        while (true) {
            long[] jArr13 = oVar.f6513h;
            iArr3 = iArr15;
            if (i46 >= jArr13.length) {
                break;
            }
            int[] iArr16 = iArr14;
            long[] jArr14 = jArr12;
            long j20 = jArr14[i46];
            if (j20 != -1) {
                long j21 = jArr13[i46];
                i21 = i46;
                int i50 = i47;
                long X05 = w0.X0(j21, oVar.f6508c, oVar.f6509d);
                iArr7 = iArr16;
                iArr7[i21] = w0.i(jArr, j20, true, true);
                long j22 = j20 + X05;
                r11 = i13;
                iArr3[i21] = w0.e(jArr, j22, r10, r11);
                while (true) {
                    i22 = iArr7[i21];
                    i23 = iArr3[i21];
                    if (i22 >= i23 || (iArr2[i22] & 1) != 0) {
                        break;
                    }
                    iArr7[i21] = i22 + 1;
                }
                i48 += i23 - i22;
                if (i49 != i22) {
                    i24 = 1;
                } else {
                    i24 = r11 == true ? 1 : 0;
                }
                i47 = i50 | i24;
                i49 = i23;
            } else {
                iArr7 = iArr16;
                i21 = i46;
                r11 = i13;
            }
            jArr12 = jArr14;
            i13 = r11;
            iArr15 = iArr3;
            i46 = i21 + 1;
            iArr14 = iArr7;
        }
        int[] iArr17 = iArr14;
        int i51 = i47;
        int i52 = i13;
        if (i48 != i44) {
            i20 = 1;
        } else {
            i20 = i52;
        }
        int i53 = i51 | i20;
        if (i53 != 0) {
            jArr3 = new long[i48];
        } else {
            jArr3 = jArr2;
        }
        if (i53 != 0) {
            iArr4 = new int[i48];
        } else {
            iArr4 = iArr13;
        }
        if (i53 != 0) {
            i18 = i52;
        }
        if (i53 != 0) {
            iArr5 = new int[i48];
        } else {
            iArr5 = iArr2;
        }
        long[] jArr15 = new long[i48];
        int i54 = i52;
        long j23 = j10;
        while (i52 < oVar.f6513h.length) {
            long j24 = oVar.f6514i[i52];
            int i55 = iArr17[i52];
            int i56 = i53;
            int i57 = iArr3[i52];
            int i58 = i18;
            if (i56 != 0) {
                int i59 = i57 - i55;
                System.arraycopy(jArr2, i55, jArr3, i54, i59);
                System.arraycopy(iArr13, i55, iArr4, i54, i59);
                System.arraycopy(iArr2, i55, iArr5, i54, i59);
            }
            i18 = i58;
            while (i55 < i57) {
                long[] jArr16 = jArr2;
                int[] iArr18 = iArr13;
                long X06 = w0.X0(j23, 1000000L, oVar.f6509d);
                long X07 = w0.X0(jArr[i55] - j24, 1000000L, oVar.f6508c);
                int i60 = i57;
                long[] jArr17 = jArr;
                if (c(oVar.f6507b)) {
                    iArr6 = iArr2;
                    j12 = j10;
                    X07 = Math.max(j12, X07);
                } else {
                    iArr6 = iArr2;
                    j12 = j10;
                }
                jArr15[i54] = X06 + X07;
                if (i56 != 0 && iArr4[i54] > i18) {
                    i18 = iArr18[i55];
                }
                i54++;
                i55++;
                j10 = j12;
                jArr2 = jArr16;
                iArr13 = iArr18;
                jArr = jArr17;
                iArr2 = iArr6;
                i57 = i60;
            }
            j23 += oVar.f6513h[i52];
            i52++;
            jArr2 = jArr2;
            jArr = jArr;
            iArr2 = iArr2;
            i53 = i56;
        }
        return new r(oVar, jArr3, iArr4, i18, jArr15, iArr5, w0.X0(j23, 1000000L, oVar.f6509d));
    }

    private static e x(h0 h0Var, int i10, int i11, String str, rc.m mVar, boolean z10) {
        boolean z11;
        h0Var.U(12);
        int q10 = h0Var.q();
        e eVar = new e(q10);
        int i12 = 0;
        while (i12 < q10) {
            int f10 = h0Var.f();
            int q11 = h0Var.q();
            if (q11 > 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            tc.n.a(z11, "childAtomSize must be positive");
            int q12 = h0Var.q();
            if (q12 == 1635148593 || q12 == 1635148595 || q12 == 1701733238 || q12 == 1831958048 || q12 == 1836070006 || q12 == 1752589105 || q12 == 1751479857 || q12 == 1932670515 || q12 == 1211250227 || q12 == 1987063864 || q12 == 1987063865 || q12 == 1635135537 || q12 == 1685479798 || q12 == 1685479729 || q12 == 1685481573 || q12 == 1685481521) {
                e eVar2 = eVar;
                int i13 = i12;
                E(h0Var, q12, f10, q11, i10, i11, mVar, eVar2, i13);
                eVar = eVar2;
                i12 = i13;
            } else if (q12 == 1836069985 || q12 == 1701733217 || q12 == 1633889587 || q12 == 1700998451 || q12 == 1633889588 || q12 == 1835823201 || q12 == 1685353315 || q12 == 1685353317 || q12 == 1685353320 || q12 == 1685353324 || q12 == 1685353336 || q12 == 1935764850 || q12 == 1935767394 || q12 == 1819304813 || q12 == 1936684916 || q12 == 1953984371 || q12 == 778924082 || q12 == 778924083 || q12 == 1835557169 || q12 == 1835560241 || q12 == 1634492771 || q12 == 1634492791 || q12 == 1970037111 || q12 == 1332770163 || q12 == 1716281667) {
                e eVar3 = eVar;
                g(h0Var, q12, f10, q11, i10, str, z10, mVar, eVar3, i12);
                eVar = eVar3;
            } else if (q12 != 1414810956 && q12 != 1954034535 && q12 != 2004251764 && q12 != 1937010800 && q12 != 1664495672) {
                if (q12 == 1835365492) {
                    p(h0Var, q12, f10, i10, eVar);
                } else if (q12 == 1667329389) {
                    eVar.f6394b = new Format.b().T(i10).g0("application/x-camera-motion").G();
                }
            } else {
                y(h0Var, q12, f10, q11, i10, str, eVar);
            }
            h0Var.U(f10 + q11);
            i12++;
        }
        return eVar;
    }

    private static void y(h0 h0Var, int i10, int i11, int i12, int i13, String str, e eVar) {
        h0Var.U(i11 + 16);
        String str2 = "application/ttml+xml";
        s sVar = null;
        long j10 = LongCompanionObject.MAX_VALUE;
        if (i10 != 1414810956) {
            if (i10 == 1954034535) {
                int i14 = i12 - 16;
                byte[] bArr = new byte[i14];
                h0Var.l(bArr, 0, i14);
                sVar = s.s(bArr);
                str2 = "application/x-quicktime-tx3g";
            } else if (i10 == 2004251764) {
                str2 = "application/x-mp4-vtt";
            } else if (i10 == 1937010800) {
                j10 = 0;
            } else if (i10 == 1664495672) {
                eVar.f6396d = 1;
                str2 = "application/x-mp4-cea-608";
            } else {
                throw new IllegalStateException();
            }
        }
        eVar.f6394b = new Format.b().T(i13).g0(str2).X(str).k0(j10).V(sVar).G();
    }

    private static h z(h0 h0Var) {
        int i10;
        long j10;
        long M;
        int i11 = 8;
        h0Var.U(8);
        int c10 = bd.a.c(h0Var.q());
        if (c10 == 0) {
            i10 = 8;
        } else {
            i10 = 16;
        }
        h0Var.V(i10);
        int q10 = h0Var.q();
        h0Var.V(4);
        int f10 = h0Var.f();
        if (c10 == 0) {
            i11 = 4;
        }
        int i12 = 0;
        int i13 = 0;
        while (true) {
            j10 = -9223372036854775807L;
            if (i13 < i11) {
                if (h0Var.e()[f10 + i13] != -1) {
                    if (c10 == 0) {
                        M = h0Var.J();
                    } else {
                        M = h0Var.M();
                    }
                    if (M != 0) {
                        j10 = M;
                    }
                } else {
                    i13++;
                }
            } else {
                h0Var.V(i11);
                break;
            }
        }
        h0Var.V(16);
        int q11 = h0Var.q();
        int q12 = h0Var.q();
        h0Var.V(4);
        int q13 = h0Var.q();
        int q14 = h0Var.q();
        if (q11 == 0 && q12 == 65536 && q13 == -65536 && q14 == 0) {
            i12 = 90;
        } else if (q11 == 0 && q12 == -65536 && q13 == 65536 && q14 == 0) {
            i12 = 270;
        } else if (q11 == -65536 && q12 == 0 && q13 == 0 && q14 == -65536) {
            i12 = 180;
        }
        return new h(q10, j10, i12);
    }
}
