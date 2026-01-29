package com.henninghall.date_picker;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactPropGroup;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class DatePickerManager extends SimpleViewManager<i> {
    @Override // com.facebook.react.uimanager.ViewManager
    public Map<String, Integer> getCommandsMap() {
        return a.b();
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    public String getName() {
        return NativeRNDatePickerSpec.NAME;
    }

    @ReactPropGroup(names = {InquiryField.DateField.TYPE, "mode", "locale", "maximumDate", "minimumDate", "textColor", "timezoneOffsetInMinutes", "minuteInterval", "is24hourSource", StackTraceHelper.ID_KEY, "dividerColor"})
    public void setProps(i iVar, int i10, Dynamic dynamic) {
        a.e("setProps", iVar, i10, dynamic, getClass());
    }

    @ReactPropGroup(customType = "Style", names = {"height"})
    public void setStyle(i iVar, int i10, Dynamic dynamic) {
        a.e("setStyle", iVar, i10, dynamic, getClass());
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public i createViewInstance(ThemedReactContext themedReactContext) {
        return a.a(themedReactContext);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onAfterUpdateTransaction(i iVar) {
        super.onAfterUpdateTransaction((DatePickerManager) iVar);
        a.d(iVar);
    }
}
