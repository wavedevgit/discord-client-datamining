package com.discord.chat.bridge.truncation;

import bt.n2;
import bt.p0;
import bt.v1;
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
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0015\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 +2\u00020\u0001:\u0002*+B/\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0003\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\t\u0010\nB?\b\u0010\u0012\u0006\u0010\u000b\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\t\u0010\u000eJ\t\u0010\u0018\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0019\u001a\u00020\u0005HÆ\u0003J\u000b\u0010\u001a\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\u0010\u0010\u001b\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\u0016J:\u0010\u001c\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\n\b\u0003\u0010\b\u001a\u0004\u0018\u00010\u0003HÆ\u0001¢\u0006\u0002\u0010\u001dJ\u0013\u0010\u001e\u001a\u00020\u00052\b\u0010\u001f\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010 \u001a\u00020\u0003HÖ\u0001J\t\u0010!\u001a\u00020\u0007HÖ\u0001J%\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020\u00002\u0006\u0010%\u001a\u00020&2\u0006\u0010'\u001a\u00020(H\u0001¢\u0006\u0002\b)R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0015\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\u0017\u001a\u0004\b\u0015\u0010\u0016¨\u0006,"}, d2 = {"Lcom/discord/chat/bridge/truncation/Truncation;", "", ViewProps.NUMBER_OF_LINES, "", "expandable", "", "seeMoreLabel", "", "seeMoreLabelColor", "<init>", "(IZLjava/lang/String;Ljava/lang/Integer;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IIZLjava/lang/String;Ljava/lang/Integer;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getNumberOfLines", "()I", "getExpandable", "()Z", "getSeeMoreLabel", "()Ljava/lang/String;", "getSeeMoreLabelColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "component1", "component2", "component3", "component4", "copy", "(IZLjava/lang/String;Ljava/lang/Integer;)Lcom/discord/chat/bridge/truncation/Truncation;", "equals", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Truncation {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final boolean expandable;
    private final int numberOfLines;
    private final String seeMoreLabel;
    private final Integer seeMoreLabelColor;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/truncation/Truncation$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/truncation/Truncation;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return Truncation$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ Truncation(int i10, int i11, boolean z10, String str, Integer num, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, Truncation$$serializer.INSTANCE.getDescriptor());
        }
        this.numberOfLines = i11;
        this.expandable = z10;
        if ((i10 & 4) == 0) {
            this.seeMoreLabel = null;
        } else {
            this.seeMoreLabel = str;
        }
        if ((i10 & 8) == 0) {
            this.seeMoreLabelColor = null;
        } else {
            this.seeMoreLabelColor = num;
        }
    }

    public static /* synthetic */ Truncation copy$default(Truncation truncation, int i10, boolean z10, String str, Integer num, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = truncation.numberOfLines;
        }
        if ((i11 & 2) != 0) {
            z10 = truncation.expandable;
        }
        if ((i11 & 4) != 0) {
            str = truncation.seeMoreLabel;
        }
        if ((i11 & 8) != 0) {
            num = truncation.seeMoreLabelColor;
        }
        return truncation.copy(i10, z10, str, num);
    }

    public static final /* synthetic */ void write$Self$chat_release(Truncation truncation, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.v(serialDescriptor, 0, truncation.numberOfLines);
        compositeEncoder.w(serialDescriptor, 1, truncation.expandable);
        if (compositeEncoder.y(serialDescriptor, 2) || truncation.seeMoreLabel != null) {
            compositeEncoder.B(serialDescriptor, 2, n2.f7662a, truncation.seeMoreLabel);
        }
        if (compositeEncoder.y(serialDescriptor, 3) || truncation.seeMoreLabelColor != null) {
            compositeEncoder.B(serialDescriptor, 3, p0.f7678a, truncation.seeMoreLabelColor);
        }
    }

    public final int component1() {
        return this.numberOfLines;
    }

    public final boolean component2() {
        return this.expandable;
    }

    public final String component3() {
        return this.seeMoreLabel;
    }

    public final Integer component4() {
        return this.seeMoreLabelColor;
    }

    @NotNull
    public final Truncation copy(int i10, boolean z10, String str, Integer num) {
        return new Truncation(i10, z10, str, num);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Truncation) {
            Truncation truncation = (Truncation) obj;
            return this.numberOfLines == truncation.numberOfLines && this.expandable == truncation.expandable && Intrinsics.areEqual(this.seeMoreLabel, truncation.seeMoreLabel) && Intrinsics.areEqual(this.seeMoreLabelColor, truncation.seeMoreLabelColor);
        }
        return false;
    }

    public final boolean getExpandable() {
        return this.expandable;
    }

    public final int getNumberOfLines() {
        return this.numberOfLines;
    }

    public final String getSeeMoreLabel() {
        return this.seeMoreLabel;
    }

    public final Integer getSeeMoreLabelColor() {
        return this.seeMoreLabelColor;
    }

    public int hashCode() {
        int hashCode = ((Integer.hashCode(this.numberOfLines) * 31) + Boolean.hashCode(this.expandable)) * 31;
        String str = this.seeMoreLabel;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        Integer num = this.seeMoreLabelColor;
        return hashCode2 + (num != null ? num.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        int i10 = this.numberOfLines;
        boolean z10 = this.expandable;
        String str = this.seeMoreLabel;
        Integer num = this.seeMoreLabelColor;
        return "Truncation(numberOfLines=" + i10 + ", expandable=" + z10 + ", seeMoreLabel=" + str + ", seeMoreLabelColor=" + num + ")";
    }

    public Truncation(int i10, boolean z10, String str, Integer num) {
        this.numberOfLines = i10;
        this.expandable = z10;
        this.seeMoreLabel = str;
        this.seeMoreLabelColor = num;
    }

    public /* synthetic */ Truncation(int i10, boolean z10, String str, Integer num, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, z10, (i11 & 4) != 0 ? null : str, (i11 & 8) != 0 ? null : num);
    }
}
