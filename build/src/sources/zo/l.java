package zo;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import androidx.appcompat.app.AppCompatActivity;
import androidx.viewbinding.ViewBinding;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Reflection;
import vm.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements vm.b {

    /* renamed from: d  reason: collision with root package name */
    private final d0 f55949d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f55950e;

    /* renamed from: i  reason: collision with root package name */
    private final Function1 f55951i;

    /* renamed from: o  reason: collision with root package name */
    private final vm.c0 f55952o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: zo.l$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0788a implements vm.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewBinding f55954b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ l f55955c;

            public C0788a(ViewBinding viewBinding, l lVar) {
                this.f55954b = viewBinding;
                this.f55955c = lVar;
            }

            @Override // vm.k
            public final void a(Object rendering, vm.a0 viewEnvironment) {
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                l lVar = (l) rendering;
                ap.a aVar = (ap.a) this.f55954b;
                Context context = aVar.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                AppCompatActivity h10 = jp.f.h(context);
                if (lVar.f55951i != null) {
                    aVar.getRoot().post(new c(aVar, this.f55955c, lVar, h10));
                }
            }
        }

        public a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final vm.k invoke(ViewBinding binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new C0788a(binding, l.this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f55956d = new b();

        b() {
            super(3, ap.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/permissions/databinding/Pi2CheckRequestPermissionRationaleStateBinding;", 0);
        }

        public final ap.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return ap.a.b(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ap.a f55957d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ l f55958e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ l f55959i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ AppCompatActivity f55960o;

        c(ap.a aVar, l lVar, l lVar2, AppCompatActivity appCompatActivity) {
            this.f55957d = aVar;
            this.f55958e = lVar;
            this.f55959i = lVar2;
            this.f55960o = appCompatActivity;
        }

        @Override // java.lang.Runnable
        public final void run() {
            if (!this.f55957d.getRoot().isAttachedToWindow()) {
                return;
            }
            if (this.f55958e.f55949d == d0.f55894e && !this.f55958e.f55950e) {
                this.f55959i.f55951i.invoke(Boolean.TRUE);
            } else {
                this.f55959i.f55951i.invoke(Boolean.valueOf(androidx.core.app.b.y(this.f55960o, k1.b(this.f55959i.f55949d))));
            }
        }
    }

    public l(d0 permission, boolean z10, Function1 function1) {
        Intrinsics.checkNotNullParameter(permission, "permission");
        this.f55949d = permission;
        this.f55950e = z10;
        this.f55951i = function1;
        k.a aVar = vm.k.f51267a;
        this.f55952o = new vm.z(Reflection.getOrCreateKotlinClass(l.class), b.f55956d, new a());
    }

    @Override // vm.b
    public vm.c0 a() {
        return this.f55952o;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f55949d == lVar.f55949d && this.f55950e == lVar.f55950e && Intrinsics.areEqual(this.f55951i, lVar.f55951i)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f55949d.hashCode() * 31) + Boolean.hashCode(this.f55950e)) * 31;
        Function1 function1 = this.f55951i;
        if (function1 == null) {
            hashCode = 0;
        } else {
            hashCode = function1.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        d0 d0Var = this.f55949d;
        boolean z10 = this.f55950e;
        Function1 function1 = this.f55951i;
        return "CheckRequestPermissionRationaleStateView(permission=" + d0Var + ", isPermanentPermissionRejectionCheck=" + z10 + ", callback=" + function1 + ")";
    }
}
