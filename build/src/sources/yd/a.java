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
    public final int f54252a;

    /* renamed from: b  reason: collision with root package name */
    public final int f54253b;

    /* renamed from: c  reason: collision with root package name */
    public final int f54254c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f54255d;

    /* renamed from: e  reason: collision with root package name */
    public final C0768a f54256e;

    /* renamed from: f  reason: collision with root package name */
    public final b[] f54257f;

    /* renamed from: g  reason: collision with root package name */
    public final long f54258g;

    /* renamed from: h  reason: collision with root package name */
    public final long f54259h;

    /* renamed from: yd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0768a {

        /* renamed from: a  reason: collision with root package name */
        public final UUID f54260a;

        /* renamed from: b  reason: collision with root package name */
        public final byte[] f54261b;

        /* renamed from: c  reason: collision with root package name */
        public final p[] f54262c;

        public C0768a(UUID uuid, byte[] bArr, p[] pVarArr) {
            this.f54260a = uuid;
            this.f54261b = bArr;
            this.f54262c = pVarArr;
        }
    }

    public a(int i10, int i11, long j10, long j11, long j12, int i12, boolean z10, C0768a c0768a, b[] bVarArr) {
        this(i10, i11, j11 == 0 ? -9223372036854775807L : w0.X0(j11, 1000000L, j10), j12 != 0 ? w0.X0(j12, 1000000L, j10) : -9223372036854775807L, i12, z10, c0768a, bVarArr);
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
            b bVar2 = this.f54257f[cVar.f45115e];
            if (bVar2 != bVar && bVar != null) {
                arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
                arrayList3.clear();
            }
            arrayList3.add(bVar2.f54272j[cVar.f45116i]);
            i10++;
            bVar = bVar2;
        }
        if (bVar != null) {
            arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
        }
        return new a(this.f54252a, this.f54253b, this.f54258g, this.f54259h, this.f54254c, this.f54255d, this.f54256e, (b[]) arrayList2.toArray(new b[0]));
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f54263a;

        /* renamed from: b  reason: collision with root package name */
        public final String f54264b;

        /* renamed from: c  reason: collision with root package name */
        public final long f54265c;

        /* renamed from: d  reason: collision with root package name */
        public final String f54266d;

        /* renamed from: e  reason: collision with root package name */
        public final int f54267e;

        /* renamed from: f  reason: collision with root package name */
        public final int f54268f;

        /* renamed from: g  reason: collision with root package name */
        public final int f54269g;

        /* renamed from: h  reason: collision with root package name */
        public final int f54270h;

        /* renamed from: i  reason: collision with root package name */
        public final String f54271i;

        /* renamed from: j  reason: collision with root package name */
        public final Format[] f54272j;

        /* renamed from: k  reason: collision with root package name */
        public final int f54273k;

        /* renamed from: l  reason: collision with root package name */
        private final String f54274l;

        /* renamed from: m  reason: collision with root package name */
        private final String f54275m;

        /* renamed from: n  reason: collision with root package name */
        private final List f54276n;

        /* renamed from: o  reason: collision with root package name */
        private final long[] f54277o;

        /* renamed from: p  reason: collision with root package name */
        private final long f54278p;

        public b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long j11) {
            this(str, str2, i10, str3, j10, str4, i11, i12, i13, i14, str5, formatArr, list, w0.Y0(list, 1000000L, j10), w0.X0(j11, 1000000L, j10));
        }

        public Uri a(int i10, int i11) {
            boolean z10;
            boolean z11;
            boolean z12 = false;
            if (this.f54272j != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            if (this.f54276n != null) {
                z11 = true;
            } else {
                z11 = false;
            }
            ne.a.g(z11);
            if (i11 < this.f54276n.size()) {
                z12 = true;
            }
            ne.a.g(z12);
            String num = Integer.toString(this.f54272j[i10].f12331s);
            String l10 = ((Long) this.f54276n.get(i11)).toString();
            return u0.e(this.f54274l, this.f54275m.replace("{bitrate}", num).replace("{Bitrate}", num).replace("{start time}", l10).replace("{start_time}", l10));
        }

        public b b(Format[] formatArr) {
            return new b(this.f54274l, this.f54275m, this.f54263a, this.f54264b, this.f54265c, this.f54266d, this.f54267e, this.f54268f, this.f54269g, this.f54270h, this.f54271i, formatArr, this.f54276n, this.f54277o, this.f54278p);
        }

        public long c(int i10) {
            if (i10 == this.f54273k - 1) {
                return this.f54278p;
            }
            long[] jArr = this.f54277o;
            return jArr[i10 + 1] - jArr[i10];
        }

        public int d(long j10) {
            return w0.i(this.f54277o, j10, true, true);
        }

        public long e(int i10) {
            return this.f54277o[i10];
        }

        private b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long[] jArr, long j11) {
            this.f54274l = str;
            this.f54275m = str2;
            this.f54263a = i10;
            this.f54264b = str3;
            this.f54265c = j10;
            this.f54266d = str4;
            this.f54267e = i11;
            this.f54268f = i12;
            this.f54269g = i13;
            this.f54270h = i14;
            this.f54271i = str5;
            this.f54272j = formatArr;
            this.f54276n = list;
            this.f54277o = jArr;
            this.f54278p = j11;
            this.f54273k = list.size();
        }
    }

    private a(int i10, int i11, long j10, long j11, int i12, boolean z10, C0768a c0768a, b[] bVarArr) {
        this.f54252a = i10;
        this.f54253b = i11;
        this.f54258g = j10;
        this.f54259h = j11;
        this.f54254c = i12;
        this.f54255d = z10;
        this.f54256e = c0768a;
        this.f54257f = bVarArr;
    }
}
