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
    public final int f56359a;

    /* renamed from: b  reason: collision with root package name */
    public final int f56360b;

    /* renamed from: c  reason: collision with root package name */
    public final int f56361c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f56362d;

    /* renamed from: e  reason: collision with root package name */
    public final C0799a f56363e;

    /* renamed from: f  reason: collision with root package name */
    public final b[] f56364f;

    /* renamed from: g  reason: collision with root package name */
    public final long f56365g;

    /* renamed from: h  reason: collision with root package name */
    public final long f56366h;

    /* renamed from: zd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0799a {

        /* renamed from: a  reason: collision with root package name */
        public final UUID f56367a;

        /* renamed from: b  reason: collision with root package name */
        public final byte[] f56368b;

        /* renamed from: c  reason: collision with root package name */
        public final p[] f56369c;

        public C0799a(UUID uuid, byte[] bArr, p[] pVarArr) {
            this.f56367a = uuid;
            this.f56368b = bArr;
            this.f56369c = pVarArr;
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
            b bVar2 = this.f56364f[cVar.f44030e];
            if (bVar2 != bVar && bVar != null) {
                arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
                arrayList3.clear();
            }
            arrayList3.add(bVar2.f56379j[cVar.f44031i]);
            i10++;
            bVar = bVar2;
        }
        if (bVar != null) {
            arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
        }
        return new a(this.f56359a, this.f56360b, this.f56365g, this.f56366h, this.f56361c, this.f56362d, this.f56363e, (b[]) arrayList2.toArray(new b[0]));
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f56370a;

        /* renamed from: b  reason: collision with root package name */
        public final String f56371b;

        /* renamed from: c  reason: collision with root package name */
        public final long f56372c;

        /* renamed from: d  reason: collision with root package name */
        public final String f56373d;

        /* renamed from: e  reason: collision with root package name */
        public final int f56374e;

        /* renamed from: f  reason: collision with root package name */
        public final int f56375f;

        /* renamed from: g  reason: collision with root package name */
        public final int f56376g;

        /* renamed from: h  reason: collision with root package name */
        public final int f56377h;

        /* renamed from: i  reason: collision with root package name */
        public final String f56378i;

        /* renamed from: j  reason: collision with root package name */
        public final Format[] f56379j;

        /* renamed from: k  reason: collision with root package name */
        public final int f56380k;

        /* renamed from: l  reason: collision with root package name */
        private final String f56381l;

        /* renamed from: m  reason: collision with root package name */
        private final String f56382m;

        /* renamed from: n  reason: collision with root package name */
        private final List f56383n;

        /* renamed from: o  reason: collision with root package name */
        private final long[] f56384o;

        /* renamed from: p  reason: collision with root package name */
        private final long f56385p;

        public b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long j11) {
            this(str, str2, i10, str3, j10, str4, i11, i12, i13, i14, str5, formatArr, list, w0.Y0(list, 1000000L, j10), w0.X0(j11, 1000000L, j10));
        }

        public Uri a(int i10, int i11) {
            boolean z10;
            boolean z11;
            boolean z12 = false;
            if (this.f56379j != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            if (this.f56383n != null) {
                z11 = true;
            } else {
                z11 = false;
            }
            oe.a.g(z11);
            if (i11 < this.f56383n.size()) {
                z12 = true;
            }
            oe.a.g(z12);
            String num = Integer.toString(this.f56379j[i10].f12300s);
            String l10 = ((Long) this.f56383n.get(i11)).toString();
            return u0.e(this.f56381l, this.f56382m.replace("{bitrate}", num).replace("{Bitrate}", num).replace("{start time}", l10).replace("{start_time}", l10));
        }

        public b b(Format[] formatArr) {
            return new b(this.f56381l, this.f56382m, this.f56370a, this.f56371b, this.f56372c, this.f56373d, this.f56374e, this.f56375f, this.f56376g, this.f56377h, this.f56378i, formatArr, this.f56383n, this.f56384o, this.f56385p);
        }

        public long c(int i10) {
            if (i10 == this.f56380k - 1) {
                return this.f56385p;
            }
            long[] jArr = this.f56384o;
            return jArr[i10 + 1] - jArr[i10];
        }

        public int d(long j10) {
            return w0.i(this.f56384o, j10, true, true);
        }

        public long e(int i10) {
            return this.f56384o[i10];
        }

        private b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long[] jArr, long j11) {
            this.f56381l = str;
            this.f56382m = str2;
            this.f56370a = i10;
            this.f56371b = str3;
            this.f56372c = j10;
            this.f56373d = str4;
            this.f56374e = i11;
            this.f56375f = i12;
            this.f56376g = i13;
            this.f56377h = i14;
            this.f56378i = str5;
            this.f56379j = formatArr;
            this.f56383n = list;
            this.f56384o = jArr;
            this.f56385p = j11;
            this.f56380k = list.size();
        }
    }

    private a(int i10, int i11, long j10, long j11, int i12, boolean z10, C0799a c0799a, b[] bVarArr) {
        this.f56359a = i10;
        this.f56360b = i11;
        this.f56365g = j10;
        this.f56366h = j11;
        this.f56361c = i12;
        this.f56362d = z10;
        this.f56363e = c0799a;
        this.f56364f = bVarArr;
    }
}
