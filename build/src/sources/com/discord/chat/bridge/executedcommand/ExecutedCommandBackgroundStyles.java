package com.discord.chat.bridge.executedcommand;

import bt.h;
import bt.p0;
import com.facebook.react.uimanager.ViewProps;
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
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 '2\u00020\u0001:\u0002&'B+\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\u0004\b\u0007\u0010\bB9\b\u0010\u0012\u0006\u0010\t\u001a\u00020\u0003\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0007\u0010\fJ\u0010\u0010\u0014\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\u000eJ\u0010\u0010\u0015\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\u000eJ\u0010\u0010\u0016\u001a\u0004\u0018\u00010\u0006HÆ\u0003¢\u0006\u0002\u0010\u0012J2\u0010\u0017\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006HÆ\u0001¢\u0006\u0002\u0010\u0018J\u0013\u0010\u0019\u001a\u00020\u00062\b\u0010\u001a\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001b\u001a\u00020\u0003HÖ\u0001J\t\u0010\u001c\u001a\u00020\u001dHÖ\u0001J%\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u00002\u0006\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020$H\u0001¢\u0006\u0002\b%R\u0015\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\u000f\u001a\u0004\b\r\u0010\u000eR\u0015\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\u000f\u001a\u0004\b\u0010\u0010\u000eR\u0015\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0011\u0010\u0012¨\u0006("}, d2 = {"Lcom/discord/chat/bridge/executedcommand/ExecutedCommandBackgroundStyles;", "", ViewProps.COLOR, "", "borderRadius", "spaceAround", "", "<init>", "(Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getBorderRadius", "getSpaceAround", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "component1", "component2", "component3", "copy", "(Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;)Lcom/discord/chat/bridge/executedcommand/ExecutedCommandBackgroundStyles;", "equals", "other", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ExecutedCommandBackgroundStyles {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final Integer borderRadius;
    private final Integer color;
    private final Boolean spaceAround;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/executedcommand/ExecutedCommandBackgroundStyles$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/executedcommand/ExecutedCommandBackgroundStyles;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ExecutedCommandBackgroundStyles$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public ExecutedCommandBackgroundStyles() {
        this((Integer) null, (Integer) null, (Boolean) null, 7, (DefaultConstructorMarker) null);
    }

    public static /* synthetic */ ExecutedCommandBackgroundStyles copy$default(ExecutedCommandBackgroundStyles executedCommandBackgroundStyles, Integer num, Integer num2, Boolean bool, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            num = executedCommandBackgroundStyles.color;
        }
        if ((i10 & 2) != 0) {
            num2 = executedCommandBackgroundStyles.borderRadius;
        }
        if ((i10 & 4) != 0) {
            bool = executedCommandBackgroundStyles.spaceAround;
        }
        return executedCommandBackgroundStyles.copy(num, num2, bool);
    }

    public static final /* synthetic */ void write$Self$chat_release(ExecutedCommandBackgroundStyles executedCommandBackgroundStyles, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        if (compositeEncoder.y(serialDescriptor, 0) || executedCommandBackgroundStyles.color != null) {
            compositeEncoder.B(serialDescriptor, 0, p0.f7678a, executedCommandBackgroundStyles.color);
        }
        if (compositeEncoder.y(serialDescriptor, 1) || executedCommandBackgroundStyles.borderRadius != null) {
            compositeEncoder.B(serialDescriptor, 1, p0.f7678a, executedCommandBackgroundStyles.borderRadius);
        }
        if (compositeEncoder.y(serialDescriptor, 2) || !Intrinsics.areEqual(executedCommandBackgroundStyles.spaceAround, Boolean.FALSE)) {
            compositeEncoder.B(serialDescriptor, 2, h.f7626a, executedCommandBackgroundStyles.spaceAround);
        }
    }

    public final Integer component1() {
        return this.color;
    }

    public final Integer component2() {
        return this.borderRadius;
    }

    public final Boolean component3() {
        return this.spaceAround;
    }

    @NotNull
    public final ExecutedCommandBackgroundStyles copy(Integer num, Integer num2, Boolean bool) {
        return new ExecutedCommandBackgroundStyles(num, num2, bool);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ExecutedCommandBackgroundStyles) {
            ExecutedCommandBackgroundStyles executedCommandBackgroundStyles = (ExecutedCommandBackgroundStyles) obj;
            return Intrinsics.areEqual(this.color, executedCommandBackgroundStyles.color) && Intrinsics.areEqual(this.borderRadius, executedCommandBackgroundStyles.borderRadius) && Intrinsics.areEqual(this.spaceAround, executedCommandBackgroundStyles.spaceAround);
        }
        return false;
    }

    public final Integer getBorderRadius() {
        return this.borderRadius;
    }

    public final Integer getColor() {
        return this.color;
    }

    public final Boolean getSpaceAround() {
        return this.spaceAround;
    }

    public int hashCode() {
        Integer num = this.color;
        int hashCode = (num == null ? 0 : num.hashCode()) * 31;
        Integer num2 = this.borderRadius;
        int hashCode2 = (hashCode + (num2 == null ? 0 : num2.hashCode())) * 31;
        Boolean bool = this.spaceAround;
        return hashCode2 + (bool != null ? bool.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        Integer num = this.color;
        Integer num2 = this.borderRadius;
        Boolean bool = this.spaceAround;
        return "ExecutedCommandBackgroundStyles(color=" + num + ", borderRadius=" + num2 + ", spaceAround=" + bool + ")";
    }

    public /* synthetic */ ExecutedCommandBackgroundStyles(int i10, Integer num, Integer num2, Boolean bool, SerializationConstructorMarker serializationConstructorMarker) {
        if ((i10 & 1) == 0) {
            this.color = null;
        } else {
            this.color = num;
        }
        if ((i10 & 2) == 0) {
            this.borderRadius = null;
        } else {
            this.borderRadius = num2;
        }
        if ((i10 & 4) == 0) {
            this.spaceAround = Boolean.FALSE;
        } else {
            this.spaceAround = bool;
        }
    }

    public ExecutedCommandBackgroundStyles(Integer num, Integer num2, Boolean bool) {
        this.color = num;
        this.borderRadius = num2;
        this.spaceAround = bool;
    }

    public /* synthetic */ ExecutedCommandBackgroundStyles(Integer num, Integer num2, Boolean bool, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : num, (i10 & 2) != 0 ? null : num2, (i10 & 4) != 0 ? Boolean.FALSE : bool);
    }
}
