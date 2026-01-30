package ep;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import ep.x5;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import vm.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p1 implements vm.k {

    /* renamed from: c  reason: collision with root package name */
    public static final a f23322c = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final fp.d f23323b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements vm.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ vm.c0 f23324a;

        /* renamed from: ep.p1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0302a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0302a f23325d = new C0302a();

            C0302a() {
                super(3, fp.d.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieCameraRestartBinding;", 0);
            }

            public final fp.d a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return fp.d.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f23326d = new b();

            b() {
                super(1, p1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieCameraRestartBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final p1 invoke(fp.d p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new p1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // vm.c0
        /* renamed from: b */
        public View a(x5.d.C0315d initialRendering, vm.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f23324a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // vm.c0
        public KClass getType() {
            return this.f23324a.getType();
        }

        private a() {
            k.a aVar = vm.k.f51283a;
            this.f23324a = new vm.z(Reflection.getOrCreateKotlinClass(x5.d.C0315d.class), C0302a.f23325d, b.f23326d);
        }
    }

    public p1(fp.d binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f23323b = binding;
    }

    @Override // vm.k
    /* renamed from: b */
    public void a(x5.d.C0315d rendering, vm.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        rendering.a().invoke();
    }
}
