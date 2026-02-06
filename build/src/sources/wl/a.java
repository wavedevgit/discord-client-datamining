package wl;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.concurrent.LinkedBlockingQueue;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f53863a;

    /* renamed from: b  reason: collision with root package name */
    private final LinkedBlockingQueue f53864b = new LinkedBlockingQueue();

    public a(boolean z10) {
        this.f53863a = z10;
    }

    private final ByteBuffer a(int i10) {
        if (this.f53863a) {
            ByteBuffer order = ByteBuffer.allocateDirect(i10).order(ByteOrder.LITTLE_ENDIAN);
            Intrinsics.checkNotNullExpressionValue(order, "{\n            ByteBuffer….LITTLE_ENDIAN)\n        }");
            return order;
        }
        ByteBuffer order2 = ByteBuffer.allocate(i10).order(ByteOrder.LITTLE_ENDIAN);
        Intrinsics.checkNotNullExpressionValue(order2, "{\n            ByteBuffer….LITTLE_ENDIAN)\n        }");
        return order2;
    }

    public final void b() {
        this.f53864b.clear();
    }

    public final ByteBuffer c(int i10) {
        ByteBuffer byteBuffer = (ByteBuffer) this.f53864b.poll();
        if (byteBuffer != null) {
            if (byteBuffer.capacity() < i10) {
                byteBuffer = a(i10);
            }
            if (byteBuffer != null) {
                return byteBuffer;
            }
        }
        return a(i10);
    }

    public final void d(ByteBuffer byteBuffer) {
        Intrinsics.checkNotNullParameter(byteBuffer, "byteBuffer");
        byteBuffer.clear();
        this.f53864b.put(byteBuffer);
    }
}
