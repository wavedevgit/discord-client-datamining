package cp;

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
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import cp.c;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import vm.a0;
import vm.c0;
import vm.k;
import vm.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements vm.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f21010d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final dp.b f21011b;

    /* renamed from: c  reason: collision with root package name */
    private Dialog f21012c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ c0 f21013a;

        /* renamed from: cp.p$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0268a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0268a f21014d = new C0268a();

            C0268a() {
                super(3, dp.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/sandbox/databinding/Pi2SandboxOverlayBinding;", 0);
            }

            public final dp.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return dp.b.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f21015d = new b();

            b() {
                super(1, p.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/sandbox/databinding/Pi2SandboxOverlayBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final p invoke(dp.b p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new p(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // vm.c0
        /* renamed from: b */
        public View a(i initialRendering, a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f21013a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // vm.c0
        public KClass getType() {
            return this.f21013a.getType();
        }

        private a() {
            k.a aVar = vm.k.f51267a;
            this.f21013a = new z(Reflection.getOrCreateKotlinClass(i.class), C0268a.f21014d, b.f21015d);
        }
    }

    public p(dp.b binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f21011b = binding;
    }

    private final void h(final i iVar, Context context) {
        if (this.f21012c != null) {
            return;
        }
        final Dialog dialog = new Dialog(context, yg.j.f54501d);
        dp.a c10 = dp.a.c(LayoutInflater.from(dialog.getContext()));
        Intrinsics.checkNotNullExpressionValue(c10, "inflate(...)");
        dialog.setContentView(c10.getRoot());
        c10.f22275c.setTitle("Sandbox options");
        c10.f22275c.setNavigationIcon(jp.l.f32326u);
        c10.f22275c.setNavigationOnClickListener(new View.OnClickListener() { // from class: cp.m
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                p.i(dialog, view);
            }
        });
        c10.f22274b.setChecked(iVar.e());
        c10.f22274b.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() { // from class: cp.n
            @Override // android.widget.CompoundButton.OnCheckedChangeListener
            public final void onCheckedChanged(CompoundButton compoundButton, boolean z10) {
                p.j(i.this, compoundButton, z10);
            }
        });
        Window window = dialog.getWindow();
        if (window != null) {
            window.setBackgroundDrawable(null);
        }
        dialog.setOnDismissListener(new DialogInterface.OnDismissListener() { // from class: cp.o
            @Override // android.content.DialogInterface.OnDismissListener
            public final void onDismiss(DialogInterface dialogInterface) {
                p.k(p.this, dialogInterface);
            }
        });
        this.f21012c = dialog;
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
        pVar.f21012c = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m(i iVar, dp.b bVar, View view) {
        iVar.c().invoke();
        String a10 = c.f20980d.a((c.b) iVar.a().invoke());
        Toast.makeText(bVar.f22278c.getRootView().getContext(), "Setting the debug flag to: " + a10, 0).show();
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
        FloatingActionButton floatingActionButton = pVar.f21011b.f22278c;
        Intrinsics.checkNotNullExpressionValue(floatingActionButton, "floatingActionButton");
        ViewGroup.LayoutParams layoutParams = floatingActionButton.getLayoutParams();
        if (layoutParams != null) {
            CoordinatorLayout.f fVar = (CoordinatorLayout.f) layoutParams;
            ((ViewGroup.MarginLayoutParams) fVar).bottomMargin = (int) (g10.f3153d + jp.h.c(16.0d));
            floatingActionButton.setLayoutParams(fVar);
            return Unit.f33282a;
        }
        throw new NullPointerException("null cannot be cast to non-null type androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams");
    }

    @Override // vm.k
    /* renamed from: l */
    public void a(final i rendering, a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        final dp.b bVar = this.f21011b;
        final Context context = bVar.getRoot().getContext();
        bVar.f22278c.setOnClickListener(new View.OnClickListener() { // from class: cp.j
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                p.m(i.this, bVar, view);
            }
        });
        bVar.f22278c.setOnLongClickListener(new View.OnLongClickListener() { // from class: cp.k
            @Override // android.view.View.OnLongClickListener
            public final boolean onLongClick(View view) {
                boolean n10;
                n10 = p.n(p.this, rendering, context, view);
                return n10;
            }
        });
        FloatingActionButton floatingActionButton = bVar.f22278c;
        Intrinsics.checkNotNullExpressionValue(floatingActionButton, "floatingActionButton");
        tp.f.g(floatingActionButton, new Function1() { // from class: cp.l
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit o10;
                o10 = p.o(p.this, (WindowInsetsCompat) obj);
                return o10;
            }
        });
        bVar.f22277b.c(rendering.b(), viewEnvironment);
    }
}
