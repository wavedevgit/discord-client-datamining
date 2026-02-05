package ip;

import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.widget.CompoundButton;
import android.widget.Toast;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import bn.a0;
import bn.c0;
import bn.k;
import bn.z;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import ip.c;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements bn.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f30074d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final jp.b f30075b;

    /* renamed from: c  reason: collision with root package name */
    private Dialog f30076c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ c0 f30077a;

        /* renamed from: ip.p$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0418a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0418a f30078d = new C0418a();

            C0418a() {
                super(3, jp.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/sandbox/databinding/Pi2SandboxOverlayBinding;", 0);
            }

            public final jp.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return jp.b.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f30079d = new b();

            b() {
                super(1, p.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/sandbox/databinding/Pi2SandboxOverlayBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final p invoke(jp.b p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new p(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // bn.c0
        /* renamed from: b */
        public View a(i initialRendering, a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f30077a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // bn.c0
        public KClass getType() {
            return this.f30077a.getType();
        }

        private a() {
            k.a aVar = bn.k.f6590a;
            this.f30077a = new z(Reflection.getOrCreateKotlinClass(i.class), C0418a.f30078d, b.f30079d);
        }
    }

    public p(jp.b binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f30075b = binding;
    }

    private final void h(final i iVar, Context context) {
        if (this.f30076c != null) {
            return;
        }
        final Dialog dialog = new Dialog(context, zg.j.f55705d);
        jp.a c10 = jp.a.c(LayoutInflater.from(dialog.getContext()));
        Intrinsics.checkNotNullExpressionValue(c10, "inflate(...)");
        dialog.setContentView(c10.getRoot());
        c10.f31164c.setTitle("Sandbox options");
        c10.f31164c.setNavigationIcon(pp.l.f46185u);
        c10.f31164c.setNavigationOnClickListener(new View.OnClickListener() { // from class: ip.m
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                p.i(dialog, view);
            }
        });
        c10.f31163b.setChecked(iVar.e());
        c10.f31163b.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() { // from class: ip.n
            @Override // android.widget.CompoundButton.OnCheckedChangeListener
            public final void onCheckedChanged(CompoundButton compoundButton, boolean z10) {
                p.j(i.this, compoundButton, z10);
            }
        });
        Window window = dialog.getWindow();
        if (window != null) {
            window.setBackgroundDrawable(null);
        }
        dialog.setOnDismissListener(new DialogInterface.OnDismissListener() { // from class: ip.o
            @Override // android.content.DialogInterface.OnDismissListener
            public final void onDismiss(DialogInterface dialogInterface) {
                p.k(p.this, dialogInterface);
            }
        });
        this.f30076c = dialog;
        dialog.show();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(Dialog dialog, View view) {
        dialog.dismiss();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(i iVar, CompoundButton compoundButton, boolean z10) {
        iVar.d().invoke(Boolean.valueOf(z10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(p pVar, DialogInterface dialogInterface) {
        pVar.f30076c = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m(i iVar, jp.b bVar, View view) {
        iVar.c().invoke();
        String a10 = c.f30044d.a((c.b) iVar.a().invoke());
        Toast.makeText(bVar.f31167c.getRootView().getContext(), "Setting the debug flag to: " + a10, 0).show();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean n(p pVar, i iVar, Context context, View view) {
        Intrinsics.checkNotNull(context);
        pVar.h(iVar, context);
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(p pVar, WindowInsetsCompat insets) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        Insets g10 = insets.g(WindowInsetsCompat.p.h());
        Intrinsics.checkNotNullExpressionValue(g10, "getInsetsIgnoringVisibility(...)");
        FloatingActionButton floatingActionButton = pVar.f30075b.f31167c;
        Intrinsics.checkNotNullExpressionValue(floatingActionButton, "floatingActionButton");
        ViewGroup.LayoutParams layoutParams = floatingActionButton.getLayoutParams();
        if (layoutParams != null) {
            CoordinatorLayout.f fVar = (CoordinatorLayout.f) layoutParams;
            ((ViewGroup.MarginLayoutParams) fVar).bottomMargin = (int) (g10.f3278d + pp.h.c(16.0d));
            floatingActionButton.setLayoutParams(fVar);
            return Unit.f31988a;
        }
        throw new NullPointerException("null cannot be cast to non-null type androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams");
    }

    @Override // bn.k
    /* renamed from: l */
    public void a(final i rendering, a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        final jp.b bVar = this.f30075b;
        final Context context = bVar.getRoot().getContext();
        bVar.f31167c.setOnClickListener(new View.OnClickListener() { // from class: ip.j
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                p.m(i.this, bVar, view);
            }
        });
        bVar.f31167c.setOnLongClickListener(new View.OnLongClickListener() { // from class: ip.k
            @Override // android.view.View.OnLongClickListener
            public final boolean onLongClick(View view) {
                boolean n10;
                n10 = p.n(p.this, rendering, context, view);
                return n10;
            }
        });
        FloatingActionButton floatingActionButton = bVar.f31167c;
        Intrinsics.checkNotNullExpressionValue(floatingActionButton, "floatingActionButton");
        zp.f.g(floatingActionButton, new Function1() { // from class: ip.l
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit o10;
                o10 = p.o(p.this, (WindowInsetsCompat) obj);
                return o10;
            }
        });
        bVar.f31166b.c(rendering.b(), viewEnvironment);
    }
}
