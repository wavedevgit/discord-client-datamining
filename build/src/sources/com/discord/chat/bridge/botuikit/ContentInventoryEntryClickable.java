package com.discord.chat.bridge.botuikit;

import dt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@at.m
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \u001d2\u00020\u0001:\u0002\u001c\u001dB\u0013\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005B%\b\u0010\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\u0004\u0010\nJ\u000b\u0010\r\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0015\u0010\u000e\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0012\u001a\u00020\u0007HÖ\u0001J\t\u0010\u0013\u001a\u00020\u0003HÖ\u0001J%\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00002\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u001aH\u0001¢\u0006\u0002\b\u001bR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\f¨\u0006\u001e"}, d2 = {"Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;", "", "ariaDescription", "", "<init>", "(Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getAriaDescription", "()Ljava/lang/String;", "component1", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ContentInventoryEntryClickable {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String ariaDescription;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ContentInventoryEntryClickable$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public ContentInventoryEntryClickable() {
        this((String) null, 1, (DefaultConstructorMarker) null);
    }

    public static /* synthetic */ ContentInventoryEntryClickable copy$default(ContentInventoryEntryClickable contentInventoryEntryClickable, String str, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = contentInventoryEntryClickable.ariaDescription;
        }
        return contentInventoryEntryClickable.copy(str);
    }

    public static final /* synthetic */ void write$Self$chat_release(ContentInventoryEntryClickable contentInventoryEntryClickable, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        if (compositeEncoder.z(serialDescriptor, 0) || contentInventoryEntryClickable.ariaDescription != null) {
            compositeEncoder.s(serialDescriptor, 0, n2.f20978a, contentInventoryEntryClickable.ariaDescription);
        }
    }

    public final String component1() {
        return this.ariaDescription;
    }

    @NotNull
    public final ContentInventoryEntryClickable copy(String str) {
        return new ContentInventoryEntryClickable(str);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof ContentInventoryEntryClickable) && Intrinsics.areEqual(this.ariaDescription, ((ContentInventoryEntryClickable) obj).ariaDescription);
    }

    public final String getAriaDescription() {
        return this.ariaDescription;
    }

    public int hashCode() {
        String str = this.ariaDescription;
        if (str == null) {
            return 0;
        }
        return str.hashCode();
    }

    @NotNull
    public String toString() {
        String str = this.ariaDescription;
        return "ContentInventoryEntryClickable(ariaDescription=" + str + ")";
    }

    public /* synthetic */ ContentInventoryEntryClickable(int i10, String str, SerializationConstructorMarker serializationConstructorMarker) {
        if ((i10 & 1) == 0) {
            this.ariaDescription = null;
        } else {
            this.ariaDescription = str;
        }
    }

    public ContentInventoryEntryClickable(String str) {
        this.ariaDescription = str;
    }

    public /* synthetic */ ContentInventoryEntryClickable(String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str);
    }
}
