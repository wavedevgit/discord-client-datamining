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
    private final String f36510a;

    /* renamed from: b  reason: collision with root package name */
    private final ResizeOptions f36511b;

    /* renamed from: c  reason: collision with root package name */
    private final RotationOptions f36512c;

    /* renamed from: d  reason: collision with root package name */
    private final ImageDecodeOptions f36513d;

    /* renamed from: e  reason: collision with root package name */
    private final CacheKey f36514e;

    /* renamed from: f  reason: collision with root package name */
    private final String f36515f;

    /* renamed from: g  reason: collision with root package name */
    private Object f36516g;

    /* renamed from: h  reason: collision with root package name */
    private final int f36517h;

    /* renamed from: i  reason: collision with root package name */
    private final long f36518i;

    public b(String sourceString, ResizeOptions resizeOptions, RotationOptions rotationOptions, ImageDecodeOptions imageDecodeOptions, CacheKey cacheKey, String str) {
        int i10;
        int i11;
        Intrinsics.checkNotNullParameter(sourceString, "sourceString");
        Intrinsics.checkNotNullParameter(rotationOptions, "rotationOptions");
        Intrinsics.checkNotNullParameter(imageDecodeOptions, "imageDecodeOptions");
        this.f36510a = sourceString;
        this.f36511b = resizeOptions;
        this.f36512c = rotationOptions;
        this.f36513d = imageDecodeOptions;
        this.f36514e = cacheKey;
        this.f36515f = str;
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
        this.f36517h = ((hashCode2 + i11) * 31) + (str != null ? str.hashCode() : 0);
        this.f36518i = RealtimeSinceBootClock.get().now();
    }

    @Override // com.facebook.cache.common.CacheKey
    public String a() {
        return this.f36510a;
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
        this.f36516g = obj;
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
        if (Intrinsics.areEqual(this.f36510a, bVar.f36510a) && Intrinsics.areEqual(this.f36511b, bVar.f36511b) && Intrinsics.areEqual(this.f36512c, bVar.f36512c) && Intrinsics.areEqual(this.f36513d, bVar.f36513d) && Intrinsics.areEqual(this.f36514e, bVar.f36514e) && Intrinsics.areEqual(this.f36515f, bVar.f36515f)) {
            return true;
        }
        return false;
    }

    @Override // com.facebook.cache.common.CacheKey
    public int hashCode() {
        return this.f36517h;
    }

    public String toString() {
        String str = this.f36510a;
        ResizeOptions resizeOptions = this.f36511b;
        RotationOptions rotationOptions = this.f36512c;
        ImageDecodeOptions imageDecodeOptions = this.f36513d;
        CacheKey cacheKey = this.f36514e;
        String str2 = this.f36515f;
        return "BitmapMemoryCacheKey(sourceString=" + str + ", resizeOptions=" + resizeOptions + ", rotationOptions=" + rotationOptions + ", imageDecodeOptions=" + imageDecodeOptions + ", postprocessorCacheKey=" + cacheKey + ", postprocessorName=" + str2 + ")";
    }
}
