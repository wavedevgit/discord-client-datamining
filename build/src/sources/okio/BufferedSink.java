package okio;

import java.io.OutputStream;
import java.nio.channels.WritableByteChannel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface BufferedSink extends Sink, WritableByteChannel {
    BufferedSink K1(long j10);

    BufferedSink O();

    BufferedSink W0(long j10);

    BufferedSink a2(ByteString byteString);

    BufferedSink d0();

    Buffer e();

    @Override // okio.Sink, java.io.Flushable
    void flush();

    OutputStream k2();

    BufferedSink n0(String str);

    BufferedSink w0(String str, int i10, int i11);

    BufferedSink write(byte[] bArr);

    BufferedSink write(byte[] bArr, int i10, int i11);

    BufferedSink writeByte(int i10);

    BufferedSink writeInt(int i10);

    BufferedSink writeShort(int i10);

    long y0(Source source);
}
