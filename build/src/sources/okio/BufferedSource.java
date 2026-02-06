package okio;

import java.io.InputStream;
import java.nio.channels.ReadableByteChannel;
import java.nio.charset.Charset;
import qu.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface BufferedSource extends Source, ReadableByteChannel {
    boolean D0(long j10);

    String H0();

    String H1(Charset charset);

    ByteString K1();

    Buffer M();

    byte[] N0(long j10);

    short P0();

    int P1();

    long Q0();

    String S1();

    void U0(long j10);

    long X(ByteString byteString);

    String b1(long j10);

    void d0(Buffer buffer, long j10);

    int d2(a0 a0Var);

    Buffer e();

    long e0(byte b10, long j10, long j11);

    long e2(Sink sink);

    long f0(ByteString byteString);

    ByteString f1(long j10);

    String h0(long j10);

    byte[] m1();

    long m2();

    boolean n1();

    InputStream n2();

    BufferedSource peek();

    byte readByte();

    void readFully(byte[] bArr);

    int readInt();

    long readLong();

    short readShort();

    boolean s0(long j10, ByteString byteString);

    long s1();

    void skip(long j10);
}
