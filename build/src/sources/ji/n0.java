package ji;

import android.util.Pair;
import java.io.RandomAccessFile;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n0 {
    public static long a(ByteBuffer byteBuffer) {
        g(byteBuffer);
        return e(byteBuffer, byteBuffer.position() + 16);
    }

    public static long b(ByteBuffer byteBuffer) {
        g(byteBuffer);
        return e(byteBuffer, byteBuffer.position() + 12);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Pair c(RandomAccessFile randomAccessFile) {
        if (randomAccessFile.length() < 22) {
            return null;
        }
        Pair f10 = f(randomAccessFile, 0);
        if (f10 != null) {
            return f10;
        }
        return f(randomAccessFile, 65535);
    }

    public static void d(ByteBuffer byteBuffer, long j10) {
        g(byteBuffer);
        int position = byteBuffer.position() + 16;
        if (j10 >= 0 && j10 <= 4294967295L) {
            byteBuffer.putInt(byteBuffer.position() + position, (int) j10);
            return;
        }
        throw new IllegalArgumentException("uint32 value of out range: " + j10);
    }

    private static long e(ByteBuffer byteBuffer, int i10) {
        return byteBuffer.getInt(i10) & 4294967295L;
    }

    private static Pair f(RandomAccessFile randomAccessFile, int i10) {
        int i11;
        long length = randomAccessFile.length();
        if (length < 22) {
            return null;
        }
        ByteBuffer allocate = ByteBuffer.allocate(((int) Math.min(i10, (-22) + length)) + 22);
        allocate.order(ByteOrder.LITTLE_ENDIAN);
        long capacity = length - allocate.capacity();
        randomAccessFile.seek(capacity);
        randomAccessFile.readFully(allocate.array(), allocate.arrayOffset(), allocate.capacity());
        g(allocate);
        int capacity2 = allocate.capacity();
        if (capacity2 >= 22) {
            int i12 = capacity2 - 22;
            int min = Math.min(i12, 65535);
            for (int i13 = 0; i13 < min; i13++) {
                i11 = i12 - i13;
                if (allocate.getInt(i11) == 101010256 && ((char) allocate.getShort(i11 + 20)) == i13) {
                    break;
                }
            }
        }
        i11 = -1;
        if (i11 == -1) {
            return null;
        }
        allocate.position(i11);
        ByteBuffer slice = allocate.slice();
        slice.order(ByteOrder.LITTLE_ENDIAN);
        return Pair.create(slice, Long.valueOf(capacity + i11));
    }

    private static void g(ByteBuffer byteBuffer) {
        if (byteBuffer.order() == ByteOrder.LITTLE_ENDIAN) {
            return;
        }
        throw new IllegalArgumentException("ByteBuffer byte order must be little endian");
    }
}
