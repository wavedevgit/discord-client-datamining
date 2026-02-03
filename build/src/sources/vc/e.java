package vc;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Arrays;
import ne.w0;
import tc.a0;
import tc.b0;
import tc.l;
import tc.z;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    protected final b0 f51036a;

    /* renamed from: b  reason: collision with root package name */
    private final int f51037b;

    /* renamed from: c  reason: collision with root package name */
    private final int f51038c;

    /* renamed from: d  reason: collision with root package name */
    private final long f51039d;

    /* renamed from: e  reason: collision with root package name */
    private final int f51040e;

    /* renamed from: f  reason: collision with root package name */
    private int f51041f;

    /* renamed from: g  reason: collision with root package name */
    private int f51042g;

    /* renamed from: h  reason: collision with root package name */
    private int f51043h;

    /* renamed from: i  reason: collision with root package name */
    private int f51044i;

    /* renamed from: j  reason: collision with root package name */
    private int f51045j;

    /* renamed from: k  reason: collision with root package name */
    private long[] f51046k;

    /* renamed from: l  reason: collision with root package name */
    private int[] f51047l;

    public e(int i10, int i11, long j10, int i12, b0 b0Var) {
        int i13;
        int i14;
        boolean z10 = true;
        if (i11 != 1 && i11 != 2) {
            z10 = false;
        }
        ne.a.a(z10);
        this.f51039d = j10;
        this.f51040e = i12;
        this.f51036a = b0Var;
        if (i11 == 2) {
            i13 = 1667497984;
        } else {
            i13 = 1651965952;
        }
        this.f51037b = d(i10, i13);
        if (i11 == 2) {
            i14 = d(i10, 1650720768);
        } else {
            i14 = -1;
        }
        this.f51038c = i14;
        this.f51046k = new long[IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING];
        this.f51047l = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING];
    }

    private static int d(int i10, int i11) {
        return (((i10 % 10) + 48) << 8) | ((i10 / 10) + 48) | i11;
    }

    private long e(int i10) {
        return (this.f51039d * i10) / this.f51040e;
    }

    private a0 h(int i10) {
        return new a0(this.f51047l[i10] * g(), this.f51046k[i10]);
    }

    public void a() {
        this.f51043h++;
    }

    public void b(long j10) {
        if (this.f51045j == this.f51047l.length) {
            long[] jArr = this.f51046k;
            this.f51046k = Arrays.copyOf(jArr, (jArr.length * 3) / 2);
            int[] iArr = this.f51047l;
            this.f51047l = Arrays.copyOf(iArr, (iArr.length * 3) / 2);
        }
        long[] jArr2 = this.f51046k;
        int i10 = this.f51045j;
        jArr2[i10] = j10;
        this.f51047l[i10] = this.f51044i;
        this.f51045j = i10 + 1;
    }

    public void c() {
        this.f51046k = Arrays.copyOf(this.f51046k, this.f51045j);
        this.f51047l = Arrays.copyOf(this.f51047l, this.f51045j);
    }

    public long f() {
        return e(this.f51043h);
    }

    public long g() {
        return e(1);
    }

    public z.a i(long j10) {
        int g10 = (int) (j10 / g());
        int h10 = w0.h(this.f51047l, g10, true, true);
        if (this.f51047l[h10] == g10) {
            return new z.a(h(h10));
        }
        a0 h11 = h(h10);
        int i10 = h10 + 1;
        if (i10 < this.f51046k.length) {
            return new z.a(h11, h(i10));
        }
        return new z.a(h11);
    }

    public boolean j(int i10) {
        if (this.f51037b != i10 && this.f51038c != i10) {
            return false;
        }
        return true;
    }

    public void k() {
        this.f51044i++;
    }

    public boolean l() {
        if (Arrays.binarySearch(this.f51047l, this.f51043h) >= 0) {
            return true;
        }
        return false;
    }

    public boolean m(l lVar) {
        int i10 = this.f51042g;
        boolean z10 = false;
        int a10 = i10 - this.f51036a.a(lVar, i10, false);
        this.f51042g = a10;
        if (a10 == 0) {
            z10 = true;
        }
        if (z10) {
            if (this.f51041f > 0) {
                b0 b0Var = this.f51036a;
                long f10 = f();
                boolean l10 = l();
                b0Var.d(f10, l10 ? 1 : 0, this.f51041f, 0, null);
            }
            a();
        }
        return z10;
    }

    public void n(int i10) {
        this.f51041f = i10;
        this.f51042g = i10;
    }

    public void o(long j10) {
        if (this.f51045j == 0) {
            this.f51043h = 0;
            return;
        }
        this.f51043h = this.f51047l[w0.i(this.f51046k, j10, true, true)];
    }
}
