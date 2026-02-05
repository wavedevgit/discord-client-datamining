package fn;

import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.util.AttributeSet;
import android.view.KeyEvent;
import android.view.View;
import androidx.activity.OnBackPressedDispatcher;
import androidx.activity.z;
import bn.a0;
import bn.e0;
import bn.f0;
import bn.g0;
import fn.g;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j extends g {

    /* renamed from: p  reason: collision with root package name */
    public static final a f23194p = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f23195d = new b();

        b() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1172invoke();
            return Unit.f31988a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1172invoke() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final c f23196d = new c();

        c() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1173invoke();
            return Unit.f31988a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1173invoke() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean f(View view, DialogInterface dialogInterface, int i10, KeyEvent keyEvent) {
        OnBackPressedDispatcher onBackPressedDispatcher;
        Intrinsics.checkNotNullParameter(view, "$view");
        if (i10 == 4 && keyEvent.getAction() == 1) {
            Context context = view.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "view.context");
            z b10 = bn.e.b(context);
            if (b10 != null && (onBackPressedDispatcher = b10.getOnBackPressedDispatcher()) != null && onBackPressedDispatcher.j()) {
                onBackPressedDispatcher.l();
            }
            return true;
        }
        return false;
    }

    @Override // fn.g
    protected final g.a b(Object initialModalRendering, a0 initialViewEnvironment) {
        Intrinsics.checkNotNullParameter(initialModalRendering, "initialModalRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        bn.d dVar = new bn.d(initialModalRendering, false, b.f23195d, 2, null);
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "this.context");
        final View d10 = f0.d((e0) initialViewEnvironment.a(e0.f6544a), dVar, initialViewEnvironment, context, this, null, 16, null);
        g0.h(d10);
        Dialog g10 = g(d10);
        g10.setOnKeyListener(new DialogInterface.OnKeyListener() { // from class: fn.i
            @Override // android.content.DialogInterface.OnKeyListener
            public final boolean onKey(DialogInterface dialogInterface, int i10, KeyEvent keyEvent) {
                boolean f10;
                f10 = j.f(d10, dialogInterface, i10, keyEvent);
                return f10;
            }
        });
        return new g.a(initialModalRendering, initialViewEnvironment, g10, d10);
    }

    @Override // fn.g
    protected void d(g.a dialogRef) {
        Intrinsics.checkNotNullParameter(dialogRef, "dialogRef");
        bn.d dVar = new bn.d(dialogRef.f(), false, c.f23196d, 2, null);
        Object e10 = dialogRef.e();
        if (e10 != null) {
            g0.g((View) e10, dVar, dialogRef.h());
            return;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.View");
    }

    public abstract Dialog g(View view);
}
