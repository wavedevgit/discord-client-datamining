package com.discord.chat.bridge.row;

import at.m;
import com.discord.chat.bridge.ChangeType;
import com.discord.chat.bridge.summaries.Summary;
import com.discord.chat.bridge.summaries.Summary$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import dt.h;
import dt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u001a\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 :2\u00020\u0001:\u00029:BS\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\u0006\u0010\t\u001a\u00020\u0005\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\u000f\u0010\u0010Bg\b\u0010\u0012\u0006\u0010\u0011\u001a\u00020\u0005\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\t\u001a\u00020\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013¢\u0006\u0004\b\u000f\u0010\u0014J\t\u0010\"\u001a\u00020\u0003HÆ\u0003J\t\u0010#\u001a\u00020\u0005HÆ\u0003J\t\u0010$\u001a\u00020\u0007HÆ\u0003J\t\u0010%\u001a\u00020\u0007HÆ\u0003J\t\u0010&\u001a\u00020\u0005HÆ\u0003J\u0010\u0010'\u001a\u0004\u0018\u00010\u000bHÆ\u0003¢\u0006\u0002\u0010\u001eJ\u0010\u0010(\u001a\u0004\u0018\u00010\u000bHÆ\u0003¢\u0006\u0002\u0010\u001eJ\u000b\u0010)\u001a\u0004\u0018\u00010\u000eHÆ\u0003Jd\u0010*\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\u00072\b\b\u0002\u0010\t\u001a\u00020\u00052\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000eHÆ\u0001¢\u0006\u0002\u0010+J\u0013\u0010,\u001a\u00020\u000b2\b\u0010-\u001a\u0004\u0018\u00010.HÖ\u0003J\t\u0010/\u001a\u00020\u0005HÖ\u0001J\t\u00100\u001a\u00020\u0007HÖ\u0001J%\u00101\u001a\u0002022\u0006\u00103\u001a\u00020\u00002\u0006\u00104\u001a\u0002052\u0006\u00106\u001a\u000207H\u0001¢\u0006\u0002\b8R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u001aR\u0011\u0010\b\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001aR\u0011\u0010\t\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u0018R\u0015\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\n\n\u0002\u0010\u001f\u001a\u0004\b\u001d\u0010\u001eR\u0015\u0010\f\u001a\u0004\u0018\u00010\u000b¢\u0006\n\n\u0002\u0010\u001f\u001a\u0004\b\f\u0010\u001eR\u0013\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\b\n\u0000\u001a\u0004\b \u0010!¨\u0006;"}, d2 = {"Lcom/discord/chat/bridge/row/SeparatorRow;", "Lcom/discord/chat/bridge/row/Row;", "changeType", "Lcom/discord/chat/bridge/ChangeType;", "index", "", "text", "", StackTraceHelper.ID_KEY, ViewProps.COLOR, "scrollTo", "", "isBeforeContent", "summary", "Lcom/discord/chat/bridge/summaries/Summary;", "<init>", "(Lcom/discord/chat/bridge/ChangeType;ILjava/lang/String;Ljava/lang/String;ILjava/lang/Boolean;Ljava/lang/Boolean;Lcom/discord/chat/bridge/summaries/Summary;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/chat/bridge/ChangeType;ILjava/lang/String;Ljava/lang/String;ILjava/lang/Boolean;Ljava/lang/Boolean;Lcom/discord/chat/bridge/summaries/Summary;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getChangeType", "()Lcom/discord/chat/bridge/ChangeType;", "getIndex", "()I", "getText", "()Ljava/lang/String;", "getId", "getColor", "getScrollTo", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getSummary", "()Lcom/discord/chat/bridge/summaries/Summary;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "copy", "(Lcom/discord/chat/bridge/ChangeType;ILjava/lang/String;Ljava/lang/String;ILjava/lang/Boolean;Ljava/lang/Boolean;Lcom/discord/chat/bridge/summaries/Summary;)Lcom/discord/chat/bridge/row/SeparatorRow;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SeparatorRow extends Row {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final ChangeType changeType;
    private final int color;
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f8274id;
    private final int index;
    private final Boolean isBeforeContent;
    private final Boolean scrollTo;
    private final Summary summary;
    @NotNull
    private final String text;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/row/SeparatorRow$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/row/SeparatorRow;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return SeparatorRow$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ SeparatorRow(int i10, ChangeType changeType, int i11, String str, String str2, int i12, Boolean bool, Boolean bool2, Summary summary, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (31 != (i10 & 31)) {
            v1.b(i10, 31, SeparatorRow$$serializer.INSTANCE.getDescriptor());
        }
        this.changeType = changeType;
        this.index = i11;
        this.text = str;
        this.f8274id = str2;
        this.color = i12;
        if ((i10 & 32) == 0) {
            this.scrollTo = null;
        } else {
            this.scrollTo = bool;
        }
        if ((i10 & 64) == 0) {
            this.isBeforeContent = null;
        } else {
            this.isBeforeContent = bool2;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.summary = null;
        } else {
            this.summary = summary;
        }
    }

    public static /* synthetic */ SeparatorRow copy$default(SeparatorRow separatorRow, ChangeType changeType, int i10, String str, String str2, int i11, Boolean bool, Boolean bool2, Summary summary, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            changeType = separatorRow.changeType;
        }
        if ((i12 & 2) != 0) {
            i10 = separatorRow.index;
        }
        if ((i12 & 4) != 0) {
            str = separatorRow.text;
        }
        if ((i12 & 8) != 0) {
            str2 = separatorRow.f8274id;
        }
        if ((i12 & 16) != 0) {
            i11 = separatorRow.color;
        }
        if ((i12 & 32) != 0) {
            bool = separatorRow.scrollTo;
        }
        if ((i12 & 64) != 0) {
            bool2 = separatorRow.isBeforeContent;
        }
        if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            summary = separatorRow.summary;
        }
        Boolean bool3 = bool2;
        Summary summary2 = summary;
        int i13 = i11;
        Boolean bool4 = bool;
        return separatorRow.copy(changeType, i10, str, str2, i13, bool4, bool3, summary2);
    }

    public static final /* synthetic */ void write$Self$chat_release(SeparatorRow separatorRow, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.D(serialDescriptor, 0, ChangeType.Serializer.INSTANCE, separatorRow.getChangeType());
        compositeEncoder.w(serialDescriptor, 1, separatorRow.getIndex());
        compositeEncoder.y(serialDescriptor, 2, separatorRow.text);
        compositeEncoder.y(serialDescriptor, 3, separatorRow.f8274id);
        compositeEncoder.w(serialDescriptor, 4, separatorRow.color);
        if (compositeEncoder.z(serialDescriptor, 5) || separatorRow.scrollTo != null) {
            compositeEncoder.s(serialDescriptor, 5, h.f20942a, separatorRow.scrollTo);
        }
        if (compositeEncoder.z(serialDescriptor, 6) || separatorRow.isBeforeContent != null) {
            compositeEncoder.s(serialDescriptor, 6, h.f20942a, separatorRow.isBeforeContent);
        }
        if (compositeEncoder.z(serialDescriptor, 7) || separatorRow.summary != null) {
            compositeEncoder.s(serialDescriptor, 7, Summary$$serializer.INSTANCE, separatorRow.summary);
        }
    }

    @NotNull
    public final ChangeType component1() {
        return this.changeType;
    }

    public final int component2() {
        return this.index;
    }

    @NotNull
    public final String component3() {
        return this.text;
    }

    @NotNull
    public final String component4() {
        return this.f8274id;
    }

    public final int component5() {
        return this.color;
    }

    public final Boolean component6() {
        return this.scrollTo;
    }

    public final Boolean component7() {
        return this.isBeforeContent;
    }

    public final Summary component8() {
        return this.summary;
    }

    @NotNull
    public final SeparatorRow copy(@NotNull ChangeType changeType, int i10, @NotNull String text, @NotNull String id2, int i11, Boolean bool, Boolean bool2, Summary summary) {
        Intrinsics.checkNotNullParameter(changeType, "changeType");
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(id2, "id");
        return new SeparatorRow(changeType, i10, text, id2, i11, bool, bool2, summary);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof SeparatorRow) {
            SeparatorRow separatorRow = (SeparatorRow) obj;
            return this.changeType == separatorRow.changeType && this.index == separatorRow.index && Intrinsics.areEqual(this.text, separatorRow.text) && Intrinsics.areEqual(this.f8274id, separatorRow.f8274id) && this.color == separatorRow.color && Intrinsics.areEqual(this.scrollTo, separatorRow.scrollTo) && Intrinsics.areEqual(this.isBeforeContent, separatorRow.isBeforeContent) && Intrinsics.areEqual(this.summary, separatorRow.summary);
        }
        return false;
    }

    @Override // com.discord.chat.bridge.row.Row
    @NotNull
    public ChangeType getChangeType() {
        return this.changeType;
    }

    public final int getColor() {
        return this.color;
    }

    @NotNull
    public final String getId() {
        return this.f8274id;
    }

    @Override // com.discord.chat.bridge.row.Row
    public int getIndex() {
        return this.index;
    }

    public final Boolean getScrollTo() {
        return this.scrollTo;
    }

    public final Summary getSummary() {
        return this.summary;
    }

    @NotNull
    public final String getText() {
        return this.text;
    }

    public int hashCode() {
        int hashCode = ((((((((this.changeType.hashCode() * 31) + Integer.hashCode(this.index)) * 31) + this.text.hashCode()) * 31) + this.f8274id.hashCode()) * 31) + Integer.hashCode(this.color)) * 31;
        Boolean bool = this.scrollTo;
        int hashCode2 = (hashCode + (bool == null ? 0 : bool.hashCode())) * 31;
        Boolean bool2 = this.isBeforeContent;
        int hashCode3 = (hashCode2 + (bool2 == null ? 0 : bool2.hashCode())) * 31;
        Summary summary = this.summary;
        return hashCode3 + (summary != null ? summary.hashCode() : 0);
    }

    public final Boolean isBeforeContent() {
        return this.isBeforeContent;
    }

    @NotNull
    public String toString() {
        ChangeType changeType = this.changeType;
        int i10 = this.index;
        String str = this.text;
        String str2 = this.f8274id;
        int i11 = this.color;
        Boolean bool = this.scrollTo;
        Boolean bool2 = this.isBeforeContent;
        Summary summary = this.summary;
        return "SeparatorRow(changeType=" + changeType + ", index=" + i10 + ", text=" + str + ", id=" + str2 + ", color=" + i11 + ", scrollTo=" + bool + ", isBeforeContent=" + bool2 + ", summary=" + summary + ")";
    }

    public /* synthetic */ SeparatorRow(ChangeType changeType, int i10, String str, String str2, int i11, Boolean bool, Boolean bool2, Summary summary, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(changeType, i10, str, str2, i11, (i12 & 32) != 0 ? null : bool, (i12 & 64) != 0 ? null : bool2, (i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : summary);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SeparatorRow(@NotNull ChangeType changeType, int i10, @NotNull String text, @NotNull String id2, int i11, Boolean bool, Boolean bool2, Summary summary) {
        super(null);
        Intrinsics.checkNotNullParameter(changeType, "changeType");
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(id2, "id");
        this.changeType = changeType;
        this.index = i10;
        this.text = text;
        this.f8274id = id2;
        this.color = i11;
        this.scrollTo = bool;
        this.isBeforeContent = bool2;
        this.summary = summary;
    }
}
