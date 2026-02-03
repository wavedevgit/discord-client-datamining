package cn;

import android.content.Context;
import android.content.DialogInterface;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import androidx.appcompat.app.a;
import cn.e;
import cn.g;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import lr.p;
import ym.a0;
import ym.c0;
import ym.g0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends g {

    /* renamed from: q  reason: collision with root package name */
    public static final b f7340q = new b(null);

    /* renamed from: p  reason: collision with root package name */
    private final int f7341p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ a f7345a;

        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // ym.c0
        /* renamed from: b */
        public View a(d initialRendering, a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f7345a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // ym.c0
        public KClass getType() {
            return this.f7345a.getType();
        }

        private b() {
            this.f7345a = new a(0, 1, null);
        }
    }

    /* renamed from: cn.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0123c {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f7346a;

        static {
            int[] iArr = new int[e.a.values().length];
            iArr[e.a.POSITIVE.ordinal()] = 1;
            iArr[e.a.NEGATIVE.ordinal()] = 2;
            iArr[e.a.NEUTRAL.ordinal()] = 3;
            f7346a = iArr;
        }
    }

    public /* synthetic */ c(Context context, AttributeSet attributeSet, int i10, int i11, int i12, int i13, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i13 & 2) != 0 ? null : attributeSet, (i13 & 4) != 0 ? 0 : i10, (i13 & 8) != 0 ? 0 : i11, (i13 & 16) != 0 ? 0 : i12);
    }

    private final int h(e.a aVar) {
        int i10 = C0123c.f7346a[aVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return -3;
                }
                throw new p();
            }
            return -2;
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(e rendering, DialogInterface dialogInterface) {
        Intrinsics.checkNotNullParameter(rendering, "$rendering");
        rendering.d().invoke(e.b.C0124b.f7359a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(e rendering, e.a button, DialogInterface dialogInterface, int i10) {
        Intrinsics.checkNotNullParameter(rendering, "$rendering");
        Intrinsics.checkNotNullParameter(button, "$button");
        rendering.d().invoke(new e.b.a(button));
    }

    @Override // cn.g
    protected void d(g.a dialogRef) {
        Unit unit;
        Button k10;
        Intrinsics.checkNotNullParameter(dialogRef, "dialogRef");
        androidx.appcompat.app.a aVar = (androidx.appcompat.app.a) dialogRef.d();
        final e eVar = (e) dialogRef.f();
        int i10 = 0;
        if (eVar.b()) {
            aVar.setOnCancelListener(new DialogInterface.OnCancelListener() { // from class: cn.a
                @Override // android.content.DialogInterface.OnCancelListener
                public final void onCancel(DialogInterface dialogInterface) {
                    c.i(e.this, dialogInterface);
                }
            });
            aVar.setCancelable(true);
        } else {
            aVar.setCancelable(false);
        }
        e.a[] values = e.a.values();
        int length = values.length;
        while (i10 < length) {
            final e.a aVar2 = values[i10];
            i10++;
            String str = (String) eVar.a().get(aVar2);
            if (str == null) {
                unit = null;
            } else {
                aVar.n(h(aVar2), str, new DialogInterface.OnClickListener() { // from class: cn.b
                    @Override // android.content.DialogInterface.OnClickListener
                    public final void onClick(DialogInterface dialogInterface, int i11) {
                        c.j(e.this, aVar2, dialogInterface, i11);
                    }
                });
                unit = Unit.f32464a;
            }
            if (unit == null && (k10 = aVar.k(h(aVar2))) != null) {
                k10.setVisibility(4);
            }
        }
        aVar.o(eVar.c());
        aVar.setTitle(eVar.e());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // cn.g
    /* renamed from: g */
    public g.a b(e initialModalRendering, a0 initialViewEnvironment) {
        Intrinsics.checkNotNullParameter(initialModalRendering, "initialModalRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        androidx.appcompat.app.a create = new a.C0017a(getContext(), this.f7341p).create();
        Intrinsics.checkNotNullExpressionValue(create, "Builder(context, dialogThemeResId)\n      .create()");
        g.a aVar = new g.a(initialModalRendering, initialViewEnvironment, create, null, 8, null);
        d(aVar);
        return aVar;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(Context context, AttributeSet attributeSet, int i10, int i11, int i12) {
        super(context, attributeSet, i10, i11);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f7341p = i12;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final int f7342a;

        /* renamed from: b  reason: collision with root package name */
        private final /* synthetic */ ym.f f7343b;

        /* renamed from: cn.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0121a extends Lambda implements Function4 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ int f7344d;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: cn.c$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public /* synthetic */ class C0122a extends FunctionReferenceImpl implements Function2 {
                C0122a(Object obj) {
                    super(2, obj, c.class, "update", "update(Lcom/squareup/workflow1/ui/modal/HasModals;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
                }

                public final void a(f p02, a0 p12) {
                    Intrinsics.checkNotNullParameter(p02, "p0");
                    Intrinsics.checkNotNullParameter(p12, "p1");
                    ((c) this.receiver).c(p02, p12);
                }

                @Override // kotlin.jvm.functions.Function2
                public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                    a((f) obj, (a0) obj2);
                    return Unit.f32464a;
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0121a(int i10) {
                super(4);
                this.f7344d = i10;
            }

            @Override // kotlin.jvm.functions.Function4
            /* renamed from: a */
            public final View invoke(d initialRendering, a0 initialEnv, Context context, ViewGroup viewGroup) {
                Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
                Intrinsics.checkNotNullParameter(initialEnv, "initialEnv");
                Intrinsics.checkNotNullParameter(context, "context");
                c cVar = new c(context, null, 0, 0, this.f7344d, 14, null);
                cVar.setId(bn.a.f6642b);
                cVar.setLayoutParams(new ViewGroup.LayoutParams(-1, -1));
                g0.a(cVar, initialRendering, initialEnv, new C0122a(cVar));
                return cVar;
            }
        }

        public a(int i10) {
            this.f7342a = i10;
            this.f7343b = new ym.f(Reflection.getOrCreateKotlinClass(d.class), new C0121a(i10));
        }

        @Override // ym.c0
        /* renamed from: b */
        public View a(d initialRendering, a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f7343b.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // ym.c0
        public KClass getType() {
            return this.f7343b.getType();
        }

        public /* synthetic */ a(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? 0 : i10);
        }
    }
}
