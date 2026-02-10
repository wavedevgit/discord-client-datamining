package np;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.camera.view.PreviewView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import np.o0;
import np.x5;
import vn.t;
import vn.z;
import xn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o0 implements en.c0 {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ en.f f39309a;

    /* renamed from: b  reason: collision with root package name */
    private final vn.t f39310b;

    /* renamed from: c  reason: collision with root package name */
    private final vn.w0 f39311c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, m0.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/selfie/SelfieWorkflow$Screen$OldCameraScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
        }

        public final void a(x5.d.c p02, en.a0 p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((m0) this.receiver).a(p02, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((x5.d.c) obj, (en.a0) obj2);
            return Unit.f31765a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements vn.y {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ op.a f39312a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ vn.t f39313b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ vn.w0 f39314c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ x5.d.c f39315d;

        b(op.a aVar, vn.t tVar, vn.w0 w0Var, x5.d.c cVar) {
            this.f39312a = aVar;
            this.f39313b = tVar;
            this.f39314c = w0Var;
            this.f39315d = cVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(x5.d.c cVar, vn.k it) {
            Intrinsics.checkNotNullParameter(it, "it");
            cVar.h().invoke(it);
            return Unit.f31765a;
        }

        @Override // vn.y
        public void a() {
            PreviewView previewviewSelfieCamera = this.f39312a.f42554k;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            t.a aVar = t.a.f52711d;
            vn.t tVar = this.f39313b;
            vn.w0 w0Var = this.f39314c;
            final x5.d.c cVar = this.f39315d;
            tVar.f(previewviewSelfieCamera, aVar, w0Var, true, new Function1() { // from class: np.p0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c10;
                    c10 = o0.b.c(x5.d.c.this, (vn.k) obj);
                    return c10;
                }
            });
        }
    }

    public o0(final vn.t cameraPreview, final vn.w0 selfieDirectionFeed) {
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f39309a = new en.f(Reflection.getOrCreateKotlinClass(x5.d.c.class), new Function4() { // from class: np.n0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                View c10;
                c10 = o0.c(vn.w0.this, cameraPreview, (x5.d.c) obj, (en.a0) obj2, (Context) obj3, (ViewGroup) obj4);
                return c10;
            }
        });
        this.f39310b = cameraPreview;
        this.f39311c = selfieDirectionFeed;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View c(vn.w0 w0Var, vn.t tVar, x5.d.c initialRendering, en.a0 initialViewEnvironment, Context context, ViewGroup viewGroup) {
        Context context2;
        vn.w0 w0Var2;
        vn.i a10;
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(context, "context");
        if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
            context2 = context;
        }
        op.a c10 = op.a.c(LayoutInflater.from(context2).cloneInContext(context));
        if (initialRendering.n() != bo.a.f7163i) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            xn.m b10 = xn.j.b(applicationContext, xn.n.f55225d);
            if (b10 == null) {
                initialRendering.h().invoke(new vn.s0());
                Camera2PreviewView camera2Preview = c10.f42546c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
                a10 = new vn.r0(camera2Preview);
                w0Var2 = w0Var;
            } else {
                g.a b11 = initialRendering.b();
                Camera2PreviewView camera2Preview2 = c10.f42546c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview2, "camera2Preview");
                bo.a valueOf = bo.a.valueOf(initialRendering.n().toString());
                initialRendering.o();
                w0Var2 = w0Var;
                a10 = new xn.a(b11.a(b10, camera2Preview2, w0Var2, valueOf, null, initialRendering.p()));
            }
        } else {
            w0Var2 = w0Var;
            z.a c11 = initialRendering.c();
            PreviewView previewviewSelfieCamera = c10.f42554k;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            a10 = c11.a(tVar, previewviewSelfieCamera, new b(c10, tVar, w0Var2, initialRendering));
        }
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        Intrinsics.checkNotNull(c10);
        en.g0.a(root, initialRendering, initialViewEnvironment, new a(new m0(c10, a10, w0Var2)));
        ConstraintLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "let(...)");
        return root2;
    }

    @Override // en.c0
    /* renamed from: d */
    public View a(x5.d.c initialRendering, en.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return this.f39309a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // en.c0
    public KClass getType() {
        return this.f39309a.getType();
    }
}
