package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j extends i {

    /* renamed from: i  reason: collision with root package name */
    private int[] f11895i;

    /* renamed from: j  reason: collision with root package name */
    private int[] f11896j;

    @Override // com.google.android.exoplayer2.audio.d
    public void c(ByteBuffer byteBuffer) {
        int[] iArr = (int[]) ne.a.e(this.f11896j);
        int position = byteBuffer.position();
        int limit = byteBuffer.limit();
        ByteBuffer l10 = l(((limit - position) / this.f11888b.f11839d) * this.f11889c.f11839d);
        while (position < limit) {
            for (int i10 : iArr) {
                l10.putShort(byteBuffer.getShort((i10 * 2) + position));
            }
            position += this.f11888b.f11839d;
        }
        byteBuffer.position(limit);
        l10.flip();
    }

    @Override // com.google.android.exoplayer2.audio.i
    public d.a h(d.a aVar) {
        boolean z10;
        boolean z11;
        int[] iArr = this.f11895i;
        if (iArr == null) {
            return d.a.f11835e;
        }
        if (aVar.f11838c == 2) {
            if (aVar.f11837b != iArr.length) {
                z10 = true;
            } else {
                z10 = false;
            }
            for (int i10 = 0; i10 < iArr.length; i10++) {
                int i11 = iArr[i10];
                if (i11 < aVar.f11837b) {
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
                return new d.a(aVar.f11836a, iArr.length, 2);
            }
            return d.a.f11835e;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void i() {
        this.f11896j = this.f11895i;
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void k() {
        this.f11896j = null;
        this.f11895i = null;
    }

    public void m(int[] iArr) {
        this.f11895i = iArr;
    }
}
