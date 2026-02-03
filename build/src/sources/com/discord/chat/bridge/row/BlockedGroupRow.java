package com.discord.chat.bridge.row;

import bt.f;
import bt.v1;
import com.discord.chat.bridge.ChangeType;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.List;
import jr.l;
import jr.o;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import ys.m;
@m
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u001c\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 ?2\u00020\u0001:\u0002>?BY\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\t\u001a\u00020\n\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\u0006\u0010\r\u001a\u00020\u000e\u0012\u0010\b\u0002\u0010\u000f\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010\u0010¢\u0006\u0004\b\u0012\u0010\u0013Bq\b\u0010\u0012\u0006\u0010\u0014\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\u000e\u0010\u000f\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010\u0010\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0016¢\u0006\u0004\b\u0012\u0010\u0017J\t\u0010'\u001a\u00020\u0003HÆ\u0003J\t\u0010(\u001a\u00020\u0005HÆ\u0003J\t\u0010)\u001a\u00020\u0003HÆ\u0003J\t\u0010*\u001a\u00020\u0003HÆ\u0003J\t\u0010+\u001a\u00020\u0003HÆ\u0003J\t\u0010,\u001a\u00020\nHÆ\u0003J\t\u0010-\u001a\u00020\fHÆ\u0003J\t\u0010.\u001a\u00020\u000eHÆ\u0003J\u0011\u0010/\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010\u0010HÆ\u0003Jk\u00100\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00032\b\b\u0002\u0010\u0007\u001a\u00020\u00032\b\b\u0002\u0010\b\u001a\u00020\u00032\b\b\u0002\u0010\t\u001a\u00020\n2\b\b\u0002\u0010\u000b\u001a\u00020\f2\b\b\u0002\u0010\r\u001a\u00020\u000e2\u0010\b\u0002\u0010\u000f\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010\u0010HÆ\u0001J\u0013\u00101\u001a\u00020\f2\b\u00102\u001a\u0004\u0018\u000103HÖ\u0003J\t\u00104\u001a\u00020\u0003HÖ\u0001J\t\u00105\u001a\u00020\nHÖ\u0001J%\u00106\u001a\u0002072\u0006\u00108\u001a\u00020\u00002\u0006\u00109\u001a\u00020:2\u0006\u0010;\u001a\u00020<H\u0001¢\u0006\u0002\b=R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u001bR\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u0019R\u0011\u0010\u0007\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u0019R\u0011\u0010\b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u0019R\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010 R\u0011\u0010\u000b\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\"R\u0011\u0010\r\u001a\u00020\u000e¢\u0006\b\n\u0000\u001a\u0004\b#\u0010$R\u0019\u0010\u000f\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010\u0010¢\u0006\b\n\u0000\u001a\u0004\b%\u0010&¨\u0006@"}, d2 = {"Lcom/discord/chat/bridge/row/BlockedGroupRow;", "Lcom/discord/chat/bridge/row/Row;", "index", "", "changeType", "Lcom/discord/chat/bridge/ChangeType;", ViewProps.COLOR, ViewProps.BORDER_COLOR, ViewProps.BACKGROUND_COLOR, "text", "", "revealed", "", "button", "Lcom/discord/chat/bridge/row/BlockedGroupButton;", "content", "", "Lcom/discord/chat/bridge/row/BlockedGroupContent;", "<init>", "(ILcom/discord/chat/bridge/ChangeType;IIILjava/lang/String;ZLcom/discord/chat/bridge/row/BlockedGroupButton;Ljava/util/List;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILcom/discord/chat/bridge/ChangeType;IIILjava/lang/String;ZLcom/discord/chat/bridge/row/BlockedGroupButton;Ljava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getIndex", "()I", "getChangeType", "()Lcom/discord/chat/bridge/ChangeType;", "getColor", "getBorderColor", "getBackgroundColor", "getText", "()Ljava/lang/String;", "getRevealed", "()Z", "getButton", "()Lcom/discord/chat/bridge/row/BlockedGroupButton;", "getContent", "()Ljava/util/List;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "copy", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BlockedGroupRow extends Row {
    private final int backgroundColor;
    private final int borderColor;
    @NotNull
    private final BlockedGroupButton button;
    @NotNull
    private final ChangeType changeType;
    private final int color;
    private final List<BlockedGroupContent> content;
    private final int index;
    private final boolean revealed;
    @NotNull
    private final String text;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, null, null, null, null, null, null, l.a(o.f32182e, new Function0() { // from class: com.discord.chat.bridge.row.a
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = BlockedGroupRow._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    })};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/row/BlockedGroupRow$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/row/BlockedGroupRow;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return BlockedGroupRow$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ BlockedGroupRow(int i10, int i11, ChangeType changeType, int i12, int i13, int i14, String str, boolean z10, BlockedGroupButton blockedGroupButton, List list, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (255 != (i10 & SetSpanOperation.SPAN_MAX_PRIORITY)) {
            v1.b(i10, SetSpanOperation.SPAN_MAX_PRIORITY, BlockedGroupRow$$serializer.INSTANCE.getDescriptor());
        }
        this.index = i11;
        this.changeType = changeType;
        this.color = i12;
        this.borderColor = i13;
        this.backgroundColor = i14;
        this.text = str;
        this.revealed = z10;
        this.button = blockedGroupButton;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.content = null;
        } else {
            this.content = list;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new f(BlockedGroupContent$$serializer.INSTANCE);
    }

    public static /* synthetic */ BlockedGroupRow copy$default(BlockedGroupRow blockedGroupRow, int i10, ChangeType changeType, int i11, int i12, int i13, String str, boolean z10, BlockedGroupButton blockedGroupButton, List list, int i14, Object obj) {
        if ((i14 & 1) != 0) {
            i10 = blockedGroupRow.index;
        }
        if ((i14 & 2) != 0) {
            changeType = blockedGroupRow.changeType;
        }
        if ((i14 & 4) != 0) {
            i11 = blockedGroupRow.color;
        }
        if ((i14 & 8) != 0) {
            i12 = blockedGroupRow.borderColor;
        }
        if ((i14 & 16) != 0) {
            i13 = blockedGroupRow.backgroundColor;
        }
        if ((i14 & 32) != 0) {
            str = blockedGroupRow.text;
        }
        if ((i14 & 64) != 0) {
            z10 = blockedGroupRow.revealed;
        }
        if ((i14 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            blockedGroupButton = blockedGroupRow.button;
        }
        List<BlockedGroupContent> list2 = list;
        if ((i14 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            list2 = blockedGroupRow.content;
        }
        BlockedGroupButton blockedGroupButton2 = blockedGroupButton;
        List list3 = list2;
        String str2 = str;
        boolean z11 = z10;
        int i15 = i13;
        int i16 = i11;
        return blockedGroupRow.copy(i10, changeType, i16, i12, i15, str2, z11, blockedGroupButton2, list3);
    }

    public static final /* synthetic */ void write$Self$chat_release(BlockedGroupRow blockedGroupRow, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.v(serialDescriptor, 0, blockedGroupRow.getIndex());
        compositeEncoder.m(serialDescriptor, 1, ChangeType.Serializer.INSTANCE, blockedGroupRow.getChangeType());
        compositeEncoder.v(serialDescriptor, 2, blockedGroupRow.color);
        compositeEncoder.v(serialDescriptor, 3, blockedGroupRow.borderColor);
        compositeEncoder.v(serialDescriptor, 4, blockedGroupRow.backgroundColor);
        compositeEncoder.x(serialDescriptor, 5, blockedGroupRow.text);
        compositeEncoder.w(serialDescriptor, 6, blockedGroupRow.revealed);
        compositeEncoder.m(serialDescriptor, 7, BlockedGroupButton$$serializer.INSTANCE, blockedGroupRow.button);
        if (compositeEncoder.y(serialDescriptor, 8) || blockedGroupRow.content != null) {
            compositeEncoder.B(serialDescriptor, 8, (ys.o) lazyArr[8].getValue(), blockedGroupRow.content);
        }
    }

    public final int component1() {
        return this.index;
    }

    @NotNull
    public final ChangeType component2() {
        return this.changeType;
    }

    public final int component3() {
        return this.color;
    }

    public final int component4() {
        return this.borderColor;
    }

    public final int component5() {
        return this.backgroundColor;
    }

    @NotNull
    public final String component6() {
        return this.text;
    }

    public final boolean component7() {
        return this.revealed;
    }

    @NotNull
    public final BlockedGroupButton component8() {
        return this.button;
    }

    public final List<BlockedGroupContent> component9() {
        return this.content;
    }

    @NotNull
    public final BlockedGroupRow copy(int i10, @NotNull ChangeType changeType, int i11, int i12, int i13, @NotNull String text, boolean z10, @NotNull BlockedGroupButton button, List<BlockedGroupContent> list) {
        Intrinsics.checkNotNullParameter(changeType, "changeType");
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(button, "button");
        return new BlockedGroupRow(i10, changeType, i11, i12, i13, text, z10, button, list);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof BlockedGroupRow) {
            BlockedGroupRow blockedGroupRow = (BlockedGroupRow) obj;
            return this.index == blockedGroupRow.index && this.changeType == blockedGroupRow.changeType && this.color == blockedGroupRow.color && this.borderColor == blockedGroupRow.borderColor && this.backgroundColor == blockedGroupRow.backgroundColor && Intrinsics.areEqual(this.text, blockedGroupRow.text) && this.revealed == blockedGroupRow.revealed && Intrinsics.areEqual(this.button, blockedGroupRow.button) && Intrinsics.areEqual(this.content, blockedGroupRow.content);
        }
        return false;
    }

    public final int getBackgroundColor() {
        return this.backgroundColor;
    }

    public final int getBorderColor() {
        return this.borderColor;
    }

    @NotNull
    public final BlockedGroupButton getButton() {
        return this.button;
    }

    @Override // com.discord.chat.bridge.row.Row
    @NotNull
    public ChangeType getChangeType() {
        return this.changeType;
    }

    public final int getColor() {
        return this.color;
    }

    public final List<BlockedGroupContent> getContent() {
        return this.content;
    }

    @Override // com.discord.chat.bridge.row.Row
    public int getIndex() {
        return this.index;
    }

    public final boolean getRevealed() {
        return this.revealed;
    }

    @NotNull
    public final String getText() {
        return this.text;
    }

    public int hashCode() {
        int hashCode = ((((((((((((((Integer.hashCode(this.index) * 31) + this.changeType.hashCode()) * 31) + Integer.hashCode(this.color)) * 31) + Integer.hashCode(this.borderColor)) * 31) + Integer.hashCode(this.backgroundColor)) * 31) + this.text.hashCode()) * 31) + Boolean.hashCode(this.revealed)) * 31) + this.button.hashCode()) * 31;
        List<BlockedGroupContent> list = this.content;
        return hashCode + (list == null ? 0 : list.hashCode());
    }

    @NotNull
    public String toString() {
        int i10 = this.index;
        ChangeType changeType = this.changeType;
        int i11 = this.color;
        int i12 = this.borderColor;
        int i13 = this.backgroundColor;
        String str = this.text;
        boolean z10 = this.revealed;
        BlockedGroupButton blockedGroupButton = this.button;
        List<BlockedGroupContent> list = this.content;
        return "BlockedGroupRow(index=" + i10 + ", changeType=" + changeType + ", color=" + i11 + ", borderColor=" + i12 + ", backgroundColor=" + i13 + ", text=" + str + ", revealed=" + z10 + ", button=" + blockedGroupButton + ", content=" + list + ")";
    }

    public /* synthetic */ BlockedGroupRow(int i10, ChangeType changeType, int i11, int i12, int i13, String str, boolean z10, BlockedGroupButton blockedGroupButton, List list, int i14, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, changeType, i11, i12, i13, str, z10, blockedGroupButton, (i14 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : list);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public BlockedGroupRow(int i10, @NotNull ChangeType changeType, int i11, int i12, int i13, @NotNull String text, boolean z10, @NotNull BlockedGroupButton button, List<BlockedGroupContent> list) {
        super(null);
        Intrinsics.checkNotNullParameter(changeType, "changeType");
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(button, "button");
        this.index = i10;
        this.changeType = changeType;
        this.color = i11;
        this.borderColor = i12;
        this.backgroundColor = i13;
        this.text = text;
        this.revealed = z10;
        this.button = button;
        this.content = list;
    }
}
