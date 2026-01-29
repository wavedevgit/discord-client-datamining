package com.discord.chat.bridge.threads;

import at.h;
import at.n2;
import at.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.m;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0018\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 12\u00020\u0001:\u000201BG\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u000b\u0010\fBW\b\u0010\u0012\u0006\u0010\r\u001a\u00020\u000e\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010¢\u0006\u0004\b\u000b\u0010\u0011J\t\u0010\u001c\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001d\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u001e\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0010\u0010\u001f\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010\u0017J\u000b\u0010 \u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010!\u001a\u0004\u0018\u00010\nHÆ\u0003JR\u0010\"\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\nHÆ\u0001¢\u0006\u0002\u0010#J\u0013\u0010$\u001a\u00020\u00072\b\u0010%\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010&\u001a\u00020\u000eHÖ\u0001J\t\u0010'\u001a\u00020\u0003HÖ\u0001J%\u0010(\u001a\u00020)2\u0006\u0010*\u001a\u00020\u00002\u0006\u0010+\u001a\u00020,2\u0006\u0010-\u001a\u00020.H\u0001¢\u0006\u0002\b/R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0013R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0013R\u0015\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\n\n\u0002\u0010\u0018\u001a\u0004\b\u0016\u0010\u0017R\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0013R\u0013\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u001b¨\u00062"}, d2 = {"Lcom/discord/chat/bridge/threads/ThreadEmbed;", "", "title", "", "messageCountLabel", "messagePreviewString", "archived", "", "archivedIconUrl", "referencedMessage", "Lcom/discord/chat/bridge/threads/ThreadEmbedMessage;", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Lcom/discord/chat/bridge/threads/ThreadEmbedMessage;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Lcom/discord/chat/bridge/threads/ThreadEmbedMessage;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getTitle", "()Ljava/lang/String;", "getMessageCountLabel", "getMessagePreviewString", "getArchived", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getArchivedIconUrl", "getReferencedMessage", "()Lcom/discord/chat/bridge/threads/ThreadEmbedMessage;", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Lcom/discord/chat/bridge/threads/ThreadEmbedMessage;)Lcom/discord/chat/bridge/threads/ThreadEmbed;", "equals", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ThreadEmbed {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final Boolean archived;
    private final String archivedIconUrl;
    @NotNull
    private final String messageCountLabel;
    private final String messagePreviewString;
    private final ThreadEmbedMessage referencedMessage;
    @NotNull
    private final String title;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/threads/ThreadEmbed$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/threads/ThreadEmbed;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ThreadEmbed$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ ThreadEmbed(int i10, String str, String str2, String str3, Boolean bool, String str4, ThreadEmbedMessage threadEmbedMessage, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, ThreadEmbed$$serializer.INSTANCE.getDescriptor());
        }
        this.title = str;
        this.messageCountLabel = str2;
        if ((i10 & 4) == 0) {
            this.messagePreviewString = null;
        } else {
            this.messagePreviewString = str3;
        }
        if ((i10 & 8) == 0) {
            this.archived = null;
        } else {
            this.archived = bool;
        }
        if ((i10 & 16) == 0) {
            this.archivedIconUrl = null;
        } else {
            this.archivedIconUrl = str4;
        }
        if ((i10 & 32) == 0) {
            this.referencedMessage = null;
        } else {
            this.referencedMessage = threadEmbedMessage;
        }
    }

    public static /* synthetic */ ThreadEmbed copy$default(ThreadEmbed threadEmbed, String str, String str2, String str3, Boolean bool, String str4, ThreadEmbedMessage threadEmbedMessage, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = threadEmbed.title;
        }
        if ((i10 & 2) != 0) {
            str2 = threadEmbed.messageCountLabel;
        }
        if ((i10 & 4) != 0) {
            str3 = threadEmbed.messagePreviewString;
        }
        if ((i10 & 8) != 0) {
            bool = threadEmbed.archived;
        }
        if ((i10 & 16) != 0) {
            str4 = threadEmbed.archivedIconUrl;
        }
        if ((i10 & 32) != 0) {
            threadEmbedMessage = threadEmbed.referencedMessage;
        }
        String str5 = str4;
        ThreadEmbedMessage threadEmbedMessage2 = threadEmbedMessage;
        return threadEmbed.copy(str, str2, str3, bool, str5, threadEmbedMessage2);
    }

    public static final /* synthetic */ void write$Self$chat_release(ThreadEmbed threadEmbed, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.y(serialDescriptor, 0, threadEmbed.title);
        compositeEncoder.y(serialDescriptor, 1, threadEmbed.messageCountLabel);
        if (compositeEncoder.A(serialDescriptor, 2) || threadEmbed.messagePreviewString != null) {
            compositeEncoder.z(serialDescriptor, 2, n2.f6848a, threadEmbed.messagePreviewString);
        }
        if (compositeEncoder.A(serialDescriptor, 3) || threadEmbed.archived != null) {
            compositeEncoder.z(serialDescriptor, 3, h.f6812a, threadEmbed.archived);
        }
        if (compositeEncoder.A(serialDescriptor, 4) || threadEmbed.archivedIconUrl != null) {
            compositeEncoder.z(serialDescriptor, 4, n2.f6848a, threadEmbed.archivedIconUrl);
        }
        if (compositeEncoder.A(serialDescriptor, 5) || threadEmbed.referencedMessage != null) {
            compositeEncoder.z(serialDescriptor, 5, ThreadEmbedMessage$$serializer.INSTANCE, threadEmbed.referencedMessage);
        }
    }

    @NotNull
    public final String component1() {
        return this.title;
    }

    @NotNull
    public final String component2() {
        return this.messageCountLabel;
    }

    public final String component3() {
        return this.messagePreviewString;
    }

    public final Boolean component4() {
        return this.archived;
    }

    public final String component5() {
        return this.archivedIconUrl;
    }

    public final ThreadEmbedMessage component6() {
        return this.referencedMessage;
    }

    @NotNull
    public final ThreadEmbed copy(@NotNull String title, @NotNull String messageCountLabel, String str, Boolean bool, String str2, ThreadEmbedMessage threadEmbedMessage) {
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(messageCountLabel, "messageCountLabel");
        return new ThreadEmbed(title, messageCountLabel, str, bool, str2, threadEmbedMessage);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ThreadEmbed) {
            ThreadEmbed threadEmbed = (ThreadEmbed) obj;
            return Intrinsics.areEqual(this.title, threadEmbed.title) && Intrinsics.areEqual(this.messageCountLabel, threadEmbed.messageCountLabel) && Intrinsics.areEqual(this.messagePreviewString, threadEmbed.messagePreviewString) && Intrinsics.areEqual(this.archived, threadEmbed.archived) && Intrinsics.areEqual(this.archivedIconUrl, threadEmbed.archivedIconUrl) && Intrinsics.areEqual(this.referencedMessage, threadEmbed.referencedMessage);
        }
        return false;
    }

    public final Boolean getArchived() {
        return this.archived;
    }

    public final String getArchivedIconUrl() {
        return this.archivedIconUrl;
    }

    @NotNull
    public final String getMessageCountLabel() {
        return this.messageCountLabel;
    }

    public final String getMessagePreviewString() {
        return this.messagePreviewString;
    }

    public final ThreadEmbedMessage getReferencedMessage() {
        return this.referencedMessage;
    }

    @NotNull
    public final String getTitle() {
        return this.title;
    }

    public int hashCode() {
        int hashCode = ((this.title.hashCode() * 31) + this.messageCountLabel.hashCode()) * 31;
        String str = this.messagePreviewString;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        Boolean bool = this.archived;
        int hashCode3 = (hashCode2 + (bool == null ? 0 : bool.hashCode())) * 31;
        String str2 = this.archivedIconUrl;
        int hashCode4 = (hashCode3 + (str2 == null ? 0 : str2.hashCode())) * 31;
        ThreadEmbedMessage threadEmbedMessage = this.referencedMessage;
        return hashCode4 + (threadEmbedMessage != null ? threadEmbedMessage.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String str = this.title;
        String str2 = this.messageCountLabel;
        String str3 = this.messagePreviewString;
        Boolean bool = this.archived;
        String str4 = this.archivedIconUrl;
        ThreadEmbedMessage threadEmbedMessage = this.referencedMessage;
        return "ThreadEmbed(title=" + str + ", messageCountLabel=" + str2 + ", messagePreviewString=" + str3 + ", archived=" + bool + ", archivedIconUrl=" + str4 + ", referencedMessage=" + threadEmbedMessage + ")";
    }

    public ThreadEmbed(@NotNull String title, @NotNull String messageCountLabel, String str, Boolean bool, String str2, ThreadEmbedMessage threadEmbedMessage) {
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(messageCountLabel, "messageCountLabel");
        this.title = title;
        this.messageCountLabel = messageCountLabel;
        this.messagePreviewString = str;
        this.archived = bool;
        this.archivedIconUrl = str2;
        this.referencedMessage = threadEmbedMessage;
    }

    public /* synthetic */ ThreadEmbed(String str, String str2, String str3, Boolean bool, String str4, ThreadEmbedMessage threadEmbedMessage, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : bool, (i10 & 16) != 0 ? null : str4, (i10 & 32) != 0 ? null : threadEmbedMessage);
    }
}
