package wp;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.camera.view.PreviewView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import fo.t;
import fo.z;
import ho.g;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import wp.o0;
import wp.x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o0 implements gn.c0 {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ gn.f f53828a;

    /* renamed from: b  reason: collision with root package name */
    private final fo.t f53829b;

    /* renamed from: c  reason: collision with root package name */
    private final fo.w0 f53830c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, m0.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/selfie/SelfieWorkflow$Screen$OldCameraScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
        }

        public final void a(x5.d.c p02, gn.a0 p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((m0) this.receiver).a(p02, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((x5.d.c) obj, (gn.a0) obj2);
            return Unit.f32556a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements fo.y {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ xp.a f53831a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ fo.t f53832b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ fo.w0 f53833c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ x5.d.c f53834d;

        b(xp.a aVar, fo.t tVar, fo.w0 w0Var, x5.d.c cVar) {
            this.f53831a = aVar;
            this.f53832b = tVar;
            this.f53833c = w0Var;
            this.f53834d = cVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(x5.d.c cVar, fo.k it) {
            Intrinsics.checkNotNullParameter(it, "it");
            cVar.h().invoke(it);
            return Unit.f32556a;
        }

        @Override // fo.y
        public void a() {
            PreviewView previewviewSelfieCamera = this.f53831a.f55646k;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            t.a aVar = t.a.f24107d;
            fo.t tVar = this.f53832b;
            fo.w0 w0Var = this.f53833c;
            final x5.d.c cVar = this.f53834d;
            tVar.f(previewviewSelfieCamera, aVar, w0Var, true, new Function1() { // from class: wp.p0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c10;
                    c10 = o0.b.c(x5.d.c.this, (fo.k) obj);
                    return c10;
                }
            });
        }
    }

    public o0(final fo.t cameraPreview, final fo.w0 selfieDirectionFeed) {
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f53828a = new gn.f(Reflection.getOrCreateKotlinClass(x5.d.c.class), new Function4() { // from class: wp.n0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                View c10;
                c10 = o0.c(fo.w0.this, cameraPreview, (x5.d.c) obj, (gn.a0) obj2, (Context) obj3, (ViewGroup) obj4);
                return c10;
            }
        });
        this.f53829b = cameraPreview;
        this.f53830c = selfieDirectionFeed;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View c(fo.w0 w0Var, fo.t tVar, x5.d.c initialRendering, gn.a0 initialViewEnvironment, Context context, ViewGroup viewGroup) {
        Context context2;
        fo.w0 w0Var2;
        fo.i a10;
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(context, "context");
        if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
            context2 = context;
        }
        xp.a c10 = xp.a.c(LayoutInflater.from(context2).cloneInContext(context));
        if (initialRendering.n() != lo.a.f36519i) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            ho.m b10 = ho.j.b(applicationContext, ho.n.f28182d);
            if (b10 == null) {
                initialRendering.h().invoke(new fo.s0());
                Camera2PreviewView camera2Preview = c10.f55638c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
                a10 = new fo.r0(camera2Preview);
                w0Var2 = w0Var;
            } else {
                g.a b11 = initialRendering.b();
                Camera2PreviewView camera2Preview2 = c10.f55638c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview2, "camera2Preview");
                lo.a valueOf = lo.a.valueOf(initialRendering.n().toString());
                initialRendering.o();
                w0Var2 = w0Var;
                a10 = new ho.a(b11.a(b10, camera2Preview2, w0Var2, valueOf, null, initialRendering.p()));
            }
        } else {
            w0Var2 = w0Var;
            z.a c11 = initialRendering.c();
            PreviewView previewviewSelfieCamera = c10.f55646k;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            a10 = c11.a(tVar, previewviewSelfieCamera, new b(c10, tVar, w0Var2, initialRendering));
        }
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        Intrinsics.checkNotNull(c10);
        gn.g0.a(root, initialRendering, initialViewEnvironment, new a(new m0(c10, a10, w0Var2)));
        ConstraintLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "let(...)");
        return root2;
    }

    @Override // gn.c0
    /* renamed from: d */
    public View a(x5.d.c initialRendering, gn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return this.f53828a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // gn.c0
    public KClass getType() {
        return this.f53828a.getType();
    }
}
