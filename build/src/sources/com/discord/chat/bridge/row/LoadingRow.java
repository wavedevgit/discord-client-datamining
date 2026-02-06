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
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 +2\u00020\u0001:\u0002*+B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t¢\u0006\u0004\b\n\u0010\u000bB?\b\u0010\u0012\u0006\u0010\f\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\n\u0010\u000fJ\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0019\u001a\u00020\u0007HÆ\u0003J\t\u0010\u001a\u001a\u00020\tHÆ\u0003J1\u0010\u001b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\tHÆ\u0001J\u0013\u0010\u001c\u001a\u00020\t2\b\u0010\u001d\u001a\u0004\u0018\u00010\u001eHÖ\u0003J\t\u0010\u001f\u001a\u00020\u0003HÖ\u0001J\t\u0010 \u001a\u00020!HÖ\u0001J%\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020\u00002\u0006\u0010%\u001a\u00020&2\u0006\u0010'\u001a\u00020(H\u0001¢\u0006\u0002\b)R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\u0016¨\u0006,"}, d2 = {"Lcom/discord/chat/bridge/row/LoadingRow;", "Lcom/discord/chat/bridge/row/Row;", "index", "", "changeType", "Lcom/discord/chat/bridge/ChangeType;", "button", "Lcom/discord/chat/bridge/row/LoadMoreButton;", "isLoading", "", "<init>", "(ILcom/discord/chat/bridge/ChangeType;Lcom/discord/chat/bridge/row/LoadMoreButton;Z)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILcom/discord/chat/bridge/ChangeType;Lcom/discord/chat/bridge/row/LoadMoreButton;ZLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getIndex", "()I", "getChangeType", "()Lcom/discord/chat/bridge/ChangeType;", "getButton", "()Lcom/discord/chat/bridge/row/LoadMoreButton;", "()Z", "component1", "component2", "component3", "component4", "copy", "equals", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class LoadingRow extends Row {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final LoadMoreButton button;
    @NotNull
    private final ChangeType changeType;
    private final int index;
    private final boolean isLoading;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/row/LoadingRow$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/row/LoadingRow;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return LoadingRow$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ LoadingRow(int i10, int i11, ChangeType changeType, LoadMoreButton loadMoreButton, boolean z10, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, LoadingRow$$serializer.INSTANCE.getDescriptor());
        }
        this.index = i11;
        this.changeType = changeType;
        this.button = loadMoreButton;
        this.isLoading = z10;
    }

    public static /* synthetic */ LoadingRow copy$default(LoadingRow loadingRow, int i10, ChangeType changeType, LoadMoreButton loadMoreButton, boolean z10, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = loadingRow.index;
        }
        if ((i11 & 2) != 0) {
            changeType = loadingRow.changeType;
        }
        if ((i11 & 4) != 0) {
            loadMoreButton = loadingRow.button;
        }
        if ((i11 & 8) != 0) {
            z10 = loadingRow.isLoading;
        }
        return loadingRow.copy(i10, changeType, loadMoreButton, z10);
    }

    public static final /* synthetic */ void write$Self$chat_release(LoadingRow loadingRow, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, loadingRow.getIndex());
        compositeEncoder.s(serialDescriptor, 1, ChangeType.Serializer.INSTANCE, loadingRow.getChangeType());
        compositeEncoder.s(serialDescriptor, 2, LoadMoreButton$$serializer.INSTANCE, loadingRow.button);
        compositeEncoder.y(serialDescriptor, 3, loadingRow.isLoading);
    }

    public final int component1() {
        return this.index;
    }

    @NotNull
    public final ChangeType component2() {
        return this.changeType;
    }

    @NotNull
    public final LoadMoreButton component3() {
        return this.button;
    }

    public final boolean component4() {
        return this.isLoading;
    }

    @NotNull
    public final LoadingRow copy(int i10, @NotNull ChangeType changeType, @NotNull LoadMoreButton button, boolean z10) {
        Intrinsics.checkNotNullParameter(changeType, "changeType");
        Intrinsics.checkNotNullParameter(button, "button");
        return new LoadingRow(i10, changeType, button, z10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof LoadingRow) {
            LoadingRow loadingRow = (LoadingRow) obj;
            return this.index == loadingRow.index && this.changeType == loadingRow.changeType && Intrinsics.areEqual(this.button, loadingRow.button) && this.isLoading == loadingRow.isLoading;
        }
        return false;
    }

    @NotNull
    public final LoadMoreButton getButton() {
        return this.button;
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
        return (((((Integer.hashCode(this.index) * 31) + this.changeType.hashCode()) * 31) + this.button.hashCode()) * 31) + Boolean.hashCode(this.isLoading);
    }

    public final boolean isLoading() {
        return this.isLoading;
    }

    @NotNull
    public String toString() {
        int i10 = this.index;
        ChangeType changeType = this.changeType;
        LoadMoreButton loadMoreButton = this.button;
        boolean z10 = this.isLoading;
        return "LoadingRow(index=" + i10 + ", changeType=" + changeType + ", button=" + loadMoreButton + ", isLoading=" + z10 + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public LoadingRow(int i10, @NotNull ChangeType changeType, @NotNull LoadMoreButton button, boolean z10) {
        super(null);
        Intrinsics.checkNotNullParameter(changeType, "changeType");
        Intrinsics.checkNotNullParameter(button, "button");
        this.index = i10;
        this.changeType = changeType;
        this.button = button;
        this.isLoading = z10;
    }
}
