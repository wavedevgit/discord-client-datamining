package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.LinearLayout;
import com.discord.chat.databinding.CtaButtonBinding;
import com.discord.core.DCDButton;
import com.discord.fonts.DiscordFont;
import com.discord.primitives.ChannelId;
import com.discord.primitives.MessageId;
import com.discord.theme.R;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u00002\u00020\u0001B\u001d\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007JI\u0010\u0013\u001a\u00020\u000f2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\u000b\u001a\u00020\n2\b\u0010\r\u001a\u0004\u0018\u00010\f2\u001e\u0010\u0010\u001a\u001a\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u000f0\u000eH\u0002¢\u0006\u0004\b\u0011\u0010\u0012Ji\u0010\u001a\u001a\u00020\u000f2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010\u0014\u001a\u00020\f2\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u00152\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u00152\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\f2\u001e\u0010\u0010\u001a\u001a\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u000f0\u000e¢\u0006\u0004\b\u0018\u0010\u0019R\u0017\u0010\u001c\u001a\u00020\u001b8\u0006¢\u0006\f\n\u0004\b\u001c\u0010\u001d\u001a\u0004\b\u001e\u0010\u001f¨\u0006 "}, d2 = {"Lcom/discord/chat/presentation/message/view/CtaButtonView;", "Landroid/widget/LinearLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "Lcom/discord/primitives/ChannelId;", "channelId", "Lcom/discord/primitives/MessageId;", "messageId", "", "callback", "Lkotlin/Function3;", "", "onTapCtaButton", "setButtonCallback-JjTCmh4", "(JLjava/lang/String;Ljava/lang/String;Lkotlin/jvm/functions/Function3;)V", "setButtonCallback", "text", "", "textColor", ViewProps.BACKGROUND_COLOR, "setContent-P6jPPyA", "(JLjava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Lkotlin/jvm/functions/Function3;)V", "setContent", "Lcom/discord/chat/databinding/CtaButtonBinding;", "binding", "Lcom/discord/chat/databinding/CtaButtonBinding;", "getBinding", "()Lcom/discord/chat/databinding/CtaButtonBinding;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CtaButtonView extends LinearLayout {
    @NotNull
    private final CtaButtonBinding binding;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public CtaButtonView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* renamed from: setButtonCallback-JjTCmh4  reason: not valid java name */
    private final void m686setButtonCallbackJjTCmh4(final long j10, final String str, final String str2, final Function3 function3) {
        if (str2 != null && !StringsKt.k0(str2)) {
            this.binding.ctaButton.setOnClickButtonListener(new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.b0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    CtaButtonView.setButtonCallback_JjTCmh4$lambda$0(Function3.this, j10, str, str2, view);
                }
            });
            this.binding.ctaButton.setEnabled(true);
            this.binding.ctaButton.setAlpha(1.0f);
            return;
        }
        this.binding.ctaButton.setOnClickButtonListener(new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.c0
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                CtaButtonView.setButtonCallback_JjTCmh4$lambda$1(view);
            }
        });
        this.binding.ctaButton.setEnabled(false);
        this.binding.ctaButton.setAlpha(0.5f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setButtonCallback_JjTCmh4$lambda$0(Function3 function3, long j10, String str, String str2, View view) {
        function3.invoke(ChannelId.m1059boximpl(j10), MessageId.m1085boximpl(str), str2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setButtonCallback_JjTCmh4$lambda$1(View view) {
    }

    /* renamed from: setContent-P6jPPyA$default  reason: not valid java name */
    public static /* synthetic */ void m687setContentP6jPPyA$default(CtaButtonView ctaButtonView, long j10, String str, String str2, Integer num, Integer num2, String str3, Function3 function3, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            num = null;
        }
        if ((i10 & 16) != 0) {
            num2 = null;
        }
        if ((i10 & 32) != 0) {
            str3 = null;
        }
        ctaButtonView.m688setContentP6jPPyA(j10, str, str2, num, num2, str3, function3);
    }

    @NotNull
    public final CtaButtonBinding getBinding() {
        return this.binding;
    }

    /* renamed from: setContent-P6jPPyA  reason: not valid java name */
    public final void m688setContentP6jPPyA(long j10, @NotNull String messageId, @NotNull String text, Integer num, Integer num2, String str, @NotNull Function3 onTapCtaButton) {
        int i10;
        int color;
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(onTapCtaButton, "onTapCtaButton");
        this.binding.ctaButton.setText(text);
        DCDButton dCDButton = this.binding.ctaButton;
        if (num != null) {
            i10 = num.intValue();
        } else {
            i10 = -1;
        }
        dCDButton.setTextColor(Integer.valueOf(i10));
        DCDButton dCDButton2 = this.binding.ctaButton;
        if (num2 != null) {
            color = num2.intValue();
        } else {
            color = getContext().getColor(R.color.brand_500);
        }
        dCDButton2.setBackgroundColor(color);
        this.binding.ctaButton.setTextSizeSp(14.0f);
        this.binding.ctaButton.setCornerRadius(32);
        m686setButtonCallbackJjTCmh4(j10, messageId, str, onTapCtaButton);
    }

    public /* synthetic */ CtaButtonView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public CtaButtonView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        CtaButtonBinding inflate = CtaButtonBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        inflate.ctaButton.setDiscordFont(DiscordFont.PrimarySemibold);
    }
}
