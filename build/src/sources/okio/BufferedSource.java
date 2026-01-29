package okio;

import iu.a0;
import java.io.InputStream;
import java.nio.channels.ReadableByteChannel;
import java.nio.charset.Charset;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface BufferedSource extends Source, ReadableByteChannel {
    boolean B0(long j10);

    String H0();

    Buffer I();

    String I1(Charset charset);

    byte[] L0(long j10);

    ByteString L1();

    short N0();

    long O0();

    int Q1();

    void T0(long j10);

    String T1();

    long U(ByteString byteString);

    void a0(Buffer buffer, long j10);

    long b0(byte b10, long j10, long j11);

    String b1(long j10);

    long c0(ByteString byteString);

    Buffer e();

    String e0(long j10);

    long e2(Sink sink);

    ByteString f1(long j10);

    int l1(a0 a0Var);

    long m2();

    byte[] n1();

    InputStream n2();

    boolean o1();

    boolean p0(long j10, ByteString byteString);

    BufferedSource peek();

    byte readByte();

    void readFully(byte[] bArr);

    int readInt();

    long readLong();

    short readShort();

    void skip(long j10);

    long t1();
}
