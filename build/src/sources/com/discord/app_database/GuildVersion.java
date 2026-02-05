package com.discord.app_database;

import com.facebook.react.devsupport.StackTraceHelper;
import dt.m;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \"2\u00020\u0001:\u0002!\"B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007B-\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0006\u0010\fJ\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0012\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u0013\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0014\u001a\u00020\u00152\b\u0010\u0016\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0017\u001a\u00020\tHÖ\u0001J\t\u0010\u0018\u001a\u00020\u0003HÖ\u0001J%\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u00002\u0006\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u001fH\u0001¢\u0006\u0002\b R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010¨\u0006#"}, d2 = {"Lcom/discord/app_database/GuildVersion;", "", StackTraceHelper.ID_KEY, "", "version", "", "<init>", "(Ljava/lang/String;J)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;JLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getId", "()Ljava/lang/String;", "getVersion", "()J", "component1", "component2", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$app_database_release", "$serializer", "Companion", "app_database_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GuildVersion {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f8531id;
    private final long version;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/app_database/GuildVersion$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/app_database/GuildVersion;", "app_database_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return GuildVersion$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ GuildVersion(int i10, String str, long j10, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, GuildVersion$$serializer.INSTANCE.getDescriptor());
        }
        this.f8531id = str;
        this.version = j10;
    }

    public static /* synthetic */ GuildVersion copy$default(GuildVersion guildVersion, String str, long j10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = guildVersion.f8531id;
        }
        if ((i10 & 2) != 0) {
            j10 = guildVersion.version;
        }
        return guildVersion.copy(str, j10);
    }

    public static final /* synthetic */ void write$Self$app_database_release(GuildVersion guildVersion, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, guildVersion.f8531id);
        compositeEncoder.E(serialDescriptor, 1, guildVersion.version);
    }

    @NotNull
    public final String component1() {
        return this.f8531id;
    }

    public final long component2() {
        return this.version;
    }

    @NotNull
    public final GuildVersion copy(@NotNull String id2, long j10) {
        Intrinsics.checkNotNullParameter(id2, "id");
        return new GuildVersion(id2, j10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof GuildVersion) {
            GuildVersion guildVersion = (GuildVersion) obj;
            return Intrinsics.areEqual(this.f8531id, guildVersion.f8531id) && this.version == guildVersion.version;
        }
        return false;
    }

    @NotNull
    public final String getId() {
        return this.f8531id;
    }

    public final long getVersion() {
        return this.version;
    }

    public int hashCode() {
        return (this.f8531id.hashCode() * 31) + Long.hashCode(this.version);
    }

    @NotNull
    public String toString() {
        String str = this.f8531id;
        long j10 = this.version;
        return "GuildVersion(id=" + str + ", version=" + j10 + ")";
    }

    public GuildVersion(@NotNull String id2, long j10) {
        Intrinsics.checkNotNullParameter(id2, "id");
        this.f8531id = id2;
        this.version = j10;
    }
}
