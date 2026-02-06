package mp;

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
import mp.o0;
import mp.x5;
import un.t;
import un.z;
import wn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o0 implements dn.c0 {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ dn.f f37576a;

    /* renamed from: b  reason: collision with root package name */
    private final un.t f37577b;

    /* renamed from: c  reason: collision with root package name */
    private final un.w0 f37578c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, m0.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/selfie/SelfieWorkflow$Screen$OldCameraScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
        }

        public final void a(x5.d.c p02, dn.a0 p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((m0) this.receiver).a(p02, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((x5.d.c) obj, (dn.a0) obj2);
            return Unit.f32008a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements un.y {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ np.a f37579a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ un.t f37580b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ un.w0 f37581c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ x5.d.c f37582d;

        b(np.a aVar, un.t tVar, un.w0 w0Var, x5.d.c cVar) {
            this.f37579a = aVar;
            this.f37580b = tVar;
            this.f37581c = w0Var;
            this.f37582d = cVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(x5.d.c cVar, un.k it) {
            Intrinsics.checkNotNullParameter(it, "it");
            cVar.h().invoke(it);
            return Unit.f32008a;
        }

        @Override // un.y
        public void a() {
            PreviewView previewviewSelfieCamera = this.f37579a.f41079k;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            t.a aVar = t.a.f51803d;
            un.t tVar = this.f37580b;
            un.w0 w0Var = this.f37581c;
            final x5.d.c cVar = this.f37582d;
            tVar.f(previewviewSelfieCamera, aVar, w0Var, true, new Function1() { // from class: mp.p0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c10;
                    c10 = o0.b.c(x5.d.c.this, (un.k) obj);
                    return c10;
                }
            });
        }
    }

    public o0(final un.t cameraPreview, final un.w0 selfieDirectionFeed) {
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f37576a = new dn.f(Reflection.getOrCreateKotlinClass(x5.d.c.class), new Function4() { // from class: mp.n0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                View c10;
                c10 = o0.c(un.w0.this, cameraPreview, (x5.d.c) obj, (dn.a0) obj2, (Context) obj3, (ViewGroup) obj4);
                return c10;
            }
        });
        this.f37577b = cameraPreview;
        this.f37578c = selfieDirectionFeed;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View c(un.w0 w0Var, un.t tVar, x5.d.c initialRendering, dn.a0 initialViewEnvironment, Context context, ViewGroup viewGroup) {
        Context context2;
        un.w0 w0Var2;
        un.i a10;
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(context, "context");
        if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
            context2 = context;
        }
        np.a c10 = np.a.c(LayoutInflater.from(context2).cloneInContext(context));
        if (initialRendering.n() != ao.a.f6228i) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            wn.m b10 = wn.j.b(applicationContext, wn.n.f54014d);
            if (b10 == null) {
                initialRendering.h().invoke(new un.s0());
                Camera2PreviewView camera2Preview = c10.f41071c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
                a10 = new un.r0(camera2Preview);
                w0Var2 = w0Var;
            } else {
                g.a b11 = initialRendering.b();
                Camera2PreviewView camera2Preview2 = c10.f41071c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview2, "camera2Preview");
                ao.a valueOf = ao.a.valueOf(initialRendering.n().toString());
                initialRendering.o();
                w0Var2 = w0Var;
                a10 = new wn.a(b11.a(b10, camera2Preview2, w0Var2, valueOf, null, initialRendering.p()));
            }
        } else {
            w0Var2 = w0Var;
            z.a c11 = initialRendering.c();
            PreviewView previewviewSelfieCamera = c10.f41079k;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            a10 = c11.a(tVar, previewviewSelfieCamera, new b(c10, tVar, w0Var2, initialRendering));
        }
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        Intrinsics.checkNotNull(c10);
        dn.g0.a(root, initialRendering, initialViewEnvironment, new a(new m0(c10, a10, w0Var2)));
        ConstraintLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "let(...)");
        return root2;
    }

    @Override // dn.c0
    /* renamed from: d */
    public View a(x5.d.c initialRendering, dn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return this.f37576a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // dn.c0
    public KClass getType() {
        return this.f37576a.getType();
    }
}
