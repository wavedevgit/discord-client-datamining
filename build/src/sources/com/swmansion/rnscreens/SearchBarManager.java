package com.swmansion.rnscreens;

import android.util.Log;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.RNSSearchBarManagerDelegate;
import com.facebook.react.viewmanagers.RNSSearchBarManagerInterface;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = SearchBarManager.REACT_CLASS)
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u000e\n\u0002\u0010$\n\u0002\u0010\u0000\n\u0002\b\u0017\b\u0007\u0018\u0000 C2\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001DB\u0007¢\u0006\u0004\b\u0004\u0010\u0005J\u0017\u0010\t\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\t\u0010\nJ\u0015\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u00020\u000bH\u0014¢\u0006\u0004\b\f\u0010\rJ\u000f\u0010\u000e\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u000e\u0010\u000fJ\u0017\u0010\u0012\u001a\u00020\u00022\u0006\u0010\u0011\u001a\u00020\u0010H\u0014¢\u0006\u0004\b\u0012\u0010\u0013J\u0017\u0010\u0015\u001a\u00020\b2\u0006\u0010\u0014\u001a\u00020\u0002H\u0014¢\u0006\u0004\b\u0015\u0010\u0016J!\u0010\u0018\u001a\u00020\b2\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u0017\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b\u0018\u0010\u0019J\u001f\u0010\u001c\u001a\u00020\b2\u0006\u0010\u0014\u001a\u00020\u00022\u0006\u0010\u001b\u001a\u00020\u001aH\u0017¢\u0006\u0004\b\u001c\u0010\u001dJ!\u0010 \u001a\u00020\b2\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u001f\u001a\u0004\u0018\u00010\u001eH\u0017¢\u0006\u0004\b \u0010!J\u001f\u0010#\u001a\u00020\b2\u0006\u0010\u0014\u001a\u00020\u00022\u0006\u0010\"\u001a\u00020\u001aH\u0017¢\u0006\u0004\b#\u0010\u001dJ!\u0010%\u001a\u00020\b2\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010$\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b%\u0010\u0019J!\u0010'\u001a\u00020\b2\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010&\u001a\u0004\u0018\u00010\u0006H\u0017¢\u0006\u0004\b'\u0010\u0019J!\u0010(\u001a\u00020\b2\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u001f\u001a\u0004\u0018\u00010\u001eH\u0017¢\u0006\u0004\b(\u0010!J!\u0010)\u001a\u00020\b2\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u001f\u001a\u0004\u0018\u00010\u001eH\u0017¢\u0006\u0004\b)\u0010!J!\u0010*\u001a\u00020\b2\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010\u001f\u001a\u0004\u0018\u00010\u001eH\u0017¢\u0006\u0004\b*\u0010!J\u001f\u0010,\u001a\u00020\b2\u0006\u0010\u0014\u001a\u00020\u00022\u0006\u0010+\u001a\u00020\u001aH\u0017¢\u0006\u0004\b,\u0010\u001dJ\u001b\u0010/\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020.0-H\u0016¢\u0006\u0004\b/\u00100J\u0019\u00101\u001a\u00020\b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b1\u0010\u0016J\u0019\u00102\u001a\u00020\b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b2\u0010\u0016J\u0019\u00103\u001a\u00020\b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b3\u0010\u0016J!\u00105\u001a\u00020\b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u00022\u0006\u00104\u001a\u00020\u001aH\u0016¢\u0006\u0004\b5\u0010\u001dJ#\u00107\u001a\u00020\b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u00022\b\u00106\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b7\u0010\u0019J\u0019\u00108\u001a\u00020\b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b8\u0010\u0016J!\u00109\u001a\u00020\b2\u0006\u0010\u0014\u001a\u00020\u00022\b\u0010&\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b9\u0010\u0019J\u001f\u0010;\u001a\u00020\b2\u0006\u0010\u0014\u001a\u00020\u00022\u0006\u0010:\u001a\u00020\u001aH\u0016¢\u0006\u0004\b;\u0010\u001dJ!\u0010<\u001a\u00020\b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u00022\u0006\u0010:\u001a\u00020\u001aH\u0016¢\u0006\u0004\b<\u0010\u001dJ#\u0010=\u001a\u00020\b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u00022\b\u0010:\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b=\u0010\u0019J#\u0010>\u001a\u00020\b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u00022\b\u0010:\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b>\u0010\u0019J#\u0010?\u001a\u00020\b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u00022\b\u0010:\u001a\u0004\u0018\u00010\u0006H\u0016¢\u0006\u0004\b?\u0010\u0019J#\u0010@\u001a\u00020\b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u00022\b\u0010:\u001a\u0004\u0018\u00010\u001eH\u0016¢\u0006\u0004\b@\u0010!R\u001a\u0010A\u001a\b\u0012\u0004\u0012\u00020\u00020\u000b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bA\u0010B¨\u0006E"}, d2 = {"Lcom/swmansion/rnscreens/SearchBarManager;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "Lcom/swmansion/rnscreens/f1;", "Lcom/facebook/react/viewmanagers/RNSSearchBarManagerInterface;", "<init>", "()V", "", "propName", "", "logNotAvailable", "(Ljava/lang/String;)V", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "getDelegate", "()Lcom/facebook/react/uimanager/ViewManagerDelegate;", "getName", "()Ljava/lang/String;", "Lcom/facebook/react/uimanager/ThemedReactContext;", "context", "createViewInstance", "(Lcom/facebook/react/uimanager/ThemedReactContext;)Lcom/swmansion/rnscreens/f1;", "view", "onAfterUpdateTransaction", "(Lcom/swmansion/rnscreens/f1;)V", "autoCapitalize", "setAutoCapitalize", "(Lcom/swmansion/rnscreens/f1;Ljava/lang/String;)V", "", "autoFocus", "setAutoFocus", "(Lcom/swmansion/rnscreens/f1;Z)V", "", ViewProps.COLOR, "setBarTintColor", "(Lcom/swmansion/rnscreens/f1;Ljava/lang/Integer;)V", "disableBackButtonOverride", "setDisableBackButtonOverride", "inputType", "setInputType", ReactTextInputShadowNode.PROP_PLACEHOLDER, "setPlaceholder", "setTextColor", "setHeaderIconColor", "setHintTextColor", "shouldShowHintSearchIcon", "setShouldShowHintSearchIcon", "", "", "getExportedCustomDirectEventTypeConstants", "()Ljava/util/Map;", "blur", "focus", "clearText", "flag", "toggleCancelButton", "text", "setText", "cancelSearch", "setPlacement", "value", "setAllowToolbarIntegration", "setHideWhenScrolling", "setObscureBackground", "setHideNavigationBar", "setCancelButtonText", "setTintColor", "delegate", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "Companion", "a", "react-native-screens_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SearchBarManager extends ViewGroupManager<f1> implements RNSSearchBarManagerInterface<f1> {
    @NotNull
    public static final a Companion = new a(null);
    @NotNull
    public static final String REACT_CLASS = "RNSSearchBar";
    @NotNull
    private final ViewManagerDelegate<f1> delegate;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public SearchBarManager() {
        super(null, 1, null);
        this.delegate = new RNSSearchBarManagerDelegate(this);
    }

    private final void logNotAvailable(String str) {
        Log.w("[RNScreens]", str + " prop is not available on Android");
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    protected ViewManagerDelegate<f1> getDelegate() {
        return this.delegate;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return kotlin.collections.o0.k(as.v.a("topSearchBlur", kotlin.collections.o0.k(as.v.a("registrationName", "onSearchBlur"))), as.v.a("topChangeText", kotlin.collections.o0.k(as.v.a("registrationName", "onChangeText"))), as.v.a("topClose", kotlin.collections.o0.k(as.v.a("registrationName", "onClose"))), as.v.a("topSearchFocus", kotlin.collections.o0.k(as.v.a("registrationName", "onSearchFocus"))), as.v.a("topOpen", kotlin.collections.o0.k(as.v.a("registrationName", "onOpen"))), as.v.a("topSearchButtonPress", kotlin.collections.o0.k(as.v.a("registrationName", "onSearchButtonPress"))));
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return REACT_CLASS;
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    public void blur(f1 f1Var) {
        if (f1Var != null) {
            f1Var.j();
        }
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    public void cancelSearch(f1 f1Var) {
        if (f1Var != null) {
            f1Var.k();
        }
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    public void clearText(f1 f1Var) {
        if (f1Var != null) {
            f1Var.l();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public f1 createViewInstance(@NotNull ThemedReactContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return new f1(context);
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    public void focus(f1 f1Var) {
        if (f1Var != null) {
            f1Var.o();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onAfterUpdateTransaction(@NotNull f1 view) {
        Intrinsics.checkNotNullParameter(view, "view");
        super.onAfterUpdateTransaction((SearchBarManager) view);
        view.v();
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    public void setAllowToolbarIntegration(@NotNull f1 view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        logNotAvailable("allowToolbarIntegration");
    }

    /* JADX WARN: Code restructure failed: missing block: B:17:0x0036, code lost:
        if (r3.equals(com.facebook.react.uimanager.ViewProps.NONE) != false) goto L23;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x003f, code lost:
        if (r3.equals("systemDefault") != false) goto L23;
     */
    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    @com.facebook.react.uimanager.annotations.ReactProp(name = "autoCapitalize")
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void setAutoCapitalize(@org.jetbrains.annotations.NotNull com.swmansion.rnscreens.f1 r2, java.lang.String r3) {
        /*
            r1 = this;
            java.lang.String r0 = "view"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            if (r3 == 0) goto L4a
            int r0 = r3.hashCode()
            switch(r0) {
                case -721225454: goto L39;
                case 3387192: goto L30;
                case 113318569: goto L25;
                case 490141296: goto L1a;
                case 1245424234: goto Lf;
                default: goto Le;
            }
        Le:
            goto L42
        Lf:
            java.lang.String r0 = "characters"
            boolean r3 = r3.equals(r0)
            if (r3 == 0) goto L42
            com.swmansion.rnscreens.f1$a r3 = com.swmansion.rnscreens.f1.a.f19155o
            goto L4c
        L1a:
            java.lang.String r0 = "sentences"
            boolean r3 = r3.equals(r0)
            if (r3 == 0) goto L42
            com.swmansion.rnscreens.f1$a r3 = com.swmansion.rnscreens.f1.a.f19154i
            goto L4c
        L25:
            java.lang.String r0 = "words"
            boolean r3 = r3.equals(r0)
            if (r3 == 0) goto L42
            com.swmansion.rnscreens.f1$a r3 = com.swmansion.rnscreens.f1.a.f19153e
            goto L4c
        L30:
            java.lang.String r0 = "none"
            boolean r3 = r3.equals(r0)
            if (r3 == 0) goto L42
            goto L4a
        L39:
            java.lang.String r0 = "systemDefault"
            boolean r3 = r3.equals(r0)
            if (r3 == 0) goto L42
            goto L4a
        L42:
            com.facebook.react.bridge.JSApplicationIllegalArgumentException r2 = new com.facebook.react.bridge.JSApplicationIllegalArgumentException
            java.lang.String r3 = "Forbidden auto capitalize value passed"
            r2.<init>(r3)
            throw r2
        L4a:
            com.swmansion.rnscreens.f1$a r3 = com.swmansion.rnscreens.f1.a.f19152d
        L4c:
            r2.setAutoCapitalize(r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.swmansion.rnscreens.SearchBarManager.setAutoCapitalize(com.swmansion.rnscreens.f1, java.lang.String):void");
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    @ReactProp(name = "autoFocus")
    public void setAutoFocus(@NotNull f1 view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setAutoFocus(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    @ReactProp(customType = "Color", name = "barTintColor")
    public void setBarTintColor(@NotNull f1 view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTintColor(num);
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    public void setCancelButtonText(f1 f1Var, String str) {
        logNotAvailable("cancelButtonText");
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    @ReactProp(name = "disableBackButtonOverride")
    public void setDisableBackButtonOverride(@NotNull f1 view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setShouldOverrideBackButton(!z10);
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    @ReactProp(customType = "Color", name = "headerIconColor")
    public void setHeaderIconColor(@NotNull f1 view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setHeaderIconColor(num);
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    public void setHideNavigationBar(f1 f1Var, String str) {
        logNotAvailable("hideNavigationBar");
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    public void setHideWhenScrolling(f1 f1Var, boolean z10) {
        logNotAvailable("hideWhenScrolling");
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    @ReactProp(customType = "Color", name = "hintTextColor")
    public void setHintTextColor(@NotNull f1 view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setHintTextColor(num);
    }

    /* JADX WARN: Code restructure failed: missing block: B:14:0x002b, code lost:
        if (r3.equals("text") != false) goto L21;
     */
    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    @com.facebook.react.uimanager.annotations.ReactProp(name = "inputType")
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void setInputType(@org.jetbrains.annotations.NotNull com.swmansion.rnscreens.f1 r2, java.lang.String r3) {
        /*
            r1 = this;
            java.lang.String r0 = "view"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            if (r3 == 0) goto L41
            int r0 = r3.hashCode()
            switch(r0) {
                case -1034364087: goto L2e;
                case 3556653: goto L25;
                case 96619420: goto L1a;
                case 106642798: goto Lf;
                default: goto Le;
            }
        Le:
            goto L39
        Lf:
            java.lang.String r0 = "phone"
            boolean r3 = r3.equals(r0)
            if (r3 == 0) goto L39
            com.swmansion.rnscreens.f1$b r3 = com.swmansion.rnscreens.f1.b.f19159e
            goto L43
        L1a:
            java.lang.String r0 = "email"
            boolean r3 = r3.equals(r0)
            if (r3 == 0) goto L39
            com.swmansion.rnscreens.f1$b r3 = com.swmansion.rnscreens.f1.b.f19161o
            goto L43
        L25:
            java.lang.String r0 = "text"
            boolean r3 = r3.equals(r0)
            if (r3 == 0) goto L39
            goto L41
        L2e:
            java.lang.String r0 = "number"
            boolean r3 = r3.equals(r0)
            if (r3 == 0) goto L39
            com.swmansion.rnscreens.f1$b r3 = com.swmansion.rnscreens.f1.b.f19160i
            goto L43
        L39:
            com.facebook.react.bridge.JSApplicationIllegalArgumentException r2 = new com.facebook.react.bridge.JSApplicationIllegalArgumentException
            java.lang.String r3 = "Forbidden input type value"
            r2.<init>(r3)
            throw r2
        L41:
            com.swmansion.rnscreens.f1$b r3 = com.swmansion.rnscreens.f1.b.f19158d
        L43:
            r2.setInputType(r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.swmansion.rnscreens.SearchBarManager.setInputType(com.swmansion.rnscreens.f1, java.lang.String):void");
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    public void setObscureBackground(f1 f1Var, String str) {
        logNotAvailable("obscureBackground");
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    @ReactProp(name = ReactTextInputShadowNode.PROP_PLACEHOLDER)
    public void setPlaceholder(@NotNull f1 view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (str != null) {
            view.setPlaceholder(str);
        }
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    public void setPlacement(@NotNull f1 view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        logNotAvailable("setPlacement");
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    @ReactProp(name = "shouldShowHintSearchIcon")
    public void setShouldShowHintSearchIcon(@NotNull f1 view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setShouldShowHintSearchIcon(z10);
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    public void setText(f1 f1Var, String str) {
        if (f1Var != null) {
            f1Var.q(str);
        }
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    @ReactProp(customType = "Color", name = "textColor")
    public void setTextColor(@NotNull f1 view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTextColor(num);
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    public void setTintColor(f1 f1Var, Integer num) {
        logNotAvailable("tintColor");
    }

    @Override // com.facebook.react.viewmanagers.RNSSearchBarManagerInterface
    public void toggleCancelButton(f1 f1Var, boolean z10) {
        if (f1Var != null) {
            f1Var.t(z10);
        }
    }
}
