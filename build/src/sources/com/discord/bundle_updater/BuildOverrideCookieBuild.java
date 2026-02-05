package com.discord.bundle_updater;

import com.discord.react.utilities.NativeMapExtensionsKt;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.devsupport.StackTraceHelper;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import or.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \"2\u00020\u0001:\u0002!\"B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006B/\b\u0010\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u0005\u0010\u000bJ\u0006\u0010\u000f\u001a\u00020\u0010J\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0012\u001a\u00020\u0003HÆ\u0003J\u001d\u0010\u0013\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0014\u001a\u00020\u00152\b\u0010\u0016\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0017\u001a\u00020\bHÖ\u0001J\t\u0010\u0018\u001a\u00020\u0003HÖ\u0001J%\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u00002\u0006\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u001fH\u0001¢\u0006\u0002\b R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\r¨\u0006#"}, d2 = {"Lcom/discord/bundle_updater/BuildOverrideCookieBuild;", "", "type", "", StackTraceHelper.ID_KEY, "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getType", "()Ljava/lang/String;", "getId", "toNativeMap", "Lcom/facebook/react/bridge/WritableNativeMap;", "component1", "component2", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$bundle_updater_release", "$serializer", "Companion", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@dt.m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BuildOverrideCookieBuild {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull

    /* renamed from: id  reason: collision with root package name */
    private final String f8591id;
    @NotNull
    private final String type;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/bundle_updater/BuildOverrideCookieBuild$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/bundle_updater/BuildOverrideCookieBuild;", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return BuildOverrideCookieBuild$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ BuildOverrideCookieBuild(int i10, String str, String str2, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, BuildOverrideCookieBuild$$serializer.INSTANCE.getDescriptor());
        }
        this.type = str;
        this.f8591id = str2;
    }

    public static /* synthetic */ BuildOverrideCookieBuild copy$default(BuildOverrideCookieBuild buildOverrideCookieBuild, String str, String str2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = buildOverrideCookieBuild.type;
        }
        if ((i10 & 2) != 0) {
            str2 = buildOverrideCookieBuild.f8591id;
        }
        return buildOverrideCookieBuild.copy(str, str2);
    }

    public static final /* synthetic */ void write$Self$bundle_updater_release(BuildOverrideCookieBuild buildOverrideCookieBuild, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, buildOverrideCookieBuild.type);
        compositeEncoder.x(serialDescriptor, 1, buildOverrideCookieBuild.f8591id);
    }

    @NotNull
    public final String component1() {
        return this.type;
    }

    @NotNull
    public final String component2() {
        return this.f8591id;
    }

    @NotNull
    public final BuildOverrideCookieBuild copy(@NotNull String type, @NotNull String id2) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(id2, "id");
        return new BuildOverrideCookieBuild(type, id2);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof BuildOverrideCookieBuild) {
            BuildOverrideCookieBuild buildOverrideCookieBuild = (BuildOverrideCookieBuild) obj;
            return Intrinsics.areEqual(this.type, buildOverrideCookieBuild.type) && Intrinsics.areEqual(this.f8591id, buildOverrideCookieBuild.f8591id);
        }
        return false;
    }

    @NotNull
    public final String getId() {
        return this.f8591id;
    }

    @NotNull
    public final String getType() {
        return this.type;
    }

    public int hashCode() {
        return (this.type.hashCode() * 31) + this.f8591id.hashCode();
    }

    @NotNull
    public final WritableNativeMap toNativeMap() {
        return NativeMapExtensionsKt.nativeMapOf(v.a("type", this.type), v.a(StackTraceHelper.ID_KEY, this.f8591id));
    }

    @NotNull
    public String toString() {
        String str = this.type;
        String str2 = this.f8591id;
        return "BuildOverrideCookieBuild(type=" + str + ", id=" + str2 + ")";
    }

    public BuildOverrideCookieBuild(@NotNull String type, @NotNull String id2) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(id2, "id");
        this.type = type;
        this.f8591id = id2;
    }
}
