package com.discord.react.utilities;

import android.view.View;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.uimanager.NativeViewHierarchyManager;
import com.facebook.react.uimanager.NativeViewHierarchyOptimizer;
import com.facebook.react.uimanager.UIImplementation;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.UIViewOperationQueue;
import java.lang.reflect.Field;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0006\u001a3\u0010\t\u001a\u0004\u0018\u00010\b*\u00020\u00002\u0006\u0010\u0002\u001a\u00020\u00012\u0016\u0010\u0007\u001a\u0012\u0012\b\u0012\u00060\u0004j\u0002`\u0005\u0012\u0004\u0012\u00020\u00060\u0003¢\u0006\u0004\b\t\u0010\n\u001a\u001b\u0010\t\u001a\u00020\b*\u00020\u00002\u0006\u0010\u0002\u001a\u00020\u0001H\u0002¢\u0006\u0004\b\t\u0010\u000b\u001a0\u0010\u0011\u001a\u00028\u0001\"\n\b\u0000\u0010\r\u0018\u0001*\u00020\f\"\u0006\b\u0001\u0010\u000e\u0018\u0001*\u00028\u00002\u0006\u0010\u0010\u001a\u00020\u000fH\u0082\b¢\u0006\u0004\b\u0011\u0010\u0012\"\u0014\u0010\u0013\u001a\u00020\u000f8\u0002X\u0082T¢\u0006\u0006\n\u0004\b\u0013\u0010\u0014¨\u0006\u0015"}, d2 = {"Lcom/facebook/react/bridge/ReactContext;", "", "tag", "Lkotlin/Function1;", "Ljava/lang/Exception;", "Lkotlin/Exception;", "", "onError", "Landroid/view/View;", "findViewByReactTag", "(Lcom/facebook/react/bridge/ReactContext;ILkotlin/jvm/functions/Function1;)Landroid/view/View;", "(Lcom/facebook/react/bridge/ReactContext;I)Landroid/view/View;", "", "T", "V", "", StackTraceHelper.NAME_KEY, "getPrivateField", "(Ljava/lang/Object;Ljava/lang/String;)Ljava/lang/Object;", "REACT_UPDATED_ERROR", "Ljava/lang/String;", "react_utilities_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nFindViewByReactTag.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FindViewByReactTag.kt\ncom/discord/react/utilities/FindViewByReactTagKt\n*L\n1#1,84:1\n67#1,4:85\n66#1,16:89\n67#1,4:105\n66#1,16:109\n67#1,4:125\n66#1,16:129\n*S KotlinDebug\n*F\n+ 1 FindViewByReactTag.kt\ncom/discord/react/utilities/FindViewByReactTagKt\n*L\n50#1:85,4\n50#1:89,16\n54#1:105,4\n54#1:109,16\n58#1:125,4\n58#1:129,16\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FindViewByReactTagKt {
    @NotNull
    private static final String REACT_UPDATED_ERROR = "\n        findViewByReactTag failed likely due to a changed React Native internal implementation\n        from a version bump, please inspect this method and update as needed.\n    ";

    public static final View findViewByReactTag(@NotNull ReactContext reactContext, int i10, @NotNull Function1<? super Exception, Unit> onError) {
        Intrinsics.checkNotNullParameter(reactContext, "<this>");
        Intrinsics.checkNotNullParameter(onError, "onError");
        try {
            return findViewByReactTag(reactContext, i10);
        } catch (IllegalViewOperationException e10) {
            onError.invoke(e10);
            Unit unit = Unit.f31988a;
            return null;
        } catch (Exception e11) {
            throw new IllegalStateException(REACT_UPDATED_ERROR, e11);
        }
    }

    private static final /* synthetic */ <T, V> V getPrivateField(T t10, String str) {
        Class<?> cls;
        Class<? super Object> superclass = t10.getClass().getSuperclass();
        Intrinsics.reifiedOperationMarker(4, "T");
        if (superclass == Object.class) {
            cls = t10.getClass().getSuperclass();
        } else {
            cls = t10.getClass();
        }
        Field declaredField = cls.getDeclaredField(str);
        declaredField.setAccessible(true);
        V v10 = (V) declaredField.get(t10);
        Intrinsics.reifiedOperationMarker(3, "V");
        if (v10 != null) {
            return v10;
        }
        Intrinsics.reifiedOperationMarker(4, "V");
        throw new IllegalStateException(("Field " + v10 + " not instance of " + Object.class + ".").toString());
    }

    private static final View findViewByReactTag(ReactContext reactContext, int i10) {
        Class<?> cls;
        Class<?> cls2;
        Class<?> cls3;
        UIManagerModule uIManagerModule = (UIManagerModule) reactContext.getNativeModule(UIManagerModule.class);
        if (uIManagerModule != null) {
            UIImplementation uIImplementation = uIManagerModule.getUIImplementation();
            if (uIImplementation != null) {
                if (uIImplementation.getClass().getSuperclass() == UIImplementation.class) {
                    cls = uIImplementation.getClass().getSuperclass();
                } else {
                    cls = uIImplementation.getClass();
                }
                Field declaredField = cls.getDeclaredField("mNativeViewHierarchyOptimizer");
                declaredField.setAccessible(true);
                Object obj = declaredField.get(uIImplementation);
                if (obj instanceof NativeViewHierarchyOptimizer) {
                    NativeViewHierarchyOptimizer nativeViewHierarchyOptimizer = (NativeViewHierarchyOptimizer) obj;
                    if (nativeViewHierarchyOptimizer.getClass().getSuperclass() == NativeViewHierarchyOptimizer.class) {
                        cls2 = nativeViewHierarchyOptimizer.getClass().getSuperclass();
                    } else {
                        cls2 = nativeViewHierarchyOptimizer.getClass();
                    }
                    Field declaredField2 = cls2.getDeclaredField("mUIViewOperationQueue");
                    declaredField2.setAccessible(true);
                    Object obj2 = declaredField2.get(nativeViewHierarchyOptimizer);
                    if (obj2 instanceof UIViewOperationQueue) {
                        UIViewOperationQueue uIViewOperationQueue = (UIViewOperationQueue) obj2;
                        if (uIViewOperationQueue.getClass().getSuperclass() == UIViewOperationQueue.class) {
                            cls3 = uIViewOperationQueue.getClass().getSuperclass();
                        } else {
                            cls3 = uIViewOperationQueue.getClass();
                        }
                        Field declaredField3 = cls3.getDeclaredField("mNativeViewHierarchyManager");
                        declaredField3.setAccessible(true);
                        Object obj3 = declaredField3.get(uIViewOperationQueue);
                        if (obj3 instanceof NativeViewHierarchyManager) {
                            View resolveView = ((NativeViewHierarchyManager) obj3).resolveView(i10);
                            Intrinsics.checkNotNullExpressionValue(resolveView, "resolveView(...)");
                            return resolveView;
                        }
                        throw new IllegalStateException(("Field " + obj3 + " not instance of " + NativeViewHierarchyManager.class + ".").toString());
                    }
                    throw new IllegalStateException(("Field " + obj2 + " not instance of " + UIViewOperationQueue.class + ".").toString());
                }
                throw new IllegalStateException(("Field " + obj + " not instance of " + NativeViewHierarchyOptimizer.class + ".").toString());
            }
            throw new IllegalStateException("Unable to resolve UIImplementation");
        }
        throw new IllegalStateException("Unable to resolve UIManagerModule");
    }
}
