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
    public final int f54261a;

    /* renamed from: b  reason: collision with root package name */
    public final int f54262b;

    /* renamed from: c  reason: collision with root package name */
    public final int f54263c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f54264d;

    /* renamed from: e  reason: collision with root package name */
    public final C0759a f54265e;

    /* renamed from: f  reason: collision with root package name */
    public final b[] f54266f;

    /* renamed from: g  reason: collision with root package name */
    public final long f54267g;

    /* renamed from: h  reason: collision with root package name */
    public final long f54268h;

    /* renamed from: yd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0759a {

        /* renamed from: a  reason: collision with root package name */
        public final UUID f54269a;

        /* renamed from: b  reason: collision with root package name */
        public final byte[] f54270b;

        /* renamed from: c  reason: collision with root package name */
        public final p[] f54271c;

        public C0759a(UUID uuid, byte[] bArr, p[] pVarArr) {
            this.f54269a = uuid;
            this.f54270b = bArr;
            this.f54271c = pVarArr;
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
            b bVar2 = this.f54266f[cVar.f45025e];
            if (bVar2 != bVar && bVar != null) {
                arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
                arrayList3.clear();
            }
            arrayList3.add(bVar2.f54281j[cVar.f45026i]);
            i10++;
            bVar = bVar2;
        }
        if (bVar != null) {
            arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
        }
        return new a(this.f54261a, this.f54262b, this.f54267g, this.f54268h, this.f54263c, this.f54264d, this.f54265e, (b[]) arrayList2.toArray(new b[0]));
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f54272a;

        /* renamed from: b  reason: collision with root package name */
        public final String f54273b;

        /* renamed from: c  reason: collision with root package name */
        public final long f54274c;

        /* renamed from: d  reason: collision with root package name */
        public final String f54275d;

        /* renamed from: e  reason: collision with root package name */
        public final int f54276e;

        /* renamed from: f  reason: collision with root package name */
        public final int f54277f;

        /* renamed from: g  reason: collision with root package name */
        public final int f54278g;

        /* renamed from: h  reason: collision with root package name */
        public final int f54279h;

        /* renamed from: i  reason: collision with root package name */
        public final String f54280i;

        /* renamed from: j  reason: collision with root package name */
        public final Format[] f54281j;

        /* renamed from: k  reason: collision with root package name */
        public final int f54282k;

        /* renamed from: l  reason: collision with root package name */
        private final String f54283l;

        /* renamed from: m  reason: collision with root package name */
        private final String f54284m;

        /* renamed from: n  reason: collision with root package name */
        private final List f54285n;

        /* renamed from: o  reason: collision with root package name */
        private final long[] f54286o;

        /* renamed from: p  reason: collision with root package name */
        private final long f54287p;

        public b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long j11) {
            this(str, str2, i10, str3, j10, str4, i11, i12, i13, i14, str5, formatArr, list, w0.Y0(list, 1000000L, j10), w0.X0(j11, 1000000L, j10));
        }

        public Uri a(int i10, int i11) {
            boolean z10;
            boolean z11;
            boolean z12 = false;
            if (this.f54281j != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            if (this.f54285n != null) {
                z11 = true;
            } else {
                z11 = false;
            }
            ne.a.g(z11);
            if (i11 < this.f54285n.size()) {
                z12 = true;
            }
            ne.a.g(z12);
            String num = Integer.toString(this.f54281j[i10].f12702s);
            String l10 = ((Long) this.f54285n.get(i11)).toString();
            return u0.e(this.f54283l, this.f54284m.replace("{bitrate}", num).replace("{Bitrate}", num).replace("{start time}", l10).replace("{start_time}", l10));
        }

        public b b(Format[] formatArr) {
            return new b(this.f54283l, this.f54284m, this.f54272a, this.f54273b, this.f54274c, this.f54275d, this.f54276e, this.f54277f, this.f54278g, this.f54279h, this.f54280i, formatArr, this.f54285n, this.f54286o, this.f54287p);
        }

        public long c(int i10) {
            if (i10 == this.f54282k - 1) {
                return this.f54287p;
            }
            long[] jArr = this.f54286o;
            return jArr[i10 + 1] - jArr[i10];
        }

        public int d(long j10) {
            return w0.i(this.f54286o, j10, true, true);
        }

        public long e(int i10) {
            return this.f54286o[i10];
        }

        private b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long[] jArr, long j11) {
            this.f54283l = str;
            this.f54284m = str2;
            this.f54272a = i10;
            this.f54273b = str3;
            this.f54274c = j10;
            this.f54275d = str4;
            this.f54276e = i11;
            this.f54277f = i12;
            this.f54278g = i13;
            this.f54279h = i14;
            this.f54280i = str5;
            this.f54281j = formatArr;
            this.f54285n = list;
            this.f54286o = jArr;
            this.f54287p = j11;
            this.f54282k = list.size();
        }
    }

    private a(int i10, int i11, long j10, long j11, int i12, boolean z10, C0759a c0759a, b[] bVarArr) {
        this.f54261a = i10;
        this.f54262b = i11;
        this.f54267g = j10;
        this.f54268h = j11;
        this.f54263c = i12;
        this.f54264d = z10;
        this.f54265e = c0759a;
        this.f54266f = bVarArr;
    }
}
