package hp;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import hp.x5;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import ym.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p1 implements ym.k {

    /* renamed from: c  reason: collision with root package name */
    public static final a f27448c = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final ip.d f27449b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements ym.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ ym.c0 f27450a;

        /* renamed from: hp.p1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0354a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0354a f27451d = new C0354a();

            C0354a() {
                super(3, ip.d.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieCameraRestartBinding;", 0);
            }

            public final ip.d a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return ip.d.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f27452d = new b();

            b() {
                super(1, p1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieCameraRestartBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final p1 invoke(ip.d p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new p1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // ym.c0
        /* renamed from: b */
        public View a(x5.d.C0367d initialRendering, ym.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f27450a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // ym.c0
        public KClass getType() {
            return this.f27450a.getType();
        }

        private a() {
            k.a aVar = ym.k.f54645a;
            this.f27450a = new ym.z(Reflection.getOrCreateKotlinClass(x5.d.C0367d.class), C0354a.f27451d, b.f27452d);
        }
    }

    public p1(ip.d binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f27449b = binding;
    }

    @Override // ym.k
    /* renamed from: b */
    public void a(x5.d.C0367d rendering, ym.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        rendering.a().invoke();
    }
}
