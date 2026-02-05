package kp;

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
import kp.o0;
import kp.x5;
import sn.t;
import sn.z;
import un.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o0 implements bn.c0 {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ bn.f f35420a;

    /* renamed from: b  reason: collision with root package name */
    private final sn.t f35421b;

    /* renamed from: c  reason: collision with root package name */
    private final sn.w0 f35422c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, m0.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/selfie/SelfieWorkflow$Screen$OldCameraScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
        }

        public final void a(x5.d.c p02, bn.a0 p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((m0) this.receiver).a(p02, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((x5.d.c) obj, (bn.a0) obj2);
            return Unit.f31988a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements sn.y {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ lp.a f35423a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ sn.t f35424b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ sn.w0 f35425c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ x5.d.c f35426d;

        b(lp.a aVar, sn.t tVar, sn.w0 w0Var, x5.d.c cVar) {
            this.f35423a = aVar;
            this.f35424b = tVar;
            this.f35425c = w0Var;
            this.f35426d = cVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(x5.d.c cVar, sn.k it) {
            Intrinsics.checkNotNullParameter(it, "it");
            cVar.h().invoke(it);
            return Unit.f31988a;
        }

        @Override // sn.y
        public void a() {
            PreviewView previewviewSelfieCamera = this.f35423a.f37123k;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            t.a aVar = t.a.f49957d;
            sn.t tVar = this.f35424b;
            sn.w0 w0Var = this.f35425c;
            final x5.d.c cVar = this.f35426d;
            tVar.f(previewviewSelfieCamera, aVar, w0Var, true, new Function1() { // from class: kp.p0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c10;
                    c10 = o0.b.c(x5.d.c.this, (sn.k) obj);
                    return c10;
                }
            });
        }
    }

    public o0(final sn.t cameraPreview, final sn.w0 selfieDirectionFeed) {
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f35420a = new bn.f(Reflection.getOrCreateKotlinClass(x5.d.c.class), new Function4() { // from class: kp.n0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                View c10;
                c10 = o0.c(sn.w0.this, cameraPreview, (x5.d.c) obj, (bn.a0) obj2, (Context) obj3, (ViewGroup) obj4);
                return c10;
            }
        });
        this.f35421b = cameraPreview;
        this.f35422c = selfieDirectionFeed;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View c(sn.w0 w0Var, sn.t tVar, x5.d.c initialRendering, bn.a0 initialViewEnvironment, Context context, ViewGroup viewGroup) {
        Context context2;
        sn.w0 w0Var2;
        sn.i a10;
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(context, "context");
        if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
            context2 = context;
        }
        lp.a c10 = lp.a.c(LayoutInflater.from(context2).cloneInContext(context));
        if (initialRendering.n() != yn.a.f54864i) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            un.m b10 = un.j.b(applicationContext, un.n.f51614d);
            if (b10 == null) {
                initialRendering.h().invoke(new sn.s0());
                Camera2PreviewView camera2Preview = c10.f37115c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
                a10 = new sn.r0(camera2Preview);
                w0Var2 = w0Var;
            } else {
                g.a b11 = initialRendering.b();
                Camera2PreviewView camera2Preview2 = c10.f37115c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview2, "camera2Preview");
                yn.a valueOf = yn.a.valueOf(initialRendering.n().toString());
                initialRendering.o();
                w0Var2 = w0Var;
                a10 = new un.a(b11.a(b10, camera2Preview2, w0Var2, valueOf, null, initialRendering.p()));
            }
        } else {
            w0Var2 = w0Var;
            z.a c11 = initialRendering.c();
            PreviewView previewviewSelfieCamera = c10.f37123k;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            a10 = c11.a(tVar, previewviewSelfieCamera, new b(c10, tVar, w0Var2, initialRendering));
        }
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        Intrinsics.checkNotNull(c10);
        bn.g0.a(root, initialRendering, initialViewEnvironment, new a(new m0(c10, a10, w0Var2)));
        ConstraintLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "let(...)");
        return root2;
    }

    @Override // bn.c0
    /* renamed from: d */
    public View a(x5.d.c initialRendering, bn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return this.f35420a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // bn.c0
    public KClass getType() {
        return this.f35420a.getType();
    }
}
