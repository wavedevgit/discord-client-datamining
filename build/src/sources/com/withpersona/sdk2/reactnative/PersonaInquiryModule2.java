package com.withpersona.sdk2.reactnative;

import android.app.Activity;
import android.content.Intent;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.withpersona.sdk2.inquiry.BuildConfig;
import com.withpersona.sdk2.inquiry.ClientThemeSource;
import com.withpersona.sdk2.inquiry.Environment;
import com.withpersona.sdk2.inquiry.Fields;
import com.withpersona.sdk2.inquiry.Inquiry;
import com.withpersona.sdk2.inquiry.InquiryBuilder;
import com.withpersona.sdk2.inquiry.InquiryField;
import com.withpersona.sdk2.inquiry.InquiryResponse;
import com.withpersona.sdk2.inquiry.InquiryTemplateBuilder;
import com.withpersona.sdk2.inquiry.ServerThemeSource;
import com.withpersona.sdk2.inquiry.ThemeSource;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import gq.a;
import gq.c;
import gq.e;
import gq.f;
import gq.g;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import mq.b;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class PersonaInquiryModule2 extends ReactContextBaseJavaModule implements ActivityEventListener {
    private static final String ACCESS_TOKEN = "sessionToken";
    private static final String ACCOUNT_ID = "accountId";
    private static final String ENVIRONMENT = "environment";
    private static final String ENVIRONMENT_ID = "environmentId";
    private static final String FIELDS = "fields";
    private static final String FIELD_ADDITIONAL_FIELDS = "additionalFields";
    private static final String INQUIRY_ID = "inquiryId";
    private static final String LOCALE = "locale";
    private static final int PERSONA_INQUIRY_REQUEST_CODE = 31416;
    private static final String REFERENCE_ID = "referenceId";
    private static final String RETURN_COLLECTED_DATA = "returnCollectedData";
    private static final String TEMPLATE_ID = "templateId";
    private static final String TEMPLATE_VERSION = "templateVersion";
    private static final String THEME_SET_ID = "themeSetId";
    private static final String THEME_SOURCE = "themeSource";
    private final ReactApplicationContext reactContext;

    public PersonaInquiryModule2(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
        this.reactContext = reactApplicationContext;
        reactApplicationContext.addActivityEventListener(this);
    }

    private ReadableMap collectedDataToMap(a aVar) {
        if (aVar == null) {
            return null;
        }
        WritableMap createMap = Arguments.createMap();
        WritableArray createArray = Arguments.createArray();
        for (g gVar : aVar.a()) {
            WritableMap createMap2 = Arguments.createMap();
            createMap2.putString("stepName", gVar.a());
            if (gVar instanceof g.a) {
                WritableArray createArray2 = Arguments.createArray();
                for (c cVar : ((g.a) gVar).n()) {
                    WritableMap createMap3 = Arguments.createMap();
                    createMap3.putString("absoluteFilePath", cVar.a().getAbsolutePath());
                    createArray2.pushMap(createMap3);
                }
                createMap2.putArray("documents", createArray2);
                createMap2.putString("type", "DocumentStepData");
            } else if (gVar instanceof g.b) {
                WritableArray createArray3 = Arguments.createArray();
                for (e eVar : ((g.b) gVar).n()) {
                    WritableMap createMap4 = Arguments.createMap();
                    createMap4.putString("idClass", eVar.b());
                    createMap4.putString("captureMethod", eVar.a().name());
                    createMap4.putString("side", eVar.c().name());
                    WritableArray createArray4 = Arguments.createArray();
                    for (e.c cVar2 : eVar.i2()) {
                        WritableMap createMap5 = Arguments.createMap();
                        createMap5.putString("absoluteFilePath", cVar2.a().getAbsolutePath());
                        createArray4.pushMap(createMap5);
                    }
                    createMap4.putArray("frames", createArray4);
                    createArray3.pushMap(createMap4);
                }
                createMap2.putArray("captures", createArray3);
                createMap2.putString("type", "GovernmentIdStepData");
            } else if (gVar instanceof g.c) {
                g.c cVar3 = (g.c) gVar;
                ReadableMap selfieCaptureToMap = selfieCaptureToMap(cVar3.n());
                ReadableMap selfieCaptureToMap2 = selfieCaptureToMap(cVar3.f2());
                ReadableMap selfieCaptureToMap3 = selfieCaptureToMap(cVar3.o2());
                createMap2.putMap("centerCapture", selfieCaptureToMap);
                createMap2.putMap("leftCapture", selfieCaptureToMap2);
                createMap2.putMap("rightCapture", selfieCaptureToMap3);
                createMap2.putString("type", "SelfieStepData");
            } else if (gVar instanceof g.d) {
                createMap2.putMap("componentParams", uiStepParamsMapToMap(((g.d) gVar).n()));
                createMap2.putString("type", "UiStepData");
            }
            createArray.pushMap(createMap2);
        }
        createMap.putArray("stepData", createArray);
        return createMap;
    }

    private Environment environmentFromString(String str) {
        if (str == null) {
            return null;
        }
        if (!str.equals("production")) {
            if (!str.equals("sandbox")) {
                return null;
            }
            return Environment.SANDBOX;
        }
        return Environment.PRODUCTION;
    }

    private ReadableMap selfieCaptureToMap(f fVar) {
        if (fVar == null) {
            return null;
        }
        WritableMap createMap = Arguments.createMap();
        createMap.putString("captureMethod", fVar.a().name());
        createMap.putString("absoluteFilePath", fVar.b().getAbsolutePath());
        return createMap;
    }

    private ReadableArray uiStepParamsArrToArr(List<?> list) {
        WritableArray createArray = Arguments.createArray();
        for (Object obj : list) {
            if (obj instanceof String) {
                createArray.pushString((String) obj);
            } else if (obj instanceof Boolean) {
                createArray.pushBoolean(((Boolean) obj).booleanValue());
            } else if (obj instanceof Number) {
                createArray.pushDouble(((Double) obj).doubleValue());
            }
        }
        return createArray;
    }

    private ReadableMap uiStepParamsMapToMap(Map<?, ?> map) {
        WritableMap createMap = Arguments.createMap();
        for (Map.Entry<?, ?> entry : map.entrySet()) {
            Object key = entry.getKey();
            Object value = entry.getValue();
            if (key instanceof String) {
                String str = (String) key;
                if (value instanceof Map) {
                    createMap.putMap(str, uiStepParamsMapToMap((Map) value));
                } else if (value instanceof List) {
                    createMap.putArray(str, uiStepParamsArrToArr((List) value));
                } else if (value instanceof String) {
                    createMap.putString(str, (String) value);
                } else if (value instanceof Boolean) {
                    createMap.putBoolean(str, ((Boolean) value).booleanValue());
                } else if (value instanceof Number) {
                    createMap.putDouble(str, ((Double) value).doubleValue());
                }
            }
        }
        return createMap;
    }

    private static ReadableMap wrapField(String str, String str2) {
        WritableMap createMap = Arguments.createMap();
        createMap.putString("type", str);
        createMap.putString("value", str2);
        return createMap;
    }

    @Override // com.facebook.react.bridge.BaseJavaModule
    public Map<String, Object> getConstants() {
        HashMap hashMap = new HashMap();
        hashMap.put("INQUIRY_SDK_VERSION", BuildConfig.INQUIRY_SDK_VERSION);
        return hashMap;
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "PersonaInquiry2";
    }

    @Override // com.facebook.react.bridge.ActivityEventListener
    public void onActivityResult(Activity activity, int i10, int i11, Intent intent) {
        if (i10 == PERSONA_INQUIRY_REQUEST_CODE) {
            InquiryResponse onActivityResult = Inquiry.onActivityResult(intent);
            DeviceEventManagerModule.RCTDeviceEventEmitter rCTDeviceEventEmitter = (DeviceEventManagerModule.RCTDeviceEventEmitter) this.reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
            if (onActivityResult instanceof InquiryResponse.Complete) {
                InquiryResponse.Complete complete = (InquiryResponse.Complete) onActivityResult;
                WritableMap createMap = Arguments.createMap();
                createMap.putString(INQUIRY_ID, complete.getInquiryId());
                createMap.putString("status", complete.getStatus());
                WritableMap createMap2 = Arguments.createMap();
                Map<String, InquiryField> fields = complete.getFields();
                for (String str : fields.keySet()) {
                    InquiryField inquiryField = fields.get(str);
                    if (inquiryField instanceof InquiryField.StringField) {
                        createMap2.putMap(str, wrapField(InquiryField.StringField.TYPE, ((InquiryField.StringField) inquiryField).getValue()));
                    } else {
                        String str2 = null;
                        if (inquiryField instanceof InquiryField.IntegerField) {
                            Integer value = ((InquiryField.IntegerField) inquiryField).getValue();
                            if (value != null) {
                                str2 = value.toString();
                            }
                            createMap2.putMap(str, wrapField(InquiryField.IntegerField.TYPE, str2));
                        } else if (inquiryField instanceof InquiryField.BooleanField) {
                            Boolean value2 = ((InquiryField.BooleanField) inquiryField).getValue();
                            if (value2 != null) {
                                str2 = value2.toString();
                            }
                            createMap2.putMap(str, wrapField(InquiryField.BooleanField.TYPE, str2));
                        } else if (inquiryField instanceof InquiryField.UnknownField) {
                            createMap2.putMap(str, wrapField("unknown", ((InquiryField.UnknownField) inquiryField).getType()));
                        } else {
                            createMap2.putMap(str, wrapField("unknown", null));
                        }
                    }
                }
                createMap.putMap(FIELDS, createMap2);
                createMap.putMap("collectedData", collectedDataToMap(complete.getCollectedData()));
                rCTDeviceEventEmitter.emit("onComplete", createMap);
            } else if (onActivityResult instanceof InquiryResponse.Cancel) {
                InquiryResponse.Cancel cancel = (InquiryResponse.Cancel) onActivityResult;
                WritableMap createMap3 = Arguments.createMap();
                createMap3.putString(INQUIRY_ID, cancel.getInquiryId());
                createMap3.putString(ACCESS_TOKEN, cancel.getSessionToken());
                rCTDeviceEventEmitter.emit("onCanceled", createMap3);
            } else if (onActivityResult instanceof InquiryResponse.Error) {
                InquiryResponse.Error error = (InquiryResponse.Error) onActivityResult;
                WritableMap createMap4 = Arguments.createMap();
                createMap4.putString("debugMessage", error.getDebugMessage());
                createMap4.putString("errorCode", error.getErrorCode().name());
                rCTDeviceEventEmitter.emit("onError", createMap4);
            }
        }
    }

    @Override // com.facebook.react.bridge.ActivityEventListener
    public void onNewIntent(Intent intent) {
    }

    @ReactMethod
    public void startInquiry(ReadableMap readableMap) {
        String str;
        String str2;
        String str3;
        InquiryTemplateBuilder fromTemplateVersion;
        String str4;
        ThemeSource clientThemeSource;
        String str5;
        String str6;
        String str7;
        String str8;
        String str9;
        String str10;
        ReadableMap readableMap2;
        String str11;
        ThemeSource clientThemeSource2;
        String str12;
        String str13;
        Activity currentActivity = this.reactContext.getCurrentActivity();
        Boolean bool = null;
        if (readableMap.hasKey(INQUIRY_ID)) {
            str = readableMap.getString(INQUIRY_ID);
        } else {
            str = null;
        }
        if (readableMap.hasKey(TEMPLATE_ID)) {
            str2 = readableMap.getString(TEMPLATE_ID);
        } else {
            str2 = null;
        }
        if (readableMap.hasKey(TEMPLATE_VERSION)) {
            str3 = readableMap.getString(TEMPLATE_VERSION);
        } else {
            str3 = null;
        }
        if (str != null) {
            InquiryBuilder fromInquiry = Inquiry.fromInquiry(str);
            if (readableMap.hasKey(THEME_SOURCE)) {
                str11 = readableMap.getString(THEME_SOURCE);
            } else {
                str11 = null;
            }
            if (str11 != null && str11.equals("server")) {
                clientThemeSource2 = new ServerThemeSource(Integer.valueOf(b.f39572a));
            } else {
                clientThemeSource2 = new ClientThemeSource(Integer.valueOf(b.f39572a));
            }
            InquiryBuilder theme = fromInquiry.theme(clientThemeSource2);
            if (readableMap.hasKey(ACCESS_TOKEN)) {
                str12 = readableMap.getString(ACCESS_TOKEN);
            } else {
                str12 = null;
            }
            if (str12 != null) {
                theme = theme.sessionToken(str12);
            }
            if (readableMap.hasKey(LOCALE)) {
                str13 = readableMap.getString(LOCALE);
            } else {
                str13 = null;
            }
            if (str13 != null) {
                theme = theme.locale(str13);
            }
            if (currentActivity != null) {
                theme.build().start(currentActivity, PERSONA_INQUIRY_REQUEST_CODE);
            }
        }
        if (str2 != null || str3 != null) {
            if (str2 != null) {
                fromTemplateVersion = Inquiry.fromTemplate(str2);
            } else {
                fromTemplateVersion = Inquiry.fromTemplateVersion(str3);
            }
            if (readableMap.hasKey(THEME_SOURCE)) {
                str4 = readableMap.getString(THEME_SOURCE);
            } else {
                str4 = null;
            }
            if (str4 != null && str4.equals("server")) {
                clientThemeSource = new ServerThemeSource(Integer.valueOf(b.f39572a));
            } else {
                clientThemeSource = new ClientThemeSource(Integer.valueOf(b.f39572a));
            }
            InquiryTemplateBuilder theme2 = fromTemplateVersion.theme(clientThemeSource);
            if (readableMap.hasKey(REFERENCE_ID)) {
                str5 = readableMap.getString(REFERENCE_ID);
            } else {
                str5 = null;
            }
            if (str5 != null) {
                theme2 = theme2.referenceId(str5);
            }
            if (readableMap.hasKey(ACCOUNT_ID)) {
                str6 = readableMap.getString(ACCOUNT_ID);
            } else {
                str6 = null;
            }
            if (str6 != null) {
                theme2 = theme2.accountId(str6);
            }
            if (readableMap.hasKey(ENVIRONMENT)) {
                str7 = readableMap.getString(ENVIRONMENT);
            } else {
                str7 = null;
            }
            Environment environmentFromString = environmentFromString(str7);
            if (environmentFromString != null) {
                theme2 = theme2.environment(environmentFromString);
            }
            if (readableMap.hasKey(ENVIRONMENT_ID)) {
                str8 = readableMap.getString(ENVIRONMENT_ID);
            } else {
                str8 = null;
            }
            if (str8 != null) {
                theme2 = theme2.environmentId(str8);
            }
            if (readableMap.hasKey(THEME_SET_ID)) {
                str9 = readableMap.getString(THEME_SET_ID);
            } else {
                str9 = null;
            }
            if (str9 != null) {
                theme2 = theme2.themeSetId(str9);
            }
            if (readableMap.hasKey(LOCALE)) {
                str10 = readableMap.getString(LOCALE);
            } else {
                str10 = null;
            }
            if (str10 != null) {
                theme2 = theme2.locale(str10);
            }
            if (readableMap.hasKey(FIELDS)) {
                readableMap2 = readableMap.getMap(FIELDS);
            } else {
                readableMap2 = null;
            }
            if (readableMap2 != null) {
                Fields.Builder builder = new Fields.Builder();
                for (Map.Entry<String, Object> entry : readableMap2.toHashMap().entrySet()) {
                    String key = entry.getKey();
                    Map map = (Map) entry.getValue();
                    String str14 = (String) map.get("type");
                    Object obj = map.get("value");
                    if (obj != null) {
                        if (Objects.equals(str14, InquiryField.StringField.TYPE)) {
                            builder.field(key, (String) obj);
                        } else if (Objects.equals(str14, InquiryField.IntegerField.TYPE)) {
                            builder.field(key, ((Double) obj).intValue());
                        } else if (Objects.equals(str14, InquiryField.BooleanField.TYPE)) {
                            builder.field(key, ((Boolean) obj).booleanValue());
                        }
                    }
                }
                theme2 = theme2.fields(builder.build());
            }
            if (readableMap.hasKey(RETURN_COLLECTED_DATA)) {
                bool = Boolean.valueOf(readableMap.getBoolean(RETURN_COLLECTED_DATA));
            }
            if (bool != null) {
                theme2 = theme2.returnCollectedData(bool.booleanValue());
            }
            if (currentActivity != null) {
                theme2.build().start(currentActivity, PERSONA_INQUIRY_REQUEST_CODE);
            }
        }
    }
}
