package com.facebook.imagepipeline.request;

import android.net.Uri;
import com.facebook.imagepipeline.common.BytesRange;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import com.facebook.imagepipeline.common.Priority;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.common.RotationOptions;
import com.facebook.imagepipeline.core.DownsampleMode;
import com.facebook.imagepipeline.core.ImagePipelineConfig;
import com.facebook.imagepipeline.listener.RequestListener;
import com.facebook.imagepipeline.request.ImageRequest;
import java.util.HashSet;
import java.util.Set;
import o8.j;
import w8.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ImageRequestBuilder {

    /* renamed from: t  reason: collision with root package name */
    private static final Set f12007t = new HashSet();

    /* renamed from: n  reason: collision with root package name */
    private RequestListener f12021n;

    /* renamed from: r  reason: collision with root package name */
    private int f12025r;

    /* renamed from: a  reason: collision with root package name */
    private Uri f12008a = null;

    /* renamed from: b  reason: collision with root package name */
    private ImageRequest.RequestLevel f12009b = ImageRequest.RequestLevel.FULL_FETCH;

    /* renamed from: c  reason: collision with root package name */
    private int f12010c = 0;

    /* renamed from: d  reason: collision with root package name */
    private ResizeOptions f12011d = null;

    /* renamed from: e  reason: collision with root package name */
    private RotationOptions f12012e = null;

    /* renamed from: f  reason: collision with root package name */
    private ImageDecodeOptions f12013f = ImageDecodeOptions.a();

    /* renamed from: g  reason: collision with root package name */
    private ImageRequest.CacheChoice f12014g = ImageRequest.CacheChoice.DEFAULT;

    /* renamed from: h  reason: collision with root package name */
    private boolean f12015h = ImagePipelineConfig.J().a();

    /* renamed from: i  reason: collision with root package name */
    private boolean f12016i = false;

    /* renamed from: j  reason: collision with root package name */
    private boolean f12017j = false;

    /* renamed from: k  reason: collision with root package name */
    private Priority f12018k = Priority.f11461o;

    /* renamed from: l  reason: collision with root package name */
    private Postprocessor f12019l = null;

    /* renamed from: m  reason: collision with root package name */
    private Boolean f12020m = null;

    /* renamed from: o  reason: collision with root package name */
    private BytesRange f12022o = null;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f12023p = null;

    /* renamed from: q  reason: collision with root package name */
    private DownsampleMode f12024q = null;

    /* renamed from: s  reason: collision with root package name */
    private String f12026s = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends RuntimeException {
        public a(String str) {
            super("Invalid request builder: " + str);
        }
    }

    private ImageRequestBuilder() {
    }

    private ImageRequestBuilder B(int i10) {
        this.f12010c = i10;
        if (this.f12014g != ImageRequest.CacheChoice.DYNAMIC) {
            this.f12026s = null;
        }
        return this;
    }

    public static ImageRequestBuilder b(ImageRequest imageRequest) {
        return x(imageRequest.getSourceUri()).F(imageRequest.getImageDecodeOptions()).z(imageRequest.getBytesRange()).A(imageRequest.getCacheChoice()).H(imageRequest.getLocalThumbnailPreviewsEnabled()).G(imageRequest.getLoadThumbnailOnlyForAndroidSdkAboveQ()).I(imageRequest.getLowestPermittedRequestLevel()).B(imageRequest.getCachesDisabled()).J(imageRequest.getPostprocessor()).K(imageRequest.getProgressiveRenderingEnabled()).M(imageRequest.getPriority()).N(imageRequest.getResizeOptions()).L(imageRequest.getRequestListener()).P(imageRequest.getRotationOptions()).Q(imageRequest.shouldDecodePrefetches()).C(imageRequest.getDelayMs()).D(imageRequest.getDiskCacheId()).E(imageRequest.getDownsampleOverride()).O(imageRequest.getResizingAllowedOverride());
    }

    public static boolean s(Uri uri) {
        Set<String> set = f12007t;
        if (set != null && uri != null) {
            for (String str : set) {
                if (str.equals(uri.getScheme())) {
                    return true;
                }
            }
        }
        return false;
    }

    public static ImageRequestBuilder x(Uri uri) {
        return new ImageRequestBuilder().R(uri);
    }

    public ImageRequestBuilder A(ImageRequest.CacheChoice cacheChoice) {
        this.f12014g = cacheChoice;
        return this;
    }

    public ImageRequestBuilder C(int i10) {
        this.f12025r = i10;
        return this;
    }

    public ImageRequestBuilder D(String str) {
        this.f12026s = str;
        return this;
    }

    public ImageRequestBuilder E(DownsampleMode downsampleMode) {
        this.f12024q = downsampleMode;
        return this;
    }

    public ImageRequestBuilder F(ImageDecodeOptions imageDecodeOptions) {
        this.f12013f = imageDecodeOptions;
        return this;
    }

    public ImageRequestBuilder G(boolean z10) {
        this.f12017j = z10;
        return this;
    }

    public ImageRequestBuilder H(boolean z10) {
        this.f12016i = z10;
        return this;
    }

    public ImageRequestBuilder I(ImageRequest.RequestLevel requestLevel) {
        this.f12009b = requestLevel;
        return this;
    }

    public ImageRequestBuilder J(Postprocessor postprocessor) {
        this.f12019l = postprocessor;
        return this;
    }

    public ImageRequestBuilder K(boolean z10) {
        this.f12015h = z10;
        return this;
    }

    public ImageRequestBuilder L(RequestListener requestListener) {
        this.f12021n = requestListener;
        return this;
    }

    public ImageRequestBuilder M(Priority priority) {
        this.f12018k = priority;
        return this;
    }

    public ImageRequestBuilder N(ResizeOptions resizeOptions) {
        this.f12011d = resizeOptions;
        return this;
    }

    public ImageRequestBuilder O(Boolean bool) {
        this.f12023p = bool;
        return this;
    }

    public ImageRequestBuilder P(RotationOptions rotationOptions) {
        this.f12012e = rotationOptions;
        return this;
    }

    public ImageRequestBuilder Q(Boolean bool) {
        this.f12020m = bool;
        return this;
    }

    public ImageRequestBuilder R(Uri uri) {
        j.g(uri);
        this.f12008a = uri;
        return this;
    }

    public Boolean S() {
        return this.f12020m;
    }

    protected void T() {
        Uri uri = this.f12008a;
        if (uri != null) {
            if (f.o(uri)) {
                if (this.f12008a.isAbsolute()) {
                    if (!this.f12008a.getPath().isEmpty()) {
                        try {
                            Integer.parseInt(this.f12008a.getPath().substring(1));
                        } catch (NumberFormatException unused) {
                            throw new a("Resource URI path must be a resource id.");
                        }
                    } else {
                        throw new a("Resource URI must not be empty");
                    }
                } else {
                    throw new a("Resource URI path must be absolute.");
                }
            }
            if (f.j(this.f12008a) && !this.f12008a.isAbsolute()) {
                throw new a("Asset URI path must be absolute.");
            }
            return;
        }
        throw new a("Source must be set!");
    }

    public ImageRequest a() {
        T();
        return new ImageRequest(this);
    }

    public BytesRange c() {
        return this.f12022o;
    }

    public ImageRequest.CacheChoice d() {
        return this.f12014g;
    }

    public int e() {
        return this.f12010c;
    }

    public int f() {
        return this.f12025r;
    }

    public String g() {
        return this.f12026s;
    }

    public DownsampleMode h() {
        return this.f12024q;
    }

    public ImageDecodeOptions i() {
        return this.f12013f;
    }

    public boolean j() {
        return this.f12017j;
    }

    public ImageRequest.RequestLevel k() {
        return this.f12009b;
    }

    public Postprocessor l() {
        return this.f12019l;
    }

    public RequestListener m() {
        return this.f12021n;
    }

    public Priority n() {
        return this.f12018k;
    }

    public ResizeOptions o() {
        return this.f12011d;
    }

    public Boolean p() {
        return this.f12023p;
    }

    public RotationOptions q() {
        return this.f12012e;
    }

    public Uri r() {
        return this.f12008a;
    }

    public boolean t() {
        if ((this.f12010c & 48) == 0) {
            if (f.p(this.f12008a) || s(this.f12008a)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public boolean u() {
        return this.f12016i;
    }

    public boolean v() {
        if ((this.f12010c & 15) == 0) {
            return true;
        }
        return false;
    }

    public boolean w() {
        return this.f12015h;
    }

    public ImageRequestBuilder y(boolean z10) {
        if (z10) {
            return P(RotationOptions.d());
        }
        return P(RotationOptions.g());
    }

    public ImageRequestBuilder z(BytesRange bytesRange) {
        this.f12022o = bytesRange;
        return this;
    }
}
