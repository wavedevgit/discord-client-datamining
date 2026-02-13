package zd;

import android.net.Uri;
import cd.p;
import com.google.android.exoplayer2.Format;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
import oe.u0;
import oe.w0;
import qd.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements qd.a {

    /* renamed from: a  reason: collision with root package name */
    public final int f56928a;

    /* renamed from: b  reason: collision with root package name */
    public final int f56929b;

    /* renamed from: c  reason: collision with root package name */
    public final int f56930c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f56931d;

    /* renamed from: e  reason: collision with root package name */
    public final C0799a f56932e;

    /* renamed from: f  reason: collision with root package name */
    public final b[] f56933f;

    /* renamed from: g  reason: collision with root package name */
    public final long f56934g;

    /* renamed from: h  reason: collision with root package name */
    public final long f56935h;

    /* renamed from: zd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0799a {

        /* renamed from: a  reason: collision with root package name */
        public final UUID f56936a;

        /* renamed from: b  reason: collision with root package name */
        public final byte[] f56937b;

        /* renamed from: c  reason: collision with root package name */
        public final p[] f56938c;

        public C0799a(UUID uuid, byte[] bArr, p[] pVarArr) {
            this.f56936a = uuid;
            this.f56937b = bArr;
            this.f56938c = pVarArr;
        }
    }

    public a(int i10, int i11, long j10, long j11, long j12, int i12, boolean z10, C0799a c0799a, b[] bVarArr) {
        this(i10, i11, j11 == 0 ? -9223372036854775807L : w0.X0(j11, 1000000L, j10), j12 != 0 ? w0.X0(j12, 1000000L, j10) : -9223372036854775807L, i12, z10, c0799a, bVarArr);
    }

    @Override // qd.a
    /* renamed from: b */
    public final a a(List list) {
        ArrayList arrayList = new ArrayList(list);
        Collections.sort(arrayList);
        ArrayList arrayList2 = new ArrayList();
        ArrayList arrayList3 = new ArrayList();
        b bVar = null;
        int i10 = 0;
        while (i10 < arrayList.size()) {
            c cVar = (c) arrayList.get(i10);
            b bVar2 = this.f56933f[cVar.f44599e];
            if (bVar2 != bVar && bVar != null) {
                arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
                arrayList3.clear();
            }
            arrayList3.add(bVar2.f56948j[cVar.f44600i]);
            i10++;
            bVar = bVar2;
        }
        if (bVar != null) {
            arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
        }
        return new a(this.f56928a, this.f56929b, this.f56934g, this.f56935h, this.f56930c, this.f56931d, this.f56932e, (b[]) arrayList2.toArray(new b[0]));
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f56939a;

        /* renamed from: b  reason: collision with root package name */
        public final String f56940b;

        /* renamed from: c  reason: collision with root package name */
        public final long f56941c;

        /* renamed from: d  reason: collision with root package name */
        public final String f56942d;

        /* renamed from: e  reason: collision with root package name */
        public final int f56943e;

        /* renamed from: f  reason: collision with root package name */
        public final int f56944f;

        /* renamed from: g  reason: collision with root package name */
        public final int f56945g;

        /* renamed from: h  reason: collision with root package name */
        public final int f56946h;

        /* renamed from: i  reason: collision with root package name */
        public final String f56947i;

        /* renamed from: j  reason: collision with root package name */
        public final Format[] f56948j;

        /* renamed from: k  reason: collision with root package name */
        public final int f56949k;

        /* renamed from: l  reason: collision with root package name */
        private final String f56950l;

        /* renamed from: m  reason: collision with root package name */
        private final String f56951m;

        /* renamed from: n  reason: collision with root package name */
        private final List f56952n;

        /* renamed from: o  reason: collision with root package name */
        private final long[] f56953o;

        /* renamed from: p  reason: collision with root package name */
        private final long f56954p;

        public b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long j11) {
            this(str, str2, i10, str3, j10, str4, i11, i12, i13, i14, str5, formatArr, list, w0.Y0(list, 1000000L, j10), w0.X0(j11, 1000000L, j10));
        }

        public Uri a(int i10, int i11) {
            boolean z10;
            boolean z11;
            boolean z12 = false;
            if (this.f56948j != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            if (this.f56952n != null) {
                z11 = true;
            } else {
                z11 = false;
            }
            oe.a.g(z11);
            if (i11 < this.f56952n.size()) {
                z12 = true;
            }
            oe.a.g(z12);
            String num = Integer.toString(this.f56948j[i10].f12301s);
            String l10 = ((Long) this.f56952n.get(i11)).toString();
            return u0.e(this.f56950l, this.f56951m.replace("{bitrate}", num).replace("{Bitrate}", num).replace("{start time}", l10).replace("{start_time}", l10));
        }

        public b b(Format[] formatArr) {
            return new b(this.f56950l, this.f56951m, this.f56939a, this.f56940b, this.f56941c, this.f56942d, this.f56943e, this.f56944f, this.f56945g, this.f56946h, this.f56947i, formatArr, this.f56952n, this.f56953o, this.f56954p);
        }

        public long c(int i10) {
            if (i10 == this.f56949k - 1) {
                return this.f56954p;
            }
            long[] jArr = this.f56953o;
            return jArr[i10 + 1] - jArr[i10];
        }

        public int d(long j10) {
            return w0.i(this.f56953o, j10, true, true);
        }

        public long e(int i10) {
            return this.f56953o[i10];
        }

        private b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long[] jArr, long j11) {
            this.f56950l = str;
            this.f56951m = str2;
            this.f56939a = i10;
            this.f56940b = str3;
            this.f56941c = j10;
            this.f56942d = str4;
            this.f56943e = i11;
            this.f56944f = i12;
            this.f56945g = i13;
            this.f56946h = i14;
            this.f56947i = str5;
            this.f56948j = formatArr;
            this.f56952n = list;
            this.f56953o = jArr;
            this.f56954p = j11;
            this.f56949k = list.size();
        }
    }

    private a(int i10, int i11, long j10, long j11, int i12, boolean z10, C0799a c0799a, b[] bVarArr) {
        this.f56928a = i10;
        this.f56929b = i11;
        this.f56934g = j10;
        this.f56935h = j11;
        this.f56930c = i12;
        this.f56931d = z10;
        this.f56932e = c0799a;
        this.f56933f = bVarArr;
    }
}
