package rd;

import android.net.Uri;
import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.ArrayList;
import java.util.Arrays;
import ne.w0;
import rd.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements g {

    /* renamed from: r  reason: collision with root package name */
    public static final c f48776r = new c(null, new a[0], 0, -9223372036854775807L, 0);

    /* renamed from: s  reason: collision with root package name */
    private static final a f48777s = new a(0).k(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f48778t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f48779u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f48780v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    private static final String f48781w = w0.B0(4);

    /* renamed from: x  reason: collision with root package name */
    public static final g.a f48782x = new g.a() { // from class: rd.a
        @Override // com.google.android.exoplayer2.g.a
        public final g a(Bundle bundle) {
            c b10;
            b10 = c.b(bundle);
            return b10;
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final Object f48783d;

    /* renamed from: e  reason: collision with root package name */
    public final int f48784e;

    /* renamed from: i  reason: collision with root package name */
    public final long f48785i;

    /* renamed from: o  reason: collision with root package name */
    public final long f48786o;

    /* renamed from: p  reason: collision with root package name */
    public final int f48787p;

    /* renamed from: q  reason: collision with root package name */
    private final a[] f48788q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements g {

        /* renamed from: d  reason: collision with root package name */
        public final long f48796d;

        /* renamed from: e  reason: collision with root package name */
        public final int f48797e;

        /* renamed from: i  reason: collision with root package name */
        public final int f48798i;

        /* renamed from: o  reason: collision with root package name */
        public final Uri[] f48799o;

        /* renamed from: p  reason: collision with root package name */
        public final int[] f48800p;

        /* renamed from: q  reason: collision with root package name */
        public final long[] f48801q;

        /* renamed from: r  reason: collision with root package name */
        public final long f48802r;

        /* renamed from: s  reason: collision with root package name */
        public final boolean f48803s;

        /* renamed from: t  reason: collision with root package name */
        private static final String f48789t = w0.B0(0);

        /* renamed from: u  reason: collision with root package name */
        private static final String f48790u = w0.B0(1);

        /* renamed from: v  reason: collision with root package name */
        private static final String f48791v = w0.B0(2);

        /* renamed from: w  reason: collision with root package name */
        private static final String f48792w = w0.B0(3);

        /* renamed from: x  reason: collision with root package name */
        private static final String f48793x = w0.B0(4);

        /* renamed from: y  reason: collision with root package name */
        private static final String f48794y = w0.B0(5);

        /* renamed from: z  reason: collision with root package name */
        private static final String f48795z = w0.B0(6);
        private static final String A = w0.B0(7);
        public static final g.a B = new g.a() { // from class: rd.b
            @Override // com.google.android.exoplayer2.g.a
            public final g a(Bundle bundle) {
                c.a e10;
                e10 = c.a.e(bundle);
                return e10;
            }
        };

        public a(long j10) {
            this(j10, -1, -1, new int[0], new Uri[0], new long[0], 0L, false);
        }

        private static long[] c(long[] jArr, int i10) {
            int length = jArr.length;
            int max = Math.max(i10, length);
            long[] copyOf = Arrays.copyOf(jArr, max);
            Arrays.fill(copyOf, length, max, -9223372036854775807L);
            return copyOf;
        }

        private static int[] d(int[] iArr, int i10) {
            int length = iArr.length;
            int max = Math.max(i10, length);
            int[] copyOf = Arrays.copyOf(iArr, max);
            Arrays.fill(copyOf, length, max, 0);
            return copyOf;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static a e(Bundle bundle) {
            Uri[] uriArr;
            long j10 = bundle.getLong(f48789t);
            int i10 = bundle.getInt(f48790u);
            int i11 = bundle.getInt(A);
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(f48791v);
            int[] intArray = bundle.getIntArray(f48792w);
            long[] longArray = bundle.getLongArray(f48793x);
            long j11 = bundle.getLong(f48794y);
            boolean z10 = bundle.getBoolean(f48795z);
            int[] iArr = intArray;
            if (iArr == null) {
                iArr = new int[0];
            }
            if (parcelableArrayList == null) {
                uriArr = new Uri[0];
            } else {
                uriArr = (Uri[]) parcelableArrayList.toArray(new Uri[0]);
            }
            if (longArray == null) {
                longArray = new long[0];
            }
            long[] jArr = longArray;
            return new a(j10, i10, i11, iArr, uriArr, jArr, j11, z10);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean i() {
            if (this.f48803s && this.f48796d == Long.MIN_VALUE && this.f48797e == -1) {
                return true;
            }
            return false;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f48796d == aVar.f48796d && this.f48797e == aVar.f48797e && this.f48798i == aVar.f48798i && Arrays.equals(this.f48799o, aVar.f48799o) && Arrays.equals(this.f48800p, aVar.f48800p) && Arrays.equals(this.f48801q, aVar.f48801q) && this.f48802r == aVar.f48802r && this.f48803s == aVar.f48803s) {
                    return true;
                }
            }
            return false;
        }

        public int f() {
            return g(-1);
        }

        public int g(int i10) {
            int i11;
            int i12 = i10 + 1;
            while (true) {
                int[] iArr = this.f48800p;
                if (i12 >= iArr.length || this.f48803s || (i11 = iArr[i12]) == 0 || i11 == 1) {
                    break;
                }
                i12++;
            }
            return i12;
        }

        public boolean h() {
            if (this.f48797e == -1) {
                return true;
            }
            for (int i10 = 0; i10 < this.f48797e; i10++) {
                int i11 = this.f48800p[i10];
                if (i11 == 0 || i11 == 1) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            long j10 = this.f48796d;
            long j11 = this.f48802r;
            return (((((((((((((this.f48797e * 31) + this.f48798i) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + Arrays.hashCode(this.f48799o)) * 31) + Arrays.hashCode(this.f48800p)) * 31) + Arrays.hashCode(this.f48801q)) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + (this.f48803s ? 1 : 0);
        }

        public boolean j() {
            if (this.f48797e != -1 && f() >= this.f48797e) {
                return false;
            }
            return true;
        }

        public a k(int i10) {
            int[] d10 = d(this.f48800p, i10);
            long[] c10 = c(this.f48801q, i10);
            return new a(this.f48796d, i10, this.f48798i, d10, (Uri[]) Arrays.copyOf(this.f48799o, i10), c10, this.f48802r, this.f48803s);
        }

        private a(long j10, int i10, int i11, int[] iArr, Uri[] uriArr, long[] jArr, long j11, boolean z10) {
            ne.a.a(iArr.length == uriArr.length);
            this.f48796d = j10;
            this.f48797e = i10;
            this.f48798i = i11;
            this.f48800p = iArr;
            this.f48799o = uriArr;
            this.f48801q = jArr;
            this.f48802r = j11;
            this.f48803s = z10;
        }
    }

    private c(Object obj, a[] aVarArr, long j10, long j11, int i10) {
        this.f48783d = obj;
        this.f48785i = j10;
        this.f48786o = j11;
        this.f48784e = aVarArr.length + i10;
        this.f48788q = aVarArr;
        this.f48787p = i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static c b(Bundle bundle) {
        a[] aVarArr;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f48778t);
        if (parcelableArrayList == null) {
            aVarArr = new a[0];
        } else {
            a[] aVarArr2 = new a[parcelableArrayList.size()];
            for (int i10 = 0; i10 < parcelableArrayList.size(); i10++) {
                aVarArr2[i10] = (a) a.B.a((Bundle) parcelableArrayList.get(i10));
            }
            aVarArr = aVarArr2;
        }
        String str = f48779u;
        c cVar = f48776r;
        return new c(null, aVarArr, bundle.getLong(str, cVar.f48785i), bundle.getLong(f48780v, cVar.f48786o), bundle.getInt(f48781w, cVar.f48787p));
    }

    private boolean g(long j10, long j11, int i10) {
        if (j10 == Long.MIN_VALUE) {
            return false;
        }
        a c10 = c(i10);
        long j12 = c10.f48796d;
        if (j12 == Long.MIN_VALUE) {
            if (j11 != -9223372036854775807L && ((!c10.f48803s || c10.f48797e != -1) && j10 >= j11)) {
                return false;
            }
            return true;
        } else if (j10 >= j12) {
            return false;
        } else {
            return true;
        }
    }

    public a c(int i10) {
        int i11 = this.f48787p;
        if (i10 < i11) {
            return f48777s;
        }
        return this.f48788q[i10 - i11];
    }

    public int d(long j10, long j11) {
        if (j10 != Long.MIN_VALUE && (j11 == -9223372036854775807L || j10 < j11)) {
            int i10 = this.f48787p;
            while (i10 < this.f48784e && ((c(i10).f48796d != Long.MIN_VALUE && c(i10).f48796d <= j10) || !c(i10).j())) {
                i10++;
            }
            if (i10 < this.f48784e) {
                return i10;
            }
        }
        return -1;
    }

    public int e(long j10, long j11) {
        int i10 = this.f48784e - 1;
        int i11 = i10 - (f(i10) ? 1 : 0);
        while (i11 >= 0) {
            long j12 = j10;
            long j13 = j11;
            if (!g(j12, j13, i11)) {
                break;
            }
            i11--;
            j10 = j12;
            j11 = j13;
        }
        if (i11 >= 0 && c(i11).h()) {
            return i11;
        }
        return -1;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && c.class == obj.getClass()) {
            c cVar = (c) obj;
            if (w0.c(this.f48783d, cVar.f48783d) && this.f48784e == cVar.f48784e && this.f48785i == cVar.f48785i && this.f48786o == cVar.f48786o && this.f48787p == cVar.f48787p && Arrays.equals(this.f48788q, cVar.f48788q)) {
                return true;
            }
        }
        return false;
    }

    public boolean f(int i10) {
        if (i10 == this.f48784e - 1 && c(i10).i()) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10 = this.f48784e * 31;
        Object obj = this.f48783d;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        return ((((((((i10 + hashCode) * 31) + ((int) this.f48785i)) * 31) + ((int) this.f48786o)) * 31) + this.f48787p) * 31) + Arrays.hashCode(this.f48788q);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("AdPlaybackState(adsId=");
        sb2.append(this.f48783d);
        sb2.append(", adResumePositionUs=");
        sb2.append(this.f48785i);
        sb2.append(", adGroups=[");
        for (int i10 = 0; i10 < this.f48788q.length; i10++) {
            sb2.append("adGroup(timeUs=");
            sb2.append(this.f48788q[i10].f48796d);
            sb2.append(", ads=[");
            for (int i11 = 0; i11 < this.f48788q[i10].f48800p.length; i11++) {
                sb2.append("ad(state=");
                int i12 = this.f48788q[i10].f48800p[i11];
                if (i12 != 0) {
                    if (i12 != 1) {
                        if (i12 != 2) {
                            if (i12 != 3) {
                                if (i12 != 4) {
                                    sb2.append('?');
                                } else {
                                    sb2.append('!');
                                }
                            } else {
                                sb2.append('P');
                            }
                        } else {
                            sb2.append('S');
                        }
                    } else {
                        sb2.append('R');
                    }
                } else {
                    sb2.append('_');
                }
                sb2.append(", durationUs=");
                sb2.append(this.f48788q[i10].f48801q[i11]);
                sb2.append(')');
                if (i11 < this.f48788q[i10].f48800p.length - 1) {
                    sb2.append(", ");
                }
            }
            sb2.append("])");
            if (i10 < this.f48788q.length - 1) {
                sb2.append(", ");
            }
        }
        sb2.append("])");
        return sb2.toString();
    }
}
