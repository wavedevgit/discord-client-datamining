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
    private final String f37000a;

    /* renamed from: b  reason: collision with root package name */
    private final ResizeOptions f37001b;

    /* renamed from: c  reason: collision with root package name */
    private final RotationOptions f37002c;

    /* renamed from: d  reason: collision with root package name */
    private final ImageDecodeOptions f37003d;

    /* renamed from: e  reason: collision with root package name */
    private final CacheKey f37004e;

    /* renamed from: f  reason: collision with root package name */
    private final String f37005f;

    /* renamed from: g  reason: collision with root package name */
    private Object f37006g;

    /* renamed from: h  reason: collision with root package name */
    private final int f37007h;

    /* renamed from: i  reason: collision with root package name */
    private final long f37008i;

    public b(String sourceString, ResizeOptions resizeOptions, RotationOptions rotationOptions, ImageDecodeOptions imageDecodeOptions, CacheKey cacheKey, String str) {
        int i10;
        int i11;
        Intrinsics.checkNotNullParameter(sourceString, "sourceString");
        Intrinsics.checkNotNullParameter(rotationOptions, "rotationOptions");
        Intrinsics.checkNotNullParameter(imageDecodeOptions, "imageDecodeOptions");
        this.f37000a = sourceString;
        this.f37001b = resizeOptions;
        this.f37002c = rotationOptions;
        this.f37003d = imageDecodeOptions;
        this.f37004e = cacheKey;
        this.f37005f = str;
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
        this.f37007h = ((hashCode2 + i11) * 31) + (str != null ? str.hashCode() : 0);
        this.f37008i = RealtimeSinceBootClock.get().now();
    }

    @Override // com.facebook.cache.common.CacheKey
    public String a() {
        return this.f37000a;
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
        this.f37006g = obj;
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
        if (Intrinsics.areEqual(this.f37000a, bVar.f37000a) && Intrinsics.areEqual(this.f37001b, bVar.f37001b) && Intrinsics.areEqual(this.f37002c, bVar.f37002c) && Intrinsics.areEqual(this.f37003d, bVar.f37003d) && Intrinsics.areEqual(this.f37004e, bVar.f37004e) && Intrinsics.areEqual(this.f37005f, bVar.f37005f)) {
            return true;
        }
        return false;
    }

    @Override // com.facebook.cache.common.CacheKey
    public int hashCode() {
        return this.f37007h;
    }

    public String toString() {
        String str = this.f37000a;
        ResizeOptions resizeOptions = this.f37001b;
        RotationOptions rotationOptions = this.f37002c;
        ImageDecodeOptions imageDecodeOptions = this.f37003d;
        CacheKey cacheKey = this.f37004e;
        String str2 = this.f37005f;
        return "BitmapMemoryCacheKey(sourceString=" + str + ", resizeOptions=" + resizeOptions + ", rotationOptions=" + rotationOptions + ", imageDecodeOptions=" + imageDecodeOptions + ", postprocessorCacheKey=" + cacheKey + ", postprocessorName=" + str2 + ")";
    }
}
