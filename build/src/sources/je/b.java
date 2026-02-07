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
    protected final u0 f29886a;

    /* renamed from: b  reason: collision with root package name */
    protected final int f29887b;

    /* renamed from: c  reason: collision with root package name */
    protected final int[] f29888c;

    /* renamed from: d  reason: collision with root package name */
    private final int f29889d;

    /* renamed from: e  reason: collision with root package name */
    private final Format[] f29890e;

    /* renamed from: f  reason: collision with root package name */
    private final long[] f29891f;

    /* renamed from: g  reason: collision with root package name */
    private int f29892g;

    public b(u0 u0Var, int... iArr) {
        this(u0Var, iArr, 0);
    }

    public static /* synthetic */ int t(Format format, Format format2) {
        return format2.f11583s - format.f11583s;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public boolean a(int i10, long j10) {
        if (this.f29891f[i10] > j10) {
            return true;
        }
        return false;
    }

    @Override // je.l
    public final Format d(int i10) {
        return this.f29890e[i10];
    }

    @Override // je.l
    public final int e(int i10) {
        return this.f29888c[i10];
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            b bVar = (b) obj;
            if (this.f29886a == bVar.f29886a && Arrays.equals(this.f29888c, bVar.f29888c)) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public boolean f(int i10, long j10) {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        boolean a10 = a(i10, elapsedRealtime);
        for (int i11 = 0; i11 < this.f29887b && !a10; i11++) {
            if (i11 != i10 && !a(i11, elapsedRealtime)) {
                a10 = true;
            } else {
                a10 = false;
            }
        }
        if (!a10) {
            return false;
        }
        long[] jArr = this.f29891f;
        jArr[i10] = Math.max(jArr[i10], w0.b(elapsedRealtime, j10, LongCompanionObject.MAX_VALUE));
        return true;
    }

    public int hashCode() {
        if (this.f29892g == 0) {
            this.f29892g = (System.identityHashCode(this.f29886a) * 31) + Arrays.hashCode(this.f29888c);
        }
        return this.f29892g;
    }

    @Override // je.l
    public final int j(int i10) {
        for (int i11 = 0; i11 < this.f29887b; i11++) {
            if (this.f29888c[i11] == i10) {
                return i11;
            }
        }
        return -1;
    }

    @Override // je.l
    public final u0 k() {
        return this.f29886a;
    }

    @Override // je.l
    public final int length() {
        return this.f29888c.length;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public int n(long j10, List list) {
        return list.size();
    }

    @Override // je.l
    public final int o(Format format) {
        for (int i10 = 0; i10 < this.f29887b; i10++) {
            if (this.f29890e[i10] == format) {
                return i10;
            }
        }
        return -1;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public final int p() {
        return this.f29888c[c()];
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public final Format q() {
        return this.f29890e[c()];
    }

    public b(u0 u0Var, int[] iArr, int i10) {
        int i11 = 0;
        ne.a.g(iArr.length > 0);
        this.f29889d = i10;
        this.f29886a = (u0) ne.a.e(u0Var);
        int length = iArr.length;
        this.f29887b = length;
        this.f29890e = new Format[length];
        for (int i12 = 0; i12 < iArr.length; i12++) {
            this.f29890e[i12] = u0Var.c(iArr[i12]);
        }
        Arrays.sort(this.f29890e, new Comparator() { // from class: je.a
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return b.t((Format) obj, (Format) obj2);
            }
        });
        this.f29888c = new int[this.f29887b];
        while (true) {
            int i13 = this.f29887b;
            if (i11 < i13) {
                this.f29888c[i11] = u0Var.d(this.f29890e[i11]);
                i11++;
            } else {
                this.f29891f = new long[i13];
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
