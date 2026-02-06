package jo;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.camera.view.PreviewView;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import jo.f5;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import un.t;
import un.z;
import wn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i0 implements dn.c0 {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ dn.f f30321a;

    /* renamed from: b  reason: collision with root package name */
    private final un.f0 f30322b;

    /* renamed from: c  reason: collision with root package name */
    private final un.t f30323c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, o.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/governmentid/Screen$CameraScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
        }

        public final void a(f5.b p02, dn.a0 p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((o) this.receiver).a(p02, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((f5.b) obj, (dn.a0) obj2);
            return Unit.f32008a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements un.y {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ no.b f30324a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ f5.b f30325b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ un.t f30326c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ un.f0 f30327d;

        b(no.b bVar, f5.b bVar2, un.t tVar, un.f0 f0Var) {
            this.f30324a = bVar;
            this.f30325b = bVar2;
            this.f30326c = tVar;
            this.f30327d = f0Var;
        }

        @Override // un.y
        public void a() {
            PreviewView previewView = this.f30324a.f40978y;
            Intrinsics.checkNotNullExpressionValue(previewView, "previewView");
            this.f30326c.f(previewView, t.a.f51804e, this.f30327d, true, this.f30325b.x());
        }
    }

    public i0(final un.f0 governmentIdFeed, final un.t cameraPreview) {
        Intrinsics.checkNotNullParameter(governmentIdFeed, "governmentIdFeed");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        this.f30321a = new dn.f(Reflection.getOrCreateKotlinClass(f5.b.class), new Function4() { // from class: jo.h0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                View c10;
                c10 = i0.c(un.f0.this, cameraPreview, (f5.b) obj, (dn.a0) obj2, (Context) obj3, (ViewGroup) obj4);
                return c10;
            }
        });
        this.f30322b = governmentIdFeed;
        this.f30323c = cameraPreview;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View c(un.f0 f0Var, un.t tVar, f5.b initialRendering, dn.a0 initialViewEnvironment, Context context, ViewGroup viewGroup) {
        Context context2;
        un.f0 f0Var2;
        un.i aVar;
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(context, "context");
        if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
            context2 = context;
        }
        no.b c10 = no.b.c(LayoutInflater.from(context2).cloneInContext(context));
        if (initialRendering.G() != ao.a.f6227e && initialRendering.G() != ao.a.f6226d) {
            z.a h10 = initialRendering.h();
            PreviewView previewView = c10.f40978y;
            Intrinsics.checkNotNullExpressionValue(previewView, "previewView");
            aVar = h10.a(tVar, previewView, new b(c10, initialRendering, tVar, f0Var));
            f0Var2 = f0Var;
        } else {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            wn.m b10 = wn.j.b(applicationContext, wn.n.f54015e);
            if (b10 == null) {
                initialRendering.x().invoke(new un.s0());
                Camera2PreviewView camera2Preview = c10.f40956c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
                f0Var2 = f0Var;
                aVar = new un.r0(camera2Preview);
            } else {
                g.a g10 = initialRendering.g();
                Camera2PreviewView camera2Preview2 = c10.f40956c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview2, "camera2Preview");
                ao.a G = initialRendering.G();
                initialRendering.H();
                f0Var2 = f0Var;
                aVar = new wn.a(g10.a(b10, camera2Preview2, f0Var2, G, null, initialRendering.I()));
            }
        }
        FrameLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        Intrinsics.checkNotNull(c10);
        dn.g0.a(root, initialRendering, initialViewEnvironment, new a(new o(c10, aVar, f0Var2)));
        FrameLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "let(...)");
        return root2;
    }

    @Override // dn.c0
    /* renamed from: d */
    public View a(f5.b initialRendering, dn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return this.f30321a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // dn.c0
    public KClass getType() {
        return this.f30321a.getType();
    }
}
