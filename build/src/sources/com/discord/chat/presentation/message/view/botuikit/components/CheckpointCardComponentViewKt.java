package com.discord.chat.presentation.message.view.botuikit.components;

import android.view.View;
import androidx.core.view.h0;
import com.discord.chat.bridge.botuikit.CheckpointCardClickable;
import com.discord.chat.bridge.botuikit.CheckpointDataV2025;
import com.discord.chat.presentation.message.view.botuikit.ComponentContext;
import com.discord.primitives.UserId;
import kotlin.Metadata;
@Metadata(d1 = {"\u0000\u001e\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u001a&\u0010\u0000\u001a\u00020\u0001*\u00020\u00022\u0006\u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u00062\b\u0010\u0007\u001a\u0004\u0018\u00010\bH\u0002¨\u0006\t"}, d2 = {"applyClickable", "", "Landroid/view/View;", "componentContext", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentContext;", "checkpointData", "Lcom/discord/chat/bridge/botuikit/CheckpointDataV2025;", "clickable", "Lcom/discord/chat/bridge/botuikit/CheckpointCardClickable;", "chat_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CheckpointCardComponentViewKt {
    /* JADX INFO: Access modifiers changed from: private */
    public static final void applyClickable(View view, final ComponentContext componentContext, final CheckpointDataV2025 checkpointDataV2025, CheckpointCardClickable checkpointCardClickable) {
        boolean z10;
        if (checkpointCardClickable == null) {
            view.setOnClickListener(null);
        } else {
            view.setContentDescription(checkpointCardClickable.getAriaDescription());
            view.setOnClickListener(new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.botuikit.components.e
                @Override // android.view.View.OnClickListener
                public final void onClick(View view2) {
                    CheckpointCardComponentViewKt.applyClickable$lambda$0(ComponentContext.this, checkpointDataV2025, view2);
                }
            });
        }
        if (checkpointCardClickable != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        h0.G0(view, z10);
        view.setClickable(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void applyClickable$lambda$0(ComponentContext componentContext, CheckpointDataV2025 checkpointDataV2025, View view) {
        componentContext.getComponentActionEventHandlers().getOnTapCheckpointCard().invoke(UserId.m1137boximpl(checkpointDataV2025.m262getAuthorIdre6GcUE()));
    }
}
