package com.discord.chat.bridge.contentnode;

import gt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \u001e2\u00020\u0001:\u0002\u001d\u001eB\u0013\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005B%\b\u0010\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\u0004\u0010\nJ\u000b\u0010\r\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0015\u0010\u000e\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012HÖ\u0003J\t\u0010\u0013\u001a\u00020\u0007HÖ\u0001J\t\u0010\u0014\u001a\u00020\u0003HÖ\u0001J%\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00002\u0006\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u001bH\u0001¢\u0006\u0002\b\u001cR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\f¨\u0006\u001f"}, d2 = {"Lcom/discord/chat/bridge/contentnode/TextContentNode;", "Lcom/discord/chat/bridge/contentnode/ContentNode;", "content", "", "<init>", "(Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getContent", "()Ljava/lang/String;", "component1", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@dt.m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TextContentNode extends ContentNode {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String content;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/TextContentNode$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/TextContentNode;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return TextContentNode$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public TextContentNode() {
        this((String) null, 1, (DefaultConstructorMarker) null);
    }

    public static /* synthetic */ TextContentNode copy$default(TextContentNode textContentNode, String str, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = textContentNode.content;
        }
        return textContentNode.copy(str);
    }

    public static final /* synthetic */ void write$Self$chat_release(TextContentNode textContentNode, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        if (compositeEncoder.z(serialDescriptor, 0) || textContentNode.content != null) {
            compositeEncoder.A(serialDescriptor, 0, n2.f25302a, textContentNode.content);
        }
    }

    public final String component1() {
        return this.content;
    }

    @NotNull
    public final TextContentNode copy(String str) {
        return new TextContentNode(str);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof TextContentNode) && Intrinsics.areEqual(this.content, ((TextContentNode) obj).content);
    }

    public final String getContent() {
        return this.content;
    }

    public int hashCode() {
        String str = this.content;
        if (str == null) {
            return 0;
        }
        return str.hashCode();
    }

    @NotNull
    public String toString() {
        String str = this.content;
        return "TextContentNode(content=" + str + ")";
    }

    public /* synthetic */ TextContentNode(int i10, String str, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if ((i10 & 1) == 0) {
            this.content = null;
        } else {
            this.content = str;
        }
    }

    public /* synthetic */ TextContentNode(String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str);
    }

    public TextContentNode(String str) {
        super(null);
        this.content = str;
    }
}
