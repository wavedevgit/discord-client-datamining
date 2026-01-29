package cs;

import java.util.Comparator;
import kotlin.jvm.functions.Function2;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class z0 implements Comparator {

    /* renamed from: d  reason: collision with root package name */
    private final Function2 f21316d;

    public z0(Function2 function2) {
        this.f21316d = function2;
    }

    @Override // java.util.Comparator
    public int compare(Object obj, Object obj2) {
        int p10;
        p10 = c1.p(this.f21316d, obj, obj2);
        return p10;
    }
}
