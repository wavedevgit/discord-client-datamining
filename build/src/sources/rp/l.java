package rp;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import androidx.appcompat.app.AppCompatActivity;
import androidx.viewbinding.ViewBinding;
import gn.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements gn.b {

    /* renamed from: d  reason: collision with root package name */
    private final d0 f48199d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f48200e;

    /* renamed from: i  reason: collision with root package name */
    private final Function1 f48201i;

    /* renamed from: o  reason: collision with root package name */
    private final gn.c0 f48202o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: rp.l$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0639a implements gn.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewBinding f48204b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ l f48205c;

            public C0639a(ViewBinding viewBinding, l lVar) {
                this.f48204b = viewBinding;
                this.f48205c = lVar;
            }

            @Override // gn.k
            public final void a(Object rendering, gn.a0 viewEnvironment) {
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                l lVar = (l) rendering;
                sp.a aVar = (sp.a) this.f48204b;
                Context context = aVar.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                AppCompatActivity h10 = bq.f.h(context);
                if (lVar.f48201i != null) {
                    aVar.getRoot().post(new c(aVar, this.f48205c, lVar, h10));
                }
            }
        }

        public a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final gn.k invoke(ViewBinding binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new C0639a(binding, l.this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f48206d = new b();

        b() {
            super(3, sp.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/permissions/databinding/Pi2CheckRequestPermissionRationaleStateBinding;", 0);
        }

        public final sp.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return sp.a.b(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ sp.a f48207d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ l f48208e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ l f48209i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ AppCompatActivity f48210o;

        c(sp.a aVar, l lVar, l lVar2, AppCompatActivity appCompatActivity) {
            this.f48207d = aVar;
            this.f48208e = lVar;
            this.f48209i = lVar2;
            this.f48210o = appCompatActivity;
        }

        @Override // java.lang.Runnable
        public final void run() {
            if (!this.f48207d.getRoot().isAttachedToWindow()) {
                return;
            }
            if (this.f48208e.f48199d == d0.f48144e && !this.f48208e.f48200e) {
                this.f48209i.f48201i.invoke(Boolean.TRUE);
            } else {
                this.f48209i.f48201i.invoke(Boolean.valueOf(androidx.core.app.b.y(this.f48210o, k1.b(this.f48209i.f48199d))));
            }
        }
    }

    public l(d0 permission, boolean z10, Function1 function1) {
        Intrinsics.checkNotNullParameter(permission, "permission");
        this.f48199d = permission;
        this.f48200e = z10;
        this.f48201i = function1;
        k.a aVar = gn.k.f25849a;
        this.f48202o = new gn.z(Reflection.getOrCreateKotlinClass(l.class), b.f48206d, new a());
    }

    @Override // gn.b
    public gn.c0 a() {
        return this.f48202o;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f48199d == lVar.f48199d && this.f48200e == lVar.f48200e && Intrinsics.areEqual(this.f48201i, lVar.f48201i)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f48199d.hashCode() * 31) + Boolean.hashCode(this.f48200e)) * 31;
        Function1 function1 = this.f48201i;
        if (function1 == null) {
            hashCode = 0;
        } else {
            hashCode = function1.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        d0 d0Var = this.f48199d;
        boolean z10 = this.f48200e;
        Function1 function1 = this.f48201i;
        return "CheckRequestPermissionRationaleStateView(permission=" + d0Var + ", isPermanentPermissionRejectionCheck=" + z10 + ", callback=" + function1 + ")";
    }
}
