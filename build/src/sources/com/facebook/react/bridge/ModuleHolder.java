package com.facebook.react.bridge;

import com.facebook.react.common.ReactConstants;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.module.model.ReactModuleInfo;
import java.util.concurrent.atomic.AtomicInteger;
import javax.inject.Provider;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0012\b\u0007\u0018\u0000 )2\u00020\u0001:\u0001)B#\b\u0016\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0010\u0010\u0004\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u00060\u0005¢\u0006\u0004\b\u0007\u0010\bB\u0011\b\u0016\u0012\u0006\u0010\t\u001a\u00020\u0006¢\u0006\u0004\b\u0007\u0010\nJ\r\u0010\u0017\u001a\u00020\u0018H\u0000¢\u0006\u0002\b\u0019J\r\u0010\u001a\u001a\u00020\u0014H\u0000¢\u0006\u0002\b\u001bJ\u0006\u0010\u001c\u001a\u00020\u0018J\b\u0010'\u001a\u00020\u0006H\u0002J\u0012\u0010(\u001a\u00020\u00182\b\u0010$\u001a\u0004\u0018\u00010\u0006H\u0002R\u000e\u0010\u000b\u001a\u00020\fX\u0082\u0004¢\u0006\u0002\n\u0000R\u0013\u0010\r\u001a\u00020\u000e8G¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u000e\u0010\u0011\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0018\u0010\u0004\u001a\f\u0012\u0006\b\u0001\u0012\u00020\u0006\u0018\u00010\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u0012\u001a\u0004\u0018\u00010\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\u0013\u001a\u00020\u00148\u0002@\u0002X\u0083\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\u0015\u001a\u00020\u00148\u0002@\u0002X\u0083\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\u0016\u001a\u00020\u00148\u0002@\u0002X\u0083\u000e¢\u0006\u0002\n\u0000R\u0011\u0010\u001d\u001a\u00020\u00148F¢\u0006\u0006\u001a\u0004\b\u001e\u0010\u001fR\u0011\u0010 \u001a\u00020\u00148F¢\u0006\u0006\u001a\u0004\b \u0010\u001fR\u0011\u0010!\u001a\u00020\u00148F¢\u0006\u0006\u001a\u0004\b!\u0010\u001fR\u0011\u0010\"\u001a\u00020\u000e8F¢\u0006\u0006\u001a\u0004\b#\u0010\u0010R\u0011\u0010$\u001a\u00020\u00068G¢\u0006\u0006\u001a\u0004\b%\u0010&¨\u0006*"}, d2 = {"Lcom/facebook/react/bridge/ModuleHolder;", "", "moduleInfo", "Lcom/facebook/react/module/model/ReactModuleInfo;", "provider", "Ljavax/inject/Provider;", "Lcom/facebook/react/bridge/NativeModule;", "<init>", "(Lcom/facebook/react/module/model/ReactModuleInfo;Ljavax/inject/Provider;)V", "nativeModule", "(Lcom/facebook/react/bridge/NativeModule;)V", "instanceKey", "", StackTraceHelper.NAME_KEY, "", "getName", "()Ljava/lang/String;", "reactModuleInfo", "internalModule", "initializable", "", "isCreating", "isInitializing", "markInitializable", "", "markInitializable$ReactAndroid_release", "hasInstance", "hasInstance$ReactAndroid_release", "destroy", "canOverrideExistingModule", "getCanOverrideExistingModule", "()Z", "isTurboModule", "isCxxModule", "className", "getClassName", "module", "getModule", "()Lcom/facebook/react/bridge/NativeModule;", "create", "doInitialize", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@fb.a
@SourceDebugExtension({"SMAP\nModuleHolder.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ModuleHolder.kt\ncom/facebook/react/bridge/ModuleHolder\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,228:1\n1#2:229\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ModuleHolder {
    @NotNull
    private static final Companion Companion = new Companion(null);
    @NotNull
    private static final AtomicInteger instanceKeyCounter = new AtomicInteger(1);
    private boolean initializable;
    private final int instanceKey;
    private NativeModule internalModule;
    private boolean isCreating;
    private boolean isInitializing;
    @NotNull
    private final String name;
    private Provider provider;
    @NotNull
    private final ReactModuleInfo reactModuleInfo;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/facebook/react/bridge/ModuleHolder$Companion;", "", "<init>", "()V", "instanceKeyCounter", "Ljava/util/concurrent/atomic/AtomicInteger;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public ModuleHolder(@NotNull ReactModuleInfo moduleInfo, @NotNull Provider provider) {
        Intrinsics.checkNotNullParameter(moduleInfo, "moduleInfo");
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.instanceKey = instanceKeyCounter.getAndIncrement();
        this.name = moduleInfo.name();
        this.provider = provider;
        this.reactModuleInfo = moduleInfo;
        if (moduleInfo.needsEagerInit()) {
            this.internalModule = create();
        }
    }

    private final NativeModule create() {
        boolean z10;
        boolean z11 = false;
        if (this.internalModule == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        SoftAssertions.assertCondition(z10, "Creating an already created module.");
        ReactMarker.logMarker(ReactMarkerConstants.CREATE_MODULE_START, this.name, this.instanceKey);
        qb.b.a(0L, "ModuleHolder.createModule").b(StackTraceHelper.NAME_KEY, this.name).c();
        a9.c.a().b(b9.a.f7265f, "NativeModule init: %s", this.name);
        try {
            Provider provider = this.provider;
            if (provider != null) {
                Object obj = provider.get();
                Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
                NativeModule nativeModule = (NativeModule) obj;
                this.provider = null;
                synchronized (this) {
                    this.internalModule = nativeModule;
                    if (this.initializable && !this.isInitializing) {
                        z11 = true;
                    }
                    Unit unit = Unit.f33282a;
                }
                if (z11) {
                    doInitialize(nativeModule);
                }
                return nativeModule;
            }
            throw new IllegalStateException("Required value was null.");
        } catch (Throwable th2) {
            try {
                p8.a.p(ReactConstants.TAG, th2, "Failed to create NativeModule '%s'", this.name);
                throw th2;
            } finally {
                ReactMarker.logMarker(ReactMarkerConstants.CREATE_MODULE_END, this.name, this.instanceKey);
                qb.b.b(0L).c();
            }
        }
    }

    private final void doInitialize(NativeModule nativeModule) {
        boolean z10;
        qb.b.a(0L, "ModuleHolder.initialize").b(StackTraceHelper.NAME_KEY, this.name).c();
        ReactMarker.logMarker(ReactMarkerConstants.INITIALIZE_MODULE_START, this.name, this.instanceKey);
        try {
            synchronized (this) {
                if (this.initializable && !this.isInitializing) {
                    z10 = true;
                    this.isInitializing = true;
                } else {
                    z10 = false;
                }
                Unit unit = Unit.f33282a;
            }
            if (z10) {
                if (nativeModule != null) {
                    nativeModule.initialize();
                }
                synchronized (this) {
                    this.isInitializing = false;
                }
            }
        } finally {
            ReactMarker.logMarker(ReactMarkerConstants.INITIALIZE_MODULE_END, this.name, this.instanceKey);
            qb.b.b(0L).c();
        }
    }

    public final synchronized void destroy() {
        NativeModule nativeModule = this.internalModule;
        if (nativeModule != null) {
            nativeModule.invalidate();
        }
    }

    public final boolean getCanOverrideExistingModule() {
        return this.reactModuleInfo.canOverrideExistingModule();
    }

    @NotNull
    public final String getClassName() {
        return this.reactModuleInfo.className();
    }

    @fb.a
    @NotNull
    public final NativeModule getModule() {
        boolean z10;
        NativeModule nativeModule;
        synchronized (this) {
            try {
                NativeModule nativeModule2 = this.internalModule;
                if (nativeModule2 != null) {
                    return nativeModule2;
                }
                if (!this.isCreating) {
                    z10 = true;
                    this.isCreating = true;
                } else {
                    z10 = false;
                }
                Unit unit = Unit.f33282a;
                if (z10) {
                    NativeModule create = create();
                    synchronized (this) {
                        this.isCreating = false;
                        Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
                        notifyAll();
                    }
                    return create;
                }
                synchronized (this) {
                    while (true) {
                        nativeModule = this.internalModule;
                        if (nativeModule != null || !this.isCreating) {
                            break;
                        }
                        try {
                            Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
                            wait();
                        } catch (InterruptedException unused) {
                        }
                    }
                    if (nativeModule == null) {
                        throw new IllegalStateException("Required value was null.");
                    }
                }
                return nativeModule;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @fb.a
    @NotNull
    public final String getName() {
        return this.name;
    }

    public final synchronized boolean hasInstance$ReactAndroid_release() {
        boolean z10;
        if (this.internalModule != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    public final boolean isCxxModule() {
        return this.reactModuleInfo.isCxxModule();
    }

    public final boolean isTurboModule() {
        return this.reactModuleInfo.isTurboModule();
    }

    public final void markInitializable$ReactAndroid_release() {
        boolean z10;
        NativeModule nativeModule;
        synchronized (this) {
            z10 = true;
            try {
                this.initializable = true;
                nativeModule = this.internalModule;
                if (nativeModule != null) {
                    if (this.isInitializing) {
                        throw new IllegalStateException("Check failed.");
                    }
                } else {
                    z10 = false;
                    nativeModule = null;
                }
                Unit unit = Unit.f33282a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (z10) {
            if (nativeModule != null) {
                doInitialize(nativeModule);
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
    }

    public ModuleHolder(@NotNull NativeModule nativeModule) {
        Intrinsics.checkNotNullParameter(nativeModule, "nativeModule");
        this.instanceKey = instanceKeyCounter.getAndIncrement();
        String name = nativeModule.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        this.name = name;
        String name2 = nativeModule.getName();
        Intrinsics.checkNotNullExpressionValue(name2, "getName(...)");
        String simpleName = nativeModule.getClass().getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
        this.reactModuleInfo = new ReactModuleInfo(name2, simpleName, nativeModule.canOverrideExistingModule(), true, CxxModuleWrapper.class.isAssignableFrom(nativeModule.getClass()), ReactModuleInfo.Companion.classIsTurboModule(nativeModule.getClass()));
        this.internalModule = nativeModule;
        a9.c.a().b(b9.a.f7265f, "NativeModule init: %s", name);
    }
}
