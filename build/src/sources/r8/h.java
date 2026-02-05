package r8;

import java.io.Closeable;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface h extends Closeable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends RuntimeException {
        public a() {
            super("Invalid bytebuf. Already closed");
        }
    }

    long C();

    boolean isClosed();

    int p(int i10, byte[] bArr, int i11, int i12);

    ByteBuffer q();

    int size();

    byte x(int i10);
}
