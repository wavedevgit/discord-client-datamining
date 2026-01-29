package io.sentry.react;

import com.facebook.react.TurboReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import io.sentry.react.replay.RNSentryReplayMaskManager;
import io.sentry.react.replay.RNSentryReplayUnmaskManager;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import x.d0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class r extends TurboReactPackage {
    public static /* synthetic */ Map a() {
        HashMap hashMap = new HashMap();
        hashMap.put(NativeRNSentrySpec.NAME, new ReactModuleInfo(NativeRNSentrySpec.NAME, NativeRNSentrySpec.NAME, false, false, true, false, true));
        hashMap.put("RNSentryReplayMask", new ReactModuleInfo("RNSentryReplayMask", "RNSentryReplayMask", false, false, false, false, true));
        hashMap.put("RNSentryReplayUnmask", new ReactModuleInfo("RNSentryReplayUnmask", "RNSentryReplayUnmask", false, false, false, false, true));
        return hashMap;
    }

    private NativeModule b(String str) {
        if ("RNSentryReplayMask".equals(str)) {
            return new RNSentryReplayMaskManager();
        }
        if ("RNSentryReplayUnmask".equals(str)) {
            return new RNSentryReplayUnmaskManager();
        }
        return null;
    }

    @Override // com.facebook.react.BaseReactPackage, com.facebook.react.ReactPackage
    public List createViewManagers(ReactApplicationContext reactApplicationContext) {
        List a10;
        a10 = d0.a(new Object[]{new RNSentryOnDrawReporterManager(reactApplicationContext), new RNSentryReplayMaskManager(), new RNSentryReplayUnmaskManager()});
        return a10;
    }

    @Override // com.facebook.react.BaseReactPackage, com.facebook.react.ReactPackage
    public NativeModule getModule(String str, ReactApplicationContext reactApplicationContext) {
        if (NativeRNSentrySpec.NAME.equals(str)) {
            return new RNSentryModule(reactApplicationContext);
        }
        return b(str);
    }

    @Override // com.facebook.react.BaseReactPackage
    public ReactModuleInfoProvider getReactModuleInfoProvider() {
        return new ReactModuleInfoProvider() { // from class: io.sentry.react.q
            @Override // com.facebook.react.module.model.ReactModuleInfoProvider
            public final Map getReactModuleInfos() {
                return r.a();
            }
        };
    }
}
