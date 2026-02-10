package okio;

import java.io.InputStream;
import java.nio.channels.ReadableByteChannel;
import java.nio.charset.Charset;
import ru.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface BufferedSource extends Source, ReadableByteChannel {
    boolean B0(long j10);

    String D1(Charset charset);

    int E1(a0 a0Var);

    String F0();

    byte[] I0(long j10);

    ByteString I1();

    short K0();

    long L0();

    Buffer M();

    int O1();

    void Q0(long j10);

    String R1();

    long Y(ByteString byteString);

    String Y0(long j10);

    ByteString c1(long j10);

    long d2(Sink sink);

    Buffer e();

    void e0(Buffer buffer, long j10);

    long f0(byte b10, long j10, long j11);

    long g0(ByteString byteString);

    String i0(long j10);

    byte[] j1();

    boolean k1();

    long m2();

    long n1();

    InputStream n2();

    BufferedSource peek();

    boolean r0(long j10, ByteString byteString);

    byte readByte();

    void readFully(byte[] bArr);

    int readInt();

    long readLong();

    short readShort();

    void skip(long j10);
}
