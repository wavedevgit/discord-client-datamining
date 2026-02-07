package com.discord.chat.bridge;

import com.facebook.react.uimanager.ViewProps;
import ft.m;
import jt.p0;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \"2\u00020\u0001:\u0002!\"B\u001f\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0005\u0010\u0006B/\b\u0010\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\u0005\u0010\nJ\u0010\u0010\u000f\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\fJ\u0010\u0010\u0010\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\fJ&\u0010\u0011\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003HÆ\u0001¢\u0006\u0002\u0010\u0012J\u0013\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0017\u001a\u00020\u0018HÖ\u0001J%\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u00002\u0006\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u001fH\u0001¢\u0006\u0002\b R\u0015\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\r\u001a\u0004\b\u000b\u0010\fR\u0015\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\r\u001a\u0004\b\u000e\u0010\f¨\u0006#"}, d2 = {"Lcom/discord/chat/bridge/BackgroundHighlight;", "", ViewProps.BACKGROUND_COLOR, "", "gutterColor", "<init>", "(Ljava/lang/Integer;Ljava/lang/Integer;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/Integer;Ljava/lang/Integer;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getBackgroundColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getGutterColor", "component1", "component2", "copy", "(Ljava/lang/Integer;Ljava/lang/Integer;)Lcom/discord/chat/bridge/BackgroundHighlight;", "equals", "", "other", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BackgroundHighlight {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final Integer backgroundColor;
    private final Integer gutterColor;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/BackgroundHighlight$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/BackgroundHighlight;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return BackgroundHighlight$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public BackgroundHighlight() {
        this((Integer) null, (Integer) null, 3, (DefaultConstructorMarker) null);
    }

    public static /* synthetic */ BackgroundHighlight copy$default(BackgroundHighlight backgroundHighlight, Integer num, Integer num2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            num = backgroundHighlight.backgroundColor;
        }
        if ((i10 & 2) != 0) {
            num2 = backgroundHighlight.gutterColor;
        }
        return backgroundHighlight.copy(num, num2);
    }

    public static final /* synthetic */ void write$Self$chat_release(BackgroundHighlight backgroundHighlight, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        if (compositeEncoder.A(serialDescriptor, 0) || backgroundHighlight.backgroundColor != null) {
            compositeEncoder.l(serialDescriptor, 0, p0.f31105a, backgroundHighlight.backgroundColor);
        }
        if (compositeEncoder.A(serialDescriptor, 1) || backgroundHighlight.gutterColor != null) {
            compositeEncoder.l(serialDescriptor, 1, p0.f31105a, backgroundHighlight.gutterColor);
        }
    }

    public final Integer component1() {
        return this.backgroundColor;
    }

    public final Integer component2() {
        return this.gutterColor;
    }

    @NotNull
    public final BackgroundHighlight copy(Integer num, Integer num2) {
        return new BackgroundHighlight(num, num2);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof BackgroundHighlight) {
            BackgroundHighlight backgroundHighlight = (BackgroundHighlight) obj;
            return Intrinsics.areEqual(this.backgroundColor, backgroundHighlight.backgroundColor) && Intrinsics.areEqual(this.gutterColor, backgroundHighlight.gutterColor);
        }
        return false;
    }

    public final Integer getBackgroundColor() {
        return this.backgroundColor;
    }

    public final Integer getGutterColor() {
        return this.gutterColor;
    }

    public int hashCode() {
        Integer num = this.backgroundColor;
        int hashCode = (num == null ? 0 : num.hashCode()) * 31;
        Integer num2 = this.gutterColor;
        return hashCode + (num2 != null ? num2.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        Integer num = this.backgroundColor;
        Integer num2 = this.gutterColor;
        return "BackgroundHighlight(backgroundColor=" + num + ", gutterColor=" + num2 + ")";
    }

    public /* synthetic */ BackgroundHighlight(int i10, Integer num, Integer num2, SerializationConstructorMarker serializationConstructorMarker) {
        if ((i10 & 1) == 0) {
            this.backgroundColor = null;
        } else {
            this.backgroundColor = num;
        }
        if ((i10 & 2) == 0) {
            this.gutterColor = null;
        } else {
            this.gutterColor = num2;
        }
    }

    public BackgroundHighlight(Integer num, Integer num2) {
        this.backgroundColor = num;
        this.gutterColor = num2;
    }

    public /* synthetic */ BackgroundHighlight(Integer num, Integer num2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : num, (i10 & 2) != 0 ? null : num2);
    }
}
