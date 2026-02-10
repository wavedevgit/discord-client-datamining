package okio;

import java.io.OutputStream;
import java.nio.channels.WritableByteChannel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface BufferedSink extends Sink, WritableByteChannel {
    long A0(Source source);

    BufferedSink L1(long j10);

    BufferedSink S();

    BufferedSink W0(long j10);

    BufferedSink e2(ByteString byteString);

    Buffer f();

    @Override // okio.Sink, java.io.Flushable
    void flush();

    BufferedSink h0();

    OutputStream p2();

    BufferedSink q0(String str);

    BufferedSink write(byte[] bArr);

    BufferedSink write(byte[] bArr, int i10, int i11);

    BufferedSink writeByte(int i10);

    BufferedSink writeInt(int i10);

    BufferedSink writeShort(int i10);

    BufferedSink x0(String str, int i10, int i11);
}
