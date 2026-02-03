package com.discord.react.utilities;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.ReactShadowNode;
import com.facebook.react.uimanager.UIImplementation;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.UIViewOperationQueue;
import com.facebook.yoga.YogaDirection;
import java.lang.reflect.Method;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.Set;
import jr.l;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000,\n\u0000\n\u0002\u0010#\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u001a\u0012\u0010\n\u001a\u00020\u000b*\u00020\f2\u0006\u0010\r\u001a\u00020\u0002\u001a\u0014\u0010\u000e\u001a\n \u0005*\u0004\u0018\u00010\u000f0\u000f*\u00020\fH\u0002\u001a\u000e\u0010\u0010\u001a\u0004\u0018\u00010\u0011*\u00020\u000fH\u0002\"\u0014\u0010\u0000\u001a\b\u0012\u0004\u0012\u00020\u00020\u0001X\u0082\u0004¢\u0006\u0002\n\u0000\"#\u0010\u0003\u001a\n \u0005*\u0004\u0018\u00010\u00040\u00048BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\b\u0010\t\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0012"}, d2 = {"viewLayoutQueued", "", "", "viewOperationQueueMethod", "Ljava/lang/reflect/Method;", "kotlin.jvm.PlatformType", "getViewOperationQueueMethod", "()Ljava/lang/reflect/Method;", "viewOperationQueueMethod$delegate", "Lkotlin/Lazy;", "queueManualLayout", "", "Lcom/facebook/react/bridge/ReactContext;", "viewId", "getUIImplementation", "Lcom/facebook/react/uimanager/UIImplementation;", "getUIViewOperationQueue", "Lcom/facebook/react/uimanager/UIViewOperationQueue;", "react_utilities_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nReactViewExtensions.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactViewExtensions.kt\ncom/discord/react/utilities/ReactViewExtensionsKt\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,60:1\n1#2:61\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactViewExtensionsKt {
    @NotNull
    private static final Set<Integer> viewLayoutQueued;
    @NotNull
    private static final Lazy viewOperationQueueMethod$delegate;

    static {
        Set<Integer> synchronizedSet = Collections.synchronizedSet(new LinkedHashSet());
        Intrinsics.checkNotNullExpressionValue(synchronizedSet, "synchronizedSet(...)");
        viewLayoutQueued = synchronizedSet;
        viewOperationQueueMethod$delegate = l.b(new Function0() { // from class: com.discord.react.utilities.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Method viewOperationQueueMethod_delegate$lambda$1;
                viewOperationQueueMethod_delegate$lambda$1 = ReactViewExtensionsKt.viewOperationQueueMethod_delegate$lambda$1();
                return viewOperationQueueMethod_delegate$lambda$1;
            }
        });
    }

    private static final UIImplementation getUIImplementation(ReactContext reactContext) {
        NativeModule nativeModule = reactContext.getNativeModule(UIManagerModule.class);
        Intrinsics.checkNotNull(nativeModule);
        return ((UIManagerModule) nativeModule).getUIImplementation();
    }

    private static final UIViewOperationQueue getUIViewOperationQueue(UIImplementation uIImplementation) {
        Object invoke = getViewOperationQueueMethod().invoke(uIImplementation, null);
        if (!(invoke instanceof UIViewOperationQueue)) {
            return null;
        }
        return (UIViewOperationQueue) invoke;
    }

    private static final Method getViewOperationQueueMethod() {
        return (Method) viewOperationQueueMethod$delegate.getValue();
    }

    public static final void queueManualLayout(@NotNull final ReactContext reactContext, final int i10) {
        Intrinsics.checkNotNullParameter(reactContext, "<this>");
        if (viewLayoutQueued.contains(Integer.valueOf(i10))) {
            return;
        }
        reactContext.runOnNativeModulesQueueThread(new Runnable() { // from class: com.discord.react.utilities.f
            @Override // java.lang.Runnable
            public final void run() {
                ReactViewExtensionsKt.queueManualLayout$lambda$3(ReactContext.this, i10);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void queueManualLayout$lambda$3(ReactContext reactContext, int i10) {
        UIImplementation uIImplementation = getUIImplementation(reactContext);
        ReactShadowNode resolveShadowNode = uIImplementation.resolveShadowNode(i10);
        if (resolveShadowNode != null) {
            Intrinsics.checkNotNull(uIImplementation);
            UIViewOperationQueue uIViewOperationQueue = getUIViewOperationQueue(uIImplementation);
            if (uIViewOperationQueue != null) {
                ReactShadowNode parent = resolveShadowNode.getParent();
                Intrinsics.checkNotNull(parent);
                uIViewOperationQueue.enqueueUpdateLayout(parent.getReactTag(), resolveShadowNode.getReactTag(), resolveShadowNode.getScreenX(), resolveShadowNode.getScreenY(), resolveShadowNode.getScreenWidth(), resolveShadowNode.getScreenHeight(), YogaDirection.INHERIT);
            }
        }
        viewLayoutQueued.remove(Integer.valueOf(i10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Method viewOperationQueueMethod_delegate$lambda$1() {
        int i10 = UIImplementation.f11980a;
        Method declaredMethod = UIImplementation.class.getDeclaredMethod("com.discord.react.utilities.getUIViewOperationQueue", null);
        declaredMethod.setAccessible(true);
        return declaredMethod;
    }
}
