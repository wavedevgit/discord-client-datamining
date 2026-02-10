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
    protected final b0 f52519a;

    /* renamed from: b  reason: collision with root package name */
    private final int f52520b;

    /* renamed from: c  reason: collision with root package name */
    private final int f52521c;

    /* renamed from: d  reason: collision with root package name */
    private final long f52522d;

    /* renamed from: e  reason: collision with root package name */
    private final int f52523e;

    /* renamed from: f  reason: collision with root package name */
    private int f52524f;

    /* renamed from: g  reason: collision with root package name */
    private int f52525g;

    /* renamed from: h  reason: collision with root package name */
    private int f52526h;

    /* renamed from: i  reason: collision with root package name */
    private int f52527i;

    /* renamed from: j  reason: collision with root package name */
    private int f52528j;

    /* renamed from: k  reason: collision with root package name */
    private long[] f52529k;

    /* renamed from: l  reason: collision with root package name */
    private int[] f52530l;

    public e(int i10, int i11, long j10, int i12, b0 b0Var) {
        int i13;
        int i14;
        boolean z10 = true;
        if (i11 != 1 && i11 != 2) {
            z10 = false;
        }
        oe.a.a(z10);
        this.f52522d = j10;
        this.f52523e = i12;
        this.f52519a = b0Var;
        if (i11 == 2) {
            i13 = 1667497984;
        } else {
            i13 = 1651965952;
        }
        this.f52520b = d(i10, i13);
        if (i11 == 2) {
            i14 = d(i10, 1650720768);
        } else {
            i14 = -1;
        }
        this.f52521c = i14;
        this.f52529k = new long[IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING];
        this.f52530l = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING];
    }

    private static int d(int i10, int i11) {
        return (((i10 % 10) + 48) << 8) | ((i10 / 10) + 48) | i11;
    }

    private long e(int i10) {
        return (this.f52522d * i10) / this.f52523e;
    }

    private a0 h(int i10) {
        return new a0(this.f52530l[i10] * g(), this.f52529k[i10]);
    }

    public void a() {
        this.f52526h++;
    }

    public void b(long j10) {
        if (this.f52528j == this.f52530l.length) {
            long[] jArr = this.f52529k;
            this.f52529k = Arrays.copyOf(jArr, (jArr.length * 3) / 2);
            int[] iArr = this.f52530l;
            this.f52530l = Arrays.copyOf(iArr, (iArr.length * 3) / 2);
        }
        long[] jArr2 = this.f52529k;
        int i10 = this.f52528j;
        jArr2[i10] = j10;
        this.f52530l[i10] = this.f52527i;
        this.f52528j = i10 + 1;
    }

    public void c() {
        this.f52529k = Arrays.copyOf(this.f52529k, this.f52528j);
        this.f52530l = Arrays.copyOf(this.f52530l, this.f52528j);
    }

    public long f() {
        return e(this.f52526h);
    }

    public long g() {
        return e(1);
    }

    public z.a i(long j10) {
        int g10 = (int) (j10 / g());
        int h10 = w0.h(this.f52530l, g10, true, true);
        if (this.f52530l[h10] == g10) {
            return new z.a(h(h10));
        }
        a0 h11 = h(h10);
        int i10 = h10 + 1;
        if (i10 < this.f52529k.length) {
            return new z.a(h11, h(i10));
        }
        return new z.a(h11);
    }

    public boolean j(int i10) {
        if (this.f52520b != i10 && this.f52521c != i10) {
            return false;
        }
        return true;
    }

    public void k() {
        this.f52527i++;
    }

    public boolean l() {
        if (Arrays.binarySearch(this.f52530l, this.f52526h) >= 0) {
            return true;
        }
        return false;
    }

    public boolean m(l lVar) {
        int i10 = this.f52525g;
        boolean z10 = false;
        int f10 = i10 - this.f52519a.f(lVar, i10, false);
        this.f52525g = f10;
        if (f10 == 0) {
            z10 = true;
        }
        if (z10) {
            if (this.f52524f > 0) {
                b0 b0Var = this.f52519a;
                long f11 = f();
                boolean l10 = l();
                b0Var.a(f11, l10 ? 1 : 0, this.f52524f, 0, null);
            }
            a();
        }
        return z10;
    }

    public void n(int i10) {
        this.f52524f = i10;
        this.f52525g = i10;
    }

    public void o(long j10) {
        if (this.f52528j == 0) {
            this.f52526h = 0;
            return;
        }
        this.f52526h = this.f52530l[w0.i(this.f52529k, j10, true, true)];
    }
}
