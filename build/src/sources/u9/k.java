package u9;

import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f51128d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static final ConcurrentHashMap f51129e = new ConcurrentHashMap();

    /* renamed from: a  reason: collision with root package name */
    private final PlatformBitmapFactory f51130a;

    /* renamed from: b  reason: collision with root package name */
    private final int f51131b;

    /* renamed from: c  reason: collision with root package name */
    private final int f51132c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final void a(Date until) {
            Intrinsics.checkNotNullParameter(until, "until");
            synchronized (k.f51129e) {
                try {
                    ConcurrentHashMap concurrentHashMap = k.f51129e;
                    LinkedHashMap linkedHashMap = new LinkedHashMap();
                    for (Map.Entry entry : concurrentHashMap.entrySet()) {
                        if (((m) entry.getValue()).b().compareTo(until) < 0) {
                            linkedHashMap.put(entry.getKey(), entry.getValue());
                        }
                    }
                    for (Map.Entry entry2 : linkedHashMap.entrySet()) {
                        ((m) entry2.getValue()).a().clear();
                        k.f51129e.remove(entry2.getKey());
                    }
                    Unit unit = Unit.f32556a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void b(String cacheKey, j frameLoader) {
            Intrinsics.checkNotNullParameter(cacheKey, "cacheKey");
            Intrinsics.checkNotNullParameter(frameLoader, "frameLoader");
            k.f51129e.put(cacheKey, new m(frameLoader, new Date()));
        }

        private a() {
        }
    }

    public k(PlatformBitmapFactory platformBitmapFactory, int i10, int i11) {
        Intrinsics.checkNotNullParameter(platformBitmapFactory, "platformBitmapFactory");
        this.f51130a = platformBitmapFactory;
        this.f51131b = i10;
        this.f51132c = i11;
    }

    public final j b(String cacheKey, q9.c bitmapFrameRenderer, p9.d animationInformation) {
        Intrinsics.checkNotNullParameter(cacheKey, "cacheKey");
        Intrinsics.checkNotNullParameter(bitmapFrameRenderer, "bitmapFrameRenderer");
        Intrinsics.checkNotNullParameter(animationInformation, "animationInformation");
        ConcurrentHashMap concurrentHashMap = f51129e;
        synchronized (concurrentHashMap) {
            m mVar = (m) concurrentHashMap.get(cacheKey);
            if (mVar != null) {
                concurrentHashMap.remove(cacheKey);
                return mVar.a();
            }
            Unit unit = Unit.f32556a;
            return new g(this.f51130a, bitmapFrameRenderer, new t9.c(this.f51131b), animationInformation, this.f51132c);
        }
    }
}
