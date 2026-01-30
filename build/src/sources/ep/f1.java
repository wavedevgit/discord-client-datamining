package ep;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import ep.x5;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f1 implements vm.c0 {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ vm.f f23125a;

    /* renamed from: b  reason: collision with root package name */
    private final mn.t f23126b;

    /* renamed from: c  reason: collision with root package name */
    private final mn.w0 f23127c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, w.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/selfie/SelfieWorkflow$Screen$CameraScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
        }

        public final void a(x5.d.a p02, vm.a0 p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((w) this.receiver).a(p02, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((x5.d.a) obj, (vm.a0) obj2);
            return Unit.f33298a;
        }
    }

    public f1(final mn.t cameraPreview, final mn.w0 selfieDirectionFeed) {
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f23125a = new vm.f(Reflection.getOrCreateKotlinClass(x5.d.a.class), new Function4() { // from class: ep.e1
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                View c10;
                c10 = f1.c(mn.t.this, selfieDirectionFeed, (x5.d.a) obj, (vm.a0) obj2, (Context) obj3, (ViewGroup) obj4);
                return c10;
            }
        });
        this.f23126b = cameraPreview;
        this.f23127c = selfieDirectionFeed;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View c(mn.t tVar, mn.w0 w0Var, x5.d.a initialRendering, vm.a0 initialViewEnvironment, Context context, ViewGroup viewGroup) {
        Context context2;
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(context, "context");
        if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
            context2 = context;
        }
        fp.c c10 = fp.c.c(LayoutInflater.from(context2).cloneInContext(context));
        sp.c.a(initialViewEnvironment, androidx.core.content.a.c(c10.getRoot().getContext(), t0.f23391a));
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        Intrinsics.checkNotNull(c10);
        vm.g0.a(root, initialRendering, initialViewEnvironment, new a(new w(c10, tVar, w0Var)));
        ConstraintLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "let(...)");
        return root2;
    }

    @Override // vm.c0
    /* renamed from: d */
    public View a(x5.d.a initialRendering, vm.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return this.f23125a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // vm.c0
    public KClass getType() {
        return this.f23125a.getType();
    }
}
