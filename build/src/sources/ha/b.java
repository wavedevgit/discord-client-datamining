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
    public static final b f25713a = new b();

    /* renamed from: b  reason: collision with root package name */
    private static boolean f25714b;

    /* renamed from: c  reason: collision with root package name */
    private static a f25715c;

    private b() {
    }

    public static final a a(PlatformBitmapFactory platformBitmapFactory, n nVar, la.n nVar2, boolean z10, boolean z11, int i10, int i11, ExecutorService executorService) {
        if (!f25714b) {
            try {
                Class cls = Boolean.TYPE;
                Class cls2 = Integer.TYPE;
                Object newInstance = AnimatedFactoryV2Impl.class.getConstructor(PlatformBitmapFactory.class, n.class, la.n.class, cls, cls, cls2, cls2, g.class).newInstance(platformBitmapFactory, nVar, nVar2, Boolean.valueOf(z10), Boolean.valueOf(z11), Integer.valueOf(i10), Integer.valueOf(i11), executorService);
                Intrinsics.checkNotNull(newInstance, "null cannot be cast to non-null type com.facebook.imagepipeline.animated.factory.AnimatedFactory");
                f25715c = (a) newInstance;
            } catch (Throwable unused) {
            }
            if (f25715c != null) {
                f25714b = true;
            }
        }
        return f25715c;
    }
}
