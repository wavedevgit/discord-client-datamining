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
    public static final c f49740r = new c(null, new a[0], 0, -9223372036854775807L, 0);

    /* renamed from: s  reason: collision with root package name */
    private static final a f49741s = new a(0).k(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f49742t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f49743u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f49744v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    private static final String f49745w = w0.B0(4);

    /* renamed from: x  reason: collision with root package name */
    public static final g.a f49746x = new g.a() { // from class: sd.a
        @Override // com.google.android.exoplayer2.g.a
        public final g a(Bundle bundle) {
            c b10;
            b10 = c.b(bundle);
            return b10;
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final Object f49747d;

    /* renamed from: e  reason: collision with root package name */
    public final int f49748e;

    /* renamed from: i  reason: collision with root package name */
    public final long f49749i;

    /* renamed from: o  reason: collision with root package name */
    public final long f49750o;

    /* renamed from: p  reason: collision with root package name */
    public final int f49751p;

    /* renamed from: q  reason: collision with root package name */
    private final a[] f49752q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements g {

        /* renamed from: d  reason: collision with root package name */
        public final long f49760d;

        /* renamed from: e  reason: collision with root package name */
        public final int f49761e;

        /* renamed from: i  reason: collision with root package name */
        public final int f49762i;

        /* renamed from: o  reason: collision with root package name */
        public final Uri[] f49763o;

        /* renamed from: p  reason: collision with root package name */
        public final int[] f49764p;

        /* renamed from: q  reason: collision with root package name */
        public final long[] f49765q;

        /* renamed from: r  reason: collision with root package name */
        public final long f49766r;

        /* renamed from: s  reason: collision with root package name */
        public final boolean f49767s;

        /* renamed from: t  reason: collision with root package name */
        private static final String f49753t = w0.B0(0);

        /* renamed from: u  reason: collision with root package name */
        private static final String f49754u = w0.B0(1);

        /* renamed from: v  reason: collision with root package name */
        private static final String f49755v = w0.B0(2);

        /* renamed from: w  reason: collision with root package name */
        private static final String f49756w = w0.B0(3);

        /* renamed from: x  reason: collision with root package name */
        private static final String f49757x = w0.B0(4);

        /* renamed from: y  reason: collision with root package name */
        private static final String f49758y = w0.B0(5);

        /* renamed from: z  reason: collision with root package name */
        private static final String f49759z = w0.B0(6);
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
            long j10 = bundle.getLong(f49753t);
            int i10 = bundle.getInt(f49754u);
            int i11 = bundle.getInt(A);
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(f49755v);
            int[] intArray = bundle.getIntArray(f49756w);
            long[] longArray = bundle.getLongArray(f49757x);
            long j11 = bundle.getLong(f49758y);
            boolean z10 = bundle.getBoolean(f49759z);
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
            if (this.f49767s && this.f49760d == Long.MIN_VALUE && this.f49761e == -1) {
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
                if (this.f49760d == aVar.f49760d && this.f49761e == aVar.f49761e && this.f49762i == aVar.f49762i && Arrays.equals(this.f49763o, aVar.f49763o) && Arrays.equals(this.f49764p, aVar.f49764p) && Arrays.equals(this.f49765q, aVar.f49765q) && this.f49766r == aVar.f49766r && this.f49767s == aVar.f49767s) {
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
                int[] iArr = this.f49764p;
                if (i12 >= iArr.length || this.f49767s || (i11 = iArr[i12]) == 0 || i11 == 1) {
                    break;
                }
                i12++;
            }
            return i12;
        }

        public boolean h() {
            if (this.f49761e == -1) {
                return true;
            }
            for (int i10 = 0; i10 < this.f49761e; i10++) {
                int i11 = this.f49764p[i10];
                if (i11 == 0 || i11 == 1) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            long j10 = this.f49760d;
            long j11 = this.f49766r;
            return (((((((((((((this.f49761e * 31) + this.f49762i) * 31) + ((int) (j10 ^ (j10 >>> 32)))) * 31) + Arrays.hashCode(this.f49763o)) * 31) + Arrays.hashCode(this.f49764p)) * 31) + Arrays.hashCode(this.f49765q)) * 31) + ((int) (j11 ^ (j11 >>> 32)))) * 31) + (this.f49767s ? 1 : 0);
        }

        public boolean j() {
            if (this.f49761e != -1 && f() >= this.f49761e) {
                return false;
            }
            return true;
        }

        public a k(int i10) {
            int[] d10 = d(this.f49764p, i10);
            long[] c10 = c(this.f49765q, i10);
            return new a(this.f49760d, i10, this.f49762i, d10, (Uri[]) Arrays.copyOf(this.f49763o, i10), c10, this.f49766r, this.f49767s);
        }

        private a(long j10, int i10, int i11, int[] iArr, Uri[] uriArr, long[] jArr, long j11, boolean z10) {
            oe.a.a(iArr.length == uriArr.length);
            this.f49760d = j10;
            this.f49761e = i10;
            this.f49762i = i11;
            this.f49764p = iArr;
            this.f49763o = uriArr;
            this.f49765q = jArr;
            this.f49766r = j11;
            this.f49767s = z10;
        }
    }

    private c(Object obj, a[] aVarArr, long j10, long j11, int i10) {
        this.f49747d = obj;
        this.f49749i = j10;
        this.f49750o = j11;
        this.f49748e = aVarArr.length + i10;
        this.f49752q = aVarArr;
        this.f49751p = i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static c b(Bundle bundle) {
        a[] aVarArr;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f49742t);
        if (parcelableArrayList == null) {
            aVarArr = new a[0];
        } else {
            a[] aVarArr2 = new a[parcelableArrayList.size()];
            for (int i10 = 0; i10 < parcelableArrayList.size(); i10++) {
                aVarArr2[i10] = (a) a.B.a((Bundle) parcelableArrayList.get(i10));
            }
            aVarArr = aVarArr2;
        }
        String str = f49743u;
        c cVar = f49740r;
        return new c(null, aVarArr, bundle.getLong(str, cVar.f49749i), bundle.getLong(f49744v, cVar.f49750o), bundle.getInt(f49745w, cVar.f49751p));
    }

    private boolean g(long j10, long j11, int i10) {
        if (j10 == Long.MIN_VALUE) {
            return false;
        }
        a c10 = c(i10);
        long j12 = c10.f49760d;
        if (j12 == Long.MIN_VALUE) {
            if (j11 != -9223372036854775807L && ((!c10.f49767s || c10.f49761e != -1) && j10 >= j11)) {
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
        int i11 = this.f49751p;
        if (i10 < i11) {
            return f49741s;
        }
        return this.f49752q[i10 - i11];
    }

    public int d(long j10, long j11) {
        if (j10 != Long.MIN_VALUE && (j11 == -9223372036854775807L || j10 < j11)) {
            int i10 = this.f49751p;
            while (i10 < this.f49748e && ((c(i10).f49760d != Long.MIN_VALUE && c(i10).f49760d <= j10) || !c(i10).j())) {
                i10++;
            }
            if (i10 < this.f49748e) {
                return i10;
            }
        }
        return -1;
    }

    public int e(long j10, long j11) {
        int i10 = this.f49748e - 1;
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
            if (w0.c(this.f49747d, cVar.f49747d) && this.f49748e == cVar.f49748e && this.f49749i == cVar.f49749i && this.f49750o == cVar.f49750o && this.f49751p == cVar.f49751p && Arrays.equals(this.f49752q, cVar.f49752q)) {
                return true;
            }
        }
        return false;
    }

    public boolean f(int i10) {
        if (i10 == this.f49748e - 1 && c(i10).i()) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10 = this.f49748e * 31;
        Object obj = this.f49747d;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        return ((((((((i10 + hashCode) * 31) + ((int) this.f49749i)) * 31) + ((int) this.f49750o)) * 31) + this.f49751p) * 31) + Arrays.hashCode(this.f49752q);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("AdPlaybackState(adsId=");
        sb2.append(this.f49747d);
        sb2.append(", adResumePositionUs=");
        sb2.append(this.f49749i);
        sb2.append(", adGroups=[");
        for (int i10 = 0; i10 < this.f49752q.length; i10++) {
            sb2.append("adGroup(timeUs=");
            sb2.append(this.f49752q[i10].f49760d);
            sb2.append(", ads=[");
            for (int i11 = 0; i11 < this.f49752q[i10].f49764p.length; i11++) {
                sb2.append("ad(state=");
                int i12 = this.f49752q[i10].f49764p[i11];
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
                sb2.append(this.f49752q[i10].f49765q[i11]);
                sb2.append(')');
                if (i11 < this.f49752q[i10].f49764p.length - 1) {
                    sb2.append(", ");
                }
            }
            sb2.append("])");
            if (i10 < this.f49752q.length - 1) {
                sb2.append(", ");
            }
        }
        sb2.append("])");
        return sb2.toString();
    }
}
