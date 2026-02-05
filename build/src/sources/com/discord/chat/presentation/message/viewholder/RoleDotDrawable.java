package com.discord.chat.presentation.message.viewholder;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.ColorFilter;
import android.graphics.LinearGradient;
import android.graphics.Paint;
import android.graphics.Shader;
import android.graphics.drawable.Drawable;
import com.discord.chat.bridge.rolecolors.RoleColors;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.react.FontManager;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B!\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0007\u0010\bJ\u0010\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u0013H\u0016J\u0010\u0010\u0014\u001a\u00020\u00112\u0006\u0010\u0015\u001a\u00020\u0005H\u0016J\u0012\u0010\u0016\u001a\u00020\u00112\b\u0010\u0015\u001a\u0004\u0018\u00010\u0017H\u0016J\b\u0010\u0018\u001a\u00020\u0005H\u0017J\u000e\u0010\u0019\u001a\u00020\u00112\u0006\u0010\u001a\u001a\u00020\u001bR\u000e\u0010\t\u001a\u00020\nX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\nX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001c"}, d2 = {"Lcom/discord/chat/presentation/message/viewholder/RoleDotDrawable;", "Landroid/graphics/drawable/Drawable;", "context", "Landroid/content/Context;", ViewProps.BORDER_COLOR, "", "spSize", "<init>", "(Landroid/content/Context;II)V", "scale", "", "pxSize", "borderColorPaint", "Landroid/graphics/Paint;", "roleColorAlphaPaint", "roleColorPaint", "draw", "", "canvas", "Landroid/graphics/Canvas;", "setAlpha", "p0", "setColorFilter", "Landroid/graphics/ColorFilter;", "getOpacity", "setColors", "roleColors", "Lcom/discord/chat/bridge/rolecolors/RoleColors;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RoleDotDrawable extends Drawable {
    @NotNull
    private final Paint borderColorPaint;
    private final float pxSize;
    @NotNull
    private final Paint roleColorAlphaPaint;
    @NotNull
    private final Paint roleColorPaint;
    private final float scale;

    public /* synthetic */ RoleDotDrawable(Context context, int i10, int i11, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, i10, (i12 & 4) != 0 ? 20 : i11);
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(@NotNull Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        float f10 = this.pxSize;
        float f11 = 2;
        float f12 = ((f10 / f11) + f11) / f11;
        canvas.drawCircle(f10 / f11, f10 / f11, f12, this.borderColorPaint);
        float f13 = this.pxSize;
        canvas.drawCircle(f13 / f11, f13 / f11, f12, this.roleColorAlphaPaint);
        float f14 = this.pxSize;
        canvas.drawCircle(f14 / f11, f14 / f11, f12 - f11, this.roleColorPaint);
    }

    @Override // android.graphics.drawable.Drawable
    @or.c
    public int getOpacity() {
        return -1;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
    }

    public final void setColors(@NotNull RoleColors roleColors) {
        Intrinsics.checkNotNullParameter(roleColors, "roleColors");
        if (roleColors.getSecondaryColor() != null) {
            List r10 = CollectionsKt.r(Integer.valueOf(roleColors.getPrimaryColor()), roleColors.getSecondaryColor());
            if (roleColors.getTertiaryColor() != null) {
                r10.add(roleColors.getTertiaryColor());
            }
            float f10 = this.pxSize;
            float f11 = 2;
            float f12 = (f10 / f11) / f11;
            this.roleColorPaint.setShader(new LinearGradient(f12, 0.0f, f12 + (f10 / f11) + f11, 0.0f, CollectionsKt.g1(r10), (float[]) null, Shader.TileMode.MIRROR));
        } else {
            this.roleColorPaint.setShader(null);
            this.roleColorPaint.setColor(Color.argb((int) SetSpanOperation.SPAN_MAX_PRIORITY, Color.red(roleColors.getPrimaryColor()), Color.green(roleColors.getPrimaryColor()), Color.blue(roleColors.getPrimaryColor())));
        }
        this.roleColorAlphaPaint.setColor(Color.argb(102, Color.red(roleColors.getPrimaryColor()), Color.green(roleColors.getPrimaryColor()), Color.blue(roleColors.getPrimaryColor())));
    }

    public RoleDotDrawable(@NotNull Context context, int i10, int i11) {
        Intrinsics.checkNotNullParameter(context, "context");
        float fontScale = FontManager.INSTANCE.getFontScale(context);
        this.scale = fontScale;
        this.pxSize = SizeUtilsKt.getSpToPx(i11) * fontScale;
        Paint paint = new Paint();
        paint.setColor(Color.argb((int) SetSpanOperation.SPAN_MAX_PRIORITY, Color.red(i10), Color.green(i10), Color.blue(i10)));
        paint.setAntiAlias(true);
        this.borderColorPaint = paint;
        Paint paint2 = new Paint();
        paint2.setAntiAlias(true);
        this.roleColorAlphaPaint = paint2;
        Paint paint3 = new Paint();
        paint3.setAntiAlias(true);
        this.roleColorPaint = paint3;
    }
}
