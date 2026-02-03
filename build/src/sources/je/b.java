package je;

import android.os.SystemClock;
import com.google.android.exoplayer2.Format;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
import ne.w0;
import qd.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements com.google.android.exoplayer2.trackselection.g {

    /* renamed from: a  reason: collision with root package name */
    protected final u0 f31516a;

    /* renamed from: b  reason: collision with root package name */
    protected final int f31517b;

    /* renamed from: c  reason: collision with root package name */
    protected final int[] f31518c;

    /* renamed from: d  reason: collision with root package name */
    private final int f31519d;

    /* renamed from: e  reason: collision with root package name */
    private final Format[] f31520e;

    /* renamed from: f  reason: collision with root package name */
    private final long[] f31521f;

    /* renamed from: g  reason: collision with root package name */
    private int f31522g;

    public b(u0 u0Var, int... iArr) {
        this(u0Var, iArr, 0);
    }

    public static /* synthetic */ int t(Format format, Format format2) {
        return format2.f11299s - format.f11299s;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public boolean a(int i10, long j10) {
        if (this.f31521f[i10] > j10) {
            return true;
        }
        return false;
    }

    @Override // je.l
    public final Format d(int i10) {
        return this.f31520e[i10];
    }

    @Override // je.l
    public final int e(int i10) {
        return this.f31518c[i10];
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            b bVar = (b) obj;
            if (this.f31516a == bVar.f31516a && Arrays.equals(this.f31518c, bVar.f31518c)) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public boolean f(int i10, long j10) {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        boolean a10 = a(i10, elapsedRealtime);
        for (int i11 = 0; i11 < this.f31517b && !a10; i11++) {
            if (i11 != i10 && !a(i11, elapsedRealtime)) {
                a10 = true;
            } else {
                a10 = false;
            }
        }
        if (!a10) {
            return false;
        }
        long[] jArr = this.f31521f;
        jArr[i10] = Math.max(jArr[i10], w0.b(elapsedRealtime, j10, LongCompanionObject.MAX_VALUE));
        return true;
    }

    public int hashCode() {
        if (this.f31522g == 0) {
            this.f31522g = (System.identityHashCode(this.f31516a) * 31) + Arrays.hashCode(this.f31518c);
        }
        return this.f31522g;
    }

    @Override // je.l
    public final int j(int i10) {
        for (int i11 = 0; i11 < this.f31517b; i11++) {
            if (this.f31518c[i11] == i10) {
                return i11;
            }
        }
        return -1;
    }

    @Override // je.l
    public final u0 k() {
        return this.f31516a;
    }

    @Override // je.l
    public final int length() {
        return this.f31518c.length;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public int n(long j10, List list) {
        return list.size();
    }

    @Override // je.l
    public final int o(Format format) {
        for (int i10 = 0; i10 < this.f31517b; i10++) {
            if (this.f31520e[i10] == format) {
                return i10;
            }
        }
        return -1;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public final int p() {
        return this.f31518c[c()];
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public final Format q() {
        return this.f31520e[c()];
    }

    public b(u0 u0Var, int[] iArr, int i10) {
        int i11 = 0;
        ne.a.g(iArr.length > 0);
        this.f31519d = i10;
        this.f31516a = (u0) ne.a.e(u0Var);
        int length = iArr.length;
        this.f31517b = length;
        this.f31520e = new Format[length];
        for (int i12 = 0; i12 < iArr.length; i12++) {
            this.f31520e[i12] = u0Var.c(iArr[i12]);
        }
        Arrays.sort(this.f31520e, new Comparator() { // from class: je.a
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return b.t((Format) obj, (Format) obj2);
            }
        });
        this.f31518c = new int[this.f31517b];
        while (true) {
            int i13 = this.f31517b;
            if (i11 < i13) {
                this.f31518c[i11] = u0Var.d(this.f31520e[i11]);
                i11++;
            } else {
                this.f31521f = new long[i13];
                return;
            }
        }
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public void disable() {
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public void enable() {
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public void g(float f10) {
    }
}
