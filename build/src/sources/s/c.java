package s;

import android.hardware.camera2.params.DynamicRangeProfiles;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import x.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private static final Map f49613a;

    /* renamed from: b  reason: collision with root package name */
    private static final Map f49614b;

    static {
        HashMap hashMap = new HashMap();
        f49613a = hashMap;
        HashMap hashMap2 = new HashMap();
        f49614b = hashMap2;
        z zVar = z.f54402d;
        hashMap.put(1L, zVar);
        hashMap2.put(zVar, Collections.singletonList(1L));
        hashMap.put(2L, z.f54404f);
        hashMap2.put((z) hashMap.get(2L), Collections.singletonList(2L));
        z zVar2 = z.f54405g;
        hashMap.put(4L, zVar2);
        hashMap2.put(zVar2, Collections.singletonList(4L));
        z zVar3 = z.f54406h;
        hashMap.put(8L, zVar3);
        hashMap2.put(zVar3, Collections.singletonList(8L));
        List<Long> asList = Arrays.asList(64L, 128L, 16L, 32L);
        for (Long l10 : asList) {
            f49613a.put(l10, z.f54407i);
        }
        f49614b.put(z.f54407i, asList);
        List<Long> asList2 = Arrays.asList(1024L, 2048L, 256L, 512L);
        for (Long l11 : asList2) {
            f49613a.put(l11, z.f54408j);
        }
        f49614b.put(z.f54408j, asList2);
    }

    public static Long a(z zVar, DynamicRangeProfiles dynamicRangeProfiles) {
        List<Long> list = (List) f49614b.get(zVar);
        if (list != null) {
            Set supportedProfiles = dynamicRangeProfiles.getSupportedProfiles();
            for (Long l10 : list) {
                if (supportedProfiles.contains(l10)) {
                    return l10;
                }
            }
            return null;
        }
        return null;
    }

    public static z b(long j10) {
        return (z) f49613a.get(Long.valueOf(j10));
    }
}
