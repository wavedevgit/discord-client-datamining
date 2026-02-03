package com.github.yamill.orientation;

import android.annotation.SuppressLint;
import android.app.Activity;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import jr.v;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.o0;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010$\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0012\u0018\u00002\u00020\u0001:\u0001*B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J/\u0010\f\u001a\u00020\u000b2\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00062\b\b\u0002\u0010\t\u001a\u00020\b2\b\b\u0002\u0010\n\u001a\u00020\bH\u0002¢\u0006\u0004\b\f\u0010\rJ\u0019\u0010\u0011\u001a\u0004\u0018\u00010\u00102\u0006\u0010\u000f\u001a\u00020\u000eH\u0002¢\u0006\u0004\b\u0011\u0010\u0012J\u000f\u0010\u0013\u001a\u00020\u0010H\u0016¢\u0006\u0004\b\u0013\u0010\u0014J\u001d\u0010\u0017\u001a\u0010\u0012\u0004\u0012\u00020\u0010\u0012\u0006\u0012\u0004\u0018\u00010\u00160\u0015H\u0016¢\u0006\u0004\b\u0017\u0010\u0018J\u0017\u0010\u001b\u001a\u00020\u000b2\u0006\u0010\u001a\u001a\u00020\u0019H\u0007¢\u0006\u0004\b\u001b\u0010\u001cJ\u0017\u0010\u001d\u001a\u00020\u000b2\u0006\u0010\u001d\u001a\u00020\bH\u0007¢\u0006\u0004\b\u001d\u0010\u001eJ\u000f\u0010\u001f\u001a\u00020\u000bH\u0007¢\u0006\u0004\b\u001f\u0010 J\u000f\u0010!\u001a\u00020\u000bH\u0007¢\u0006\u0004\b!\u0010 J\u000f\u0010\"\u001a\u00020\u000bH\u0007¢\u0006\u0004\b\"\u0010 J\u000f\u0010#\u001a\u00020\u000bH\u0007¢\u0006\u0004\b#\u0010 J\u000f\u0010$\u001a\u00020\u000bH\u0007¢\u0006\u0004\b$\u0010 R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0003\u0010%\u001a\u0004\b&\u0010'R\u0018\u0010\u0007\u001a\u0004\u0018\u00010\u00068\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0007\u0010(R\u0016\u0010\t\u001a\u00020\b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\t\u0010)R\u0016\u0010\n\u001a\u00020\b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\n\u0010)¨\u0006+"}, d2 = {"Lcom/github/yamill/orientation/OrientationModule;", "Lcom/facebook/react/bridge/ReactContextBaseJavaModule;", "Lcom/facebook/react/bridge/ReactApplicationContext;", "reactContext", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "Lcom/github/yamill/orientation/OrientationModule$a;", "lockState", "", "autoRotateEnabled", "autoRotateIgnored", "", "updateOrientation", "(Lcom/github/yamill/orientation/OrientationModule$a;ZZ)V", "", "orientation", "", "getOrientationString", "(I)Ljava/lang/String;", "getName", "()Ljava/lang/String;", "", "", "getConstants", "()Ljava/util/Map;", "Lcom/facebook/react/bridge/Callback;", "callback", "getOrientation", "(Lcom/facebook/react/bridge/Callback;)V", "ignoreAutoRotate", "(Z)V", "lockToPortrait", "()V", "lockToLandscape", "lockToLandscapeLeft", "lockToLandscapeRight", "unlockAllOrientations", "Lcom/facebook/react/bridge/ReactApplicationContext;", "getReactContext", "()Lcom/facebook/react/bridge/ReactApplicationContext;", "Lcom/github/yamill/orientation/OrientationModule$a;", "Z", "a", "react-native-orientation_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class OrientationModule extends ReactContextBaseJavaModule {
    private boolean autoRotateEnabled;
    private boolean autoRotateIgnored;
    private a lockState;
    @NotNull
    private final ReactApplicationContext reactContext;

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: e  reason: collision with root package name */
        public static final a f12239e = new a("LOCKED_PORTRAIT", 0, 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f12240i = new a("LOCKED_LANDSCAPE", 1, 6);

        /* renamed from: o  reason: collision with root package name */
        public static final a f12241o = new a("LOCKED_LANDSCAPE_LEFT", 2, 0);

        /* renamed from: p  reason: collision with root package name */
        public static final a f12242p = new a("LOCKED_LANDSCAPE_RIGHT", 3, 8);

        /* renamed from: q  reason: collision with root package name */
        public static final a f12243q = new a("UNLOCKED", 4, 4);

        /* renamed from: r  reason: collision with root package name */
        public static final a f12244r = new a("UNSPECIFIED", 5, -1);

        /* renamed from: s  reason: collision with root package name */
        private static final /* synthetic */ a[] f12245s;

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f12246t;

        /* renamed from: d  reason: collision with root package name */
        private final int f12247d;

        static {
            a[] a10 = a();
            f12245s = a10;
            f12246t = qr.a.a(a10);
        }

        private a(String str, int i10, int i11) {
            this.f12247d = i11;
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f12239e, f12240i, f12241o, f12242p, f12243q, f12244r};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f12245s.clone();
        }

        public final int d() {
            return this.f12247d;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public OrientationModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
        reactContext.addLifecycleEventListener(new vb.a(reactContext, new Function1() { // from class: com.github.yamill.orientation.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit _init_$lambda$0;
                _init_$lambda$0 = OrientationModule._init_$lambda$0(OrientationModule.this, ((Boolean) obj).booleanValue());
                return _init_$lambda$0;
            }
        }));
        reactContext.addLifecycleEventListener(new vb.b(reactContext, new Function0() { // from class: com.github.yamill.orientation.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Activity _init_$lambda$1;
                _init_$lambda$1 = OrientationModule._init_$lambda$1(OrientationModule.this);
                return _init_$lambda$1;
            }
        }));
        reactContext.addLifecycleEventListener(new vb.c(reactContext, new Function0() { // from class: com.github.yamill.orientation.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Activity _init_$lambda$2;
                _init_$lambda$2 = OrientationModule._init_$lambda$2(OrientationModule.this);
                return _init_$lambda$2;
            }
        }));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit _init_$lambda$0(OrientationModule orientationModule, boolean z10) {
        updateOrientation$default(orientationModule, null, z10, false, 5, null);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Activity _init_$lambda$1(OrientationModule orientationModule) {
        return orientationModule.reactContext.getCurrentActivity();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Activity _init_$lambda$2(OrientationModule orientationModule) {
        return orientationModule.reactContext.getCurrentActivity();
    }

    private final String getOrientationString(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    return null;
                }
                return "LANDSCAPE";
            }
            return "PORTRAIT";
        }
        return "UNKNOWN";
    }

    private final void updateOrientation(a aVar, boolean z10, boolean z11) {
        Activity currentActivity;
        a aVar2;
        Activity currentActivity2;
        if (this.lockState != aVar || this.autoRotateEnabled != z10 || this.autoRotateIgnored != z11) {
            this.lockState = aVar;
            this.autoRotateEnabled = z10;
            this.autoRotateIgnored = z11;
            if (aVar != null) {
                if ((z10 || z11) && (currentActivity = this.reactContext.getCurrentActivity()) != null) {
                    currentActivity.setRequestedOrientation(aVar.d());
                }
                if (!z10 && !z11 && aVar != (aVar2 = a.f12244r) && (currentActivity2 = this.reactContext.getCurrentActivity()) != null) {
                    currentActivity2.setRequestedOrientation(aVar2.d());
                }
            }
        }
    }

    static /* synthetic */ void updateOrientation$default(OrientationModule orientationModule, a aVar, boolean z10, boolean z11, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            aVar = orientationModule.lockState;
        }
        if ((i10 & 2) != 0) {
            z10 = orientationModule.autoRotateEnabled;
        }
        if ((i10 & 4) != 0) {
            z11 = orientationModule.autoRotateIgnored;
        }
        orientationModule.updateOrientation(aVar, z10, z11);
    }

    @Override // com.facebook.react.bridge.BaseJavaModule
    @NotNull
    public Map<String, Object> getConstants() {
        return o0.f(v.a("initialOrientation", getOrientationString(getReactApplicationContext().getResources().getConfiguration().orientation)));
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "Orientation";
    }

    @ReactMethod
    public final void getOrientation(@NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        int i10 = getReactApplicationContext().getResources().getConfiguration().orientation;
        String orientationString = getOrientationString(i10);
        if (orientationString == null) {
            callback.invoke(Integer.valueOf(i10), null);
        } else {
            callback.invoke(null, orientationString);
        }
    }

    @NotNull
    public final ReactApplicationContext getReactContext() {
        return this.reactContext;
    }

    @ReactMethod
    public final void ignoreAutoRotate(boolean z10) {
        updateOrientation$default(this, null, false, z10, 3, null);
    }

    @ReactMethod
    public final void lockToLandscape() {
        updateOrientation$default(this, a.f12240i, false, false, 6, null);
    }

    @ReactMethod
    public final void lockToLandscapeLeft() {
        updateOrientation$default(this, a.f12241o, false, false, 6, null);
    }

    @ReactMethod
    public final void lockToLandscapeRight() {
        updateOrientation$default(this, a.f12242p, false, false, 6, null);
    }

    @ReactMethod
    @SuppressLint({"SourceLockedOrientationActivity"})
    public final void lockToPortrait() {
        updateOrientation$default(this, a.f12239e, false, false, 6, null);
    }

    @ReactMethod
    public final void unlockAllOrientations() {
        updateOrientation$default(this, a.f12243q, false, false, 6, null);
    }
}
