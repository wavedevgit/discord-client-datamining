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
    public final int f54703a;

    /* renamed from: b  reason: collision with root package name */
    public final int f54704b;

    /* renamed from: c  reason: collision with root package name */
    public final int f54705c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f54706d;

    /* renamed from: e  reason: collision with root package name */
    public final C0761a f54707e;

    /* renamed from: f  reason: collision with root package name */
    public final b[] f54708f;

    /* renamed from: g  reason: collision with root package name */
    public final long f54709g;

    /* renamed from: h  reason: collision with root package name */
    public final long f54710h;

    /* renamed from: yd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0761a {

        /* renamed from: a  reason: collision with root package name */
        public final UUID f54711a;

        /* renamed from: b  reason: collision with root package name */
        public final byte[] f54712b;

        /* renamed from: c  reason: collision with root package name */
        public final p[] f54713c;

        public C0761a(UUID uuid, byte[] bArr, p[] pVarArr) {
            this.f54711a = uuid;
            this.f54712b = bArr;
            this.f54713c = pVarArr;
        }
    }

    public a(int i10, int i11, long j10, long j11, long j12, int i12, boolean z10, C0761a c0761a, b[] bVarArr) {
        this(i10, i11, j11 == 0 ? -9223372036854775807L : w0.X0(j11, 1000000L, j10), j12 != 0 ? w0.X0(j12, 1000000L, j10) : -9223372036854775807L, i12, z10, c0761a, bVarArr);
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
            b bVar2 = this.f54708f[cVar.f45003e];
            if (bVar2 != bVar && bVar != null) {
                arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
                arrayList3.clear();
            }
            arrayList3.add(bVar2.f54723j[cVar.f45004i]);
            i10++;
            bVar = bVar2;
        }
        if (bVar != null) {
            arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
        }
        return new a(this.f54703a, this.f54704b, this.f54709g, this.f54710h, this.f54705c, this.f54706d, this.f54707e, (b[]) arrayList2.toArray(new b[0]));
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f54714a;

        /* renamed from: b  reason: collision with root package name */
        public final String f54715b;

        /* renamed from: c  reason: collision with root package name */
        public final long f54716c;

        /* renamed from: d  reason: collision with root package name */
        public final String f54717d;

        /* renamed from: e  reason: collision with root package name */
        public final int f54718e;

        /* renamed from: f  reason: collision with root package name */
        public final int f54719f;

        /* renamed from: g  reason: collision with root package name */
        public final int f54720g;

        /* renamed from: h  reason: collision with root package name */
        public final int f54721h;

        /* renamed from: i  reason: collision with root package name */
        public final String f54722i;

        /* renamed from: j  reason: collision with root package name */
        public final Format[] f54723j;

        /* renamed from: k  reason: collision with root package name */
        public final int f54724k;

        /* renamed from: l  reason: collision with root package name */
        private final String f54725l;

        /* renamed from: m  reason: collision with root package name */
        private final String f54726m;

        /* renamed from: n  reason: collision with root package name */
        private final List f54727n;

        /* renamed from: o  reason: collision with root package name */
        private final long[] f54728o;

        /* renamed from: p  reason: collision with root package name */
        private final long f54729p;

        public b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long j11) {
            this(str, str2, i10, str3, j10, str4, i11, i12, i13, i14, str5, formatArr, list, w0.Y0(list, 1000000L, j10), w0.X0(j11, 1000000L, j10));
        }

        public Uri a(int i10, int i11) {
            boolean z10;
            boolean z11;
            boolean z12 = false;
            if (this.f54723j != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            if (this.f54727n != null) {
                z11 = true;
            } else {
                z11 = false;
            }
            ne.a.g(z11);
            if (i11 < this.f54727n.size()) {
                z12 = true;
            }
            ne.a.g(z12);
            String num = Integer.toString(this.f54723j[i10].f11684s);
            String l10 = ((Long) this.f54727n.get(i11)).toString();
            return u0.e(this.f54725l, this.f54726m.replace("{bitrate}", num).replace("{Bitrate}", num).replace("{start time}", l10).replace("{start_time}", l10));
        }

        public b b(Format[] formatArr) {
            return new b(this.f54725l, this.f54726m, this.f54714a, this.f54715b, this.f54716c, this.f54717d, this.f54718e, this.f54719f, this.f54720g, this.f54721h, this.f54722i, formatArr, this.f54727n, this.f54728o, this.f54729p);
        }

        public long c(int i10) {
            if (i10 == this.f54724k - 1) {
                return this.f54729p;
            }
            long[] jArr = this.f54728o;
            return jArr[i10 + 1] - jArr[i10];
        }

        public int d(long j10) {
            return w0.i(this.f54728o, j10, true, true);
        }

        public long e(int i10) {
            return this.f54728o[i10];
        }

        private b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long[] jArr, long j11) {
            this.f54725l = str;
            this.f54726m = str2;
            this.f54714a = i10;
            this.f54715b = str3;
            this.f54716c = j10;
            this.f54717d = str4;
            this.f54718e = i11;
            this.f54719f = i12;
            this.f54720g = i13;
            this.f54721h = i14;
            this.f54722i = str5;
            this.f54723j = formatArr;
            this.f54727n = list;
            this.f54728o = jArr;
            this.f54729p = j11;
            this.f54724k = list.size();
        }
    }

    private a(int i10, int i11, long j10, long j11, int i12, boolean z10, C0761a c0761a, b[] bVarArr) {
        this.f54703a = i10;
        this.f54704b = i11;
        this.f54709g = j10;
        this.f54710h = j11;
        this.f54705c = i12;
        this.f54706d = z10;
        this.f54707e = c0761a;
        this.f54708f = bVarArr;
    }
}
