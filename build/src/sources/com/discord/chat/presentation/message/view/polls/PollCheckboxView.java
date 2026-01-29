package com.discord.chat.presentation.message.view.polls;

import android.content.Context;
import android.util.AttributeSet;
import com.discord.chat.bridge.polls.PollChatAnswerInteractionType;
import com.discord.chat.bridge.polls.PollRadioStyle;
import com.discord.chat.presentation.message.messagepart.polls.PollAnswerAccessory;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_strings.I18nMessage;
import com.discord.react_strings.I18nUtilsKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.view.SimpleDraweeView;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u0000 \f2\u00020\u0001:\u0001\fB\u001d\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u000e\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b¨\u0006\r"}, d2 = {"Lcom/discord/chat/presentation/message/view/polls/PollCheckboxView;", "Lcom/facebook/drawee/view/SimpleDraweeView;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "configure", "", "accessory", "Lcom/discord/chat/presentation/message/messagepart/polls/PollAnswerAccessory;", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PollCheckboxView extends SimpleDraweeView {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int ROUND = SizeUtilsKt.getDpToPx(12);

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/chat/presentation/message/view/polls/PollCheckboxView$Companion;", "", "<init>", "()V", "ROUND", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public PollCheckboxView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public final void configure(@NotNull PollAnswerAccessory accessory) {
        CharSequence charSequence;
        boolean z10;
        int i10;
        Intrinsics.checkNotNullParameter(accessory, "accessory");
        if (accessory.getStyleSet().getRadioStyle() == PollRadioStyle.NONE) {
            setVisibility(4);
            return;
        }
        setVisibility(0);
        if (accessory.getAnswer().getDidSelfVote()) {
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            charSequence = I18nUtilsKt.i18nFormat$default(context, I18nMessage.POLL_ANSWER_VOTED_ARIA, null, 2, null);
        } else {
            charSequence = "";
        }
        setContentDescription(charSequence);
        if (accessory.getInteractionType() == PollChatAnswerInteractionType.CHECKBOXES) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            i10 = SizeUtilsKt.getDpToPx(8);
        } else {
            i10 = ROUND;
        }
        int i11 = i10;
        if (accessory.getStyleSet().getRadioStyle() == PollRadioStyle.HOLLOW) {
            setImageURI((String) null);
            ViewBackgroundUtilsKt.setBackgroundRectangle(this, 0, i11, Integer.valueOf(accessory.getRadioBackgroundColor()), SizeUtilsKt.getDpToPx(2));
        } else if (accessory.getStyleSet().getRadioStyle() != PollRadioStyle.CHECKMARK && !z10) {
            if (accessory.getStyleSet().getRadioStyle() == PollRadioStyle.FILLED) {
                setImageURI((String) null);
                ViewBackgroundUtilsKt.setBackgroundRectangle(this, accessory.getRadioForegroundColor(), i11, Integer.valueOf(accessory.getRadioBackgroundColor()), SizeUtilsKt.getDpToPx(6));
            }
        } else {
            ReactAssetUtilsKt.setReactImageUrl(this, accessory.getResources().getCheckmarkIcon());
            ViewBackgroundUtilsKt.setBackgroundRectangle$default(this, accessory.getRadioBackgroundColor(), i11, null, 0, 12, null);
            ColorUtilsKt.setTintColor((SimpleDraweeView) this, Integer.valueOf(accessory.getRadioForegroundColor()));
        }
    }

    public /* synthetic */ PollCheckboxView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public PollCheckboxView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
    }
}
