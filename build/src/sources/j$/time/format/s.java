package j$.time.format;

import java.util.AbstractMap;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class s {

    /* renamed from: a  reason: collision with root package name */
    public final Map f31622a;

    /* renamed from: b  reason: collision with root package name */
    public final Map f31623b;

    public s(Map map) {
        this.f31622a = map;
        HashMap hashMap = new HashMap();
        ArrayList arrayList = new ArrayList();
        for (Map.Entry entry : map.entrySet()) {
            HashMap hashMap2 = new HashMap();
            for (Map.Entry entry2 : ((Map) entry.getValue()).entrySet()) {
                r rVar = a.f31577b;
                hashMap2.put((String) entry2.getValue(), new AbstractMap.SimpleImmutableEntry((String) entry2.getValue(), (Long) entry2.getKey()));
            }
            ArrayList arrayList2 = new ArrayList(hashMap2.values());
            Collections.sort(arrayList2, a.f31577b);
            hashMap.put((x) entry.getKey(), arrayList2);
            arrayList.addAll(arrayList2);
            hashMap.put(null, arrayList);
        }
        Collections.sort(arrayList, a.f31577b);
        this.f31623b = hashMap;
    }
}
