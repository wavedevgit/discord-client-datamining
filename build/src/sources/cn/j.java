package cn;

import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.util.AttributeSet;
import android.view.KeyEvent;
import android.view.View;
import androidx.activity.OnBackPressedDispatcher;
import androidx.activity.z;
import cn.g;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import ym.a0;
import ym.e0;
import ym.f0;
import ym.g0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j extends g {

    /* renamed from: p  reason: collision with root package name */
    public static final a f7380p = new a(null);

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
        public static final b f7381d = new b();

        b() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m207invoke();
            return Unit.f32464a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m207invoke() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final c f7382d = new c();

        c() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m208invoke();
            return Unit.f32464a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m208invoke() {
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
            z b10 = ym.e.b(context);
            if (b10 != null && (onBackPressedDispatcher = b10.getOnBackPressedDispatcher()) != null && onBackPressedDispatcher.j()) {
                onBackPressedDispatcher.l();
            }
            return true;
        }
        return false;
    }

    @Override // cn.g
    protected final g.a b(Object initialModalRendering, a0 initialViewEnvironment) {
        Intrinsics.checkNotNullParameter(initialModalRendering, "initialModalRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        ym.d dVar = new ym.d(initialModalRendering, false, b.f7381d, 2, null);
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "this.context");
        final View d10 = f0.d((e0) initialViewEnvironment.a(e0.f54602a), dVar, initialViewEnvironment, context, this, null, 16, null);
        g0.h(d10);
        Dialog g10 = g(d10);
        g10.setOnKeyListener(new DialogInterface.OnKeyListener() { // from class: cn.i
            @Override // android.content.DialogInterface.OnKeyListener
            public final boolean onKey(DialogInterface dialogInterface, int i10, KeyEvent keyEvent) {
                boolean f10;
                f10 = j.f(d10, dialogInterface, i10, keyEvent);
                return f10;
            }
        });
        return new g.a(initialModalRendering, initialViewEnvironment, g10, d10);
    }

    @Override // cn.g
    protected void d(g.a dialogRef) {
        Intrinsics.checkNotNullParameter(dialogRef, "dialogRef");
        ym.d dVar = new ym.d(dialogRef.f(), false, c.f7382d, 2, null);
        Object e10 = dialogRef.e();
        if (e10 != null) {
            g0.g((View) e10, dVar, dialogRef.h());
            return;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.View");
    }

    public abstract Dialog g(View view);
}
