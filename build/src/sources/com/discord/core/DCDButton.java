package com.discord.core;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.drawable.Drawable;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.ProgressBar;
import com.discord.core.databinding.DcdButtonBinding;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.progress_dots.ProgressDots;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import com.google.android.material.button.MaterialButton;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import qh.k;
@Metadata(d1 = {"\u0000\u0090\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\r\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\n\n\u0002\u0010\u0007\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0001\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u001d\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\b\u0010\u0012\u001a\u00020\u0013H\u0014J\u0018\u0010\u0014\u001a\u00020\u00132\u0006\u0010\u0015\u001a\u00020\u00162\b\b\u0002\u0010\u0017\u001a\u00020\u0016J\u0018\u0010\u0018\u001a\u00020\u00132\u0006\u0010\u0019\u001a\u00020\u001a2\b\b\u0001\u0010\u001b\u001a\u00020\u001cJ\u0010\u0010\u001d\u001a\u00020\u00132\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011J\u0010\u0010\u001e\u001a\u00020\u00132\b\b\u0001\u0010\u001f\u001a\u00020\u001cJ\u0010\u0010 \u001a\u00020\u00132\b\b\u0001\u0010!\u001a\u00020\u001cJ\u0017\u0010\"\u001a\u00020\u00132\n\b\u0001\u0010#\u001a\u0004\u0018\u00010\u001c¢\u0006\u0002\u0010$J\u000e\u0010%\u001a\u00020\u00132\u0006\u0010&\u001a\u00020'J\u0017\u0010(\u001a\u00020\u00132\n\b\u0001\u0010#\u001a\u0004\u0018\u00010\u001c¢\u0006\u0002\u0010$J\u0012\u0010(\u001a\u00020\u00132\b\b\u0001\u0010#\u001a\u00020\u001cH\u0016J3\u0010)\u001a\u00020\u00132\b\b\u0001\u0010*\u001a\u00020\u001c2\u0006\u0010+\u001a\u00020\u001c2\n\b\u0003\u0010,\u001a\u0004\u0018\u00010\u001c2\b\b\u0002\u0010-\u001a\u00020\u001c¢\u0006\u0002\u0010.J\u000e\u0010/\u001a\u00020\u00132\u0006\u00100\u001a\u000201J\b\u00102\u001a\u00020\u0013H\u0002J\b\u00103\u001a\u00020\u0016H\u0002J\u0017\u00104\u001a\u00020\u00132\n\b\u0001\u0010#\u001a\u0004\u0018\u00010\u001c¢\u0006\u0002\u0010$J\u0010\u00105\u001a\u00020\u00132\b\u00106\u001a\u0004\u0018\u000107J\u0012\u00108\u001a\u0002092\b\u0010:\u001a\u0004\u0018\u000107H\u0016J\u0012\u0010;\u001a\u0002092\b\u0010:\u001a\u0004\u0018\u00010<H\u0016J\u0010\u0010=\u001a\u00020\u00132\u0006\u0010>\u001a\u00020\u0016H\u0016J\u000e\u0010?\u001a\u00020\u00132\u0006\u0010@\u001a\u00020\u001cJ\u000e\u0010A\u001a\u00020\u00132\u0006\u0010B\u001a\u00020CJ\u0010\u0010D\u001a\u00020\u00132\u0006\u0010E\u001a\u00020FH\u0002J\u000e\u0010G\u001a\u00020\u00132\u0006\u0010H\u001a\u00020IR\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0010\u001a\u0004\u0018\u00010\u0011X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006J"}, d2 = {"Lcom/discord/core/DCDButton;", "Landroid/widget/FrameLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "binding", "Lcom/discord/core/databinding/DcdButtonBinding;", "button", "Lcom/google/android/material/button/MaterialButton;", ReactProgressBarViewManager.PROP_PROGRESS, "Landroid/widget/ProgressBar;", "loadingDots", "Lcom/discord/progress_dots/ProgressDots;", "text", "", "onFinishInflate", "", "setLoading", "isLoading", "", "useDots", "setIcon", "iconUrl", "", "iconSize", "", "setText", "setCornerRadius", "cornerRadius", "setIconPadding", "iconPadding", "setTextColor", "colorInt", "(Ljava/lang/Integer;)V", "setTextSizeSp", "sp", "", "setBackgroundColor", "setBackgroundRectangle", ViewProps.COLOR, "radiusPx", "strokeColor", "strokeWidth", "(IILjava/lang/Integer;I)V", "setDiscordFont", "font", "Lcom/discord/fonts/DiscordFont;", "setButtonPadding", "hasPadding", "setBorderColor", "setOnClickButtonListener", "onClickListener", "Landroid/view/View$OnClickListener;", "setOnClickListener", "", "l", "setOnTouchListener", "Landroid/view/View$OnTouchListener;", "setEnabled", ViewProps.ENABLED, "setMaxLines", "maxLines", "ellipsize", "behavior", "Landroid/text/TextUtils$TruncateAt;", "setProgressBarColor", "colorStateList", "Landroid/content/res/ColorStateList;", "setDrawableBackground", "drawable", "Landroid/graphics/drawable/Drawable;", "core_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nDCDButton.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DCDButton.kt\ncom/discord/core/DCDButton\n+ 2 View.kt\nandroidx/core/view/ViewKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,217:1\n257#2,2:218\n257#2,2:220\n152#2,2:223\n1#3:222\n*S KotlinDebug\n*F\n+ 1 DCDButton.kt\ncom/discord/core/DCDButton\n*L\n84#1:218,2\n85#1:220,2\n164#1:223,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DCDButton extends FrameLayout {
    @NotNull
    private final DcdButtonBinding binding;
    @NotNull
    private final MaterialButton button;
    @NotNull
    private final ProgressDots loadingDots;
    @NotNull
    private final ProgressBar progress;
    private CharSequence text;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public DCDButton(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final boolean hasPadding() {
        if (getPaddingStart() <= 0 && getPaddingEnd() <= 0 && getPaddingTop() <= 0 && getPaddingBottom() <= 0) {
            return false;
        }
        return true;
    }

    public static /* synthetic */ void setBackgroundRectangle$default(DCDButton dCDButton, int i10, int i11, Integer num, int i12, int i13, Object obj) {
        if ((i13 & 4) != 0) {
            num = null;
        }
        if ((i13 & 8) != 0) {
            i12 = 0;
        }
        dCDButton.setBackgroundRectangle(i10, i11, num, i12);
    }

    private final void setButtonPadding() {
        if (hasPadding()) {
            this.button.setPaddingRelative(getPaddingStart(), getPaddingTop(), getPaddingEnd(), getPaddingBottom());
            setPadding(0, 0, 0, 0);
        }
    }

    public static /* synthetic */ void setLoading$default(DCDButton dCDButton, boolean z10, boolean z11, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z11 = false;
        }
        dCDButton.setLoading(z10, z11);
    }

    private final void setProgressBarColor(ColorStateList colorStateList) {
        this.progress.setIndeterminateTintList(colorStateList);
    }

    public final void ellipsize(@NotNull TextUtils.TruncateAt behavior) {
        Intrinsics.checkNotNullParameter(behavior, "behavior");
        this.button.setEllipsize(behavior);
    }

    @Override // android.view.View
    protected void onFinishInflate() {
        super.onFinishInflate();
        setButtonPadding();
    }

    public final void setBackgroundColor(Integer num) {
        if (num != null) {
            setBackgroundColor(num.intValue());
        }
    }

    public final void setBackgroundRectangle(int i10, int i11, Integer num, int i12) {
        setBackgroundColor(i10);
        MaterialButton materialButton = this.button;
        k.b a10 = k.a();
        a10.o(i11);
        materialButton.setShapeAppearanceModel(a10.m());
        if (num != null) {
            this.button.setStrokeColor(ColorStateList.valueOf(num.intValue()));
            this.button.setStrokeWidth(i12);
            return;
        }
        this.button.setStrokeWidth(0);
    }

    public final void setBorderColor(Integer num) {
        if (num != null) {
            this.button.setStrokeColor(ColorStateList.valueOf(num.intValue()));
            this.button.setStrokeWidth(SizeUtilsKt.getDpToPx(1));
            return;
        }
        this.button.setStrokeColor(null);
        this.button.setStrokeWidth(0);
    }

    public final void setCornerRadius(int i10) {
        this.button.setCornerRadius(i10);
    }

    public final void setDiscordFont(@NotNull DiscordFont font) {
        Intrinsics.checkNotNullParameter(font, "font");
        DiscordFontUtilsKt.setDiscordFont(this.button, font);
    }

    public final void setDrawableBackground(@NotNull Drawable drawable) {
        Intrinsics.checkNotNullParameter(drawable, "drawable");
        this.button.setBackground(drawable);
        this.button.setBackgroundTintList(null);
    }

    @Override // android.view.View
    public void setEnabled(boolean z10) {
        this.button.setEnabled(z10);
    }

    public final void setIcon(@NotNull String iconUrl, int i10) {
        Intrinsics.checkNotNullParameter(iconUrl, "iconUrl");
        ReactAssetUtilsKt.setReactIcon(this.button, iconUrl, i10);
    }

    public final void setIconPadding(int i10) {
        this.button.setIconPadding(i10);
    }

    public final void setLoading(boolean z10, boolean z11) {
        CharSequence charSequence;
        boolean z12;
        int i10;
        MaterialButton materialButton = this.button;
        if (z10) {
            charSequence = "";
        } else {
            charSequence = this.text;
        }
        materialButton.setText(charSequence);
        setClickable(!z10);
        ProgressBar progressBar = this.progress;
        boolean z13 = true;
        int i11 = 0;
        if (z10 && !z11) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (z12) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        progressBar.setVisibility(i10);
        ProgressDots progressDots = this.loadingDots;
        if (!z10 || !z11) {
            z13 = false;
        }
        if (!z13) {
            i11 = 8;
        }
        progressDots.setVisibility(i11);
    }

    public final void setMaxLines(int i10) {
        this.button.setMaxLines(i10);
    }

    public final void setOnClickButtonListener(View.OnClickListener onClickListener) {
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(this.button, false, onClickListener, 1, null);
    }

    public final void setText(CharSequence charSequence) {
        this.button.setText(charSequence);
        this.text = charSequence;
    }

    public final void setTextColor(Integer num) {
        int i10;
        if (num != null) {
            i10 = num.intValue();
        } else {
            i10 = -1;
        }
        this.button.setTextColor(i10);
        this.button.setIconTint(ColorStateList.valueOf(i10));
        this.progress.setIndeterminateTintList(ColorStateList.valueOf(i10));
    }

    public final void setTextSizeSp(float f10) {
        this.button.setTextSize(2, f10);
    }

    public /* synthetic */ DCDButton(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    @Override // android.view.View
    public void setBackgroundColor(int i10) {
        this.button.setBackgroundTintList(ColorStateList.valueOf(i10));
    }

    @Override // android.view.View
    @NotNull
    public Void setOnClickListener(View.OnClickListener onClickListener) {
        throw new IllegalAccessError("Use setButtonOnClickListener instead.");
    }

    @Override // android.view.View
    @NotNull
    public Void setOnTouchListener(View.OnTouchListener onTouchListener) {
        throw new IllegalAccessError("Use setButtonOnClickListener instead.");
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public DCDButton(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        DcdButtonBinding inflate = DcdButtonBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        MaterialButton button = inflate.button;
        Intrinsics.checkNotNullExpressionValue(button, "button");
        this.button = button;
        ProgressBar progress = inflate.progress;
        Intrinsics.checkNotNullExpressionValue(progress, "progress");
        this.progress = progress;
        ProgressDots loadingDots = inflate.loadingDots;
        Intrinsics.checkNotNullExpressionValue(loadingDots, "loadingDots");
        this.loadingDots = loadingDots;
        button.setStateListAnimator(null);
        button.setMinimumHeight(progress.getHeight());
        button.setMinHeight(progress.getHeight());
        button.setMinimumWidth(progress.getWidth());
        button.setMinWidth(progress.getWidth());
        button.setInsetTop(0);
        button.setInsetBottom(0);
        setTextSizeSp(14.0f);
        setDiscordFont(DiscordFont.PrimarySemibold);
        setButtonPadding();
    }
}
