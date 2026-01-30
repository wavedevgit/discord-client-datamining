package vm;

import android.view.View;
import java.util.ArrayList;
import java.util.List;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CompletableJob;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements View.OnAttachStateChangeListener {

    /* renamed from: d  reason: collision with root package name */
    private final List f51224d;

    /* renamed from: e  reason: collision with root package name */
    private final CompletableJob f51225e;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f51226i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function1 {
        a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f33298a;
        }

        public final void invoke(Throwable th2) {
            c.this.f51224d.clear();
        }
    }

    public c(CoroutineScope parentCoroutineScope) {
        Intrinsics.checkNotNullParameter(parentCoroutineScope, "parentCoroutineScope");
        this.f51224d = new ArrayList();
        CompletableJob a10 = kotlinx.coroutines.z.a(kotlinx.coroutines.z.m(parentCoroutineScope.getCoroutineContext()));
        a10.C0(new a());
        this.f51225e = a10;
        this.f51226i = kotlinx.coroutines.i.j(parentCoroutineScope, a10);
    }

    public final CoroutineScope b() {
        return this.f51226i;
    }

    public final void c(Function0 block) {
        Intrinsics.checkNotNullParameter(block, "block");
        if (kotlinx.coroutines.i.i(this.f51226i)) {
            this.f51224d.add(block);
            return;
        }
        throw new IllegalStateException("Expected AttachedScope to be active when adding attach handler.");
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewAttachedToWindow(View v10) {
        Intrinsics.checkNotNullParameter(v10, "v");
        List<Function0> list = this.f51224d;
        for (Function0 function0 : list) {
            function0.invoke();
        }
        list.clear();
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewDetachedFromWindow(View v10) {
        Intrinsics.checkNotNullParameter(v10, "v");
        kotlinx.coroutines.i.e(this.f51226i, "View detached", null, 2, null);
        v10.removeOnAttachStateChangeListener(this);
    }
}
