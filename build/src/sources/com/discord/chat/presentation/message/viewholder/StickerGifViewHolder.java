package com.discord.chat.presentation.message.viewholder;

import android.view.View;
import com.discord.chat.bridge.sticker.Sticker;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.sticker.StickerView;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005JH\u0010\b\u001a\u00020\t2\u0006\u0010\u0006\u001a\u00020\u00072\u0012\u0010\n\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\t0\u000b2\u0012\u0010\f\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\t0\u000b2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u000eH\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0010"}, d2 = {"Lcom/discord/chat/presentation/message/viewholder/StickerGifViewHolder;", "Lcom/discord/chat/presentation/message/viewholder/StickerPartViewHolder;", "stickerView", "Lcom/discord/sticker/StickerView;", "<init>", "(Lcom/discord/sticker/StickerView;)V", "sticker", "Lcom/discord/chat/bridge/sticker/Sticker;", "bind", "", "onStickerClicked", "Lkotlin/Function1;", "onStickerLongClicked", "widthDp", "", "heightDp", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class StickerGifViewHolder extends StickerPartViewHolder {
    private Sticker sticker;
    @NotNull
    private final StickerView stickerView;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public StickerGifViewHolder(@NotNull StickerView stickerView) {
        super(stickerView);
        Intrinsics.checkNotNullParameter(stickerView, "stickerView");
        this.stickerView = stickerView;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean bind$lambda$1(Function1 function1, Sticker sticker, View view) {
        function1.invoke(sticker);
        return true;
    }

    @Override // com.discord.chat.presentation.message.viewholder.StickerPartViewHolder
    public void bind(@NotNull final Sticker sticker, @NotNull final Function1<? super Sticker, Unit> onStickerClicked, @NotNull final Function1<? super Sticker, Unit> onStickerLongClicked, int i10, int i11) {
        boolean z10;
        Intrinsics.checkNotNullParameter(sticker, "sticker");
        Intrinsics.checkNotNullParameter(onStickerClicked, "onStickerClicked");
        Intrinsics.checkNotNullParameter(onStickerLongClicked, "onStickerLongClicked");
        if (Intrinsics.areEqual(sticker, this.sticker)) {
            return;
        }
        this.sticker = sticker;
        StickerView stickerView = this.stickerView;
        String url = sticker.getUrl();
        Integer valueOf = Integer.valueOf(i10);
        Integer valueOf2 = Integer.valueOf(i11);
        if (sticker.getRenderMode() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        stickerView.asGif(url, valueOf, valueOf2, z10, sticker.getAccessibilityLabel());
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(this.stickerView, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.viewholder.m0
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                Function1.this.invoke(sticker);
            }
        }, 1, null);
        NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested$default(this.stickerView, false, new View.OnLongClickListener() { // from class: com.discord.chat.presentation.message.viewholder.n0
            @Override // android.view.View.OnLongClickListener
            public final boolean onLongClick(View view) {
                boolean bind$lambda$1;
                bind$lambda$1 = StickerGifViewHolder.bind$lambda$1(Function1.this, sticker, view);
                return bind$lambda$1;
            }
        }, 1, null);
    }
}
