package com.discord.chat.presentation.stickers;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.bridge.Message;
import com.discord.chat.bridge.sticker.Sticker;
import com.discord.chat.bridge.sticker.StickerFormatType;
import com.discord.chat.databinding.WelcomeStickerViewBinding;
import com.discord.chat.presentation.stickers.WelcomeStickerView;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.primitives.MessageId;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.ripple.RippleUtilsKt;
import com.discord.theme.R;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import lr.p;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u001d\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u0017\u0010\u000b\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\u000b\u0010\fJ7\u0010\u0012\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\u000e\u001a\u00020\r2\u0018\u0010\u0011\u001a\u0014\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u0010\u0012\u0004\u0012\u00020\n0\u000f¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016¨\u0006\u0017"}, d2 = {"Lcom/discord/chat/presentation/stickers/WelcomeStickerView;", "Landroid/widget/LinearLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "Lcom/discord/chat/bridge/sticker/Sticker;", "sticker", "", "bindSticker", "(Lcom/discord/chat/bridge/sticker/Sticker;)V", "Lcom/discord/chat/bridge/Message;", "message", "Lkotlin/Function2;", "Lcom/discord/primitives/MessageId;", "onWelcomeReplyClicked", "setSticker", "(Lcom/discord/chat/bridge/sticker/Sticker;Lcom/discord/chat/bridge/Message;Lkotlin/jvm/functions/Function2;)V", "Lcom/discord/chat/databinding/WelcomeStickerViewBinding;", "binding", "Lcom/discord/chat/databinding/WelcomeStickerViewBinding;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class WelcomeStickerView extends LinearLayout {
    @NotNull
    private final WelcomeStickerViewBinding binding;

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[StickerFormatType.values().length];
            try {
                iArr[StickerFormatType.PNG.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[StickerFormatType.APNG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[StickerFormatType.LOTTIE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[StickerFormatType.GIF.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public WelcomeStickerView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void bindSticker(Sticker sticker) {
        int i10 = WhenMappings.$EnumSwitchMapping$0[sticker.getFormatType().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        this.binding.stickerView.asGif(sticker.getUrl(), 32, 32, true, sticker.getAccessibilityLabel());
                        return;
                    }
                    throw new p();
                }
                this.binding.stickerView.asLottie(sticker.getUrl(), 32, 32, true, sticker.getAsset(), sticker.getRenderMode(), sticker.getAccessibilityLabel());
                return;
            }
            this.binding.stickerView.asApng(sticker.getUrl(), 32, 32, true, sticker.getAccessibilityLabel());
            return;
        }
        this.binding.stickerView.asPng(sticker.getUrl(), sticker.getWidth(), sticker.getHeight(), sticker.getAccessibilityLabel());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setSticker$lambda$1(Function2 function2, Sticker sticker, Message message, View view) {
        function2.invoke(sticker, MessageId.m1085boximpl(message.m239getId3Eiw7ao()));
    }

    public final void setSticker(@NotNull final Sticker sticker, @NotNull final Message message, @NotNull final Function2<? super Sticker, ? super MessageId, Unit> onWelcomeReplyClicked) {
        Intrinsics.checkNotNullParameter(sticker, "sticker");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(onWelcomeReplyClicked, "onWelcomeReplyClicked");
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(this, false, new View.OnClickListener() { // from class: e7.a
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                WelcomeStickerView.setSticker$lambda$1(Function2.this, sticker, message, view);
            }
        }, 1, null);
        this.binding.welcomeReplyText.setText(message.getStickerLabel());
        bindSticker(sticker);
    }

    public /* synthetic */ WelcomeStickerView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public WelcomeStickerView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        WelcomeStickerViewBinding inflate = WelcomeStickerViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        RippleUtilsKt.addRipple$default(this, true, 0, 2, null);
        setOrientation(0);
        setLayoutParams(new LinearLayout.LayoutParams(-2, -2));
        setPadding(SizeUtilsKt.getDpToPx(12), SizeUtilsKt.getDpToPx(8), SizeUtilsKt.getDpToPx(12), SizeUtilsKt.getDpToPx(8));
        TextView textView = inflate.welcomeReplyText;
        Intrinsics.checkNotNull(textView);
        textView.setTextColor(ColorUtilsKt.getColorCompat(textView, R.color.white));
        SetTextSizeSpKt.setTextSizeSp(textView, 16.0f);
        DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimarySemibold);
        ViewBackgroundUtilsKt.setBackgroundRectangle$default(this, ThemeManagerKt.getTheme().getMobileLegacyButtonSecondaryBackgroundDefault(), SizeUtilsKt.getDpToPx(4), null, 0, 12, null);
    }
}
