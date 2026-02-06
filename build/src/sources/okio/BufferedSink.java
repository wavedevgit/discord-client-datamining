package okio;

import java.io.OutputStream;
import java.nio.channels.WritableByteChannel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface BufferedSink extends Sink, WritableByteChannel {
    long B0(Source source);

    BufferedSink J1(long j10);

    BufferedSink R();

    BufferedSink W0(long j10);

    BufferedSink Z1(ByteString byteString);

    Buffer e();

    @Override // okio.Sink, java.io.Flushable
    void flush();

    BufferedSink g0();

    OutputStream k2();

    BufferedSink q0(String str);

    BufferedSink write(byte[] bArr);

    BufferedSink write(byte[] bArr, int i10, int i11);

    BufferedSink writeByte(int i10);

    BufferedSink writeInt(int i10);

    BufferedSink writeShort(int i10);

    BufferedSink z0(String str, int i10, int i11);
}
