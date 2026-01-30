package ha;

import com.facebook.fresco.animation.factory.AnimatedFactoryV2Impl;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import java.util.concurrent.ExecutorService;
import kotlin.jvm.internal.Intrinsics;
import m8.g;
import na.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f27414a = new b();

    /* renamed from: b  reason: collision with root package name */
    private static boolean f27415b;

    /* renamed from: c  reason: collision with root package name */
    private static a f27416c;

    private b() {
    }

    public static final a a(PlatformBitmapFactory platformBitmapFactory, n nVar, la.n nVar2, boolean z10, boolean z11, int i10, int i11, ExecutorService executorService) {
        if (!f27415b) {
            try {
                Class cls = Boolean.TYPE;
                Class cls2 = Integer.TYPE;
                Object newInstance = AnimatedFactoryV2Impl.class.getConstructor(PlatformBitmapFactory.class, n.class, la.n.class, cls, cls, cls2, cls2, g.class).newInstance(platformBitmapFactory, nVar, nVar2, Boolean.valueOf(z10), Boolean.valueOf(z11), Integer.valueOf(i10), Integer.valueOf(i11), executorService);
                Intrinsics.checkNotNull(newInstance, "null cannot be cast to non-null type com.facebook.imagepipeline.animated.factory.AnimatedFactory");
                f27416c = (a) newInstance;
            } catch (Throwable unused) {
            }
            if (f27416c != null) {
                f27415b = true;
            }
        }
        return f27416c;
    }
}
