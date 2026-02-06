package com.rivereactnative;

import android.util.Log;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.rivereactnative.y;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010%\n\u0002\u0010\u000e\n\u0002\u0010$\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u0006\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\t\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u0007¢\u0006\u0004\b\u0003\u0010\u0004J)\u0010\b\u001a\u001c\u0012\u0004\u0012\u00020\u0006\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00060\u0007\u0018\u00010\u0005H\u0016¢\u0006\u0004\b\b\u0010\tJ\u000f\u0010\n\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\n\u0010\u000bJ)\u0010\u0011\u001a\u00020\u00102\u0006\u0010\f\u001a\u00020\u00022\u0006\u0010\r\u001a\u00020\u00062\b\u0010\u000f\u001a\u0004\u0018\u00010\u000eH\u0016¢\u0006\u0004\b\u0011\u0010\u0012J\u0017\u0010\u0015\u001a\u00020\u00022\u0006\u0010\u0014\u001a\u00020\u0013H\u0014¢\u0006\u0004\b\u0015\u0010\u0016J\u0017\u0010\u0017\u001a\u00020\u00102\u0006\u0010\f\u001a\u00020\u0002H\u0016¢\u0006\u0004\b\u0017\u0010\u0018J\u0017\u0010\u0019\u001a\u00020\u00102\u0006\u0010\f\u001a\u00020\u0002H\u0014¢\u0006\u0004\b\u0019\u0010\u0018J!\u0010\u001b\u001a\u00020\u00102\u0006\u0010\f\u001a\u00020\u00022\b\u0010\u001a\u001a\u0004\u0018\u00010\u0006H\u0007¢\u0006\u0004\b\u001b\u0010\u001cJ\u001f\u0010\u001e\u001a\u00020\u00102\u0006\u0010\f\u001a\u00020\u00022\u0006\u0010\u001d\u001a\u00020\u0006H\u0007¢\u0006\u0004\b\u001e\u0010\u001cJ\u001f\u0010!\u001a\u00020\u00102\u0006\u0010\f\u001a\u00020\u00022\u0006\u0010 \u001a\u00020\u001fH\u0007¢\u0006\u0004\b!\u0010\"J\u001f\u0010$\u001a\u00020\u00102\u0006\u0010\f\u001a\u00020\u00022\u0006\u0010#\u001a\u00020\u0006H\u0007¢\u0006\u0004\b$\u0010\u001cJ!\u0010&\u001a\u00020\u00102\u0006\u0010\f\u001a\u00020\u00022\b\u0010%\u001a\u0004\u0018\u00010\u0006H\u0007¢\u0006\u0004\b&\u0010\u001cJ\u001f\u0010)\u001a\u00020\u00102\u0006\u0010\f\u001a\u00020\u00022\u0006\u0010(\u001a\u00020'H\u0007¢\u0006\u0004\b)\u0010*J\u001f\u0010,\u001a\u00020\u00102\u0006\u0010\f\u001a\u00020\u00022\u0006\u0010+\u001a\u00020\u0006H\u0007¢\u0006\u0004\b,\u0010\u001cJ\u001f\u0010.\u001a\u00020\u00102\u0006\u0010\f\u001a\u00020\u00022\u0006\u0010-\u001a\u00020\u0006H\u0007¢\u0006\u0004\b.\u0010\u001cJ!\u00101\u001a\u00020\u00102\u0006\u0010\f\u001a\u00020\u00022\b\u00100\u001a\u0004\u0018\u00010/H\u0007¢\u0006\u0004\b1\u00102J!\u00103\u001a\u00020\u00102\u0006\u0010\f\u001a\u00020\u00022\b\u00100\u001a\u0004\u0018\u00010/H\u0007¢\u0006\u0004\b3\u00102J\u001f\u00105\u001a\u00020\u00102\u0006\u0010\f\u001a\u00020\u00022\u0006\u00104\u001a\u00020\u0006H\u0007¢\u0006\u0004\b5\u0010\u001cJ\u001f\u00107\u001a\u00020\u00102\u0006\u0010\f\u001a\u00020\u00022\u0006\u00106\u001a\u00020'H\u0007¢\u0006\u0004\b7\u0010*¨\u00068"}, d2 = {"Lcom/rivereactnative/RiveReactNativeViewManager;", "Lcom/facebook/react/uimanager/SimpleViewManager;", "Lcom/rivereactnative/y;", "<init>", "()V", "", "", "", "getExportedCustomDirectEventTypeConstants", "()Ljava/util/Map;", "getName", "()Ljava/lang/String;", "view", "commandId", "Lcom/facebook/react/bridge/ReadableArray;", "args", "", "receiveCommand", "(Lcom/rivereactnative/y;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableArray;)V", "Lcom/facebook/react/uimanager/ThemedReactContext;", "reactContext", "createViewInstance", "(Lcom/facebook/react/uimanager/ThemedReactContext;)Lcom/rivereactnative/y;", "onDropViewInstance", "(Lcom/rivereactnative/y;)V", "onAfterUpdateTransaction", "resourceName", "setResourceName", "(Lcom/rivereactnative/y;Ljava/lang/String;)V", "fit", "setFit", "", "layoutScaleFactor", "setLayoutScaleFactor", "(Lcom/rivereactnative/y;D)V", "alignment", "setAlignment", "url", "setUrl", "", "autoplay", "setAutoplay", "(Lcom/rivereactnative/y;Z)V", "artboardName", "setArtboardName", "animationName", "setAnimationName", "Lcom/facebook/react/bridge/ReadableMap;", "source", "setReferencedAssets", "(Lcom/rivereactnative/y;Lcom/facebook/react/bridge/ReadableMap;)V", "setDataBinding", "stateMachineName", "setStateMachineName", "isUserHandlingErrors", "setIsUserHandlingErrors", "rive-react-native_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class RiveReactNativeViewManager extends SimpleViewManager<y> {
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public Map<String, Map<String, String>> getExportedCustomDirectEventTypeConstants() {
        y.c[] values;
        MapBuilder.Builder builder = MapBuilder.builder();
        for (y.c cVar : y.c.values()) {
            builder.put(cVar.toString(), MapBuilder.of("registrationName", cVar.toString()));
        }
        return o0.y(builder.build());
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "RiveReactNativeView";
    }

    @ReactProp(name = "alignment")
    public final void setAlignment(@NotNull y view, @NotNull String alignment) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(alignment, "alignment");
        view.setAlignment(c.f17596e.a(alignment));
    }

    @ReactProp(name = "animationName")
    public final void setAnimationName(@NotNull y view, @NotNull String animationName) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(animationName, "animationName");
        view.setAnimationName(animationName);
    }

    @ReactProp(name = "artboardName")
    public final void setArtboardName(@NotNull y view, @NotNull String artboardName) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(artboardName, "artboardName");
        view.setArtboardName(artboardName);
    }

    @ReactProp(name = "autoplay")
    public final void setAutoplay(@NotNull y view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setAutoplay(z10);
    }

    @ReactProp(name = "dataBinding")
    public final void setDataBinding(@NotNull y view, ReadableMap readableMap) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setDataBinding(readableMap);
    }

    @ReactProp(name = "fit")
    public final void setFit(@NotNull y view, @NotNull String fit) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(fit, "fit");
        view.setFit(e.f17618e.a(fit));
    }

    @ReactProp(name = "isUserHandlingErrors")
    public final void setIsUserHandlingErrors(@NotNull y view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setIsUserHandlingErrors(z10);
    }

    @ReactProp(name = "layoutScaleFactor")
    public final void setLayoutScaleFactor(@NotNull y view, double d10) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (!Double.isNaN(d10) && d10 > 0.0d) {
            view.setLayoutScaleFactor(Float.valueOf((float) d10));
        } else {
            view.setLayoutScaleFactor(null);
        }
    }

    @ReactProp(name = "referencedAssets")
    public final void setReferencedAssets(@NotNull y view, ReadableMap readableMap) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setReferencedAssets(readableMap);
    }

    @ReactProp(name = "resourceName")
    public final void setResourceName(@NotNull y view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setResourceName(str);
    }

    @ReactProp(name = "stateMachineName")
    public final void setStateMachineName(@NotNull y view, @NotNull String stateMachineName) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(stateMachineName, "stateMachineName");
        view.setStateMachineName(stateMachineName);
    }

    @ReactProp(name = "url")
    public final void setUrl(@NotNull y view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setUrl(str);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public y createViewInstance(@NotNull ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return new y(reactContext);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onAfterUpdateTransaction(@NotNull y view) {
        Intrinsics.checkNotNullParameter(view, "view");
        super.onAfterUpdateTransaction((RiveReactNativeViewManager) view);
        view.O0();
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onDropViewInstance(@NotNull y view) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.v();
        super.onDropViewInstance((RiveReactNativeViewManager) view);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public void receiveCommand(@NotNull y view, @NotNull String commandId, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(commandId, "commandId");
        switch (commandId.hashCode()) {
            case -1993641967:
                if (commandId.equals("setNumberPropertyValue") && readableArray != null) {
                    String string = readableArray.getString(0);
                    Intrinsics.checkNotNull(string);
                    view.z0(string, (float) readableArray.getDouble(1));
                    return;
                }
                return;
            case -1862062441:
                if (commandId.equals("fireTriggerProperty") && readableArray != null) {
                    String string2 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string2);
                    view.A(string2);
                    return;
                }
                return;
            case -1833463502:
                if (commandId.equals("setBase64ImagePropertyValue")) {
                    Log.d("RiveReactNative", "ViewManager: setBase64ImagePropertyValue command received");
                    if (readableArray != null) {
                        String string3 = readableArray.getString(0);
                        Intrinsics.checkNotNull(string3);
                        String string4 = readableArray.getString(1);
                        Intrinsics.checkNotNull(string4);
                        int length = string4.length();
                        Log.d("RiveReactNative", "ViewManager: calling view.setBase64ImagePropertyValue(path=" + string3 + ", base64Length=" + length + ")");
                        view.s0(string3, string4);
                        return;
                    }
                    return;
                }
                return;
            case -1685235450:
                if (commandId.equals("setNumberState") && readableArray != null) {
                    String string5 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string5);
                    String string6 = readableArray.getString(1);
                    Intrinsics.checkNotNull(string6);
                    view.A0(string5, string6, (float) readableArray.getDouble(2));
                    return;
                }
                return;
            case -1670524211:
                if (commandId.equals("setTextRunValueAtPath") && readableArray != null) {
                    String string7 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string7);
                    String string8 = readableArray.getString(1);
                    Intrinsics.checkNotNull(string8);
                    String string9 = readableArray.getString(2);
                    Intrinsics.checkNotNull(string9);
                    view.E0(string7, string8, string9);
                    return;
                }
                return;
            case -1624287310:
                if (commandId.equals("touchBegan") && readableArray != null) {
                    view.M0((float) readableArray.getDouble(0), (float) readableArray.getDouble(1));
                    return;
                }
                return;
            case -1621251397:
                if (commandId.equals("touchEnded") && readableArray != null) {
                    view.N0((float) readableArray.getDouble(0), (float) readableArray.getDouble(1));
                    return;
                }
                return;
            case -1218674827:
                if (commandId.equals("setTextRunValue") && readableArray != null) {
                    String string10 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string10);
                    String string11 = readableArray.getString(1);
                    Intrinsics.checkNotNull(string11);
                    view.D0(string10, string11);
                    return;
                }
                return;
            case -1153467490:
                if (commandId.equals("setNumberStateAtPath") && readableArray != null) {
                    String string12 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string12);
                    double d10 = readableArray.getDouble(1);
                    String string13 = readableArray.getString(2);
                    Intrinsics.checkNotNull(string13);
                    view.B0(string12, (float) d10, string13);
                    return;
                }
                return;
            case -1152045460:
                if (commandId.equals("registerPropertyListener") && readableArray != null) {
                    String string14 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string14);
                    String string15 = readableArray.getString(1);
                    Intrinsics.checkNotNull(string15);
                    view.j0(string14, string15);
                    return;
                }
                return;
            case -613706825:
                if (commandId.equals("setArtboardPropertyValue") && readableArray != null) {
                    String string16 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string16);
                    String string17 = readableArray.getString(1);
                    Intrinsics.checkNotNull(string17);
                    view.r0(string16, string17);
                    return;
                }
                return;
            case -297316357:
                if (commandId.equals("fireState") && readableArray != null) {
                    String string18 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string18);
                    String string19 = readableArray.getString(1);
                    Intrinsics.checkNotNull(string19);
                    view.y(string18, string19);
                    return;
                }
                return;
            case -251704925:
                if (commandId.equals("setBooleanStateAtPath") && readableArray != null) {
                    String string20 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string20);
                    boolean z10 = readableArray.getBoolean(1);
                    String string21 = readableArray.getString(2);
                    Intrinsics.checkNotNull(string21);
                    view.v0(string20, z10, string21);
                    return;
                }
                return;
            case -76877751:
                if (commandId.equals("setStringPropertyValue") && readableArray != null) {
                    String string22 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string22);
                    String string23 = readableArray.getString(1);
                    Intrinsics.checkNotNull(string23);
                    view.C0(string22, string23);
                    return;
                }
                return;
            case 3443508:
                if (commandId.equals("play") && readableArray != null) {
                    String string24 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string24);
                    String string25 = readableArray.getString(1);
                    Intrinsics.checkNotNull(string25);
                    String string26 = readableArray.getString(2);
                    Intrinsics.checkNotNull(string26);
                    view.g0(string24, f.f17631e.b(string25), d.f17610e.a(string26), readableArray.getBoolean(3));
                    return;
                }
                return;
            case 3540994:
                if (commandId.equals("stop")) {
                    view.J0();
                    return;
                }
                return;
            case 106440182:
                if (commandId.equals("pause")) {
                    view.f0();
                    return;
                }
                return;
            case 108404047:
                if (commandId.equals("reset")) {
                    view.n0();
                    return;
                }
                return;
            case 495466713:
                if (commandId.equals("setEnumPropertyValue") && readableArray != null) {
                    String string27 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string27);
                    String string28 = readableArray.getString(1);
                    Intrinsics.checkNotNull(string28);
                    view.x0(string27, string28);
                    return;
                }
                return;
            case 1014998739:
                if (commandId.equals("fireStateAtPath") && readableArray != null) {
                    String string29 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string29);
                    String string30 = readableArray.getString(1);
                    Intrinsics.checkNotNull(string30);
                    view.z(string29, string30);
                    return;
                }
                return;
            case 1311756502:
                if (commandId.equals("setBooleanPropertyValue") && readableArray != null) {
                    String string31 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string31);
                    view.t0(string31, readableArray.getBoolean(1));
                    return;
                }
                return;
            case 1331650043:
                if (commandId.equals("setColorPropertyValue") && readableArray != null) {
                    String string32 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string32);
                    view.w0(string32, (int) readableArray.getDouble(1), (int) readableArray.getDouble(2), (int) readableArray.getDouble(3), (int) readableArray.getDouble(4));
                    return;
                }
                return;
            case 1360254723:
                if (commandId.equals("setImagePropertyValue")) {
                    Log.d("RiveReactNative", "ViewManager: setImagePropertyValue command received");
                    if (readableArray != null) {
                        String string33 = readableArray.getString(0);
                        Intrinsics.checkNotNull(string33);
                        String string34 = readableArray.getString(1);
                        Intrinsics.checkNotNull(string34);
                        Log.d("RiveReactNative", "ViewManager: calling view.setImagePropertyValue(path=" + string33 + ", imageUrl=" + string34 + ")");
                        view.y0(string33, string34);
                        return;
                    }
                    return;
                }
                return;
            case 1487752907:
                if (commandId.equals("setBooleanState") && readableArray != null) {
                    String string35 = readableArray.getString(0);
                    Intrinsics.checkNotNull(string35);
                    String string36 = readableArray.getString(1);
                    Intrinsics.checkNotNull(string36);
                    view.u0(string35, string36, readableArray.getBoolean(2));
                    return;
                }
                return;
            default:
                return;
        }
    }
}
