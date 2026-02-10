package okio;

import av.a0;
import java.io.InputStream;
import java.nio.channels.ReadableByteChannel;
import java.nio.charset.Charset;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface BufferedSource extends Source, ReadableByteChannel {
    boolean D0(long j10);

    String I1(Charset charset);

    String J0();

    byte[] K0(long j10);

    Buffer M();

    short M0();

    ByteString M1();

    long P0();

    int T1(a0 a0Var);

    void U0(long j10);

    int U1();

    String X1();

    long Y(ByteString byteString);

    String d1(long j10);

    void e0(Buffer buffer, long j10);

    Buffer f();

    long f0(byte b10, long j10, long j11);

    long g0(ByteString byteString);

    ByteString h1(long j10);

    String i0(long j10);

    long j2(Sink sink);

    byte[] o1();

    boolean p1();

    BufferedSource peek();

    boolean r0(long j10, ByteString byteString);

    long r2();

    byte readByte();

    void readFully(byte[] bArr);

    int readInt();

    long readLong();

    short readShort();

    long s1();

    InputStream s2();

    void skip(long j10);
}
