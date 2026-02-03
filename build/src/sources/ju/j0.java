package ju;

import java.io.IOException;
import java.net.Socket;
import java.net.SocketTimeoutException;
import java.util.logging.Level;
import java.util.logging.Logger;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j0 extends okio.c {

    /* renamed from: o  reason: collision with root package name */
    private final Socket f32382o;

    public j0(Socket socket) {
        Intrinsics.checkNotNullParameter(socket, "socket");
        this.f32382o = socket;
    }

    @Override // okio.c
    protected void B() {
        Logger logger;
        Logger logger2;
        try {
            this.f32382o.close();
        } catch (AssertionError e10) {
            if (x.e(e10)) {
                logger2 = y.f32405a;
                Level level = Level.WARNING;
                logger2.log(level, "Failed to close timed out socket " + this.f32382o, (Throwable) e10);
                return;
            }
            throw e10;
        } catch (Exception e11) {
            logger = y.f32405a;
            Level level2 = Level.WARNING;
            logger.log(level2, "Failed to close timed out socket " + this.f32382o, (Throwable) e11);
        }
    }

    @Override // okio.c
    protected IOException x(IOException iOException) {
        SocketTimeoutException socketTimeoutException = new SocketTimeoutException("timeout");
        if (iOException != null) {
            socketTimeoutException.initCause(iOException);
        }
        return socketTimeoutException;
    }
}
