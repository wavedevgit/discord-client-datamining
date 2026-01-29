package com.henninghall.date_picker;

import com.facebook.react.ReactPackage;
import com.facebook.react.TurboReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c extends TurboReactPackage implements ReactPackage {

    /* renamed from: a  reason: collision with root package name */
    public static ReactApplicationContext f17608a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements ReactModuleInfoProvider {

        /* renamed from: a  reason: collision with root package name */
        final boolean f17609a = true;

        a() {
        }

        @Override // com.facebook.react.module.model.ReactModuleInfoProvider
        public Map getReactModuleInfos() {
            HashMap hashMap = new HashMap();
            hashMap.put(NativeRNDatePickerSpec.NAME, new ReactModuleInfo(NativeRNDatePickerSpec.NAME, NativeRNDatePickerSpec.NAME, false, false, true, false, true));
            return hashMap;
        }
    }

    @Override // com.facebook.react.BaseReactPackage, com.facebook.react.ReactPackage
    public List createNativeModules(ReactApplicationContext reactApplicationContext) {
        ArrayList arrayList = new ArrayList();
        arrayList.add(new DatePickerModule(reactApplicationContext));
        return arrayList;
    }

    @Override // com.facebook.react.BaseReactPackage, com.facebook.react.ReactPackage
    public List createViewManagers(ReactApplicationContext reactApplicationContext) {
        f17608a = reactApplicationContext;
        return Arrays.asList(new DatePickerManager());
    }

    @Override // com.facebook.react.BaseReactPackage, com.facebook.react.ReactPackage
    public NativeModule getModule(String str, ReactApplicationContext reactApplicationContext) {
        if (str.equals(NativeRNDatePickerSpec.NAME)) {
            f17608a = reactApplicationContext;
            return new DatePickerModule(reactApplicationContext);
        }
        return null;
    }

    @Override // com.facebook.react.BaseReactPackage
    public ReactModuleInfoProvider getReactModuleInfoProvider() {
        return new a();
    }
}
