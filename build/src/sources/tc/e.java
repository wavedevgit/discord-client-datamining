package tc;

import androidx.recyclerview.widget.RecyclerView;
import java.io.EOFException;
import java.io.InterruptedIOException;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements l {

    /* renamed from: b  reason: collision with root package name */
    private final le.j f49929b;

    /* renamed from: c  reason: collision with root package name */
    private final long f49930c;

    /* renamed from: d  reason: collision with root package name */
    private long f49931d;

    /* renamed from: f  reason: collision with root package name */
    private int f49933f;

    /* renamed from: g  reason: collision with root package name */
    private int f49934g;

    /* renamed from: e  reason: collision with root package name */
    private byte[] f49932e = new byte[65536];

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f49928a = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    static {
        lc.u.a("goog.exo.extractor");
    }

    public e(le.j jVar, long j10, long j11) {
        this.f49929b = jVar;
        this.f49931d = j10;
        this.f49930c = j11;
    }

    private void o(int i10) {
        if (i10 != -1) {
            this.f49931d += i10;
        }
    }

    private void p(int i10) {
        int i11 = this.f49933f + i10;
        byte[] bArr = this.f49932e;
        if (i11 > bArr.length) {
            this.f49932e = Arrays.copyOf(this.f49932e, w0.q(bArr.length * 2, 65536 + i11, i11 + 524288));
        }
    }

    private int q(byte[] bArr, int i10, int i11) {
        int i12 = this.f49934g;
        if (i12 == 0) {
            return 0;
        }
        int min = Math.min(i12, i11);
        System.arraycopy(this.f49932e, 0, bArr, i10, min);
        u(min);
        return min;
    }

    private int r(byte[] bArr, int i10, int i11, int i12, boolean z10) {
        if (!Thread.interrupted()) {
            int read = this.f49929b.read(bArr, i10 + i12, i11 - i12);
            if (read == -1) {
                if (i12 == 0 && z10) {
                    return -1;
                }
                throw new EOFException();
            }
            return i12 + read;
        }
        throw new InterruptedIOException();
    }

    private int s(int i10) {
        int min = Math.min(this.f49934g, i10);
        u(min);
        return min;
    }

    private void u(int i10) {
        byte[] bArr;
        int i11 = this.f49934g - i10;
        this.f49934g = i11;
        this.f49933f = 0;
        byte[] bArr2 = this.f49932e;
        if (i11 < bArr2.length - 524288) {
            bArr = new byte[65536 + i11];
        } else {
            bArr = bArr2;
        }
        System.arraycopy(bArr2, i10, bArr, 0, i11);
        this.f49932e = bArr;
    }

    @Override // tc.l
    public int a(int i10) {
        int s10 = s(i10);
        if (s10 == 0) {
            byte[] bArr = this.f49928a;
            s10 = r(bArr, 0, Math.min(i10, bArr.length), 0, true);
        }
        o(s10);
        return s10;
    }

    @Override // tc.l
    public boolean c(byte[] bArr, int i10, int i11, boolean z10) {
        if (!l(i11, z10)) {
            return false;
        }
        System.arraycopy(this.f49932e, this.f49933f - i11, bArr, i10, i11);
        return true;
    }

    @Override // tc.l
    public void e() {
        this.f49933f = 0;
    }

    @Override // tc.l
    public boolean f(byte[] bArr, int i10, int i11, boolean z10) {
        int q10 = q(bArr, i10, i11);
        while (q10 < i11 && q10 != -1) {
            q10 = r(bArr, i10, i11, q10, z10);
        }
        o(q10);
        if (q10 != -1) {
            return true;
        }
        return false;
    }

    @Override // tc.l
    public long g() {
        return this.f49931d + this.f49933f;
    }

    @Override // tc.l
    public long getLength() {
        return this.f49930c;
    }

    @Override // tc.l
    public long getPosition() {
        return this.f49931d;
    }

    @Override // tc.l
    public void h(int i10) {
        l(i10, false);
    }

    @Override // tc.l
    public int i(byte[] bArr, int i10, int i11) {
        e eVar;
        int min;
        p(i11);
        int i12 = this.f49934g;
        int i13 = this.f49933f;
        int i14 = i12 - i13;
        if (i14 == 0) {
            eVar = this;
            min = eVar.r(this.f49932e, i13, i11, 0, true);
            if (min == -1) {
                return -1;
            }
            eVar.f49934g += min;
        } else {
            eVar = this;
            min = Math.min(i11, i14);
        }
        System.arraycopy(eVar.f49932e, eVar.f49933f, bArr, i10, min);
        eVar.f49933f += min;
        return min;
    }

    @Override // tc.l
    public void k(int i10) {
        t(i10, false);
    }

    @Override // tc.l
    public boolean l(int i10, boolean z10) {
        p(i10);
        int i11 = this.f49934g - this.f49933f;
        while (i11 < i10) {
            int i12 = i10;
            boolean z11 = z10;
            i11 = r(this.f49932e, this.f49933f, i12, i11, z11);
            if (i11 == -1) {
                return false;
            }
            this.f49934g = this.f49933f + i11;
            i10 = i12;
            z10 = z11;
        }
        this.f49933f += i10;
        return true;
    }

    @Override // tc.l
    public void n(byte[] bArr, int i10, int i11) {
        c(bArr, i10, i11, false);
    }

    @Override // tc.l, le.j
    public int read(byte[] bArr, int i10, int i11) {
        int q10 = q(bArr, i10, i11);
        if (q10 == 0) {
            q10 = r(bArr, i10, i11, 0, true);
        }
        o(q10);
        return q10;
    }

    @Override // tc.l
    public void readFully(byte[] bArr, int i10, int i11) {
        f(bArr, i10, i11, false);
    }

    public boolean t(int i10, boolean z10) {
        int s10 = s(i10);
        while (s10 < i10 && s10 != -1) {
            s10 = r(this.f49928a, -s10, Math.min(i10, this.f49928a.length + s10), s10, z10);
        }
        o(s10);
        if (s10 != -1) {
            return true;
        }
        return false;
    }
}
