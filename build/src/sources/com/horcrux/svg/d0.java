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
    private SVGLength f16832d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f16833e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f16834i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f16835o;

    /* renamed from: p  reason: collision with root package name */
    private String f16836p;

    /* renamed from: q  reason: collision with root package name */
    private int f16837q;

    /* renamed from: r  reason: collision with root package name */
    private int f16838r;

    /* renamed from: s  reason: collision with root package name */
    private String f16839s;

    /* renamed from: t  reason: collision with root package name */
    private int f16840t;

    /* renamed from: u  reason: collision with root package name */
    private final AtomicBoolean f16841u;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends oa.b {
        a() {
        }

        @Override // y8.b
        public void onFailureImpl(DataSource dataSource) {
            d0.this.f16841u.set(false);
            p8.a.M(ReactConstants.TAG, dataSource.b(), "RNSVG: fetchDecodedImage failed!", new Object[0]);
        }

        @Override // oa.b
        public void onNewResultImpl(Bitmap bitmap) {
            d0 d0Var = d0.this;
            EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(d0Var.mContext, d0Var.getId());
            int surfaceId = UIManagerHelper.getSurfaceId(d0.this);
            int id2 = d0.this.getId();
            d0 d0Var2 = d0.this;
            eventDispatcherForReactTag.dispatchEvent(new SvgLoadEvent(surfaceId, id2, d0Var2.mContext, d0Var2.f16836p, bitmap.getWidth(), bitmap.getHeight()));
            d0.this.f16841u.set(false);
            SvgView svgView = d0.this.getSvgView();
            if (svgView != null) {
                svgView.invalidate();
            }
        }
    }

    public d0(ReactContext reactContext) {
        super(reactContext);
        this.f16841u = new AtomicBoolean(false);
    }

    private void e(Canvas canvas, Paint paint, Bitmap bitmap, float f10) {
        if (this.f16837q == 0 || this.f16838r == 0) {
            this.f16837q = bitmap.getWidth();
            this.f16838r = bitmap.getHeight();
        }
        RectF f11 = f();
        RectF rectF = new RectF(0.0f, 0.0f, this.f16837q, this.f16838r);
        l1.a(rectF, f11, this.f16839s, this.f16840t).mapRect(rectF);
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
        double relativeOnWidth = relativeOnWidth(this.f16832d);
        double relativeOnHeight = relativeOnHeight(this.f16833e);
        double relativeOnWidth2 = relativeOnWidth(this.f16834i);
        double relativeOnHeight2 = relativeOnHeight(this.f16835o);
        if (relativeOnWidth2 == 0.0d) {
            relativeOnWidth2 = this.f16837q * this.mScale;
        }
        if (relativeOnHeight2 == 0.0d) {
            relativeOnHeight2 = this.f16838r * this.mScale;
        }
        return new RectF((float) relativeOnWidth, (float) relativeOnHeight, (float) (relativeOnWidth + relativeOnWidth2), (float) (relativeOnHeight + relativeOnHeight2));
    }

    private void g(ImagePipeline imagePipeline, ImageRequest imageRequest) {
        this.f16841u.set(true);
        imagePipeline.k(imageRequest, this.mContext).c(new a(), m8.i.y());
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
                        sa.e eVar = (sa.e) closeableReference.J();
                        if (!(eVar instanceof sa.d)) {
                            return;
                        }
                        Bitmap M1 = ((sa.d) eVar).M1();
                        if (M1 == null) {
                            return;
                        }
                        e(canvas, paint, M1, f10);
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
        if (!this.f16841u.get()) {
            ImagePipeline a10 = e9.d.a();
            ImageRequest fromUri = ImageRequest.fromUri(new ImageSource(this.mContext, this.f16836p).getUri());
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
        this.f16835o = SVGLength.b(dynamic);
        invalidate();
    }

    public void i(ReadableMap readableMap) {
        if (readableMap != null) {
            String string = readableMap.getString("uri");
            this.f16836p = string;
            if (string != null && !string.isEmpty()) {
                if (readableMap.hasKey("width") && readableMap.hasKey("height")) {
                    this.f16837q = readableMap.getInt("width");
                    this.f16838r = readableMap.getInt("height");
                } else {
                    this.f16837q = 0;
                    this.f16838r = 0;
                }
                if (Uri.parse(this.f16836p).getScheme() == null) {
                    ResourceDrawableIdHelper.getInstance();
                    ResourceDrawableIdHelper.getResourceDrawableUri(this.mContext, this.f16836p);
                }
            }
        }
    }

    public void j(Dynamic dynamic) {
        this.f16834i = SVGLength.b(dynamic);
        invalidate();
    }

    public void k(Dynamic dynamic) {
        this.f16832d = SVGLength.b(dynamic);
        invalidate();
    }

    public void l(Dynamic dynamic) {
        this.f16833e = SVGLength.b(dynamic);
        invalidate();
    }

    public void setAlign(String str) {
        this.f16839s = str;
        invalidate();
    }

    public void setMeetOrSlice(int i10) {
        this.f16840t = i10;
        invalidate();
    }
}
