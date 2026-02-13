package gn;

import android.content.res.Resources;
import android.view.View;
import androidx.lifecycle.LifecycleOwner;
import kotlin.Unit;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d0 {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ c f25800d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ CoroutineContext f25801e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function2 f25802i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(c cVar, CoroutineContext coroutineContext, Function2 function2) {
            super(0);
            this.f25800d = cVar;
            this.f25801e = coroutineContext;
            this.f25802i = function2;
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1174invoke();
            return Unit.f32556a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1174invoke() {
            ys.g.c(this.f25800d.b(), this.f25801e, ys.c0.f56354o, this.f25802i);
        }
    }

    private static final c a(View view) {
        c cVar;
        Object tag = view.getTag(q.f25863b);
        c cVar2 = null;
        if (tag instanceof c) {
            cVar = (c) tag;
        } else {
            cVar = null;
        }
        if (cVar != null && kotlinx.coroutines.i.i(cVar.b())) {
            cVar2 = cVar;
        }
        if (cVar2 == null) {
            LifecycleOwner a10 = hn.c.f28031a.a(view);
            if (a10 != null) {
                androidx.lifecycle.j a11 = androidx.lifecycle.p.a(a10);
                StringBuilder sb2 = new StringBuilder();
                StringBuilder sb3 = new StringBuilder();
                sb3.append((Object) view.getClass().getName());
                sb3.append('@');
                sb3.append(view.hashCode());
                sb2.append(sb3.toString());
                if (view.getId() != -1) {
                    try {
                        String resourceEntryName = view.getResources().getResourceEntryName(view.getId());
                        sb2.append('-');
                        sb2.append(resourceEntryName);
                    } catch (Resources.NotFoundException unused) {
                    }
                }
                String sb4 = sb2.toString();
                Intrinsics.checkNotNullExpressionValue(sb4, "StringBuilder().apply(builderAction).toString()");
                c cVar3 = new c(kotlinx.coroutines.i.j(a11, new ys.b0(sb4)));
                view.setTag(q.f25863b, cVar3);
                view.addOnAttachStateChangeListener(cVar3);
                return cVar3;
            }
            throw new IllegalStateException("ViewTreeLifecycleOwner is required by View.ensureAttachedScope");
        }
        return cVar2;
    }

    public static final Job b(View view, CoroutineContext context, Function2 block) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(block, "block");
        if (context.m(Job.f35565k) == null) {
            c a10 = a(view);
            a aVar = new a(a10, context, block);
            if (view.isAttachedToWindow()) {
                aVar.invoke();
            } else {
                a10.c(aVar);
            }
            return kotlinx.coroutines.z.m(a10.b().getCoroutineContext());
        }
        throw new IllegalArgumentException("Expected custom CoroutineContext to not contain a Job.");
    }

    public static /* synthetic */ Job c(View view, CoroutineContext coroutineContext, Function2 function2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            coroutineContext = kotlin.coroutines.e.f32630d;
        }
        return b(view, coroutineContext, function2);
    }
}
