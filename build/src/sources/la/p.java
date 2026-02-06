package la;

import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.cache.MemoryCacheParams;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class p implements Supplier {

    /* renamed from: a  reason: collision with root package name */
    private static final long f35950a = TimeUnit.MINUTES.toMillis(5);

    private int b() {
        int min = (int) Math.min(Runtime.getRuntime().maxMemory(), 2147483647L);
        if (min < 16777216) {
            return 1048576;
        }
        if (min < 33554432) {
            return 2097152;
        }
        return 4194304;
    }

    @Override // com.facebook.common.internal.Supplier
    /* renamed from: a */
    public MemoryCacheParams get() {
        int b10 = b();
        return new MemoryCacheParams(b10, Integer.MAX_VALUE, b10, Integer.MAX_VALUE, b10 / 8, f35950a);
    }
}
