package com.discord.chat.bridge.row;

import com.discord.chat.bridge.ChangeType;
import ft.m;
import jt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 #2\u00020\u0001:\u0002\"#B\u0019\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007B-\b\u0010\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u0006\u0010\u000bJ\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u0012\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0016HÖ\u0003J\t\u0010\u0017\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0018\u001a\u00020\u0019HÖ\u0001J%\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00002\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020 H\u0001¢\u0006\u0002\b!R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000f¨\u0006$"}, d2 = {"Lcom/discord/chat/bridge/row/DeleteRow;", "Lcom/discord/chat/bridge/row/Row;", "index", "", "changeType", "Lcom/discord/chat/bridge/ChangeType;", "<init>", "(ILcom/discord/chat/bridge/ChangeType;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILcom/discord/chat/bridge/ChangeType;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getIndex", "()I", "getChangeType", "()Lcom/discord/chat/bridge/ChangeType;", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DeleteRow extends Row {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final ChangeType changeType;
    private final int index;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/row/DeleteRow$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/row/DeleteRow;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return DeleteRow$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ DeleteRow(int i10, int i11, ChangeType changeType, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (1 != (i10 & 1)) {
            v1.b(i10, 1, DeleteRow$$serializer.INSTANCE.getDescriptor());
        }
        this.index = i11;
        if ((i10 & 2) == 0) {
            this.changeType = ChangeType.DELETE;
        } else {
            this.changeType = changeType;
        }
    }

    public static /* synthetic */ DeleteRow copy$default(DeleteRow deleteRow, int i10, ChangeType changeType, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = deleteRow.index;
        }
        if ((i11 & 2) != 0) {
            changeType = deleteRow.changeType;
        }
        return deleteRow.copy(i10, changeType);
    }

    public static final /* synthetic */ void write$Self$chat_release(DeleteRow deleteRow, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, deleteRow.getIndex());
        if (compositeEncoder.A(serialDescriptor, 1) || deleteRow.getChangeType() != ChangeType.DELETE) {
            compositeEncoder.s(serialDescriptor, 1, ChangeType.Serializer.INSTANCE, deleteRow.getChangeType());
        }
    }

    public final int component1() {
        return this.index;
    }

    @NotNull
    public final ChangeType component2() {
        return this.changeType;
    }

    @NotNull
    public final DeleteRow copy(int i10, @NotNull ChangeType changeType) {
        Intrinsics.checkNotNullParameter(changeType, "changeType");
        return new DeleteRow(i10, changeType);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof DeleteRow) {
            DeleteRow deleteRow = (DeleteRow) obj;
            return this.index == deleteRow.index && this.changeType == deleteRow.changeType;
        }
        return false;
    }

    @Override // com.discord.chat.bridge.row.Row
    @NotNull
    public ChangeType getChangeType() {
        return this.changeType;
    }

    @Override // com.discord.chat.bridge.row.Row
    public int getIndex() {
        return this.index;
    }

    public int hashCode() {
        return (Integer.hashCode(this.index) * 31) + this.changeType.hashCode();
    }

    @NotNull
    public String toString() {
        int i10 = this.index;
        ChangeType changeType = this.changeType;
        return "DeleteRow(index=" + i10 + ", changeType=" + changeType + ")";
    }

    public /* synthetic */ DeleteRow(int i10, ChangeType changeType, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, (i11 & 2) != 0 ? ChangeType.DELETE : changeType);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public DeleteRow(int i10, @NotNull ChangeType changeType) {
        super(null);
        Intrinsics.checkNotNullParameter(changeType, "changeType");
        this.index = i10;
        this.changeType = changeType;
    }
}
