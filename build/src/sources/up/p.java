package up;

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
import gn.a0;
import gn.c0;
import gn.k;
import gn.z;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import up.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements gn.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f50913d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final vp.b f50914b;

    /* renamed from: c  reason: collision with root package name */
    private Dialog f50915c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ c0 f50916a;

        /* renamed from: up.p$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0702a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0702a f50917d = new C0702a();

            C0702a() {
                super(3, vp.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/sandbox/databinding/Pi2SandboxOverlayBinding;", 0);
            }

            public final vp.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return vp.b.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f50918d = new b();

            b() {
                super(1, p.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/sandbox/databinding/Pi2SandboxOverlayBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final p invoke(vp.b p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new p(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // gn.c0
        /* renamed from: b */
        public View a(i initialRendering, a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f50916a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // gn.c0
        public KClass getType() {
            return this.f50916a.getType();
        }

        private a() {
            k.a aVar = gn.k.f25849a;
            this.f50916a = new z(Reflection.getOrCreateKotlinClass(i.class), C0702a.f50917d, b.f50918d);
        }
    }

    public p(vp.b binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f50914b = binding;
    }

    private final void h(final i iVar, Context context) {
        if (this.f50915c != null) {
            return;
        }
        final Dialog dialog = new Dialog(context, bh.k.f6931f);
        vp.a c10 = vp.a.c(LayoutInflater.from(dialog.getContext()));
        Intrinsics.checkNotNullExpressionValue(c10, "inflate(...)");
        dialog.setContentView(c10.getRoot());
        c10.f51739c.setTitle("Sandbox options");
        c10.f51739c.setNavigationIcon(bq.l.f7388u);
        c10.f51739c.setNavigationOnClickListener(new View.OnClickListener() { // from class: up.m
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                p.i(dialog, view);
            }
        });
        c10.f51738b.setChecked(iVar.e());
        c10.f51738b.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() { // from class: up.n
            @Override // android.widget.CompoundButton.OnCheckedChangeListener
            public final void onCheckedChanged(CompoundButton compoundButton, boolean z10) {
                p.j(i.this, compoundButton, z10);
            }
        });
        Window window = dialog.getWindow();
        if (window != null) {
            window.setBackgroundDrawable(null);
        }
        dialog.setOnDismissListener(new DialogInterface.OnDismissListener() { // from class: up.o
            @Override // android.content.DialogInterface.OnDismissListener
            public final void onDismiss(DialogInterface dialogInterface) {
                p.k(p.this, dialogInterface);
            }
        });
        this.f50915c = dialog;
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
        pVar.f50915c = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m(i iVar, vp.b bVar, View view) {
        iVar.c().invoke();
        String a10 = c.f50883d.a((c.b) iVar.a().invoke());
        Toast.makeText(bVar.f51742c.getRootView().getContext(), "Setting the debug flag to: " + a10, 0).show();
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
        FloatingActionButton floatingActionButton = pVar.f50914b.f51742c;
        Intrinsics.checkNotNullExpressionValue(floatingActionButton, "floatingActionButton");
        ViewGroup.LayoutParams layoutParams = floatingActionButton.getLayoutParams();
        if (layoutParams != null) {
            CoordinatorLayout.f fVar = (CoordinatorLayout.f) layoutParams;
            ((ViewGroup.MarginLayoutParams) fVar).bottomMargin = (int) (g10.f3307d + bq.h.c(16.0d));
            floatingActionButton.setLayoutParams(fVar);
            return Unit.f31988a;
        }
        throw new NullPointerException("null cannot be cast to non-null type androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams");
    }

    @Override // gn.k
    /* renamed from: l */
    public void a(final i rendering, a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        final vp.b bVar = this.f50914b;
        final Context context = bVar.getRoot().getContext();
        bVar.f51742c.setOnClickListener(new View.OnClickListener() { // from class: up.j
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                p.m(i.this, bVar, view);
            }
        });
        bVar.f51742c.setOnLongClickListener(new View.OnLongClickListener() { // from class: up.k
            @Override // android.view.View.OnLongClickListener
            public final boolean onLongClick(View view) {
                boolean n10;
                n10 = p.n(p.this, rendering, context, view);
                return n10;
            }
        });
        FloatingActionButton floatingActionButton = bVar.f51742c;
        Intrinsics.checkNotNullExpressionValue(floatingActionButton, "floatingActionButton");
        lq.f.g(floatingActionButton, new Function1() { // from class: up.l
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit o10;
                o10 = p.o(p.this, (WindowInsetsCompat) obj);
                return o10;
            }
        });
        bVar.f51741b.c(rendering.b(), viewEnvironment);
    }
}
