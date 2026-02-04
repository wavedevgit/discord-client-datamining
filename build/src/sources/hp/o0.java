package hp;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.camera.view.PreviewView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import hp.o0;
import hp.x5;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import pn.t;
import pn.z;
import rn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o0 implements ym.c0 {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ ym.f f27427a;

    /* renamed from: b  reason: collision with root package name */
    private final pn.t f27428b;

    /* renamed from: c  reason: collision with root package name */
    private final pn.w0 f27429c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, m0.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/selfie/SelfieWorkflow$Screen$OldCameraScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
        }

        public final void a(x5.d.c p02, ym.a0 p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((m0) this.receiver).a(p02, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((x5.d.c) obj, (ym.a0) obj2);
            return Unit.f32464a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements pn.y {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ ip.a f27430a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ pn.t f27431b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ pn.w0 f27432c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ x5.d.c f27433d;

        b(ip.a aVar, pn.t tVar, pn.w0 w0Var, x5.d.c cVar) {
            this.f27430a = aVar;
            this.f27431b = tVar;
            this.f27432c = w0Var;
            this.f27433d = cVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(x5.d.c cVar, pn.k it) {
            Intrinsics.checkNotNullParameter(it, "it");
            cVar.h().invoke(it);
            return Unit.f32464a;
        }

        @Override // pn.y
        public void a() {
            PreviewView previewviewSelfieCamera = this.f27430a.f30973k;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            t.a aVar = t.a.f46341d;
            pn.t tVar = this.f27431b;
            pn.w0 w0Var = this.f27432c;
            final x5.d.c cVar = this.f27433d;
            tVar.f(previewviewSelfieCamera, aVar, w0Var, true, new Function1() { // from class: hp.p0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c10;
                    c10 = o0.b.c(x5.d.c.this, (pn.k) obj);
                    return c10;
                }
            });
        }
    }

    public o0(final pn.t cameraPreview, final pn.w0 selfieDirectionFeed) {
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f27427a = new ym.f(Reflection.getOrCreateKotlinClass(x5.d.c.class), new Function4() { // from class: hp.n0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                View c10;
                c10 = o0.c(pn.w0.this, cameraPreview, (x5.d.c) obj, (ym.a0) obj2, (Context) obj3, (ViewGroup) obj4);
                return c10;
            }
        });
        this.f27428b = cameraPreview;
        this.f27429c = selfieDirectionFeed;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View c(pn.w0 w0Var, pn.t tVar, x5.d.c initialRendering, ym.a0 initialViewEnvironment, Context context, ViewGroup viewGroup) {
        Context context2;
        pn.w0 w0Var2;
        pn.i a10;
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(context, "context");
        if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
            context2 = context;
        }
        ip.a c10 = ip.a.c(LayoutInflater.from(context2).cloneInContext(context));
        if (initialRendering.n() != vn.a.f51699i) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            rn.m b10 = rn.j.b(applicationContext, rn.n.f49012d);
            if (b10 == null) {
                initialRendering.h().invoke(new pn.s0());
                Camera2PreviewView camera2Preview = c10.f30965c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
                a10 = new pn.r0(camera2Preview);
                w0Var2 = w0Var;
            } else {
                g.a b11 = initialRendering.b();
                Camera2PreviewView camera2Preview2 = c10.f30965c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview2, "camera2Preview");
                vn.a valueOf = vn.a.valueOf(initialRendering.n().toString());
                initialRendering.o();
                w0Var2 = w0Var;
                a10 = new rn.a(b11.a(b10, camera2Preview2, w0Var2, valueOf, null, initialRendering.p()));
            }
        } else {
            w0Var2 = w0Var;
            z.a c11 = initialRendering.c();
            PreviewView previewviewSelfieCamera = c10.f30973k;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            a10 = c11.a(tVar, previewviewSelfieCamera, new b(c10, tVar, w0Var2, initialRendering));
        }
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        Intrinsics.checkNotNull(c10);
        ym.g0.a(root, initialRendering, initialViewEnvironment, new a(new m0(c10, a10, w0Var2)));
        ConstraintLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "let(...)");
        return root2;
    }

    @Override // ym.c0
    /* renamed from: d */
    public View a(x5.d.c initialRendering, ym.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return this.f27427a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // ym.c0
    public KClass getType() {
        return this.f27427a.getType();
    }
}
