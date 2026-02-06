package fq;

import android.content.Context;
import android.view.LayoutInflater;
import java.util.Iterator;
import java.util.LinkedList;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m5 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f23546a;

    /* renamed from: b  reason: collision with root package name */
    private final LayoutInflater f23547b;

    /* renamed from: c  reason: collision with root package name */
    private final LinkedList f23548c;

    public m5(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f23546a = context;
        LayoutInflater from = LayoutInflater.from(context);
        Intrinsics.checkNotNullExpressionValue(from, "from(...)");
        this.f23547b = from;
        this.f23548c = new LinkedList();
    }

    public final Context a() {
        return this.f23546a;
    }

    public final LayoutInflater b() {
        return this.f23547b;
    }

    public final void c() {
        Iterator it = this.f23548c.iterator();
        Intrinsics.checkNotNullExpressionValue(it, "iterator(...)");
        while (it.hasNext()) {
            Object next = it.next();
            Intrinsics.checkNotNullExpressionValue(next, "next(...)");
            ((Function0) next).invoke();
        }
    }

    public final void d(Function0 cb2) {
        Intrinsics.checkNotNullParameter(cb2, "cb");
        this.f23548c.add(cb2);
    }
}
