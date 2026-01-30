package ep;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.camera.view.PreviewView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import ep.o0;
import ep.x5;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import mn.t;
import mn.z;
import on.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o0 implements vm.c0 {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ vm.f f23301a;

    /* renamed from: b  reason: collision with root package name */
    private final mn.t f23302b;

    /* renamed from: c  reason: collision with root package name */
    private final mn.w0 f23303c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, m0.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/selfie/SelfieWorkflow$Screen$OldCameraScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
        }

        public final void a(x5.d.c p02, vm.a0 p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((m0) this.receiver).a(p02, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((x5.d.c) obj, (vm.a0) obj2);
            return Unit.f33298a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements mn.y {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ fp.a f23304a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ mn.t f23305b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ mn.w0 f23306c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ x5.d.c f23307d;

        b(fp.a aVar, mn.t tVar, mn.w0 w0Var, x5.d.c cVar) {
            this.f23304a = aVar;
            this.f23305b = tVar;
            this.f23306c = w0Var;
            this.f23307d = cVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(x5.d.c cVar, mn.k it) {
            Intrinsics.checkNotNullParameter(it, "it");
            cVar.h().invoke(it);
            return Unit.f33298a;
        }

        @Override // mn.y
        public void a() {
            PreviewView previewviewSelfieCamera = this.f23304a.f25426k;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            t.a aVar = t.a.f39306d;
            mn.t tVar = this.f23305b;
            mn.w0 w0Var = this.f23306c;
            final x5.d.c cVar = this.f23307d;
            tVar.f(previewviewSelfieCamera, aVar, w0Var, true, new Function1() { // from class: ep.p0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c10;
                    c10 = o0.b.c(x5.d.c.this, (mn.k) obj);
                    return c10;
                }
            });
        }
    }

    public o0(final mn.t cameraPreview, final mn.w0 selfieDirectionFeed) {
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f23301a = new vm.f(Reflection.getOrCreateKotlinClass(x5.d.c.class), new Function4() { // from class: ep.n0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                View c10;
                c10 = o0.c(mn.w0.this, cameraPreview, (x5.d.c) obj, (vm.a0) obj2, (Context) obj3, (ViewGroup) obj4);
                return c10;
            }
        });
        this.f23302b = cameraPreview;
        this.f23303c = selfieDirectionFeed;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View c(mn.w0 w0Var, mn.t tVar, x5.d.c initialRendering, vm.a0 initialViewEnvironment, Context context, ViewGroup viewGroup) {
        Context context2;
        mn.w0 w0Var2;
        mn.i a10;
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(context, "context");
        if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
            context2 = context;
        }
        fp.a c10 = fp.a.c(LayoutInflater.from(context2).cloneInContext(context));
        if (initialRendering.n() != sn.a.f49108i) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            on.m b10 = on.j.b(applicationContext, on.n.f44589d);
            if (b10 == null) {
                initialRendering.h().invoke(new mn.s0());
                Camera2PreviewView camera2Preview = c10.f25418c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
                a10 = new mn.r0(camera2Preview);
                w0Var2 = w0Var;
            } else {
                g.a b11 = initialRendering.b();
                Camera2PreviewView camera2Preview2 = c10.f25418c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview2, "camera2Preview");
                sn.a valueOf = sn.a.valueOf(initialRendering.n().toString());
                initialRendering.o();
                w0Var2 = w0Var;
                a10 = new on.a(b11.a(b10, camera2Preview2, w0Var2, valueOf, null, initialRendering.p()));
            }
        } else {
            w0Var2 = w0Var;
            z.a c11 = initialRendering.c();
            PreviewView previewviewSelfieCamera = c10.f25426k;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            a10 = c11.a(tVar, previewviewSelfieCamera, new b(c10, tVar, w0Var2, initialRendering));
        }
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        Intrinsics.checkNotNull(c10);
        vm.g0.a(root, initialRendering, initialViewEnvironment, new a(new m0(c10, a10, w0Var2)));
        ConstraintLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "let(...)");
        return root2;
    }

    @Override // vm.c0
    /* renamed from: d */
    public View a(x5.d.c initialRendering, vm.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return this.f23301a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // vm.c0
    public KClass getType() {
        return this.f23301a.getType();
    }
}
