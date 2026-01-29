package nc;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.List;
import kotlin.jvm.internal.ByteCompanionObject;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v {

    /* renamed from: d  reason: collision with root package name */
    private static final byte[] f40080d = {79, 103, 103, 83, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, -43, -59, -9, 1, 19, 79, 112, 117, 115, 72, 101, 97, 100, 1, 2, 56, 1, ByteCompanionObject.MIN_VALUE, -69, 0, 0, 0, 0, 0};

    /* renamed from: e  reason: collision with root package name */
    private static final byte[] f40081e = {79, 103, 103, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 11, -103, 87, 83, 1, 16, 79, 112, 117, 115, 84, 97, 103, 115, 0, 0, 0, 0, 0, 0, 0, 0};

    /* renamed from: a  reason: collision with root package name */
    private ByteBuffer f40082a = com.google.android.exoplayer2.audio.d.f13237a;

    /* renamed from: c  reason: collision with root package name */
    private int f40084c = 0;

    /* renamed from: b  reason: collision with root package name */
    private int f40083b = 2;

    private ByteBuffer b(ByteBuffer byteBuffer, byte[] bArr) {
        int i10;
        int length;
        int position = byteBuffer.position();
        int limit = byteBuffer.limit();
        int i11 = limit - position;
        int i12 = (i11 + SetSpanOperation.SPAN_MAX_PRIORITY) / SetSpanOperation.SPAN_MAX_PRIORITY;
        int i13 = i12 + 27 + i11;
        if (this.f40083b == 2) {
            if (bArr != null) {
                length = bArr.length + 28;
            } else {
                length = f40080d.length;
            }
            i13 += f40081e.length + length;
            i10 = length;
        } else {
            i10 = 0;
        }
        ByteBuffer c10 = c(i13);
        if (this.f40083b == 2) {
            if (bArr != null) {
                e(c10, bArr);
            } else {
                c10.put(f40080d);
            }
            c10.put(f40081e);
        }
        int i14 = this.f40084c + w.i(byteBuffer);
        this.f40084c = i14;
        f(c10, i14, this.f40083b, i12, false);
        for (int i15 = 0; i15 < i12; i15++) {
            if (i11 >= 255) {
                c10.put((byte) -1);
                i11 -= 255;
            } else {
                c10.put((byte) i11);
                i11 = 0;
            }
        }
        while (position < limit) {
            c10.put(byteBuffer.get(position));
            position++;
        }
        byteBuffer.position(byteBuffer.limit());
        c10.flip();
        if (this.f40083b == 2) {
            byte[] array = c10.array();
            byte[] bArr2 = f40081e;
            c10.putInt(i10 + bArr2.length + 22, w0.t(array, c10.arrayOffset() + i10 + bArr2.length, c10.limit() - c10.position(), 0));
        } else {
            c10.putInt(22, w0.t(c10.array(), c10.arrayOffset(), c10.limit() - c10.position(), 0));
        }
        this.f40083b++;
        return c10;
    }

    private ByteBuffer c(int i10) {
        if (this.f40082a.capacity() < i10) {
            this.f40082a = ByteBuffer.allocate(i10).order(ByteOrder.LITTLE_ENDIAN);
        } else {
            this.f40082a.clear();
        }
        return this.f40082a;
    }

    private void e(ByteBuffer byteBuffer, byte[] bArr) {
        f(byteBuffer, 0L, 0, 1, true);
        byteBuffer.put(li.h.a(bArr.length));
        byteBuffer.put(bArr);
        byteBuffer.putInt(22, w0.t(byteBuffer.array(), byteBuffer.arrayOffset(), bArr.length + 28, 0));
        byteBuffer.position(bArr.length + 28);
    }

    private void f(ByteBuffer byteBuffer, long j10, int i10, int i11, boolean z10) {
        byte b10;
        byteBuffer.put((byte) 79);
        byteBuffer.put((byte) 103);
        byteBuffer.put((byte) 103);
        byteBuffer.put((byte) 83);
        byteBuffer.put((byte) 0);
        if (z10) {
            b10 = 2;
        } else {
            b10 = 0;
        }
        byteBuffer.put(b10);
        byteBuffer.putLong(j10);
        byteBuffer.putInt(0);
        byteBuffer.putInt(i10);
        byteBuffer.putInt(0);
        byteBuffer.put(li.h.a(i11));
    }

    public void a(qc.f fVar, List list) {
        byte[] bArr;
        ne.a.e(fVar.f47076i);
        if (fVar.f47076i.limit() - fVar.f47076i.position() == 0) {
            return;
        }
        if (this.f40083b == 2 && (list.size() == 1 || list.size() == 3)) {
            bArr = (byte[]) list.get(0);
        } else {
            bArr = null;
        }
        this.f40082a = b(fVar.f47076i, bArr);
        fVar.h();
        fVar.u(this.f40082a.remaining());
        fVar.f47076i.put(this.f40082a);
        fVar.v();
    }

    public void d() {
        this.f40082a = com.google.android.exoplayer2.audio.d.f13237a;
        this.f40084c = 0;
        this.f40083b = 2;
    }
}
