package cm;

import com.facebook.react.TurboReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import com.reactnativedocumentpicker.NativeDocumentPickerSpec;
import com.reactnativedocumentpicker.RNDocumentPickerModule;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class j extends TurboReactPackage {
    public static /* synthetic */ Map a() {
        HashMap hashMap = new HashMap();
        hashMap.put(NativeDocumentPickerSpec.NAME, new ReactModuleInfo(NativeDocumentPickerSpec.NAME, NativeDocumentPickerSpec.NAME, false, false, false, false, true));
        return hashMap;
    }

    @Override // com.facebook.react.BaseReactPackage, com.facebook.react.ReactPackage
    public NativeModule getModule(String str, ReactApplicationContext reactApplicationContext) {
        if (str.equals(NativeDocumentPickerSpec.NAME)) {
            return new RNDocumentPickerModule(reactApplicationContext);
        }
        return null;
    }

    @Override // com.facebook.react.BaseReactPackage
    public ReactModuleInfoProvider getReactModuleInfoProvider() {
        return new ReactModuleInfoProvider() { // from class: cm.i
            @Override // com.facebook.react.module.model.ReactModuleInfoProvider
            public final Map getReactModuleInfos() {
                return j.a();
            }
        };
    }
}
