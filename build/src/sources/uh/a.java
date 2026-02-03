package uh;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final Map f50634a;

    /* renamed from: b  reason: collision with root package name */
    private static final Map f50635b;

    static {
        HashMap hashMap = new HashMap();
        f50634a = hashMap;
        HashMap hashMap2 = new HashMap();
        f50635b = hashMap2;
        hashMap.put(-1, "The requesting app is unavailable (e.g. unpublished, nonexistent version code).");
        hashMap.put(-2, "The requested pack is not available.");
        hashMap.put(-3, "The request is invalid.");
        hashMap.put(-4, "The requested download is not found.");
        hashMap.put(-5, "The Asset Delivery API is not available.");
        hashMap.put(-6, "Network error. Unable to obtain the asset pack details.");
        hashMap.put(-7, "Download not permitted under current device circumstances (e.g. in background).");
        hashMap.put(-10, "Asset pack download failed due to insufficient storage.");
        hashMap.put(-11, "The Play Store app is either not installed or not the official version.");
        hashMap.put(-12, "Tried to show the cellular data confirmation but no asset packs are waiting for Wi-Fi.");
        hashMap.put(-13, "The app is not owned by any user on this device. An app is \"owned\" if it has been acquired from Play.");
        hashMap.put(-14, "Tried to show the confirmation dialog but no asset packs are waiting for user confirmation.");
        hashMap.put(-14, "The installed app version was not installed by Play.");
        hashMap.put(-100, "Unknown error downloading an asset pack.");
        hashMap2.put(-1, "APP_UNAVAILABLE");
        hashMap2.put(-2, "PACK_UNAVAILABLE");
        hashMap2.put(-3, "INVALID_REQUEST");
        hashMap2.put(-4, "DOWNLOAD_NOT_FOUND");
        hashMap2.put(-5, "API_NOT_AVAILABLE");
        hashMap2.put(-6, "NETWORK_ERROR");
        hashMap2.put(-7, "ACCESS_DENIED");
        hashMap2.put(-10, "INSUFFICIENT_STORAGE");
        hashMap2.put(-11, "PLAY_STORE_NOT_FOUND");
        hashMap2.put(-12, "NETWORK_UNRESTRICTED");
        hashMap2.put(-13, "APP_NOT_OWNED");
        hashMap2.put(-14, "CONFIRMATION_NOT_REQUIRED");
        hashMap2.put(-15, "UNRECOGNIZED_INSTALLATION");
        hashMap2.put(-100, "INTERNAL_ERROR");
    }

    public static String a(int i10) {
        Map map = f50634a;
        Integer valueOf = Integer.valueOf(i10);
        if (!map.containsKey(valueOf)) {
            return "";
        }
        return ((String) map.get(valueOf)) + " (https://developer.android.com/reference/com/google/android/play/core/assetpacks/model/AssetPackErrorCode.html#" + ((String) f50635b.get(valueOf)) + ")";
    }
}
