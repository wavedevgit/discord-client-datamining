package com.discord.chat.presentation.message.view.polls.a11y;

import android.view.View;
import android.view.accessibility.AccessibilityEvent;
import androidx.core.view.a;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import com.discord.chat.bridge.polls.PollChatAnswerInteractionType;
import com.discord.chat.presentation.message.messagepart.polls.PollAnswerAccessory;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import or.p;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u001f\u0010\u000b\u001a\u00020\n2\u0006\u0010\u0007\u001a\u00020\u00062\u0006\u0010\t\u001a\u00020\bH\u0016¢\u0006\u0004\b\u000b\u0010\fJ\u001f\u0010\u000f\u001a\u00020\n2\u0006\u0010\u0007\u001a\u00020\u00062\u0006\u0010\u000e\u001a\u00020\rH\u0016¢\u0006\u0004\b\u000f\u0010\u0010R\u0014\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0003\u0010\u0011¨\u0006\u0012"}, d2 = {"Lcom/discord/chat/presentation/message/view/polls/a11y/PollsAnswerAccessibilityDelegate;", "Landroidx/core/view/a;", "Lcom/discord/chat/presentation/message/messagepart/polls/PollAnswerAccessory;", "accessory", "<init>", "(Lcom/discord/chat/presentation/message/messagepart/polls/PollAnswerAccessory;)V", "Landroid/view/View;", "host", "Landroid/view/accessibility/AccessibilityEvent;", "event", "", "onInitializeAccessibilityEvent", "(Landroid/view/View;Landroid/view/accessibility/AccessibilityEvent;)V", "Landroidx/core/view/accessibility/AccessibilityNodeInfoCompat;", "info", "onInitializeAccessibilityNodeInfo", "(Landroid/view/View;Landroidx/core/view/accessibility/AccessibilityNodeInfoCompat;)V", "Lcom/discord/chat/presentation/message/messagepart/polls/PollAnswerAccessory;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PollsAnswerAccessibilityDelegate extends a {
    @NotNull
    private final PollAnswerAccessory accessory;

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[PollChatAnswerInteractionType.values().length];
            try {
                iArr[PollChatAnswerInteractionType.LIST.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[PollChatAnswerInteractionType.RADIO_BUTTONS.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[PollChatAnswerInteractionType.CHECKBOXES.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public PollsAnswerAccessibilityDelegate(@NotNull PollAnswerAccessory accessory) {
        Intrinsics.checkNotNullParameter(accessory, "accessory");
        this.accessory = accessory;
    }

    @Override // androidx.core.view.a
    public void onInitializeAccessibilityEvent(@NotNull View host, @NotNull AccessibilityEvent event) {
        Intrinsics.checkNotNullParameter(host, "host");
        Intrinsics.checkNotNullParameter(event, "event");
        super.onInitializeAccessibilityEvent(host, event);
        boolean areEqual = Intrinsics.areEqual(this.accessory.getAnswer().isSelected(), Boolean.TRUE);
        int i10 = WhenMappings.$EnumSwitchMapping$0[this.accessory.getInteractionType().ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 == 3) {
                event.setChecked(areEqual);
                return;
            }
            throw new p();
        }
    }

    @Override // androidx.core.view.a
    public void onInitializeAccessibilityNodeInfo(@NotNull View host, @NotNull AccessibilityNodeInfoCompat info) {
        boolean z10;
        String str;
        Intrinsics.checkNotNullParameter(host, "host");
        Intrinsics.checkNotNullParameter(info, "info");
        super.onInitializeAccessibilityNodeInfo(host, info);
        if (this.accessory.getInteractionType() == PollChatAnswerInteractionType.CHECKBOXES) {
            z10 = true;
        } else {
            z10 = false;
        }
        info.u0(z10);
        boolean areEqual = Intrinsics.areEqual(this.accessory.getAnswer().isSelected(), Boolean.TRUE);
        PollChatAnswerInteractionType interactionType = this.accessory.getInteractionType();
        int[] iArr = WhenMappings.$EnumSwitchMapping$0;
        int i10 = iArr[interactionType.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    info.v0(areEqual);
                } else {
                    throw new p();
                }
            } else {
                info.W0(areEqual);
            }
        }
        int i11 = iArr[this.accessory.getInteractionType().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    str = "android.widget.CheckBox";
                } else {
                    throw new p();
                }
            } else {
                str = "android.widget.RadioButton";
            }
        } else {
            str = "android.view.ViewGroup";
        }
        info.w0(str);
        if (this.accessory.getTapAccessibilityLabel() != null) {
            info.b(new AccessibilityNodeInfoCompat.a(16, this.accessory.getTapAccessibilityLabel()));
        }
    }
}
