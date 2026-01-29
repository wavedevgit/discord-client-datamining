package com.appsflyer.internal;

import android.graphics.Color;
import android.graphics.ImageFormat;
import android.media.AudioTrack;
import android.os.SystemClock;
import android.telephony.cdma.CdmaCellLocation;
import android.text.AndroidCharacter;
import android.text.TextUtils;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewConfiguration;
import android.widget.ExpandableListView;
import com.appsflyer.internal.AFg1dSDK;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;
import org.json.JSONArray;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFg1gSDK {
    private final LinkedHashMap<String, Object> getMediationNetwork;
    public static final Object getRevenue = new Object() { // from class: com.appsflyer.internal.AFg1gSDK.1
        public final boolean equals(Object obj) {
            return obj == this || obj == null;
        }

        public final int hashCode() {
            return 0;
        }

        public final String toString() {
            return "null";
        }
    };
    private static final Double getMonetizationNetwork = Double.valueOf(-0.0d);

    public AFg1gSDK() {
        this.getMediationNetwork = new LinkedHashMap<>();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String getMediationNetwork(Number number) {
        if (number != null) {
            double doubleValue = number.doubleValue();
            try {
                Object[] objArr = {Double.valueOf(doubleValue)};
                Map map = AFa1jSDK.unregisterClient;
                Object obj = map.get(-1755342830);
                if (obj == null) {
                    obj = ((Class) AFa1jSDK.AFAdRevenueData(KeyEvent.normalizeMetaState(0) + 285, (char) (33655 - (ViewConfiguration.getMinimumFlingVelocity() >> 16)), 36 - (ViewConfiguration.getMinimumFlingVelocity() >> 16))).getDeclaredMethod("getMonetizationNetwork", Double.TYPE);
                    map.put(-1755342830, obj);
                }
                ((Double) ((Method) obj).invoke(null, objArr)).getClass();
                if (number.equals(getMonetizationNetwork)) {
                    return "-0";
                }
                long longValue = number.longValue();
                if (doubleValue == longValue) {
                    return Long.toString(longValue);
                }
                return number.toString();
            } catch (Throwable th2) {
                Throwable cause = th2.getCause();
                if (cause != null) {
                    throw cause;
                }
                throw th2;
            }
        }
        throw new AFg1jSDK("Number must be non-null");
    }

    public final AFg1gSDK getRevenue(String str, Object obj) {
        if (obj == null) {
            this.getMediationNetwork.remove(str);
            return this;
        }
        if (obj instanceof Number) {
            try {
                Object[] objArr = {Double.valueOf(((Number) obj).doubleValue())};
                Map map = AFa1jSDK.unregisterClient;
                Object obj2 = map.get(-1755342830);
                if (obj2 == null) {
                    obj2 = ((Class) AFa1jSDK.AFAdRevenueData(AndroidCharacter.getMirror('0') + 237, (char) ((ViewConfiguration.getJumpTapTimeout() >> 16) + 33655), 36 - TextUtils.indexOf("", ""))).getMethod("getMonetizationNetwork", Double.TYPE);
                    map.put(-1755342830, obj2);
                }
                ((Double) ((Method) obj2).invoke(null, objArr)).getClass();
            } catch (Throwable th2) {
                Throwable cause = th2.getCause();
                if (cause != null) {
                    throw cause;
                }
                throw th2;
            }
        }
        LinkedHashMap<String, Object> linkedHashMap = this.getMediationNetwork;
        if (str != null) {
            linkedHashMap.put(str, obj);
            return this;
        }
        throw new AFg1jSDK("Names must be non-null");
    }

    public final String toString() {
        try {
            AFg1dSDK aFg1dSDK = new AFg1dSDK();
            getRevenue(aFg1dSDK);
            return aFg1dSDK.toString();
        } catch (AFg1jSDK unused) {
            return null;
        }
    }

    public AFg1gSDK(Map map) {
        this();
        for (Map.Entry entry : map.entrySet()) {
            String str = (String) entry.getKey();
            if (str != null) {
                this.getMediationNetwork.put(str, getMediationNetwork(entry.getValue()));
            } else {
                throw new NullPointerException("key == null");
            }
        }
    }

    private AFg1gSDK(Object obj) {
        try {
            Map map = AFa1jSDK.unregisterClient;
            Object obj2 = map.get(953122140);
            if (obj2 == null) {
                obj2 = ((Class) AFa1jSDK.AFAdRevenueData((ViewConfiguration.getKeyRepeatDelay() >> 16) + 357, (char) (ViewConfiguration.getScrollBarSize() >> 8), TextUtils.getTrimmedLength("") + 36)).getDeclaredMethod("getMediationNetwork", null);
                map.put(953122140, obj2);
            }
            Object invoke = ((Method) obj2).invoke(obj, null);
            if (!(invoke instanceof AFg1gSDK)) {
                Object[] objArr = {invoke, "AFJsonObject"};
                Object obj3 = map.get(-362099263);
                if (obj3 == null) {
                    obj3 = ((Class) AFa1jSDK.AFAdRevenueData(285 - (ViewConfiguration.getDoubleTapTimeout() >> 16), (char) (33655 - (ViewConfiguration.getJumpTapTimeout() >> 16)), 35 - ImageFormat.getBitsPerPixel(0))).getDeclaredMethod("getMediationNetwork", Object.class, String.class);
                    map.put(-362099263, obj3);
                }
                throw ((Throwable) ((Method) obj3).invoke(null, objArr));
            }
            this.getMediationNetwork = ((AFg1gSDK) invoke).getMediationNetwork;
        } catch (Throwable th2) {
            Throwable cause = th2.getCause();
            if (cause == null) {
                throw th2;
            }
            throw cause;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void getRevenue(AFg1dSDK aFg1dSDK) {
        aFg1dSDK.AFAdRevenueData(AFg1dSDK.AFa1uSDK.EMPTY_OBJECT, "{");
        for (Map.Entry<String, Object> entry : this.getMediationNetwork.entrySet()) {
            String key = entry.getKey();
            if (key != null) {
                aFg1dSDK.getCurrencyIso4217Code();
                aFg1dSDK.getCurrencyIso4217Code(key);
                aFg1dSDK.getMonetizationNetwork(entry.getValue());
            } else {
                throw new AFg1jSDK("Names must be non-null");
            }
        }
        aFg1dSDK.getMediationNetwork(AFg1dSDK.AFa1uSDK.EMPTY_OBJECT, AFg1dSDK.AFa1uSDK.NONEMPTY_OBJECT, "}");
    }

    public static Object getMediationNetwork(Object obj) {
        if (obj == null) {
            return getRevenue;
        }
        if (((Class) AFa1jSDK.AFAdRevenueData((AudioTrack.getMinVolume() > 0.0f ? 1 : (AudioTrack.getMinVolume() == 0.0f ? 0 : -1)) + 321, (char) (TextUtils.indexOf("", "", 0) + 56708), 36 - (CdmaCellLocation.convertQuartSecToDecDegrees(0) > 0.0d ? 1 : (CdmaCellLocation.convertQuartSecToDecDegrees(0) == 0.0d ? 0 : -1)))).isInstance(obj) || (obj instanceof AFg1gSDK)) {
            return obj;
        }
        if (obj instanceof JSONArray) {
            Object[] objArr = {obj.toString()};
            Map map = AFa1jSDK.unregisterClient;
            Object obj2 = map.get(-2136715534);
            if (obj2 == null) {
                obj2 = ((Class) AFa1jSDK.AFAdRevenueData(ExpandableListView.getPackedPositionType(0L) + 321, (char) (56708 - (AudioTrack.getMinVolume() > 0.0f ? 1 : (AudioTrack.getMinVolume() == 0.0f ? 0 : -1))), Color.rgb(0, 0, 0) + 16777252)).getDeclaredConstructor(String.class);
                map.put(-2136715534, obj2);
            }
            return ((Constructor) obj2).newInstance(objArr);
        }
        if (obj instanceof JSONObject) {
            return new AFg1gSDK(obj.toString());
        }
        if (obj.equals(getRevenue)) {
            return obj;
        }
        if (obj instanceof Collection) {
            Object[] objArr2 = {(Collection) obj};
            Map map2 = AFa1jSDK.unregisterClient;
            Object obj3 = map2.get(-1441240789);
            if (obj3 == null) {
                obj3 = ((Class) AFa1jSDK.AFAdRevenueData(322 - (SystemClock.elapsedRealtime() > 0L ? 1 : (SystemClock.elapsedRealtime() == 0L ? 0 : -1)), (char) (56708 - TextUtils.getOffsetBefore("", 0)), 36 - KeyEvent.keyCodeFromString(""))).getDeclaredConstructor(Collection.class);
                map2.put(-1441240789, obj3);
            }
            return ((Constructor) obj3).newInstance(objArr2);
        } else if (obj.getClass().isArray()) {
            Object[] objArr3 = {obj};
            Map map3 = AFa1jSDK.unregisterClient;
            Object obj4 = map3.get(453738144);
            if (obj4 == null) {
                obj4 = ((Class) AFa1jSDK.AFAdRevenueData(320 - ExpandableListView.getPackedPositionChild(0L), (char) (56708 - TextUtils.getOffsetBefore("", 0)), 36 - View.combineMeasuredStates(0, 0))).getDeclaredConstructor(Object.class);
                map3.put(453738144, obj4);
            }
            return ((Constructor) obj4).newInstance(objArr3);
        } else if (obj instanceof Map) {
            return new AFg1gSDK((Map) obj);
        } else {
            if ((obj instanceof Boolean) || (obj instanceof Byte) || (obj instanceof Character) || (obj instanceof Double) || (obj instanceof Float) || (obj instanceof Integer) || (obj instanceof Long) || (obj instanceof Short) || (obj instanceof String)) {
                return obj;
            }
            if (obj.getClass().getPackage().getName().startsWith("java.")) {
                return obj.toString();
            }
            return null;
        }
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private AFg1gSDK(java.lang.String r6) {
        /*
            r5 = this;
            r0 = 932770076(0x3798f11c, float:1.8232087E-5)
            java.lang.Integer r0 = java.lang.Integer.valueOf(r0)
            java.lang.Object[] r6 = new java.lang.Object[]{r6}     // Catch: java.lang.Throwable -> L4c
            java.util.Map r1 = com.appsflyer.internal.AFa1jSDK.unregisterClient     // Catch: java.lang.Throwable -> L4c
            java.lang.Object r2 = r1.get(r0)     // Catch: java.lang.Throwable -> L4c
            if (r2 == 0) goto L14
            goto L42
        L14:
            int r2 = android.view.ViewConfiguration.getKeyRepeatTimeout()     // Catch: java.lang.Throwable -> L4c
            int r2 = r2 >> 16
            int r2 = r2 + 357
            java.lang.String r3 = ""
            r4 = 48
            int r3 = android.text.TextUtils.lastIndexOf(r3, r4)     // Catch: java.lang.Throwable -> L4c
            int r3 = (-1) - r3
            char r3 = (char) r3     // Catch: java.lang.Throwable -> L4c
            int r4 = android.view.ViewConfiguration.getScrollBarSize()     // Catch: java.lang.Throwable -> L4c
            int r4 = r4 >> 8
            int r4 = 36 - r4
            java.lang.Object r2 = com.appsflyer.internal.AFa1jSDK.AFAdRevenueData(r2, r3, r4)     // Catch: java.lang.Throwable -> L4c
            java.lang.Class r2 = (java.lang.Class) r2     // Catch: java.lang.Throwable -> L4c
            java.lang.Class<java.lang.String> r3 = java.lang.String.class
            java.lang.Class[] r3 = new java.lang.Class[]{r3}     // Catch: java.lang.Throwable -> L4c
            java.lang.reflect.Constructor r2 = r2.getDeclaredConstructor(r3)     // Catch: java.lang.Throwable -> L4c
            r1.put(r0, r2)     // Catch: java.lang.Throwable -> L4c
        L42:
            java.lang.reflect.Constructor r2 = (java.lang.reflect.Constructor) r2     // Catch: java.lang.Throwable -> L4c
            java.lang.Object r6 = r2.newInstance(r6)     // Catch: java.lang.Throwable -> L4c
            r5.<init>(r6)
            return
        L4c:
            r6 = move-exception
            java.lang.Throwable r0 = r6.getCause()
            if (r0 == 0) goto L54
            throw r0
        L54:
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFg1gSDK.<init>(java.lang.String):void");
    }
}
