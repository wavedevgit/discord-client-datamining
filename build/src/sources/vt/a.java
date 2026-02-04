package vt;

import java.io.File;
import java.io.FileDescriptor;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.PrintStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.channels.FileChannel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public static boolean f51749a = false;

    /* renamed from: b  reason: collision with root package name */
    private static final int f51750b = d(new byte[]{102, 114, 101, 101});

    /* renamed from: c  reason: collision with root package name */
    private static final int f51751c = d(new byte[]{106, 117, 110, 107});

    /* renamed from: d  reason: collision with root package name */
    private static final int f51752d = d(new byte[]{109, 100, 97, 116});

    /* renamed from: e  reason: collision with root package name */
    private static final int f51753e = d(new byte[]{109, 111, 111, 118});

    /* renamed from: f  reason: collision with root package name */
    private static final int f51754f = d(new byte[]{112, 110, 111, 116});

    /* renamed from: g  reason: collision with root package name */
    private static final int f51755g = d(new byte[]{115, 107, 105, 112});

    /* renamed from: h  reason: collision with root package name */
    private static final int f51756h = d(new byte[]{119, 105, 100, 101});

    /* renamed from: i  reason: collision with root package name */
    private static final int f51757i = d(new byte[]{80, 73, 67, 84});

    /* renamed from: j  reason: collision with root package name */
    private static final int f51758j = d(new byte[]{102, 116, 121, 112});

    /* renamed from: k  reason: collision with root package name */
    private static final int f51759k = d(new byte[]{117, 117, 105, 100});

    /* renamed from: l  reason: collision with root package name */
    private static final int f51760l = d(new byte[]{99, 109, 111, 118});

    /* renamed from: m  reason: collision with root package name */
    private static final int f51761m = d(new byte[]{115, 116, 99, 111});

    /* renamed from: n  reason: collision with root package name */
    private static final int f51762n = d(new byte[]{99, 111, 54, 52});

    /* renamed from: vt.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class C0685a extends b {
        private C0685a(String str) {
            super(str);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b extends Exception {
        private b(String str) {
            super(str);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c extends b {
        private c(String str) {
            super(str);
        }
    }

    public static boolean a(FileDescriptor fileDescriptor, File file) {
        return c(new FileInputStream(fileDescriptor), file);
    }

    /* JADX WARN: Removed duplicated region for block: B:103:0x00ed A[EDGE_INSN: B:103:0x00ed->B:40:0x00ed ?: BREAK  , SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static boolean b(java.nio.channels.FileChannel r24, java.nio.channels.FileChannel r25) {
        /*
            Method dump skipped, instructions count: 564
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: vt.a.b(java.nio.channels.FileChannel, java.nio.channels.FileChannel):boolean");
    }

    private static boolean c(FileInputStream fileInputStream, File file) {
        FileOutputStream fileOutputStream = null;
        try {
            FileChannel channel = fileInputStream.getChannel();
            FileOutputStream fileOutputStream2 = new FileOutputStream(file);
            try {
                boolean b10 = b(channel, fileOutputStream2.getChannel());
                fileInputStream.close();
                fileOutputStream2.close();
                return b10;
            } catch (Throwable th2) {
                th = th2;
                fileOutputStream = fileOutputStream2;
                fileInputStream.close();
                if (fileOutputStream != null) {
                    fileOutputStream.close();
                }
                throw th;
            }
        } catch (Throwable th3) {
            th = th3;
        }
    }

    private static int d(byte[] bArr) {
        return ByteBuffer.wrap(bArr).order(ByteOrder.BIG_ENDIAN).getInt();
    }

    private static void e(String str, Object... objArr) {
        if (f51749a) {
            PrintStream printStream = System.err;
            printStream.println("QtFastStart: " + String.format(str, objArr));
        }
    }

    private static boolean f(FileChannel fileChannel, ByteBuffer byteBuffer) {
        byteBuffer.clear();
        int read = fileChannel.read(byteBuffer);
        byteBuffer.flip();
        if (read == byteBuffer.capacity()) {
            return true;
        }
        return false;
    }

    private static boolean g(FileChannel fileChannel, ByteBuffer byteBuffer, long j10) {
        byteBuffer.clear();
        int read = fileChannel.read(byteBuffer, j10);
        byteBuffer.flip();
        if (read == byteBuffer.capacity()) {
            return true;
        }
        return false;
    }

    static int h(int i10) {
        if (i10 >= 0) {
            return i10;
        }
        throw new c("uint32 value is too large");
    }

    static int i(long j10) {
        if (j10 <= 2147483647L && j10 >= 0) {
            return (int) j10;
        }
        throw new c("uint32 value is too large");
    }

    static long j(int i10) {
        return i10 & 4294967295L;
    }

    static long k(long j10) {
        if (j10 >= 0) {
            return j10;
        }
        throw new c("uint64 value is too large");
    }
}
