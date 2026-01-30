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
    public final int f54277a;

    /* renamed from: b  reason: collision with root package name */
    public final int f54278b;

    /* renamed from: c  reason: collision with root package name */
    public final int f54279c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f54280d;

    /* renamed from: e  reason: collision with root package name */
    public final C0759a f54281e;

    /* renamed from: f  reason: collision with root package name */
    public final b[] f54282f;

    /* renamed from: g  reason: collision with root package name */
    public final long f54283g;

    /* renamed from: h  reason: collision with root package name */
    public final long f54284h;

    /* renamed from: yd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0759a {

        /* renamed from: a  reason: collision with root package name */
        public final UUID f54285a;

        /* renamed from: b  reason: collision with root package name */
        public final byte[] f54286b;

        /* renamed from: c  reason: collision with root package name */
        public final p[] f54287c;

        public C0759a(UUID uuid, byte[] bArr, p[] pVarArr) {
            this.f54285a = uuid;
            this.f54286b = bArr;
            this.f54287c = pVarArr;
        }
    }

    public a(int i10, int i11, long j10, long j11, long j12, int i12, boolean z10, C0759a c0759a, b[] bVarArr) {
        this(i10, i11, j11 == 0 ? -9223372036854775807L : w0.X0(j11, 1000000L, j10), j12 != 0 ? w0.X0(j12, 1000000L, j10) : -9223372036854775807L, i12, z10, c0759a, bVarArr);
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
            b bVar2 = this.f54282f[cVar.f45041e];
            if (bVar2 != bVar && bVar != null) {
                arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
                arrayList3.clear();
            }
            arrayList3.add(bVar2.f54297j[cVar.f45042i]);
            i10++;
            bVar = bVar2;
        }
        if (bVar != null) {
            arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
        }
        return new a(this.f54277a, this.f54278b, this.f54283g, this.f54284h, this.f54279c, this.f54280d, this.f54281e, (b[]) arrayList2.toArray(new b[0]));
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f54288a;

        /* renamed from: b  reason: collision with root package name */
        public final String f54289b;

        /* renamed from: c  reason: collision with root package name */
        public final long f54290c;

        /* renamed from: d  reason: collision with root package name */
        public final String f54291d;

        /* renamed from: e  reason: collision with root package name */
        public final int f54292e;

        /* renamed from: f  reason: collision with root package name */
        public final int f54293f;

        /* renamed from: g  reason: collision with root package name */
        public final int f54294g;

        /* renamed from: h  reason: collision with root package name */
        public final int f54295h;

        /* renamed from: i  reason: collision with root package name */
        public final String f54296i;

        /* renamed from: j  reason: collision with root package name */
        public final Format[] f54297j;

        /* renamed from: k  reason: collision with root package name */
        public final int f54298k;

        /* renamed from: l  reason: collision with root package name */
        private final String f54299l;

        /* renamed from: m  reason: collision with root package name */
        private final String f54300m;

        /* renamed from: n  reason: collision with root package name */
        private final List f54301n;

        /* renamed from: o  reason: collision with root package name */
        private final long[] f54302o;

        /* renamed from: p  reason: collision with root package name */
        private final long f54303p;

        public b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long j11) {
            this(str, str2, i10, str3, j10, str4, i11, i12, i13, i14, str5, formatArr, list, w0.Y0(list, 1000000L, j10), w0.X0(j11, 1000000L, j10));
        }

        public Uri a(int i10, int i11) {
            boolean z10;
            boolean z11;
            boolean z12 = false;
            if (this.f54297j != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            if (this.f54301n != null) {
                z11 = true;
            } else {
                z11 = false;
            }
            ne.a.g(z11);
            if (i11 < this.f54301n.size()) {
                z12 = true;
            }
            ne.a.g(z12);
            String num = Integer.toString(this.f54297j[i10].f12702s);
            String l10 = ((Long) this.f54301n.get(i11)).toString();
            return u0.e(this.f54299l, this.f54300m.replace("{bitrate}", num).replace("{Bitrate}", num).replace("{start time}", l10).replace("{start_time}", l10));
        }

        public b b(Format[] formatArr) {
            return new b(this.f54299l, this.f54300m, this.f54288a, this.f54289b, this.f54290c, this.f54291d, this.f54292e, this.f54293f, this.f54294g, this.f54295h, this.f54296i, formatArr, this.f54301n, this.f54302o, this.f54303p);
        }

        public long c(int i10) {
            if (i10 == this.f54298k - 1) {
                return this.f54303p;
            }
            long[] jArr = this.f54302o;
            return jArr[i10 + 1] - jArr[i10];
        }

        public int d(long j10) {
            return w0.i(this.f54302o, j10, true, true);
        }

        public long e(int i10) {
            return this.f54302o[i10];
        }

        private b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long[] jArr, long j11) {
            this.f54299l = str;
            this.f54300m = str2;
            this.f54288a = i10;
            this.f54289b = str3;
            this.f54290c = j10;
            this.f54291d = str4;
            this.f54292e = i11;
            this.f54293f = i12;
            this.f54294g = i13;
            this.f54295h = i14;
            this.f54296i = str5;
            this.f54297j = formatArr;
            this.f54301n = list;
            this.f54302o = jArr;
            this.f54303p = j11;
            this.f54298k = list.size();
        }
    }

    private a(int i10, int i11, long j10, long j11, int i12, boolean z10, C0759a c0759a, b[] bVarArr) {
        this.f54277a = i10;
        this.f54278b = i11;
        this.f54283g = j10;
        this.f54284h = j11;
        this.f54279c = i12;
        this.f54280d = z10;
        this.f54281e = c0759a;
        this.f54282f = bVarArr;
    }
}
