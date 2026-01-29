package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {
    public static d a(Bundle bundle, b2 b2Var, o3 o3Var) {
        return b(bundle, b2Var, o3Var, new g0() { // from class: com.google.android.play.core.assetpacks.l0
            @Override // com.google.android.play.core.assetpacks.g0
            public final int a(int i10, String str) {
                return i10;
            }
        });
    }

    public static d b(Bundle bundle, b2 b2Var, o3 o3Var, g0 g0Var) {
        ArrayList<String> stringArrayList = bundle.getStringArrayList("pack_names");
        HashMap hashMap = new HashMap();
        int size = stringArrayList.size();
        for (int i10 = 0; i10 < size; i10++) {
            String str = stringArrayList.get(i10);
            hashMap.put(str, AssetPackState.e(bundle, str, b2Var, o3Var, g0Var));
        }
        return new t0(bundle.getLong("total_bytes_to_download"), hashMap);
    }

    public abstract Map c();

    public abstract long d();
}
