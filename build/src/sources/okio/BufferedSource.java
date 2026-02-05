package okio;

import java.io.InputStream;
import java.nio.channels.ReadableByteChannel;
import java.nio.charset.Charset;
import ou.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface BufferedSource extends Source, ReadableByteChannel {
    boolean B0(long j10);

    String H0();

    Buffer I();

    String I1(Charset charset);

    int J0(a0 a0Var);

    ByteString L1();

    byte[] M0(long j10);

    short O0();

    long P0();

    int Q1();

    String T1();

    long U(ByteString byteString);

    void U0(long j10);

    void b0(Buffer buffer, long j10);

    long c0(byte b10, long j10, long j11);

    String c1(long j10);

    long d0(ByteString byteString);

    long e2(Sink sink);

    Buffer f();

    String f0(long j10);

    ByteString g1(long j10);

    long m2();

    byte[] n1();

    InputStream n2();

    boolean o1();

    BufferedSource peek();

    boolean q0(long j10, ByteString byteString);

    byte readByte();

    void readFully(byte[] bArr);

    int readInt();

    long readLong();

    short readShort();

    void skip(long j10);

    long t1();
}
