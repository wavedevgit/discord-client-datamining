package hp;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import androidx.appcompat.app.AppCompatActivity;
import androidx.viewbinding.ViewBinding;
import dn.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements dn.b {

    /* renamed from: d  reason: collision with root package name */
    private final d0 f26336d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f26337e;

    /* renamed from: i  reason: collision with root package name */
    private final Function1 f26338i;

    /* renamed from: o  reason: collision with root package name */
    private final dn.c0 f26339o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: hp.l$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0364a implements dn.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewBinding f26341b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ l f26342c;

            public C0364a(ViewBinding viewBinding, l lVar) {
                this.f26341b = viewBinding;
                this.f26342c = lVar;
            }

            @Override // dn.k
            public final void a(Object rendering, dn.a0 viewEnvironment) {
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                l lVar = (l) rendering;
                ip.a aVar = (ip.a) this.f26341b;
                Context context = aVar.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                AppCompatActivity h10 = rp.f.h(context);
                if (lVar.f26338i != null) {
                    aVar.getRoot().post(new c(aVar, this.f26342c, lVar, h10));
                }
            }
        }

        public a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final dn.k invoke(ViewBinding binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new C0364a(binding, l.this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f26343d = new b();

        b() {
            super(3, ip.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/permissions/databinding/Pi2CheckRequestPermissionRationaleStateBinding;", 0);
        }

        public final ip.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return ip.a.b(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ip.a f26344d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ l f26345e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ l f26346i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ AppCompatActivity f26347o;

        c(ip.a aVar, l lVar, l lVar2, AppCompatActivity appCompatActivity) {
            this.f26344d = aVar;
            this.f26345e = lVar;
            this.f26346i = lVar2;
            this.f26347o = appCompatActivity;
        }

        @Override // java.lang.Runnable
        public final void run() {
            if (!this.f26344d.getRoot().isAttachedToWindow()) {
                return;
            }
            if (this.f26345e.f26336d == d0.f26281e && !this.f26345e.f26337e) {
                this.f26346i.f26338i.invoke(Boolean.TRUE);
            } else {
                this.f26346i.f26338i.invoke(Boolean.valueOf(androidx.core.app.b.y(this.f26347o, k1.b(this.f26346i.f26336d))));
            }
        }
    }

    public l(d0 permission, boolean z10, Function1 function1) {
        Intrinsics.checkNotNullParameter(permission, "permission");
        this.f26336d = permission;
        this.f26337e = z10;
        this.f26338i = function1;
        k.a aVar = dn.k.f20913a;
        this.f26339o = new dn.z(Reflection.getOrCreateKotlinClass(l.class), b.f26343d, new a());
    }

    @Override // dn.b
    public dn.c0 a() {
        return this.f26339o;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f26336d == lVar.f26336d && this.f26337e == lVar.f26337e && Intrinsics.areEqual(this.f26338i, lVar.f26338i)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f26336d.hashCode() * 31) + Boolean.hashCode(this.f26337e)) * 31;
        Function1 function1 = this.f26338i;
        if (function1 == null) {
            hashCode = 0;
        } else {
            hashCode = function1.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        d0 d0Var = this.f26336d;
        boolean z10 = this.f26337e;
        Function1 function1 = this.f26338i;
        return "CheckRequestPermissionRationaleStateView(permission=" + d0Var + ", isPermanentPermissionRejectionCheck=" + z10 + ", callback=" + function1 + ")";
    }
}
