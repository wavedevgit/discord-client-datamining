package com.facebook.react.module.model;

import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.turbomodule.core.interfaces.TurboModule;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import lr.c;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u000b\u0018\u0000 \u00102\u00020\u0001:\u0001\u0010B7\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\b\u001a\u00020\u0006\u0012\u0006\u0010\t\u001a\u00020\u0006¢\u0006\u0004\b\n\u0010\u000bBA\b\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\f\u001a\u00020\u0006\u0012\u0006\u0010\b\u001a\u00020\u0006\u0012\u0006\u0010\t\u001a\u00020\u0006¢\u0006\u0004\b\n\u0010\rR\u0013\u0010\u0002\u001a\u00020\u00038G¢\u0006\b\n\u0000\u001a\u0004\b\u0002\u0010\u000eR\u0013\u0010\u0004\u001a\u00020\u00038G¢\u0006\b\n\u0000\u001a\u0004\b\u0004\u0010\u000eR\u0013\u0010\u0005\u001a\u00020\u00068G¢\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u000fR\u0013\u0010\u0007\u001a\u00020\u00068G¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\u000fR\u0011\u0010\b\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\u000fR\u0011\u0010\t\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\u000f¨\u0006\u0011"}, d2 = {"Lcom/facebook/react/module/model/ReactModuleInfo;", "", StackTraceHelper.NAME_KEY, "", "className", "canOverrideExistingModule", "", "needsEagerInit", "isCxxModule", "isTurboModule", "<init>", "(Ljava/lang/String;Ljava/lang/String;ZZZZ)V", "hasConstants", "(Ljava/lang/String;Ljava/lang/String;ZZZZZ)V", "()Ljava/lang/String;", "()Z", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactModuleInfo {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final boolean canOverrideExistingModule;
    @NotNull
    private final String className;
    private final boolean isCxxModule;
    private final boolean isTurboModule;
    @NotNull
    private final String name;
    private final boolean needsEagerInit;

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0014\u0010\u0004\u001a\u00020\u00052\n\u0010\u0006\u001a\u0006\u0012\u0002\b\u00030\u0007H\u0007¨\u0006\b"}, d2 = {"Lcom/facebook/react/module/model/ReactModuleInfo$Companion;", "", "<init>", "()V", "classIsTurboModule", "", "clazz", "Ljava/lang/Class;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final boolean classIsTurboModule(@NotNull Class<?> clazz) {
            Intrinsics.checkNotNullParameter(clazz, "clazz");
            return TurboModule.class.isAssignableFrom(clazz);
        }

        private Companion() {
        }
    }

    public ReactModuleInfo(@NotNull String name, @NotNull String className, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(className, "className");
        this.name = name;
        this.className = className;
        this.canOverrideExistingModule = z10;
        this.needsEagerInit = z11;
        this.isCxxModule = z12;
        this.isTurboModule = z13;
    }

    public static final boolean classIsTurboModule(@NotNull Class<?> cls) {
        return Companion.classIsTurboModule(cls);
    }

    public final boolean canOverrideExistingModule() {
        return this.canOverrideExistingModule;
    }

    @NotNull
    public final String className() {
        return this.className;
    }

    public final boolean isCxxModule() {
        return this.isCxxModule;
    }

    public final boolean isTurboModule() {
        return this.isTurboModule;
    }

    @NotNull
    public final String name() {
        return this.name;
    }

    public final boolean needsEagerInit() {
        return this.needsEagerInit;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    @c
    public ReactModuleInfo(@NotNull String name, @NotNull String className, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14) {
        this(name, className, z10, z11, z13, z14);
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(className, "className");
    }
}
