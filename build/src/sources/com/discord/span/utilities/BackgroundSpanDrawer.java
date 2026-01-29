package com.discord.span.utilities;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.text.Layout;
import android.text.SpannedString;
import android.text.style.LineBackgroundSpan;
import android.widget.TextView;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.span.utilities.common.BackgroundStyle;
import com.discord.span.utilities.common.BorderStyle;
import com.discord.span.utilities.common.ShadowStyle;
import com.discord.span.utilities.spannable.BackgroundSpan;
import com.facebook.react.uimanager.ViewProps;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.i;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010\r\n\u0002\b\b\n\u0002\u0010\u0007\n\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J`\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\r2\u0006\u0010\u000f\u001a\u00020\r2\u0006\u0010\u0010\u001a\u00020\r2\u0006\u0010\u0011\u001a\u00020\r2\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\r2\u0006\u0010\u0016\u001a\u00020\rH\u0016JX\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\u0016\u001a\u00020\r2\u0006\u0010\u0017\u001a\u00020\r2\u0006\u0010\u0018\u001a\u00020\r2\u0006\u0010\u0019\u001a\u00020\r2\u0006\u0010\u001a\u001a\u00020\r2\u0006\u0010\u000f\u001a\u00020\r2\u0006\u0010\u0011\u001a\u00020\r2\u0006\u0010\u001b\u001a\u00020\u001cH\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001d"}, d2 = {"Lcom/discord/span/utilities/BackgroundSpanDrawer;", "Landroid/text/style/LineBackgroundSpan;", "provider", "Landroid/widget/TextView;", "<init>", "(Landroid/widget/TextView;)V", "drawBackground", "", "canvas", "Landroid/graphics/Canvas;", "paint", "Landroid/graphics/Paint;", ViewProps.LEFT, "", ViewProps.RIGHT, ViewProps.TOP, "baseline", ViewProps.BOTTOM, "text", "", ViewProps.START, ViewProps.END, "lineNumber", "startLine", "endLine", "l", "r", "cornerRadius", "", "span_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nBackgroundSpanDrawer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BackgroundSpanDrawer.kt\ncom/discord/span/utilities/BackgroundSpanDrawer\n+ 2 SpannedString.kt\nandroidx/core/text/SpannedStringKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,214:1\n28#2:215\n1869#3,2:216\n*S KotlinDebug\n*F\n+ 1 BackgroundSpanDrawer.kt\ncom/discord/span/utilities/BackgroundSpanDrawer\n*L\n34#1:215\n40#1:216,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BackgroundSpanDrawer implements LineBackgroundSpan {
    @NotNull
    private final TextView provider;

    public BackgroundSpanDrawer(@NotNull TextView provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.provider = provider;
    }

    private final void drawBackground(Canvas canvas, Paint paint, int i10, int i11, int i12, int i13, int i14, int i15, int i16, float f10) {
        if (i11 == i12) {
            canvas.drawRoundRect(i13, i15, i14, i16, f10, f10, paint);
        } else if (i11 == i10) {
            Path path = new Path();
            path.addRoundRect(i13, i15, i14, i16, new float[]{f10, f10, 0.0f, 0.0f, 0.0f, 0.0f, f10, f10}, Path.Direction.CW);
            canvas.drawPath(path, paint);
        } else if (i12 == i10) {
            Path path2 = new Path();
            path2.addRoundRect(i13, i15, i14, i16, new float[]{0.0f, 0.0f, f10, f10, f10, f10, 0.0f, 0.0f}, Path.Direction.CW);
            canvas.drawPath(path2, paint);
        } else {
            canvas.drawRect(i13, i15, i14, i16, paint);
        }
    }

    @Override // android.text.style.LineBackgroundSpan
    public void drawBackground(@NotNull Canvas canvas, @NotNull Paint paint, int i10, int i11, int i12, int i13, int i14, @NotNull CharSequence text, int i15, int i16, int i17) {
        float lineRight;
        int i18;
        int i19;
        int i20;
        Paint paint2 = paint;
        int i21 = i17;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        Intrinsics.checkNotNullParameter(paint2, "paint");
        Intrinsics.checkNotNullParameter(text, "text");
        SpannedString valueOf = SpannedString.valueOf(text);
        Object[] spans = valueOf.getSpans(0, text.length(), BackgroundSpan.class);
        Intrinsics.checkNotNullExpressionValue(spans, "getSpans(...)");
        List<BackgroundSpan> A0 = i.A0(spans);
        Layout layout = this.provider.getLayout();
        Intrinsics.checkNotNullExpressionValue(layout, "getLayout(...)");
        for (BackgroundSpan backgroundSpan : A0) {
            int spanStart = valueOf.getSpanStart(backgroundSpan);
            int spanEnd = valueOf.getSpanEnd(backgroundSpan);
            BackgroundStyle background = backgroundSpan.getBackground();
            float dpToPx = SizeUtilsKt.getDpToPx(background.getCornerRadius());
            int lineForOffset = layout.getLineForOffset(spanStart);
            int lineForOffset2 = layout.getLineForOffset(spanEnd);
            if (lineForOffset <= i21 && i21 <= lineForOffset2) {
                int primaryHorizontal = lineForOffset == i21 ? (int) layout.getPrimaryHorizontal(spanStart) : i10;
                if (lineForOffset2 == i21) {
                    lineRight = layout.getPrimaryHorizontal(Math.min(spanEnd, layout.getLineEnd(i21)));
                } else {
                    lineRight = layout.getLineRight(i21);
                }
                int i22 = (int) lineRight;
                int dpToPx2 = i12 + SizeUtilsKt.getDpToPx(background.getMarginVertical());
                int dpToPx3 = i14 - SizeUtilsKt.getDpToPx(background.getMarginVertical());
                int color = paint2.getColor();
                paint2.setColor(background.getBackgroundColor());
                ShadowStyle shadow = backgroundSpan.getShadow();
                if (shadow != null) {
                    paint2.setShadowLayer(shadow.getRadius(), shadow.getOffset().getWidth(), shadow.getOffset().getHeight(), shadow.getColor());
                    i18 = i22;
                    i19 = lineForOffset2;
                    i20 = primaryHorizontal;
                    drawBackground(canvas, paint2, i17, lineForOffset, i19, i20, i18, dpToPx2, dpToPx3, dpToPx);
                } else {
                    i18 = i22;
                    i19 = lineForOffset2;
                    i20 = primaryHorizontal;
                }
                paint.clearShadowLayer();
                paint2 = paint;
                drawBackground(canvas, paint2, i17, lineForOffset, i19, i20, i18, dpToPx2, dpToPx3, dpToPx);
                BorderStyle border = backgroundSpan.getBorder();
                if (border != null) {
                    paint2.setColor(border.getColor());
                    paint2.setStyle(Paint.Style.STROKE);
                    paint2.setStrokeWidth(border.getWidth());
                    drawBackground(canvas, paint2, i17, lineForOffset, i19, i20, i18, dpToPx2, dpToPx3, dpToPx);
                }
                paint2.setStyle(Paint.Style.FILL);
                paint2.setColor(color);
            }
            i21 = i17;
        }
    }
}
