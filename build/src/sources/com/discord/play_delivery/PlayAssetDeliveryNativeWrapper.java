package com.discord.play_delivery;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class PlayAssetDeliveryNativeWrapper {
    public static String getKrispAssetPackLocation() {
        PlayAssetDelivery playAssetDelivery = PlayAssetDelivery.INSTANCE;
        String cachedAssetPackLocation = playAssetDelivery.getCachedAssetPackLocation("krisp");
        if (cachedAssetPackLocation == null) {
            playAssetDelivery.fetchAssetPack("krisp", null);
            return "";
        }
        return cachedAssetPackLocation;
    }
}
