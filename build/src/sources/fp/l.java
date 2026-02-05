package fp;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import androidx.appcompat.app.AppCompatActivity;
import androidx.viewbinding.ViewBinding;
import bn.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements bn.b {

    /* renamed from: d  reason: collision with root package name */
    private final d0 f23311d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f23312e;

    /* renamed from: i  reason: collision with root package name */
    private final Function1 f23313i;

    /* renamed from: o  reason: collision with root package name */
    private final bn.c0 f23314o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: fp.l$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0322a implements bn.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewBinding f23316b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ l f23317c;

            public C0322a(ViewBinding viewBinding, l lVar) {
                this.f23316b = viewBinding;
                this.f23317c = lVar;
            }

            @Override // bn.k
            public final void a(Object rendering, bn.a0 viewEnvironment) {
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                l lVar = (l) rendering;
                gp.a aVar = (gp.a) this.f23316b;
                Context context = aVar.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                AppCompatActivity h10 = pp.f.h(context);
                if (lVar.f23313i != null) {
                    aVar.getRoot().post(new c(aVar, this.f23317c, lVar, h10));
                }
            }
        }

        public a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final bn.k invoke(ViewBinding binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new C0322a(binding, l.this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f23318d = new b();

        b() {
            super(3, gp.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/permissions/databinding/Pi2CheckRequestPermissionRationaleStateBinding;", 0);
        }

        public final gp.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return gp.a.b(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ gp.a f23319d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ l f23320e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ l f23321i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ AppCompatActivity f23322o;

        c(gp.a aVar, l lVar, l lVar2, AppCompatActivity appCompatActivity) {
            this.f23319d = aVar;
            this.f23320e = lVar;
            this.f23321i = lVar2;
            this.f23322o = appCompatActivity;
        }

        @Override // java.lang.Runnable
        public final void run() {
            if (!this.f23319d.getRoot().isAttachedToWindow()) {
                return;
            }
            if (this.f23320e.f23311d == d0.f23256e && !this.f23320e.f23312e) {
                this.f23321i.f23313i.invoke(Boolean.TRUE);
            } else {
                this.f23321i.f23313i.invoke(Boolean.valueOf(androidx.core.app.b.y(this.f23322o, k1.b(this.f23321i.f23311d))));
            }
        }
    }

    public l(d0 permission, boolean z10, Function1 function1) {
        Intrinsics.checkNotNullParameter(permission, "permission");
        this.f23311d = permission;
        this.f23312e = z10;
        this.f23313i = function1;
        k.a aVar = bn.k.f6590a;
        this.f23314o = new bn.z(Reflection.getOrCreateKotlinClass(l.class), b.f23318d, new a());
    }

    @Override // bn.b
    public bn.c0 a() {
        return this.f23314o;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f23311d == lVar.f23311d && this.f23312e == lVar.f23312e && Intrinsics.areEqual(this.f23313i, lVar.f23313i)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f23311d.hashCode() * 31) + Boolean.hashCode(this.f23312e)) * 31;
        Function1 function1 = this.f23313i;
        if (function1 == null) {
            hashCode = 0;
        } else {
            hashCode = function1.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        d0 d0Var = this.f23311d;
        boolean z10 = this.f23312e;
        Function1 function1 = this.f23313i;
        return "CheckRequestPermissionRationaleStateView(permission=" + d0Var + ", isPermanentPermissionRejectionCheck=" + z10 + ", callback=" + function1 + ")";
    }
}
