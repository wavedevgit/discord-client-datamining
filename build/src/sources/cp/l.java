package cp;

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
import ym.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements ym.b {

    /* renamed from: d  reason: collision with root package name */
    private final d0 f19700d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f19701e;

    /* renamed from: i  reason: collision with root package name */
    private final Function1 f19702i;

    /* renamed from: o  reason: collision with root package name */
    private final ym.c0 f19703o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: cp.l$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0255a implements ym.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewBinding f19705b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ l f19706c;

            public C0255a(ViewBinding viewBinding, l lVar) {
                this.f19705b = viewBinding;
                this.f19706c = lVar;
            }

            @Override // ym.k
            public final void a(Object rendering, ym.a0 viewEnvironment) {
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                l lVar = (l) rendering;
                dp.a aVar = (dp.a) this.f19705b;
                Context context = aVar.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                AppCompatActivity h10 = mp.f.h(context);
                if (lVar.f19702i != null) {
                    aVar.getRoot().post(new c(aVar, this.f19706c, lVar, h10));
                }
            }
        }

        public a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final ym.k invoke(ViewBinding binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new C0255a(binding, l.this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f19707d = new b();

        b() {
            super(3, dp.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/permissions/databinding/Pi2CheckRequestPermissionRationaleStateBinding;", 0);
        }

        public final dp.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return dp.a.b(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ dp.a f19708d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ l f19709e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ l f19710i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ AppCompatActivity f19711o;

        c(dp.a aVar, l lVar, l lVar2, AppCompatActivity appCompatActivity) {
            this.f19708d = aVar;
            this.f19709e = lVar;
            this.f19710i = lVar2;
            this.f19711o = appCompatActivity;
        }

        @Override // java.lang.Runnable
        public final void run() {
            if (!this.f19708d.getRoot().isAttachedToWindow()) {
                return;
            }
            if (this.f19709e.f19700d == d0.f19645e && !this.f19709e.f19701e) {
                this.f19710i.f19702i.invoke(Boolean.TRUE);
            } else {
                this.f19710i.f19702i.invoke(Boolean.valueOf(androidx.core.app.b.y(this.f19711o, k1.b(this.f19710i.f19700d))));
            }
        }
    }

    public l(d0 permission, boolean z10, Function1 function1) {
        Intrinsics.checkNotNullParameter(permission, "permission");
        this.f19700d = permission;
        this.f19701e = z10;
        this.f19702i = function1;
        k.a aVar = ym.k.f54645a;
        this.f19703o = new ym.z(Reflection.getOrCreateKotlinClass(l.class), b.f19707d, new a());
    }

    @Override // ym.b
    public ym.c0 a() {
        return this.f19703o;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f19700d == lVar.f19700d && this.f19701e == lVar.f19701e && Intrinsics.areEqual(this.f19702i, lVar.f19702i)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f19700d.hashCode() * 31) + Boolean.hashCode(this.f19701e)) * 31;
        Function1 function1 = this.f19702i;
        if (function1 == null) {
            hashCode = 0;
        } else {
            hashCode = function1.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        d0 d0Var = this.f19700d;
        boolean z10 = this.f19701e;
        Function1 function1 = this.f19702i;
        return "CheckRequestPermissionRationaleStateView(permission=" + d0Var + ", isPermanentPermissionRejectionCheck=" + z10 + ", callback=" + function1 + ")";
    }
}
