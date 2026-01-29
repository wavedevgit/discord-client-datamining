package com.discord.reactions;

import android.annotation.SuppressLint;
import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import com.discord.SetTextSizeSpKt;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_strings.I18nMessage;
import com.discord.react_strings.I18nUtilsKt;
import com.discord.reactions.ReactionView;
import com.discord.reactions.databinding.AddReactionViewBinding;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.view.SimpleDraweeView;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\r\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0007\u0018\u0000 \u00172\u00020\u0001:\u0001\u0017B\u001d\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\b\u0010\n\u001a\u00020\u000bH\u0016J8\u0010\f\u001a\u00020\r2\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u0010\u001a\u00020\u00112\b\b\u0002\u0010\u0012\u001a\u00020\u00132\b\b\u0002\u0010\u0014\u001a\u00020\u00112\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0016R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0018"}, d2 = {"Lcom/discord/reactions/AddReactionView;", "Landroid/widget/LinearLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "binding", "Lcom/discord/reactions/databinding/AddReactionViewBinding;", "getAccessibilityClassName", "", "configure", "", "reactionsTheme", "Lcom/discord/reactions/ReactionView$ReactionsTheme;", "isBurst", "", "imageAsset", "Lcom/discord/react_asset_fetcher/ReactAsset;", "showReactLabel", "text", "", "Companion", "reactions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SuppressLint({"SetTextI18n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AddReactionView extends LinearLayout {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int VERTICAL_PADDING = SizeUtilsKt.getDpToPx(6);
    @NotNull
    private final AddReactionViewBinding binding;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/reactions/AddReactionView$Companion;", "", "<init>", "()V", "VERTICAL_PADDING", "", "reactions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public AddReactionView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public static /* synthetic */ void configure$default(AddReactionView addReactionView, ReactionView.ReactionsTheme reactionsTheme, boolean z10, ReactAsset reactAsset, boolean z11, String str, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            reactAsset = ReactAsset.AddReaction;
        }
        ReactAsset reactAsset2 = reactAsset;
        if ((i10 & 8) != 0) {
            z11 = false;
        }
        boolean z12 = z11;
        if ((i10 & 16) != 0) {
            str = null;
        }
        addReactionView.configure(reactionsTheme, z10, reactAsset2, z12, str);
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r13v5, types: [java.lang.CharSequence] */
    public final void configure(ReactionView.ReactionsTheme reactionsTheme, boolean z10, @NotNull ReactAsset imageAsset, boolean z11, String str) {
        int backgroundSurfaceHigh;
        Integer reactionBackgroundColor;
        int textMuted;
        Integer reactionTextColor;
        Intrinsics.checkNotNullParameter(imageAsset, "imageAsset");
        int backgroundSurfaceHigh2 = ThemeManagerKt.getTheme().getBackgroundSurfaceHigh();
        ReactionView.Companion companion = ReactionView.Companion;
        ViewBackgroundUtilsKt.setBackgroundRectangle$default(this, backgroundSurfaceHigh2, companion.getCORNER_RADIUS(), null, 0, 12, null);
        Integer num = null;
        if (z11) {
            TextView addReactionText = this.binding.addReactionText;
            Intrinsics.checkNotNullExpressionValue(addReactionText, "addReactionText");
            DiscordFontUtilsKt.setDiscordFont(addReactionText, DiscordFont.PrimarySemibold);
            TextView addReactionText2 = this.binding.addReactionText;
            Intrinsics.checkNotNullExpressionValue(addReactionText2, "addReactionText");
            SetTextSizeSpKt.setTextSizeSp(addReactionText2, 14.0f, 14.0f);
            this.binding.addReactionText.setPadding(companion.getHORIZ_PADDING(), 0, companion.getHORIZ_PADDING(), 0);
            TextView textView = this.binding.addReactionText;
            if (reactionsTheme != null && (reactionTextColor = reactionsTheme.getReactionTextColor()) != null) {
                textMuted = reactionTextColor.intValue();
            } else {
                textMuted = ThemeManagerKt.getTheme().getTextMuted();
            }
            textView.setTextColor(textMuted);
            TextView textView2 = this.binding.addReactionText;
            String str2 = str;
            if (str == null) {
                Context context = getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                str2 = I18nUtilsKt.i18nFormat$default(context, I18nMessage.REACT, null, 2, null);
            }
            textView2.setText(str2);
            this.binding.addReactionText.setVisibility(0);
        } else {
            this.binding.addReactionText.setVisibility(8);
        }
        SimpleDraweeView addReactionImage = this.binding.addReactionImage;
        Intrinsics.checkNotNullExpressionValue(addReactionImage, "addReactionImage");
        if (z10) {
            imageAsset = ReactAsset.AddBurstReaction;
        }
        ReactAssetUtilsKt.setReactAsset(addReactionImage, imageAsset);
        SimpleDraweeView addReactionImage2 = this.binding.addReactionImage;
        Intrinsics.checkNotNullExpressionValue(addReactionImage2, "addReactionImage");
        ColorUtilsKt.setTintColor(addReactionImage2, Integer.valueOf(ThemeManagerKt.getTheme().getInteractiveTextDefault()));
        this.binding.addReactionImage.setScaleType(ImageView.ScaleType.FIT_CENTER);
        if (reactionsTheme != null && (reactionBackgroundColor = reactionsTheme.getReactionBackgroundColor()) != null) {
            backgroundSurfaceHigh = reactionBackgroundColor.intValue();
        } else {
            backgroundSurfaceHigh = ThemeManagerKt.getTheme().getBackgroundSurfaceHigh();
        }
        if (reactionsTheme != null) {
            num = reactionsTheme.getReactionBorderColor();
        }
        ViewBackgroundUtilsKt.setBackgroundRectangle(this, backgroundSurfaceHigh, companion.getCORNER_RADIUS(), num, companion.getSTROKE_WIDTH());
    }

    @Override // android.widget.LinearLayout, android.view.ViewGroup, android.view.View
    @NotNull
    public CharSequence getAccessibilityClassName() {
        String name = Button.class.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        return name;
    }

    public /* synthetic */ AddReactionView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AddReactionView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        AddReactionViewBinding inflate = AddReactionViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        setOrientation(0);
        setGravity(16);
        ReactionView.Companion companion = ReactionView.Companion;
        int horiz_padding = companion.getHORIZ_PADDING();
        int i10 = VERTICAL_PADDING;
        setPadding(horiz_padding, i10, companion.getHORIZ_PADDING(), i10);
    }
}
