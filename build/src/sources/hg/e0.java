package hg;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final x f25837a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f25838b;

    /* renamed from: c  reason: collision with root package name */
    private final c0 f25839c;

    private e0(c0 c0Var, boolean z10, x xVar, int i10) {
        this.f25839c = c0Var;
        this.f25838b = z10;
        this.f25837a = xVar;
    }

    public static e0 a(x xVar) {
        return new e0(new c0(xVar), false, w.f25858b, Integer.MAX_VALUE);
    }

    public final e0 b() {
        return new e0(this.f25839c, true, this.f25837a, Integer.MAX_VALUE);
    }

    public final Iterable c(CharSequence charSequence) {
        return new b0(this, charSequence);
    }

    public final List d(CharSequence charSequence) {
        charSequence.getClass();
        Iterator a10 = this.f25839c.a(this, charSequence);
        ArrayList arrayList = new ArrayList();
        while (a10.hasNext()) {
            arrayList.add((String) a10.next());
        }
        return Collections.unmodifiableList(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Iterator e(CharSequence charSequence) {
        return this.f25839c.a(this, charSequence);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ x f() {
        return this.f25837a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ boolean g() {
        return this.f25838b;
    }
}
