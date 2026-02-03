package ap;

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
import wm.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements wm.b {

    /* renamed from: d  reason: collision with root package name */
    private final d0 f5927d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f5928e;

    /* renamed from: i  reason: collision with root package name */
    private final Function1 f5929i;

    /* renamed from: o  reason: collision with root package name */
    private final wm.c0 f5930o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: ap.l$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0088a implements wm.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewBinding f5932b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ l f5933c;

            public C0088a(ViewBinding viewBinding, l lVar) {
                this.f5932b = viewBinding;
                this.f5933c = lVar;
            }

            @Override // wm.k
            public final void a(Object rendering, wm.a0 viewEnvironment) {
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                l lVar = (l) rendering;
                bp.a aVar = (bp.a) this.f5932b;
                Context context = aVar.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                AppCompatActivity h10 = kp.f.h(context);
                if (lVar.f5929i != null) {
                    aVar.getRoot().post(new c(aVar, this.f5933c, lVar, h10));
                }
            }
        }

        public a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final wm.k invoke(ViewBinding binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new C0088a(binding, l.this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f5934d = new b();

        b() {
            super(3, bp.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/permissions/databinding/Pi2CheckRequestPermissionRationaleStateBinding;", 0);
        }

        public final bp.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return bp.a.b(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ bp.a f5935d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ l f5936e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ l f5937i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ AppCompatActivity f5938o;

        c(bp.a aVar, l lVar, l lVar2, AppCompatActivity appCompatActivity) {
            this.f5935d = aVar;
            this.f5936e = lVar;
            this.f5937i = lVar2;
            this.f5938o = appCompatActivity;
        }

        @Override // java.lang.Runnable
        public final void run() {
            if (!this.f5935d.getRoot().isAttachedToWindow()) {
                return;
            }
            if (this.f5936e.f5927d == d0.f5872e && !this.f5936e.f5928e) {
                this.f5937i.f5929i.invoke(Boolean.TRUE);
            } else {
                this.f5937i.f5929i.invoke(Boolean.valueOf(androidx.core.app.b.y(this.f5938o, k1.b(this.f5937i.f5927d))));
            }
        }
    }

    public l(d0 permission, boolean z10, Function1 function1) {
        Intrinsics.checkNotNullParameter(permission, "permission");
        this.f5927d = permission;
        this.f5928e = z10;
        this.f5929i = function1;
        k.a aVar = wm.k.f52359a;
        this.f5930o = new wm.z(Reflection.getOrCreateKotlinClass(l.class), b.f5934d, new a());
    }

    @Override // wm.b
    public wm.c0 a() {
        return this.f5930o;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (this.f5927d == lVar.f5927d && this.f5928e == lVar.f5928e && Intrinsics.areEqual(this.f5929i, lVar.f5929i)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f5927d.hashCode() * 31) + Boolean.hashCode(this.f5928e)) * 31;
        Function1 function1 = this.f5929i;
        if (function1 == null) {
            hashCode = 0;
        } else {
            hashCode = function1.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        d0 d0Var = this.f5927d;
        boolean z10 = this.f5928e;
        Function1 function1 = this.f5929i;
        return "CheckRequestPermissionRationaleStateView(permission=" + d0Var + ", isPermanentPermissionRejectionCheck=" + z10 + ", callback=" + function1 + ")";
    }
}
