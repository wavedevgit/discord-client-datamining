package ho;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.camera.view.PreviewView;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import ho.f5;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import sn.t;
import sn.z;
import un.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i0 implements bn.c0 {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ bn.f f26325a;

    /* renamed from: b  reason: collision with root package name */
    private final sn.f0 f26326b;

    /* renamed from: c  reason: collision with root package name */
    private final sn.t f26327c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, o.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/governmentid/Screen$CameraScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
        }

        public final void a(f5.b p02, bn.a0 p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((o) this.receiver).a(p02, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((f5.b) obj, (bn.a0) obj2);
            return Unit.f31988a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements sn.y {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ lo.b f26328a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ f5.b f26329b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ sn.t f26330c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ sn.f0 f26331d;

        b(lo.b bVar, f5.b bVar2, sn.t tVar, sn.f0 f0Var) {
            this.f26328a = bVar;
            this.f26329b = bVar2;
            this.f26330c = tVar;
            this.f26331d = f0Var;
        }

        @Override // sn.y
        public void a() {
            PreviewView previewView = this.f26328a.f37022y;
            Intrinsics.checkNotNullExpressionValue(previewView, "previewView");
            this.f26330c.f(previewView, t.a.f49958e, this.f26331d, true, this.f26329b.x());
        }
    }

    public i0(final sn.f0 governmentIdFeed, final sn.t cameraPreview) {
        Intrinsics.checkNotNullParameter(governmentIdFeed, "governmentIdFeed");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        this.f26325a = new bn.f(Reflection.getOrCreateKotlinClass(f5.b.class), new Function4() { // from class: ho.h0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                View c10;
                c10 = i0.c(sn.f0.this, cameraPreview, (f5.b) obj, (bn.a0) obj2, (Context) obj3, (ViewGroup) obj4);
                return c10;
            }
        });
        this.f26326b = governmentIdFeed;
        this.f26327c = cameraPreview;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View c(sn.f0 f0Var, sn.t tVar, f5.b initialRendering, bn.a0 initialViewEnvironment, Context context, ViewGroup viewGroup) {
        Context context2;
        sn.f0 f0Var2;
        sn.i aVar;
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(context, "context");
        if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
            context2 = context;
        }
        lo.b c10 = lo.b.c(LayoutInflater.from(context2).cloneInContext(context));
        if (initialRendering.G() != yn.a.f54863e && initialRendering.G() != yn.a.f54862d) {
            z.a h10 = initialRendering.h();
            PreviewView previewView = c10.f37022y;
            Intrinsics.checkNotNullExpressionValue(previewView, "previewView");
            aVar = h10.a(tVar, previewView, new b(c10, initialRendering, tVar, f0Var));
            f0Var2 = f0Var;
        } else {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            un.m b10 = un.j.b(applicationContext, un.n.f51615e);
            if (b10 == null) {
                initialRendering.x().invoke(new sn.s0());
                Camera2PreviewView camera2Preview = c10.f37000c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
                f0Var2 = f0Var;
                aVar = new sn.r0(camera2Preview);
            } else {
                g.a g10 = initialRendering.g();
                Camera2PreviewView camera2Preview2 = c10.f37000c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview2, "camera2Preview");
                yn.a G = initialRendering.G();
                initialRendering.H();
                f0Var2 = f0Var;
                aVar = new un.a(g10.a(b10, camera2Preview2, f0Var2, G, null, initialRendering.I()));
            }
        }
        FrameLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        Intrinsics.checkNotNull(c10);
        bn.g0.a(root, initialRendering, initialViewEnvironment, new a(new o(c10, aVar, f0Var2)));
        FrameLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "let(...)");
        return root2;
    }

    @Override // bn.c0
    /* renamed from: d */
    public View a(f5.b initialRendering, bn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return this.f26325a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // bn.c0
    public KClass getType() {
        return this.f26325a.getType();
    }
}
