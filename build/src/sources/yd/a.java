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
    public final int f55295a;

    /* renamed from: b  reason: collision with root package name */
    public final int f55296b;

    /* renamed from: c  reason: collision with root package name */
    public final int f55297c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f55298d;

    /* renamed from: e  reason: collision with root package name */
    public final C0748a f55299e;

    /* renamed from: f  reason: collision with root package name */
    public final b[] f55300f;

    /* renamed from: g  reason: collision with root package name */
    public final long f55301g;

    /* renamed from: h  reason: collision with root package name */
    public final long f55302h;

    /* renamed from: yd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0748a {

        /* renamed from: a  reason: collision with root package name */
        public final UUID f55303a;

        /* renamed from: b  reason: collision with root package name */
        public final byte[] f55304b;

        /* renamed from: c  reason: collision with root package name */
        public final p[] f55305c;

        public C0748a(UUID uuid, byte[] bArr, p[] pVarArr) {
            this.f55303a = uuid;
            this.f55304b = bArr;
            this.f55305c = pVarArr;
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
            b bVar2 = this.f55300f[cVar.f43848e];
            if (bVar2 != bVar && bVar != null) {
                arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
                arrayList3.clear();
            }
            arrayList3.add(bVar2.f55315j[cVar.f43849i]);
            i10++;
            bVar = bVar2;
        }
        if (bVar != null) {
            arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
        }
        return new a(this.f55295a, this.f55296b, this.f55301g, this.f55302h, this.f55297c, this.f55298d, this.f55299e, (b[]) arrayList2.toArray(new b[0]));
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f55306a;

        /* renamed from: b  reason: collision with root package name */
        public final String f55307b;

        /* renamed from: c  reason: collision with root package name */
        public final long f55308c;

        /* renamed from: d  reason: collision with root package name */
        public final String f55309d;

        /* renamed from: e  reason: collision with root package name */
        public final int f55310e;

        /* renamed from: f  reason: collision with root package name */
        public final int f55311f;

        /* renamed from: g  reason: collision with root package name */
        public final int f55312g;

        /* renamed from: h  reason: collision with root package name */
        public final int f55313h;

        /* renamed from: i  reason: collision with root package name */
        public final String f55314i;

        /* renamed from: j  reason: collision with root package name */
        public final Format[] f55315j;

        /* renamed from: k  reason: collision with root package name */
        public final int f55316k;

        /* renamed from: l  reason: collision with root package name */
        private final String f55317l;

        /* renamed from: m  reason: collision with root package name */
        private final String f55318m;

        /* renamed from: n  reason: collision with root package name */
        private final List f55319n;

        /* renamed from: o  reason: collision with root package name */
        private final long[] f55320o;

        /* renamed from: p  reason: collision with root package name */
        private final long f55321p;

        public b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long j11) {
            this(str, str2, i10, str3, j10, str4, i11, i12, i13, i14, str5, formatArr, list, w0.Y0(list, 1000000L, j10), w0.X0(j11, 1000000L, j10));
        }

        public Uri a(int i10, int i11) {
            boolean z10;
            boolean z11;
            boolean z12 = false;
            if (this.f55315j != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            if (this.f55319n != null) {
                z11 = true;
            } else {
                z11 = false;
            }
            ne.a.g(z11);
            if (i11 < this.f55319n.size()) {
                z12 = true;
            }
            ne.a.g(z12);
            String num = Integer.toString(this.f55315j[i10].f11583s);
            String l10 = ((Long) this.f55319n.get(i11)).toString();
            return u0.e(this.f55317l, this.f55318m.replace("{bitrate}", num).replace("{Bitrate}", num).replace("{start time}", l10).replace("{start_time}", l10));
        }

        public b b(Format[] formatArr) {
            return new b(this.f55317l, this.f55318m, this.f55306a, this.f55307b, this.f55308c, this.f55309d, this.f55310e, this.f55311f, this.f55312g, this.f55313h, this.f55314i, formatArr, this.f55319n, this.f55320o, this.f55321p);
        }

        public long c(int i10) {
            if (i10 == this.f55316k - 1) {
                return this.f55321p;
            }
            long[] jArr = this.f55320o;
            return jArr[i10 + 1] - jArr[i10];
        }

        public int d(long j10) {
            return w0.i(this.f55320o, j10, true, true);
        }

        public long e(int i10) {
            return this.f55320o[i10];
        }

        private b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long[] jArr, long j11) {
            this.f55317l = str;
            this.f55318m = str2;
            this.f55306a = i10;
            this.f55307b = str3;
            this.f55308c = j10;
            this.f55309d = str4;
            this.f55310e = i11;
            this.f55311f = i12;
            this.f55312g = i13;
            this.f55313h = i14;
            this.f55314i = str5;
            this.f55315j = formatArr;
            this.f55319n = list;
            this.f55320o = jArr;
            this.f55321p = j11;
            this.f55316k = list.size();
        }
    }

    private a(int i10, int i11, long j10, long j11, int i12, boolean z10, C0748a c0748a, b[] bVarArr) {
        this.f55295a = i10;
        this.f55296b = i11;
        this.f55301g = j10;
        this.f55302h = j11;
        this.f55297c = i12;
        this.f55298d = z10;
        this.f55299e = c0748a;
        this.f55300f = bVarArr;
    }
}
