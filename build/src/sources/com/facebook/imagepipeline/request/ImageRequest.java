package com.facebook.imagepipeline.request;

import android.net.Uri;
import android.os.Build;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Fn;
import com.facebook.imagepipeline.common.BytesRange;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import com.facebook.imagepipeline.common.Priority;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.common.RotationOptions;
import com.facebook.imagepipeline.core.DownsampleMode;
import com.facebook.imagepipeline.listener.RequestListener;
import java.io.File;
import java.util.HashMap;
import o8.h;
import o8.j;
import w8.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ImageRequest {
    public static final Fn REQUEST_TO_URI_FN = new a();
    private static boolean sCacheHashcode;
    private static boolean sUseCachedHashcodeInEquals;
    private final BytesRange mBytesRange;
    private final CacheChoice mCacheChoice;
    protected int mCachesDisabled;
    private final Boolean mDecodePrefetches;
    private final int mDelayMs;
    private final String mDiskCacheId;
    private final DownsampleMode mDownsampleOverride;
    private int mHashcode;
    private final ImageDecodeOptions mImageDecodeOptions;
    private final boolean mIsDiskCacheEnabled;
    private final boolean mIsMemoryCacheEnabled;
    private final boolean mLoadThumbnailOnly;
    private final boolean mLocalThumbnailPreviewsEnabled;
    private final RequestLevel mLowestPermittedRequestLevel;
    private final Postprocessor mPostprocessor;
    private final boolean mProgressiveRenderingEnabled;
    private final RequestListener mRequestListener;
    private final Priority mRequestPriority;
    private final ResizeOptions mResizeOptions;
    private final Boolean mResizingAllowedOverride;
    private final RotationOptions mRotationOptions;
    private File mSourceFile;
    private final Uri mSourceUri;
    private final int mSourceUriType;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum CacheChoice {
        SMALL,
        DEFAULT,
        DYNAMIC
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum RequestLevel {
        FULL_FETCH(1),
        DISK_CACHE(2),
        ENCODED_MEMORY_CACHE(3),
        BITMAP_MEMORY_CACHE(4);
        

        /* renamed from: d  reason: collision with root package name */
        private int f11635d;

        RequestLevel(int i10) {
            this.f11635d = i10;
        }

        public static RequestLevel a(RequestLevel requestLevel, RequestLevel requestLevel2) {
            if (requestLevel.d() > requestLevel2.d()) {
                return requestLevel;
            }
            return requestLevel2;
        }

        public int d() {
            return this.f11635d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Fn {
        a() {
        }

        @Override // com.facebook.common.internal.Fn
        /* renamed from: a */
        public Uri apply(ImageRequest imageRequest) {
            if (imageRequest != null) {
                return imageRequest.getSourceUri();
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public ImageRequest(ImageRequestBuilder imageRequestBuilder) {
        RotationOptions q10;
        this.mCacheChoice = imageRequestBuilder.d();
        Uri r10 = imageRequestBuilder.r();
        this.mSourceUri = r10;
        this.mSourceUriType = b(r10);
        this.mProgressiveRenderingEnabled = imageRequestBuilder.w();
        this.mLocalThumbnailPreviewsEnabled = imageRequestBuilder.u();
        this.mLoadThumbnailOnly = imageRequestBuilder.j();
        this.mImageDecodeOptions = imageRequestBuilder.i();
        this.mResizeOptions = imageRequestBuilder.o();
        if (imageRequestBuilder.q() == null) {
            q10 = RotationOptions.d();
        } else {
            q10 = imageRequestBuilder.q();
        }
        this.mRotationOptions = q10;
        this.mBytesRange = imageRequestBuilder.c();
        this.mRequestPriority = imageRequestBuilder.n();
        this.mLowestPermittedRequestLevel = imageRequestBuilder.k();
        boolean t10 = imageRequestBuilder.t();
        this.mIsDiskCacheEnabled = t10;
        int e10 = imageRequestBuilder.e();
        this.mCachesDisabled = t10 ? e10 : e10 | 48;
        this.mIsMemoryCacheEnabled = imageRequestBuilder.v();
        this.mDecodePrefetches = imageRequestBuilder.S();
        this.mPostprocessor = imageRequestBuilder.l();
        this.mRequestListener = imageRequestBuilder.m();
        this.mResizingAllowedOverride = imageRequestBuilder.p();
        this.mDownsampleOverride = imageRequestBuilder.h();
        this.mDelayMs = imageRequestBuilder.f();
        this.mDiskCacheId = imageRequestBuilder.g();
    }

    private static int a(Object obj) {
        if (obj == null) {
            return 0;
        }
        return obj.hashCode();
    }

    private static int b(Uri uri) {
        if (uri == null) {
            return -1;
        }
        if (f.p(uri)) {
            return 0;
        }
        if (uri.getPath() != null && f.n(uri)) {
            if (q8.a.c(q8.a.b(uri.getPath()))) {
                return 2;
            }
            return 3;
        } else if (f.m(uri)) {
            return 4;
        } else {
            if (f.j(uri)) {
                return 5;
            }
            if (f.o(uri)) {
                return 6;
            }
            if (f.i(uri)) {
                return 7;
            }
            if (!f.q(uri)) {
                return -1;
            }
            return 8;
        }
    }

    public static ImageRequest fromFile(File file) {
        if (file == null) {
            return null;
        }
        return fromUri(f.g(file));
    }

    public static ImageRequest fromUri(Uri uri) {
        if (uri == null) {
            return null;
        }
        return ImageRequestBuilder.x(uri).a();
    }

    public static void setCacheHashcode(boolean z10) {
        sCacheHashcode = z10;
    }

    public static void setUseCachedHashcodeInEquals(boolean z10) {
        sUseCachedHashcodeInEquals = z10;
    }

    public boolean equals(Object obj) {
        CacheKey cacheKey;
        if (!(obj instanceof ImageRequest)) {
            return false;
        }
        ImageRequest imageRequest = (ImageRequest) obj;
        if (sUseCachedHashcodeInEquals) {
            int i10 = this.mHashcode;
            int i11 = imageRequest.mHashcode;
            if (i10 != 0 && i11 != 0 && i10 != i11) {
                return false;
            }
        }
        if (this.mLocalThumbnailPreviewsEnabled == imageRequest.mLocalThumbnailPreviewsEnabled && this.mIsDiskCacheEnabled == imageRequest.mIsDiskCacheEnabled && this.mIsMemoryCacheEnabled == imageRequest.mIsMemoryCacheEnabled && h.a(this.mSourceUri, imageRequest.mSourceUri) && h.a(this.mCacheChoice, imageRequest.mCacheChoice) && h.a(this.mDiskCacheId, imageRequest.mDiskCacheId) && h.a(this.mSourceFile, imageRequest.mSourceFile) && h.a(this.mBytesRange, imageRequest.mBytesRange) && h.a(this.mImageDecodeOptions, imageRequest.mImageDecodeOptions) && h.a(this.mResizeOptions, imageRequest.mResizeOptions) && h.a(this.mRequestPriority, imageRequest.mRequestPriority) && h.a(this.mLowestPermittedRequestLevel, imageRequest.mLowestPermittedRequestLevel) && h.a(Integer.valueOf(this.mCachesDisabled), Integer.valueOf(imageRequest.mCachesDisabled)) && h.a(this.mDecodePrefetches, imageRequest.mDecodePrefetches) && h.a(this.mResizingAllowedOverride, imageRequest.mResizingAllowedOverride) && h.a(this.mDownsampleOverride, imageRequest.mDownsampleOverride) && h.a(this.mRotationOptions, imageRequest.mRotationOptions) && this.mLoadThumbnailOnly == imageRequest.mLoadThumbnailOnly) {
            Postprocessor postprocessor = this.mPostprocessor;
            CacheKey cacheKey2 = null;
            if (postprocessor != null) {
                cacheKey = postprocessor.getPostprocessorCacheKey();
            } else {
                cacheKey = null;
            }
            Postprocessor postprocessor2 = imageRequest.mPostprocessor;
            if (postprocessor2 != null) {
                cacheKey2 = postprocessor2.getPostprocessorCacheKey();
            }
            if (h.a(cacheKey, cacheKey2) && this.mDelayMs == imageRequest.mDelayMs) {
                return true;
            }
        }
        return false;
    }

    @Deprecated
    public boolean getAutoRotateEnabled() {
        return this.mRotationOptions.j();
    }

    public BytesRange getBytesRange() {
        return this.mBytesRange;
    }

    public CacheChoice getCacheChoice() {
        return this.mCacheChoice;
    }

    public int getCachesDisabled() {
        return this.mCachesDisabled;
    }

    public int getDelayMs() {
        return this.mDelayMs;
    }

    public String getDiskCacheId() {
        return this.mDiskCacheId;
    }

    public DownsampleMode getDownsampleOverride() {
        return this.mDownsampleOverride;
    }

    public ImageDecodeOptions getImageDecodeOptions() {
        return this.mImageDecodeOptions;
    }

    public boolean getLoadThumbnailOnlyForAndroidSdkAboveQ() {
        if (Build.VERSION.SDK_INT >= 29 && this.mLoadThumbnailOnly) {
            return true;
        }
        return false;
    }

    public boolean getLocalThumbnailPreviewsEnabled() {
        return this.mLocalThumbnailPreviewsEnabled;
    }

    public RequestLevel getLowestPermittedRequestLevel() {
        return this.mLowestPermittedRequestLevel;
    }

    public Postprocessor getPostprocessor() {
        return this.mPostprocessor;
    }

    public int getPreferredHeight() {
        ResizeOptions resizeOptions = this.mResizeOptions;
        if (resizeOptions != null) {
            return resizeOptions.f11095b;
        }
        return RecyclerView.ItemAnimator.FLAG_MOVED;
    }

    public int getPreferredWidth() {
        ResizeOptions resizeOptions = this.mResizeOptions;
        if (resizeOptions != null) {
            return resizeOptions.f11094a;
        }
        return RecyclerView.ItemAnimator.FLAG_MOVED;
    }

    public Priority getPriority() {
        return this.mRequestPriority;
    }

    public boolean getProgressiveRenderingEnabled() {
        return this.mProgressiveRenderingEnabled;
    }

    public RequestListener getRequestListener() {
        return this.mRequestListener;
    }

    public ResizeOptions getResizeOptions() {
        return this.mResizeOptions;
    }

    public Boolean getResizingAllowedOverride() {
        return this.mResizingAllowedOverride;
    }

    public RotationOptions getRotationOptions() {
        return this.mRotationOptions;
    }

    public synchronized File getSourceFile() {
        try {
            if (this.mSourceFile == null) {
                j.g(this.mSourceUri.getPath());
                this.mSourceFile = new File(this.mSourceUri.getPath());
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return this.mSourceFile;
    }

    public Uri getSourceUri() {
        return this.mSourceUri;
    }

    public int getSourceUriType() {
        return this.mSourceUriType;
    }

    public int hashCode() {
        int i10;
        CacheKey cacheKey;
        boolean z10 = sCacheHashcode;
        if (z10) {
            i10 = this.mHashcode;
        } else {
            i10 = 0;
        }
        if (i10 == 0) {
            Postprocessor postprocessor = this.mPostprocessor;
            if (postprocessor != null) {
                cacheKey = postprocessor.getPostprocessorCacheKey();
            } else {
                cacheKey = null;
            }
            int a10 = eb.a.a(eb.a.a(eb.a.a(eb.a.a(eb.a.a(eb.a.a(eb.a.a(eb.a.a(eb.a.a(eb.a.a(eb.a.a(eb.a.a(eb.a.a(eb.a.a(eb.a.a(eb.a.a(eb.a.a(eb.a.a(0, this.mCacheChoice), this.mSourceUri), Boolean.valueOf(this.mLocalThumbnailPreviewsEnabled)), this.mBytesRange), this.mRequestPriority), this.mLowestPermittedRequestLevel), Integer.valueOf(this.mCachesDisabled)), Boolean.valueOf(this.mIsDiskCacheEnabled)), Boolean.valueOf(this.mIsMemoryCacheEnabled)), this.mImageDecodeOptions), this.mDecodePrefetches), this.mResizeOptions), this.mRotationOptions), cacheKey), this.mResizingAllowedOverride), this.mDownsampleOverride), Integer.valueOf(this.mDelayMs)), Boolean.valueOf(this.mLoadThumbnailOnly));
            if (z10) {
                this.mHashcode = a10;
            }
            return a10;
        }
        return i10;
    }

    public boolean isCacheEnabled(int i10) {
        if ((i10 & getCachesDisabled()) == 0) {
            return true;
        }
        return false;
    }

    public boolean isDiskCacheEnabled() {
        return this.mIsDiskCacheEnabled;
    }

    public boolean isMemoryCacheEnabled() {
        return this.mIsMemoryCacheEnabled;
    }

    public void recordHashCode(HashMap<String, Integer> hashMap) {
        CacheKey cacheKey;
        Postprocessor postprocessor = this.mPostprocessor;
        if (postprocessor != null) {
            cacheKey = postprocessor.getPostprocessorCacheKey();
        } else {
            cacheKey = null;
        }
        hashMap.put("ImageRequest", Integer.valueOf(hashCode()));
        hashMap.put("ImageRequest.mSourceUri", Integer.valueOf(a(this.mSourceUri)));
        hashMap.put("ImageRequest.mLocalThumbnailPreviewsEnabled", Integer.valueOf(a(Boolean.valueOf(this.mLocalThumbnailPreviewsEnabled))));
        hashMap.put("ImageRequest.mBytesRange", Integer.valueOf(a(this.mBytesRange)));
        hashMap.put("ImageRequest.mRequestPriority", Integer.valueOf(a(this.mRequestPriority)));
        hashMap.put("ImageRequest.mLowestPermittedRequestLevel", Integer.valueOf(a(this.mLowestPermittedRequestLevel)));
        hashMap.put("ImageRequest.mCachesDisabled", Integer.valueOf(a(Integer.valueOf(this.mCachesDisabled))));
        hashMap.put("ImageRequest.mIsDiskCacheEnabled", Integer.valueOf(a(Boolean.valueOf(this.mIsDiskCacheEnabled))));
        hashMap.put("ImageRequest.mIsMemoryCacheEnabled", Integer.valueOf(a(Boolean.valueOf(this.mIsMemoryCacheEnabled))));
        hashMap.put("ImageRequest.mImageDecodeOptions", Integer.valueOf(a(this.mImageDecodeOptions)));
        hashMap.put("ImageRequest.mDecodePrefetches", Integer.valueOf(a(this.mDecodePrefetches)));
        hashMap.put("ImageRequest.mSoumResizeOptionsrceUri", Integer.valueOf(a(this.mResizeOptions)));
        hashMap.put("ImageRequest.mRotationOptions", Integer.valueOf(a(this.mRotationOptions)));
        hashMap.put("ImageRequest.postprocessorCacheKey", Integer.valueOf(a(cacheKey)));
        hashMap.put("ImageRequest.mResizingAllowedOverride", Integer.valueOf(a(this.mResizingAllowedOverride)));
        hashMap.put("ImageRequest.mDownsampleOverride", Integer.valueOf(a(this.mDownsampleOverride)));
        hashMap.put("ImageRequest.mDelayMs", Integer.valueOf(a(Integer.valueOf(this.mDelayMs))));
        hashMap.put("ImageRequest.mLoadThumbnailOnly", Integer.valueOf(a(Boolean.valueOf(this.mLoadThumbnailOnly))));
    }

    public Boolean shouldDecodePrefetches() {
        return this.mDecodePrefetches;
    }

    public String toString() {
        return h.b(this).b("uri", this.mSourceUri).b("cacheChoice", this.mCacheChoice).b("decodeOptions", this.mImageDecodeOptions).b("postprocessor", this.mPostprocessor).b("priority", this.mRequestPriority).b("resizeOptions", this.mResizeOptions).b("rotationOptions", this.mRotationOptions).b("bytesRange", this.mBytesRange).b("resizingAllowedOverride", this.mResizingAllowedOverride).b("downsampleOverride", this.mDownsampleOverride).c("progressiveRenderingEnabled", this.mProgressiveRenderingEnabled).c("localThumbnailPreviewsEnabled", this.mLocalThumbnailPreviewsEnabled).c("loadThumbnailOnly", this.mLoadThumbnailOnly).b("lowestPermittedRequestLevel", this.mLowestPermittedRequestLevel).a("cachesDisabled", this.mCachesDisabled).c("isDiskCacheEnabled", this.mIsDiskCacheEnabled).c("isMemoryCacheEnabled", this.mIsMemoryCacheEnabled).b("decodePrefetches", this.mDecodePrefetches).a("delayMs", this.mDelayMs).toString();
    }

    public static ImageRequest fromUri(String str) {
        if (str == null || str.length() == 0) {
            return null;
        }
        return fromUri(Uri.parse(str));
    }
}
