package wa;

import android.os.Build;
import androidx.core.util.Pools$SynchronizedPool;
import java.nio.ByteBuffer;
import kotlin.jvm.internal.Intrinsics;
import va.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public static final e f53511a = new e();

    private e() {
    }

    public static final d a(y poolFactory, boolean z10, boolean z11, f platformDecoderOptions) {
        Intrinsics.checkNotNullParameter(poolFactory, "poolFactory");
        Intrinsics.checkNotNullParameter(platformDecoderOptions, "platformDecoderOptions");
        if (Build.VERSION.SDK_INT >= 26) {
            va.d b10 = poolFactory.b();
            Intrinsics.checkNotNullExpressionValue(b10, "getBitmapPool(...)");
            return new c(b10, b(poolFactory, z11), platformDecoderOptions);
        }
        va.d b11 = poolFactory.b();
        Intrinsics.checkNotNullExpressionValue(b11, "getBitmapPool(...)");
        return new a(b11, b(poolFactory, z11), platformDecoderOptions);
    }

    public static final b2.d b(y poolFactory, boolean z10) {
        Intrinsics.checkNotNullParameter(poolFactory, "poolFactory");
        if (z10) {
            r8.b INSTANCE = r8.b.f48674a;
            Intrinsics.checkNotNullExpressionValue(INSTANCE, "INSTANCE");
            return INSTANCE;
        }
        int e10 = poolFactory.e();
        Pools$SynchronizedPool pools$SynchronizedPool = new Pools$SynchronizedPool(e10);
        for (int i10 = 0; i10 < e10; i10++) {
            ByteBuffer allocate = ByteBuffer.allocate(r8.b.c());
            Intrinsics.checkNotNullExpressionValue(allocate, "allocate(...)");
            pools$SynchronizedPool.release(allocate);
        }
        return pools$SynchronizedPool;
    }
}
