package com.discord.bundle_updater;

import java.util.Map;
import jt.n2;
import jt.u0;
import jt.v1;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@ft.m
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 &2\u00020\u0001:\u0002%&B;\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0014\b\u0002\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00060\u0005\u0012\u0014\b\u0002\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00060\u0005¢\u0006\u0004\b\b\u0010\tBQ\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0014\u0010\u0004\u001a\u0010\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0006\u0018\u00010\u0005\u0012\u0014\u0010\u0007\u001a\u0010\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0006\u0018\u00010\u0005\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\b\u0010\u000eJ\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\u0015\u0010\u0015\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00060\u0005HÆ\u0003J\u0015\u0010\u0016\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00060\u0005HÆ\u0003J?\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\u0014\b\u0002\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00060\u00052\u0014\b\u0002\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00060\u0005HÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001b\u001a\u00020\u000bHÖ\u0001J\t\u0010\u001c\u001a\u00020\u0006HÖ\u0001J%\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u00002\u0006\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020#H\u0001¢\u0006\u0002\b$R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u001d\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00060\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u001d\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00060\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0012¨\u0006'"}, d2 = {"Lcom/discord/bundle_updater/AppManifest;", "", "metadata", "Lcom/discord/bundle_updater/AppManifestMetadata;", "hashes", "", "", "patches", "<init>", "(Lcom/discord/bundle_updater/AppManifestMetadata;Ljava/util/Map;Ljava/util/Map;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/bundle_updater/AppManifestMetadata;Ljava/util/Map;Ljava/util/Map;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getMetadata", "()Lcom/discord/bundle_updater/AppManifestMetadata;", "getHashes", "()Ljava/util/Map;", "getPatches", "component1", "component2", "component3", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$bundle_updater_release", "$serializer", "Companion", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AppManifest {
    @NotNull
    private static final Lazy[] $childSerializers;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final Map<String, String> hashes;
    @NotNull
    private final AppManifestMetadata metadata;
    @NotNull
    private final Map<String, String> patches;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/bundle_updater/AppManifest$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/bundle_updater/AppManifest;", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return AppManifest$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    static {
        qr.o oVar = qr.o.f48092e;
        $childSerializers = new Lazy[]{null, qr.l.b(oVar, new Function0() { // from class: com.discord.bundle_updater.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_;
                _childSerializers$_anonymous_ = AppManifest._childSerializers$_anonymous_();
                return _childSerializers$_anonymous_;
            }
        }), qr.l.b(oVar, new Function0() { // from class: com.discord.bundle_updater.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$0;
                _childSerializers$_anonymous_$0 = AppManifest._childSerializers$_anonymous_$0();
                return _childSerializers$_anonymous_$0;
            }
        })};
    }

    public /* synthetic */ AppManifest(int i10, AppManifestMetadata appManifestMetadata, Map map, Map map2, SerializationConstructorMarker serializationConstructorMarker) {
        if (1 != (i10 & 1)) {
            v1.b(i10, 1, AppManifest$$serializer.INSTANCE.getDescriptor());
        }
        this.metadata = appManifestMetadata;
        if ((i10 & 2) == 0) {
            this.hashes = o0.i();
        } else {
            this.hashes = map;
        }
        if ((i10 & 4) == 0) {
            this.patches = o0.i();
        } else {
            this.patches = map2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        n2 n2Var = n2.f31089a;
        return new u0(n2Var, n2Var);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$0() {
        n2 n2Var = n2.f31089a;
        return new u0(n2Var, n2Var);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ AppManifest copy$default(AppManifest appManifest, AppManifestMetadata appManifestMetadata, Map map, Map map2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            appManifestMetadata = appManifest.metadata;
        }
        if ((i10 & 2) != 0) {
            map = appManifest.hashes;
        }
        if ((i10 & 4) != 0) {
            map2 = appManifest.patches;
        }
        return appManifest.copy(appManifestMetadata, map, map2);
    }

    public static final /* synthetic */ void write$Self$bundle_updater_release(AppManifest appManifest, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.s(serialDescriptor, 0, AppManifestMetadata$$serializer.INSTANCE, appManifest.metadata);
        if (compositeEncoder.A(serialDescriptor, 1) || !Intrinsics.areEqual(appManifest.hashes, o0.i())) {
            compositeEncoder.s(serialDescriptor, 1, (ft.o) lazyArr[1].getValue(), appManifest.hashes);
        }
        if (compositeEncoder.A(serialDescriptor, 2) || !Intrinsics.areEqual(appManifest.patches, o0.i())) {
            compositeEncoder.s(serialDescriptor, 2, (ft.o) lazyArr[2].getValue(), appManifest.patches);
        }
    }

    @NotNull
    public final AppManifestMetadata component1() {
        return this.metadata;
    }

    @NotNull
    public final Map<String, String> component2() {
        return this.hashes;
    }

    @NotNull
    public final Map<String, String> component3() {
        return this.patches;
    }

    @NotNull
    public final AppManifest copy(@NotNull AppManifestMetadata metadata, @NotNull Map<String, String> hashes, @NotNull Map<String, String> patches) {
        Intrinsics.checkNotNullParameter(metadata, "metadata");
        Intrinsics.checkNotNullParameter(hashes, "hashes");
        Intrinsics.checkNotNullParameter(patches, "patches");
        return new AppManifest(metadata, hashes, patches);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof AppManifest) {
            AppManifest appManifest = (AppManifest) obj;
            return Intrinsics.areEqual(this.metadata, appManifest.metadata) && Intrinsics.areEqual(this.hashes, appManifest.hashes) && Intrinsics.areEqual(this.patches, appManifest.patches);
        }
        return false;
    }

    @NotNull
    public final Map<String, String> getHashes() {
        return this.hashes;
    }

    @NotNull
    public final AppManifestMetadata getMetadata() {
        return this.metadata;
    }

    @NotNull
    public final Map<String, String> getPatches() {
        return this.patches;
    }

    public int hashCode() {
        return (((this.metadata.hashCode() * 31) + this.hashes.hashCode()) * 31) + this.patches.hashCode();
    }

    @NotNull
    public String toString() {
        AppManifestMetadata appManifestMetadata = this.metadata;
        Map<String, String> map = this.hashes;
        Map<String, String> map2 = this.patches;
        return "AppManifest(metadata=" + appManifestMetadata + ", hashes=" + map + ", patches=" + map2 + ")";
    }

    public AppManifest(@NotNull AppManifestMetadata metadata, @NotNull Map<String, String> hashes, @NotNull Map<String, String> patches) {
        Intrinsics.checkNotNullParameter(metadata, "metadata");
        Intrinsics.checkNotNullParameter(hashes, "hashes");
        Intrinsics.checkNotNullParameter(patches, "patches");
        this.metadata = metadata;
        this.hashes = hashes;
        this.patches = patches;
    }

    public /* synthetic */ AppManifest(AppManifestMetadata appManifestMetadata, Map map, Map map2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(appManifestMetadata, (i10 & 2) != 0 ? o0.i() : map, (i10 & 4) != 0 ? o0.i() : map2);
    }
}
