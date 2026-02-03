package ne;

import java.util.Arrays;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r0 {

    /* renamed from: a  reason: collision with root package name */
    private long[] f40129a;

    /* renamed from: b  reason: collision with root package name */
    private Object[] f40130b;

    /* renamed from: c  reason: collision with root package name */
    private int f40131c;

    /* renamed from: d  reason: collision with root package name */
    private int f40132d;

    public r0() {
        this(10);
    }

    private void b(long j10, Object obj) {
        int i10 = this.f40131c;
        int i11 = this.f40132d;
        Object[] objArr = this.f40130b;
        int length = (i10 + i11) % objArr.length;
        this.f40129a[length] = j10;
        objArr[length] = obj;
        this.f40132d = i11 + 1;
    }

    private void d(long j10) {
        int i10 = this.f40132d;
        if (i10 > 0) {
            if (j10 <= this.f40129a[((this.f40131c + i10) - 1) % this.f40130b.length]) {
                c();
            }
        }
    }

    private void e() {
        int length = this.f40130b.length;
        if (this.f40132d < length) {
            return;
        }
        int i10 = length * 2;
        long[] jArr = new long[i10];
        Object[] f10 = f(i10);
        int i11 = this.f40131c;
        int i12 = length - i11;
        System.arraycopy(this.f40129a, i11, jArr, 0, i12);
        System.arraycopy(this.f40130b, this.f40131c, f10, 0, i12);
        int i13 = this.f40131c;
        if (i13 > 0) {
            System.arraycopy(this.f40129a, 0, jArr, i12, i13);
            System.arraycopy(this.f40130b, 0, f10, i12, this.f40131c);
        }
        this.f40129a = jArr;
        this.f40130b = f10;
        this.f40131c = 0;
    }

    private static Object[] f(int i10) {
        return new Object[i10];
    }

    private Object h(long j10, boolean z10) {
        Object obj = null;
        long j11 = LongCompanionObject.MAX_VALUE;
        while (this.f40132d > 0) {
            long j12 = j10 - this.f40129a[this.f40131c];
            if (j12 < 0 && (z10 || (-j12) >= j11)) {
                break;
            }
            obj = k();
            j11 = j12;
        }
        return obj;
    }

    private Object k() {
        boolean z10;
        if (this.f40132d > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        a.g(z10);
        Object[] objArr = this.f40130b;
        int i10 = this.f40131c;
        Object obj = objArr[i10];
        objArr[i10] = null;
        this.f40131c = (i10 + 1) % objArr.length;
        this.f40132d--;
        return obj;
    }

    public synchronized void a(long j10, Object obj) {
        d(j10);
        e();
        b(j10, obj);
    }

    public synchronized void c() {
        this.f40131c = 0;
        this.f40132d = 0;
        Arrays.fill(this.f40130b, (Object) null);
    }

    public synchronized Object g(long j10) {
        return h(j10, false);
    }

    public synchronized Object i() {
        Object k10;
        if (this.f40132d == 0) {
            k10 = null;
        } else {
            k10 = k();
        }
        return k10;
    }

    public synchronized Object j(long j10) {
        return h(j10, true);
    }

    public synchronized int l() {
        return this.f40132d;
    }

    public r0(int i10) {
        this.f40129a = new long[i10];
        this.f40130b = f(i10);
    }
}
