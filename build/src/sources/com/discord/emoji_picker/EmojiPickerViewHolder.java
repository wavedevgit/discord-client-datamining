package com.discord.emoji_picker;

import android.content.Context;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.SetTextSizeSpKt;
import com.discord.emoji_picker.EmojiPickerItem;
import com.discord.emoji_picker.EmojiPickerViewHolder;
import com.discord.emoji_picker.databinding.PremiumInlineRoadblockFooterBinding;
import com.discord.emoji_picker.databinding.PremiumInlineRoadblockHeaderBinding;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.icons.IconUrlUtils;
import com.discord.image.fresco.SetOptionalImageUrlKt;
import com.discord.misc.utilities.drawable.GetDrawableCompatKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.portals.from_js.PortalFromJsContext;
import com.discord.portals.from_js.PortalFromJsContextManager;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.ripple.RippleUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.drawee.interfaces.DraweeController;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b0\u0018\u0000 \r2\u00020\u0001:\b\u0006\u0007\b\t\n\u000b\f\rB\u0011\b\u0004\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005\u0082\u0001\u0007\u000e\u000f\u0010\u0011\u0012\u0013\u0014¨\u0006\u0015"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerViewHolder;", "Landroidx/recyclerview/widget/RecyclerView$ViewHolder;", "view", "Landroid/view/View;", "<init>", "(Landroid/view/View;)V", "Spacer", "Category", "FooterUpsell", "PremiumInlineRoadblockHeader", "PremiumInlineRoadblockFooter", "EmojiPlaceholder", "Emoji", "Companion", "Lcom/discord/emoji_picker/EmojiPickerViewHolder$Category;", "Lcom/discord/emoji_picker/EmojiPickerViewHolder$Emoji;", "Lcom/discord/emoji_picker/EmojiPickerViewHolder$EmojiPlaceholder;", "Lcom/discord/emoji_picker/EmojiPickerViewHolder$FooterUpsell;", "Lcom/discord/emoji_picker/EmojiPickerViewHolder$PremiumInlineRoadblockFooter;", "Lcom/discord/emoji_picker/EmojiPickerViewHolder$PremiumInlineRoadblockHeader;", "Lcom/discord/emoji_picker/EmojiPickerViewHolder$Spacer;", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class EmojiPickerViewHolder extends RecyclerView.ViewHolder {
    @NotNull
    public static final Companion Companion = new Companion(null);

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u0000 \u00112\u00020\u0001:\u0001\u0011B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u000e\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u0010R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\b\u001a\u00020\tX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\b\u0010\n\"\u0004\b\u000b\u0010\f¨\u0006\u0012"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerViewHolder$Category;", "Lcom/discord/emoji_picker/EmojiPickerViewHolder;", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "categoryTextView", "Landroid/widget/TextView;", "isInsidePremiumRoadblock", "", "()Z", "setInsidePremiumRoadblock", "(Z)V", "onBindViewHolder", "", "category", "Lcom/discord/emoji_picker/EmojiPickerItem$Category;", "Companion", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nEmojiPickerViewHolder.kt\nKotlin\n*S Kotlin\n*F\n+ 1 EmojiPickerViewHolder.kt\ncom/discord/emoji_picker/EmojiPickerViewHolder$Category\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,326:1\n176#2,2:327\n*S KotlinDebug\n*F\n+ 1 EmojiPickerViewHolder.kt\ncom/discord/emoji_picker/EmojiPickerViewHolder$Category\n*L\n71#1:327,2\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Category extends EmojiPickerViewHolder {
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        private static final RecyclerView.LayoutParams layoutParams = new RecyclerView.LayoutParams(-2, -2);
        @NotNull
        private static final RecyclerView.LayoutParams layoutParamsEmpty = new RecyclerView.LayoutParams(SizeUtilsKt.getDpToPx(8), SizeUtilsKt.getDpToPx(8));
        @NotNull
        private final TextView categoryTextView;
        private boolean isInsidePremiumRoadblock;

        @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0007"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerViewHolder$Category$Companion;", "", "<init>", "()V", "layoutParams", "Landroidx/recyclerview/widget/RecyclerView$LayoutParams;", "layoutParamsEmpty", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Category(@NotNull Context context) {
            super(new TextView(context), null);
            Intrinsics.checkNotNullParameter(context, "context");
            View view = this.itemView;
            Intrinsics.checkNotNull(view, "null cannot be cast to non-null type android.widget.TextView");
            TextView textView = (TextView) view;
            this.categoryTextView = textView;
            DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimarySemibold);
            SetTextSizeSpKt.setTextSizeSp(textView, 16.0f);
            textView.setTextColor(ThemeManagerKt.getTheme().getInteractiveTextDefault());
            textView.setLayoutParams(layoutParams);
        }

        public final boolean isInsidePremiumRoadblock() {
            return this.isInsidePremiumRoadblock;
        }

        public final void onBindViewHolder(@NotNull EmojiPickerItem.Category category) {
            Intrinsics.checkNotNullParameter(category, "category");
            this.isInsidePremiumRoadblock = category.isInsidePremiumRoadBlock();
            if (!StringsKt.k0(category.getTitle())) {
                this.categoryTextView.setPadding(0, SizeUtilsKt.getDpToPx(8), 0, 0);
                this.categoryTextView.setLayoutParams(layoutParams);
                this.categoryTextView.setText(category.getTitle());
                return;
            }
            this.categoryTextView.setPadding(0, 0, 0, 0);
            this.categoryTextView.setText((CharSequence) null);
            this.categoryTextView.setLayoutParams(layoutParamsEmpty);
        }

        public final void setInsidePremiumRoadblock(boolean z10) {
            this.isInsidePremiumRoadblock = z10;
        }
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\n\u0010\u0004\u001a\u00020\u0005*\u00020\u0006¨\u0006\u0007"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerViewHolder$Companion;", "", "<init>", "()V", "isNitroLocked", "", "Lcom/discord/emoji_picker/EmojiPickerViewHolder;", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final boolean isNitroLocked(@NotNull EmojiPickerViewHolder emojiPickerViewHolder) {
            Intrinsics.checkNotNullParameter(emojiPickerViewHolder, "<this>");
            if (emojiPickerViewHolder instanceof Emoji) {
                return ((Emoji) emojiPickerViewHolder).isInsidePremiumRoadblock();
            }
            if (emojiPickerViewHolder instanceof Category) {
                return ((Category) emojiPickerViewHolder).isInsidePremiumRoadblock();
            }
            return false;
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\t\n\u0002\u0010\u000e\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\b\u0018\u0000 12\u00020\u0001:\u000221BG\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u001a\u0010\b\u001a\u0016\u0012\u0006\u0012\u0004\u0018\u00010\u0005\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0004\u0012\u001a\u0010\t\u001a\u0016\u0012\u0006\u0012\u0004\u0018\u00010\u0005\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0004¢\u0006\u0004\b\n\u0010\u000bJ\u0013\u0010\r\u001a\u00020\u0006*\u00020\fH\u0002¢\u0006\u0004\b\r\u0010\u000eJ=\u0010\u0017\u001a\u00020\u00072\u0006\u0010\u000f\u001a\u00020\f2\u0006\u0010\u0011\u001a\u00020\u00102\u0006\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u0014\u001a\u00020\u00122\u0006\u0010\u0015\u001a\u00020\u00102\u0006\u0010\u0016\u001a\u00020\u0010¢\u0006\u0004\b\u0017\u0010\u0018J\u001d\u0010\u0019\u001a\u00020\u00072\u0006\u0010\u0015\u001a\u00020\u00102\u0006\u0010\u0016\u001a\u00020\u0010¢\u0006\u0004\b\u0019\u0010\u001aJ\r\u0010\u001b\u001a\u00020\u0012¢\u0006\u0004\b\u001b\u0010\u001cR\u001b\u0010\"\u001a\u00020\u001d8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u001e\u0010\u001f\u001a\u0004\b \u0010!R\u0014\u0010$\u001a\u00020#8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b$\u0010%R\u0018\u0010&\u001a\u0004\u0018\u00010\f8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b&\u0010'R\u0018\u0010\u0013\u001a\u0004\u0018\u00010\u00128\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0013\u0010(R\u0018\u0010\u0014\u001a\u0004\u0018\u00010\u00128\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0014\u0010(R\u0018\u0010)\u001a\u0004\u0018\u00010\u00068\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b)\u0010*R\u0014\u0010,\u001a\u00020+8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b,\u0010-R\u0016\u0010\u0011\u001a\u00020\u00108\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010.R\u0011\u0010/\u001a\u00020\u00108F¢\u0006\u0006\u001a\u0004\b/\u00100¨\u00063"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerViewHolder$Emoji;", "Lcom/discord/emoji_picker/EmojiPickerViewHolder;", "Landroid/content/Context;", "context", "Lkotlin/Function2;", "", "", "", "onPressEmoji", "onLongPressEmoji", "<init>", "(Landroid/content/Context;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;)V", "Lcom/discord/emoji_picker/EmojiPickerItem$Emoji;", "getEmojiUrl", "(Lcom/discord/emoji_picker/EmojiPickerItem$Emoji;)Ljava/lang/String;", "item", "", "emojiAnimated", "", "emojiSize", "emojiMargin", "scrolling", "scrollingFast", "onBindViewHolder", "(Lcom/discord/emoji_picker/EmojiPickerItem$Emoji;ZIIZZ)V", "updateImage", "(ZZ)V", "getWidth", "()I", "Landroid/graphics/drawable/Drawable;", "placeholder$delegate", "Lkotlin/Lazy;", "getPlaceholder", "()Landroid/graphics/drawable/Drawable;", ReactTextInputShadowNode.PROP_PLACEHOLDER, "Lcom/facebook/drawee/view/SimpleDraweeView;", "emojiView", "Lcom/facebook/drawee/view/SimpleDraweeView;", "emojiItem", "Lcom/discord/emoji_picker/EmojiPickerItem$Emoji;", "Ljava/lang/Integer;", "emojiUrl", "Ljava/lang/String;", "Lcom/discord/emoji_picker/EmojiPickerViewHolder$Emoji$EmojiLoadListener;", "emojiLoadListener", "Lcom/discord/emoji_picker/EmojiPickerViewHolder$Emoji$EmojiLoadListener;", "Z", "isInsidePremiumRoadblock", "()Z", "Companion", "EmojiLoadListener", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nEmojiPickerViewHolder.kt\nKotlin\n*S Kotlin\n*F\n+ 1 EmojiPickerViewHolder.kt\ncom/discord/emoji_picker/EmojiPickerViewHolder$Emoji\n+ 2 ViewGroup.kt\nandroidx/core/view/ViewGroupKt\n*L\n1#1,326:1\n190#2,2:327\n*S KotlinDebug\n*F\n+ 1 EmojiPickerViewHolder.kt\ncom/discord/emoji_picker/EmojiPickerViewHolder$Emoji\n*L\n238#1:327,2\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Emoji extends EmojiPickerViewHolder {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private boolean emojiAnimated;
        private EmojiPickerItem.Emoji emojiItem;
        @NotNull
        private final EmojiLoadListener emojiLoadListener;
        private Integer emojiMargin;
        private Integer emojiSize;
        private String emojiUrl;
        @NotNull
        private final SimpleDraweeView emojiView;
        @NotNull
        private final Lazy placeholder$delegate;

        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0006\u0010\u0004\u001a\u00020\u0005¨\u0006\u0006"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerViewHolder$Emoji$Companion;", "", "<init>", "()V", "createPlaceholderDrawable", "Landroid/graphics/drawable/Drawable;", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @NotNull
            public final Drawable createPlaceholderDrawable() {
                GradientDrawable gradientDrawable = new GradientDrawable();
                gradientDrawable.setShape(1);
                gradientDrawable.setColor(ThemeManagerKt.getTheme().getBackgroundModMuted());
                return gradientDrawable;
            }

            private Companion() {
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0006\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J-\u0010\r\u001a\u00020\f2\b\u0010\b\u001a\u0004\u0018\u00010\u00072\b\u0010\t\u001a\u0004\u0018\u00010\u00022\b\u0010\u000b\u001a\u0004\u0018\u00010\nH\u0016¢\u0006\u0004\b\r\u0010\u000eJ\u001f\u0010\u000f\u001a\u00020\f2\u0006\u0010\u0004\u001a\u00020\u00032\b\u0010\u000b\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u000f\u0010\u0010R\u0016\u0010\u0004\u001a\u00020\u00038\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0004\u0010\u0011¨\u0006\u0012"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerViewHolder$Emoji$EmojiLoadListener;", "Li9/a;", "", "", ReactProgressBarViewManager.PROP_ANIMATING, "<init>", "(Z)V", "", StackTraceHelper.ID_KEY, "imageInfo", "Landroid/graphics/drawable/Animatable;", "animatable", "", "onFinalImageSet", "(Ljava/lang/String;Ljava/lang/Object;Landroid/graphics/drawable/Animatable;)V", "setAnimating", "(ZLandroid/graphics/drawable/Animatable;)V", "Z", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class EmojiLoadListener extends i9.a {
            private boolean animating;

            public EmojiLoadListener(boolean z10) {
                this.animating = z10;
            }

            @Override // i9.a, com.facebook.drawee.controller.ControllerListener
            public void onFinalImageSet(String str, Object obj, Animatable animatable) {
                setAnimating(this.animating, animatable);
            }

            public final void setAnimating(boolean z10, Animatable animatable) {
                this.animating = z10;
                if (animatable != null && z10) {
                    animatable.start();
                } else if (animatable != null) {
                    animatable.stop();
                }
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Emoji(@NotNull Context context, @NotNull final Function2<? super Long, ? super String, Unit> onPressEmoji, @NotNull final Function2<? super Long, ? super String, Unit> onLongPressEmoji) {
            super(new SimpleDraweeView(context), null);
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(onPressEmoji, "onPressEmoji");
            Intrinsics.checkNotNullParameter(onLongPressEmoji, "onLongPressEmoji");
            this.placeholder$delegate = or.l.a(new Function0() { // from class: com.discord.emoji_picker.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Drawable placeholder_delegate$lambda$0;
                    placeholder_delegate$lambda$0 = EmojiPickerViewHolder.Emoji.placeholder_delegate$lambda$0();
                    return placeholder_delegate$lambda$0;
                }
            });
            View view = this.itemView;
            Intrinsics.checkNotNull(view, "null cannot be cast to non-null type com.facebook.drawee.view.SimpleDraweeView");
            SimpleDraweeView simpleDraweeView = (SimpleDraweeView) view;
            this.emojiView = simpleDraweeView;
            this.emojiLoadListener = new EmojiLoadListener(false);
            RippleUtilsKt.addCircleRipple(simpleDraweeView, true);
            ((GenericDraweeHierarchy) simpleDraweeView.getHierarchy()).w(context.getResources().getInteger(com.discord.image.fresco.R.integer.image_fade_duration) / 3);
            ((GenericDraweeHierarchy) simpleDraweeView.getHierarchy()).t(ScalingUtils$ScaleType.f10019e);
            NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(simpleDraweeView, false, new View.OnClickListener() { // from class: com.discord.emoji_picker.d0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view2) {
                    EmojiPickerViewHolder.Emoji._init_$lambda$2(EmojiPickerViewHolder.Emoji.this, onPressEmoji, view2);
                }
            }, 1, null);
            NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested$default(simpleDraweeView, false, new View.OnLongClickListener() { // from class: com.discord.emoji_picker.e0
                @Override // android.view.View.OnLongClickListener
                public final boolean onLongClick(View view2) {
                    boolean _init_$lambda$4;
                    _init_$lambda$4 = EmojiPickerViewHolder.Emoji._init_$lambda$4(EmojiPickerViewHolder.Emoji.this, onLongPressEmoji, view2);
                    return _init_$lambda$4;
                }
            }, 1, null);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void _init_$lambda$2(Emoji emoji, Function2 function2, View view) {
            Long valueOf;
            EmojiPickerItem.Emoji emoji2 = emoji.emojiItem;
            if (emoji2 != null) {
                if (emoji2.getUnicodeUrl() != null) {
                    valueOf = null;
                } else {
                    valueOf = Long.valueOf(emoji2.getId());
                }
                function2.invoke(valueOf, emoji2.getName());
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final boolean _init_$lambda$4(Emoji emoji, Function2 function2, View view) {
            Long valueOf;
            EmojiPickerItem.Emoji emoji2 = emoji.emojiItem;
            if (emoji2 != null) {
                if (emoji2.getUnicodeUrl() != null) {
                    valueOf = null;
                } else {
                    valueOf = Long.valueOf(emoji2.getId());
                }
                function2.invoke(valueOf, emoji2.getName());
                return true;
            }
            return true;
        }

        private final String getEmojiUrl(EmojiPickerItem.Emoji emoji) {
            String unicodeUrl = emoji.getUnicodeUrl();
            if (unicodeUrl == null) {
                return IconUrlUtils.INSTANCE.getCustomEmojiUrl(emoji.getId(), emoji.getAnimated(), this.emojiSize);
            }
            return unicodeUrl;
        }

        private final Drawable getPlaceholder() {
            return (Drawable) this.placeholder$delegate.getValue();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Drawable placeholder_delegate$lambda$0() {
            return Companion.createPlaceholderDrawable();
        }

        public final int getWidth() {
            int i10;
            Integer num = this.emojiSize;
            int i11 = 0;
            if (num != null) {
                i10 = num.intValue();
            } else {
                i10 = 0;
            }
            Integer num2 = this.emojiMargin;
            if (num2 != null) {
                i11 = num2.intValue();
            }
            return i10 + (i11 * 2);
        }

        public final boolean isInsidePremiumRoadblock() {
            EmojiPickerItem.Emoji emoji = this.emojiItem;
            if (emoji != null) {
                return emoji.isInsidePremiumRoadBlock();
            }
            return false;
        }

        public final void onBindViewHolder(@NotNull EmojiPickerItem.Emoji item, boolean z10, int i10, int i11, boolean z11, boolean z12) {
            Drawable drawable;
            Intrinsics.checkNotNullParameter(item, "item");
            this.emojiAnimated = z10;
            this.emojiItem = item;
            this.emojiSize = Integer.valueOf(i10);
            this.emojiMargin = Integer.valueOf(i11);
            SimpleDraweeView simpleDraweeView = this.emojiView;
            RecyclerView.LayoutParams layoutParams = new RecyclerView.LayoutParams(i10, i10);
            layoutParams.setMargins(i11, i11, i11, i11);
            simpleDraweeView.setLayoutParams(layoutParams);
            this.emojiView.setContentDescription(item.getName());
            GenericDraweeHierarchy genericDraweeHierarchy = (GenericDraweeHierarchy) this.emojiView.getHierarchy();
            if (item.getDisabled() == EmojiPickerItem.Emoji.DisabledType.ICON) {
                Context context = this.itemView.getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                drawable = GetDrawableCompatKt.getDrawableCompat(context, R.drawable.lock_overlay);
            } else {
                drawable = null;
            }
            genericDraweeHierarchy.y(drawable);
            updateImage(z11, z12);
        }

        public final void updateImage(boolean z10, boolean z11) {
            boolean z12;
            EmojiPickerItem.Emoji emoji = this.emojiItem;
            if (emoji == null) {
                return;
            }
            String emojiUrl = getEmojiUrl(emoji);
            if (this.emojiAnimated && emoji.getAnimated() && !z10) {
                z12 = true;
            } else {
                z12 = false;
            }
            Animatable animatable = null;
            if (z11) {
                if (!Intrinsics.areEqual(this.emojiUrl, emojiUrl)) {
                    this.emojiUrl = null;
                    this.emojiView.setImageURI((String) null);
                    this.emojiView.setBackground(getPlaceholder());
                }
            } else if (!Intrinsics.areEqual(this.emojiUrl, emojiUrl)) {
                this.emojiUrl = emojiUrl;
                ((GenericDraweeHierarchy) this.emojiView.getHierarchy()).z(getPlaceholder());
                this.emojiView.setBackground(null);
                SetOptionalImageUrlKt.setOptionalImageUrl$default(this.emojiView, this.emojiUrl, Boolean.FALSE, null, this.emojiLoadListener, 4, null);
            }
            EmojiLoadListener emojiLoadListener = this.emojiLoadListener;
            DraweeController controller = this.emojiView.getController();
            if (controller != null) {
                animatable = controller.getAnimatable();
            }
            emojiLoadListener.setAnimating(z12, animatable);
        }
    }

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0016\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\t¨\u0006\u000b"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerViewHolder$EmojiPlaceholder;", "Lcom/discord/emoji_picker/EmojiPickerViewHolder;", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "onBindViewHolder", "", "emojiSize", "", "emojiMargin", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nEmojiPickerViewHolder.kt\nKotlin\n*S Kotlin\n*F\n+ 1 EmojiPickerViewHolder.kt\ncom/discord/emoji_picker/EmojiPickerViewHolder$EmojiPlaceholder\n+ 2 ViewGroup.kt\nandroidx/core/view/ViewGroupKt\n*L\n1#1,326:1\n190#2,2:327\n*S KotlinDebug\n*F\n+ 1 EmojiPickerViewHolder.kt\ncom/discord/emoji_picker/EmojiPickerViewHolder$EmojiPlaceholder\n*L\n171#1:327,2\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class EmojiPlaceholder extends EmojiPickerViewHolder {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public EmojiPlaceholder(@NotNull Context context) {
            super(new View(context), null);
            Intrinsics.checkNotNullParameter(context, "context");
            this.itemView.setBackground(Emoji.Companion.createPlaceholderDrawable());
        }

        public final void onBindViewHolder(int i10, int i11) {
            View view = this.itemView;
            RecyclerView.LayoutParams layoutParams = new RecyclerView.LayoutParams(i10, i10);
            layoutParams.setMargins(i11, i11, i11, i11);
            view.setLayoutParams(layoutParams);
        }
    }

    @Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\u0018\u00002\u00020\u00012\u00020\u0002B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006J\u000e\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\nJ\u0010\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000eH\u0016J\u0018\u0010\u000f\u001a\u00020\b2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\r\u001a\u00020\u000eH\u0016J\u0018\u0010\u0012\u001a\u00020\b2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\r\u001a\u00020\u000eH\u0016¨\u0006\u0013"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerViewHolder$FooterUpsell;", "Lcom/discord/emoji_picker/EmojiPickerViewHolder;", "Lcom/discord/portals/from_js/PortalFromJsContext;", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "onBindViewHolder", "", "footerUpsell", "Lcom/discord/emoji_picker/EmojiPickerItem$FooterUpsell;", "getPortalViewIndex", "", "portalView", "Landroid/view/View;", "onPortalFromJsAdded", "portalId", "", "onPortalFromJsRemoved", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class FooterUpsell extends EmojiPickerViewHolder implements PortalFromJsContext {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public FooterUpsell(@NotNull Context context) {
            super(new FrameLayout(context), null);
            Intrinsics.checkNotNullParameter(context, "context");
            this.itemView.setLayoutParams(new RecyclerView.LayoutParams(-1, SizeUtilsKt.getDpToPx(64)));
        }

        @Override // com.discord.portals.from_js.PortalFromJsContext
        public int getPortalViewIndex(@NotNull View portalView) {
            Intrinsics.checkNotNullParameter(portalView, "portalView");
            View view = this.itemView;
            Intrinsics.checkNotNull(view, "null cannot be cast to non-null type android.widget.FrameLayout");
            return ((FrameLayout) view).indexOfChild(portalView);
        }

        public final void onBindViewHolder(@NotNull EmojiPickerItem.FooterUpsell footerUpsell) {
            Intrinsics.checkNotNullParameter(footerUpsell, "footerUpsell");
            PortalFromJsContextManager.INSTANCE.addContext(footerUpsell.getId(), this);
        }

        @Override // com.discord.portals.from_js.PortalFromJsContext
        public void onPortalFromJsAdded(@NotNull String portalId, @NotNull View portalView) {
            Intrinsics.checkNotNullParameter(portalId, "portalId");
            Intrinsics.checkNotNullParameter(portalView, "portalView");
            View view = this.itemView;
            Intrinsics.checkNotNull(view, "null cannot be cast to non-null type android.widget.FrameLayout");
            ((FrameLayout) view).addView(portalView);
        }

        @Override // com.discord.portals.from_js.PortalFromJsContext
        public void onPortalFromJsRemoved(@NotNull String portalId, @NotNull View portalView) {
            Intrinsics.checkNotNullParameter(portalId, "portalId");
            Intrinsics.checkNotNullParameter(portalView, "portalView");
            View view = this.itemView;
            Intrinsics.checkNotNull(view, "null cannot be cast to non-null type android.widget.FrameLayout");
            ((FrameLayout) view).removeView(portalView);
        }
    }

    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u000e\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t¨\u0006\n"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerViewHolder$Spacer;", "Lcom/discord/emoji_picker/EmojiPickerViewHolder;", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "onBindViewHolder", "", "item", "Lcom/discord/emoji_picker/EmojiPickerItem$Spacer;", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Spacer extends EmojiPickerViewHolder {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Spacer(@NotNull Context context) {
            super(new View(context), null);
            Intrinsics.checkNotNullParameter(context, "context");
        }

        public final void onBindViewHolder(@NotNull EmojiPickerItem.Spacer item) {
            Intrinsics.checkNotNullParameter(item, "item");
            this.itemView.setLayoutParams(new RecyclerView.LayoutParams(-2, item.getHeight()));
        }
    }

    public /* synthetic */ EmojiPickerViewHolder(View view, DefaultConstructorMarker defaultConstructorMarker) {
        this(view);
    }

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\u0018\u00002\u00020\u0001B\u0019\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u000e\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bR\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\f"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerViewHolder$PremiumInlineRoadblockFooter;", "Lcom/discord/emoji_picker/EmojiPickerViewHolder;", "context", "Landroid/content/Context;", "binding", "Lcom/discord/emoji_picker/databinding/PremiumInlineRoadblockFooterBinding;", "<init>", "(Landroid/content/Context;Lcom/discord/emoji_picker/databinding/PremiumInlineRoadblockFooterBinding;)V", "onBindViewHolder", "", "useTier0UpsellContent", "", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class PremiumInlineRoadblockFooter extends EmojiPickerViewHolder {
        @NotNull
        private final PremiumInlineRoadblockFooterBinding binding;

        public /* synthetic */ PremiumInlineRoadblockFooter(Context context, PremiumInlineRoadblockFooterBinding premiumInlineRoadblockFooterBinding, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(context, (i10 & 2) != 0 ? PremiumInlineRoadblockFooterBinding.inflate(LayoutInflater.from(context)) : premiumInlineRoadblockFooterBinding);
        }

        public final void onBindViewHolder(boolean z10) {
            View gradient = this.binding.gradient;
            Intrinsics.checkNotNullExpressionValue(gradient, "gradient");
            PremiumInlineRoadblockHeader.Companion companion = PremiumInlineRoadblockHeader.Companion;
            ViewBackgroundUtilsKt.setBackgroundDrawableRes(gradient, PremiumInlineRoadblockHeader.Companion.getGradient$default(companion, z10, false, 2, null));
            View gradientDivider = this.binding.gradientDivider;
            Intrinsics.checkNotNullExpressionValue(gradientDivider, "gradientDivider");
            ViewBackgroundUtilsKt.setBackgroundDrawableRes(gradientDivider, PremiumInlineRoadblockHeader.Companion.getGradient$default(companion, z10, false, 2, null));
        }

        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public PremiumInlineRoadblockFooter(@org.jetbrains.annotations.NotNull android.content.Context r2, @org.jetbrains.annotations.NotNull com.discord.emoji_picker.databinding.PremiumInlineRoadblockFooterBinding r3) {
            /*
                r1 = this;
                java.lang.String r0 = "context"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
                java.lang.String r2 = "binding"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r2)
                android.widget.RelativeLayout r2 = r3.getRoot()
                java.lang.String r0 = "getRoot(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, r0)
                r0 = 0
                r1.<init>(r2, r0)
                r1.binding = r3
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: com.discord.emoji_picker.EmojiPickerViewHolder.PremiumInlineRoadblockFooter.<init>(android.content.Context, com.discord.emoji_picker.databinding.PremiumInlineRoadblockFooterBinding):void");
        }
    }

    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\u0018\u0000 \f2\u00020\u0001:\u0001\fB\u0019\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u000e\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bR\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\r"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerViewHolder$PremiumInlineRoadblockHeader;", "Lcom/discord/emoji_picker/EmojiPickerViewHolder;", "context", "Landroid/content/Context;", "binding", "Lcom/discord/emoji_picker/databinding/PremiumInlineRoadblockHeaderBinding;", "<init>", "(Landroid/content/Context;Lcom/discord/emoji_picker/databinding/PremiumInlineRoadblockHeaderBinding;)V", "onBindViewHolder", "", "useTier0UpsellContent", "", "Companion", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class PremiumInlineRoadblockHeader extends EmojiPickerViewHolder {
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        private final PremiumInlineRoadblockHeaderBinding binding;

        @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\u0007¨\u0006\t"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerViewHolder$PremiumInlineRoadblockHeader$Companion;", "", "<init>", "()V", "getGradient", "", "useTier0UpsellContent", "", "circle", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public static /* synthetic */ int getGradient$default(Companion companion, boolean z10, boolean z11, int i10, Object obj) {
                if ((i10 & 2) != 0) {
                    z11 = false;
                }
                return companion.getGradient(z10, z11);
            }

            public final int getGradient(boolean z10, boolean z11) {
                if (z10) {
                    if (z11) {
                        return R.drawable.premium_tier0_gradient_circle;
                    }
                    return R.drawable.premium_tier0_gradient;
                } else if (z11) {
                    return R.drawable.premium_tier2_gradient_circle;
                } else {
                    return R.drawable.premium_tier2_gradient;
                }
            }

            private Companion() {
            }
        }

        public /* synthetic */ PremiumInlineRoadblockHeader(Context context, PremiumInlineRoadblockHeaderBinding premiumInlineRoadblockHeaderBinding, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(context, (i10 & 2) != 0 ? PremiumInlineRoadblockHeaderBinding.inflate(LayoutInflater.from(context)) : premiumInlineRoadblockHeaderBinding);
        }

        public final void onBindViewHolder(boolean z10) {
            View gradient = this.binding.gradient;
            Intrinsics.checkNotNullExpressionValue(gradient, "gradient");
            Companion companion = Companion;
            ViewBackgroundUtilsKt.setBackgroundDrawableRes(gradient, Companion.getGradient$default(companion, z10, false, 2, null));
            View gradientDivider = this.binding.gradientDivider;
            Intrinsics.checkNotNullExpressionValue(gradientDivider, "gradientDivider");
            ViewBackgroundUtilsKt.setBackgroundDrawableRes(gradientDivider, Companion.getGradient$default(companion, z10, false, 2, null));
            FrameLayout gradientIcon = this.binding.gradientIcon;
            Intrinsics.checkNotNullExpressionValue(gradientIcon, "gradientIcon");
            ViewBackgroundUtilsKt.setBackgroundDrawableRes(gradientIcon, companion.getGradient(z10, true));
        }

        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public PremiumInlineRoadblockHeader(@org.jetbrains.annotations.NotNull android.content.Context r2, @org.jetbrains.annotations.NotNull com.discord.emoji_picker.databinding.PremiumInlineRoadblockHeaderBinding r3) {
            /*
                r1 = this;
                java.lang.String r0 = "context"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
                java.lang.String r2 = "binding"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r2)
                android.widget.RelativeLayout r2 = r3.getRoot()
                java.lang.String r0 = "getRoot(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, r0)
                r0 = 0
                r1.<init>(r2, r0)
                r1.binding = r3
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: com.discord.emoji_picker.EmojiPickerViewHolder.PremiumInlineRoadblockHeader.<init>(android.content.Context, com.discord.emoji_picker.databinding.PremiumInlineRoadblockHeaderBinding):void");
        }
    }

    private EmojiPickerViewHolder(View view) {
        super(view);
    }
}
