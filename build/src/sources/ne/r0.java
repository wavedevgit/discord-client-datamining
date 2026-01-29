package ne;

import java.util.Arrays;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r0 {

    /* renamed from: a  reason: collision with root package name */
    private long[] f40250a;

    /* renamed from: b  reason: collision with root package name */
    private Object[] f40251b;

    /* renamed from: c  reason: collision with root package name */
    private int f40252c;

    /* renamed from: d  reason: collision with root package name */
    private int f40253d;

    public r0() {
        this(10);
    }

    private void b(long j10, Object obj) {
        int i10 = this.f40252c;
        int i11 = this.f40253d;
        Object[] objArr = this.f40251b;
        int length = (i10 + i11) % objArr.length;
        this.f40250a[length] = j10;
        objArr[length] = obj;
        this.f40253d = i11 + 1;
    }

    private void d(long j10) {
        int i10 = this.f40253d;
        if (i10 > 0) {
            if (j10 <= this.f40250a[((this.f40252c + i10) - 1) % this.f40251b.length]) {
                c();
            }
        }
    }

    private void e() {
        int length = this.f40251b.length;
        if (this.f40253d < length) {
            return;
        }
        int i10 = length * 2;
        long[] jArr = new long[i10];
        Object[] f10 = f(i10);
        int i11 = this.f40252c;
        int i12 = length - i11;
        System.arraycopy(this.f40250a, i11, jArr, 0, i12);
        System.arraycopy(this.f40251b, this.f40252c, f10, 0, i12);
        int i13 = this.f40252c;
        if (i13 > 0) {
            System.arraycopy(this.f40250a, 0, jArr, i12, i13);
            System.arraycopy(this.f40251b, 0, f10, i12, this.f40252c);
        }
        this.f40250a = jArr;
        this.f40251b = f10;
        this.f40252c = 0;
    }

    private static Object[] f(int i10) {
        return new Object[i10];
    }

    private Object h(long j10, boolean z10) {
        Object obj = null;
        long j11 = LongCompanionObject.MAX_VALUE;
        while (this.f40253d > 0) {
            long j12 = j10 - this.f40250a[this.f40252c];
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
        if (this.f40253d > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        a.g(z10);
        Object[] objArr = this.f40251b;
        int i10 = this.f40252c;
        Object obj = objArr[i10];
        objArr[i10] = null;
        this.f40252c = (i10 + 1) % objArr.length;
        this.f40253d--;
        return obj;
    }

    public synchronized void a(long j10, Object obj) {
        d(j10);
        e();
        b(j10, obj);
    }

    public synchronized void c() {
        this.f40252c = 0;
        this.f40253d = 0;
        Arrays.fill(this.f40251b, (Object) null);
    }

    public synchronized Object g(long j10) {
        return h(j10, false);
    }

    public synchronized Object i() {
        Object k10;
        if (this.f40253d == 0) {
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
        return this.f40253d;
    }

    public r0(int i10) {
        this.f40250a = new long[i10];
        this.f40251b = f(i10);
    }
}
