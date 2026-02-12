package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j extends i {

    /* renamed from: i  reason: collision with root package name */
    private int[] f12897i;

    /* renamed from: j  reason: collision with root package name */
    private int[] f12898j;

    @Override // com.google.android.exoplayer2.audio.d
    public void c(ByteBuffer byteBuffer) {
        int[] iArr = (int[]) oe.a.e(this.f12898j);
        int position = byteBuffer.position();
        int limit = byteBuffer.limit();
        ByteBuffer l10 = l(((limit - position) / this.f12890b.f12841d) * this.f12891c.f12841d);
        while (position < limit) {
            for (int i10 : iArr) {
                l10.putShort(byteBuffer.getShort((i10 * 2) + position));
            }
            position += this.f12890b.f12841d;
        }
        byteBuffer.position(limit);
        l10.flip();
    }

    @Override // com.google.android.exoplayer2.audio.i
    public d.a h(d.a aVar) {
        boolean z10;
        boolean z11;
        int[] iArr = this.f12897i;
        if (iArr == null) {
            return d.a.f12837e;
        }
        if (aVar.f12840c == 2) {
            if (aVar.f12839b != iArr.length) {
                z10 = true;
            } else {
                z10 = false;
            }
            for (int i10 = 0; i10 < iArr.length; i10++) {
                int i11 = iArr[i10];
                if (i11 < aVar.f12839b) {
                    if (i11 != i10) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    z10 |= z11;
                } else {
                    throw new d.b(aVar);
                }
            }
            if (z10) {
                return new d.a(aVar.f12838a, iArr.length, 2);
            }
            return d.a.f12837e;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void i() {
        this.f12898j = this.f12897i;
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void k() {
        this.f12898j = null;
        this.f12897i = null;
    }

    public void m(int[] iArr) {
        this.f12897i = iArr;
    }
}
