package com.google.android.gms.internal.play_billing;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w0 extends z0 {

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f15029d;

    /* renamed from: e  reason: collision with root package name */
    private final int f15030e;

    /* renamed from: f  reason: collision with root package name */
    private int f15031f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w0(byte[] bArr, int i10, int i11) {
        super(null);
        int length = bArr.length;
        if (((length - i11) | i11) >= 0) {
            this.f15029d = bArr;
            this.f15031f = 0;
            this.f15030e = i11;
            return;
        }
        throw new IllegalArgumentException(String.format("Array range is invalid. Buffer.length=%d, offset=%d, length=%d", Integer.valueOf(length), 0, Integer.valueOf(i11)));
    }

    public final void A(byte[] bArr, int i10, int i11) {
        try {
            System.arraycopy(bArr, 0, this.f15029d, this.f15031f, i11);
            this.f15031f += i11;
        } catch (IndexOutOfBoundsException e10) {
            throw new x0(String.format("Pos: %d, limit: %d, len: %d", Integer.valueOf(this.f15031f), Integer.valueOf(this.f15030e), Integer.valueOf(i11)), e10);
        }
    }

    public final void B(String str) {
        int i10 = this.f15031f;
        try {
            int w10 = z0.w(str.length() * 3);
            int w11 = z0.w(str.length());
            if (w11 == w10) {
                int i11 = i10 + w11;
                this.f15031f = i11;
                int b10 = l4.b(str, this.f15029d, i11, this.f15030e - i11);
                this.f15031f = i10;
                q((b10 - i10) - w11);
                this.f15031f = b10;
                return;
            }
            q(l4.c(str));
            byte[] bArr = this.f15029d;
            int i12 = this.f15031f;
            this.f15031f = l4.b(str, bArr, i12, this.f15030e - i12);
        } catch (k4 e10) {
            this.f15031f = i10;
            a(str, e10);
        } catch (IndexOutOfBoundsException e11) {
            throw new x0(e11);
        }
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final int c() {
        return this.f15030e - this.f15031f;
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final void d(byte b10) {
        try {
            byte[] bArr = this.f15029d;
            int i10 = this.f15031f;
            this.f15031f = i10 + 1;
            bArr[i10] = b10;
        } catch (IndexOutOfBoundsException e10) {
            throw new x0(String.format("Pos: %d, limit: %d, len: %d", Integer.valueOf(this.f15031f), Integer.valueOf(this.f15030e), 1), e10);
        }
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final void e(int i10, boolean z10) {
        q(i10 << 3);
        d(z10 ? (byte) 1 : (byte) 0);
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final void f(int i10, r0 r0Var) {
        q((i10 << 3) | 2);
        q(r0Var.d());
        r0Var.h(this);
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final void g(int i10, int i11) {
        q((i10 << 3) | 5);
        h(i11);
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final void h(int i10) {
        try {
            byte[] bArr = this.f15029d;
            int i11 = this.f15031f;
            int i12 = i11 + 1;
            this.f15031f = i12;
            bArr[i11] = (byte) (i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
            int i13 = i11 + 2;
            this.f15031f = i13;
            bArr[i12] = (byte) ((i10 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
            int i14 = i11 + 3;
            this.f15031f = i14;
            bArr[i13] = (byte) ((i10 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f15031f = i11 + 4;
            bArr[i14] = (byte) ((i10 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY);
        } catch (IndexOutOfBoundsException e10) {
            throw new x0(String.format("Pos: %d, limit: %d, len: %d", Integer.valueOf(this.f15031f), Integer.valueOf(this.f15030e), 1), e10);
        }
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final void i(int i10, long j10) {
        q((i10 << 3) | 1);
        j(j10);
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final void j(long j10) {
        try {
            byte[] bArr = this.f15029d;
            int i10 = this.f15031f;
            int i11 = i10 + 1;
            this.f15031f = i11;
            bArr[i10] = (byte) (((int) j10) & SetSpanOperation.SPAN_MAX_PRIORITY);
            int i12 = i10 + 2;
            this.f15031f = i12;
            bArr[i11] = (byte) (((int) (j10 >> 8)) & SetSpanOperation.SPAN_MAX_PRIORITY);
            int i13 = i10 + 3;
            this.f15031f = i13;
            bArr[i12] = (byte) (((int) (j10 >> 16)) & SetSpanOperation.SPAN_MAX_PRIORITY);
            int i14 = i10 + 4;
            this.f15031f = i14;
            bArr[i13] = (byte) (((int) (j10 >> 24)) & SetSpanOperation.SPAN_MAX_PRIORITY);
            int i15 = i10 + 5;
            this.f15031f = i15;
            bArr[i14] = (byte) (((int) (j10 >> 32)) & SetSpanOperation.SPAN_MAX_PRIORITY);
            int i16 = i10 + 6;
            this.f15031f = i16;
            bArr[i15] = (byte) (((int) (j10 >> 40)) & SetSpanOperation.SPAN_MAX_PRIORITY);
            int i17 = i10 + 7;
            this.f15031f = i17;
            bArr[i16] = (byte) (((int) (j10 >> 48)) & SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f15031f = i10 + 8;
            bArr[i17] = (byte) (((int) (j10 >> 56)) & SetSpanOperation.SPAN_MAX_PRIORITY);
        } catch (IndexOutOfBoundsException e10) {
            throw new x0(String.format("Pos: %d, limit: %d, len: %d", Integer.valueOf(this.f15031f), Integer.valueOf(this.f15030e), 1), e10);
        }
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final void k(int i10, int i11) {
        q(i10 << 3);
        l(i11);
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final void l(int i10) {
        if (i10 >= 0) {
            q(i10);
        } else {
            s(i10);
        }
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final void m(byte[] bArr, int i10, int i11) {
        A(bArr, 0, i11);
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final void n(int i10, String str) {
        q((i10 << 3) | 2);
        B(str);
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final void o(int i10, int i11) {
        q((i10 << 3) | i11);
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final void p(int i10, int i11) {
        q(i10 << 3);
        q(i11);
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final void q(int i10) {
        while ((i10 & (-128)) != 0) {
            try {
                byte[] bArr = this.f15029d;
                int i11 = this.f15031f;
                this.f15031f = i11 + 1;
                bArr[i11] = (byte) ((i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) & SetSpanOperation.SPAN_MAX_PRIORITY);
                i10 >>>= 7;
            } catch (IndexOutOfBoundsException e10) {
                throw new x0(String.format("Pos: %d, limit: %d, len: %d", Integer.valueOf(this.f15031f), Integer.valueOf(this.f15030e), 1), e10);
            }
        }
        byte[] bArr2 = this.f15029d;
        int i12 = this.f15031f;
        this.f15031f = i12 + 1;
        bArr2[i12] = (byte) i10;
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final void r(int i10, long j10) {
        q(i10 << 3);
        s(j10);
    }

    @Override // com.google.android.gms.internal.play_billing.z0
    public final void s(long j10) {
        boolean z10;
        z10 = z0.f15062c;
        if (!z10 || this.f15030e - this.f15031f < 10) {
            while ((j10 & (-128)) != 0) {
                try {
                    byte[] bArr = this.f15029d;
                    int i10 = this.f15031f;
                    this.f15031f = i10 + 1;
                    bArr[i10] = (byte) ((((int) j10) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) & SetSpanOperation.SPAN_MAX_PRIORITY);
                    j10 >>>= 7;
                } catch (IndexOutOfBoundsException e10) {
                    throw new x0(String.format("Pos: %d, limit: %d, len: %d", Integer.valueOf(this.f15031f), Integer.valueOf(this.f15030e), 1), e10);
                }
            }
            byte[] bArr2 = this.f15029d;
            int i11 = this.f15031f;
            this.f15031f = i11 + 1;
            bArr2[i11] = (byte) j10;
            return;
        }
        while (true) {
            int i12 = (int) j10;
            if ((j10 & (-128)) == 0) {
                byte[] bArr3 = this.f15029d;
                int i13 = this.f15031f;
                this.f15031f = i13 + 1;
                g4.s(bArr3, i13, (byte) i12);
                return;
            }
            byte[] bArr4 = this.f15029d;
            int i14 = this.f15031f;
            this.f15031f = i14 + 1;
            g4.s(bArr4, i14, (byte) ((i12 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) & SetSpanOperation.SPAN_MAX_PRIORITY));
            j10 >>>= 7;
        }
    }
}
