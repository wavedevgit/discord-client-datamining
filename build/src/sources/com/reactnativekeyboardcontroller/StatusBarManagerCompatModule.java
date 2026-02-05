package com.reactnativekeyboardcontroller;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewProps;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import rm.f;
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010%\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u000f\u0010\u0007\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0007\u0010\bJ\u001d\u0010\u000b\u001a\u0010\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\n\u0018\u00010\tH\u0016¢\u0006\u0004\b\u000b\u0010\fJ\u0017\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\u000e\u001a\u00020\rH\u0016¢\u0006\u0004\b\u0010\u0010\u0011J\u001f\u0010\u0015\u001a\u00020\u000f2\u0006\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u0014\u001a\u00020\rH\u0016¢\u0006\u0004\b\u0015\u0010\u0016J\u0017\u0010\u0018\u001a\u00020\u000f2\u0006\u0010\u0017\u001a\u00020\rH\u0016¢\u0006\u0004\b\u0018\u0010\u0011J\u0017\u0010\u001a\u001a\u00020\u000f2\u0006\u0010\u0019\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u001a\u0010\u001bR\u0014\u0010\u001d\u001a\u00020\u001c8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u001e¨\u0006\u001f"}, d2 = {"Lcom/reactnativekeyboardcontroller/StatusBarManagerCompatModule;", "Lcom/reactnativekeyboardcontroller/NativeStatusBarManagerCompatSpec;", "Lcom/facebook/react/bridge/ReactApplicationContext;", "mReactContext", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "", "getName", "()Ljava/lang/String;", "", "", "getConstants", "()Ljava/util/Map;", "", ViewProps.HIDDEN, "", "setHidden", "(Z)V", "", ViewProps.COLOR, "animated", "setColor", "(DZ)V", "translucent", "setTranslucent", "style", "setStyle", "(Ljava/lang/String;)V", "Lrm/f;", "module", "Lrm/f;", "react-native-keyboard-controller_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class StatusBarManagerCompatModule extends NativeStatusBarManagerCompatSpec {
    @NotNull
    private final f module;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public StatusBarManagerCompatModule(@NotNull ReactApplicationContext mReactContext) {
        super(mReactContext);
        Intrinsics.checkNotNullParameter(mReactContext, "mReactContext");
        this.module = new f(mReactContext);
    }

    @Override // com.facebook.react.bridge.BaseJavaModule
    public Map<String, Object> getConstants() {
        return this.module.f();
    }

    @Override // com.reactnativekeyboardcontroller.NativeStatusBarManagerCompatSpec, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "StatusBarManager";
    }

    @Override // com.reactnativekeyboardcontroller.NativeStatusBarManagerCompatSpec
    public void setColor(double d10, boolean z10) {
        this.module.i((int) d10, z10);
    }

    @Override // com.reactnativekeyboardcontroller.NativeStatusBarManagerCompatSpec
    public void setHidden(boolean z10) {
        this.module.l(z10);
    }

    @Override // com.reactnativekeyboardcontroller.NativeStatusBarManagerCompatSpec
    public void setStyle(@NotNull String style) {
        Intrinsics.checkNotNullParameter(style, "style");
        this.module.n(style);
    }

    @Override // com.reactnativekeyboardcontroller.NativeStatusBarManagerCompatSpec
    public void setTranslucent(boolean z10) {
        this.module.p(z10);
    }
}
