package sd;

import android.net.Uri;
import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.ArrayList;
import java.util.Arrays;
import oe.w0;
import sd.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements g {

    /* renamed from: r  reason: collision with root package name */
    public static final c f48625r = new c(null, new a[0], 0, -9223372036854775807L, 0);

    /* renamed from: s  reason: collision with root package name */
    private static final a f48626s = new a(0).k(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f48627t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f48628u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f48629v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    private static final String f48630w = w0.B0(4);

    /* renamed from: x  reason: collision with root package name */
    public static final g.a f48631x = new g.a() { // from class: sd.a
        @Override // com.google.android.exoplayer2.g.a
        public final g a(Bundle bundle) {
            c b10;
            b10 = c.b(bundle);
            return b10;
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final Object f48632d;

    /* renamed from: e  reason: collision with root package name */
    public final int f48633e;

    /* renamed from: i  reason: collision with root package name */
    public final long f48634i;

    /* renamed from: o  reason: collision with root package name */
    public final long f48635o;

    /* renamed from: p  reason: collision with root package name */
    public final int f48636p;

    /* renamed from: q  reason: collision with root package name */
    private final a[] f48637q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements g {

        /* renamed from: d  reason: collision with root package name */
        public final long f48645d;

        /* renamed from: e  reason: collision with root package name */
        public final int f48646e;

        /* renamed from: i  reason: collision with root package name */
        public final int f48647i;

        /* renamed from: o  reason: collision with root package name */
        public final Uri[] f48648o;

        /* renamed from: p  reason: collision with root package name */
        public final int[] f48649p;

        /* renamed from: q  reason: collision with root package name */
        public final long[] f48650q;

        /* renamed from: r  reason: collision with root package name */
        public final long f48651r;

        /* renamed from: s  reason: collision with root package name */
        public final boolean f48652s;

        /* renamed from: t  reason: collision with root package name */
        private static final String f48638t = w0.B0(0);

        /* renamed from: u  reason: collision with root package name */
        private static final String f48639u = w0.B0(1);

        /* renamed from: v  reason: collision with root package name */
        private static final String f48640v = w0.B0(2);

        /* renamed from: w  reason: collision with root package name */
        private static final String f48641w = w0.B0(3);

        /* renamed from: x  reason: collision with root package name */
        private static final String f48642x = w0.B0(4);

        /* renamed from: y  reason: collision with root package name */
        private static final String f48643y = w0.B0(5);

        /* renamed from: z  reason: collision with root package name */
        private static final String f48644z = w0.B0(6);
        private static final String A = w0.B0(7);
        public static final g.a B = new g.a() { // from class: sd.b
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
            long j10 = bundle.getLong(f48638t);
            int i10 = bundle.getInt(f48639u);
            int i11 = bundle.getInt(A);
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(f48640v);
            int[] intArray = bundle.getIntArray(f48641w);
            long[] longArray = bundle.getLongArray(f48642x);
            long j11 = bundle.getLong(f48643y);
            boolean z10 = bundle.getBoolean(f48644z);
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
            if (this.f48652s && this.f48645d == Long.MIN_VALUE && this.f48646e == -1) {
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
                if (this.f48645d == aVar.f48645d && this.f48646e == aVar.f48646e && this.f48647i == aVar.f48647i && Arrays.equals(this.f48648o, aVar.f48648o) && Arrays.equals(this.f48649p, aVar.f48649p) && Arrays.equals(this.f48650q, aVar.f48650q) && this.f48651r == aVar.f48651r && this.f48652s == aVar.f48652s) {
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
                int[] iArr = this.f48649p;
                if (i12 >= iArr.length || this.f48652s || (i11 = iArr[i12]) == 0 || i11 == 1) {
                    break;
                }
                i12++;
            }
            return i12;
        }

        public boolean h() {
            if (this.f48646e == -1) {
                return true;
            }
            for (int i10 = 0; i10 < this.f48646e; i10++) {
                int i11 = this.f48649p[i10];
                if (i11 == 0 || i11 == 1) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            long j10 = this.f48645d;
            long j11 = this.f48651r;
            return (((((((((((((this.f48646e * 31) + this.f48647i) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + Arrays.hashCode(this.f48648o)) * 31) + Arrays.hashCode(this.f48649p)) * 31) + Arrays.hashCode(this.f48650q)) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + (this.f48652s ? 1 : 0);
        }

        public boolean j() {
            if (this.f48646e != -1 && f() >= this.f48646e) {
                return false;
            }
            return true;
        }

        public a k(int i10) {
            int[] d10 = d(this.f48649p, i10);
            long[] c10 = c(this.f48650q, i10);
            return new a(this.f48645d, i10, this.f48647i, d10, (Uri[]) Arrays.copyOf(this.f48648o, i10), c10, this.f48651r, this.f48652s);
        }

        private a(long j10, int i10, int i11, int[] iArr, Uri[] uriArr, long[] jArr, long j11, boolean z10) {
            oe.a.a(iArr.length == uriArr.length);
            this.f48645d = j10;
            this.f48646e = i10;
            this.f48647i = i11;
            this.f48649p = iArr;
            this.f48648o = uriArr;
            this.f48650q = jArr;
            this.f48651r = j11;
            this.f48652s = z10;
        }
    }

    private c(Object obj, a[] aVarArr, long j10, long j11, int i10) {
        this.f48632d = obj;
        this.f48634i = j10;
        this.f48635o = j11;
        this.f48633e = aVarArr.length + i10;
        this.f48637q = aVarArr;
        this.f48636p = i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static c b(Bundle bundle) {
        a[] aVarArr;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f48627t);
        if (parcelableArrayList == null) {
            aVarArr = new a[0];
        } else {
            a[] aVarArr2 = new a[parcelableArrayList.size()];
            for (int i10 = 0; i10 < parcelableArrayList.size(); i10++) {
                aVarArr2[i10] = (a) a.B.a((Bundle) parcelableArrayList.get(i10));
            }
            aVarArr = aVarArr2;
        }
        String str = f48628u;
        c cVar = f48625r;
        return new c(null, aVarArr, bundle.getLong(str, cVar.f48634i), bundle.getLong(f48629v, cVar.f48635o), bundle.getInt(f48630w, cVar.f48636p));
    }

    private boolean g(long j10, long j11, int i10) {
        if (j10 == Long.MIN_VALUE) {
            return false;
        }
        a c10 = c(i10);
        long j12 = c10.f48645d;
        if (j12 == Long.MIN_VALUE) {
            if (j11 != -9223372036854775807L && ((!c10.f48652s || c10.f48646e != -1) && j10 >= j11)) {
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
        int i11 = this.f48636p;
        if (i10 < i11) {
            return f48626s;
        }
        return this.f48637q[i10 - i11];
    }

    public int d(long j10, long j11) {
        if (j10 != Long.MIN_VALUE && (j11 == -9223372036854775807L || j10 < j11)) {
            int i10 = this.f48636p;
            while (i10 < this.f48633e && ((c(i10).f48645d != Long.MIN_VALUE && c(i10).f48645d <= j10) || !c(i10).j())) {
                i10++;
            }
            if (i10 < this.f48633e) {
                return i10;
            }
        }
        return -1;
    }

    public int e(long j10, long j11) {
        int i10 = this.f48633e - 1;
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
            if (w0.c(this.f48632d, cVar.f48632d) && this.f48633e == cVar.f48633e && this.f48634i == cVar.f48634i && this.f48635o == cVar.f48635o && this.f48636p == cVar.f48636p && Arrays.equals(this.f48637q, cVar.f48637q)) {
                return true;
            }
        }
        return false;
    }

    public boolean f(int i10) {
        if (i10 == this.f48633e - 1 && c(i10).i()) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10 = this.f48633e * 31;
        Object obj = this.f48632d;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        return ((((((((i10 + hashCode) * 31) + ((int) this.f48634i)) * 31) + ((int) this.f48635o)) * 31) + this.f48636p) * 31) + Arrays.hashCode(this.f48637q);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("AdPlaybackState(adsId=");
        sb2.append(this.f48632d);
        sb2.append(", adResumePositionUs=");
        sb2.append(this.f48634i);
        sb2.append(", adGroups=[");
        for (int i10 = 0; i10 < this.f48637q.length; i10++) {
            sb2.append("adGroup(timeUs=");
            sb2.append(this.f48637q[i10].f48645d);
            sb2.append(", ads=[");
            for (int i11 = 0; i11 < this.f48637q[i10].f48649p.length; i11++) {
                sb2.append("ad(state=");
                int i12 = this.f48637q[i10].f48649p[i11];
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
                sb2.append(this.f48637q[i10].f48650q[i11]);
                sb2.append(')');
                if (i11 < this.f48637q[i10].f48649p.length - 1) {
                    sb2.append(", ");
                }
            }
            sb2.append("])");
            if (i10 < this.f48637q.length - 1) {
                sb2.append(", ");
            }
        }
        sb2.append("])");
        return sb2.toString();
    }
}
