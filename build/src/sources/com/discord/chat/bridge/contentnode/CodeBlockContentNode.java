package com.discord.chat.bridge.contentnode;

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
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 %2\u00020\u0001:\u0002$%B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006¢\u0006\u0004\b\u0007\u0010\bB7\b\u0010\u0012\u0006\u0010\t\u001a\u00020\n\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\u0007\u0010\rJ\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0006HÆ\u0003J'\u0010\u0016\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u0006HÆ\u0001J\u0013\u0010\u0017\u001a\u00020\u00062\b\u0010\u0018\u001a\u0004\u0018\u00010\u0019HÖ\u0003J\t\u0010\u001a\u001a\u00020\nHÖ\u0001J\t\u0010\u001b\u001a\u00020\u0003HÖ\u0001J%\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u00002\u0006\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\"H\u0001¢\u0006\u0002\b#R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012¨\u0006&"}, d2 = {"Lcom/discord/chat/bridge/contentnode/CodeBlockContentNode;", "Lcom/discord/chat/bridge/contentnode/ContentNode;", "lang", "", "content", "inQuote", "", "<init>", "(Ljava/lang/String;Ljava/lang/String;Z)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;ZLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getLang", "()Ljava/lang/String;", "getContent", "getInQuote", "()Z", "component1", "component2", "component3", "copy", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CodeBlockContentNode extends ContentNode {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String content;
    private final boolean inQuote;
    @NotNull
    private final String lang;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/CodeBlockContentNode$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/CodeBlockContentNode;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return CodeBlockContentNode$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ CodeBlockContentNode(int i10, String str, String str2, boolean z10, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, CodeBlockContentNode$$serializer.INSTANCE.getDescriptor());
        }
        this.lang = str;
        this.content = str2;
        this.inQuote = z10;
    }

    public static /* synthetic */ CodeBlockContentNode copy$default(CodeBlockContentNode codeBlockContentNode, String str, String str2, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = codeBlockContentNode.lang;
        }
        if ((i10 & 2) != 0) {
            str2 = codeBlockContentNode.content;
        }
        if ((i10 & 4) != 0) {
            z10 = codeBlockContentNode.inQuote;
        }
        return codeBlockContentNode.copy(str, str2, z10);
    }

    public static final /* synthetic */ void write$Self$chat_release(CodeBlockContentNode codeBlockContentNode, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.y(serialDescriptor, 0, codeBlockContentNode.lang);
        compositeEncoder.y(serialDescriptor, 1, codeBlockContentNode.content);
        compositeEncoder.x(serialDescriptor, 2, codeBlockContentNode.inQuote);
    }

    @NotNull
    public final String component1() {
        return this.lang;
    }

    @NotNull
    public final String component2() {
        return this.content;
    }

    public final boolean component3() {
        return this.inQuote;
    }

    @NotNull
    public final CodeBlockContentNode copy(@NotNull String lang, @NotNull String content, boolean z10) {
        Intrinsics.checkNotNullParameter(lang, "lang");
        Intrinsics.checkNotNullParameter(content, "content");
        return new CodeBlockContentNode(lang, content, z10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof CodeBlockContentNode) {
            CodeBlockContentNode codeBlockContentNode = (CodeBlockContentNode) obj;
            return Intrinsics.areEqual(this.lang, codeBlockContentNode.lang) && Intrinsics.areEqual(this.content, codeBlockContentNode.content) && this.inQuote == codeBlockContentNode.inQuote;
        }
        return false;
    }

    @NotNull
    public final String getContent() {
        return this.content;
    }

    public final boolean getInQuote() {
        return this.inQuote;
    }

    @NotNull
    public final String getLang() {
        return this.lang;
    }

    public int hashCode() {
        return (((this.lang.hashCode() * 31) + this.content.hashCode()) * 31) + Boolean.hashCode(this.inQuote);
    }

    @NotNull
    public String toString() {
        String str = this.lang;
        String str2 = this.content;
        boolean z10 = this.inQuote;
        return "CodeBlockContentNode(lang=" + str + ", content=" + str2 + ", inQuote=" + z10 + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public CodeBlockContentNode(@NotNull String lang, @NotNull String content, boolean z10) {
        super(null);
        Intrinsics.checkNotNullParameter(lang, "lang");
        Intrinsics.checkNotNullParameter(content, "content");
        this.lang = lang;
        this.content = content;
        this.inQuote = z10;
    }
}
