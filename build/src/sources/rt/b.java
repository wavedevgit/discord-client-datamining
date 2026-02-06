package rt;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b implements j0, Comparator {

    /* renamed from: d  reason: collision with root package name */
    private final List f49497d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f49498e;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(boolean z10, w... wVarArr) {
        this(Arrays.asList(wVarArr), z10);
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(w wVar, w wVar2) {
        return Double.compare(wVar2.getLength(), wVar.getLength());
    }

    private b(List list, boolean z10) {
        if (!list.isEmpty()) {
            Collections.sort(list, this);
            int size = list.size();
            int i10 = 0;
            while (i10 < size) {
                w wVar = (w) list.get(i10);
                i10++;
                for (int i11 = i10; i11 < size; i11++) {
                    if (wVar.equals(list.get(i11))) {
                        throw new IllegalArgumentException("Duplicate unit: " + wVar);
                    }
                }
            }
            this.f49497d = Collections.unmodifiableList(list);
            this.f49498e = z10;
            return;
        }
        throw new IllegalArgumentException("Missing units.");
    }
}
