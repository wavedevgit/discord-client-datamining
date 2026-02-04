package yn;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.os.Parcel;
import android.os.Parcelable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import org.jetbrains.annotations.NotNull;
import ym.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements ym.b, Parcelable {
    @NotNull
    public static final Parcelable.Creator<i> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final yp.g f54795d;

    /* renamed from: e  reason: collision with root package name */
    private final List f54796e;

    /* renamed from: i  reason: collision with root package name */
    private final up.a f54797i;

    /* renamed from: o  reason: collision with root package name */
    private final Function0 f54798o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f54799p;

    /* renamed from: q  reason: collision with root package name */
    private final ym.c0 f54800q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final i createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            yp.g gVar = (yp.g) parcel.readParcelable(i.class.getClassLoader());
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(parcel.readSerializable());
            }
            return new i(gVar, arrayList, (up.a) parcel.readParcelable(i.class.getClassLoader()), (Function0) parcel.readSerializable(), (Function0) parcel.readSerializable());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final i[] newArray(int i10) {
            return new i[i10];
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f54801d = new b();

        public b() {
            super(3, op.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepScreenBinding;", 0);
        }

        public final op.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return op.b.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ yp.g f54802d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f54803e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f54804i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function4 f54805o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements ym.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ yp.g f54806b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ op.b f54807c;

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function4 f54808d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ yp.h f54809e;

            public a(yp.g gVar, op.b bVar, Function4 function4, yp.h hVar) {
                this.f54806b = gVar;
                this.f54807c = bVar;
                this.f54808d = function4;
                this.f54809e = hVar;
            }

            @Override // ym.k
            public final void a(Object rendering, ym.a0 viewEnvironment) {
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                Integer d10 = this.f54806b.d();
                if (d10 != null) {
                    op.b bVar = this.f54807c;
                    int intValue = d10.intValue();
                    bVar.getRoot().setBackgroundColor(intValue);
                    vp.c.a(viewEnvironment, intValue);
                }
                yp.g gVar = this.f54806b;
                Context context = this.f54807c.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                Drawable a10 = gVar.a(context);
                if (a10 != null) {
                    op.b bVar2 = this.f54807c;
                    bVar2.getRoot().setBackground(a10);
                    bVar2.f44393d.setBackgroundColor(0);
                }
                Function4 function4 = this.f54808d;
                op.b bVar3 = this.f54807c;
                Intrinsics.checkNotNull(bVar3);
                function4.invoke(bVar3, rendering, viewEnvironment, this.f54809e.c().a());
            }
        }

        public c(yp.g gVar, Function2 function2, boolean z10, Function4 function4) {
            this.f54802d = gVar;
            this.f54803e = function2;
            this.f54804i = z10;
            this.f54805o = function4;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final ym.k invoke(op.b binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new a(this.f54802d, binding, this.f54805o, yp.m.f55269a.l(binding, this.f54802d, this.f54803e, this.f54804i));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class d extends FunctionReferenceImpl implements Function4 {
        d(Object obj) {
            super(4, obj, i.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepScreenBinding;Lcom/withpersona/sdk2/inquiry/document/DocumentInstructionsView;Lcom/squareup/workflow1/ui/ViewEnvironment;Ljava/util/Map;)V", 0);
        }

        public final void a(op.b p02, i p12, ym.a0 p22, Map p32) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            Intrinsics.checkNotNullParameter(p22, "p2");
            Intrinsics.checkNotNullParameter(p32, "p3");
            ((i) this.receiver).g(p02, p12, p22, p32);
        }

        @Override // kotlin.jvm.functions.Function4
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
            a((op.b) obj, (i) obj2, (ym.a0) obj3, (Map) obj4);
            return Unit.f32464a;
        }
    }

    public i(yp.g uiScreen, List componentNamesToActions, up.a navigationState, Function0 onBack, Function0 onCancel) {
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        Intrinsics.checkNotNullParameter(componentNamesToActions, "componentNamesToActions");
        Intrinsics.checkNotNullParameter(navigationState, "navigationState");
        Intrinsics.checkNotNullParameter(onBack, "onBack");
        Intrinsics.checkNotNullParameter(onCancel, "onCancel");
        this.f54795d = uiScreen;
        this.f54796e = componentNamesToActions;
        this.f54797i = navigationState;
        this.f54798o = onBack;
        this.f54799p = onCancel;
        yp.m mVar = yp.m.f55269a;
        Function2 function2 = new Function2() { // from class: yn.e
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit m10;
                m10 = i.m((op.b) obj, (Map) obj2);
                return m10;
            }
        };
        d dVar = new d(this);
        k.a aVar = ym.k.f54645a;
        this.f54800q = new ym.z(Reflection.getOrCreateKotlinClass(i.class), b.f54801d, new c(uiScreen, function2, true, dVar));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void g(op.b bVar, final i iVar, ym.a0 a0Var, Map map) {
        for (Pair pair : this.f54796e) {
            final Function1 function1 = (Function1) pair.d();
            final yp.a aVar = (yp.a) map.get((String) pair.c());
            if (aVar != null) {
                aVar.d().setOnClickListener(new View.OnClickListener() { // from class: yn.f
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        i.i(Function1.this, aVar, view);
                    }
                });
            }
        }
        up.a aVar2 = iVar.f54797i;
        Function0 function0 = new Function0() { // from class: yn.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = i.j(i.this);
                return j10;
            }
        };
        Function0 function02 = new Function0() { // from class: yn.h
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = i.k(i.this);
                return k10;
            }
        };
        Pi2NavigationBar navigationBar = bVar.f44394e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = bVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        up.e.b(aVar2, function0, function02, navigationBar, root);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(Function1 function1, yp.a aVar, View view) {
        function1.invoke(aVar.c());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(i iVar) {
        iVar.f54798o.invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(i iVar) {
        iVar.f54799p.invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(op.b binding, Map map) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(map, "<unused var>");
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        wp.f.d(root, false, false, false, false, 15, null);
        return Unit.f32464a;
    }

    @Override // ym.b
    public ym.c0 a() {
        return this.f54800q;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeParcelable(this.f54795d, i10);
        List<Serializable> list = this.f54796e;
        dest.writeInt(list.size());
        for (Serializable serializable : list) {
            dest.writeSerializable(serializable);
        }
        dest.writeParcelable(this.f54797i, i10);
        dest.writeSerializable((Serializable) this.f54798o);
        dest.writeSerializable((Serializable) this.f54799p);
    }
}
