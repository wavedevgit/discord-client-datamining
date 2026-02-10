package ip;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import androidx.appcompat.app.AppCompatActivity;
import androidx.viewbinding.ViewBinding;
import en.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements en.b {

    /* renamed from: d  reason: collision with root package name */
    private final d0 f29524d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f29525e;

    /* renamed from: i  reason: collision with root package name */
    private final Function1 f29526i;

    /* renamed from: o  reason: collision with root package name */
    private final en.c0 f29527o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: ip.l$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0439a implements en.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewBinding f29529b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ l f29530c;

            public C0439a(ViewBinding viewBinding, l lVar) {
                this.f29529b = viewBinding;
                this.f29530c = lVar;
            }

            @Override // en.k
            public final void a(Object rendering, en.a0 viewEnvironment) {
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                l lVar = (l) rendering;
                jp.a aVar = (jp.a) this.f29529b;
                Context context = aVar.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                AppCompatActivity h10 = sp.f.h(context);
                if (lVar.f29526i != null) {
                    aVar.getRoot().post(new c(aVar, this.f29530c, lVar, h10));
                }
            }
        }

        public a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final en.k invoke(ViewBinding binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new C0439a(binding, l.this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f29531d = new b();

        b() {
            super(3, jp.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/permissions/databinding/Pi2CheckRequestPermissionRationaleStateBinding;", 0);
        }

        public final jp.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return jp.a.b(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ jp.a f29532d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ l f29533e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ l f29534i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ AppCompatActivity f29535o;

        c(jp.a aVar, l lVar, l lVar2, AppCompatActivity appCompatActivity) {
            this.f29532d = aVar;
            this.f29533e = lVar;
            this.f29534i = lVar2;
            this.f29535o = appCompatActivity;
        }

        @Override // java.lang.Runnable
        public final void run() {
            if (!this.f29532d.getRoot().isAttachedToWindow()) {
                return;
            }
            if (this.f29533e.f29524d == d0.f29469e && !this.f29533e.f29525e) {
                this.f29534i.f29526i.invoke(Boolean.TRUE);
            } else {
                this.f29534i.f29526i.invoke(Boolean.valueOf(androidx.core.app.b.y(this.f29535o, k1.b(this.f29534i.f29524d))));
            }
        }
    }

    public l(d0 permission, boolean z10, Function1 function1) {
        Intrinsics.checkNotNullParameter(permission, "permission");
        this.f29524d = permission;
        this.f29525e = z10;
        this.f29526i = function1;
        k.a aVar = en.k.f21834a;
        this.f29527o = new en.z(Reflection.getOrCreateKotlinClass(l.class), b.f29531d, new a());
    }

    @Override // en.b
    public en.c0 a() {
        return this.f29527o;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f29524d == lVar.f29524d && this.f29525e == lVar.f29525e && Intrinsics.areEqual(this.f29526i, lVar.f29526i)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f29524d.hashCode() * 31) + Boolean.hashCode(this.f29525e)) * 31;
        Function1 function1 = this.f29526i;
        if (function1 == null) {
            hashCode = 0;
        } else {
            hashCode = function1.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        d0 d0Var = this.f29524d;
        boolean z10 = this.f29525e;
        Function1 function1 = this.f29526i;
        return "CheckRequestPermissionRationaleStateView(permission=" + d0Var + ", isPermanentPermissionRejectionCheck=" + z10 + ", callback=" + function1 + ")";
    }
}
