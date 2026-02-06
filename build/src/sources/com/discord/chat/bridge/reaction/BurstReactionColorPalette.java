package com.discord.chat.bridge.reaction;

import com.discord.reactions.ReactionView;
import com.facebook.react.uimanager.ViewProps;
import ft.m;
import jt.n2;
import jt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 )2\u00020\u0001:\u0002()B-\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tBA\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\b\u0010\u000eJ\u000b\u0010\u0015\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0016\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0017\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0007HÆ\u0003J7\u0010\u0019\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001J\u0013\u0010\u001a\u001a\u00020\u001b2\b\u0010\u001c\u001a\u0004\u0018\u00010\u001dHÖ\u0003J\t\u0010\u001e\u001a\u00020\u000bHÖ\u0001J\t\u0010\u001f\u001a\u00020\u0003HÖ\u0001J%\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020\u00002\u0006\u0010#\u001a\u00020$2\u0006\u0010%\u001a\u00020&H\u0001¢\u0006\u0002\b'R\u0016\u0010\u0002\u001a\u0004\u0018\u00010\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0016\u0010\u0004\u001a\u0004\u0018\u00010\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0010R\u0016\u0010\u0005\u001a\u0004\u0018\u00010\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0010R\u0014\u0010\u0006\u001a\u00020\u0007X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014¨\u0006*"}, d2 = {"Lcom/discord/chat/bridge/reaction/BurstReactionColorPalette;", "Lcom/discord/reactions/ReactionView$BurstColorPalette;", ViewProps.BACKGROUND_COLOR, "", "accentColor", "highlightColor", ViewProps.OPACITY, "", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;F)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;FLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getBackgroundColor", "()Ljava/lang/String;", "getAccentColor", "getHighlightColor", "getOpacity", "()F", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BurstReactionColorPalette implements ReactionView.BurstColorPalette {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String accentColor;
    private final String backgroundColor;
    private final String highlightColor;
    private final float opacity;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/reaction/BurstReactionColorPalette$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/reaction/BurstReactionColorPalette;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return BurstReactionColorPalette$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ BurstReactionColorPalette(int i10, String str, String str2, String str3, float f10, SerializationConstructorMarker serializationConstructorMarker) {
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, BurstReactionColorPalette$$serializer.INSTANCE.getDescriptor());
        }
        this.backgroundColor = str;
        this.accentColor = str2;
        this.highlightColor = str3;
        this.opacity = f10;
    }

    public static /* synthetic */ BurstReactionColorPalette copy$default(BurstReactionColorPalette burstReactionColorPalette, String str, String str2, String str3, float f10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = burstReactionColorPalette.backgroundColor;
        }
        if ((i10 & 2) != 0) {
            str2 = burstReactionColorPalette.accentColor;
        }
        if ((i10 & 4) != 0) {
            str3 = burstReactionColorPalette.highlightColor;
        }
        if ((i10 & 8) != 0) {
            f10 = burstReactionColorPalette.opacity;
        }
        return burstReactionColorPalette.copy(str, str2, str3, f10);
    }

    public static final /* synthetic */ void write$Self$chat_release(BurstReactionColorPalette burstReactionColorPalette, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        n2 n2Var = n2.f31041a;
        compositeEncoder.l(serialDescriptor, 0, n2Var, burstReactionColorPalette.getBackgroundColor());
        compositeEncoder.l(serialDescriptor, 1, n2Var, burstReactionColorPalette.getAccentColor());
        compositeEncoder.l(serialDescriptor, 2, n2Var, burstReactionColorPalette.getHighlightColor());
        compositeEncoder.r(serialDescriptor, 3, burstReactionColorPalette.getOpacity());
    }

    public final String component1() {
        return this.backgroundColor;
    }

    public final String component2() {
        return this.accentColor;
    }

    public final String component3() {
        return this.highlightColor;
    }

    public final float component4() {
        return this.opacity;
    }

    @NotNull
    public final BurstReactionColorPalette copy(String str, String str2, String str3, float f10) {
        return new BurstReactionColorPalette(str, str2, str3, f10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof BurstReactionColorPalette) {
            BurstReactionColorPalette burstReactionColorPalette = (BurstReactionColorPalette) obj;
            return Intrinsics.areEqual(this.backgroundColor, burstReactionColorPalette.backgroundColor) && Intrinsics.areEqual(this.accentColor, burstReactionColorPalette.accentColor) && Intrinsics.areEqual(this.highlightColor, burstReactionColorPalette.highlightColor) && Float.compare(this.opacity, burstReactionColorPalette.opacity) == 0;
        }
        return false;
    }

    @Override // com.discord.reactions.ReactionView.BurstColorPalette
    public String getAccentColor() {
        return this.accentColor;
    }

    @Override // com.discord.reactions.ReactionView.BurstColorPalette
    public String getBackgroundColor() {
        return this.backgroundColor;
    }

    @Override // com.discord.reactions.ReactionView.BurstColorPalette
    public String getHighlightColor() {
        return this.highlightColor;
    }

    @Override // com.discord.reactions.ReactionView.BurstColorPalette
    public float getOpacity() {
        return this.opacity;
    }

    public int hashCode() {
        String str = this.backgroundColor;
        int hashCode = (str == null ? 0 : str.hashCode()) * 31;
        String str2 = this.accentColor;
        int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.highlightColor;
        return ((hashCode2 + (str3 != null ? str3.hashCode() : 0)) * 31) + Float.hashCode(this.opacity);
    }

    @NotNull
    public String toString() {
        String str = this.backgroundColor;
        String str2 = this.accentColor;
        String str3 = this.highlightColor;
        float f10 = this.opacity;
        return "BurstReactionColorPalette(backgroundColor=" + str + ", accentColor=" + str2 + ", highlightColor=" + str3 + ", opacity=" + f10 + ")";
    }

    public BurstReactionColorPalette(String str, String str2, String str3, float f10) {
        this.backgroundColor = str;
        this.accentColor = str2;
        this.highlightColor = str3;
        this.opacity = f10;
    }
}
