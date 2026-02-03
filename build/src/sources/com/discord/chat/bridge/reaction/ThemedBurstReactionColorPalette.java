package com.discord.chat.bridge.reaction;

import at.m;
import com.discord.reactions.ReactionView;
import dt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 %2\u00020\u0001:\u0002$%B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006B/\b\u0010\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u0005\u0010\u000bJ\t\u0010\u0012\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\u001d\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018HÖ\u0003J\t\u0010\u0019\u001a\u00020\bHÖ\u0001J\t\u0010\u001a\u001a\u00020\u001bHÖ\u0001J%\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u00002\u0006\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\"H\u0001¢\u0006\u0002\b#R\u001c\u0010\u0002\u001a\u00020\u00038\u0016X\u0097\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\f\u0010\r\u001a\u0004\b\u000e\u0010\u000fR\u001c\u0010\u0004\u001a\u00020\u00038\u0016X\u0097\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u0010\u0010\r\u001a\u0004\b\u0011\u0010\u000f¨\u0006&"}, d2 = {"Lcom/discord/chat/bridge/reaction/ThemedBurstReactionColorPalette;", "Lcom/discord/reactions/ReactionView$ThemedBurstColorPalette;", "light", "Lcom/discord/chat/bridge/reaction/BurstReactionColorPalette;", "dark", "<init>", "(Lcom/discord/chat/bridge/reaction/BurstReactionColorPalette;Lcom/discord/chat/bridge/reaction/BurstReactionColorPalette;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/chat/bridge/reaction/BurstReactionColorPalette;Lcom/discord/chat/bridge/reaction/BurstReactionColorPalette;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getLight$annotations", "()V", "getLight", "()Lcom/discord/chat/bridge/reaction/BurstReactionColorPalette;", "getDark$annotations", "getDark", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ThemedBurstReactionColorPalette implements ReactionView.ThemedBurstColorPalette {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final BurstReactionColorPalette dark;
    @NotNull
    private final BurstReactionColorPalette light;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/reaction/ThemedBurstReactionColorPalette$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/reaction/ThemedBurstReactionColorPalette;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ThemedBurstReactionColorPalette$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ ThemedBurstReactionColorPalette(int i10, BurstReactionColorPalette burstReactionColorPalette, BurstReactionColorPalette burstReactionColorPalette2, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, ThemedBurstReactionColorPalette$$serializer.INSTANCE.getDescriptor());
        }
        this.light = burstReactionColorPalette;
        this.dark = burstReactionColorPalette2;
    }

    public static /* synthetic */ ThemedBurstReactionColorPalette copy$default(ThemedBurstReactionColorPalette themedBurstReactionColorPalette, BurstReactionColorPalette burstReactionColorPalette, BurstReactionColorPalette burstReactionColorPalette2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            burstReactionColorPalette = themedBurstReactionColorPalette.light;
        }
        if ((i10 & 2) != 0) {
            burstReactionColorPalette2 = themedBurstReactionColorPalette.dark;
        }
        return themedBurstReactionColorPalette.copy(burstReactionColorPalette, burstReactionColorPalette2);
    }

    public static /* synthetic */ void getDark$annotations() {
    }

    public static /* synthetic */ void getLight$annotations() {
    }

    public static final /* synthetic */ void write$Self$chat_release(ThemedBurstReactionColorPalette themedBurstReactionColorPalette, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        BurstReactionColorPalette$$serializer burstReactionColorPalette$$serializer = BurstReactionColorPalette$$serializer.INSTANCE;
        compositeEncoder.D(serialDescriptor, 0, burstReactionColorPalette$$serializer, themedBurstReactionColorPalette.getLight());
        compositeEncoder.D(serialDescriptor, 1, burstReactionColorPalette$$serializer, themedBurstReactionColorPalette.getDark());
    }

    @NotNull
    public final BurstReactionColorPalette component1() {
        return this.light;
    }

    @NotNull
    public final BurstReactionColorPalette component2() {
        return this.dark;
    }

    @NotNull
    public final ThemedBurstReactionColorPalette copy(@NotNull BurstReactionColorPalette light, @NotNull BurstReactionColorPalette dark) {
        Intrinsics.checkNotNullParameter(light, "light");
        Intrinsics.checkNotNullParameter(dark, "dark");
        return new ThemedBurstReactionColorPalette(light, dark);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ThemedBurstReactionColorPalette) {
            ThemedBurstReactionColorPalette themedBurstReactionColorPalette = (ThemedBurstReactionColorPalette) obj;
            return Intrinsics.areEqual(this.light, themedBurstReactionColorPalette.light) && Intrinsics.areEqual(this.dark, themedBurstReactionColorPalette.dark);
        }
        return false;
    }

    public int hashCode() {
        return (this.light.hashCode() * 31) + this.dark.hashCode();
    }

    @NotNull
    public String toString() {
        BurstReactionColorPalette burstReactionColorPalette = this.light;
        BurstReactionColorPalette burstReactionColorPalette2 = this.dark;
        return "ThemedBurstReactionColorPalette(light=" + burstReactionColorPalette + ", dark=" + burstReactionColorPalette2 + ")";
    }

    public ThemedBurstReactionColorPalette(@NotNull BurstReactionColorPalette light, @NotNull BurstReactionColorPalette dark) {
        Intrinsics.checkNotNullParameter(light, "light");
        Intrinsics.checkNotNullParameter(dark, "dark");
        this.light = light;
        this.dark = dark;
    }

    @Override // com.discord.reactions.ReactionView.ThemedBurstColorPalette
    @NotNull
    public BurstReactionColorPalette getDark() {
        return this.dark;
    }

    @Override // com.discord.reactions.ReactionView.ThemedBurstColorPalette
    @NotNull
    public BurstReactionColorPalette getLight() {
        return this.light;
    }
}
