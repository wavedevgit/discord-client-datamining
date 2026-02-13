package oo;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.os.Parcel;
import android.os.Parcelable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import gn.k;
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
public final class i implements gn.b, Parcelable {
    @NotNull
    public static final Parcelable.Creator<i> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final nq.g f41319d;

    /* renamed from: e  reason: collision with root package name */
    private final List f41320e;

    /* renamed from: i  reason: collision with root package name */
    private final jq.a f41321i;

    /* renamed from: o  reason: collision with root package name */
    private final Function0 f41322o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f41323p;

    /* renamed from: q  reason: collision with root package name */
    private final gn.c0 f41324q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final i createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            nq.g gVar = (nq.g) parcel.readParcelable(i.class.getClassLoader());
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(parcel.readSerializable());
            }
            return new i(gVar, arrayList, (jq.a) parcel.readParcelable(i.class.getClassLoader()), (Function0) parcel.readSerializable(), (Function0) parcel.readSerializable());
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
        public static final b f41325d = new b();

        public b() {
            super(3, dq.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepScreenBinding;", 0);
        }

        public final dq.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return dq.b.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ nq.g f41326d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f41327e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f41328i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function4 f41329o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements gn.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ nq.g f41330b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ dq.b f41331c;

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function4 f41332d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ nq.h f41333e;

            public a(nq.g gVar, dq.b bVar, Function4 function4, nq.h hVar) {
                this.f41330b = gVar;
                this.f41331c = bVar;
                this.f41332d = function4;
                this.f41333e = hVar;
            }

            @Override // gn.k
            public final void a(Object rendering, gn.a0 viewEnvironment) {
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                Integer d10 = this.f41330b.d();
                if (d10 != null) {
                    dq.b bVar = this.f41331c;
                    int intValue = d10.intValue();
                    bVar.getRoot().setBackgroundColor(intValue);
                    kq.c.a(viewEnvironment, intValue);
                }
                nq.g gVar = this.f41330b;
                Context context = this.f41331c.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                Drawable a10 = gVar.a(context);
                if (a10 != null) {
                    dq.b bVar2 = this.f41331c;
                    bVar2.getRoot().setBackground(a10);
                    bVar2.f21852d.setBackgroundColor(0);
                }
                Function4 function4 = this.f41332d;
                dq.b bVar3 = this.f41331c;
                Intrinsics.checkNotNull(bVar3);
                function4.invoke(bVar3, rendering, viewEnvironment, this.f41333e.c().a());
            }
        }

        public c(nq.g gVar, Function2 function2, boolean z10, Function4 function4) {
            this.f41326d = gVar;
            this.f41327e = function2;
            this.f41328i = z10;
            this.f41329o = function4;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final gn.k invoke(dq.b binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new a(this.f41326d, binding, this.f41329o, nq.m.f38923a.l(binding, this.f41326d, this.f41327e, this.f41328i));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class d extends FunctionReferenceImpl implements Function4 {
        d(Object obj) {
            super(4, obj, i.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepScreenBinding;Lcom/withpersona/sdk2/inquiry/document/DocumentInstructionsView;Lcom/squareup/workflow1/ui/ViewEnvironment;Ljava/util/Map;)V", 0);
        }

        public final void a(dq.b p02, i p12, gn.a0 p22, Map p32) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            Intrinsics.checkNotNullParameter(p22, "p2");
            Intrinsics.checkNotNullParameter(p32, "p3");
            ((i) this.receiver).g(p02, p12, p22, p32);
        }

        @Override // kotlin.jvm.functions.Function4
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
            a((dq.b) obj, (i) obj2, (gn.a0) obj3, (Map) obj4);
            return Unit.f32556a;
        }
    }

    public i(nq.g uiScreen, List componentNamesToActions, jq.a navigationState, Function0 onBack, Function0 onCancel) {
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        Intrinsics.checkNotNullParameter(componentNamesToActions, "componentNamesToActions");
        Intrinsics.checkNotNullParameter(navigationState, "navigationState");
        Intrinsics.checkNotNullParameter(onBack, "onBack");
        Intrinsics.checkNotNullParameter(onCancel, "onCancel");
        this.f41319d = uiScreen;
        this.f41320e = componentNamesToActions;
        this.f41321i = navigationState;
        this.f41322o = onBack;
        this.f41323p = onCancel;
        nq.m mVar = nq.m.f38923a;
        Function2 function2 = new Function2() { // from class: oo.e
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit l10;
                l10 = i.l((dq.b) obj, (Map) obj2);
                return l10;
            }
        };
        d dVar = new d(this);
        k.a aVar = gn.k.f25849a;
        this.f41324q = new gn.z(Reflection.getOrCreateKotlinClass(i.class), b.f41325d, new c(uiScreen, function2, true, dVar));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void g(dq.b bVar, final i iVar, gn.a0 a0Var, Map map) {
        for (Pair pair : this.f41320e) {
            final Function1 function1 = (Function1) pair.d();
            final nq.a aVar = (nq.a) map.get((String) pair.c());
            if (aVar != null) {
                aVar.d().setOnClickListener(new View.OnClickListener() { // from class: oo.f
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        i.i(Function1.this, aVar, view);
                    }
                });
            }
        }
        jq.a aVar2 = iVar.f41321i;
        Function0 function0 = new Function0() { // from class: oo.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = i.j(i.this);
                return j10;
            }
        };
        Function0 function02 = new Function0() { // from class: oo.h
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = i.k(i.this);
                return k10;
            }
        };
        Pi2NavigationBar navigationBar = bVar.f21853e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = bVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        jq.e.b(aVar2, function0, function02, navigationBar, root);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(Function1 function1, nq.a aVar, View view) {
        function1.invoke(aVar.c());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(i iVar) {
        iVar.f41322o.invoke();
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(i iVar) {
        iVar.f41323p.invoke();
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(dq.b binding, Map map) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(map, "<unused var>");
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        lq.f.d(root, false, false, false, false, 15, null);
        return Unit.f32556a;
    }

    @Override // gn.b
    public gn.c0 a() {
        return this.f41324q;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeParcelable(this.f41319d, i10);
        List<Serializable> list = this.f41320e;
        dest.writeInt(list.size());
        for (Serializable serializable : list) {
            dest.writeSerializable(serializable);
        }
        dest.writeParcelable(this.f41321i, i10);
        dest.writeSerializable((Serializable) this.f41322o);
        dest.writeSerializable((Serializable) this.f41323p);
    }
}
