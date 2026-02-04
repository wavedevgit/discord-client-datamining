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
    public final int f54007a;

    /* renamed from: b  reason: collision with root package name */
    public final int f54008b;

    /* renamed from: c  reason: collision with root package name */
    public final int f54009c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f54010d;

    /* renamed from: e  reason: collision with root package name */
    public final C0741a f54011e;

    /* renamed from: f  reason: collision with root package name */
    public final b[] f54012f;

    /* renamed from: g  reason: collision with root package name */
    public final long f54013g;

    /* renamed from: h  reason: collision with root package name */
    public final long f54014h;

    /* renamed from: yd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0741a {

        /* renamed from: a  reason: collision with root package name */
        public final UUID f54015a;

        /* renamed from: b  reason: collision with root package name */
        public final byte[] f54016b;

        /* renamed from: c  reason: collision with root package name */
        public final p[] f54017c;

        public C0741a(UUID uuid, byte[] bArr, p[] pVarArr) {
            this.f54015a = uuid;
            this.f54016b = bArr;
            this.f54017c = pVarArr;
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
            b bVar2 = this.f54012f[cVar.f45073e];
            if (bVar2 != bVar && bVar != null) {
                arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
                arrayList3.clear();
            }
            arrayList3.add(bVar2.f54027j[cVar.f45074i]);
            i10++;
            bVar = bVar2;
        }
        if (bVar != null) {
            arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
        }
        return new a(this.f54007a, this.f54008b, this.f54013g, this.f54014h, this.f54009c, this.f54010d, this.f54011e, (b[]) arrayList2.toArray(new b[0]));
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f54018a;

        /* renamed from: b  reason: collision with root package name */
        public final String f54019b;

        /* renamed from: c  reason: collision with root package name */
        public final long f54020c;

        /* renamed from: d  reason: collision with root package name */
        public final String f54021d;

        /* renamed from: e  reason: collision with root package name */
        public final int f54022e;

        /* renamed from: f  reason: collision with root package name */
        public final int f54023f;

        /* renamed from: g  reason: collision with root package name */
        public final int f54024g;

        /* renamed from: h  reason: collision with root package name */
        public final int f54025h;

        /* renamed from: i  reason: collision with root package name */
        public final String f54026i;

        /* renamed from: j  reason: collision with root package name */
        public final Format[] f54027j;

        /* renamed from: k  reason: collision with root package name */
        public final int f54028k;

        /* renamed from: l  reason: collision with root package name */
        private final String f54029l;

        /* renamed from: m  reason: collision with root package name */
        private final String f54030m;

        /* renamed from: n  reason: collision with root package name */
        private final List f54031n;

        /* renamed from: o  reason: collision with root package name */
        private final long[] f54032o;

        /* renamed from: p  reason: collision with root package name */
        private final long f54033p;

        public b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long j11) {
            this(str, str2, i10, str3, j10, str4, i11, i12, i13, i14, str5, formatArr, list, w0.Y0(list, 1000000L, j10), w0.X0(j11, 1000000L, j10));
        }

        public Uri a(int i10, int i11) {
            boolean z10;
            boolean z11;
            boolean z12 = false;
            if (this.f54027j != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            if (this.f54031n != null) {
                z11 = true;
            } else {
                z11 = false;
            }
            ne.a.g(z11);
            if (i11 < this.f54031n.size()) {
                z12 = true;
            }
            ne.a.g(z12);
            String num = Integer.toString(this.f54027j[i10].f11299s);
            String l10 = ((Long) this.f54031n.get(i11)).toString();
            return u0.e(this.f54029l, this.f54030m.replace("{bitrate}", num).replace("{Bitrate}", num).replace("{start time}", l10).replace("{start_time}", l10));
        }

        public b b(Format[] formatArr) {
            return new b(this.f54029l, this.f54030m, this.f54018a, this.f54019b, this.f54020c, this.f54021d, this.f54022e, this.f54023f, this.f54024g, this.f54025h, this.f54026i, formatArr, this.f54031n, this.f54032o, this.f54033p);
        }

        public long c(int i10) {
            if (i10 == this.f54028k - 1) {
                return this.f54033p;
            }
            long[] jArr = this.f54032o;
            return jArr[i10 + 1] - jArr[i10];
        }

        public int d(long j10) {
            return w0.i(this.f54032o, j10, true, true);
        }

        public long e(int i10) {
            return this.f54032o[i10];
        }

        private b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long[] jArr, long j11) {
            this.f54029l = str;
            this.f54030m = str2;
            this.f54018a = i10;
            this.f54019b = str3;
            this.f54020c = j10;
            this.f54021d = str4;
            this.f54022e = i11;
            this.f54023f = i12;
            this.f54024g = i13;
            this.f54025h = i14;
            this.f54026i = str5;
            this.f54027j = formatArr;
            this.f54031n = list;
            this.f54032o = jArr;
            this.f54033p = j11;
            this.f54028k = list.size();
        }
    }

    private a(int i10, int i11, long j10, long j11, int i12, boolean z10, C0741a c0741a, b[] bVarArr) {
        this.f54007a = i10;
        this.f54008b = i11;
        this.f54013g = j10;
        this.f54014h = j11;
        this.f54009c = i12;
        this.f54010d = z10;
        this.f54011e = c0741a;
        this.f54012f = bVarArr;
    }
}
