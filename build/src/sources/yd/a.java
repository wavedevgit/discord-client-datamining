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
    public final int f54010a;

    /* renamed from: b  reason: collision with root package name */
    public final int f54011b;

    /* renamed from: c  reason: collision with root package name */
    public final int f54012c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f54013d;

    /* renamed from: e  reason: collision with root package name */
    public final C0741a f54014e;

    /* renamed from: f  reason: collision with root package name */
    public final b[] f54015f;

    /* renamed from: g  reason: collision with root package name */
    public final long f54016g;

    /* renamed from: h  reason: collision with root package name */
    public final long f54017h;

    /* renamed from: yd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0741a {

        /* renamed from: a  reason: collision with root package name */
        public final UUID f54018a;

        /* renamed from: b  reason: collision with root package name */
        public final byte[] f54019b;

        /* renamed from: c  reason: collision with root package name */
        public final p[] f54020c;

        public C0741a(UUID uuid, byte[] bArr, p[] pVarArr) {
            this.f54018a = uuid;
            this.f54019b = bArr;
            this.f54020c = pVarArr;
        }
    }

    public a(int i10, int i11, long j10, long j11, long j12, int i12, boolean z10, C0741a c0741a, b[] bVarArr) {
        this(i10, i11, j11 == 0 ? -9223372036854775807L : w0.X0(j11, 1000000L, j10), j12 != 0 ? w0.X0(j12, 1000000L, j10) : -9223372036854775807L, i12, z10, c0741a, bVarArr);
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
            b bVar2 = this.f54015f[cVar.f45073e];
            if (bVar2 != bVar && bVar != null) {
                arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
                arrayList3.clear();
            }
            arrayList3.add(bVar2.f54030j[cVar.f45074i]);
            i10++;
            bVar = bVar2;
        }
        if (bVar != null) {
            arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
        }
        return new a(this.f54010a, this.f54011b, this.f54016g, this.f54017h, this.f54012c, this.f54013d, this.f54014e, (b[]) arrayList2.toArray(new b[0]));
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f54021a;

        /* renamed from: b  reason: collision with root package name */
        public final String f54022b;

        /* renamed from: c  reason: collision with root package name */
        public final long f54023c;

        /* renamed from: d  reason: collision with root package name */
        public final String f54024d;

        /* renamed from: e  reason: collision with root package name */
        public final int f54025e;

        /* renamed from: f  reason: collision with root package name */
        public final int f54026f;

        /* renamed from: g  reason: collision with root package name */
        public final int f54027g;

        /* renamed from: h  reason: collision with root package name */
        public final int f54028h;

        /* renamed from: i  reason: collision with root package name */
        public final String f54029i;

        /* renamed from: j  reason: collision with root package name */
        public final Format[] f54030j;

        /* renamed from: k  reason: collision with root package name */
        public final int f54031k;

        /* renamed from: l  reason: collision with root package name */
        private final String f54032l;

        /* renamed from: m  reason: collision with root package name */
        private final String f54033m;

        /* renamed from: n  reason: collision with root package name */
        private final List f54034n;

        /* renamed from: o  reason: collision with root package name */
        private final long[] f54035o;

        /* renamed from: p  reason: collision with root package name */
        private final long f54036p;

        public b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long j11) {
            this(str, str2, i10, str3, j10, str4, i11, i12, i13, i14, str5, formatArr, list, w0.Y0(list, 1000000L, j10), w0.X0(j11, 1000000L, j10));
        }

        public Uri a(int i10, int i11) {
            boolean z10;
            boolean z11;
            boolean z12 = false;
            if (this.f54030j != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            if (this.f54034n != null) {
                z11 = true;
            } else {
                z11 = false;
            }
            ne.a.g(z11);
            if (i11 < this.f54034n.size()) {
                z12 = true;
            }
            ne.a.g(z12);
            String num = Integer.toString(this.f54030j[i10].f11299s);
            String l10 = ((Long) this.f54034n.get(i11)).toString();
            return u0.e(this.f54032l, this.f54033m.replace("{bitrate}", num).replace("{Bitrate}", num).replace("{start time}", l10).replace("{start_time}", l10));
        }

        public b b(Format[] formatArr) {
            return new b(this.f54032l, this.f54033m, this.f54021a, this.f54022b, this.f54023c, this.f54024d, this.f54025e, this.f54026f, this.f54027g, this.f54028h, this.f54029i, formatArr, this.f54034n, this.f54035o, this.f54036p);
        }

        public long c(int i10) {
            if (i10 == this.f54031k - 1) {
                return this.f54036p;
            }
            long[] jArr = this.f54035o;
            return jArr[i10 + 1] - jArr[i10];
        }

        public int d(long j10) {
            return w0.i(this.f54035o, j10, true, true);
        }

        public long e(int i10) {
            return this.f54035o[i10];
        }

        private b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long[] jArr, long j11) {
            this.f54032l = str;
            this.f54033m = str2;
            this.f54021a = i10;
            this.f54022b = str3;
            this.f54023c = j10;
            this.f54024d = str4;
            this.f54025e = i11;
            this.f54026f = i12;
            this.f54027g = i13;
            this.f54028h = i14;
            this.f54029i = str5;
            this.f54030j = formatArr;
            this.f54034n = list;
            this.f54035o = jArr;
            this.f54036p = j11;
            this.f54031k = list.size();
        }
    }

    private a(int i10, int i11, long j10, long j11, int i12, boolean z10, C0741a c0741a, b[] bVarArr) {
        this.f54010a = i10;
        this.f54011b = i11;
        this.f54016g = j10;
        this.f54017h = j11;
        this.f54012c = i12;
        this.f54013d = z10;
        this.f54014e = c0741a;
        this.f54015f = bVarArr;
    }
}
