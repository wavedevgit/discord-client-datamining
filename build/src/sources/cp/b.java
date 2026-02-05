package cp;

import android.app.Dialog;
import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import androidx.core.view.w0;
import bn.a0;
import bn.c0;
import bn.g0;
import cp.b;
import fn.j;
import java.util.Iterator;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import pp.f0;
import zp.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends j {

    /* renamed from: q  reason: collision with root package name */
    public static final a f19995q = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ bn.f f19996a;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: cp.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0270a extends FunctionReferenceImpl implements Function2 {
            C0270a(Object obj) {
                super(2, obj, b.class, "update", "update(Lcom/squareup/workflow1/ui/modal/HasModals;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
            }

            public final void a(fn.f p02, a0 p12) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                Intrinsics.checkNotNullParameter(p12, "p1");
                ((b) this.receiver).c(p02, p12);
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                a((fn.f) obj, (a0) obj2);
                return Unit.f31988a;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final View c(c initialRendering, a0 initialEnv, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialEnv, "initialEnv");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            b bVar = new b(contextForNewView, null, 0, 0, 14, null);
            bVar.setId(g.f20004b);
            bVar.setLayoutParams(new ViewGroup.LayoutParams(-1, -1));
            g0.a(bVar, initialRendering, initialEnv, new C0270a(bVar));
            return bVar;
        }

        @Override // bn.c0
        /* renamed from: d */
        public View a(c initialRendering, a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f19996a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // bn.c0
        public KClass getType() {
            return this.f19996a.getType();
        }

        private a() {
            this.f19996a = new bn.f(Reflection.getOrCreateKotlinClass(c.class), new Function4() { // from class: cp.a
                @Override // kotlin.jvm.functions.Function4
                public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                    View c10;
                    c10 = b.a.c((c) obj, (a0) obj2, (Context) obj3, (ViewGroup) obj4);
                    return c10;
                }
            });
        }
    }

    public /* synthetic */ b(Context context, AttributeSet attributeSet, int i10, int i11, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i12 & 2) != 0 ? null : attributeSet, (i12 & 4) != 0 ? 0 : i10, (i12 & 8) != 0 ? 0 : i11);
    }

    @Override // fn.j
    public Dialog g(View view) {
        Object obj;
        Object obj2;
        Integer num;
        Intrinsics.checkNotNullParameter(view, "view");
        Dialog dialog = new Dialog(getContext(), hp.f.f26822a);
        Iterator it = s.d(view).iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (((View) obj).getTag(g.f20003a) instanceof Integer) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        View view2 = (View) obj;
        if (view2 != null) {
            obj2 = view2.getTag(g.f20003a);
        } else {
            obj2 = null;
        }
        if (obj2 instanceof Integer) {
            num = (Integer) obj2;
        } else {
            num = null;
        }
        dialog.setContentView(view);
        Window window = dialog.getWindow();
        if (window != null) {
            if (num != null) {
                f0.a(window, num.intValue());
            }
            window.setBackgroundDrawable(null);
            window.setLayout(-1, -1);
            w0.c(window, false);
            if (!zp.f.f()) {
                window.setNavigationBarColor(-16777216);
            }
        }
        return dialog;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        Intrinsics.checkNotNullParameter(context, "context");
    }
}
