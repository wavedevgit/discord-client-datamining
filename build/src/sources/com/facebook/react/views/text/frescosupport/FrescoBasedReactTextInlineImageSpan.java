package com.facebook.react.views.text.frescosupport;

import android.content.res.Resources;
import android.graphics.BlendMode;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffColorFilter;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Build;
import android.widget.TextView;
import com.facebook.drawee.controller.AbstractDraweeControllerBuilder;
import com.facebook.drawee.controller.a;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
import com.facebook.drawee.view.DraweeHolder;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.modules.fresco.ReactNetworkImageRequest;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.p;
import com.facebook.react.uimanager.q;
import com.facebook.react.views.image.ImageResizeMode;
import com.facebook.react.views.text.internal.span.TextInlineImageSpan;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0084\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\r\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0004\b\u0000\u0018\u00002\u00020\u0001Bi\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\u0018\u0010\f\u001a\u0014\u0012\u0002\b\u0003\u0012\u0004\u0012\u00020\u000e\u0012\u0002\b\u0003\u0012\u0002\b\u00030\r\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012¢\u0006\u0004\b\u0013\u0010\u0014J\b\u0010%\u001a\u00020&H\u0016J\b\u0010'\u001a\u00020&H\u0016J\b\u0010(\u001a\u00020&H\u0016J\b\u0010)\u001a\u00020&H\u0016J2\u0010*\u001a\u00020\u00052\u0006\u0010+\u001a\u00020,2\u0006\u0010-\u001a\u00020.2\u0006\u0010/\u001a\u00020\u00052\u0006\u00100\u001a\u00020\u00052\b\u00101\u001a\u0004\u0018\u000102H\u0016J\u0012\u00103\u001a\u00020&2\b\u0010\u0015\u001a\u0004\u0018\u00010\u0016H\u0016JP\u00104\u001a\u00020&2\u0006\u00105\u001a\u0002062\u0006\u0010-\u001a\u00020.2\u0006\u0010/\u001a\u00020\u00052\u0006\u00100\u001a\u00020\u00052\u0006\u00107\u001a\u0002082\u0006\u00109\u001a\u00020\u00052\u0006\u0010:\u001a\u00020\u00052\u0006\u0010;\u001a\u00020\u00052\u0006\u0010+\u001a\u00020,H\u0016R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R \u0010\f\u001a\u0014\u0012\u0002\b\u0003\u0012\u0004\u0012\u00020\u000e\u0012\u0002\b\u0003\u0012\u0002\b\u00030\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u000f\u001a\u0004\u0018\u00010\u0010X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0011\u001a\u0004\u0018\u00010\u0012X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0015\u001a\u0004\u0018\u00010\u0016X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0017\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0018\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0019\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u001a\u001a\b\u0012\u0004\u0012\u00020\u001c0\u001bX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0006\u001a\u00020\u00058VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u001d\u0010\u001eR\u0014\u0010\u0004\u001a\u00020\u00058VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u001f\u0010\u001eR\"\u0010\"\u001a\u0004\u0018\u00010!2\b\u0010 \u001a\u0004\u0018\u00010!@RX\u0096\u000e¢\u0006\b\n\u0000\u001a\u0004\b#\u0010$¨\u0006<"}, d2 = {"Lcom/facebook/react/views/text/frescosupport/FrescoBasedReactTextInlineImageSpan;", "Lcom/facebook/react/views/text/internal/span/TextInlineImageSpan;", "resources", "Landroid/content/res/Resources;", "height", "", "width", "tintColor", "uri", "Landroid/net/Uri;", "headers", "Lcom/facebook/react/bridge/ReadableMap;", "draweeControllerBuilder", "Lcom/facebook/drawee/controller/AbstractDraweeControllerBuilder;", "Lcom/facebook/imagepipeline/request/ImageRequest;", "callerContext", "", ViewProps.RESIZE_MODE, "", "<init>", "(Landroid/content/res/Resources;IIILandroid/net/Uri;Lcom/facebook/react/bridge/ReadableMap;Lcom/facebook/drawee/controller/AbstractDraweeControllerBuilder;Ljava/lang/Object;Ljava/lang/String;)V", "textView", "Landroid/widget/TextView;", "_uri", "_width", "_height", "draweeHolder", "Lcom/facebook/drawee/view/DraweeHolder;", "Lcom/facebook/drawee/generic/GenericDraweeHierarchy;", "getWidth", "()I", "getHeight", "value", "Landroid/graphics/drawable/Drawable;", "drawable", "getDrawable", "()Landroid/graphics/drawable/Drawable;", "onDetachedFromWindow", "", "onStartTemporaryDetach", "onAttachedToWindow", "onFinishTemporaryDetach", "getSize", "paint", "Landroid/graphics/Paint;", "text", "", ViewProps.START, ViewProps.END, "fm", "Landroid/graphics/Paint$FontMetricsInt;", "setTextView", "draw", "canvas", "Landroid/graphics/Canvas;", "x", "", ViewProps.TOP, "y", ViewProps.BOTTOM, "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nFrescoBasedReactTextInlineImageSpan.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FrescoBasedReactTextInlineImageSpan.kt\ncom/facebook/react/views/text/frescosupport/FrescoBasedReactTextInlineImageSpan\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,175:1\n1#2:176\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FrescoBasedReactTextInlineImageSpan extends TextInlineImageSpan {
    private final int _height;
    @NotNull
    private final Uri _uri;
    private final int _width;
    private final Object callerContext;
    private Drawable drawable;
    @NotNull
    private final AbstractDraweeControllerBuilder draweeControllerBuilder;
    @NotNull
    private final DraweeHolder draweeHolder;
    private final ReadableMap headers;
    private final String resizeMode;
    private TextView textView;
    private final int tintColor;

    public FrescoBasedReactTextInlineImageSpan(@NotNull Resources resources, int i10, int i11, int i12, Uri EMPTY, ReadableMap readableMap, @NotNull AbstractDraweeControllerBuilder draweeControllerBuilder, Object obj, String str) {
        Intrinsics.checkNotNullParameter(resources, "resources");
        Intrinsics.checkNotNullParameter(draweeControllerBuilder, "draweeControllerBuilder");
        this.tintColor = i12;
        this.headers = readableMap;
        this.draweeControllerBuilder = draweeControllerBuilder;
        this.callerContext = obj;
        this.resizeMode = str;
        if (EMPTY == null) {
            EMPTY = Uri.EMPTY;
            Intrinsics.checkNotNullExpressionValue(EMPTY, "EMPTY");
        }
        this._uri = EMPTY;
        this._width = (int) PixelUtil.toPixelFromDIP(i11);
        this._height = (int) PixelUtil.toPixelFromDIP(i10);
        this.draweeHolder = new DraweeHolder(GenericDraweeHierarchyBuilder.u(resources).a());
    }

    @Override // android.text.style.ReplacementSpan
    public void draw(@NotNull Canvas canvas, @NotNull CharSequence text, int i10, int i11, float f10, int i12, int i13, int i14, @NotNull Paint paint) {
        BlendMode blendMode;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(paint, "paint");
        if (getDrawable() == null) {
            ImageRequestBuilder x10 = ImageRequestBuilder.x(this._uri);
            ReactNetworkImageRequest.Companion companion = ReactNetworkImageRequest.Companion;
            Intrinsics.checkNotNull(x10);
            ReactNetworkImageRequest fromBuilderWithHeaders$default = ReactNetworkImageRequest.Companion.fromBuilderWithHeaders$default(companion, x10, this.headers, null, 4, null);
            ((GenericDraweeHierarchy) this.draweeHolder.f()).t(ImageResizeMode.toScaleType(this.resizeMode));
            this.draweeControllerBuilder.z();
            this.draweeControllerBuilder.b(this.draweeHolder.e());
            Object obj = this.callerContext;
            if (obj != null) {
                Intrinsics.checkNotNullExpressionValue(this.draweeControllerBuilder.B(obj), "setCallerContext(...)");
            }
            this.draweeControllerBuilder.E(fromBuilderWithHeaders$default);
            a build = this.draweeControllerBuilder.build();
            Intrinsics.checkNotNullExpressionValue(build, "build(...)");
            this.draweeHolder.p(build);
            this.draweeControllerBuilder.z();
            Drawable g10 = this.draweeHolder.g();
            if (g10 != null) {
                g10.setBounds(0, 0, this._width, this._height);
                if (this.tintColor != 0) {
                    if (Build.VERSION.SDK_INT >= 29) {
                        q.a();
                        int i15 = this.tintColor;
                        blendMode = BlendMode.SRC_IN;
                        g10.setColorFilter(p.a(i15, blendMode));
                    } else {
                        g10.setColorFilter(new PorterDuffColorFilter(this.tintColor, PorterDuff.Mode.SRC_IN));
                    }
                }
                g10.setCallback(this.textView);
                this.drawable = g10;
            } else {
                throw new IllegalStateException("Required value was null.");
            }
        }
        canvas.save();
        Drawable drawable = getDrawable();
        if (drawable != null) {
            canvas.translate(f10, ((i13 + ((int) paint.descent())) - (((int) (paint.descent() - paint.ascent())) / 2)) - (drawable.getBounds().height() / 2));
            drawable.draw(canvas);
            canvas.restore();
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // com.facebook.react.views.text.internal.span.TextInlineImageSpan
    public Drawable getDrawable() {
        return this.drawable;
    }

    @Override // com.facebook.react.views.text.internal.span.TextInlineImageSpan
    public int getHeight() {
        return this._height;
    }

    @Override // android.text.style.ReplacementSpan
    public int getSize(@NotNull Paint paint, @NotNull CharSequence text, int i10, int i11, Paint.FontMetricsInt fontMetricsInt) {
        Intrinsics.checkNotNullParameter(paint, "paint");
        Intrinsics.checkNotNullParameter(text, "text");
        if (fontMetricsInt != null) {
            int i12 = -this._height;
            fontMetricsInt.ascent = i12;
            fontMetricsInt.descent = 0;
            fontMetricsInt.top = i12;
            fontMetricsInt.bottom = 0;
        }
        return this._width;
    }

    @Override // com.facebook.react.views.text.internal.span.TextInlineImageSpan
    public int getWidth() {
        return this._width;
    }

    @Override // com.facebook.react.views.text.internal.span.TextInlineImageSpan
    public void onAttachedToWindow() {
        this.draweeHolder.j();
    }

    @Override // com.facebook.react.views.text.internal.span.TextInlineImageSpan
    public void onDetachedFromWindow() {
        this.draweeHolder.k();
    }

    @Override // com.facebook.react.views.text.internal.span.TextInlineImageSpan
    public void onFinishTemporaryDetach() {
        this.draweeHolder.j();
    }

    @Override // com.facebook.react.views.text.internal.span.TextInlineImageSpan
    public void onStartTemporaryDetach() {
        this.draweeHolder.k();
    }

    @Override // com.facebook.react.views.text.internal.span.TextInlineImageSpan
    public void setTextView(TextView textView) {
        this.textView = textView;
    }
}
