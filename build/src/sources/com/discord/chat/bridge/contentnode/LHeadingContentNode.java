package com.discord.chat.bridge.contentnode;

import dt.v1;
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
@at.m
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 '2\u00020\u0001:\u0002&'B%\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\f\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00010\u0007¢\u0006\u0004\b\b\u0010\tB=\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u000e\u0010\u0006\u001a\n\u0012\u0004\u0012\u00020\u0001\u0018\u00010\u0007\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\b\u0010\rJ\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0005HÆ\u0003J\u000f\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00010\u0007HÆ\u0003J-\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\u000e\b\u0002\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00010\u0007HÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u001bHÖ\u0003J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001J\t\u0010\u001d\u001a\u00020\u0005HÖ\u0001J%\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u00002\u0006\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020$H\u0001¢\u0006\u0002\b%R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0017\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013¨\u0006("}, d2 = {"Lcom/discord/chat/bridge/contentnode/LHeadingContentNode;", "Lcom/discord/chat/bridge/contentnode/ContentNode;", "level", "", "className", "", "content", "", "<init>", "(ILjava/lang/String;Ljava/util/List;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILjava/lang/String;Ljava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getLevel", "()I", "getClassName", "()Ljava/lang/String;", "getContent", "()Ljava/util/List;", "component1", "component2", "component3", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class LHeadingContentNode extends ContentNode {
    @NotNull
    private final String className;
    @NotNull
    private final List<ContentNode> content;
    private final int level;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, lr.l.b(lr.o.f37120e, new Function0() { // from class: com.discord.chat.bridge.contentnode.l
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = LHeadingContentNode._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    })};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LHeadingContentNode$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LHeadingContentNode;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return LHeadingContentNode$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ LHeadingContentNode(int i10, int i11, String str, List list, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, LHeadingContentNode$$serializer.INSTANCE.getDescriptor());
        }
        this.level = i11;
        this.className = str;
        this.content = list;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new dt.f(ContentNodeSerializer.INSTANCE);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ LHeadingContentNode copy$default(LHeadingContentNode lHeadingContentNode, int i10, String str, List list, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = lHeadingContentNode.level;
        }
        if ((i11 & 2) != 0) {
            str = lHeadingContentNode.className;
        }
        if ((i11 & 4) != 0) {
            list = lHeadingContentNode.content;
        }
        return lHeadingContentNode.copy(i10, str, list);
    }

    public static final /* synthetic */ void write$Self$chat_release(LHeadingContentNode lHeadingContentNode, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.w(serialDescriptor, 0, lHeadingContentNode.level);
        compositeEncoder.y(serialDescriptor, 1, lHeadingContentNode.className);
        compositeEncoder.D(serialDescriptor, 2, (at.o) lazyArr[2].getValue(), lHeadingContentNode.content);
    }

    public final int component1() {
        return this.level;
    }

    @NotNull
    public final String component2() {
        return this.className;
    }

    @NotNull
    public final List<ContentNode> component3() {
        return this.content;
    }

    @NotNull
    public final LHeadingContentNode copy(int i10, @NotNull String className, @NotNull List<? extends ContentNode> content) {
        Intrinsics.checkNotNullParameter(className, "className");
        Intrinsics.checkNotNullParameter(content, "content");
        return new LHeadingContentNode(i10, className, content);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof LHeadingContentNode) {
            LHeadingContentNode lHeadingContentNode = (LHeadingContentNode) obj;
            return this.level == lHeadingContentNode.level && Intrinsics.areEqual(this.className, lHeadingContentNode.className) && Intrinsics.areEqual(this.content, lHeadingContentNode.content);
        }
        return false;
    }

    @NotNull
    public final String getClassName() {
        return this.className;
    }

    @NotNull
    public final List<ContentNode> getContent() {
        return this.content;
    }

    public final int getLevel() {
        return this.level;
    }

    public int hashCode() {
        return (((Integer.hashCode(this.level) * 31) + this.className.hashCode()) * 31) + this.content.hashCode();
    }

    @NotNull
    public String toString() {
        int i10 = this.level;
        String str = this.className;
        List<ContentNode> list = this.content;
        return "LHeadingContentNode(level=" + i10 + ", className=" + str + ", content=" + list + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public LHeadingContentNode(int i10, @NotNull String className, @NotNull List<? extends ContentNode> content) {
        super(null);
        Intrinsics.checkNotNullParameter(className, "className");
        Intrinsics.checkNotNullParameter(content, "content");
        this.level = i10;
        this.className = className;
        this.content = content;
    }
}
