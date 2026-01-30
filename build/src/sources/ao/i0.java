package ao;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.camera.view.PreviewView;
import ao.f5;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import kotlin.Unit;
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
public final class i0 implements vm.c0 {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ vm.f f6135a;

    /* renamed from: b  reason: collision with root package name */
    private final mn.f0 f6136b;

    /* renamed from: c  reason: collision with root package name */
    private final mn.t f6137c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, o.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/governmentid/Screen$CameraScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
        }

        public final void a(f5.b p02, vm.a0 p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((o) this.receiver).a(p02, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((f5.b) obj, (vm.a0) obj2);
            return Unit.f33298a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements mn.y {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ fo.b f6138a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ f5.b f6139b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ mn.t f6140c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ mn.f0 f6141d;

        b(fo.b bVar, f5.b bVar2, mn.t tVar, mn.f0 f0Var) {
            this.f6138a = bVar;
            this.f6139b = bVar2;
            this.f6140c = tVar;
            this.f6141d = f0Var;
        }

        @Override // mn.y
        public void a() {
            PreviewView previewView = this.f6138a.f25325y;
            Intrinsics.checkNotNullExpressionValue(previewView, "previewView");
            this.f6140c.f(previewView, t.a.f39307e, this.f6141d, true, this.f6139b.x());
        }
    }

    public i0(final mn.f0 governmentIdFeed, final mn.t cameraPreview) {
        Intrinsics.checkNotNullParameter(governmentIdFeed, "governmentIdFeed");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        this.f6135a = new vm.f(Reflection.getOrCreateKotlinClass(f5.b.class), new Function4() { // from class: ao.h0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                View c10;
                c10 = i0.c(mn.f0.this, cameraPreview, (f5.b) obj, (vm.a0) obj2, (Context) obj3, (ViewGroup) obj4);
                return c10;
            }
        });
        this.f6136b = governmentIdFeed;
        this.f6137c = cameraPreview;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View c(mn.f0 f0Var, mn.t tVar, f5.b initialRendering, vm.a0 initialViewEnvironment, Context context, ViewGroup viewGroup) {
        Context context2;
        mn.f0 f0Var2;
        mn.i aVar;
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(context, "context");
        if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
            context2 = context;
        }
        fo.b c10 = fo.b.c(LayoutInflater.from(context2).cloneInContext(context));
        if (initialRendering.G() != sn.a.f49107e && initialRendering.G() != sn.a.f49106d) {
            z.a h10 = initialRendering.h();
            PreviewView previewView = c10.f25325y;
            Intrinsics.checkNotNullExpressionValue(previewView, "previewView");
            aVar = h10.a(tVar, previewView, new b(c10, initialRendering, tVar, f0Var));
            f0Var2 = f0Var;
        } else {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            on.m b10 = on.j.b(applicationContext, on.n.f44590e);
            if (b10 == null) {
                initialRendering.x().invoke(new mn.s0());
                Camera2PreviewView camera2Preview = c10.f25303c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
                f0Var2 = f0Var;
                aVar = new mn.r0(camera2Preview);
            } else {
                g.a g10 = initialRendering.g();
                Camera2PreviewView camera2Preview2 = c10.f25303c;
                Intrinsics.checkNotNullExpressionValue(camera2Preview2, "camera2Preview");
                sn.a G = initialRendering.G();
                initialRendering.H();
                f0Var2 = f0Var;
                aVar = new on.a(g10.a(b10, camera2Preview2, f0Var2, G, null, initialRendering.I()));
            }
        }
        FrameLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        Intrinsics.checkNotNull(c10);
        vm.g0.a(root, initialRendering, initialViewEnvironment, new a(new o(c10, aVar, f0Var2)));
        FrameLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "let(...)");
        return root2;
    }

    @Override // vm.c0
    /* renamed from: d */
    public View a(f5.b initialRendering, vm.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return this.f6135a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // vm.c0
    public KClass getType() {
        return this.f6135a.getType();
    }
}
