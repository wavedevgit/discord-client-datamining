package ne;

import java.util.Arrays;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r0 {

    /* renamed from: a  reason: collision with root package name */
    private long[] f38983a;

    /* renamed from: b  reason: collision with root package name */
    private Object[] f38984b;

    /* renamed from: c  reason: collision with root package name */
    private int f38985c;

    /* renamed from: d  reason: collision with root package name */
    private int f38986d;

    public r0() {
        this(10);
    }

    private void b(long j10, Object obj) {
        int i10 = this.f38985c;
        int i11 = this.f38986d;
        Object[] objArr = this.f38984b;
        int length = (i10 + i11) % objArr.length;
        this.f38983a[length] = j10;
        objArr[length] = obj;
        this.f38986d = i11 + 1;
    }

    private void d(long j10) {
        int i10 = this.f38986d;
        if (i10 > 0) {
            if (j10 <= this.f38983a[((this.f38985c + i10) - 1) % this.f38984b.length]) {
                c();
            }
        }
    }

    private void e() {
        int length = this.f38984b.length;
        if (this.f38986d < length) {
            return;
        }
        int i10 = length * 2;
        long[] jArr = new long[i10];
        Object[] f10 = f(i10);
        int i11 = this.f38985c;
        int i12 = length - i11;
        System.arraycopy(this.f38983a, i11, jArr, 0, i12);
        System.arraycopy(this.f38984b, this.f38985c, f10, 0, i12);
        int i13 = this.f38985c;
        if (i13 > 0) {
            System.arraycopy(this.f38983a, 0, jArr, i12, i13);
            System.arraycopy(this.f38984b, 0, f10, i12, this.f38985c);
        }
        this.f38983a = jArr;
        this.f38984b = f10;
        this.f38985c = 0;
    }

    private static Object[] f(int i10) {
        return new Object[i10];
    }

    private Object h(long j10, boolean z10) {
        Object obj = null;
        long j11 = LongCompanionObject.MAX_VALUE;
        while (this.f38986d > 0) {
            long j12 = j10 - this.f38983a[this.f38985c];
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
        if (this.f38986d > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        a.g(z10);
        Object[] objArr = this.f38984b;
        int i10 = this.f38985c;
        Object obj = objArr[i10];
        objArr[i10] = null;
        this.f38985c = (i10 + 1) % objArr.length;
        this.f38986d--;
        return obj;
    }

    public synchronized void a(long j10, Object obj) {
        d(j10);
        e();
        b(j10, obj);
    }

    public synchronized void c() {
        this.f38985c = 0;
        this.f38986d = 0;
        Arrays.fill(this.f38984b, (Object) null);
    }

    public synchronized Object g(long j10) {
        return h(j10, false);
    }

    public synchronized Object i() {
        Object k10;
        if (this.f38986d == 0) {
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
        return this.f38986d;
    }

    public r0(int i10) {
        this.f38983a = new long[i10];
        this.f38984b = f(i10);
    }
}
