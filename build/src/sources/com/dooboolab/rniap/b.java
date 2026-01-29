package com.dooboolab.rniap;

import android.util.Log;
import com.facebook.react.bridge.Promise;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f10865a = new b();

    private b() {
    }

    public final a a(int i10) {
        a aVar;
        a aVar2;
        if (i10 != 12) {
            switch (i10) {
                case -2:
                    aVar2 = new a("E_SERVICE_ERROR", "This feature is not available on your device.");
                    break;
                case -1:
                    aVar = new a("E_NETWORK_ERROR", "The service is disconnected (check your internet connection.)");
                    break;
                case 0:
                    aVar2 = new a("OK", "");
                    break;
                case 1:
                    aVar2 = new a("E_USER_CANCELLED", "Payment is Cancelled.");
                    break;
                case 2:
                    aVar2 = new a("E_SERVICE_ERROR", "The service is unreachable. This may be your internet connection, or the Play Store may be down.");
                    break;
                case 3:
                    aVar2 = new a("E_SERVICE_ERROR", "Billing is unavailable. This may be a problem with your device, or the Play Store may be down.");
                    break;
                case 4:
                    aVar2 = new a("E_ITEM_UNAVAILABLE", "That item is unavailable.");
                    break;
                case 5:
                    aVar2 = new a("E_DEVELOPER_ERROR", "Google is indicating that we have some issue connecting to payment.");
                    break;
                case 6:
                    aVar2 = new a("E_UNKNOWN", "An unknown or unexpected error has occurred. Please try again later.");
                    break;
                case 7:
                    aVar2 = new a("E_ALREADY_OWNED", "You already own this item.");
                    break;
                default:
                    aVar2 = new a("E_UNKNOWN", "Purchase failed with code: " + i10);
                    break;
            }
            Log.e("IapPromises", "Error Code : " + i10);
            return aVar2;
        }
        aVar = new a("E_NETWORK_ERROR", "You have problem with network connection.");
        aVar2 = aVar;
        Log.e("IapPromises", "Error Code : " + i10);
        return aVar2;
    }

    public final void b(Promise promise, int i10) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        a a10 = a(i10);
        d.b(promise, a10.a(), a10.b());
    }

    public final void c(String key, int i10) {
        Intrinsics.checkNotNullParameter(key, "key");
        a a10 = a(i10);
        c.f10866a.c(key, a10.a(), a10.b(), null);
    }
}
