package com.rivereactnative;

import android.view.View;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UIManager;
import com.facebook.react.uimanager.UIManagerHelper;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0010\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J9\u0010\u000f\u001a\u00020\u000e\"\u0004\b\u0000\u0010\u00062\u0006\u0010\b\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\t2\u0012\u0010\r\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00028\u00000\u000bH\u0002¢\u0006\u0004\b\u000f\u0010\u0010J\u000f\u0010\u0012\u001a\u00020\u0011H\u0016¢\u0006\u0004\b\u0012\u0010\u0013J'\u0010\u0015\u001a\u00020\u000e2\u0006\u0010\b\u001a\u00020\u00072\u0006\u0010\u0014\u001a\u00020\u00112\u0006\u0010\n\u001a\u00020\tH\u0007¢\u0006\u0004\b\u0015\u0010\u0016J'\u0010\u0017\u001a\u00020\u000e2\u0006\u0010\b\u001a\u00020\u00072\u0006\u0010\u0014\u001a\u00020\u00112\u0006\u0010\n\u001a\u00020\tH\u0007¢\u0006\u0004\b\u0017\u0010\u0016J/\u0010\u0019\u001a\u00020\u000e2\u0006\u0010\b\u001a\u00020\u00072\u0006\u0010\u0014\u001a\u00020\u00112\u0006\u0010\u0018\u001a\u00020\u00112\u0006\u0010\n\u001a\u00020\tH\u0007¢\u0006\u0004\b\u0019\u0010\u001aJ/\u0010\u001b\u001a\u00020\u000e2\u0006\u0010\b\u001a\u00020\u00072\u0006\u0010\u0014\u001a\u00020\u00112\u0006\u0010\u0018\u001a\u00020\u00112\u0006\u0010\n\u001a\u00020\tH\u0007¢\u0006\u0004\b\u001b\u0010\u001aJ\u0019\u0010\u001d\u001a\u00020\u000e2\b\u0010\u001c\u001a\u0004\u0018\u00010\u0011H\u0007¢\u0006\u0004\b\u001d\u0010\u001eJ\u0019\u0010\u001f\u001a\u00020\u000e2\b\u0010\u001c\u001a\u0004\u0018\u00010\u0007H\u0007¢\u0006\u0004\b\u001f\u0010 ¨\u0006!"}, d2 = {"Lcom/rivereactnative/RiveReactNativeModule;", "Lcom/facebook/react/bridge/ReactContextBaseJavaModule;", "Lcom/facebook/react/bridge/ReactApplicationContext;", "reactContext", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "T", "", "node", "Lcom/facebook/react/bridge/Promise;", BaseJavaModule.METHOD_TYPE_PROMISE, "Lkotlin/Function1;", "Lcom/rivereactnative/y;", "stateGetter", "", "handleState", "(ILcom/facebook/react/bridge/Promise;Lkotlin/jvm/functions/Function1;)V", "", "getName", "()Ljava/lang/String;", "inputName", "getBooleanState", "(ILjava/lang/String;Lcom/facebook/react/bridge/Promise;)V", "getNumberState", "path", "getBooleanStateAtPath", "(ILjava/lang/String;Ljava/lang/String;Lcom/facebook/react/bridge/Promise;)V", "getNumberStateAtPath", "type", "addListener", "(Ljava/lang/String;)V", "removeListeners", "(Ljava/lang/Integer;)V", "rive-react-native_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class RiveReactNativeModule extends ReactContextBaseJavaModule {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RiveReactNativeModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Boolean getBooleanState$lambda$0(String str, y view) {
        Intrinsics.checkNotNullParameter(view, "view");
        return view.B(str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Boolean getBooleanStateAtPath$lambda$2(String str, String str2, y view) {
        Intrinsics.checkNotNullParameter(view, "view");
        return view.C(str, str2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Float getNumberState$lambda$1(String str, y view) {
        Intrinsics.checkNotNullParameter(view, "view");
        return view.D(str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Float getNumberStateAtPath$lambda$3(String str, String str2, y view) {
        Intrinsics.checkNotNullParameter(view, "view");
        return view.E(str, str2);
    }

    private final <T> void handleState(int i10, Promise promise, Function1<? super y, ? extends T> function1) {
        View view;
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        UIManager uIManager = UIManagerHelper.getUIManager(reactApplicationContext, i10);
        y yVar = null;
        if (uIManager != null) {
            view = uIManager.resolveView(i10);
        } else {
            view = null;
        }
        if (view instanceof y) {
            yVar = (y) view;
        }
        if (yVar != null) {
            promise.resolve(function1.invoke(yVar));
        } else {
            promise.reject("VIEW_NOT_FOUND", "Could not find RiveReactNativeView");
        }
    }

    @ReactMethod
    public final void addListener(String str) {
    }

    @ReactMethod
    public final void getBooleanState(int i10, @NotNull final String inputName, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        Intrinsics.checkNotNullParameter(promise, "promise");
        handleState(i10, promise, new Function1() { // from class: com.rivereactnative.r
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Boolean booleanState$lambda$0;
                booleanState$lambda$0 = RiveReactNativeModule.getBooleanState$lambda$0(inputName, (y) obj);
                return booleanState$lambda$0;
            }
        });
    }

    @ReactMethod
    public final void getBooleanStateAtPath(int i10, @NotNull final String inputName, @NotNull final String path, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(promise, "promise");
        handleState(i10, promise, new Function1() { // from class: com.rivereactnative.p
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Boolean booleanStateAtPath$lambda$2;
                booleanStateAtPath$lambda$2 = RiveReactNativeModule.getBooleanStateAtPath$lambda$2(inputName, path, (y) obj);
                return booleanStateAtPath$lambda$2;
            }
        });
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "RiveReactNativeModule";
    }

    @ReactMethod
    public final void getNumberState(int i10, @NotNull final String inputName, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        Intrinsics.checkNotNullParameter(promise, "promise");
        handleState(i10, promise, new Function1() { // from class: com.rivereactnative.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Float numberState$lambda$1;
                numberState$lambda$1 = RiveReactNativeModule.getNumberState$lambda$1(inputName, (y) obj);
                return numberState$lambda$1;
            }
        });
    }

    @ReactMethod
    public final void getNumberStateAtPath(int i10, @NotNull final String inputName, @NotNull final String path, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(promise, "promise");
        handleState(i10, promise, new Function1() { // from class: com.rivereactnative.q
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Float numberStateAtPath$lambda$3;
                numberStateAtPath$lambda$3 = RiveReactNativeModule.getNumberStateAtPath$lambda$3(inputName, path, (y) obj);
                return numberStateAtPath$lambda$3;
            }
        });
    }

    @ReactMethod
    public final void removeListeners(Integer num) {
    }
}
