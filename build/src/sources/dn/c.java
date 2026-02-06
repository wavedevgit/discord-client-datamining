package dn;

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
    private final List f20854d;

    /* renamed from: e  reason: collision with root package name */
    private final CompletableJob f20855e;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f20856i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function1 {
        a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f32008a;
        }

        public final void invoke(Throwable th2) {
            c.this.f20854d.clear();
        }
    }

    public c(CoroutineScope parentCoroutineScope) {
        Intrinsics.checkNotNullParameter(parentCoroutineScope, "parentCoroutineScope");
        this.f20854d = new ArrayList();
        CompletableJob a10 = kotlinx.coroutines.z.a(kotlinx.coroutines.z.m(parentCoroutineScope.getCoroutineContext()));
        a10.P(new a());
        this.f20855e = a10;
        this.f20856i = kotlinx.coroutines.i.j(parentCoroutineScope, a10);
    }

    public final CoroutineScope b() {
        return this.f20856i;
    }

    public final void c(Function0 block) {
        Intrinsics.checkNotNullParameter(block, "block");
        if (kotlinx.coroutines.i.i(this.f20856i)) {
            this.f20854d.add(block);
            return;
        }
        throw new IllegalStateException("Expected AttachedScope to be active when adding attach handler.");
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewAttachedToWindow(View v10) {
        Intrinsics.checkNotNullParameter(v10, "v");
        List<Function0> list = this.f20854d;
        for (Function0 function0 : list) {
            function0.invoke();
        }
        list.clear();
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewDetachedFromWindow(View v10) {
        Intrinsics.checkNotNullParameter(v10, "v");
        kotlinx.coroutines.i.e(this.f20856i, "View detached", null, 2, null);
        v10.removeOnAttachStateChangeListener(this);
    }
}
