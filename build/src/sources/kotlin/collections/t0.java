package kotlin.collections;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import kotlin.Pair;
import kotlin.jvm.internal.Intrinsics;
import kotlin.sequences.Sequence;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class t0 extends s0 {
    public static List A(Map map) {
        Intrinsics.checkNotNullParameter(map, "<this>");
        if (map.size() == 0) {
            return t.l();
        }
        Iterator it = map.entrySet().iterator();
        if (!it.hasNext()) {
            return t.l();
        }
        Map.Entry entry = (Map.Entry) it.next();
        if (!it.hasNext()) {
            return s.e(new Pair(entry.getKey(), entry.getValue()));
        }
        ArrayList arrayList = new ArrayList(map.size());
        arrayList.add(new Pair(entry.getKey(), entry.getValue()));
        do {
            Map.Entry entry2 = (Map.Entry) it.next();
            arrayList.add(new Pair(entry2.getKey(), entry2.getValue()));
        } while (it.hasNext());
        return arrayList;
    }

    public static Sequence z(Map map) {
        Intrinsics.checkNotNullParameter(map, "<this>");
        return CollectionsKt___CollectionsKt.b0(map.entrySet());
    }
}
