package com.discord.chat.bridge.executedcommand;

import bt.h;
import bt.n2;
import bt.v1;
import com.discord.chat.bridge.structurabletext.AnnotatedStructurableText;
import com.discord.chat.bridge.structurabletext.AnnotatedStructurableTextSerializer;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import ys.m;
@m
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\"\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 ?2\u00020\u0001:\u0002>?BW\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\b\u001a\u00020\u0005\u0012\u0006\u0010\t\u001a\u00020\n\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\u0010\u0010\u0011Bg\b\u0010\u0012\u0006\u0010\u0012\u001a\u00020\u0005\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\b\u001a\u00020\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u000e\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014¢\u0006\u0004\b\u0010\u0010\u0015J\u0010\u0010&\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b'\u0010\u0017J\t\u0010(\u001a\u00020\u0005HÆ\u0003J\u000b\u0010)\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\t\u0010*\u001a\u00020\u0005HÆ\u0003J\t\u0010+\u001a\u00020\nHÆ\u0003J\u000b\u0010,\u001a\u0004\u0018\u00010\fHÆ\u0003J\u0010\u0010-\u001a\u0004\u0018\u00010\u000eHÆ\u0003¢\u0006\u0002\u0010#J\u0010\u0010.\u001a\u0004\u0018\u00010\u000eHÆ\u0003¢\u0006\u0002\u0010#Jh\u0010/\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\b\u001a\u00020\u00052\b\b\u0002\u0010\t\u001a\u00020\n2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u000eHÆ\u0001¢\u0006\u0004\b0\u00101J\u0013\u00102\u001a\u00020\u000e2\b\u00103\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u00104\u001a\u00020\u0005HÖ\u0001J\t\u00105\u001a\u00020\u0007HÖ\u0001J%\u00106\u001a\u0002072\u0006\u00108\u001a\u00020\u00002\u0006\u00109\u001a\u00020:2\u0006\u0010;\u001a\u00020<H\u0001¢\u0006\u0002\b=R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0018\u001a\u0004\b\u0016\u0010\u0017R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u001aR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0011\u0010\b\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001aR\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u0013\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\b\n\u0000\u001a\u0004\b \u0010!R\u0015\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\n\n\u0002\u0010$\u001a\u0004\b\"\u0010#R\u0015\u0010\u000f\u001a\u0004\u0018\u00010\u000e¢\u0006\n\n\u0002\u0010$\u001a\u0004\b%\u0010#¨\u0006@"}, d2 = {"Lcom/discord/chat/bridge/executedcommand/ExecutedCommand;", "", "userId", "Lcom/discord/primitives/UserId;", "usernameColor", "", "avatarURL", "", "targetUsernameColor", "content", "Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;", "commandNameBackgroundStyles", "Lcom/discord/chat/bridge/executedcommand/ExecutedCommandBackgroundStyles;", "showAppsIcon", "", "showControllerIcon", "<init>", "(JILjava/lang/String;ILcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;Lcom/discord/chat/bridge/executedcommand/ExecutedCommandBackgroundStyles;Ljava/lang/Boolean;Ljava/lang/Boolean;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/primitives/UserId;ILjava/lang/String;ILcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;Lcom/discord/chat/bridge/executedcommand/ExecutedCommandBackgroundStyles;Ljava/lang/Boolean;Ljava/lang/Boolean;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getUserId-re6GcUE", "()J", "J", "getUsernameColor", "()I", "getAvatarURL", "()Ljava/lang/String;", "getTargetUsernameColor", "getContent", "()Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;", "getCommandNameBackgroundStyles", "()Lcom/discord/chat/bridge/executedcommand/ExecutedCommandBackgroundStyles;", "getShowAppsIcon", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getShowControllerIcon", "component1", "component1-re6GcUE", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "copy", "copy-zf4QoLg", "(JILjava/lang/String;ILcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;Lcom/discord/chat/bridge/executedcommand/ExecutedCommandBackgroundStyles;Ljava/lang/Boolean;Ljava/lang/Boolean;)Lcom/discord/chat/bridge/executedcommand/ExecutedCommand;", "equals", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ExecutedCommand {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String avatarURL;
    private final ExecutedCommandBackgroundStyles commandNameBackgroundStyles;
    @NotNull
    private final AnnotatedStructurableText content;
    private final Boolean showAppsIcon;
    private final Boolean showControllerIcon;
    private final int targetUsernameColor;
    private final long userId;
    private final int usernameColor;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/executedcommand/ExecutedCommand$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/executedcommand/ExecutedCommand;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ExecutedCommand$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ ExecutedCommand(int i10, UserId userId, int i11, String str, int i12, AnnotatedStructurableText annotatedStructurableText, ExecutedCommandBackgroundStyles executedCommandBackgroundStyles, Boolean bool, Boolean bool2, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, userId, i11, str, i12, annotatedStructurableText, executedCommandBackgroundStyles, bool, bool2, serializationConstructorMarker);
    }

    /* renamed from: copy-zf4QoLg$default  reason: not valid java name */
    public static /* synthetic */ ExecutedCommand m394copyzf4QoLg$default(ExecutedCommand executedCommand, long j10, int i10, String str, int i11, AnnotatedStructurableText annotatedStructurableText, ExecutedCommandBackgroundStyles executedCommandBackgroundStyles, Boolean bool, Boolean bool2, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            j10 = executedCommand.userId;
        }
        long j11 = j10;
        if ((i12 & 2) != 0) {
            i10 = executedCommand.usernameColor;
        }
        int i13 = i10;
        if ((i12 & 4) != 0) {
            str = executedCommand.avatarURL;
        }
        String str2 = str;
        if ((i12 & 8) != 0) {
            i11 = executedCommand.targetUsernameColor;
        }
        return executedCommand.m396copyzf4QoLg(j11, i13, str2, i11, (i12 & 16) != 0 ? executedCommand.content : annotatedStructurableText, (i12 & 32) != 0 ? executedCommand.commandNameBackgroundStyles : executedCommandBackgroundStyles, (i12 & 64) != 0 ? executedCommand.showAppsIcon : bool, (i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? executedCommand.showControllerIcon : bool2);
    }

    public static final /* synthetic */ void write$Self$chat_release(ExecutedCommand executedCommand, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.m(serialDescriptor, 0, UserId$$serializer.INSTANCE, UserId.m1138boximpl(executedCommand.userId));
        compositeEncoder.v(serialDescriptor, 1, executedCommand.usernameColor);
        if (compositeEncoder.y(serialDescriptor, 2) || executedCommand.avatarURL != null) {
            compositeEncoder.B(serialDescriptor, 2, n2.f7662a, executedCommand.avatarURL);
        }
        compositeEncoder.v(serialDescriptor, 3, executedCommand.targetUsernameColor);
        compositeEncoder.m(serialDescriptor, 4, AnnotatedStructurableTextSerializer.INSTANCE, executedCommand.content);
        if (compositeEncoder.y(serialDescriptor, 5) || executedCommand.commandNameBackgroundStyles != null) {
            compositeEncoder.B(serialDescriptor, 5, ExecutedCommandBackgroundStyles$$serializer.INSTANCE, executedCommand.commandNameBackgroundStyles);
        }
        if (compositeEncoder.y(serialDescriptor, 6) || !Intrinsics.areEqual(executedCommand.showAppsIcon, Boolean.FALSE)) {
            compositeEncoder.B(serialDescriptor, 6, h.f7626a, executedCommand.showAppsIcon);
        }
        if (compositeEncoder.y(serialDescriptor, 7) || !Intrinsics.areEqual(executedCommand.showControllerIcon, Boolean.FALSE)) {
            compositeEncoder.B(serialDescriptor, 7, h.f7626a, executedCommand.showControllerIcon);
        }
    }

    /* renamed from: component1-re6GcUE  reason: not valid java name */
    public final long m395component1re6GcUE() {
        return this.userId;
    }

    public final int component2() {
        return this.usernameColor;
    }

    public final String component3() {
        return this.avatarURL;
    }

    public final int component4() {
        return this.targetUsernameColor;
    }

    @NotNull
    public final AnnotatedStructurableText component5() {
        return this.content;
    }

    public final ExecutedCommandBackgroundStyles component6() {
        return this.commandNameBackgroundStyles;
    }

    public final Boolean component7() {
        return this.showAppsIcon;
    }

    public final Boolean component8() {
        return this.showControllerIcon;
    }

    @NotNull
    /* renamed from: copy-zf4QoLg  reason: not valid java name */
    public final ExecutedCommand m396copyzf4QoLg(long j10, int i10, String str, int i11, @NotNull AnnotatedStructurableText content, ExecutedCommandBackgroundStyles executedCommandBackgroundStyles, Boolean bool, Boolean bool2) {
        Intrinsics.checkNotNullParameter(content, "content");
        return new ExecutedCommand(j10, i10, str, i11, content, executedCommandBackgroundStyles, bool, bool2, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ExecutedCommand) {
            ExecutedCommand executedCommand = (ExecutedCommand) obj;
            return UserId.m1142equalsimpl0(this.userId, executedCommand.userId) && this.usernameColor == executedCommand.usernameColor && Intrinsics.areEqual(this.avatarURL, executedCommand.avatarURL) && this.targetUsernameColor == executedCommand.targetUsernameColor && Intrinsics.areEqual(this.content, executedCommand.content) && Intrinsics.areEqual(this.commandNameBackgroundStyles, executedCommand.commandNameBackgroundStyles) && Intrinsics.areEqual(this.showAppsIcon, executedCommand.showAppsIcon) && Intrinsics.areEqual(this.showControllerIcon, executedCommand.showControllerIcon);
        }
        return false;
    }

    public final String getAvatarURL() {
        return this.avatarURL;
    }

    public final ExecutedCommandBackgroundStyles getCommandNameBackgroundStyles() {
        return this.commandNameBackgroundStyles;
    }

    @NotNull
    public final AnnotatedStructurableText getContent() {
        return this.content;
    }

    public final Boolean getShowAppsIcon() {
        return this.showAppsIcon;
    }

    public final Boolean getShowControllerIcon() {
        return this.showControllerIcon;
    }

    public final int getTargetUsernameColor() {
        return this.targetUsernameColor;
    }

    /* renamed from: getUserId-re6GcUE  reason: not valid java name */
    public final long m397getUserIdre6GcUE() {
        return this.userId;
    }

    public final int getUsernameColor() {
        return this.usernameColor;
    }

    public int hashCode() {
        int m1143hashCodeimpl = ((UserId.m1143hashCodeimpl(this.userId) * 31) + Integer.hashCode(this.usernameColor)) * 31;
        String str = this.avatarURL;
        int hashCode = (((((m1143hashCodeimpl + (str == null ? 0 : str.hashCode())) * 31) + Integer.hashCode(this.targetUsernameColor)) * 31) + this.content.hashCode()) * 31;
        ExecutedCommandBackgroundStyles executedCommandBackgroundStyles = this.commandNameBackgroundStyles;
        int hashCode2 = (hashCode + (executedCommandBackgroundStyles == null ? 0 : executedCommandBackgroundStyles.hashCode())) * 31;
        Boolean bool = this.showAppsIcon;
        int hashCode3 = (hashCode2 + (bool == null ? 0 : bool.hashCode())) * 31;
        Boolean bool2 = this.showControllerIcon;
        return hashCode3 + (bool2 != null ? bool2.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String m1145toStringimpl = UserId.m1145toStringimpl(this.userId);
        int i10 = this.usernameColor;
        String str = this.avatarURL;
        int i11 = this.targetUsernameColor;
        AnnotatedStructurableText annotatedStructurableText = this.content;
        ExecutedCommandBackgroundStyles executedCommandBackgroundStyles = this.commandNameBackgroundStyles;
        Boolean bool = this.showAppsIcon;
        Boolean bool2 = this.showControllerIcon;
        return "ExecutedCommand(userId=" + m1145toStringimpl + ", usernameColor=" + i10 + ", avatarURL=" + str + ", targetUsernameColor=" + i11 + ", content=" + annotatedStructurableText + ", commandNameBackgroundStyles=" + executedCommandBackgroundStyles + ", showAppsIcon=" + bool + ", showControllerIcon=" + bool2 + ")";
    }

    public /* synthetic */ ExecutedCommand(long j10, int i10, String str, int i11, AnnotatedStructurableText annotatedStructurableText, ExecutedCommandBackgroundStyles executedCommandBackgroundStyles, Boolean bool, Boolean bool2, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, i10, str, i11, annotatedStructurableText, executedCommandBackgroundStyles, bool, bool2);
    }

    private /* synthetic */ ExecutedCommand(int i10, UserId userId, int i11, String str, int i12, AnnotatedStructurableText annotatedStructurableText, ExecutedCommandBackgroundStyles executedCommandBackgroundStyles, Boolean bool, Boolean bool2, SerializationConstructorMarker serializationConstructorMarker) {
        if (27 != (i10 & 27)) {
            v1.b(i10, 27, ExecutedCommand$$serializer.INSTANCE.getDescriptor());
        }
        this.userId = userId.m1147unboximpl();
        this.usernameColor = i11;
        if ((i10 & 4) == 0) {
            this.avatarURL = null;
        } else {
            this.avatarURL = str;
        }
        this.targetUsernameColor = i12;
        this.content = annotatedStructurableText;
        if ((i10 & 32) == 0) {
            this.commandNameBackgroundStyles = null;
        } else {
            this.commandNameBackgroundStyles = executedCommandBackgroundStyles;
        }
        if ((i10 & 64) == 0) {
            this.showAppsIcon = Boolean.FALSE;
        } else {
            this.showAppsIcon = bool;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.showControllerIcon = Boolean.FALSE;
        } else {
            this.showControllerIcon = bool2;
        }
    }

    private ExecutedCommand(long j10, int i10, String str, int i11, AnnotatedStructurableText content, ExecutedCommandBackgroundStyles executedCommandBackgroundStyles, Boolean bool, Boolean bool2) {
        Intrinsics.checkNotNullParameter(content, "content");
        this.userId = j10;
        this.usernameColor = i10;
        this.avatarURL = str;
        this.targetUsernameColor = i11;
        this.content = content;
        this.commandNameBackgroundStyles = executedCommandBackgroundStyles;
        this.showAppsIcon = bool;
        this.showControllerIcon = bool2;
    }

    public /* synthetic */ ExecutedCommand(long j10, int i10, String str, int i11, AnnotatedStructurableText annotatedStructurableText, ExecutedCommandBackgroundStyles executedCommandBackgroundStyles, Boolean bool, Boolean bool2, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, i10, (i12 & 4) != 0 ? null : str, i11, annotatedStructurableText, (i12 & 32) != 0 ? null : executedCommandBackgroundStyles, (i12 & 64) != 0 ? Boolean.FALSE : bool, (i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? Boolean.FALSE : bool2, null);
    }
}
