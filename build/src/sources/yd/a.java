package yd;

import android.net.Uri;
import bd.p;
import com.google.android.exoplayer2.Format;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
import ne.u0;
import ne.w0;
import pd.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements pd.a {

    /* renamed from: a  reason: collision with root package name */
    public final int f55247a;

    /* renamed from: b  reason: collision with root package name */
    public final int f55248b;

    /* renamed from: c  reason: collision with root package name */
    public final int f55249c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f55250d;

    /* renamed from: e  reason: collision with root package name */
    public final C0748a f55251e;

    /* renamed from: f  reason: collision with root package name */
    public final b[] f55252f;

    /* renamed from: g  reason: collision with root package name */
    public final long f55253g;

    /* renamed from: h  reason: collision with root package name */
    public final long f55254h;

    /* renamed from: yd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0748a {

        /* renamed from: a  reason: collision with root package name */
        public final UUID f55255a;

        /* renamed from: b  reason: collision with root package name */
        public final byte[] f55256b;

        /* renamed from: c  reason: collision with root package name */
        public final p[] f55257c;

        public C0748a(UUID uuid, byte[] bArr, p[] pVarArr) {
            this.f55255a = uuid;
            this.f55256b = bArr;
            this.f55257c = pVarArr;
        }
    }

    public a(int i10, int i11, long j10, long j11, long j12, int i12, boolean z10, C0748a c0748a, b[] bVarArr) {
        this(i10, i11, j11 == 0 ? -9223372036854775807L : w0.X0(j11, 1000000L, j10), j12 != 0 ? w0.X0(j12, 1000000L, j10) : -9223372036854775807L, i12, z10, c0748a, bVarArr);
    }

    @Override // pd.a
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
            b bVar2 = this.f55252f[cVar.f43800e];
            if (bVar2 != bVar && bVar != null) {
                arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
                arrayList3.clear();
            }
            arrayList3.add(bVar2.f55267j[cVar.f43801i]);
            i10++;
            bVar = bVar2;
        }
        if (bVar != null) {
            arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
        }
        return new a(this.f55247a, this.f55248b, this.f55253g, this.f55254h, this.f55249c, this.f55250d, this.f55251e, (b[]) arrayList2.toArray(new b[0]));
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f55258a;

        /* renamed from: b  reason: collision with root package name */
        public final String f55259b;

        /* renamed from: c  reason: collision with root package name */
        public final long f55260c;

        /* renamed from: d  reason: collision with root package name */
        public final String f55261d;

        /* renamed from: e  reason: collision with root package name */
        public final int f55262e;

        /* renamed from: f  reason: collision with root package name */
        public final int f55263f;

        /* renamed from: g  reason: collision with root package name */
        public final int f55264g;

        /* renamed from: h  reason: collision with root package name */
        public final int f55265h;

        /* renamed from: i  reason: collision with root package name */
        public final String f55266i;

        /* renamed from: j  reason: collision with root package name */
        public final Format[] f55267j;

        /* renamed from: k  reason: collision with root package name */
        public final int f55268k;

        /* renamed from: l  reason: collision with root package name */
        private final String f55269l;

        /* renamed from: m  reason: collision with root package name */
        private final String f55270m;

        /* renamed from: n  reason: collision with root package name */
        private final List f55271n;

        /* renamed from: o  reason: collision with root package name */
        private final long[] f55272o;

        /* renamed from: p  reason: collision with root package name */
        private final long f55273p;

        public b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long j11) {
            this(str, str2, i10, str3, j10, str4, i11, i12, i13, i14, str5, formatArr, list, w0.Y0(list, 1000000L, j10), w0.X0(j11, 1000000L, j10));
        }

        public Uri a(int i10, int i11) {
            boolean z10;
            boolean z11;
            boolean z12 = false;
            if (this.f55267j != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            if (this.f55271n != null) {
                z11 = true;
            } else {
                z11 = false;
            }
            ne.a.g(z11);
            if (i11 < this.f55271n.size()) {
                z12 = true;
            }
            ne.a.g(z12);
            String num = Integer.toString(this.f55267j[i10].f11583s);
            String l10 = ((Long) this.f55271n.get(i11)).toString();
            return u0.e(this.f55269l, this.f55270m.replace("{bitrate}", num).replace("{Bitrate}", num).replace("{start time}", l10).replace("{start_time}", l10));
        }

        public b b(Format[] formatArr) {
            return new b(this.f55269l, this.f55270m, this.f55258a, this.f55259b, this.f55260c, this.f55261d, this.f55262e, this.f55263f, this.f55264g, this.f55265h, this.f55266i, formatArr, this.f55271n, this.f55272o, this.f55273p);
        }

        public long c(int i10) {
            if (i10 == this.f55268k - 1) {
                return this.f55273p;
            }
            long[] jArr = this.f55272o;
            return jArr[i10 + 1] - jArr[i10];
        }

        public int d(long j10) {
            return w0.i(this.f55272o, j10, true, true);
        }

        public long e(int i10) {
            return this.f55272o[i10];
        }

        private b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long[] jArr, long j11) {
            this.f55269l = str;
            this.f55270m = str2;
            this.f55258a = i10;
            this.f55259b = str3;
            this.f55260c = j10;
            this.f55261d = str4;
            this.f55262e = i11;
            this.f55263f = i12;
            this.f55264g = i13;
            this.f55265h = i14;
            this.f55266i = str5;
            this.f55267j = formatArr;
            this.f55271n = list;
            this.f55272o = jArr;
            this.f55273p = j11;
            this.f55268k = list.size();
        }
    }

    private a(int i10, int i11, long j10, long j11, int i12, boolean z10, C0748a c0748a, b[] bVarArr) {
        this.f55247a = i10;
        this.f55248b = i11;
        this.f55253g = j10;
        this.f55254h = j11;
        this.f55249c = i12;
        this.f55250d = z10;
        this.f55251e = c0748a;
        this.f55252f = bVarArr;
    }
}
