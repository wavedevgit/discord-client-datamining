package com.horcrux.svg;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.Rect;
import android.graphics.RectF;
import android.net.Uri;
import com.facebook.common.references.CloseableReference;
import com.facebook.datasource.DataSource;
import com.facebook.imagepipeline.core.ImagePipeline;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.views.imagehelper.ImageSource;
import com.facebook.react.views.imagehelper.ResourceDrawableIdHelper;
import com.horcrux.svg.events.SvgLoadEvent;
import java.util.concurrent.atomic.AtomicBoolean;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d0 extends RenderableView {

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f17861d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f17862e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f17863i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f17864o;

    /* renamed from: p  reason: collision with root package name */
    private String f17865p;

    /* renamed from: q  reason: collision with root package name */
    private int f17866q;

    /* renamed from: r  reason: collision with root package name */
    private int f17867r;

    /* renamed from: s  reason: collision with root package name */
    private String f17868s;

    /* renamed from: t  reason: collision with root package name */
    private int f17869t;

    /* renamed from: u  reason: collision with root package name */
    private final AtomicBoolean f17870u;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends oa.b {
        a() {
        }

        @Override // y8.b
        public void onFailureImpl(DataSource dataSource) {
            d0.this.f17870u.set(false);
            p8.a.M(ReactConstants.TAG, dataSource.b(), "RNSVG: fetchDecodedImage failed!", new Object[0]);
        }

        @Override // oa.b
        public void onNewResultImpl(Bitmap bitmap) {
            d0 d0Var = d0.this;
            EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(d0Var.mContext, d0Var.getId());
            int surfaceId = UIManagerHelper.getSurfaceId(d0.this);
            int id2 = d0.this.getId();
            d0 d0Var2 = d0.this;
            eventDispatcherForReactTag.dispatchEvent(new SvgLoadEvent(surfaceId, id2, d0Var2.mContext, d0Var2.f17865p, bitmap.getWidth(), bitmap.getHeight()));
            d0.this.f17870u.set(false);
            SvgView svgView = d0.this.getSvgView();
            if (svgView != null) {
                svgView.invalidate();
            }
        }
    }

    public d0(ReactContext reactContext) {
        super(reactContext);
        this.f17870u = new AtomicBoolean(false);
    }

    private void e(Canvas canvas, Paint paint, Bitmap bitmap, float f10) {
        if (this.f17866q == 0 || this.f17867r == 0) {
            this.f17866q = bitmap.getWidth();
            this.f17867r = bitmap.getHeight();
        }
        RectF f11 = f();
        RectF rectF = new RectF(0.0f, 0.0f, this.f17866q, this.f17867r);
        l1.a(rectF, f11, this.f17868s, this.f17869t).mapRect(rectF);
        canvas.clipPath(getPath(canvas, paint));
        Path clipPath = getClipPath(canvas, paint);
        if (clipPath != null) {
            canvas.clipPath(clipPath);
        }
        Paint paint2 = new Paint();
        paint2.setAlpha((int) (f10 * 255.0f));
        canvas.drawBitmap(bitmap, (Rect) null, rectF, paint2);
        this.mCTM.mapRect(rectF);
        setClientRect(rectF);
    }

    private RectF f() {
        double relativeOnWidth = relativeOnWidth(this.f17861d);
        double relativeOnHeight = relativeOnHeight(this.f17862e);
        double relativeOnWidth2 = relativeOnWidth(this.f17863i);
        double relativeOnHeight2 = relativeOnHeight(this.f17864o);
        if (relativeOnWidth2 == 0.0d) {
            relativeOnWidth2 = this.f17866q * this.mScale;
        }
        if (relativeOnHeight2 == 0.0d) {
            relativeOnHeight2 = this.f17867r * this.mScale;
        }
        return new RectF((float) relativeOnWidth, (float) relativeOnHeight, (float) (relativeOnWidth + relativeOnWidth2), (float) (relativeOnHeight + relativeOnHeight2));
    }

    private void g(ImagePipeline imagePipeline, ImageRequest imageRequest) {
        this.f17870u.set(true);
        imagePipeline.k(imageRequest, this.mContext).c(new a(), m8.i.F());
    }

    private void m(ImagePipeline imagePipeline, ImageRequest imageRequest, Canvas canvas, Paint paint, float f10) {
        DataSource o10 = imagePipeline.o(imageRequest, this.mContext);
        try {
            try {
                CloseableReference closeableReference = (CloseableReference) o10.getResult();
                try {
                    if (closeableReference == null) {
                        return;
                    }
                    try {
                        sa.e eVar = (sa.e) closeableReference.D0();
                        if (!(eVar instanceof sa.d)) {
                            return;
                        }
                        Bitmap N1 = ((sa.d) eVar).N1();
                        if (N1 == null) {
                            return;
                        }
                        e(canvas, paint, N1, f10);
                    } catch (Exception e10) {
                        throw new IllegalStateException(e10);
                    }
                } finally {
                    CloseableReference.N(closeableReference);
                }
            } catch (Exception e11) {
                throw new IllegalStateException(e11);
            }
        } finally {
            o10.close();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public void draw(Canvas canvas, Paint paint, float f10) {
        if (!this.f17870u.get()) {
            ImagePipeline a10 = e9.d.a();
            ImageRequest fromUri = ImageRequest.fromUri(new ImageSource(this.mContext, this.f17865p).getUri());
            if (a10.u(fromUri)) {
                m(a10, fromUri, canvas, paint, f10 * this.mOpacity);
            } else {
                g(a10, fromUri);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public Path getPath(Canvas canvas, Paint paint) {
        Path path = new Path();
        this.mPath = path;
        path.addRect(f(), Path.Direction.CW);
        return this.mPath;
    }

    public void h(Dynamic dynamic) {
        this.f17864o = SVGLength.b(dynamic);
        invalidate();
    }

    public void i(ReadableMap readableMap) {
        if (readableMap != null) {
            String string = readableMap.getString("uri");
            this.f17865p = string;
            if (string != null && !string.isEmpty()) {
                if (readableMap.hasKey("width") && readableMap.hasKey("height")) {
                    this.f17866q = readableMap.getInt("width");
                    this.f17867r = readableMap.getInt("height");
                } else {
                    this.f17866q = 0;
                    this.f17867r = 0;
                }
                if (Uri.parse(this.f17865p).getScheme() == null) {
                    ResourceDrawableIdHelper.getInstance();
                    ResourceDrawableIdHelper.getResourceDrawableUri(this.mContext, this.f17865p);
                }
            }
        }
    }

    public void j(Dynamic dynamic) {
        this.f17863i = SVGLength.b(dynamic);
        invalidate();
    }

    public void k(Dynamic dynamic) {
        this.f17861d = SVGLength.b(dynamic);
        invalidate();
    }

    public void l(Dynamic dynamic) {
        this.f17862e = SVGLength.b(dynamic);
        invalidate();
    }

    public void setAlign(String str) {
        this.f17868s = str;
        invalidate();
    }

    public void setMeetOrSlice(int i10) {
        this.f17869t = i10;
        invalidate();
    }
}
