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
    private static final Set f11636t = new HashSet();

    /* renamed from: n  reason: collision with root package name */
    private RequestListener f11650n;

    /* renamed from: r  reason: collision with root package name */
    private int f11654r;

    /* renamed from: a  reason: collision with root package name */
    private Uri f11637a = null;

    /* renamed from: b  reason: collision with root package name */
    private ImageRequest.RequestLevel f11638b = ImageRequest.RequestLevel.FULL_FETCH;

    /* renamed from: c  reason: collision with root package name */
    private int f11639c = 0;

    /* renamed from: d  reason: collision with root package name */
    private ResizeOptions f11640d = null;

    /* renamed from: e  reason: collision with root package name */
    private RotationOptions f11641e = null;

    /* renamed from: f  reason: collision with root package name */
    private ImageDecodeOptions f11642f = ImageDecodeOptions.a();

    /* renamed from: g  reason: collision with root package name */
    private ImageRequest.CacheChoice f11643g = ImageRequest.CacheChoice.DEFAULT;

    /* renamed from: h  reason: collision with root package name */
    private boolean f11644h = ImagePipelineConfig.J().a();

    /* renamed from: i  reason: collision with root package name */
    private boolean f11645i = false;

    /* renamed from: j  reason: collision with root package name */
    private boolean f11646j = false;

    /* renamed from: k  reason: collision with root package name */
    private Priority f11647k = Priority.f11090o;

    /* renamed from: l  reason: collision with root package name */
    private Postprocessor f11648l = null;

    /* renamed from: m  reason: collision with root package name */
    private Boolean f11649m = null;

    /* renamed from: o  reason: collision with root package name */
    private BytesRange f11651o = null;

    /* renamed from: p  reason: collision with root package name */
    private Boolean f11652p = null;

    /* renamed from: q  reason: collision with root package name */
    private DownsampleMode f11653q = null;

    /* renamed from: s  reason: collision with root package name */
    private String f11655s = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends RuntimeException {
        public a(String str) {
            super("Invalid request builder: " + str);
        }
    }

    private ImageRequestBuilder() {
    }

    private ImageRequestBuilder B(int i10) {
        this.f11639c = i10;
        if (this.f11643g != ImageRequest.CacheChoice.DYNAMIC) {
            this.f11655s = null;
        }
        return this;
    }

    public static ImageRequestBuilder b(ImageRequest imageRequest) {
        return x(imageRequest.getSourceUri()).F(imageRequest.getImageDecodeOptions()).z(imageRequest.getBytesRange()).A(imageRequest.getCacheChoice()).H(imageRequest.getLocalThumbnailPreviewsEnabled()).G(imageRequest.getLoadThumbnailOnlyForAndroidSdkAboveQ()).I(imageRequest.getLowestPermittedRequestLevel()).B(imageRequest.getCachesDisabled()).J(imageRequest.getPostprocessor()).K(imageRequest.getProgressiveRenderingEnabled()).M(imageRequest.getPriority()).N(imageRequest.getResizeOptions()).L(imageRequest.getRequestListener()).P(imageRequest.getRotationOptions()).Q(imageRequest.shouldDecodePrefetches()).C(imageRequest.getDelayMs()).D(imageRequest.getDiskCacheId()).E(imageRequest.getDownsampleOverride()).O(imageRequest.getResizingAllowedOverride());
    }

    public static boolean s(Uri uri) {
        Set<String> set = f11636t;
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
        this.f11643g = cacheChoice;
        return this;
    }

    public ImageRequestBuilder C(int i10) {
        this.f11654r = i10;
        return this;
    }

    public ImageRequestBuilder D(String str) {
        this.f11655s = str;
        return this;
    }

    public ImageRequestBuilder E(DownsampleMode downsampleMode) {
        this.f11653q = downsampleMode;
        return this;
    }

    public ImageRequestBuilder F(ImageDecodeOptions imageDecodeOptions) {
        this.f11642f = imageDecodeOptions;
        return this;
    }

    public ImageRequestBuilder G(boolean z10) {
        this.f11646j = z10;
        return this;
    }

    public ImageRequestBuilder H(boolean z10) {
        this.f11645i = z10;
        return this;
    }

    public ImageRequestBuilder I(ImageRequest.RequestLevel requestLevel) {
        this.f11638b = requestLevel;
        return this;
    }

    public ImageRequestBuilder J(Postprocessor postprocessor) {
        this.f11648l = postprocessor;
        return this;
    }

    public ImageRequestBuilder K(boolean z10) {
        this.f11644h = z10;
        return this;
    }

    public ImageRequestBuilder L(RequestListener requestListener) {
        this.f11650n = requestListener;
        return this;
    }

    public ImageRequestBuilder M(Priority priority) {
        this.f11647k = priority;
        return this;
    }

    public ImageRequestBuilder N(ResizeOptions resizeOptions) {
        this.f11640d = resizeOptions;
        return this;
    }

    public ImageRequestBuilder O(Boolean bool) {
        this.f11652p = bool;
        return this;
    }

    public ImageRequestBuilder P(RotationOptions rotationOptions) {
        this.f11641e = rotationOptions;
        return this;
    }

    public ImageRequestBuilder Q(Boolean bool) {
        this.f11649m = bool;
        return this;
    }

    public ImageRequestBuilder R(Uri uri) {
        j.g(uri);
        this.f11637a = uri;
        return this;
    }

    public Boolean S() {
        return this.f11649m;
    }

    protected void T() {
        Uri uri = this.f11637a;
        if (uri != null) {
            if (f.o(uri)) {
                if (this.f11637a.isAbsolute()) {
                    if (!this.f11637a.getPath().isEmpty()) {
                        try {
                            Integer.parseInt(this.f11637a.getPath().substring(1));
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
            if (f.j(this.f11637a) && !this.f11637a.isAbsolute()) {
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
        return this.f11651o;
    }

    public ImageRequest.CacheChoice d() {
        return this.f11643g;
    }

    public int e() {
        return this.f11639c;
    }

    public int f() {
        return this.f11654r;
    }

    public String g() {
        return this.f11655s;
    }

    public DownsampleMode h() {
        return this.f11653q;
    }

    public ImageDecodeOptions i() {
        return this.f11642f;
    }

    public boolean j() {
        return this.f11646j;
    }

    public ImageRequest.RequestLevel k() {
        return this.f11638b;
    }

    public Postprocessor l() {
        return this.f11648l;
    }

    public RequestListener m() {
        return this.f11650n;
    }

    public Priority n() {
        return this.f11647k;
    }

    public ResizeOptions o() {
        return this.f11640d;
    }

    public Boolean p() {
        return this.f11652p;
    }

    public RotationOptions q() {
        return this.f11641e;
    }

    public Uri r() {
        return this.f11637a;
    }

    public boolean t() {
        if ((this.f11639c & 48) == 0) {
            if (f.p(this.f11637a) || s(this.f11637a)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public boolean u() {
        return this.f11645i;
    }

    public boolean v() {
        if ((this.f11639c & 15) == 0) {
            return true;
        }
        return false;
    }

    public boolean w() {
        return this.f11644h;
    }

    public ImageRequestBuilder y(boolean z10) {
        if (z10) {
            return P(RotationOptions.d());
        }
        return P(RotationOptions.g());
    }

    public ImageRequestBuilder z(BytesRange bytesRange) {
        this.f11651o = bytesRange;
        return this;
    }
}
