package fp;

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
import fp.c;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import ym.a0;
import ym.c0;
import ym.k;
import ym.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements ym.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f24357d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final gp.b f24358b;

    /* renamed from: c  reason: collision with root package name */
    private Dialog f24359c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ c0 f24360a;

        /* renamed from: fp.p$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0324a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0324a f24361d = new C0324a();

            C0324a() {
                super(3, gp.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/sandbox/databinding/Pi2SandboxOverlayBinding;", 0);
            }

            public final gp.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return gp.b.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f24362d = new b();

            b() {
                super(1, p.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/sandbox/databinding/Pi2SandboxOverlayBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final p invoke(gp.b p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new p(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // ym.c0
        /* renamed from: b */
        public View a(i initialRendering, a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f24360a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // ym.c0
        public KClass getType() {
            return this.f24360a.getType();
        }

        private a() {
            k.a aVar = ym.k.f54645a;
            this.f24360a = new z(Reflection.getOrCreateKotlinClass(i.class), C0324a.f24361d, b.f24362d);
        }
    }

    public p(gp.b binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f24358b = binding;
    }

    private final void h(final i iVar, Context context) {
        if (this.f24359c != null) {
            return;
        }
        final Dialog dialog = new Dialog(context, yg.j.f54247d);
        gp.a c10 = gp.a.c(LayoutInflater.from(dialog.getContext()));
        Intrinsics.checkNotNullExpressionValue(c10, "inflate(...)");
        dialog.setContentView(c10.getRoot());
        c10.f26481c.setTitle("Sandbox options");
        c10.f26481c.setNavigationIcon(mp.l.f38988u);
        c10.f26481c.setNavigationOnClickListener(new View.OnClickListener() { // from class: fp.m
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                p.i(dialog, view);
            }
        });
        c10.f26480b.setChecked(iVar.e());
        c10.f26480b.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() { // from class: fp.n
            @Override // android.widget.CompoundButton.OnCheckedChangeListener
            public final void onCheckedChanged(CompoundButton compoundButton, boolean z10) {
                p.j(i.this, compoundButton, z10);
            }
        });
        Window window = dialog.getWindow();
        if (window != null) {
            window.setBackgroundDrawable(null);
        }
        dialog.setOnDismissListener(new DialogInterface.OnDismissListener() { // from class: fp.o
            @Override // android.content.DialogInterface.OnDismissListener
            public final void onDismiss(DialogInterface dialogInterface) {
                p.k(p.this, dialogInterface);
            }
        });
        this.f24359c = dialog;
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
        pVar.f24359c = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m(i iVar, gp.b bVar, View view) {
        iVar.c().invoke();
        String a10 = c.f24327d.a((c.b) iVar.a().invoke());
        Toast.makeText(bVar.f26484c.getRootView().getContext(), "Setting the debug flag to: " + a10, 0).show();
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
        FloatingActionButton floatingActionButton = pVar.f24358b.f26484c;
        Intrinsics.checkNotNullExpressionValue(floatingActionButton, "floatingActionButton");
        ViewGroup.LayoutParams layoutParams = floatingActionButton.getLayoutParams();
        if (layoutParams != null) {
            CoordinatorLayout.f fVar = (CoordinatorLayout.f) layoutParams;
            ((ViewGroup.MarginLayoutParams) fVar).bottomMargin = (int) (g10.f3166d + mp.h.c(16.0d));
            floatingActionButton.setLayoutParams(fVar);
            return Unit.f32464a;
        }
        throw new NullPointerException("null cannot be cast to non-null type androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams");
    }

    @Override // ym.k
    /* renamed from: l */
    public void a(final i rendering, a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        final gp.b bVar = this.f24358b;
        final Context context = bVar.getRoot().getContext();
        bVar.f26484c.setOnClickListener(new View.OnClickListener() { // from class: fp.j
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                p.m(i.this, bVar, view);
            }
        });
        bVar.f26484c.setOnLongClickListener(new View.OnLongClickListener() { // from class: fp.k
            @Override // android.view.View.OnLongClickListener
            public final boolean onLongClick(View view) {
                boolean n10;
                n10 = p.n(p.this, rendering, context, view);
                return n10;
            }
        });
        FloatingActionButton floatingActionButton = bVar.f26484c;
        Intrinsics.checkNotNullExpressionValue(floatingActionButton, "floatingActionButton");
        wp.f.g(floatingActionButton, new Function1() { // from class: fp.l
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit o10;
                o10 = p.o(p.this, (WindowInsetsCompat) obj);
                return o10;
            }
        });
        bVar.f26483b.c(rendering.b(), viewEnvironment);
    }
}
