package ma;

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
    private final String f36156a;

    /* renamed from: b  reason: collision with root package name */
    private final ResizeOptions f36157b;

    /* renamed from: c  reason: collision with root package name */
    private final RotationOptions f36158c;

    /* renamed from: d  reason: collision with root package name */
    private final ImageDecodeOptions f36159d;

    /* renamed from: e  reason: collision with root package name */
    private final CacheKey f36160e;

    /* renamed from: f  reason: collision with root package name */
    private final String f36161f;

    /* renamed from: g  reason: collision with root package name */
    private Object f36162g;

    /* renamed from: h  reason: collision with root package name */
    private final int f36163h;

    /* renamed from: i  reason: collision with root package name */
    private final long f36164i;

    public b(String sourceString, ResizeOptions resizeOptions, RotationOptions rotationOptions, ImageDecodeOptions imageDecodeOptions, CacheKey cacheKey, String str) {
        int i10;
        int i11;
        Intrinsics.checkNotNullParameter(sourceString, "sourceString");
        Intrinsics.checkNotNullParameter(rotationOptions, "rotationOptions");
        Intrinsics.checkNotNullParameter(imageDecodeOptions, "imageDecodeOptions");
        this.f36156a = sourceString;
        this.f36157b = resizeOptions;
        this.f36158c = rotationOptions;
        this.f36159d = imageDecodeOptions;
        this.f36160e = cacheKey;
        this.f36161f = str;
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
        this.f36163h = ((hashCode2 + i11) * 31) + (str != null ? str.hashCode() : 0);
        this.f36164i = RealtimeSinceBootClock.get().now();
    }

    @Override // com.facebook.cache.common.CacheKey
    public String a() {
        return this.f36156a;
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
        this.f36162g = obj;
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
        if (Intrinsics.areEqual(this.f36156a, bVar.f36156a) && Intrinsics.areEqual(this.f36157b, bVar.f36157b) && Intrinsics.areEqual(this.f36158c, bVar.f36158c) && Intrinsics.areEqual(this.f36159d, bVar.f36159d) && Intrinsics.areEqual(this.f36160e, bVar.f36160e) && Intrinsics.areEqual(this.f36161f, bVar.f36161f)) {
            return true;
        }
        return false;
    }

    @Override // com.facebook.cache.common.CacheKey
    public int hashCode() {
        return this.f36163h;
    }

    public String toString() {
        String str = this.f36156a;
        ResizeOptions resizeOptions = this.f36157b;
        RotationOptions rotationOptions = this.f36158c;
        ImageDecodeOptions imageDecodeOptions = this.f36159d;
        CacheKey cacheKey = this.f36160e;
        String str2 = this.f36161f;
        return "BitmapMemoryCacheKey(sourceString=" + str + ", resizeOptions=" + resizeOptions + ", rotationOptions=" + rotationOptions + ", imageDecodeOptions=" + imageDecodeOptions + ", postprocessorCacheKey=" + cacheKey + ", postprocessorName=" + str2 + ")";
    }
}
