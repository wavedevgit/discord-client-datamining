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
    public static final c f48056r = new c(null, new a[0], 0, -9223372036854775807L, 0);

    /* renamed from: s  reason: collision with root package name */
    private static final a f48057s = new a(0).k(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f48058t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f48059u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f48060v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    private static final String f48061w = w0.B0(4);

    /* renamed from: x  reason: collision with root package name */
    public static final g.a f48062x = new g.a() { // from class: sd.a
        @Override // com.google.android.exoplayer2.g.a
        public final g a(Bundle bundle) {
            c b10;
            b10 = c.b(bundle);
            return b10;
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final Object f48063d;

    /* renamed from: e  reason: collision with root package name */
    public final int f48064e;

    /* renamed from: i  reason: collision with root package name */
    public final long f48065i;

    /* renamed from: o  reason: collision with root package name */
    public final long f48066o;

    /* renamed from: p  reason: collision with root package name */
    public final int f48067p;

    /* renamed from: q  reason: collision with root package name */
    private final a[] f48068q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements g {

        /* renamed from: d  reason: collision with root package name */
        public final long f48076d;

        /* renamed from: e  reason: collision with root package name */
        public final int f48077e;

        /* renamed from: i  reason: collision with root package name */
        public final int f48078i;

        /* renamed from: o  reason: collision with root package name */
        public final Uri[] f48079o;

        /* renamed from: p  reason: collision with root package name */
        public final int[] f48080p;

        /* renamed from: q  reason: collision with root package name */
        public final long[] f48081q;

        /* renamed from: r  reason: collision with root package name */
        public final long f48082r;

        /* renamed from: s  reason: collision with root package name */
        public final boolean f48083s;

        /* renamed from: t  reason: collision with root package name */
        private static final String f48069t = w0.B0(0);

        /* renamed from: u  reason: collision with root package name */
        private static final String f48070u = w0.B0(1);

        /* renamed from: v  reason: collision with root package name */
        private static final String f48071v = w0.B0(2);

        /* renamed from: w  reason: collision with root package name */
        private static final String f48072w = w0.B0(3);

        /* renamed from: x  reason: collision with root package name */
        private static final String f48073x = w0.B0(4);

        /* renamed from: y  reason: collision with root package name */
        private static final String f48074y = w0.B0(5);

        /* renamed from: z  reason: collision with root package name */
        private static final String f48075z = w0.B0(6);
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
            long j10 = bundle.getLong(f48069t);
            int i10 = bundle.getInt(f48070u);
            int i11 = bundle.getInt(A);
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(f48071v);
            int[] intArray = bundle.getIntArray(f48072w);
            long[] longArray = bundle.getLongArray(f48073x);
            long j11 = bundle.getLong(f48074y);
            boolean z10 = bundle.getBoolean(f48075z);
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
            if (this.f48083s && this.f48076d == Long.MIN_VALUE && this.f48077e == -1) {
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
                if (this.f48076d == aVar.f48076d && this.f48077e == aVar.f48077e && this.f48078i == aVar.f48078i && Arrays.equals(this.f48079o, aVar.f48079o) && Arrays.equals(this.f48080p, aVar.f48080p) && Arrays.equals(this.f48081q, aVar.f48081q) && this.f48082r == aVar.f48082r && this.f48083s == aVar.f48083s) {
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
                int[] iArr = this.f48080p;
                if (i12 >= iArr.length || this.f48083s || (i11 = iArr[i12]) == 0 || i11 == 1) {
                    break;
                }
                i12++;
            }
            return i12;
        }

        public boolean h() {
            if (this.f48077e == -1) {
                return true;
            }
            for (int i10 = 0; i10 < this.f48077e; i10++) {
                int i11 = this.f48080p[i10];
                if (i11 == 0 || i11 == 1) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            long j10 = this.f48076d;
            long j11 = this.f48082r;
            return (((((((((((((this.f48077e * 31) + this.f48078i) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + Arrays.hashCode(this.f48079o)) * 31) + Arrays.hashCode(this.f48080p)) * 31) + Arrays.hashCode(this.f48081q)) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + (this.f48083s ? 1 : 0);
        }

        public boolean j() {
            if (this.f48077e != -1 && f() >= this.f48077e) {
                return false;
            }
            return true;
        }

        public a k(int i10) {
            int[] d10 = d(this.f48080p, i10);
            long[] c10 = c(this.f48081q, i10);
            return new a(this.f48076d, i10, this.f48078i, d10, (Uri[]) Arrays.copyOf(this.f48079o, i10), c10, this.f48082r, this.f48083s);
        }

        private a(long j10, int i10, int i11, int[] iArr, Uri[] uriArr, long[] jArr, long j11, boolean z10) {
            oe.a.a(iArr.length == uriArr.length);
            this.f48076d = j10;
            this.f48077e = i10;
            this.f48078i = i11;
            this.f48080p = iArr;
            this.f48079o = uriArr;
            this.f48081q = jArr;
            this.f48082r = j11;
            this.f48083s = z10;
        }
    }

    private c(Object obj, a[] aVarArr, long j10, long j11, int i10) {
        this.f48063d = obj;
        this.f48065i = j10;
        this.f48066o = j11;
        this.f48064e = aVarArr.length + i10;
        this.f48068q = aVarArr;
        this.f48067p = i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static c b(Bundle bundle) {
        a[] aVarArr;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f48058t);
        if (parcelableArrayList == null) {
            aVarArr = new a[0];
        } else {
            a[] aVarArr2 = new a[parcelableArrayList.size()];
            for (int i10 = 0; i10 < parcelableArrayList.size(); i10++) {
                aVarArr2[i10] = (a) a.B.a((Bundle) parcelableArrayList.get(i10));
            }
            aVarArr = aVarArr2;
        }
        String str = f48059u;
        c cVar = f48056r;
        return new c(null, aVarArr, bundle.getLong(str, cVar.f48065i), bundle.getLong(f48060v, cVar.f48066o), bundle.getInt(f48061w, cVar.f48067p));
    }

    private boolean g(long j10, long j11, int i10) {
        if (j10 == Long.MIN_VALUE) {
            return false;
        }
        a c10 = c(i10);
        long j12 = c10.f48076d;
        if (j12 == Long.MIN_VALUE) {
            if (j11 != -9223372036854775807L && ((!c10.f48083s || c10.f48077e != -1) && j10 >= j11)) {
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
        int i11 = this.f48067p;
        if (i10 < i11) {
            return f48057s;
        }
        return this.f48068q[i10 - i11];
    }

    public int d(long j10, long j11) {
        if (j10 != Long.MIN_VALUE && (j11 == -9223372036854775807L || j10 < j11)) {
            int i10 = this.f48067p;
            while (i10 < this.f48064e && ((c(i10).f48076d != Long.MIN_VALUE && c(i10).f48076d <= j10) || !c(i10).j())) {
                i10++;
            }
            if (i10 < this.f48064e) {
                return i10;
            }
        }
        return -1;
    }

    public int e(long j10, long j11) {
        int i10 = this.f48064e - 1;
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
            if (w0.c(this.f48063d, cVar.f48063d) && this.f48064e == cVar.f48064e && this.f48065i == cVar.f48065i && this.f48066o == cVar.f48066o && this.f48067p == cVar.f48067p && Arrays.equals(this.f48068q, cVar.f48068q)) {
                return true;
            }
        }
        return false;
    }

    public boolean f(int i10) {
        if (i10 == this.f48064e - 1 && c(i10).i()) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10 = this.f48064e * 31;
        Object obj = this.f48063d;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        return ((((((((i10 + hashCode) * 31) + ((int) this.f48065i)) * 31) + ((int) this.f48066o)) * 31) + this.f48067p) * 31) + Arrays.hashCode(this.f48068q);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("AdPlaybackState(adsId=");
        sb2.append(this.f48063d);
        sb2.append(", adResumePositionUs=");
        sb2.append(this.f48065i);
        sb2.append(", adGroups=[");
        for (int i10 = 0; i10 < this.f48068q.length; i10++) {
            sb2.append("adGroup(timeUs=");
            sb2.append(this.f48068q[i10].f48076d);
            sb2.append(", ads=[");
            for (int i11 = 0; i11 < this.f48068q[i10].f48080p.length; i11++) {
                sb2.append("ad(state=");
                int i12 = this.f48068q[i10].f48080p[i11];
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
                sb2.append(this.f48068q[i10].f48081q[i11]);
                sb2.append(')');
                if (i11 < this.f48068q[i10].f48080p.length - 1) {
                    sb2.append(", ");
                }
            }
            sb2.append("])");
            if (i10 < this.f48068q.length - 1) {
                sb2.append(", ");
            }
        }
        sb2.append("])");
        return sb2.toString();
    }
}
