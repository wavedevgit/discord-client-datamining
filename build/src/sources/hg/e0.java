package hg;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final x f26013a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f26014b;

    /* renamed from: c  reason: collision with root package name */
    private final c0 f26015c;

    private e0(c0 c0Var, boolean z10, x xVar, int i10) {
        this.f26015c = c0Var;
        this.f26014b = z10;
        this.f26013a = xVar;
    }

    public static e0 a(x xVar) {
        return new e0(new c0(xVar), false, w.f26034b, Integer.MAX_VALUE);
    }

    public final e0 b() {
        return new e0(this.f26015c, true, this.f26013a, Integer.MAX_VALUE);
    }

    public final Iterable c(CharSequence charSequence) {
        return new b0(this, charSequence);
    }

    public final List d(CharSequence charSequence) {
        charSequence.getClass();
        Iterator a10 = this.f26015c.a(this, charSequence);
        ArrayList arrayList = new ArrayList();
        while (a10.hasNext()) {
            arrayList.add((String) a10.next());
        }
        return Collections.unmodifiableList(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Iterator e(CharSequence charSequence) {
        return this.f26015c.a(this, charSequence);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ x f() {
        return this.f26013a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ boolean g() {
        return this.f26014b;
    }
}
