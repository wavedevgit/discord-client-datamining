package com.discord.chat.presentation.list;

import com.discord.chat.presentation.list.item.PortalViewChatListItem;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\n\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u0019\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u000b\u0010\f\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\r\u001a\u00020\u0005HÆ\u0003J\u001f\u0010\u000e\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012HÖ\u0003J\t\u0010\u0013\u001a\u00020\u0005HÖ\u0001J\t\u0010\u0014\u001a\u00020\u0015HÖ\u0001R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u0016"}, d2 = {"Lcom/discord/chat/presentation/list/PortalViewUpdate;", "Lcom/discord/chat/presentation/list/ChannelChatListAdapterUpdate;", "portalChatListItem", "Lcom/discord/chat/presentation/list/item/PortalViewChatListItem;", "updateId", "", "<init>", "(Lcom/discord/chat/presentation/list/item/PortalViewChatListItem;I)V", "getPortalChatListItem", "()Lcom/discord/chat/presentation/list/item/PortalViewChatListItem;", "getUpdateId", "()I", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PortalViewUpdate extends ChannelChatListAdapterUpdate {
    private final PortalViewChatListItem portalChatListItem;
    private final int updateId;

    public PortalViewUpdate(PortalViewChatListItem portalViewChatListItem, int i10) {
        super(i10, new Function1() { // from class: com.discord.chat.presentation.list.x
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit _init_$lambda$0;
                _init_$lambda$0 = PortalViewUpdate._init_$lambda$0(((Boolean) obj).booleanValue());
                return _init_$lambda$0;
            }
        }, new Function0() { // from class: com.discord.chat.presentation.list.y
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f33298a;
                return unit;
            }
        }, null);
        this.portalChatListItem = portalViewChatListItem;
        this.updateId = i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit _init_$lambda$0(boolean z10) {
        return Unit.f33298a;
    }

    public static /* synthetic */ PortalViewUpdate copy$default(PortalViewUpdate portalViewUpdate, PortalViewChatListItem portalViewChatListItem, int i10, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            portalViewChatListItem = portalViewUpdate.portalChatListItem;
        }
        if ((i11 & 2) != 0) {
            i10 = portalViewUpdate.updateId;
        }
        return portalViewUpdate.copy(portalViewChatListItem, i10);
    }

    public final PortalViewChatListItem component1() {
        return this.portalChatListItem;
    }

    public final int component2() {
        return this.updateId;
    }

    @NotNull
    public final PortalViewUpdate copy(PortalViewChatListItem portalViewChatListItem, int i10) {
        return new PortalViewUpdate(portalViewChatListItem, i10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof PortalViewUpdate) {
            PortalViewUpdate portalViewUpdate = (PortalViewUpdate) obj;
            return Intrinsics.areEqual(this.portalChatListItem, portalViewUpdate.portalChatListItem) && this.updateId == portalViewUpdate.updateId;
        }
        return false;
    }

    public final PortalViewChatListItem getPortalChatListItem() {
        return this.portalChatListItem;
    }

    @Override // com.discord.chat.presentation.list.ChannelChatListAdapterUpdate
    public int getUpdateId() {
        return this.updateId;
    }

    public int hashCode() {
        PortalViewChatListItem portalViewChatListItem = this.portalChatListItem;
        return ((portalViewChatListItem == null ? 0 : portalViewChatListItem.hashCode()) * 31) + Integer.hashCode(this.updateId);
    }

    @NotNull
    public String toString() {
        PortalViewChatListItem portalViewChatListItem = this.portalChatListItem;
        int i10 = this.updateId;
        return "PortalViewUpdate(portalChatListItem=" + portalViewChatListItem + ", updateId=" + i10 + ")";
    }
}
