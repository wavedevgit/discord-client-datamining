package hg;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final x f25965a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f25966b;

    /* renamed from: c  reason: collision with root package name */
    private final c0 f25967c;

    private e0(c0 c0Var, boolean z10, x xVar, int i10) {
        this.f25967c = c0Var;
        this.f25966b = z10;
        this.f25965a = xVar;
    }

    public static e0 a(x xVar) {
        return new e0(new c0(xVar), false, w.f25986b, Integer.MAX_VALUE);
    }

    public final e0 b() {
        return new e0(this.f25967c, true, this.f25965a, Integer.MAX_VALUE);
    }

    public final Iterable c(CharSequence charSequence) {
        return new b0(this, charSequence);
    }

    public final List d(CharSequence charSequence) {
        charSequence.getClass();
        Iterator a10 = this.f25967c.a(this, charSequence);
        ArrayList arrayList = new ArrayList();
        while (a10.hasNext()) {
            arrayList.add((String) a10.next());
        }
        return Collections.unmodifiableList(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Iterator e(CharSequence charSequence) {
        return this.f25967c.a(this, charSequence);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ x f() {
        return this.f25965a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ boolean g() {
        return this.f25966b;
    }
}
