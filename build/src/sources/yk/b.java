package yk;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Map f55433a = new HashMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    public int[] a() {
        ArrayList arrayList = new ArrayList();
        int i10 = -1;
        for (Map.Entry entry : this.f55433a.entrySet()) {
            if (((Integer) entry.getValue()).intValue() > i10) {
                i10 = ((Integer) entry.getValue()).intValue();
                arrayList.clear();
                arrayList.add(entry.getKey());
            } else if (((Integer) entry.getValue()).intValue() == i10) {
                arrayList.add(entry.getKey());
            }
        }
        return xk.a.b(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(int i10) {
        Integer num = (Integer) this.f55433a.get(Integer.valueOf(i10));
        if (num == null) {
            num = 0;
        }
        this.f55433a.put(Integer.valueOf(i10), Integer.valueOf(num.intValue() + 1));
    }
}
