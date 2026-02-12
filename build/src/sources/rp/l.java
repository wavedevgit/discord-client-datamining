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
    private final d0 f47631d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f47632e;

    /* renamed from: i  reason: collision with root package name */
    private final Function1 f47633i;

    /* renamed from: o  reason: collision with root package name */
    private final gn.c0 f47634o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: rp.l$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0639a implements gn.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewBinding f47636b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ l f47637c;

            public C0639a(ViewBinding viewBinding, l lVar) {
                this.f47636b = viewBinding;
                this.f47637c = lVar;
            }

            @Override // gn.k
            public final void a(Object rendering, gn.a0 viewEnvironment) {
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                l lVar = (l) rendering;
                sp.a aVar = (sp.a) this.f47636b;
                Context context = aVar.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                AppCompatActivity h10 = bq.f.h(context);
                if (lVar.f47633i != null) {
                    aVar.getRoot().post(new c(aVar, this.f47637c, lVar, h10));
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
        public static final b f47638d = new b();

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
        final /* synthetic */ sp.a f47639d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ l f47640e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ l f47641i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ AppCompatActivity f47642o;

        c(sp.a aVar, l lVar, l lVar2, AppCompatActivity appCompatActivity) {
            this.f47639d = aVar;
            this.f47640e = lVar;
            this.f47641i = lVar2;
            this.f47642o = appCompatActivity;
        }

        @Override // java.lang.Runnable
        public final void run() {
            if (!this.f47639d.getRoot().isAttachedToWindow()) {
                return;
            }
            if (this.f47640e.f47631d == d0.f47576e && !this.f47640e.f47632e) {
                this.f47641i.f47633i.invoke(Boolean.TRUE);
            } else {
                this.f47641i.f47633i.invoke(Boolean.valueOf(androidx.core.app.b.y(this.f47642o, k1.b(this.f47641i.f47631d))));
            }
        }
    }

    public l(d0 permission, boolean z10, Function1 function1) {
        Intrinsics.checkNotNullParameter(permission, "permission");
        this.f47631d = permission;
        this.f47632e = z10;
        this.f47633i = function1;
        k.a aVar = gn.k.f25849a;
        this.f47634o = new gn.z(Reflection.getOrCreateKotlinClass(l.class), b.f47638d, new a());
    }

    @Override // gn.b
    public gn.c0 a() {
        return this.f47634o;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f47631d == lVar.f47631d && this.f47632e == lVar.f47632e && Intrinsics.areEqual(this.f47633i, lVar.f47633i)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f47631d.hashCode() * 31) + Boolean.hashCode(this.f47632e)) * 31;
        Function1 function1 = this.f47633i;
        if (function1 == null) {
            hashCode = 0;
        } else {
            hashCode = function1.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        d0 d0Var = this.f47631d;
        boolean z10 = this.f47632e;
        Function1 function1 = this.f47633i;
        return "CheckRequestPermissionRationaleStateView(permission=" + d0Var + ", isPermanentPermissionRejectionCheck=" + z10 + ", callback=" + function1 + ")";
    }
}
