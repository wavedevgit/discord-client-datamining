package to;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.camera.view.PreviewView;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import fo.t;
import fo.z;
import ho.g;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import to.f5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i0 implements gn.c0 {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ gn.f f49313a;

    /* renamed from: b  reason: collision with root package name */
    private final fo.f0 f49314b;

    /* renamed from: c  reason: collision with root package name */
    private final fo.t f49315c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, o.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/governmentid/Screen$CameraScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
        }

        public final void a(f5.b p02, gn.a0 p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((o) this.receiver).a(p02, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((f5.b) obj, (gn.a0) obj2);
            return Unit.f31988a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements fo.y {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ xo.b f49316a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ f5.b f49317b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ fo.t f49318c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ fo.f0 f49319d;

        b(xo.b bVar, f5.b bVar2, fo.t tVar, fo.f0 f0Var) {
            this.f49316a = bVar;
            this.f49317b = bVar2;
            this.f49318c = tVar;
            this.f49319d = f0Var;
        }

        @Override // fo.y
        public void a() {
            PreviewView previewView = this.f49316a.f54977y;
            Intrinsics.checkNotNullExpressionValue(previewView, "previewView");
            this.f49318c.f(previewView, t.a.f24108e, this.f49319d, true, this.f49317b.x());
        }
    }

    public i0(final fo.f0 governmentIdFeed, final fo.t cameraPreview) {
        Intrinsics.checkNotNullParameter(governmentIdFeed, "governmentIdFeed");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        this.f49313a = new gn.f(Reflection.getOrCreateKotlinClass(f5.b.class), new Function4() { // from class: to.h0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                View c10;
                c10 = i0.c(fo.f0.this, cameraPreview, (f5.b) obj, (gn.a0) obj2, (Context) obj3, (ViewGroup) obj4);
                return c10;
            }
        });
        this.f49314b = governmentIdFeed;
        this.f49315c = cameraPreview;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View c(fo.f0 f0Var, fo.t tVar, f5.b initialRendering, gn.a0 initialViewEnvironment, Context context, ViewGroup viewGroup) {
        Context context2;
        fo.f0 f0Var2;
        fo.i aVar;
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(context, "context");
        if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
            context2 = context;
        }
        xo.b c10 = xo.b.c(LayoutInflater.from(context2).cloneInContext(context));
        if (initialRendering.G() != lo.a.f35950e && initialRendering.G() != lo.a.f35949d) {
            z.a h10 = initialRendering.h();
            PreviewView previewView = c10.f54977y;
            Intrinsics.checkNotNullExpressionValue(previewView, "previewView");
            aVar = h10.a(tVar, previewView, new b(c10, initialRendering, tVar, f0Var));
            f0Var2 = f0Var;
        } else {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            ho.m b10 = ho.j.b(applicationContext, ho.n.f27615e);
            if (b10 == null) {
                initialRendering.x().invoke(new fo.s0());
                Camera2PreviewView camera2Preview = c10.f54955c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
                f0Var2 = f0Var;
                aVar = new fo.r0(camera2Preview);
            } else {
                g.a g10 = initialRendering.g();
                Camera2PreviewView camera2Preview2 = c10.f54955c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview2, "camera2Preview");
                lo.a G = initialRendering.G();
                initialRendering.H();
                f0Var2 = f0Var;
                aVar = new ho.a(g10.a(b10, camera2Preview2, f0Var2, G, null, initialRendering.I()));
            }
        }
        FrameLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        Intrinsics.checkNotNull(c10);
        gn.g0.a(root, initialRendering, initialViewEnvironment, new a(new o(c10, aVar, f0Var2)));
        FrameLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "let(...)");
        return root2;
    }

    @Override // gn.c0
    /* renamed from: d */
    public View a(f5.b initialRendering, gn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return this.f49313a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // gn.c0
    public KClass getType() {
        return this.f49313a.getType();
    }
}
