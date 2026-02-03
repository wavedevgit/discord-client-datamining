package com.discord.emoji_picker;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.view.View;
import android.widget.LinearLayout;
import com.discord.emoji_picker.EmojiPickerRow;
import com.discord.image.fresco.SetOptionalImageUrlKt;
import com.discord.misc.utilities.drawable.GetDrawableCompatKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewClippingUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.ripple.RippleUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u000b\b\u0000\u0018\u0000 \u001e2\u00020\u0001:\u0001\u001eB\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J'\u0010\f\u001a\u00020\u000b2\u000e\u0010\b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00062\u0006\u0010\n\u001a\u00020\tH\u0002¢\u0006\u0004\b\f\u0010\rJ\u0017\u0010\u0010\u001a\u00020\u000b2\u0006\u0010\u000f\u001a\u00020\u000eH\u0002¢\u0006\u0004\b\u0010\u0010\u0011J\u0015\u0010\u0012\u001a\u00020\u000b2\u0006\u0010\u000f\u001a\u00020\u000e¢\u0006\u0004\b\u0012\u0010\u0011R.\u0010\u0015\u001a\u000e\u0012\u0004\u0012\u00020\u0014\u0012\u0004\u0012\u00020\u000b0\u00138\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b\u0015\u0010\u0016\u001a\u0004\b\u0017\u0010\u0018\"\u0004\b\u0019\u0010\u001aR.\u0010\u001b\u001a\u000e\u0012\u0004\u0012\u00020\u0014\u0012\u0004\u0012\u00020\u000b0\u00138\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b\u001b\u0010\u0016\u001a\u0004\b\u001c\u0010\u0018\"\u0004\b\u001d\u0010\u001a¨\u0006\u001f"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerRowView;", "Landroid/widget/LinearLayout;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "", "Lcom/discord/emoji_picker/EmojiPickerRow$Emoji;", "emojis", "", "isSectionNitroLocked", "", "configureRowEmojiViews", "(Ljava/util/List;Z)V", "Lcom/discord/emoji_picker/EmojiPickerRow;", "rowData", "createRowEmojiViews", "(Lcom/discord/emoji_picker/EmojiPickerRow;)V", "setRowData", "Lkotlin/Function1;", "", "onPressEmoji", "Lkotlin/jvm/functions/Function1;", "getOnPressEmoji", "()Lkotlin/jvm/functions/Function1;", "setOnPressEmoji", "(Lkotlin/jvm/functions/Function1;)V", "onLongPressEmoji", "getOnLongPressEmoji", "setOnLongPressEmoji", "Companion", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nEmojiPickerRowView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 EmojiPickerRowView.kt\ncom/discord/emoji_picker/EmojiPickerRowView\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,113:1\n1878#2,2:114\n1880#2:120\n1878#2,3:121\n278#3,2:116\n278#3,2:118\n*S KotlinDebug\n*F\n+ 1 EmojiPickerRowView.kt\ncom/discord/emoji_picker/EmojiPickerRowView\n*L\n43#1:114,2\n43#1:120\n86#1:121,3\n47#1:116,2\n53#1:118,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class EmojiPickerRowView extends LinearLayout {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final GradientDrawable placeholder;
    @NotNull
    private Function1<? super String, Unit> onLongPressEmoji;
    @NotNull
    private Function1<? super String, Unit> onPressEmoji;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerRowView$Companion;", "", "<init>", "()V", ReactTextInputShadowNode.PROP_PLACEHOLDER, "Landroid/graphics/drawable/GradientDrawable;", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    static {
        GradientDrawable gradientDrawable = new GradientDrawable();
        gradientDrawable.setShape(1);
        gradientDrawable.setColor(ThemeManagerKt.getTheme().getBackgroundModMuted());
        placeholder = gradientDrawable;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public EmojiPickerRowView(@NotNull Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.onPressEmoji = new Function1() { // from class: com.discord.emoji_picker.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit onPressEmoji$lambda$0;
                onPressEmoji$lambda$0 = EmojiPickerRowView.onPressEmoji$lambda$0((String) obj);
                return onPressEmoji$lambda$0;
            }
        };
        this.onLongPressEmoji = new Function1() { // from class: com.discord.emoji_picker.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit onLongPressEmoji$lambda$1;
                onLongPressEmoji$lambda$1 = EmojiPickerRowView.onLongPressEmoji$lambda$1((String) obj);
                return onLongPressEmoji$lambda$1;
            }
        };
        setOrientation(0);
    }

    private final void configureRowEmojiViews(List<EmojiPickerRow.Emoji> list, boolean z10) {
        int i10;
        int i11 = 0;
        for (Object obj : list) {
            int i12 = i11 + 1;
            if (i11 < 0) {
                CollectionsKt.v();
            }
            final EmojiPickerRow.Emoji emoji = (EmojiPickerRow.Emoji) obj;
            View childAt = getChildAt(i11);
            Intrinsics.checkNotNull(childAt, "null cannot be cast to non-null type com.facebook.drawee.view.SimpleDraweeView");
            SimpleDraweeView simpleDraweeView = (SimpleDraweeView) childAt;
            Drawable drawable = null;
            if (emoji == null) {
                simpleDraweeView.setImageURI((String) null);
                simpleDraweeView.setVisibility(4);
            } else {
                SetOptionalImageUrlKt.setOptionalImageUrl$default(simpleDraweeView, emoji.getUrl(), Boolean.valueOf(emoji.getAnimated()), null, null, 12, null);
                simpleDraweeView.setVisibility(0);
                simpleDraweeView.setContentDescription(emoji.getName());
                boolean z11 = true;
                NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(simpleDraweeView, false, new View.OnClickListener() { // from class: com.discord.emoji_picker.e
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        EmojiPickerRowView.configureRowEmojiViews$lambda$4$lambda$2(EmojiPickerRowView.this, emoji, view);
                    }
                }, 1, null);
                NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested$default(simpleDraweeView, false, new View.OnLongClickListener() { // from class: com.discord.emoji_picker.f
                    @Override // android.view.View.OnLongClickListener
                    public final boolean onLongClick(View view) {
                        boolean configureRowEmojiViews$lambda$4$lambda$3;
                        configureRowEmojiViews$lambda$4$lambda$3 = EmojiPickerRowView.configureRowEmojiViews$lambda$4$lambda$3(EmojiPickerRowView.this, emoji, view);
                        return configureRowEmojiViews$lambda$4$lambda$3;
                    }
                }, 1, null);
                z11 = (!emoji.getDisabled() || z10) ? false : false;
                if (z11) {
                    i10 = SizeUtilsKt.getDpToPx(4);
                } else {
                    i10 = 0;
                }
                ViewClippingUtilsKt.clipToRoundedRectangle(simpleDraweeView, i10);
                GenericDraweeHierarchy genericDraweeHierarchy = (GenericDraweeHierarchy) simpleDraweeView.getHierarchy();
                if (z11) {
                    Context context = getContext();
                    Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                    drawable = GetDrawableCompatKt.getDrawableCompat(context, R.drawable.lock_overlay);
                }
                genericDraweeHierarchy.y(drawable);
            }
            i11 = i12;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void configureRowEmojiViews$lambda$4$lambda$2(EmojiPickerRowView emojiPickerRowView, EmojiPickerRow.Emoji emoji, View view) {
        emojiPickerRowView.onPressEmoji.invoke(emoji.getName());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean configureRowEmojiViews$lambda$4$lambda$3(EmojiPickerRowView emojiPickerRowView, EmojiPickerRow.Emoji emoji, View view) {
        emojiPickerRowView.onLongPressEmoji.invoke(emoji.getName());
        return true;
    }

    private final void createRowEmojiViews(EmojiPickerRow emojiPickerRow) {
        int i10;
        removeAllViews();
        int dpToPx = SizeUtilsKt.getDpToPx(emojiPickerRow.getItemSize());
        int size = emojiPickerRow.getItems().size();
        int dpToPx2 = (SizeUtilsKt.getDpToPx(emojiPickerRow.getRowContentWidth()) - (dpToPx * size)) / (size - 1);
        int dpToPx3 = SizeUtilsKt.getDpToPx(emojiPickerRow.getRowContentPaddingVertical());
        int i11 = 0;
        for (Object obj : emojiPickerRow.getItems()) {
            int i12 = i11 + 1;
            if (i11 < 0) {
                CollectionsKt.v();
            }
            EmojiPickerRow.Emoji emoji = (EmojiPickerRow.Emoji) obj;
            if (i11 == 0) {
                i10 = 0;
            } else {
                i10 = dpToPx2;
            }
            SimpleDraweeView simpleDraweeView = new SimpleDraweeView(getContext());
            RippleUtilsKt.addCircleRipple$default(simpleDraweeView, false, 1, null);
            ((GenericDraweeHierarchy) simpleDraweeView.getHierarchy()).z(placeholder);
            ((GenericDraweeHierarchy) simpleDraweeView.getHierarchy()).t(ScalingUtils$ScaleType.f9634e);
            LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(dpToPx, dpToPx);
            layoutParams.setMargins(i10, dpToPx3, 0, dpToPx3);
            simpleDraweeView.setLayoutParams(layoutParams);
            addView(simpleDraweeView);
            i11 = i12;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onLongPressEmoji$lambda$1(String it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onPressEmoji$lambda$0(String it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32464a;
    }

    @NotNull
    public final Function1<String, Unit> getOnLongPressEmoji() {
        return this.onLongPressEmoji;
    }

    @NotNull
    public final Function1<String, Unit> getOnPressEmoji() {
        return this.onPressEmoji;
    }

    public final void setOnLongPressEmoji(@NotNull Function1<? super String, Unit> function1) {
        Intrinsics.checkNotNullParameter(function1, "<set-?>");
        this.onLongPressEmoji = function1;
    }

    public final void setOnPressEmoji(@NotNull Function1<? super String, Unit> function1) {
        Intrinsics.checkNotNullParameter(function1, "<set-?>");
        this.onPressEmoji = function1;
    }

    public final void setRowData(@NotNull EmojiPickerRow rowData) {
        Intrinsics.checkNotNullParameter(rowData, "rowData");
        if (rowData.getItems().size() != getChildCount()) {
            createRowEmojiViews(rowData);
        }
        configureRowEmojiViews(rowData.getItems(), rowData.isSectionNitroLocked());
    }
}
