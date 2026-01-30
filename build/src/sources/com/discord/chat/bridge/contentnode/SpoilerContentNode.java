package com.discord.chat.bridge.contentnode;

import at.v1;
import com.discord.chat.bridge.spoiler.SpoilerableData;
import java.util.List;
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
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 %2\u00020\u00012\u00020\u0002:\u0002$%B\u0015\u0012\f\u0010\u0003\u001a\b\u0012\u0004\u0012\u00020\u00010\u0004¢\u0006\u0004\b\u0005\u0010\u0006B?\b\u0010\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\u000e\u0010\u0003\u001a\n\u0012\u0004\u0012\u00020\u0001\u0018\u00010\u0004\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\n\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\u0005\u0010\u000eJ\u000f\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00010\u0004HÆ\u0003J\u0019\u0010\u0015\u001a\u00020\u00002\u000e\b\u0002\u0010\u0003\u001a\b\u0012\u0004\u0012\u00020\u00010\u0004HÆ\u0001J\u0013\u0010\u0016\u001a\u00020\u00172\b\u0010\u0018\u001a\u0004\u0018\u00010\u0019HÖ\u0003J\t\u0010\u001a\u001a\u00020\bHÖ\u0001J\t\u0010\u001b\u001a\u00020\nHÖ\u0001J%\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u00002\u0006\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\"H\u0001¢\u0006\u0002\b#R\u0017\u0010\u0003\u001a\b\u0012\u0004\u0012\u00020\u00010\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0014\u0010\t\u001a\u00020\nX\u0096D¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0014\u0010\u000b\u001a\u00020\nX\u0096D¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0012¨\u0006&"}, d2 = {"Lcom/discord/chat/bridge/contentnode/SpoilerContentNode;", "Lcom/discord/chat/bridge/contentnode/ContentNode;", "Lcom/discord/chat/bridge/spoiler/SpoilerableData;", "content", "", "<init>", "(Ljava/util/List;)V", "seen0", "", "spoilerOrNull", "", "obscureOrNull", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/util/List;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getContent", "()Ljava/util/List;", "getSpoilerOrNull", "()Ljava/lang/String;", "getObscureOrNull", "component1", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@xs.m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SpoilerContentNode extends ContentNode implements SpoilerableData {
    @NotNull
    private final List<ContentNode> content;
    @NotNull
    private final String obscureOrNull;
    @NotNull
    private final String spoilerOrNull;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {ir.l.a(ir.o.f31119e, new Function0() { // from class: com.discord.chat.bridge.contentnode.r
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = SpoilerContentNode._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    }), null, null};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/SpoilerContentNode$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/SpoilerContentNode;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return SpoilerContentNode$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ SpoilerContentNode(int i10, List list, String str, String str2, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (1 != (i10 & 1)) {
            v1.b(i10, 1, SpoilerContentNode$$serializer.INSTANCE.getDescriptor());
        }
        this.content = list;
        if ((i10 & 2) == 0) {
            this.spoilerOrNull = "";
        } else {
            this.spoilerOrNull = str;
        }
        if ((i10 & 4) == 0) {
            this.obscureOrNull = "";
        } else {
            this.obscureOrNull = str2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new at.f(ContentNodeSerializer.INSTANCE);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ SpoilerContentNode copy$default(SpoilerContentNode spoilerContentNode, List list, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            list = spoilerContentNode.content;
        }
        return spoilerContentNode.copy(list);
    }

    public static final /* synthetic */ void write$Self$chat_release(SpoilerContentNode spoilerContentNode, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.j(serialDescriptor, 0, (xs.o) $childSerializers[0].getValue(), spoilerContentNode.content);
        if (compositeEncoder.A(serialDescriptor, 1) || !Intrinsics.areEqual(spoilerContentNode.getSpoilerOrNull(), "")) {
            compositeEncoder.y(serialDescriptor, 1, spoilerContentNode.getSpoilerOrNull());
        }
        if (compositeEncoder.A(serialDescriptor, 2) || !Intrinsics.areEqual(spoilerContentNode.getObscureOrNull(), "")) {
            compositeEncoder.y(serialDescriptor, 2, spoilerContentNode.getObscureOrNull());
        }
    }

    @NotNull
    public final List<ContentNode> component1() {
        return this.content;
    }

    @NotNull
    public final SpoilerContentNode copy(@NotNull List<? extends ContentNode> content) {
        Intrinsics.checkNotNullParameter(content, "content");
        return new SpoilerContentNode(content);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof SpoilerContentNode) && Intrinsics.areEqual(this.content, ((SpoilerContentNode) obj).content);
    }

    @NotNull
    public final List<ContentNode> getContent() {
        return this.content;
    }

    @Override // com.discord.chat.bridge.spoiler.SpoilerableData
    @NotNull
    public String getObscureOrNull() {
        return this.obscureOrNull;
    }

    @Override // com.discord.chat.bridge.spoiler.SpoilerableData
    @NotNull
    public String getSpoilerOrNull() {
        return this.spoilerOrNull;
    }

    public int hashCode() {
        return this.content.hashCode();
    }

    @NotNull
    public String toString() {
        List<ContentNode> list = this.content;
        return "SpoilerContentNode(content=" + list + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public SpoilerContentNode(@NotNull List<? extends ContentNode> content) {
        super(null);
        Intrinsics.checkNotNullParameter(content, "content");
        this.content = content;
        this.spoilerOrNull = "";
        this.obscureOrNull = "";
    }
}
