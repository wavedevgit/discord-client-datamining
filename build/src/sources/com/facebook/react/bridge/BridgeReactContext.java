package com.facebook.react.bridge;

import android.content.Context;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.interop.InteropModuleRegistry;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.common.annotations.FrameworkAPI;
import com.facebook.react.common.annotations.UnstableReactNativeAPI;
import com.facebook.react.common.annotations.VisibleForTesting;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import com.facebook.react.turbomodule.core.interfaces.CallInvokerHolder;
import java.util.Collection;
import java.util.Objects;
@VisibleForTesting
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class BridgeReactContext extends ReactApplicationContext {
    private static final String EARLY_JS_ACCESS_EXCEPTION_MESSAGE = "Tried to access a JS module before the React instance was fully set up. Calls to ReactContext#getJSModule should only happen once initialize() has been called on your native module.";
    private static final String EARLY_NATIVE_MODULE_EXCEPTION_MESSAGE = "Trying to call native module before CatalystInstance has been set!";
    private static final String LATE_JS_ACCESS_EXCEPTION_MESSAGE = "Tried to access a JS module after the React instance was destroyed.";
    private static final String LATE_NATIVE_MODULE_EXCEPTION_MESSAGE = "Trying to call native module after CatalystInstance has been destroyed!";
    private static final String TAG = "BridgeReactContext";
    private CatalystInstance mCatalystInstance;
    private volatile boolean mDestroyed;

    @fb.a
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface RCTDeviceEventEmitter extends JavaScriptModule {
        void emit(@NonNull String str, Object obj);
    }

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture(TAG, LegacyArchitectureLogLevel.ERROR);
    }

    public BridgeReactContext(Context context) {
        super(context);
        this.mDestroyed = false;
    }

    private void raiseCatalystInstanceMissingException() {
        String str;
        if (this.mDestroyed) {
            str = LATE_NATIVE_MODULE_EXCEPTION_MESSAGE;
        } else {
            str = EARLY_NATIVE_MODULE_EXCEPTION_MESSAGE;
        }
        throw new IllegalStateException(str);
    }

    @Override // com.facebook.react.bridge.ReactContext
    public void destroy() {
        UiThreadUtil.assertOnUiThread();
        this.mDestroyed = true;
        CatalystInstance catalystInstance = this.mCatalystInstance;
        if (catalystInstance != null) {
            catalystInstance.destroy();
        }
    }

    @Override // com.facebook.react.bridge.ReactContext
    public CatalystInstance getCatalystInstance() {
        return (CatalystInstance) db.a.c(this.mCatalystInstance);
    }

    @Override // com.facebook.react.bridge.ReactContext
    @Deprecated
    public UIManager getFabricUIManager() {
        CatalystInstance catalystInstance = this.mCatalystInstance;
        Objects.requireNonNull(catalystInstance);
        return catalystInstance.getFabricUIManager();
    }

    @Override // com.facebook.react.bridge.ReactContext
    public CallInvokerHolder getJSCallInvokerHolder() {
        CatalystInstance catalystInstance = this.mCatalystInstance;
        if (catalystInstance != null) {
            return catalystInstance.getJSCallInvokerHolder();
        }
        return null;
    }

    @Override // com.facebook.react.bridge.ReactContext
    public <T extends JavaScriptModule> T getJSModule(Class<T> cls) {
        T t10;
        if (this.mCatalystInstance == null) {
            if (this.mDestroyed) {
                throw new IllegalStateException(LATE_JS_ACCESS_EXCEPTION_MESSAGE);
            }
            throw new IllegalStateException(EARLY_JS_ACCESS_EXCEPTION_MESSAGE);
        }
        InteropModuleRegistry interopModuleRegistry = this.mInteropModuleRegistry;
        if (interopModuleRegistry != null && (t10 = (T) interopModuleRegistry.getInteropModule(cls)) != null) {
            return t10;
        }
        return (T) this.mCatalystInstance.getJSModule(cls);
    }

    @Override // com.facebook.react.bridge.ReactContext
    @FrameworkAPI
    @UnstableReactNativeAPI
    public JavaScriptContextHolder getJavaScriptContextHolder() {
        CatalystInstance catalystInstance = this.mCatalystInstance;
        if (catalystInstance != null) {
            return catalystInstance.getJavaScriptContextHolder();
        }
        return null;
    }

    @Override // com.facebook.react.bridge.ReactContext
    public <T extends NativeModule> T getNativeModule(Class<T> cls) {
        if (this.mCatalystInstance == null) {
            raiseCatalystInstanceMissingException();
        }
        db.a.c(this.mCatalystInstance);
        return (T) this.mCatalystInstance.getNativeModule(cls);
    }

    @Override // com.facebook.react.bridge.ReactContext
    public Collection<NativeModule> getNativeModules() {
        if (this.mCatalystInstance == null) {
            raiseCatalystInstanceMissingException();
        }
        db.a.c(this.mCatalystInstance);
        return this.mCatalystInstance.getNativeModules();
    }

    @Override // com.facebook.react.bridge.ReactContext
    public String getSourceURL() {
        CatalystInstance catalystInstance = this.mCatalystInstance;
        if (catalystInstance == null) {
            return null;
        }
        return catalystInstance.getSourceURL();
    }

    @Override // com.facebook.react.bridge.ReactContext
    public void handleException(Exception exc) {
        boolean z10;
        boolean z11;
        CatalystInstance catalystInstance = this.mCatalystInstance;
        boolean z12 = false;
        if (catalystInstance != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (catalystInstance != null && !catalystInstance.isDestroyed()) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (getJSExceptionHandler() != null) {
            z12 = true;
        }
        if (z11 && z12) {
            getJSExceptionHandler().handleException(exc);
            return;
        }
        p8.a.n(ReactConstants.TAG, "Unable to handle Exception - catalystInstanceVariableExists: " + z10 + " - isCatalystInstanceAlive: " + z11 + " - hasExceptionHandler: " + z12, exc);
        throw new IllegalStateException(exc);
    }

    @Override // com.facebook.react.bridge.ReactContext
    @Deprecated
    public boolean hasActiveCatalystInstance() {
        return hasActiveReactInstance();
    }

    @Override // com.facebook.react.bridge.ReactContext
    public boolean hasActiveReactInstance() {
        CatalystInstance catalystInstance = this.mCatalystInstance;
        if (catalystInstance != null && !catalystInstance.isDestroyed()) {
            return true;
        }
        return false;
    }

    @Override // com.facebook.react.bridge.ReactContext
    @Deprecated
    public boolean hasCatalystInstance() {
        if (this.mCatalystInstance != null) {
            return true;
        }
        return false;
    }

    @Override // com.facebook.react.bridge.ReactContext
    public <T extends NativeModule> boolean hasNativeModule(Class<T> cls) {
        if (this.mCatalystInstance == null) {
            raiseCatalystInstanceMissingException();
        }
        db.a.c(this.mCatalystInstance);
        return this.mCatalystInstance.hasNativeModule(cls);
    }

    @Override // com.facebook.react.bridge.ReactContext
    public boolean hasReactInstance() {
        if (this.mCatalystInstance != null) {
            return true;
        }
        return false;
    }

    public void initializeWithInstance(CatalystInstance catalystInstance) {
        if (catalystInstance != null) {
            if (this.mCatalystInstance == null) {
                if (this.mDestroyed) {
                    ReactSoftExceptionLogger.logSoftException(TAG, new IllegalStateException("Cannot initialize ReactContext after it has been destroyed."));
                }
                this.mCatalystInstance = catalystInstance;
                initializeMessageQueueThreads(catalystInstance.getReactQueueConfiguration());
                initializeInteropModules();
                return;
            }
            throw new IllegalStateException("ReactContext has been already initialized");
        }
        throw new IllegalArgumentException("CatalystInstance cannot be null.");
    }

    @Override // com.facebook.react.bridge.ReactContext
    @Deprecated
    public boolean isBridgeless() {
        return false;
    }

    @Override // com.facebook.react.bridge.ReactContext
    public void registerSegment(int i10, String str, Callback callback) {
        ((CatalystInstance) db.a.c(this.mCatalystInstance)).registerSegment(i10, str);
        ((Callback) db.a.c(callback)).invoke(new Object[0]);
    }

    @Override // com.facebook.react.bridge.ReactContext
    public NativeModule getNativeModule(String str) {
        if (this.mCatalystInstance == null) {
            raiseCatalystInstanceMissingException();
        }
        db.a.c(this.mCatalystInstance);
        return this.mCatalystInstance.getNativeModule(str);
    }
}
