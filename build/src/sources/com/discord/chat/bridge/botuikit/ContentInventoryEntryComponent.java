package com.discord.chat.bridge.botuikit;

import com.facebook.react.devsupport.StackTraceHelper;
import dt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@at.m
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 '2\u00020\u0001:\u0002&'B#\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\b\u0010\tB7\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\b\u0010\rJ\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0005HÆ\u0003J\u000b\u0010\u0016\u001a\u0004\u0018\u00010\u0007HÆ\u0003J)\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u001bHÖ\u0003J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001J\t\u0010\u001d\u001a\u00020\u0005HÖ\u0001J%\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u00002\u0006\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020$H\u0001¢\u0006\u0002\b%R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013¨\u0006("}, d2 = {"Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryComponent;", "Lcom/discord/chat/bridge/botuikit/Component;", "type", "", StackTraceHelper.ID_KEY, "", "contentInventoryEntry", "Lcom/discord/chat/bridge/botuikit/ContentInventoryEntry;", "<init>", "(ILjava/lang/String;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntry;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILjava/lang/String;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntry;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getType", "()I", "getId", "()Ljava/lang/String;", "getContentInventoryEntry", "()Lcom/discord/chat/bridge/botuikit/ContentInventoryEntry;", "component1", "component2", "component3", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ContentInventoryEntryComponent extends Component {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final ContentInventoryEntry contentInventoryEntry;
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f8242id;
    private final int type;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryComponent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryComponent;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ContentInventoryEntryComponent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ ContentInventoryEntryComponent(int i10, int i11, String str, ContentInventoryEntry contentInventoryEntry, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, ContentInventoryEntryComponent$$serializer.INSTANCE.getDescriptor());
        }
        this.type = i11;
        this.f8242id = str;
        if ((i10 & 4) == 0) {
            this.contentInventoryEntry = null;
        } else {
            this.contentInventoryEntry = contentInventoryEntry;
        }
    }

    public static /* synthetic */ ContentInventoryEntryComponent copy$default(ContentInventoryEntryComponent contentInventoryEntryComponent, int i10, String str, ContentInventoryEntry contentInventoryEntry, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = contentInventoryEntryComponent.type;
        }
        if ((i11 & 2) != 0) {
            str = contentInventoryEntryComponent.f8242id;
        }
        if ((i11 & 4) != 0) {
            contentInventoryEntry = contentInventoryEntryComponent.contentInventoryEntry;
        }
        return contentInventoryEntryComponent.copy(i10, str, contentInventoryEntry);
    }

    public static final /* synthetic */ void write$Self$chat_release(ContentInventoryEntryComponent contentInventoryEntryComponent, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.w(serialDescriptor, 0, contentInventoryEntryComponent.getType());
        compositeEncoder.y(serialDescriptor, 1, contentInventoryEntryComponent.getId());
        if (compositeEncoder.z(serialDescriptor, 2) || contentInventoryEntryComponent.contentInventoryEntry != null) {
            compositeEncoder.s(serialDescriptor, 2, ContentInventoryEntry$$serializer.INSTANCE, contentInventoryEntryComponent.contentInventoryEntry);
        }
    }

    public final int component1() {
        return this.type;
    }

    @NotNull
    public final String component2() {
        return this.f8242id;
    }

    public final ContentInventoryEntry component3() {
        return this.contentInventoryEntry;
    }

    @NotNull
    public final ContentInventoryEntryComponent copy(int i10, @NotNull String id2, ContentInventoryEntry contentInventoryEntry) {
        Intrinsics.checkNotNullParameter(id2, "id");
        return new ContentInventoryEntryComponent(i10, id2, contentInventoryEntry);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ContentInventoryEntryComponent) {
            ContentInventoryEntryComponent contentInventoryEntryComponent = (ContentInventoryEntryComponent) obj;
            return this.type == contentInventoryEntryComponent.type && Intrinsics.areEqual(this.f8242id, contentInventoryEntryComponent.f8242id) && Intrinsics.areEqual(this.contentInventoryEntry, contentInventoryEntryComponent.contentInventoryEntry);
        }
        return false;
    }

    public final ContentInventoryEntry getContentInventoryEntry() {
        return this.contentInventoryEntry;
    }

    @Override // com.discord.chat.bridge.botuikit.Component
    @NotNull
    public String getId() {
        return this.f8242id;
    }

    @Override // com.discord.chat.bridge.botuikit.Component
    public int getType() {
        return this.type;
    }

    public int hashCode() {
        int hashCode = ((Integer.hashCode(this.type) * 31) + this.f8242id.hashCode()) * 31;
        ContentInventoryEntry contentInventoryEntry = this.contentInventoryEntry;
        return hashCode + (contentInventoryEntry == null ? 0 : contentInventoryEntry.hashCode());
    }

    @NotNull
    public String toString() {
        int i10 = this.type;
        String str = this.f8242id;
        ContentInventoryEntry contentInventoryEntry = this.contentInventoryEntry;
        return "ContentInventoryEntryComponent(type=" + i10 + ", id=" + str + ", contentInventoryEntry=" + contentInventoryEntry + ")";
    }

    public /* synthetic */ ContentInventoryEntryComponent(int i10, String str, ContentInventoryEntry contentInventoryEntry, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, str, (i11 & 4) != 0 ? null : contentInventoryEntry);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ContentInventoryEntryComponent(int i10, @NotNull String id2, ContentInventoryEntry contentInventoryEntry) {
        super(null);
        Intrinsics.checkNotNullParameter(id2, "id");
        this.type = i10;
        this.f8242id = id2;
        this.contentInventoryEntry = contentInventoryEntry;
    }
}
