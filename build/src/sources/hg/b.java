package hg;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final o f27525a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f27526b;

    /* renamed from: c  reason: collision with root package name */
    private final s f27527c;

    private b(s sVar, boolean z10, o oVar, int i10) {
        this.f27527c = sVar;
        this.f27526b = z10;
        this.f27525a = oVar;
    }

    public static b c(o oVar) {
        return new b(new s(oVar), false, n.f27534b, Integer.MAX_VALUE);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Iterator h(CharSequence charSequence) {
        s sVar = this.f27527c;
        return new r(sVar, this, charSequence, sVar.f27536a);
    }

    public final b b() {
        return new b(this.f27527c, true, this.f27525a, Integer.MAX_VALUE);
    }

    public final Iterable d(CharSequence charSequence) {
        return new t(this, charSequence);
    }

    public final List f(CharSequence charSequence) {
        charSequence.getClass();
        Iterator h10 = h(charSequence);
        ArrayList arrayList = new ArrayList();
        while (h10.hasNext()) {
            arrayList.add((String) h10.next());
        }
        return Collections.unmodifiableList(arrayList);
    }
}
