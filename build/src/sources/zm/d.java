package zm;

import android.view.View;
import android.view.ViewParent;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.r0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface d extends LifecycleOwner {

    /* renamed from: n */
    public static final a f56075n = a.f56076a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a */
        static final /* synthetic */ a f56076a = new a();

        /* renamed from: zm.d$a$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0786a extends Lambda implements Function1 {

            /* renamed from: d */
            public static final C0786a f56077d = new C0786a();

            C0786a() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Lifecycle invoke(View v10) {
                Intrinsics.checkNotNullParameter(v10, "v");
                return a.f56076a.b(v10);
            }
        }

        private a() {
        }

        public final Lifecycle b(View view) {
            View view2;
            LifecycleOwner a10;
            ViewParent parent = view.getParent();
            Lifecycle lifecycle = null;
            if (parent instanceof View) {
                view2 = (View) parent;
            } else {
                view2 = null;
            }
            if (view2 != null && (a10 = c.f56074a.a(view2)) != null) {
                lifecycle = a10.getLifecycle();
            }
            if (lifecycle != null) {
                return lifecycle;
            }
            throw new IllegalStateException(("Expected parent or context of " + view + " to have or be a ViewTreeLifecycleOwner").toString());
        }

        public static /* synthetic */ void e(a aVar, View view, Function1 function1, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                function1 = C0786a.f56077d;
            }
            aVar.d(view, function1);
        }

        public final d c(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            LifecycleOwner a10 = r0.a(view);
            if (a10 instanceof d) {
                return (d) a10;
            }
            return null;
        }

        public final void d(View view, Function1 findParentLifecycle) {
            Intrinsics.checkNotNullParameter(view, "view");
            Intrinsics.checkNotNullParameter(findParentLifecycle, "findParentLifecycle");
            b bVar = new b(findParentLifecycle, false, 2, null);
            r0.b(view, bVar);
            view.addOnAttachStateChangeListener(bVar);
        }
    }

    void j();
}
