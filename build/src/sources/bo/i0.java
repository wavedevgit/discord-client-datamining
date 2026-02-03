package bo;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.camera.view.PreviewView;
import bo.f5;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import nn.t;
import nn.z;
import pn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i0 implements wm.c0 {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ wm.f f6958a;

    /* renamed from: b  reason: collision with root package name */
    private final nn.f0 f6959b;

    /* renamed from: c  reason: collision with root package name */
    private final nn.t f6960c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, o.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/governmentid/Screen$CameraScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
        }

        public final void a(f5.b p02, wm.a0 p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((o) this.receiver).a(p02, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((f5.b) obj, (wm.a0) obj2);
            return Unit.f33074a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements nn.y {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ go.b f6961a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ f5.b f6962b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ nn.t f6963c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ nn.f0 f6964d;

        b(go.b bVar, f5.b bVar2, nn.t tVar, nn.f0 f0Var) {
            this.f6961a = bVar;
            this.f6962b = bVar2;
            this.f6963c = tVar;
            this.f6964d = f0Var;
        }

        @Override // nn.y
        public void a() {
            PreviewView previewView = this.f6961a.f27218y;
            Intrinsics.checkNotNullExpressionValue(previewView, "previewView");
            this.f6963c.f(previewView, t.a.f42050e, this.f6964d, true, this.f6962b.x());
        }
    }

    public i0(final nn.f0 governmentIdFeed, final nn.t cameraPreview) {
        Intrinsics.checkNotNullParameter(governmentIdFeed, "governmentIdFeed");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        this.f6958a = new wm.f(Reflection.getOrCreateKotlinClass(f5.b.class), new Function4() { // from class: bo.h0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                View c10;
                c10 = i0.c(nn.f0.this, cameraPreview, (f5.b) obj, (wm.a0) obj2, (Context) obj3, (ViewGroup) obj4);
                return c10;
            }
        });
        this.f6959b = governmentIdFeed;
        this.f6960c = cameraPreview;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View c(nn.f0 f0Var, nn.t tVar, f5.b initialRendering, wm.a0 initialViewEnvironment, Context context, ViewGroup viewGroup) {
        Context context2;
        nn.f0 f0Var2;
        nn.i aVar;
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(context, "context");
        if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
            context2 = context;
        }
        go.b c10 = go.b.c(LayoutInflater.from(context2).cloneInContext(context));
        if (initialRendering.G() != tn.a.f49945e && initialRendering.G() != tn.a.f49944d) {
            z.a h10 = initialRendering.h();
            PreviewView previewView = c10.f27218y;
            Intrinsics.checkNotNullExpressionValue(previewView, "previewView");
            aVar = h10.a(tVar, previewView, new b(c10, initialRendering, tVar, f0Var));
            f0Var2 = f0Var;
        } else {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            pn.m b10 = pn.j.b(applicationContext, pn.n.f46380e);
            if (b10 == null) {
                initialRendering.x().invoke(new nn.s0());
                Camera2PreviewView camera2Preview = c10.f27196c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
                f0Var2 = f0Var;
                aVar = new nn.r0(camera2Preview);
            } else {
                g.a g10 = initialRendering.g();
                Camera2PreviewView camera2Preview2 = c10.f27196c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview2, "camera2Preview");
                tn.a G = initialRendering.G();
                initialRendering.H();
                f0Var2 = f0Var;
                aVar = new pn.a(g10.a(b10, camera2Preview2, f0Var2, G, null, initialRendering.I()));
            }
        }
        FrameLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        Intrinsics.checkNotNull(c10);
        wm.g0.a(root, initialRendering, initialViewEnvironment, new a(new o(c10, aVar, f0Var2)));
        FrameLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "let(...)");
        return root2;
    }

    @Override // wm.c0
    /* renamed from: d */
    public View a(f5.b initialRendering, wm.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return this.f6958a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // wm.c0
    public KClass getType() {
        return this.f6958a.getType();
    }
}
