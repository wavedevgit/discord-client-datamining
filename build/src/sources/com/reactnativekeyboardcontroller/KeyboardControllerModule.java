package com.reactnativekeyboardcontroller;

import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import qm.f;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u000f\u0010\u0007\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0007\u0010\bJ\u0017\u0010\f\u001a\u00020\u000b2\u0006\u0010\n\u001a\u00020\tH\u0016¢\u0006\u0004\b\f\u0010\rJ\u000f\u0010\u000e\u001a\u00020\u000bH\u0016¢\u0006\u0004\b\u000e\u0010\u000fJ\u000f\u0010\u0010\u001a\u00020\u000bH\u0016¢\u0006\u0004\b\u0010\u0010\u000fJ\u001f\u0010\u0014\u001a\u00020\u000b2\u0006\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u0013\u001a\u00020\u0011H\u0016¢\u0006\u0004\b\u0014\u0010\u0015J\u0017\u0010\u0017\u001a\u00020\u000b2\u0006\u0010\u0016\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0017\u0010\u0018J\u0019\u0010\u001a\u001a\u00020\u000b2\b\u0010\u0019\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b\u001a\u0010\u0018J\u0017\u0010\u001c\u001a\u00020\u000b2\u0006\u0010\u001b\u001a\u00020\tH\u0016¢\u0006\u0004\b\u001c\u0010\rR\u0014\u0010\u001e\u001a\u00020\u001d8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001e\u0010\u001f¨\u0006 "}, d2 = {"Lcom/reactnativekeyboardcontroller/KeyboardControllerModule;", "Lcom/reactnativekeyboardcontroller/NativeKeyboardControllerSpec;", "Lcom/facebook/react/bridge/ReactApplicationContext;", "mReactContext", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "", "getName", "()Ljava/lang/String;", "", "mode", "", "setInputMode", "(D)V", "setDefaultMode", "()V", "preload", "", "keepFocus", "animated", "dismiss", "(ZZ)V", "direction", "setFocusTo", "(Ljava/lang/String;)V", "eventName", "addListener", "count", "removeListeners", "Lqm/f;", "module", "Lqm/f;", "react-native-keyboard-controller_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class KeyboardControllerModule extends NativeKeyboardControllerSpec {
    @NotNull
    private final f module;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public KeyboardControllerModule(@NotNull ReactApplicationContext mReactContext) {
        super(mReactContext);
        Intrinsics.checkNotNullParameter(mReactContext, "mReactContext");
        this.module = new f(mReactContext);
    }

    @Override // com.reactnativekeyboardcontroller.NativeKeyboardControllerSpec
    public void addListener(String str) {
    }

    @Override // com.reactnativekeyboardcontroller.NativeKeyboardControllerSpec
    public void dismiss(boolean z10, boolean z11) {
        this.module.f(z10, z11);
    }

    @Override // com.reactnativekeyboardcontroller.NativeKeyboardControllerSpec, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return NativeKeyboardControllerSpec.NAME;
    }

    @Override // com.reactnativekeyboardcontroller.NativeKeyboardControllerSpec
    public void preload() {
        this.module.l();
    }

    @Override // com.reactnativekeyboardcontroller.NativeKeyboardControllerSpec
    public void removeListeners(double d10) {
    }

    @Override // com.reactnativekeyboardcontroller.NativeKeyboardControllerSpec
    public void setDefaultMode() {
        this.module.m();
    }

    @Override // com.reactnativekeyboardcontroller.NativeKeyboardControllerSpec
    public void setFocusTo(@NotNull String direction) {
        Intrinsics.checkNotNullParameter(direction, "direction");
        this.module.n(direction);
    }

    @Override // com.reactnativekeyboardcontroller.NativeKeyboardControllerSpec
    public void setInputMode(double d10) {
        this.module.p((int) d10);
    }
}
