package com.google.android.gms.internal.play_billing;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import com.android.billingclient.api.BillingResult;
import com.android.billingclient.api.Purchase;
import java.util.ArrayList;
import java.util.List;
import org.json.JSONException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a0 {

    /* renamed from: a  reason: collision with root package name */
    public static final int f13776a = Runtime.getRuntime().availableProcessors();

    public static int a(Intent intent, String str) {
        if (intent == null) {
            i("ProxyBillingActivity", "Got null intent!");
            return 0;
        }
        return k(intent.getExtras(), "ProxyBillingActivity");
    }

    public static int b(Bundle bundle, String str) {
        if (bundle == null) {
            i(str, "Unexpected null bundle received!");
            return 6;
        }
        Object obj = bundle.get("RESPONSE_CODE");
        if (obj == null) {
            h(str, "getResponseCodeFromBundle() got null response code, assuming OK");
            return 0;
        } else if (obj instanceof Integer) {
            return ((Integer) obj).intValue();
        } else {
            i(str, "Unexpected type for bundle response code: ".concat(obj.getClass().getName()));
            return 6;
        }
    }

    public static Bundle c(boolean z10, boolean z11, boolean z12, boolean z13, String str) {
        Bundle bundle = new Bundle();
        bundle.putString("playBillingLibraryVersion", str);
        if (z10 && z12) {
            bundle.putBoolean("enablePendingPurchases", true);
        }
        if (z11 && z13) {
            bundle.putBoolean("enablePendingPurchaseForSubscriptions", true);
        }
        return bundle;
    }

    public static BillingResult d(Intent intent, String str) {
        if (intent == null) {
            i("BillingHelper", "Got null intent!");
            BillingResult.a c10 = BillingResult.c();
            c10.c(6);
            c10.b("An internal error occurred.");
            return c10.a();
        }
        BillingResult.a c11 = BillingResult.c();
        c11.c(b(intent.getExtras(), str));
        c11.b(e(intent.getExtras(), str));
        return c11.a();
    }

    public static String e(Bundle bundle, String str) {
        if (bundle == null) {
            i(str, "Unexpected null bundle received!");
            return "";
        }
        Object obj = bundle.get("DEBUG_MESSAGE");
        if (obj == null) {
            h(str, "getDebugMessageFromBundle() got null response code, assuming OK");
            return "";
        } else if (obj instanceof String) {
            return (String) obj;
        } else {
            i(str, "Unexpected type for debug message: ".concat(obj.getClass().getName()));
            return "";
        }
    }

    public static String f(int i10) {
        return a.a(i10).toString();
    }

    public static List g(Bundle bundle) {
        ArrayList<String> stringArrayList = bundle.getStringArrayList("INAPP_PURCHASE_DATA_LIST");
        ArrayList<String> stringArrayList2 = bundle.getStringArrayList("INAPP_DATA_SIGNATURE_LIST");
        ArrayList arrayList = new ArrayList();
        if (stringArrayList != null && stringArrayList2 != null) {
            int size = stringArrayList.size();
            h("BillingHelper", "Found purchase list of " + size + " items");
            for (int i10 = 0; i10 < stringArrayList.size() && i10 < stringArrayList2.size(); i10++) {
                Purchase l10 = l(stringArrayList.get(i10), stringArrayList2.get(i10));
                if (l10 != null) {
                    arrayList.add(l10);
                }
            }
            return arrayList;
        }
        Purchase l11 = l(bundle.getString("INAPP_PURCHASE_DATA"), bundle.getString("INAPP_DATA_SIGNATURE"));
        if (l11 == null) {
            h("BillingHelper", "Couldn't find single purchase data as well.");
            return null;
        }
        arrayList.add(l11);
        return arrayList;
    }

    public static void h(String str, String str2) {
        if (Log.isLoggable(str, 2)) {
            if (!str2.isEmpty()) {
                int i10 = 40000;
                while (!str2.isEmpty() && i10 > 0) {
                    int min = Math.min(str2.length(), Math.min(4000, i10));
                    Log.v(str, str2.substring(0, min));
                    str2 = str2.substring(min);
                    i10 -= min;
                }
                return;
            }
            Log.v(str, str2);
        }
    }

    public static void i(String str, String str2) {
        if (Log.isLoggable(str, 5)) {
            Log.w(str, str2);
        }
    }

    public static void j(String str, String str2, Throwable th2) {
        if (Log.isLoggable(str, 5)) {
            Log.w(str, str2, th2);
        }
    }

    private static int k(Bundle bundle, String str) {
        if (bundle == null) {
            i(str, "Unexpected null bundle received!");
            return 0;
        }
        return bundle.getInt("IN_APP_MESSAGE_RESPONSE_CODE", 0);
    }

    private static Purchase l(String str, String str2) {
        if (str != null && str2 != null) {
            try {
                return new Purchase(str, str2);
            } catch (JSONException e10) {
                i("BillingHelper", "Got JSONException while parsing purchase data: ".concat(e10.toString()));
                return null;
            }
        }
        h("BillingHelper", "Received a null purchase data.");
        return null;
    }
}
