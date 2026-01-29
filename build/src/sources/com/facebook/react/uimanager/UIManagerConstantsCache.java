package com.facebook.react.uimanager;

import android.content.Context;
import android.content.pm.PackageManager;
import android.util.Log;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.internal.featureflags.ReactNativeFeatureFlags;
import com.tencent.mmkv.MMKV;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CountDownLatch;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class UIManagerConstantsCache {
    private static final UIManagerConstantsCache INSTANCE = new UIManagerConstantsCache();
    private static final String MMKV_KEY_BUBBLING = "UIManagerModuleBubbling_v1";
    private static final String MMKV_KEY_CONSTANTS = "UIManagerModuleConstants_v1";
    private static final String MMKV_KEY_VERSION = "UIManagerConstantsCacheVersion";
    private static final String TAG = "UIManagerConstantsCache";
    private Map<String, Object> cachedConstants = null;
    private Map<String, Object> cachedBubblingEventsTypes = null;
    private WritableNativeMap cachedNativeMap = null;
    private final CountDownLatch loadLatch = new CountDownLatch(1);
    private volatile boolean initCalled = false;
    private String cacheVersionName = null;

    private UIManagerConstantsCache() {
    }

    public static UIManagerConstantsCache getInstance() {
        return INSTANCE;
    }

    private static List<Object> jsonArrayToList(JSONArray jSONArray) {
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < jSONArray.length(); i10++) {
            Object obj = jSONArray.get(i10);
            if (obj == JSONObject.NULL) {
                arrayList.add(null);
            } else if (!(obj instanceof Boolean) && !(obj instanceof Number) && !(obj instanceof String)) {
                if (obj instanceof JSONObject) {
                    arrayList.add(jsonToMap((JSONObject) obj));
                } else if (obj instanceof JSONArray) {
                    arrayList.add(jsonArrayToList((JSONArray) obj));
                } else {
                    throw new JSONException("Unsupported JSON array element at index " + i10 + ": " + obj.getClass());
                }
            } else {
                arrayList.add(obj);
            }
        }
        return arrayList;
    }

    private static Map<String, Object> jsonToMap(JSONObject jSONObject) {
        HashMap hashMap = new HashMap();
        Iterator<String> keys = jSONObject.keys();
        while (keys.hasNext()) {
            String next = keys.next();
            Object obj = jSONObject.get(next);
            if (obj == JSONObject.NULL) {
                hashMap.put(next, null);
            } else if (!(obj instanceof Boolean) && !(obj instanceof Number) && !(obj instanceof String)) {
                if (obj instanceof JSONObject) {
                    hashMap.put(next, jsonToMap((JSONObject) obj));
                } else if (obj instanceof JSONArray) {
                    hashMap.put(next, jsonArrayToList((JSONArray) obj));
                } else {
                    throw new JSONException("Unsupported JSON type in UIManager constants for key \"" + next + "\": " + obj.getClass());
                }
            } else {
                hashMap.put(next, obj);
            }
        }
        return hashMap;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:37:0x00b8 A[Catch: all -> 0x002b, TRY_LEAVE, TryCatch #8 {all -> 0x002b, blocks: (B:2:0x0000, B:4:0x000d, B:7:0x0014, B:11:0x005b, B:14:0x0064, B:15:0x006d, B:18:0x0071, B:22:0x0085, B:41:0x00c3, B:43:0x00cb, B:44:0x00d4, B:47:0x00d8, B:51:0x00eb, B:70:0x0129, B:50:0x00e7, B:57:0x00ff, B:66:0x011e, B:69:0x0122, B:58:0x0100, B:59:0x0116, B:21:0x0081, B:28:0x0099, B:37:0x00b8, B:40:0x00bc, B:29:0x009a, B:30:0x00b0, B:10:0x002e, B:67:0x011f, B:68:0x0121, B:31:0x00b1, B:32:0x00b3, B:38:0x00b9, B:39:0x00bb, B:71:0x012a, B:73:0x012e, B:77:0x0139, B:76:0x0137, B:60:0x0117, B:61:0x0119), top: B:94:0x0000, inners: #1, #6 }] */
    /* JADX WARN: Removed duplicated region for block: B:66:0x011e A[Catch: all -> 0x002b, TRY_LEAVE, TryCatch #8 {all -> 0x002b, blocks: (B:2:0x0000, B:4:0x000d, B:7:0x0014, B:11:0x005b, B:14:0x0064, B:15:0x006d, B:18:0x0071, B:22:0x0085, B:41:0x00c3, B:43:0x00cb, B:44:0x00d4, B:47:0x00d8, B:51:0x00eb, B:70:0x0129, B:50:0x00e7, B:57:0x00ff, B:66:0x011e, B:69:0x0122, B:58:0x0100, B:59:0x0116, B:21:0x0081, B:28:0x0099, B:37:0x00b8, B:40:0x00bc, B:29:0x009a, B:30:0x00b0, B:10:0x002e, B:67:0x011f, B:68:0x0121, B:31:0x00b1, B:32:0x00b3, B:38:0x00b9, B:39:0x00bb, B:71:0x012a, B:73:0x012e, B:77:0x0139, B:76:0x0137, B:60:0x0117, B:61:0x0119), top: B:94:0x0000, inners: #1, #6 }] */
    /* JADX WARN: Removed duplicated region for block: B:71:0x012a A[Catch: all -> 0x0135, TRY_ENTER, TryCatch #8 {all -> 0x002b, blocks: (B:2:0x0000, B:4:0x000d, B:7:0x0014, B:11:0x005b, B:14:0x0064, B:15:0x006d, B:18:0x0071, B:22:0x0085, B:41:0x00c3, B:43:0x00cb, B:44:0x00d4, B:47:0x00d8, B:51:0x00eb, B:70:0x0129, B:50:0x00e7, B:57:0x00ff, B:66:0x011e, B:69:0x0122, B:58:0x0100, B:59:0x0116, B:21:0x0081, B:28:0x0099, B:37:0x00b8, B:40:0x00bc, B:29:0x009a, B:30:0x00b0, B:10:0x002e, B:67:0x011f, B:68:0x0121, B:31:0x00b1, B:32:0x00b3, B:38:0x00b9, B:39:0x00bb, B:71:0x012a, B:73:0x012e, B:77:0x0139, B:76:0x0137, B:60:0x0117, B:61:0x0119), top: B:94:0x0000, inners: #1, #6 }] */
    /* JADX WARN: Removed duplicated region for block: B:90:0x0064 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:93:0x00cb A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ void lambda$init$0(java.lang.String r8) {
        /*
            Method dump skipped, instructions count: 334
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.uimanager.UIManagerConstantsCache.lambda$init$0(java.lang.String):void");
    }

    private static JSONArray listToJsonArray(List<Object> list) {
        JSONArray jSONArray = new JSONArray();
        for (Object obj : list) {
            if (obj == null) {
                jSONArray.put(JSONObject.NULL);
            } else if (obj instanceof String) {
                jSONArray.put((String) obj);
            } else if (obj instanceof Boolean) {
                jSONArray.put((Boolean) obj);
            } else if (obj instanceof Number) {
                jSONArray.put((Number) obj);
            } else if (obj instanceof Map) {
                jSONArray.put(mapToJson((Map) obj));
            } else if (obj instanceof List) {
                jSONArray.put(listToJsonArray((List) obj));
            } else {
                throw new JSONException("Unsupported list element type: " + obj.getClass());
            }
        }
        return jSONArray;
    }

    private static JSONObject mapToJson(Map<String, Object> map) {
        JSONObject jSONObject = new JSONObject();
        for (Map.Entry<String, Object> entry : map.entrySet()) {
            String key = entry.getKey();
            Object value = entry.getValue();
            if (value == null) {
                jSONObject.put(key, JSONObject.NULL);
            } else if (value instanceof String) {
                jSONObject.put(key, (String) value);
            } else if (value instanceof Boolean) {
                jSONObject.put(key, (Boolean) value);
            } else if (value instanceof Number) {
                jSONObject.put(key, (Number) value);
            } else if (value instanceof Map) {
                jSONObject.put(key, mapToJson((Map) value));
            } else if (value instanceof List) {
                jSONObject.put(key, listToJsonArray((List) value));
            } else {
                throw new JSONException("Unsupported value type for key \"" + key + "\": " + value.getClass());
            }
        }
        return jSONObject;
    }

    public Map<String, Object> getCachedBubblingEventsTypes() {
        Map<String, Object> map;
        try {
            this.loadLatch.await();
            synchronized (this) {
                map = this.cachedBubblingEventsTypes;
            }
            return map;
        } catch (InterruptedException unused) {
            Thread.currentThread().interrupt();
            Log.w(TAG, "getCachedBubblingEventsTypes() interrupted while waiting.");
            return null;
        }
    }

    public Map<String, Object> getCachedConstants() {
        Map<String, Object> map;
        try {
            this.loadLatch.await();
            synchronized (this) {
                map = this.cachedConstants;
            }
            return map;
        } catch (InterruptedException unused) {
            Thread.currentThread().interrupt();
            Log.w(TAG, "getCachedConstants() interrupted while waiting.");
            return null;
        }
    }

    public WritableNativeMap getUIManagerConstantsAsWritableMap() {
        WritableNativeMap writableNativeMap;
        try {
            this.loadLatch.await();
            synchronized (this) {
                writableNativeMap = this.cachedNativeMap;
            }
            return writableNativeMap;
        } catch (InterruptedException unused) {
            Thread.currentThread().interrupt();
            Log.w(TAG, "getUIManagerConstantsAsWritableMap() interrupted while waiting.");
            return null;
        }
    }

    public synchronized void init(Context context) {
        String str;
        try {
            if (this.initCalled) {
                return;
            }
            this.initCalled = true;
            try {
                this.cacheVersionName = context.getPackageManager().getPackageInfo(context.getPackageName(), 0).versionName;
                StringBuilder sb2 = new StringBuilder();
                sb2.append(this.cacheVersionName);
                sb2.append("-");
                if (ReactNativeFeatureFlags.enableFabricRenderer()) {
                    str = "Fabric";
                } else {
                    str = "NonFabric";
                }
                sb2.append(str);
                this.cacheVersionName = sb2.toString();
                MMKV.l(context.getApplicationContext());
                final String str2 = this.cacheVersionName;
                new Thread(new Runnable() { // from class: com.facebook.react.uimanager.w
                    @Override // java.lang.Runnable
                    public final void run() {
                        UIManagerConstantsCache.this.lambda$init$0(str2);
                    }
                }, "UIManagerConstantsCache-Loader").start();
            } catch (PackageManager.NameNotFoundException e10) {
                Log.e(TAG, "Failed to get app version name; continuing without caching!", e10);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public void saveConstantsAndBubblingEventsTypes(Map<String, Object> map, Map<String, Object> map2) {
        if (map == null) {
            return;
        }
        if (this.cacheVersionName != null) {
            try {
                JSONObject mapToJson = mapToJson(map);
                long currentTimeMillis = System.currentTimeMillis();
                MMKV.f().j(MMKV_KEY_CONSTANTS, mapToJson.toString());
                long currentTimeMillis2 = System.currentTimeMillis();
                Log.v(TAG, "Saved UIManager constants to MMKV in " + (currentTimeMillis2 - currentTimeMillis) + "ms");
            } catch (JSONException e10) {
                Log.e(TAG, "Failed to JSON-serialize UIManager constants; not caching.", e10);
            }
            if (map2 != null) {
                try {
                    JSONObject mapToJson2 = mapToJson(map2);
                    long currentTimeMillis3 = System.currentTimeMillis();
                    MMKV.f().j(MMKV_KEY_BUBBLING, mapToJson2.toString());
                    long currentTimeMillis4 = System.currentTimeMillis();
                    Log.v(TAG, "Saved bubblingEventTypes to MMKV in " + (currentTimeMillis4 - currentTimeMillis3) + "ms");
                } catch (JSONException e11) {
                    Log.e(TAG, "Failed to JSON-serialize bubblingEventTypes; not caching.", e11);
                }
            }
            MMKV.f().j(MMKV_KEY_VERSION, this.cacheVersionName);
            return;
        }
        throw new IllegalStateException("UIManagerConstantsCache not initialized! Call init(...) first.");
    }
}
