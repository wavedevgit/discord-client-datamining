package ke;

import android.os.SystemClock;
import com.google.android.exoplayer2.Format;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
import oe.w0;
import rd.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b implements com.google.android.exoplayer2.trackselection.g {

    /* renamed from: a  reason: collision with root package name */
    protected final u0 f30837a;

    /* renamed from: b  reason: collision with root package name */
    protected final int f30838b;

    /* renamed from: c  reason: collision with root package name */
    protected final int[] f30839c;

    /* renamed from: d  reason: collision with root package name */
    private final int f30840d;

    /* renamed from: e  reason: collision with root package name */
    private final Format[] f30841e;

    /* renamed from: f  reason: collision with root package name */
    private final long[] f30842f;

    /* renamed from: g  reason: collision with root package name */
    private int f30843g;

    public b(u0 u0Var, int... iArr) {
        this(u0Var, iArr, 0);
    }

    public static /* synthetic */ int t(Format format, Format format2) {
        return format2.f11723s - format.f11723s;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public boolean a(int i10, long j10) {
        if (this.f30842f[i10] > j10) {
            return true;
        }
        return false;
    }

    @Override // ke.l
    public final Format c(int i10) {
        return this.f30841e[i10];
    }

    @Override // ke.l
    public final int d(int i10) {
        return this.f30839c[i10];
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            b bVar = (b) obj;
            if (this.f30837a == bVar.f30837a && Arrays.equals(this.f30839c, bVar.f30839c)) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public boolean f(int i10, long j10) {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        boolean a10 = a(i10, elapsedRealtime);
        for (int i11 = 0; i11 < this.f30838b && !a10; i11++) {
            if (i11 != i10 && !a(i11, elapsedRealtime)) {
                a10 = true;
            } else {
                a10 = false;
            }
        }
        if (!a10) {
            return false;
        }
        long[] jArr = this.f30842f;
        jArr[i10] = Math.max(jArr[i10], w0.b(elapsedRealtime, j10, LongCompanionObject.MAX_VALUE));
        return true;
    }

    public int hashCode() {
        if (this.f30843g == 0) {
            this.f30843g = (System.identityHashCode(this.f30837a) * 31) + Arrays.hashCode(this.f30839c);
        }
        return this.f30843g;
    }

    @Override // ke.l
    public final int j(int i10) {
        for (int i11 = 0; i11 < this.f30838b; i11++) {
            if (this.f30839c[i11] == i10) {
                return i11;
            }
        }
        return -1;
    }

    @Override // ke.l
    public final u0 l() {
        return this.f30837a;
    }

    @Override // ke.l
    public final int length() {
        return this.f30839c.length;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public int n(long j10, List list) {
        return list.size();
    }

    @Override // ke.l
    public final int o(Format format) {
        for (int i10 = 0; i10 < this.f30838b; i10++) {
            if (this.f30841e[i10] == format) {
                return i10;
            }
        }
        return -1;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public final int p() {
        return this.f30839c[b()];
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public final Format q() {
        return this.f30841e[b()];
    }

    public b(u0 u0Var, int[] iArr, int i10) {
        int i11 = 0;
        oe.a.g(iArr.length > 0);
        this.f30840d = i10;
        this.f30837a = (u0) oe.a.e(u0Var);
        int length = iArr.length;
        this.f30838b = length;
        this.f30841e = new Format[length];
        for (int i12 = 0; i12 < iArr.length; i12++) {
            this.f30841e[i12] = u0Var.c(iArr[i12]);
        }
        Arrays.sort(this.f30841e, new Comparator() { // from class: ke.a
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return b.t((Format) obj, (Format) obj2);
            }
        });
        this.f30839c = new int[this.f30838b];
        while (true) {
            int i13 = this.f30838b;
            if (i11 < i13) {
                this.f30839c[i11] = u0Var.d(this.f30841e[i11]);
                i11++;
            } else {
                this.f30842f = new long[i13];
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
