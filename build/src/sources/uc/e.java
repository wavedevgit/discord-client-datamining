package uc;

import androidx.recyclerview.widget.RecyclerView;
import java.io.EOFException;
import java.io.InterruptedIOException;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements l {

    /* renamed from: b  reason: collision with root package name */
    private final me.j f50643b;

    /* renamed from: c  reason: collision with root package name */
    private final long f50644c;

    /* renamed from: d  reason: collision with root package name */
    private long f50645d;

    /* renamed from: f  reason: collision with root package name */
    private int f50647f;

    /* renamed from: g  reason: collision with root package name */
    private int f50648g;

    /* renamed from: e  reason: collision with root package name */
    private byte[] f50646e = new byte[65536];

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f50642a = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    static {
        mc.u.a("goog.exo.extractor");
    }

    public e(me.j jVar, long j10, long j11) {
        this.f50643b = jVar;
        this.f50645d = j10;
        this.f50644c = j11;
    }

    private void o(int i10) {
        if (i10 != -1) {
            this.f50645d += i10;
        }
    }

    private void p(int i10) {
        int i11 = this.f50647f + i10;
        byte[] bArr = this.f50646e;
        if (i11 > bArr.length) {
            this.f50646e = Arrays.copyOf(this.f50646e, w0.q(bArr.length * 2, 65536 + i11, i11 + 524288));
        }
    }

    private int q(byte[] bArr, int i10, int i11) {
        int i12 = this.f50648g;
        if (i12 == 0) {
            return 0;
        }
        int min = Math.min(i12, i11);
        System.arraycopy(this.f50646e, 0, bArr, i10, min);
        u(min);
        return min;
    }

    private int r(byte[] bArr, int i10, int i11, int i12, boolean z10) {
        if (!Thread.interrupted()) {
            int read = this.f50643b.read(bArr, i10 + i12, i11 - i12);
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
        int min = Math.min(this.f50648g, i10);
        u(min);
        return min;
    }

    private void u(int i10) {
        byte[] bArr;
        int i11 = this.f50648g - i10;
        this.f50648g = i11;
        this.f50647f = 0;
        byte[] bArr2 = this.f50646e;
        if (i11 < bArr2.length - 524288) {
            bArr = new byte[65536 + i11];
        } else {
            bArr = bArr2;
        }
        System.arraycopy(bArr2, i10, bArr, 0, i11);
        this.f50646e = bArr;
    }

    @Override // uc.l
    public int a(int i10) {
        int s10 = s(i10);
        if (s10 == 0) {
            byte[] bArr = this.f50642a;
            s10 = r(bArr, 0, Math.min(i10, bArr.length), 0, true);
        }
        o(s10);
        return s10;
    }

    @Override // uc.l
    public boolean c(byte[] bArr, int i10, int i11, boolean z10) {
        if (!l(i11, z10)) {
            return false;
        }
        System.arraycopy(this.f50646e, this.f50647f - i11, bArr, i10, i11);
        return true;
    }

    @Override // uc.l
    public void e() {
        this.f50647f = 0;
    }

    @Override // uc.l
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

    @Override // uc.l
    public long g() {
        return this.f50645d + this.f50647f;
    }

    @Override // uc.l
    public long getLength() {
        return this.f50644c;
    }

    @Override // uc.l
    public long getPosition() {
        return this.f50645d;
    }

    @Override // uc.l
    public void h(int i10) {
        l(i10, false);
    }

    @Override // uc.l
    public int j(byte[] bArr, int i10, int i11) {
        e eVar;
        int min;
        p(i11);
        int i12 = this.f50648g;
        int i13 = this.f50647f;
        int i14 = i12 - i13;
        if (i14 == 0) {
            eVar = this;
            min = eVar.r(this.f50646e, i13, i11, 0, true);
            if (min == -1) {
                return -1;
            }
            eVar.f50648g += min;
        } else {
            eVar = this;
            min = Math.min(i11, i14);
        }
        System.arraycopy(eVar.f50646e, eVar.f50647f, bArr, i10, min);
        eVar.f50647f += min;
        return min;
    }

    @Override // uc.l
    public void k(int i10) {
        t(i10, false);
    }

    @Override // uc.l
    public boolean l(int i10, boolean z10) {
        p(i10);
        int i11 = this.f50648g - this.f50647f;
        while (i11 < i10) {
            int i12 = i10;
            boolean z11 = z10;
            i11 = r(this.f50646e, this.f50647f, i12, i11, z11);
            if (i11 == -1) {
                return false;
            }
            this.f50648g = this.f50647f + i11;
            i10 = i12;
            z10 = z11;
        }
        this.f50647f += i10;
        return true;
    }

    @Override // uc.l
    public void n(byte[] bArr, int i10, int i11) {
        c(bArr, i10, i11, false);
    }

    @Override // uc.l, me.j
    public int read(byte[] bArr, int i10, int i11) {
        int q10 = q(bArr, i10, i11);
        if (q10 == 0) {
            q10 = r(bArr, i10, i11, 0, true);
        }
        o(q10);
        return q10;
    }

    @Override // uc.l
    public void readFully(byte[] bArr, int i10, int i11) {
        f(bArr, i10, i11, false);
    }

    public boolean t(int i10, boolean z10) {
        int s10 = s(i10);
        while (s10 < i10 && s10 != -1) {
            s10 = r(this.f50642a, -s10, Math.min(i10, this.f50642a.length + s10), s10, z10);
        }
        o(s10);
        if (s10 != -1) {
            return true;
        }
        return false;
    }
}
