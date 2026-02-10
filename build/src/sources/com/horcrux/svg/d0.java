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
    private SVGLength f17721d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f17722e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f17723i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f17724o;

    /* renamed from: p  reason: collision with root package name */
    private String f17725p;

    /* renamed from: q  reason: collision with root package name */
    private int f17726q;

    /* renamed from: r  reason: collision with root package name */
    private int f17727r;

    /* renamed from: s  reason: collision with root package name */
    private String f17728s;

    /* renamed from: t  reason: collision with root package name */
    private int f17729t;

    /* renamed from: u  reason: collision with root package name */
    private final AtomicBoolean f17730u;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends pa.b {
        a() {
        }

        @Override // z8.b
        public void onFailureImpl(DataSource dataSource) {
            d0.this.f17730u.set(false);
            q8.a.M(ReactConstants.TAG, dataSource.b(), "RNSVG: fetchDecodedImage failed!", new Object[0]);
        }

        @Override // pa.b
        public void onNewResultImpl(Bitmap bitmap) {
            d0 d0Var = d0.this;
            EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(d0Var.mContext, d0Var.getId());
            int surfaceId = UIManagerHelper.getSurfaceId(d0.this);
            int id2 = d0.this.getId();
            d0 d0Var2 = d0.this;
            eventDispatcherForReactTag.dispatchEvent(new SvgLoadEvent(surfaceId, id2, d0Var2.mContext, d0Var2.f17725p, bitmap.getWidth(), bitmap.getHeight()));
            d0.this.f17730u.set(false);
            SvgView svgView = d0.this.getSvgView();
            if (svgView != null) {
                svgView.invalidate();
            }
        }
    }

    public d0(ReactContext reactContext) {
        super(reactContext);
        this.f17730u = new AtomicBoolean(false);
    }

    private void f(Canvas canvas, Paint paint, Bitmap bitmap, float f10) {
        if (this.f17726q == 0 || this.f17727r == 0) {
            this.f17726q = bitmap.getWidth();
            this.f17727r = bitmap.getHeight();
        }
        RectF g10 = g();
        RectF rectF = new RectF(0.0f, 0.0f, this.f17726q, this.f17727r);
        l1.a(rectF, g10, this.f17728s, this.f17729t).mapRect(rectF);
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

    private RectF g() {
        double relativeOnWidth = relativeOnWidth(this.f17721d);
        double relativeOnHeight = relativeOnHeight(this.f17722e);
        double relativeOnWidth2 = relativeOnWidth(this.f17723i);
        double relativeOnHeight2 = relativeOnHeight(this.f17724o);
        if (relativeOnWidth2 == 0.0d) {
            relativeOnWidth2 = this.f17726q * this.mScale;
        }
        if (relativeOnHeight2 == 0.0d) {
            relativeOnHeight2 = this.f17727r * this.mScale;
        }
        return new RectF((float) relativeOnWidth, (float) relativeOnHeight, (float) (relativeOnWidth + relativeOnWidth2), (float) (relativeOnHeight + relativeOnHeight2));
    }

    private void h(ImagePipeline imagePipeline, ImageRequest imageRequest) {
        this.f17730u.set(true);
        imagePipeline.k(imageRequest, this.mContext).c(new a(), n8.i.y());
    }

    private void n(ImagePipeline imagePipeline, ImageRequest imageRequest, Canvas canvas, Paint paint, float f10) {
        DataSource o10 = imagePipeline.o(imageRequest, this.mContext);
        try {
            try {
                CloseableReference closeableReference = (CloseableReference) o10.getResult();
                try {
                    if (closeableReference == null) {
                        return;
                    }
                    try {
                        ta.e eVar = (ta.e) closeableReference.J();
                        if (!(eVar instanceof ta.d)) {
                            return;
                        }
                        Bitmap Q1 = ((ta.d) eVar).Q1();
                        if (Q1 == null) {
                            return;
                        }
                        f(canvas, paint, Q1, f10);
                    } catch (Exception e10) {
                        throw new IllegalStateException(e10);
                    }
                } finally {
                    CloseableReference.z(closeableReference);
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
        if (!this.f17730u.get()) {
            ImagePipeline a10 = f9.d.a();
            ImageRequest fromUri = ImageRequest.fromUri(new ImageSource(this.mContext, this.f17725p).getUri());
            if (a10.u(fromUri)) {
                n(a10, fromUri, canvas, paint, f10 * this.mOpacity);
            } else {
                h(a10, fromUri);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public Path getPath(Canvas canvas, Paint paint) {
        Path path = new Path();
        this.mPath = path;
        path.addRect(g(), Path.Direction.CW);
        return this.mPath;
    }

    public void i(Dynamic dynamic) {
        this.f17724o = SVGLength.b(dynamic);
        invalidate();
    }

    public void j(ReadableMap readableMap) {
        if (readableMap != null) {
            String string = readableMap.getString("uri");
            this.f17725p = string;
            if (string != null && !string.isEmpty()) {
                if (readableMap.hasKey("width") && readableMap.hasKey("height")) {
                    this.f17726q = readableMap.getInt("width");
                    this.f17727r = readableMap.getInt("height");
                } else {
                    this.f17726q = 0;
                    this.f17727r = 0;
                }
                if (Uri.parse(this.f17725p).getScheme() == null) {
                    ResourceDrawableIdHelper.getInstance();
                    ResourceDrawableIdHelper.getResourceDrawableUri(this.mContext, this.f17725p);
                }
            }
        }
    }

    public void k(Dynamic dynamic) {
        this.f17723i = SVGLength.b(dynamic);
        invalidate();
    }

    public void l(Dynamic dynamic) {
        this.f17721d = SVGLength.b(dynamic);
        invalidate();
    }

    public void m(Dynamic dynamic) {
        this.f17722e = SVGLength.b(dynamic);
        invalidate();
    }

    public void setAlign(String str) {
        this.f17728s = str;
        invalidate();
    }

    public void setMeetOrSlice(int i10) {
        this.f17729t = i10;
        invalidate();
    }
}
