package t9;

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
    public static final a f50448d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static final ConcurrentHashMap f50449e = new ConcurrentHashMap();

    /* renamed from: a  reason: collision with root package name */
    private final PlatformBitmapFactory f50450a;

    /* renamed from: b  reason: collision with root package name */
    private final int f50451b;

    /* renamed from: c  reason: collision with root package name */
    private final int f50452c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final void a(Date until) {
            Intrinsics.checkNotNullParameter(until, "until");
            synchronized (k.f50449e) {
                try {
                    ConcurrentHashMap concurrentHashMap = k.f50449e;
                    LinkedHashMap linkedHashMap = new LinkedHashMap();
                    for (Map.Entry entry : concurrentHashMap.entrySet()) {
                        if (((m) entry.getValue()).b().compareTo(until) < 0) {
                            linkedHashMap.put(entry.getKey(), entry.getValue());
                        }
                    }
                    for (Map.Entry entry2 : linkedHashMap.entrySet()) {
                        ((m) entry2.getValue()).a().clear();
                        k.f50449e.remove(entry2.getKey());
                    }
                    Unit unit = Unit.f31988a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void b(String cacheKey, j frameLoader) {
            Intrinsics.checkNotNullParameter(cacheKey, "cacheKey");
            Intrinsics.checkNotNullParameter(frameLoader, "frameLoader");
            k.f50449e.put(cacheKey, new m(frameLoader, new Date()));
        }

        private a() {
        }
    }

    public k(PlatformBitmapFactory platformBitmapFactory, int i10, int i11) {
        Intrinsics.checkNotNullParameter(platformBitmapFactory, "platformBitmapFactory");
        this.f50450a = platformBitmapFactory;
        this.f50451b = i10;
        this.f50452c = i11;
    }

    public final j b(String cacheKey, p9.c bitmapFrameRenderer, o9.d animationInformation) {
        Intrinsics.checkNotNullParameter(cacheKey, "cacheKey");
        Intrinsics.checkNotNullParameter(bitmapFrameRenderer, "bitmapFrameRenderer");
        Intrinsics.checkNotNullParameter(animationInformation, "animationInformation");
        ConcurrentHashMap concurrentHashMap = f50449e;
        synchronized (concurrentHashMap) {
            m mVar = (m) concurrentHashMap.get(cacheKey);
            if (mVar != null) {
                concurrentHashMap.remove(cacheKey);
                return mVar.a();
            }
            Unit unit = Unit.f31988a;
            return new g(this.f50450a, bitmapFrameRenderer, new s9.c(this.f50451b), animationInformation, this.f50452c);
        }
    }
}
