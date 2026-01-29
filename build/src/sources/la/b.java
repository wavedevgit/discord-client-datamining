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
    private final String f36984a;

    /* renamed from: b  reason: collision with root package name */
    private final ResizeOptions f36985b;

    /* renamed from: c  reason: collision with root package name */
    private final RotationOptions f36986c;

    /* renamed from: d  reason: collision with root package name */
    private final ImageDecodeOptions f36987d;

    /* renamed from: e  reason: collision with root package name */
    private final CacheKey f36988e;

    /* renamed from: f  reason: collision with root package name */
    private final String f36989f;

    /* renamed from: g  reason: collision with root package name */
    private Object f36990g;

    /* renamed from: h  reason: collision with root package name */
    private final int f36991h;

    /* renamed from: i  reason: collision with root package name */
    private final long f36992i;

    public b(String sourceString, ResizeOptions resizeOptions, RotationOptions rotationOptions, ImageDecodeOptions imageDecodeOptions, CacheKey cacheKey, String str) {
        int i10;
        int i11;
        Intrinsics.checkNotNullParameter(sourceString, "sourceString");
        Intrinsics.checkNotNullParameter(rotationOptions, "rotationOptions");
        Intrinsics.checkNotNullParameter(imageDecodeOptions, "imageDecodeOptions");
        this.f36984a = sourceString;
        this.f36985b = resizeOptions;
        this.f36986c = rotationOptions;
        this.f36987d = imageDecodeOptions;
        this.f36988e = cacheKey;
        this.f36989f = str;
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
        this.f36991h = ((hashCode2 + i11) * 31) + (str != null ? str.hashCode() : 0);
        this.f36992i = RealtimeSinceBootClock.get().now();
    }

    @Override // com.facebook.cache.common.CacheKey
    public String a() {
        return this.f36984a;
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
        this.f36990g = obj;
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
        if (Intrinsics.areEqual(this.f36984a, bVar.f36984a) && Intrinsics.areEqual(this.f36985b, bVar.f36985b) && Intrinsics.areEqual(this.f36986c, bVar.f36986c) && Intrinsics.areEqual(this.f36987d, bVar.f36987d) && Intrinsics.areEqual(this.f36988e, bVar.f36988e) && Intrinsics.areEqual(this.f36989f, bVar.f36989f)) {
            return true;
        }
        return false;
    }

    @Override // com.facebook.cache.common.CacheKey
    public int hashCode() {
        return this.f36991h;
    }

    public String toString() {
        String str = this.f36984a;
        ResizeOptions resizeOptions = this.f36985b;
        RotationOptions rotationOptions = this.f36986c;
        ImageDecodeOptions imageDecodeOptions = this.f36987d;
        CacheKey cacheKey = this.f36988e;
        String str2 = this.f36989f;
        return "BitmapMemoryCacheKey(sourceString=" + str + ", resizeOptions=" + resizeOptions + ", rotationOptions=" + rotationOptions + ", imageDecodeOptions=" + imageDecodeOptions + ", postprocessorCacheKey=" + cacheKey + ", postprocessorName=" + str2 + ")";
    }
}
