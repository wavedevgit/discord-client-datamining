package fp;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.camera.view.PreviewView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import fp.o0;
import fp.x5;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
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
public final class o0 implements wm.c0 {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ wm.f f24832a;

    /* renamed from: b  reason: collision with root package name */
    private final nn.t f24833b;

    /* renamed from: c  reason: collision with root package name */
    private final nn.w0 f24834c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, m0.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/selfie/SelfieWorkflow$Screen$OldCameraScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
        }

        public final void a(x5.d.c p02, wm.a0 p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((m0) this.receiver).a(p02, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((x5.d.c) obj, (wm.a0) obj2);
            return Unit.f33074a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements nn.y {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ gp.a f24835a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ nn.t f24836b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ nn.w0 f24837c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ x5.d.c f24838d;

        b(gp.a aVar, nn.t tVar, nn.w0 w0Var, x5.d.c cVar) {
            this.f24835a = aVar;
            this.f24836b = tVar;
            this.f24837c = w0Var;
            this.f24838d = cVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(x5.d.c cVar, nn.k it) {
            Intrinsics.checkNotNullParameter(it, "it");
            cVar.h().invoke(it);
            return Unit.f33074a;
        }

        @Override // nn.y
        public void a() {
            PreviewView previewviewSelfieCamera = this.f24835a.f27319k;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            t.a aVar = t.a.f42049d;
            nn.t tVar = this.f24836b;
            nn.w0 w0Var = this.f24837c;
            final x5.d.c cVar = this.f24838d;
            tVar.f(previewviewSelfieCamera, aVar, w0Var, true, new Function1() { // from class: fp.p0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c10;
                    c10 = o0.b.c(x5.d.c.this, (nn.k) obj);
                    return c10;
                }
            });
        }
    }

    public o0(final nn.t cameraPreview, final nn.w0 selfieDirectionFeed) {
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f24832a = new wm.f(Reflection.getOrCreateKotlinClass(x5.d.c.class), new Function4() { // from class: fp.n0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                View c10;
                c10 = o0.c(nn.w0.this, cameraPreview, (x5.d.c) obj, (wm.a0) obj2, (Context) obj3, (ViewGroup) obj4);
                return c10;
            }
        });
        this.f24833b = cameraPreview;
        this.f24834c = selfieDirectionFeed;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View c(nn.w0 w0Var, nn.t tVar, x5.d.c initialRendering, wm.a0 initialViewEnvironment, Context context, ViewGroup viewGroup) {
        Context context2;
        nn.w0 w0Var2;
        nn.i a10;
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(context, "context");
        if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
            context2 = context;
        }
        gp.a c10 = gp.a.c(LayoutInflater.from(context2).cloneInContext(context));
        if (initialRendering.n() != tn.a.f49946i) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            pn.m b10 = pn.j.b(applicationContext, pn.n.f46379d);
            if (b10 == null) {
                initialRendering.h().invoke(new nn.s0());
                Camera2PreviewView camera2Preview = c10.f27311c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
                a10 = new nn.r0(camera2Preview);
                w0Var2 = w0Var;
            } else {
                g.a b11 = initialRendering.b();
                Camera2PreviewView camera2Preview2 = c10.f27311c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview2, "camera2Preview");
                tn.a valueOf = tn.a.valueOf(initialRendering.n().toString());
                initialRendering.o();
                w0Var2 = w0Var;
                a10 = new pn.a(b11.a(b10, camera2Preview2, w0Var2, valueOf, null, initialRendering.p()));
            }
        } else {
            w0Var2 = w0Var;
            z.a c11 = initialRendering.c();
            PreviewView previewviewSelfieCamera = c10.f27319k;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            a10 = c11.a(tVar, previewviewSelfieCamera, new b(c10, tVar, w0Var2, initialRendering));
        }
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        Intrinsics.checkNotNull(c10);
        wm.g0.a(root, initialRendering, initialViewEnvironment, new a(new m0(c10, a10, w0Var2)));
        ConstraintLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "let(...)");
        return root2;
    }

    @Override // wm.c0
    /* renamed from: d */
    public View a(x5.d.c initialRendering, wm.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return this.f24832a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // wm.c0
    public KClass getType() {
        return this.f24832a.getType();
    }
}
