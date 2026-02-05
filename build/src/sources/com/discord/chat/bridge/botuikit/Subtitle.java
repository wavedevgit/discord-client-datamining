package com.discord.chat.bridge.botuikit;

import gt.n2;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 (2\u00020\u0001:\u0002'(B3\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\b\u0010\tBC\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\b\u0010\u000eJ\u000b\u0010\u0015\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u0017\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0018\u001a\u0004\u0018\u00010\u0007HÆ\u0003J7\u0010\u0019\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÆ\u0001J\u0013\u0010\u001a\u001a\u00020\u001b2\b\u0010\u001c\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001d\u001a\u00020\u000bHÖ\u0001J\t\u0010\u001e\u001a\u00020\u0003HÖ\u0001J%\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\u00002\u0006\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020%H\u0001¢\u0006\u0002\b&R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0010R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0010R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014¨\u0006)"}, d2 = {"Lcom/discord/chat/bridge/botuikit/Subtitle;", "", "badgeUrl", "", "text", "ariaDescription", "clickable", "Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getBadgeUrl", "()Ljava/lang/String;", "getText", "getAriaDescription", "getClickable", "()Lcom/discord/chat/bridge/botuikit/ContentInventoryEntryClickable;", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@dt.m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Subtitle {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String ariaDescription;
    private final String badgeUrl;
    private final ContentInventoryEntryClickable clickable;
    @NotNull
    private final String text;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/Subtitle$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/Subtitle;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return Subtitle$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ Subtitle(int i10, String str, String str2, String str3, ContentInventoryEntryClickable contentInventoryEntryClickable, SerializationConstructorMarker serializationConstructorMarker) {
        if (2 != (i10 & 2)) {
            v1.b(i10, 2, Subtitle$$serializer.INSTANCE.getDescriptor());
        }
        if ((i10 & 1) == 0) {
            this.badgeUrl = null;
        } else {
            this.badgeUrl = str;
        }
        this.text = str2;
        if ((i10 & 4) == 0) {
            this.ariaDescription = null;
        } else {
            this.ariaDescription = str3;
        }
        if ((i10 & 8) == 0) {
            this.clickable = null;
        } else {
            this.clickable = contentInventoryEntryClickable;
        }
    }

    public static /* synthetic */ Subtitle copy$default(Subtitle subtitle, String str, String str2, String str3, ContentInventoryEntryClickable contentInventoryEntryClickable, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = subtitle.badgeUrl;
        }
        if ((i10 & 2) != 0) {
            str2 = subtitle.text;
        }
        if ((i10 & 4) != 0) {
            str3 = subtitle.ariaDescription;
        }
        if ((i10 & 8) != 0) {
            contentInventoryEntryClickable = subtitle.clickable;
        }
        return subtitle.copy(str, str2, str3, contentInventoryEntryClickable);
    }

    public static final /* synthetic */ void write$Self$chat_release(Subtitle subtitle, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        if (compositeEncoder.z(serialDescriptor, 0) || subtitle.badgeUrl != null) {
            compositeEncoder.A(serialDescriptor, 0, n2.f25302a, subtitle.badgeUrl);
        }
        compositeEncoder.x(serialDescriptor, 1, subtitle.text);
        if (compositeEncoder.z(serialDescriptor, 2) || subtitle.ariaDescription != null) {
            compositeEncoder.A(serialDescriptor, 2, n2.f25302a, subtitle.ariaDescription);
        }
        if (compositeEncoder.z(serialDescriptor, 3) || subtitle.clickable != null) {
            compositeEncoder.A(serialDescriptor, 3, ContentInventoryEntryClickable$$serializer.INSTANCE, subtitle.clickable);
        }
    }

    public final String component1() {
        return this.badgeUrl;
    }

    @NotNull
    public final String component2() {
        return this.text;
    }

    public final String component3() {
        return this.ariaDescription;
    }

    public final ContentInventoryEntryClickable component4() {
        return this.clickable;
    }

    @NotNull
    public final Subtitle copy(String str, @NotNull String text, String str2, ContentInventoryEntryClickable contentInventoryEntryClickable) {
        Intrinsics.checkNotNullParameter(text, "text");
        return new Subtitle(str, text, str2, contentInventoryEntryClickable);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Subtitle) {
            Subtitle subtitle = (Subtitle) obj;
            return Intrinsics.areEqual(this.badgeUrl, subtitle.badgeUrl) && Intrinsics.areEqual(this.text, subtitle.text) && Intrinsics.areEqual(this.ariaDescription, subtitle.ariaDescription) && Intrinsics.areEqual(this.clickable, subtitle.clickable);
        }
        return false;
    }

    public final String getAriaDescription() {
        return this.ariaDescription;
    }

    public final String getBadgeUrl() {
        return this.badgeUrl;
    }

    public final ContentInventoryEntryClickable getClickable() {
        return this.clickable;
    }

    @NotNull
    public final String getText() {
        return this.text;
    }

    public int hashCode() {
        String str = this.badgeUrl;
        int hashCode = (((str == null ? 0 : str.hashCode()) * 31) + this.text.hashCode()) * 31;
        String str2 = this.ariaDescription;
        int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
        ContentInventoryEntryClickable contentInventoryEntryClickable = this.clickable;
        return hashCode2 + (contentInventoryEntryClickable != null ? contentInventoryEntryClickable.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String str = this.badgeUrl;
        String str2 = this.text;
        String str3 = this.ariaDescription;
        ContentInventoryEntryClickable contentInventoryEntryClickable = this.clickable;
        return "Subtitle(badgeUrl=" + str + ", text=" + str2 + ", ariaDescription=" + str3 + ", clickable=" + contentInventoryEntryClickable + ")";
    }

    public Subtitle(String str, @NotNull String text, String str2, ContentInventoryEntryClickable contentInventoryEntryClickable) {
        Intrinsics.checkNotNullParameter(text, "text");
        this.badgeUrl = str;
        this.text = text;
        this.ariaDescription = str2;
        this.clickable = contentInventoryEntryClickable;
    }

    public /* synthetic */ Subtitle(String str, String str2, String str3, ContentInventoryEntryClickable contentInventoryEntryClickable, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : contentInventoryEntryClickable);
    }
}
