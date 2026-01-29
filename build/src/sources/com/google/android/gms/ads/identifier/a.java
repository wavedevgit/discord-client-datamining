package com.google.android.gms.ads.identifier;

import android.net.Uri;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends Thread {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Map f14700d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(AdvertisingIdClient advertisingIdClient, Map map) {
        this.f14700d = map;
    }

    @Override // java.lang.Thread, java.lang.Runnable
    public final void run() {
        Map map = this.f14700d;
        Uri.Builder buildUpon = Uri.parse("https://pagead2.googlesyndication.com/pagead/gen_204?id=gmob-apps").buildUpon();
        for (String str : map.keySet()) {
            buildUpon.appendQueryParameter(str, (String) map.get(str));
        }
        re.a.a(buildUpon.build().toString());
    }
}
