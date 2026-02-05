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
    private static final Set f10989t = new HashSet();

    /* renamed from: n  reason: collision with root package name */
    private RequestListener f11003n;

    /* renamed from: r  reason: collision with root package name */
    private int f11007r;

    /* renamed from: a  reason: collision with root package name */
    private Uri f10990a = null;

    /* renamed from: b  reason: collision with root package name */
    private ImageRequest.RequestLevel f10991b = ImageRequest.RequestLevel.FULL_FETCH;

    /* renamed from: c  reason: collision with root package name */
    private int f10992c = 0;

    /* renamed from: d  reason: collision with root package name */
    private ResizeOptions f10993d = null;

    /* renamed from: e  reason: collision with root package name */
    private RotationOptions f10994e = null;

    /* renamed from: f  reason: collision with root package name */
    private ImageDecodeOptions f10995f = ImageDecodeOptions.a();

    /* renamed from: g  reason: collision with root package name */
    private ImageRequest.CacheChoice f10996g = ImageRequest.CacheChoice.DEFAULT;

    /* renamed from: h  reason: collision with root package name */
    private boolean f10997h = ImagePipelineConfig.J().a();

    /* renamed from: i  reason: collision with root package name */
    private boolean f10998i = false;

    /* renamed from: j  reason: collision with root package name */
    private boolean f10999j = false;

    /* renamed from: k  reason: collision with root package name */
    private Priority f11000k = Priority.f10443o;

    /* renamed from: l  reason: collision with root package name */
    private Postprocessor f11001l = null;

    /* renamed from: m  reason: collision with root package name */
    private Boolean f11002m = null;

    /* renamed from: o  reason: collision with root package name */
    private BytesRange f11004o = null;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f11005p = null;

    /* renamed from: q  reason: collision with root package name */
    private DownsampleMode f11006q = null;

    /* renamed from: s  reason: collision with root package name */
    private String f11008s = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends RuntimeException {
        public a(String str) {
            super("Invalid request builder: " + str);
        }
    }

    private ImageRequestBuilder() {
    }

    private ImageRequestBuilder B(int i10) {
        this.f10992c = i10;
        if (this.f10996g != ImageRequest.CacheChoice.DYNAMIC) {
            this.f11008s = null;
        }
        return this;
    }

    public static ImageRequestBuilder b(ImageRequest imageRequest) {
        return x(imageRequest.getSourceUri()).F(imageRequest.getImageDecodeOptions()).z(imageRequest.getBytesRange()).A(imageRequest.getCacheChoice()).H(imageRequest.getLocalThumbnailPreviewsEnabled()).G(imageRequest.getLoadThumbnailOnlyForAndroidSdkAboveQ()).I(imageRequest.getLowestPermittedRequestLevel()).B(imageRequest.getCachesDisabled()).J(imageRequest.getPostprocessor()).K(imageRequest.getProgressiveRenderingEnabled()).M(imageRequest.getPriority()).N(imageRequest.getResizeOptions()).L(imageRequest.getRequestListener()).P(imageRequest.getRotationOptions()).Q(imageRequest.shouldDecodePrefetches()).C(imageRequest.getDelayMs()).D(imageRequest.getDiskCacheId()).E(imageRequest.getDownsampleOverride()).O(imageRequest.getResizingAllowedOverride());
    }

    public static boolean s(Uri uri) {
        Set<String> set = f10989t;
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
        this.f10996g = cacheChoice;
        return this;
    }

    public ImageRequestBuilder C(int i10) {
        this.f11007r = i10;
        return this;
    }

    public ImageRequestBuilder D(String str) {
        this.f11008s = str;
        return this;
    }

    public ImageRequestBuilder E(DownsampleMode downsampleMode) {
        this.f11006q = downsampleMode;
        return this;
    }

    public ImageRequestBuilder F(ImageDecodeOptions imageDecodeOptions) {
        this.f10995f = imageDecodeOptions;
        return this;
    }

    public ImageRequestBuilder G(boolean z10) {
        this.f10999j = z10;
        return this;
    }

    public ImageRequestBuilder H(boolean z10) {
        this.f10998i = z10;
        return this;
    }

    public ImageRequestBuilder I(ImageRequest.RequestLevel requestLevel) {
        this.f10991b = requestLevel;
        return this;
    }

    public ImageRequestBuilder J(Postprocessor postprocessor) {
        this.f11001l = postprocessor;
        return this;
    }

    public ImageRequestBuilder K(boolean z10) {
        this.f10997h = z10;
        return this;
    }

    public ImageRequestBuilder L(RequestListener requestListener) {
        this.f11003n = requestListener;
        return this;
    }

    public ImageRequestBuilder M(Priority priority) {
        this.f11000k = priority;
        return this;
    }

    public ImageRequestBuilder N(ResizeOptions resizeOptions) {
        this.f10993d = resizeOptions;
        return this;
    }

    public ImageRequestBuilder O(Boolean bool) {
        this.f11005p = bool;
        return this;
    }

    public ImageRequestBuilder P(RotationOptions rotationOptions) {
        this.f10994e = rotationOptions;
        return this;
    }

    public ImageRequestBuilder Q(Boolean bool) {
        this.f11002m = bool;
        return this;
    }

    public ImageRequestBuilder R(Uri uri) {
        j.g(uri);
        this.f10990a = uri;
        return this;
    }

    public Boolean S() {
        return this.f11002m;
    }

    protected void T() {
        Uri uri = this.f10990a;
        if (uri != null) {
            if (f.o(uri)) {
                if (this.f10990a.isAbsolute()) {
                    if (!this.f10990a.getPath().isEmpty()) {
                        try {
                            Integer.parseInt(this.f10990a.getPath().substring(1));
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
            if (f.j(this.f10990a) && !this.f10990a.isAbsolute()) {
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
        return this.f11004o;
    }

    public ImageRequest.CacheChoice d() {
        return this.f10996g;
    }

    public int e() {
        return this.f10992c;
    }

    public int f() {
        return this.f11007r;
    }

    public String g() {
        return this.f11008s;
    }

    public DownsampleMode h() {
        return this.f11006q;
    }

    public ImageDecodeOptions i() {
        return this.f10995f;
    }

    public boolean j() {
        return this.f10999j;
    }

    public ImageRequest.RequestLevel k() {
        return this.f10991b;
    }

    public Postprocessor l() {
        return this.f11001l;
    }

    public RequestListener m() {
        return this.f11003n;
    }

    public Priority n() {
        return this.f11000k;
    }

    public ResizeOptions o() {
        return this.f10993d;
    }

    public Boolean p() {
        return this.f11005p;
    }

    public RotationOptions q() {
        return this.f10994e;
    }

    public Uri r() {
        return this.f10990a;
    }

    public boolean t() {
        if ((this.f10992c & 48) == 0) {
            if (f.p(this.f10990a) || s(this.f10990a)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public boolean u() {
        return this.f10998i;
    }

    public boolean v() {
        if ((this.f10992c & 15) == 0) {
            return true;
        }
        return false;
    }

    public boolean w() {
        return this.f10997h;
    }

    public ImageRequestBuilder y(boolean z10) {
        if (z10) {
            return P(RotationOptions.d());
        }
        return P(RotationOptions.g());
    }

    public ImageRequestBuilder z(BytesRange bytesRange) {
        this.f11004o = bytesRange;
        return this;
    }
}
