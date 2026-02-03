package com.discord.chat.presentation.message.view.mosaic_recycler;

import android.annotation.SuppressLint;
import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.e;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.message.messagepart.ImageAttachmentMessageAccessory;
import com.discord.chat.presentation.message.messagepart.MessageAttachmentAccessory;
import com.discord.chat.presentation.message.messagepart.VideoAttachmentMessageAccessory;
import com.discord.chat.presentation.message.view.MediaImageView;
import com.discord.chat.presentation.message.view.MediaVideoView;
import com.discord.chat.presentation.message.view.mosaic_recycler.AttachmentMediaMosaicAdapter;
import com.discord.chat.presentation.message.viewholder.MessagePartViewHolder;
import com.discord.chat.presentation.message.viewholder.mosaicitem.attachments.MosaicItemMessageAttachmentImageViewHolder;
import com.discord.chat.presentation.message.viewholder.mosaicitem.attachments.MosaicItemMessageAttachmentVideoViewHolder;
import com.discord.recycler_view.utils.ItemDiffer;
import com.facebook.react.modules.dialog.AlertFragment;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000X\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0012\n\u0002\u0010!\n\u0002\b\u0004\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001Bg\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0018\u0010\b\u001a\u0014\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u00070\u0005\u0012\u0014\u0010\n\u001a\u0010\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0007\u0018\u00010\t\u0012\u0012\u0010\u000b\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\t\u0012\u0012\u0010\r\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u00070\t¢\u0006\u0004\b\u000e\u0010\u000fJ%\u0010\u0013\u001a\u00020\u00072\f\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00060\u00102\u0006\u0010\u0012\u001a\u00020\fH\u0007¢\u0006\u0004\b\u0013\u0010\u0014J\u0015\u0010\u0017\u001a\u00020\u00072\u0006\u0010\u0016\u001a\u00020\u0015¢\u0006\u0004\b\u0017\u0010\u0018J\u0015\u0010\u001b\u001a\u00020\u00072\u0006\u0010\u001a\u001a\u00020\u0019¢\u0006\u0004\b\u001b\u0010\u001cJ\u001f\u0010 \u001a\u00020\u00022\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u0010\u001f\u001a\u00020\u0019H\u0016¢\u0006\u0004\b \u0010!J\u001f\u0010$\u001a\u00020\u00072\u0006\u0010\"\u001a\u00020\u00022\u0006\u0010#\u001a\u00020\u0019H\u0016¢\u0006\u0004\b$\u0010%J\u0017\u0010&\u001a\u00020\u00192\u0006\u0010#\u001a\u00020\u0019H\u0016¢\u0006\u0004\b&\u0010'J\u000f\u0010(\u001a\u00020\u0019H\u0016¢\u0006\u0004\b(\u0010)R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0004\u0010*R&\u0010\b\u001a\u0014\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u00070\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\b\u0010+R\"\u0010\n\u001a\u0010\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0007\u0018\u00010\t8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\n\u0010,R \u0010\u000b\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\t8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u000b\u0010,R \u0010\r\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\u00070\t8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\r\u0010,R\u0018\u0010\u0016\u001a\u0004\u0018\u00010\u00158\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010-R\u0016\u0010\u0012\u001a\u00020\f8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010.R\u0016\u0010\u001a\u001a\u00020\u00198\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001a\u0010/R\u001d\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u0006008\u0006¢\u0006\f\n\u0004\b\u0011\u00101\u001a\u0004\b2\u00103¨\u00064"}, d2 = {"Lcom/discord/chat/presentation/message/view/mosaic_recycler/AttachmentMediaMosaicAdapter;", "Landroidx/recyclerview/widget/RecyclerView$Adapter;", "Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;", "Landroid/content/Context;", "context", "Lkotlin/Function2;", "Lcom/discord/chat/presentation/message/messagepart/MessageAttachmentAccessory;", "", "onItemClicked", "Lkotlin/Function1;", "onItemLongClicked", "onItemSpoilerClicked", "", "onItemObscureToggle", "<init>", "(Landroid/content/Context;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;)V", "", AlertFragment.ARG_ITEMS, "shouldAutoPlayGifs", "setMediaItems", "(Ljava/util/List;Z)V", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "eventHandler", "setChatEventHandler", "(Lcom/discord/chat/presentation/events/ChatEventHandler;)V", "", "constrainedWidth", "setConstrainedWidth", "(I)V", "Landroid/view/ViewGroup;", "parent", "viewType", "onCreateViewHolder", "(Landroid/view/ViewGroup;I)Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;", "holder", ViewProps.POSITION, "onBindViewHolder", "(Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;I)V", "getItemViewType", "(I)I", "getItemCount", "()I", "Landroid/content/Context;", "Lkotlin/jvm/functions/Function2;", "Lkotlin/jvm/functions/Function1;", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "Z", "I", "", "Ljava/util/List;", "getItems", "()Ljava/util/List;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AttachmentMediaMosaicAdapter extends RecyclerView.Adapter {
    private int constrainedWidth;
    @NotNull
    private final Context context;
    private ChatEventHandler eventHandler;
    @NotNull
    private final List<MessageAttachmentAccessory> items;
    @NotNull
    private final Function2<MessageAttachmentAccessory, MessagePartViewHolder, Unit> onItemClicked;
    private final Function1<MessageAttachmentAccessory, Unit> onItemLongClicked;
    @NotNull
    private final Function1<Boolean, Unit> onItemObscureToggle;
    @NotNull
    private final Function1<MessageAttachmentAccessory, Unit> onItemSpoilerClicked;
    private boolean shouldAutoPlayGifs;

    /* JADX WARN: Multi-variable type inference failed */
    public AttachmentMediaMosaicAdapter(@NotNull Context context, @NotNull Function2<? super MessageAttachmentAccessory, ? super MessagePartViewHolder, Unit> onItemClicked, Function1<? super MessageAttachmentAccessory, Unit> function1, @NotNull Function1<? super MessageAttachmentAccessory, Unit> onItemSpoilerClicked, @NotNull Function1<? super Boolean, Unit> onItemObscureToggle) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(onItemClicked, "onItemClicked");
        Intrinsics.checkNotNullParameter(onItemSpoilerClicked, "onItemSpoilerClicked");
        Intrinsics.checkNotNullParameter(onItemObscureToggle, "onItemObscureToggle");
        this.context = context;
        this.onItemClicked = onItemClicked;
        this.onItemLongClicked = function1;
        this.onItemSpoilerClicked = onItemSpoilerClicked;
        this.onItemObscureToggle = onItemObscureToggle;
        this.items = new ArrayList();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void onBindViewHolder$lambda$0(AttachmentMediaMosaicAdapter attachmentMediaMosaicAdapter, ImageAttachmentMessageAccessory imageAttachmentMessageAccessory, MessagePartViewHolder messagePartViewHolder, View view) {
        attachmentMediaMosaicAdapter.onItemClicked.invoke(imageAttachmentMessageAccessory, messagePartViewHolder);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean onBindViewHolder$lambda$1(AttachmentMediaMosaicAdapter attachmentMediaMosaicAdapter, ImageAttachmentMessageAccessory imageAttachmentMessageAccessory, View view) {
        Function1<MessageAttachmentAccessory, Unit> function1 = attachmentMediaMosaicAdapter.onItemLongClicked;
        if (function1 != null) {
            function1.invoke(imageAttachmentMessageAccessory);
            return false;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$2(AttachmentMediaMosaicAdapter attachmentMediaMosaicAdapter, ImageAttachmentMessageAccessory imageAttachmentMessageAccessory) {
        attachmentMediaMosaicAdapter.onItemSpoilerClicked.invoke(imageAttachmentMessageAccessory);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$3(AttachmentMediaMosaicAdapter attachmentMediaMosaicAdapter, boolean z10) {
        attachmentMediaMosaicAdapter.onItemObscureToggle.invoke(Boolean.valueOf(z10));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void onBindViewHolder$lambda$4(AttachmentMediaMosaicAdapter attachmentMediaMosaicAdapter, VideoAttachmentMessageAccessory videoAttachmentMessageAccessory, MessagePartViewHolder messagePartViewHolder, View view) {
        attachmentMediaMosaicAdapter.onItemClicked.invoke(videoAttachmentMessageAccessory, messagePartViewHolder);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean onBindViewHolder$lambda$5(AttachmentMediaMosaicAdapter attachmentMediaMosaicAdapter, VideoAttachmentMessageAccessory videoAttachmentMessageAccessory, View view) {
        Function1<MessageAttachmentAccessory, Unit> function1 = attachmentMediaMosaicAdapter.onItemLongClicked;
        if (function1 != null) {
            function1.invoke(videoAttachmentMessageAccessory);
            return false;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$6(AttachmentMediaMosaicAdapter attachmentMediaMosaicAdapter, VideoAttachmentMessageAccessory videoAttachmentMessageAccessory) {
        attachmentMediaMosaicAdapter.onItemSpoilerClicked.invoke(videoAttachmentMessageAccessory);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onBindViewHolder$lambda$7(AttachmentMediaMosaicAdapter attachmentMediaMosaicAdapter, boolean z10) {
        attachmentMediaMosaicAdapter.onItemObscureToggle.invoke(Boolean.valueOf(z10));
        return Unit.f33074a;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.items.size();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemViewType(int i10) {
        MessageAttachmentAccessory messageAttachmentAccessory = this.items.get(i10);
        if (messageAttachmentAccessory instanceof ImageAttachmentMessageAccessory) {
            return 49;
        }
        if (messageAttachmentAccessory instanceof VideoAttachmentMessageAccessory) {
            return 50;
        }
        throw new IllegalStateException(("Invalid accessory type: " + i10).toString());
    }

    @NotNull
    public final List<MessageAttachmentAccessory> getItems() {
        return this.items;
    }

    public final void setChatEventHandler(@NotNull ChatEventHandler eventHandler) {
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        this.eventHandler = eventHandler;
    }

    public final void setConstrainedWidth(int i10) {
        this.constrainedWidth = i10;
    }

    @SuppressLint({"NotifyDataSetChanged"})
    public final void setMediaItems(@NotNull List<? extends MessageAttachmentAccessory> items, boolean z10) {
        Intrinsics.checkNotNullParameter(items, "items");
        e.C0069e c10 = e.c(new ItemDiffer(this.items, items), false);
        Intrinsics.checkNotNullExpressionValue(c10, "calculateDiff(...)");
        this.items.clear();
        this.items.addAll(items);
        if (this.shouldAutoPlayGifs != z10) {
            this.shouldAutoPlayGifs = z10;
            notifyDataSetChanged();
            return;
        }
        c10.c(this);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public void onBindViewHolder(@NotNull final MessagePartViewHolder holder, int i10) {
        Intrinsics.checkNotNullParameter(holder, "holder");
        ChatEventHandler chatEventHandler = this.eventHandler;
        if (chatEventHandler == null) {
            return;
        }
        if (holder instanceof MosaicItemMessageAttachmentImageViewHolder) {
            MessageAttachmentAccessory messageAttachmentAccessory = this.items.get(i10);
            Intrinsics.checkNotNull(messageAttachmentAccessory, "null cannot be cast to non-null type com.discord.chat.presentation.message.messagepart.ImageAttachmentMessageAccessory");
            final ImageAttachmentMessageAccessory imageAttachmentMessageAccessory = (ImageAttachmentMessageAccessory) messageAttachmentAccessory;
            ((MosaicItemMessageAttachmentImageViewHolder) holder).bindAttachment(chatEventHandler, imageAttachmentMessageAccessory, getItemCount() == 1, new View.OnClickListener() { // from class: c7.a
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    AttachmentMediaMosaicAdapter.onBindViewHolder$lambda$0(AttachmentMediaMosaicAdapter.this, imageAttachmentMessageAccessory, holder, view);
                }
            }, new View.OnLongClickListener() { // from class: c7.b
                @Override // android.view.View.OnLongClickListener
                public final boolean onLongClick(View view) {
                    boolean onBindViewHolder$lambda$1;
                    onBindViewHolder$lambda$1 = AttachmentMediaMosaicAdapter.onBindViewHolder$lambda$1(AttachmentMediaMosaicAdapter.this, imageAttachmentMessageAccessory, view);
                    return onBindViewHolder$lambda$1;
                }
            }, new Function0() { // from class: c7.c
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit onBindViewHolder$lambda$2;
                    onBindViewHolder$lambda$2 = AttachmentMediaMosaicAdapter.onBindViewHolder$lambda$2(AttachmentMediaMosaicAdapter.this, imageAttachmentMessageAccessory);
                    return onBindViewHolder$lambda$2;
                }
            }, new Function1() { // from class: c7.d
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit onBindViewHolder$lambda$3;
                    onBindViewHolder$lambda$3 = AttachmentMediaMosaicAdapter.onBindViewHolder$lambda$3(AttachmentMediaMosaicAdapter.this, ((Boolean) obj).booleanValue());
                    return onBindViewHolder$lambda$3;
                }
            }, this.shouldAutoPlayGifs);
        } else if (holder instanceof MosaicItemMessageAttachmentVideoViewHolder) {
            MessageAttachmentAccessory messageAttachmentAccessory2 = this.items.get(i10);
            Intrinsics.checkNotNull(messageAttachmentAccessory2, "null cannot be cast to non-null type com.discord.chat.presentation.message.messagepart.VideoAttachmentMessageAccessory");
            final VideoAttachmentMessageAccessory videoAttachmentMessageAccessory = (VideoAttachmentMessageAccessory) messageAttachmentAccessory2;
            ((MosaicItemMessageAttachmentVideoViewHolder) holder).bindAttachment(chatEventHandler, videoAttachmentMessageAccessory, getItemCount() == 1, new View.OnClickListener() { // from class: c7.e
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    AttachmentMediaMosaicAdapter.onBindViewHolder$lambda$4(AttachmentMediaMosaicAdapter.this, videoAttachmentMessageAccessory, holder, view);
                }
            }, new View.OnLongClickListener() { // from class: c7.f
                @Override // android.view.View.OnLongClickListener
                public final boolean onLongClick(View view) {
                    boolean onBindViewHolder$lambda$5;
                    onBindViewHolder$lambda$5 = AttachmentMediaMosaicAdapter.onBindViewHolder$lambda$5(AttachmentMediaMosaicAdapter.this, videoAttachmentMessageAccessory, view);
                    return onBindViewHolder$lambda$5;
                }
            }, new Function0() { // from class: c7.g
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit onBindViewHolder$lambda$6;
                    onBindViewHolder$lambda$6 = AttachmentMediaMosaicAdapter.onBindViewHolder$lambda$6(AttachmentMediaMosaicAdapter.this, videoAttachmentMessageAccessory);
                    return onBindViewHolder$lambda$6;
                }
            }, new Function1() { // from class: c7.h
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit onBindViewHolder$lambda$7;
                    onBindViewHolder$lambda$7 = AttachmentMediaMosaicAdapter.onBindViewHolder$lambda$7(AttachmentMediaMosaicAdapter.this, ((Boolean) obj).booleanValue());
                    return onBindViewHolder$lambda$7;
                }
            });
        } else {
            Class<?> cls = holder.getClass();
            throw new IllegalStateException(("Invalid view holder type " + cls).toString());
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    @NotNull
    public MessagePartViewHolder onCreateViewHolder(@NotNull ViewGroup parent, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        if (i10 != 49) {
            if (i10 == 50) {
                return new MosaicItemMessageAttachmentVideoViewHolder(new MediaVideoView(this.context, null, 2, null));
            }
            throw new IllegalStateException(("Invalid accessory type: " + i10).toString());
        }
        return new MosaicItemMessageAttachmentImageViewHolder(new MediaImageView(this.context, null, 2, null));
    }
}
