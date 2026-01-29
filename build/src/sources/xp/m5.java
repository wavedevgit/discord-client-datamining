package xp;

import android.content.Context;
import android.view.LayoutInflater;
import java.util.Iterator;
import java.util.LinkedList;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m5 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f53636a;

    /* renamed from: b  reason: collision with root package name */
    private final LayoutInflater f53637b;

    /* renamed from: c  reason: collision with root package name */
    private final LinkedList f53638c;

    public m5(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f53636a = context;
        LayoutInflater from = LayoutInflater.from(context);
        Intrinsics.checkNotNullExpressionValue(from, "from(...)");
        this.f53637b = from;
        this.f53638c = new LinkedList();
    }

    public final Context a() {
        return this.f53636a;
    }

    public final LayoutInflater b() {
        return this.f53637b;
    }

    public final void c() {
        Iterator it = this.f53638c.iterator();
        Intrinsics.checkNotNullExpressionValue(it, "iterator(...)");
        while (it.hasNext()) {
            Object next = it.next();
            Intrinsics.checkNotNullExpressionValue(next, "next(...)");
            ((Function0) next).invoke();
        }
    }

    public final void d(Function0 cb2) {
        Intrinsics.checkNotNullParameter(cb2, "cb");
        this.f53638c.add(cb2);
    }
}
