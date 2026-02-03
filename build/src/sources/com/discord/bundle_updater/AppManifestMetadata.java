package com.discord.bundle_updater;

import bt.n2;
import bt.v1;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.facebook.react.bridge.WritableNativeMap;
import jr.v;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@ys.m
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 ,2\u00020\u0001:\u0002+,B-\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tBA\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\b\u0010\u000eJ\u0006\u0010\u0018\u001a\u00020\u0019J\t\u0010\u001a\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u001b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u001c\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001d\u001a\u00020\u0007HÆ\u0003J3\u0010\u001e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001J\u0013\u0010\u001f\u001a\u00020\u00072\b\u0010 \u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010!\u001a\u00020\u000bHÖ\u0001J\t\u0010\"\u001a\u00020\u0003HÖ\u0001J%\u0010#\u001a\u00020$2\u0006\u0010%\u001a\u00020\u00002\u0006\u0010&\u001a\u00020'2\u0006\u0010(\u001a\u00020)H\u0001¢\u0006\u0002\b*R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u001e\u0010\u0004\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u0011\u0010\u0012\u001a\u0004\b\u0013\u0010\u0010R\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0010R\u001c\u0010\u0006\u001a\u00020\u00078\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b\u0015\u0010\u0012\u001a\u0004\b\u0016\u0010\u0017¨\u0006-"}, d2 = {"Lcom/discord/bundle_updater/AppManifestMetadata;", "", "build", "", "releaseName", "commit", "confirmUpdate", "", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Z)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;ZLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getBuild", "()Ljava/lang/String;", "getReleaseName$annotations", "()V", "getReleaseName", "getCommit", "getConfirmUpdate$annotations", "getConfirmUpdate", "()Z", "toNativeMap", "Lcom/facebook/react/bridge/WritableNativeMap;", "component1", "component2", "component3", "component4", "copy", "equals", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$bundle_updater_release", "$serializer", "Companion", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AppManifestMetadata {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String build;
    @NotNull
    private final String commit;
    private final boolean confirmUpdate;
    private final String releaseName;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/bundle_updater/AppManifestMetadata$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/bundle_updater/AppManifestMetadata;", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return AppManifestMetadata$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ AppManifestMetadata(int i10, String str, String str2, String str3, boolean z10, SerializationConstructorMarker serializationConstructorMarker) {
        if (5 != (i10 & 5)) {
            v1.b(i10, 5, AppManifestMetadata$$serializer.INSTANCE.getDescriptor());
        }
        this.build = str;
        if ((i10 & 2) == 0) {
            this.releaseName = null;
        } else {
            this.releaseName = str2;
        }
        this.commit = str3;
        if ((i10 & 8) == 0) {
            this.confirmUpdate = false;
        } else {
            this.confirmUpdate = z10;
        }
    }

    public static /* synthetic */ AppManifestMetadata copy$default(AppManifestMetadata appManifestMetadata, String str, String str2, String str3, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = appManifestMetadata.build;
        }
        if ((i10 & 2) != 0) {
            str2 = appManifestMetadata.releaseName;
        }
        if ((i10 & 4) != 0) {
            str3 = appManifestMetadata.commit;
        }
        if ((i10 & 8) != 0) {
            z10 = appManifestMetadata.confirmUpdate;
        }
        return appManifestMetadata.copy(str, str2, str3, z10);
    }

    public static /* synthetic */ void getConfirmUpdate$annotations() {
    }

    public static /* synthetic */ void getReleaseName$annotations() {
    }

    public static final /* synthetic */ void write$Self$bundle_updater_release(AppManifestMetadata appManifestMetadata, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, appManifestMetadata.build);
        if (compositeEncoder.y(serialDescriptor, 1) || appManifestMetadata.releaseName != null) {
            compositeEncoder.B(serialDescriptor, 1, n2.f7662a, appManifestMetadata.releaseName);
        }
        compositeEncoder.x(serialDescriptor, 2, appManifestMetadata.commit);
        if (compositeEncoder.y(serialDescriptor, 3) || appManifestMetadata.confirmUpdate) {
            compositeEncoder.w(serialDescriptor, 3, appManifestMetadata.confirmUpdate);
        }
    }

    @NotNull
    public final String component1() {
        return this.build;
    }

    public final String component2() {
        return this.releaseName;
    }

    @NotNull
    public final String component3() {
        return this.commit;
    }

    public final boolean component4() {
        return this.confirmUpdate;
    }

    @NotNull
    public final AppManifestMetadata copy(@NotNull String build, String str, @NotNull String commit, boolean z10) {
        Intrinsics.checkNotNullParameter(build, "build");
        Intrinsics.checkNotNullParameter(commit, "commit");
        return new AppManifestMetadata(build, str, commit, z10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof AppManifestMetadata) {
            AppManifestMetadata appManifestMetadata = (AppManifestMetadata) obj;
            return Intrinsics.areEqual(this.build, appManifestMetadata.build) && Intrinsics.areEqual(this.releaseName, appManifestMetadata.releaseName) && Intrinsics.areEqual(this.commit, appManifestMetadata.commit) && this.confirmUpdate == appManifestMetadata.confirmUpdate;
        }
        return false;
    }

    @NotNull
    public final String getBuild() {
        return this.build;
    }

    @NotNull
    public final String getCommit() {
        return this.commit;
    }

    public final boolean getConfirmUpdate() {
        return this.confirmUpdate;
    }

    public final String getReleaseName() {
        return this.releaseName;
    }

    public int hashCode() {
        int hashCode = this.build.hashCode() * 31;
        String str = this.releaseName;
        return ((((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.commit.hashCode()) * 31) + Boolean.hashCode(this.confirmUpdate);
    }

    @NotNull
    public final WritableNativeMap toNativeMap() {
        return NativeMapExtensionsKt.nativeMapOf(v.a("build", this.build), v.a("release_name", this.releaseName), v.a("commit", this.commit), v.a("confirm_update", Boolean.valueOf(this.confirmUpdate)));
    }

    @NotNull
    public String toString() {
        String str = this.build;
        String str2 = this.releaseName;
        String str3 = this.commit;
        boolean z10 = this.confirmUpdate;
        return "AppManifestMetadata(build=" + str + ", releaseName=" + str2 + ", commit=" + str3 + ", confirmUpdate=" + z10 + ")";
    }

    public AppManifestMetadata(@NotNull String build, String str, @NotNull String commit, boolean z10) {
        Intrinsics.checkNotNullParameter(build, "build");
        Intrinsics.checkNotNullParameter(commit, "commit");
        this.build = build;
        this.releaseName = str;
        this.commit = commit;
        this.confirmUpdate = z10;
    }

    public /* synthetic */ AppManifestMetadata(String str, String str2, String str3, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i10 & 2) != 0 ? null : str2, str3, (i10 & 8) != 0 ? false : z10);
    }
}
