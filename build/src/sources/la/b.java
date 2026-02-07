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
    private final String f35951a;

    /* renamed from: b  reason: collision with root package name */
    private final ResizeOptions f35952b;

    /* renamed from: c  reason: collision with root package name */
    private final RotationOptions f35953c;

    /* renamed from: d  reason: collision with root package name */
    private final ImageDecodeOptions f35954d;

    /* renamed from: e  reason: collision with root package name */
    private final CacheKey f35955e;

    /* renamed from: f  reason: collision with root package name */
    private final String f35956f;

    /* renamed from: g  reason: collision with root package name */
    private Object f35957g;

    /* renamed from: h  reason: collision with root package name */
    private final int f35958h;

    /* renamed from: i  reason: collision with root package name */
    private final long f35959i;

    public b(String sourceString, ResizeOptions resizeOptions, RotationOptions rotationOptions, ImageDecodeOptions imageDecodeOptions, CacheKey cacheKey, String str) {
        int i10;
        int i11;
        Intrinsics.checkNotNullParameter(sourceString, "sourceString");
        Intrinsics.checkNotNullParameter(rotationOptions, "rotationOptions");
        Intrinsics.checkNotNullParameter(imageDecodeOptions, "imageDecodeOptions");
        this.f35951a = sourceString;
        this.f35952b = resizeOptions;
        this.f35953c = rotationOptions;
        this.f35954d = imageDecodeOptions;
        this.f35955e = cacheKey;
        this.f35956f = str;
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
        this.f35958h = ((hashCode2 + i11) * 31) + (str != null ? str.hashCode() : 0);
        this.f35959i = RealtimeSinceBootClock.get().now();
    }

    @Override // com.facebook.cache.common.CacheKey
    public String a() {
        return this.f35951a;
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
        this.f35957g = obj;
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
        if (Intrinsics.areEqual(this.f35951a, bVar.f35951a) && Intrinsics.areEqual(this.f35952b, bVar.f35952b) && Intrinsics.areEqual(this.f35953c, bVar.f35953c) && Intrinsics.areEqual(this.f35954d, bVar.f35954d) && Intrinsics.areEqual(this.f35955e, bVar.f35955e) && Intrinsics.areEqual(this.f35956f, bVar.f35956f)) {
            return true;
        }
        return false;
    }

    @Override // com.facebook.cache.common.CacheKey
    public int hashCode() {
        return this.f35958h;
    }

    public String toString() {
        String str = this.f35951a;
        ResizeOptions resizeOptions = this.f35952b;
        RotationOptions rotationOptions = this.f35953c;
        ImageDecodeOptions imageDecodeOptions = this.f35954d;
        CacheKey cacheKey = this.f35955e;
        String str2 = this.f35956f;
        return "BitmapMemoryCacheKey(sourceString=" + str + ", resizeOptions=" + resizeOptions + ", rotationOptions=" + rotationOptions + ", imageDecodeOptions=" + imageDecodeOptions + ", postprocessorCacheKey=" + cacheKey + ", postprocessorName=" + str2 + ")";
    }
}
