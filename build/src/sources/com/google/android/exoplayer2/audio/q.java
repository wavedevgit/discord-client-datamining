package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q extends i {

    /* renamed from: i  reason: collision with root package name */
    private static final int f12035i = Float.floatToIntBits(Float.NaN);

    private static void m(int i10, ByteBuffer byteBuffer) {
        int floatToIntBits = Float.floatToIntBits((float) (i10 * 4.656612875245797E-10d));
        if (floatToIntBits == f12035i) {
            floatToIntBits = Float.floatToIntBits(0.0f);
        }
        byteBuffer.putInt(floatToIntBits);
    }

    @Override // com.google.android.exoplayer2.audio.d
    public void c(ByteBuffer byteBuffer) {
        ByteBuffer l10;
        int position = byteBuffer.position();
        int limit = byteBuffer.limit();
        int i10 = limit - position;
        int i11 = this.f11888b.f11838c;
        if (i11 != 536870912) {
            if (i11 == 805306368) {
                l10 = l(i10);
                while (position < limit) {
                    m((byteBuffer.get(position) & 255) | ((byteBuffer.get(position + 1) & 255) << 8) | ((byteBuffer.get(position + 2) & 255) << 16) | ((byteBuffer.get(position + 3) & 255) << 24), l10);
                    position += 4;
                }
            } else {
                throw new IllegalStateException();
            }
        } else {
            l10 = l((i10 / 3) * 4);
            while (position < limit) {
                m(((byteBuffer.get(position) & 255) << 8) | ((byteBuffer.get(position + 1) & 255) << 16) | ((byteBuffer.get(position + 2) & 255) << 24), l10);
                position += 3;
            }
        }
        byteBuffer.position(byteBuffer.limit());
        l10.flip();
    }

    @Override // com.google.android.exoplayer2.audio.i
    public d.a h(d.a aVar) {
        int i10 = aVar.f11838c;
        if (w0.D0(i10)) {
            if (i10 != 4) {
                return new d.a(aVar.f11836a, aVar.f11837b, 4);
            }
            return d.a.f11835e;
        }
        throw new d.b(aVar);
    }
}
