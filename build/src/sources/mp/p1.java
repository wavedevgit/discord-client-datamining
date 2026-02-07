package mp;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import dn.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import mp.x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p1 implements dn.k {

    /* renamed from: c  reason: collision with root package name */
    public static final a f37645c = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final np.d f37646b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements dn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ dn.c0 f37647a;

        /* renamed from: mp.p1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0510a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0510a f37648d = new C0510a();

            C0510a() {
                super(3, np.d.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieCameraRestartBinding;", 0);
            }

            public final np.d a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return np.d.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f37649d = new b();

            b() {
                super(1, p1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieCameraRestartBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final p1 invoke(np.d p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new p1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // dn.c0
        /* renamed from: b */
        public View a(x5.d.C0523d initialRendering, dn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f37647a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // dn.c0
        public KClass getType() {
            return this.f37647a.getType();
        }

        private a() {
            k.a aVar = dn.k.f20913a;
            this.f37647a = new dn.z(Reflection.getOrCreateKotlinClass(x5.d.C0523d.class), C0510a.f37648d, b.f37649d);
        }
    }

    public p1(np.d binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f37646b = binding;
    }

    @Override // dn.k
    /* renamed from: b */
    public void a(x5.d.C0523d rendering, dn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        rendering.a().invoke();
    }
}
