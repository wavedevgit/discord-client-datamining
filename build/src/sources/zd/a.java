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
    public final int f56320a;

    /* renamed from: b  reason: collision with root package name */
    public final int f56321b;

    /* renamed from: c  reason: collision with root package name */
    public final int f56322c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f56323d;

    /* renamed from: e  reason: collision with root package name */
    public final C0798a f56324e;

    /* renamed from: f  reason: collision with root package name */
    public final b[] f56325f;

    /* renamed from: g  reason: collision with root package name */
    public final long f56326g;

    /* renamed from: h  reason: collision with root package name */
    public final long f56327h;

    /* renamed from: zd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0798a {

        /* renamed from: a  reason: collision with root package name */
        public final UUID f56328a;

        /* renamed from: b  reason: collision with root package name */
        public final byte[] f56329b;

        /* renamed from: c  reason: collision with root package name */
        public final p[] f56330c;

        public C0798a(UUID uuid, byte[] bArr, p[] pVarArr) {
            this.f56328a = uuid;
            this.f56329b = bArr;
            this.f56330c = pVarArr;
        }
    }

    public a(int i10, int i11, long j10, long j11, long j12, int i12, boolean z10, C0798a c0798a, b[] bVarArr) {
        this(i10, i11, j11 == 0 ? -9223372036854775807L : w0.X0(j11, 1000000L, j10), j12 != 0 ? w0.X0(j12, 1000000L, j10) : -9223372036854775807L, i12, z10, c0798a, bVarArr);
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
            b bVar2 = this.f56325f[cVar.f45362e];
            if (bVar2 != bVar && bVar != null) {
                arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
                arrayList3.clear();
            }
            arrayList3.add(bVar2.f56340j[cVar.f45363i]);
            i10++;
            bVar = bVar2;
        }
        if (bVar != null) {
            arrayList2.add(bVar.b((Format[]) arrayList3.toArray(new Format[0])));
        }
        return new a(this.f56320a, this.f56321b, this.f56326g, this.f56327h, this.f56322c, this.f56323d, this.f56324e, (b[]) arrayList2.toArray(new b[0]));
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f56331a;

        /* renamed from: b  reason: collision with root package name */
        public final String f56332b;

        /* renamed from: c  reason: collision with root package name */
        public final long f56333c;

        /* renamed from: d  reason: collision with root package name */
        public final String f56334d;

        /* renamed from: e  reason: collision with root package name */
        public final int f56335e;

        /* renamed from: f  reason: collision with root package name */
        public final int f56336f;

        /* renamed from: g  reason: collision with root package name */
        public final int f56337g;

        /* renamed from: h  reason: collision with root package name */
        public final int f56338h;

        /* renamed from: i  reason: collision with root package name */
        public final String f56339i;

        /* renamed from: j  reason: collision with root package name */
        public final Format[] f56340j;

        /* renamed from: k  reason: collision with root package name */
        public final int f56341k;

        /* renamed from: l  reason: collision with root package name */
        private final String f56342l;

        /* renamed from: m  reason: collision with root package name */
        private final String f56343m;

        /* renamed from: n  reason: collision with root package name */
        private final List f56344n;

        /* renamed from: o  reason: collision with root package name */
        private final long[] f56345o;

        /* renamed from: p  reason: collision with root package name */
        private final long f56346p;

        public b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long j11) {
            this(str, str2, i10, str3, j10, str4, i11, i12, i13, i14, str5, formatArr, list, w0.Y0(list, 1000000L, j10), w0.X0(j11, 1000000L, j10));
        }

        public Uri a(int i10, int i11) {
            boolean z10;
            boolean z11;
            boolean z12 = false;
            if (this.f56340j != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            if (this.f56344n != null) {
                z11 = true;
            } else {
                z11 = false;
            }
            oe.a.g(z11);
            if (i11 < this.f56344n.size()) {
                z12 = true;
            }
            oe.a.g(z12);
            String num = Integer.toString(this.f56340j[i10].f11723s);
            String l10 = ((Long) this.f56344n.get(i11)).toString();
            return u0.e(this.f56342l, this.f56343m.replace("{bitrate}", num).replace("{Bitrate}", num).replace("{start time}", l10).replace("{start_time}", l10));
        }

        public b b(Format[] formatArr) {
            return new b(this.f56342l, this.f56343m, this.f56331a, this.f56332b, this.f56333c, this.f56334d, this.f56335e, this.f56336f, this.f56337g, this.f56338h, this.f56339i, formatArr, this.f56344n, this.f56345o, this.f56346p);
        }

        public long c(int i10) {
            if (i10 == this.f56341k - 1) {
                return this.f56346p;
            }
            long[] jArr = this.f56345o;
            return jArr[i10 + 1] - jArr[i10];
        }

        public int d(long j10) {
            return w0.i(this.f56345o, j10, true, true);
        }

        public long e(int i10) {
            return this.f56345o[i10];
        }

        private b(String str, String str2, int i10, String str3, long j10, String str4, int i11, int i12, int i13, int i14, String str5, Format[] formatArr, List list, long[] jArr, long j11) {
            this.f56342l = str;
            this.f56343m = str2;
            this.f56331a = i10;
            this.f56332b = str3;
            this.f56333c = j10;
            this.f56334d = str4;
            this.f56335e = i11;
            this.f56336f = i12;
            this.f56337g = i13;
            this.f56338h = i14;
            this.f56339i = str5;
            this.f56340j = formatArr;
            this.f56344n = list;
            this.f56345o = jArr;
            this.f56346p = j11;
            this.f56341k = list.size();
        }
    }

    private a(int i10, int i11, long j10, long j11, int i12, boolean z10, C0798a c0798a, b[] bVarArr) {
        this.f56320a = i10;
        this.f56321b = i11;
        this.f56326g = j10;
        this.f56327h = j11;
        this.f56322c = i12;
        this.f56323d = z10;
        this.f56324e = c0798a;
        this.f56325f = bVarArr;
    }
}
