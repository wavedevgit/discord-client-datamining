package kp;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import kp.x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f1 implements bn.c0 {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ bn.f f35244a;

    /* renamed from: b  reason: collision with root package name */
    private final sn.t f35245b;

    /* renamed from: c  reason: collision with root package name */
    private final sn.w0 f35246c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, w.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/selfie/SelfieWorkflow$Screen$CameraScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
        }

        public final void a(x5.d.a p02, bn.a0 p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((w) this.receiver).a(p02, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((x5.d.a) obj, (bn.a0) obj2);
            return Unit.f31988a;
        }
    }

    public f1(final sn.t cameraPreview, final sn.w0 selfieDirectionFeed) {
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f35244a = new bn.f(Reflection.getOrCreateKotlinClass(x5.d.a.class), new Function4() { // from class: kp.e1
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                View c10;
                c10 = f1.c(sn.t.this, selfieDirectionFeed, (x5.d.a) obj, (bn.a0) obj2, (Context) obj3, (ViewGroup) obj4);
                return c10;
            }
        });
        this.f35245b = cameraPreview;
        this.f35246c = selfieDirectionFeed;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View c(sn.t tVar, sn.w0 w0Var, x5.d.a initialRendering, bn.a0 initialViewEnvironment, Context context, ViewGroup viewGroup) {
        Context context2;
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(context, "context");
        if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
            context2 = context;
        }
        lp.c c10 = lp.c.c(LayoutInflater.from(context2).cloneInContext(context));
        yp.c.a(initialViewEnvironment, androidx.core.content.a.c(c10.getRoot().getContext(), t0.f35510a));
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        Intrinsics.checkNotNull(c10);
        bn.g0.a(root, initialRendering, initialViewEnvironment, new a(new w(c10, tVar, w0Var)));
        ConstraintLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "let(...)");
        return root2;
    }

    @Override // bn.c0
    /* renamed from: d */
    public View a(x5.d.a initialRendering, bn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return this.f35244a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // bn.c0
    public KClass getType() {
        return this.f35244a.getType();
    }
}
