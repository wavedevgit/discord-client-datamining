package yp;

import android.content.Context;
import android.view.LayoutInflater;
import java.util.Iterator;
import java.util.LinkedList;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m5 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f55006a;

    /* renamed from: b  reason: collision with root package name */
    private final LayoutInflater f55007b;

    /* renamed from: c  reason: collision with root package name */
    private final LinkedList f55008c;

    public m5(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f55006a = context;
        LayoutInflater from = LayoutInflater.from(context);
        Intrinsics.checkNotNullExpressionValue(from, "from(...)");
        this.f55007b = from;
        this.f55008c = new LinkedList();
    }

    public final Context a() {
        return this.f55006a;
    }

    public final LayoutInflater b() {
        return this.f55007b;
    }

    public final void c() {
        Iterator it = this.f55008c.iterator();
        Intrinsics.checkNotNullExpressionValue(it, "iterator(...)");
        while (it.hasNext()) {
            Object next = it.next();
            Intrinsics.checkNotNullExpressionValue(next, "next(...)");
            ((Function0) next).invoke();
        }
    }

    public final void d(Function0 cb2) {
        Intrinsics.checkNotNullParameter(cb2, "cb");
        this.f55008c.add(cb2);
    }
}
