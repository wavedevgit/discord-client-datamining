package b0;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.io.FilterOutputStream;
import java.io.OutputStream;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class b extends FilterOutputStream {

    /* renamed from: d  reason: collision with root package name */
    final OutputStream f6023d;

    /* renamed from: e  reason: collision with root package name */
    private ByteOrder f6024e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(OutputStream outputStream, ByteOrder byteOrder) {
        super(outputStream);
        this.f6023d = outputStream;
        this.f6024e = byteOrder;
    }

    public void a(ByteOrder byteOrder) {
        this.f6024e = byteOrder;
    }

    public void h(int i10) {
        this.f6023d.write(i10);
    }

    public void k(int i10) {
        ByteOrder byteOrder = this.f6024e;
        if (byteOrder == ByteOrder.LITTLE_ENDIAN) {
            this.f6023d.write(i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f6023d.write((i10 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f6023d.write((i10 >>> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f6023d.write((i10 >>> 24) & SetSpanOperation.SPAN_MAX_PRIORITY);
        } else if (byteOrder == ByteOrder.BIG_ENDIAN) {
            this.f6023d.write((i10 >>> 24) & SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f6023d.write((i10 >>> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f6023d.write((i10 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f6023d.write(i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
        }
    }

    public void m(short s10) {
        ByteOrder byteOrder = this.f6024e;
        if (byteOrder == ByteOrder.LITTLE_ENDIAN) {
            this.f6023d.write(s10 & 255);
            this.f6023d.write((s10 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
        } else if (byteOrder == ByteOrder.BIG_ENDIAN) {
            this.f6023d.write((s10 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f6023d.write(s10 & 255);
        }
    }

    public void o(long j10) {
        k((int) j10);
    }

    @Override // java.io.FilterOutputStream, java.io.OutputStream
    public void write(byte[] bArr) {
        this.f6023d.write(bArr);
    }

    public void y(int i10) {
        m((short) i10);
    }

    @Override // java.io.FilterOutputStream, java.io.OutputStream
    public void write(byte[] bArr, int i10, int i11) {
        this.f6023d.write(bArr, i10, i11);
    }
}
