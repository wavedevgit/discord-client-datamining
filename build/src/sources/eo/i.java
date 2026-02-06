package eo;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.os.Parcel;
import android.os.Parcelable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import dn.k;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements dn.b, Parcelable {
    @NotNull
    public static final Parcelable.Creator<i> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final dq.g f21766d;

    /* renamed from: e  reason: collision with root package name */
    private final List f21767e;

    /* renamed from: i  reason: collision with root package name */
    private final zp.a f21768i;

    /* renamed from: o  reason: collision with root package name */
    private final Function0 f21769o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f21770p;

    /* renamed from: q  reason: collision with root package name */
    private final dn.c0 f21771q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final i createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            dq.g gVar = (dq.g) parcel.readParcelable(i.class.getClassLoader());
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(parcel.readSerializable());
            }
            return new i(gVar, arrayList, (zp.a) parcel.readParcelable(i.class.getClassLoader()), (Function0) parcel.readSerializable(), (Function0) parcel.readSerializable());
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
        public static final b f21772d = new b();

        public b() {
            super(3, tp.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepScreenBinding;", 0);
        }

        public final tp.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return tp.b.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ dq.g f21773d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f21774e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f21775i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function4 f21776o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements dn.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ dq.g f21777b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ tp.b f21778c;

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function4 f21779d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ dq.h f21780e;

            public a(dq.g gVar, tp.b bVar, Function4 function4, dq.h hVar) {
                this.f21777b = gVar;
                this.f21778c = bVar;
                this.f21779d = function4;
                this.f21780e = hVar;
            }

            @Override // dn.k
            public final void a(Object rendering, dn.a0 viewEnvironment) {
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                Integer d10 = this.f21777b.d();
                if (d10 != null) {
                    tp.b bVar = this.f21778c;
                    int intValue = d10.intValue();
                    bVar.getRoot().setBackgroundColor(intValue);
                    aq.c.a(viewEnvironment, intValue);
                }
                dq.g gVar = this.f21777b;
                Context context = this.f21778c.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                Drawable a10 = gVar.a(context);
                if (a10 != null) {
                    tp.b bVar2 = this.f21778c;
                    bVar2.getRoot().setBackground(a10);
                    bVar2.f50796d.setBackgroundColor(0);
                }
                Function4 function4 = this.f21779d;
                tp.b bVar3 = this.f21778c;
                Intrinsics.checkNotNull(bVar3);
                function4.invoke(bVar3, rendering, viewEnvironment, this.f21780e.c().a());
            }
        }

        public c(dq.g gVar, Function2 function2, boolean z10, Function4 function4) {
            this.f21773d = gVar;
            this.f21774e = function2;
            this.f21775i = z10;
            this.f21776o = function4;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final dn.k invoke(tp.b binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new a(this.f21773d, binding, this.f21776o, dq.m.f21130a.l(binding, this.f21773d, this.f21774e, this.f21775i));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class d extends FunctionReferenceImpl implements Function4 {
        d(Object obj) {
            super(4, obj, i.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepScreenBinding;Lcom/withpersona/sdk2/inquiry/document/DocumentInstructionsView;Lcom/squareup/workflow1/ui/ViewEnvironment;Ljava/util/Map;)V", 0);
        }

        public final void a(tp.b p02, i p12, dn.a0 p22, Map p32) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            Intrinsics.checkNotNullParameter(p22, "p2");
            Intrinsics.checkNotNullParameter(p32, "p3");
            ((i) this.receiver).h(p02, p12, p22, p32);
        }

        @Override // kotlin.jvm.functions.Function4
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
            a((tp.b) obj, (i) obj2, (dn.a0) obj3, (Map) obj4);
            return Unit.f32008a;
        }
    }

    public i(dq.g uiScreen, List componentNamesToActions, zp.a navigationState, Function0 onBack, Function0 onCancel) {
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        Intrinsics.checkNotNullParameter(componentNamesToActions, "componentNamesToActions");
        Intrinsics.checkNotNullParameter(navigationState, "navigationState");
        Intrinsics.checkNotNullParameter(onBack, "onBack");
        Intrinsics.checkNotNullParameter(onCancel, "onCancel");
        this.f21766d = uiScreen;
        this.f21767e = componentNamesToActions;
        this.f21768i = navigationState;
        this.f21769o = onBack;
        this.f21770p = onCancel;
        dq.m mVar = dq.m.f21130a;
        Function2 function2 = new Function2() { // from class: eo.e
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit o10;
                o10 = i.o((tp.b) obj, (Map) obj2);
                return o10;
            }
        };
        d dVar = new d(this);
        k.a aVar = dn.k.f20913a;
        this.f21771q = new dn.z(Reflection.getOrCreateKotlinClass(i.class), b.f21772d, new c(uiScreen, function2, true, dVar));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void h(tp.b bVar, final i iVar, dn.a0 a0Var, Map map) {
        for (Pair pair : this.f21767e) {
            final Function1 function1 = (Function1) pair.d();
            final dq.a aVar = (dq.a) map.get((String) pair.c());
            if (aVar != null) {
                aVar.d().setOnClickListener(new View.OnClickListener() { // from class: eo.f
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        i.i(Function1.this, aVar, view);
                    }
                });
            }
        }
        zp.a aVar2 = iVar.f21768i;
        Function0 function0 = new Function0() { // from class: eo.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = i.j(i.this);
                return j10;
            }
        };
        Function0 function02 = new Function0() { // from class: eo.h
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l10;
                l10 = i.l(i.this);
                return l10;
            }
        };
        Pi2NavigationBar navigationBar = bVar.f50797e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = bVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.e.b(aVar2, function0, function02, navigationBar, root);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(Function1 function1, dq.a aVar, View view) {
        function1.invoke(aVar.c());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(i iVar) {
        iVar.f21769o.invoke();
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(i iVar) {
        iVar.f21770p.invoke();
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(tp.b binding, Map map) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(map, "<unused var>");
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        bq.f.d(root, false, false, false, false, 15, null);
        return Unit.f32008a;
    }

    @Override // dn.b
    public dn.c0 a() {
        return this.f21771q;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeParcelable(this.f21766d, i10);
        List<Serializable> list = this.f21767e;
        dest.writeInt(list.size());
        for (Serializable serializable : list) {
            dest.writeSerializable(serializable);
        }
        dest.writeParcelable(this.f21768i, i10);
        dest.writeSerializable((Serializable) this.f21769o);
        dest.writeSerializable((Serializable) this.f21770p);
    }
}
