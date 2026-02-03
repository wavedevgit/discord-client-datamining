package com.discord.chat.bridge.botuikit;

import bt.n2;
import bt.v1;
import com.discord.primitives.GuildId;
import com.discord.primitives.GuildId$$serializer;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@ys.m
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 )2\u00020\u0001:\u0002()B#\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0007\u0010\bB9\b\u0010\u0012\u0006\u0010\t\u001a\u00020\n\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\u0007\u0010\rJ\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0015\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u0016\u0010\u0011J\u000b\u0010\u0017\u001a\u0004\u0018\u00010\u0003HÆ\u0003J0\u0010\u0018\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003HÆ\u0001¢\u0006\u0004\b\u0019\u0010\u001aJ\u0013\u0010\u001b\u001a\u00020\u001c2\b\u0010\u001d\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001e\u001a\u00020\nHÖ\u0001J\t\u0010\u001f\u001a\u00020\u0003HÖ\u0001J%\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020\u00002\u0006\u0010#\u001a\u00020$2\u0006\u0010%\u001a\u00020&H\u0001¢\u0006\u0002\b'R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0013\u0010\u0004\u001a\u00020\u0005¢\u0006\n\n\u0002\u0010\u0012\u001a\u0004\b\u0010\u0010\u0011R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u000f¨\u0006*"}, d2 = {"Lcom/discord/chat/bridge/botuikit/CheckpointGuild;", "", "guildName", "", "guildId", "Lcom/discord/primitives/GuildId;", "guildIcon", "<init>", "(Ljava/lang/String;JLjava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Lcom/discord/primitives/GuildId;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getGuildName", "()Ljava/lang/String;", "getGuildId-fYKD8eg", "()J", "J", "getGuildIcon", "component1", "component2", "component2-fYKD8eg", "component3", "copy", "copy-PzX8qg4", "(Ljava/lang/String;JLjava/lang/String;)Lcom/discord/chat/bridge/botuikit/CheckpointGuild;", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CheckpointGuild {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String guildIcon;
    private final long guildId;
    @NotNull
    private final String guildName;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/CheckpointGuild$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/CheckpointGuild;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return CheckpointGuild$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ CheckpointGuild(int i10, String str, GuildId guildId, String str2, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, str, guildId, str2, serializationConstructorMarker);
    }

    /* renamed from: copy-PzX8qg4$default  reason: not valid java name */
    public static /* synthetic */ CheckpointGuild m263copyPzX8qg4$default(CheckpointGuild checkpointGuild, String str, long j10, String str2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = checkpointGuild.guildName;
        }
        if ((i10 & 2) != 0) {
            j10 = checkpointGuild.guildId;
        }
        if ((i10 & 4) != 0) {
            str2 = checkpointGuild.guildIcon;
        }
        return checkpointGuild.m265copyPzX8qg4(str, j10, str2);
    }

    public static final /* synthetic */ void write$Self$chat_release(CheckpointGuild checkpointGuild, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, checkpointGuild.guildName);
        compositeEncoder.m(serialDescriptor, 1, GuildId$$serializer.INSTANCE, GuildId.m1073boximpl(checkpointGuild.guildId));
        if (compositeEncoder.y(serialDescriptor, 2) || checkpointGuild.guildIcon != null) {
            compositeEncoder.B(serialDescriptor, 2, n2.f7662a, checkpointGuild.guildIcon);
        }
    }

    @NotNull
    public final String component1() {
        return this.guildName;
    }

    /* renamed from: component2-fYKD8eg  reason: not valid java name */
    public final long m264component2fYKD8eg() {
        return this.guildId;
    }

    public final String component3() {
        return this.guildIcon;
    }

    @NotNull
    /* renamed from: copy-PzX8qg4  reason: not valid java name */
    public final CheckpointGuild m265copyPzX8qg4(@NotNull String guildName, long j10, String str) {
        Intrinsics.checkNotNullParameter(guildName, "guildName");
        return new CheckpointGuild(guildName, j10, str, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof CheckpointGuild) {
            CheckpointGuild checkpointGuild = (CheckpointGuild) obj;
            return Intrinsics.areEqual(this.guildName, checkpointGuild.guildName) && GuildId.m1077equalsimpl0(this.guildId, checkpointGuild.guildId) && Intrinsics.areEqual(this.guildIcon, checkpointGuild.guildIcon);
        }
        return false;
    }

    public final String getGuildIcon() {
        return this.guildIcon;
    }

    /* renamed from: getGuildId-fYKD8eg  reason: not valid java name */
    public final long m266getGuildIdfYKD8eg() {
        return this.guildId;
    }

    @NotNull
    public final String getGuildName() {
        return this.guildName;
    }

    public int hashCode() {
        int hashCode = ((this.guildName.hashCode() * 31) + GuildId.m1078hashCodeimpl(this.guildId)) * 31;
        String str = this.guildIcon;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    @NotNull
    public String toString() {
        String str = this.guildName;
        String m1080toStringimpl = GuildId.m1080toStringimpl(this.guildId);
        String str2 = this.guildIcon;
        return "CheckpointGuild(guildName=" + str + ", guildId=" + m1080toStringimpl + ", guildIcon=" + str2 + ")";
    }

    public /* synthetic */ CheckpointGuild(String str, long j10, String str2, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, str2);
    }

    private /* synthetic */ CheckpointGuild(int i10, String str, GuildId guildId, String str2, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, CheckpointGuild$$serializer.INSTANCE.getDescriptor());
        }
        this.guildName = str;
        this.guildId = guildId.m1082unboximpl();
        if ((i10 & 4) == 0) {
            this.guildIcon = null;
        } else {
            this.guildIcon = str2;
        }
    }

    private CheckpointGuild(String guildName, long j10, String str) {
        Intrinsics.checkNotNullParameter(guildName, "guildName");
        this.guildName = guildName;
        this.guildId = j10;
        this.guildIcon = str;
    }

    public /* synthetic */ CheckpointGuild(String str, long j10, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, (i10 & 4) != 0 ? null : str2, null);
    }
}
