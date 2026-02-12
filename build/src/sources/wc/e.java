package wc;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Arrays;
import oe.w0;
import uc.a0;
import uc.b0;
import uc.l;
import uc.z;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    protected final b0 f52520a;

    /* renamed from: b  reason: collision with root package name */
    private final int f52521b;

    /* renamed from: c  reason: collision with root package name */
    private final int f52522c;

    /* renamed from: d  reason: collision with root package name */
    private final long f52523d;

    /* renamed from: e  reason: collision with root package name */
    private final int f52524e;

    /* renamed from: f  reason: collision with root package name */
    private int f52525f;

    /* renamed from: g  reason: collision with root package name */
    private int f52526g;

    /* renamed from: h  reason: collision with root package name */
    private int f52527h;

    /* renamed from: i  reason: collision with root package name */
    private int f52528i;

    /* renamed from: j  reason: collision with root package name */
    private int f52529j;

    /* renamed from: k  reason: collision with root package name */
    private long[] f52530k;

    /* renamed from: l  reason: collision with root package name */
    private int[] f52531l;

    public e(int i10, int i11, long j10, int i12, b0 b0Var) {
        int i13;
        int i14;
        boolean z10 = true;
        if (i11 != 1 && i11 != 2) {
            z10 = false;
        }
        oe.a.a(z10);
        this.f52523d = j10;
        this.f52524e = i12;
        this.f52520a = b0Var;
        if (i11 == 2) {
            i13 = 1667497984;
        } else {
            i13 = 1651965952;
        }
        this.f52521b = d(i10, i13);
        if (i11 == 2) {
            i14 = d(i10, 1650720768);
        } else {
            i14 = -1;
        }
        this.f52522c = i14;
        this.f52530k = new long[IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING];
        this.f52531l = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING];
    }

    private static int d(int i10, int i11) {
        return (((i10 % 10) + 48) << 8) | ((i10 / 10) + 48) | i11;
    }

    private long e(int i10) {
        return (this.f52523d * i10) / this.f52524e;
    }

    private a0 h(int i10) {
        return new a0(this.f52531l[i10] * g(), this.f52530k[i10]);
    }

    public void a() {
        this.f52527h++;
    }

    public void b(long j10) {
        if (this.f52529j == this.f52531l.length) {
            long[] jArr = this.f52530k;
            this.f52530k = Arrays.copyOf(jArr, (jArr.length * 3) / 2);
            int[] iArr = this.f52531l;
            this.f52531l = Arrays.copyOf(iArr, (iArr.length * 3) / 2);
        }
        long[] jArr2 = this.f52530k;
        int i10 = this.f52529j;
        jArr2[i10] = j10;
        this.f52531l[i10] = this.f52528i;
        this.f52529j = i10 + 1;
    }

    public void c() {
        this.f52530k = Arrays.copyOf(this.f52530k, this.f52529j);
        this.f52531l = Arrays.copyOf(this.f52531l, this.f52529j);
    }

    public long f() {
        return e(this.f52527h);
    }

    public long g() {
        return e(1);
    }

    public z.a i(long j10) {
        int g10 = (int) (j10 / g());
        int h10 = w0.h(this.f52531l, g10, true, true);
        if (this.f52531l[h10] == g10) {
            return new z.a(h(h10));
        }
        a0 h11 = h(h10);
        int i10 = h10 + 1;
        if (i10 < this.f52530k.length) {
            return new z.a(h11, h(i10));
        }
        return new z.a(h11);
    }

    public boolean j(int i10) {
        if (this.f52521b != i10 && this.f52522c != i10) {
            return false;
        }
        return true;
    }

    public void k() {
        this.f52528i++;
    }

    public boolean l() {
        if (Arrays.binarySearch(this.f52531l, this.f52527h) >= 0) {
            return true;
        }
        return false;
    }

    public boolean m(l lVar) {
        int i10 = this.f52526g;
        boolean z10 = false;
        int f10 = i10 - this.f52520a.f(lVar, i10, false);
        this.f52526g = f10;
        if (f10 == 0) {
            z10 = true;
        }
        if (z10) {
            if (this.f52525f > 0) {
                b0 b0Var = this.f52520a;
                long f11 = f();
                boolean l10 = l();
                b0Var.a(f11, l10 ? 1 : 0, this.f52525f, 0, null);
            }
            a();
        }
        return z10;
    }

    public void n(int i10) {
        this.f52525f = i10;
        this.f52526g = i10;
    }

    public void o(long j10) {
        if (this.f52529j == 0) {
            this.f52527h = 0;
            return;
        }
        this.f52527h = this.f52531l[w0.i(this.f52530k, j10, true, true)];
    }
}
