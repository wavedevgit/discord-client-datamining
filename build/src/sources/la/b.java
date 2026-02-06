package la;

import android.net.Uri;
import com.facebook.cache.common.CacheKey;
import com.facebook.common.time.RealtimeSinceBootClock;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.common.RotationOptions;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements CacheKey {

    /* renamed from: a  reason: collision with root package name */
    private final String f35903a;

    /* renamed from: b  reason: collision with root package name */
    private final ResizeOptions f35904b;

    /* renamed from: c  reason: collision with root package name */
    private final RotationOptions f35905c;

    /* renamed from: d  reason: collision with root package name */
    private final ImageDecodeOptions f35906d;

    /* renamed from: e  reason: collision with root package name */
    private final CacheKey f35907e;

    /* renamed from: f  reason: collision with root package name */
    private final String f35908f;

    /* renamed from: g  reason: collision with root package name */
    private Object f35909g;

    /* renamed from: h  reason: collision with root package name */
    private final int f35910h;

    /* renamed from: i  reason: collision with root package name */
    private final long f35911i;

    public b(String sourceString, ResizeOptions resizeOptions, RotationOptions rotationOptions, ImageDecodeOptions imageDecodeOptions, CacheKey cacheKey, String str) {
        int i10;
        int i11;
        Intrinsics.checkNotNullParameter(sourceString, "sourceString");
        Intrinsics.checkNotNullParameter(rotationOptions, "rotationOptions");
        Intrinsics.checkNotNullParameter(imageDecodeOptions, "imageDecodeOptions");
        this.f35903a = sourceString;
        this.f35904b = resizeOptions;
        this.f35905c = rotationOptions;
        this.f35906d = imageDecodeOptions;
        this.f35907e = cacheKey;
        this.f35908f = str;
        int hashCode = sourceString.hashCode() * 31;
        if (resizeOptions != null) {
            i10 = resizeOptions.hashCode();
        } else {
            i10 = 0;
        }
        int hashCode2 = (((((hashCode + i10) * 31) + rotationOptions.hashCode()) * 31) + imageDecodeOptions.hashCode()) * 31;
        if (cacheKey != null) {
            i11 = cacheKey.hashCode();
        } else {
            i11 = 0;
        }
        this.f35910h = ((hashCode2 + i11) * 31) + (str != null ? str.hashCode() : 0);
        this.f35911i = RealtimeSinceBootClock.get().now();
    }

    @Override // com.facebook.cache.common.CacheKey
    public String a() {
        return this.f35903a;
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean b(Uri uri) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        String a10 = a();
        String uri2 = uri.toString();
        Intrinsics.checkNotNullExpressionValue(uri2, "toString(...)");
        return StringsKt.V(a10, uri2, false, 2, null);
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean c() {
        return false;
    }

    public final void d(Object obj) {
        this.f35909g = obj;
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean equals(Object obj) {
        Class<?> cls;
        if (this == obj) {
            return true;
        }
        if (obj != null) {
            cls = obj.getClass();
        } else {
            cls = null;
        }
        if (!Intrinsics.areEqual(b.class, cls)) {
            return false;
        }
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type com.facebook.imagepipeline.cache.BitmapMemoryCacheKey");
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f35903a, bVar.f35903a) && Intrinsics.areEqual(this.f35904b, bVar.f35904b) && Intrinsics.areEqual(this.f35905c, bVar.f35905c) && Intrinsics.areEqual(this.f35906d, bVar.f35906d) && Intrinsics.areEqual(this.f35907e, bVar.f35907e) && Intrinsics.areEqual(this.f35908f, bVar.f35908f)) {
            return true;
        }
        return false;
    }

    @Override // com.facebook.cache.common.CacheKey
    public int hashCode() {
        return this.f35910h;
    }

    public String toString() {
        String str = this.f35903a;
        ResizeOptions resizeOptions = this.f35904b;
        RotationOptions rotationOptions = this.f35905c;
        ImageDecodeOptions imageDecodeOptions = this.f35906d;
        CacheKey cacheKey = this.f35907e;
        String str2 = this.f35908f;
        return "BitmapMemoryCacheKey(sourceString=" + str + ", resizeOptions=" + resizeOptions + ", rotationOptions=" + rotationOptions + ", imageDecodeOptions=" + imageDecodeOptions + ", postprocessorCacheKey=" + cacheKey + ", postprocessorName=" + str2 + ")";
    }
}
