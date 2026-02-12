package wp;

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
import wp.x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f1 implements gn.c0 {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ gn.f f53084a;

    /* renamed from: b  reason: collision with root package name */
    private final fo.t f53085b;

    /* renamed from: c  reason: collision with root package name */
    private final fo.w0 f53086c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, w.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/selfie/SelfieWorkflow$Screen$CameraScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
        }

        public final void a(x5.d.a p02, gn.a0 p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((w) this.receiver).a(p02, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((x5.d.a) obj, (gn.a0) obj2);
            return Unit.f31988a;
        }
    }

    public f1(final fo.t cameraPreview, final fo.w0 selfieDirectionFeed) {
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f53084a = new gn.f(Reflection.getOrCreateKotlinClass(x5.d.a.class), new Function4() { // from class: wp.e1
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                View c10;
                c10 = f1.c(fo.t.this, selfieDirectionFeed, (x5.d.a) obj, (gn.a0) obj2, (Context) obj3, (ViewGroup) obj4);
                return c10;
            }
        });
        this.f53085b = cameraPreview;
        this.f53086c = selfieDirectionFeed;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View c(fo.t tVar, fo.w0 w0Var, x5.d.a initialRendering, gn.a0 initialViewEnvironment, Context context, ViewGroup viewGroup) {
        Context context2;
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(context, "context");
        if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
            context2 = context;
        }
        xp.c c10 = xp.c.c(LayoutInflater.from(context2).cloneInContext(context));
        kq.c.a(initialViewEnvironment, androidx.core.content.a.c(c10.getRoot().getContext(), t0.f53350a));
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        Intrinsics.checkNotNull(c10);
        gn.g0.a(root, initialRendering, initialViewEnvironment, new a(new w(c10, tVar, w0Var)));
        ConstraintLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "let(...)");
        return root2;
    }

    @Override // gn.c0
    /* renamed from: d */
    public View a(x5.d.a initialRendering, gn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return this.f53084a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // gn.c0
    public KClass getType() {
        return this.f53084a.getType();
    }
}
