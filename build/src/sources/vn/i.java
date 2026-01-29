package vn;

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
import vm.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements vm.b, Parcelable {
    @NotNull
    public static final Parcelable.Creator<i> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final vp.g f51417d;

    /* renamed from: e  reason: collision with root package name */
    private final List f51418e;

    /* renamed from: i  reason: collision with root package name */
    private final rp.a f51419i;

    /* renamed from: o  reason: collision with root package name */
    private final Function0 f51420o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f51421p;

    /* renamed from: q  reason: collision with root package name */
    private final vm.c0 f51422q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final i createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            vp.g gVar = (vp.g) parcel.readParcelable(i.class.getClassLoader());
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(parcel.readSerializable());
            }
            return new i(gVar, arrayList, (rp.a) parcel.readParcelable(i.class.getClassLoader()), (Function0) parcel.readSerializable(), (Function0) parcel.readSerializable());
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
        public static final b f51423d = new b();

        public b() {
            super(3, lp.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepScreenBinding;", 0);
        }

        public final lp.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return lp.b.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ vp.g f51424d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f51425e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f51426i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function4 f51427o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements vm.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ vp.g f51428b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ lp.b f51429c;

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function4 f51430d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ vp.h f51431e;

            public a(vp.g gVar, lp.b bVar, Function4 function4, vp.h hVar) {
                this.f51428b = gVar;
                this.f51429c = bVar;
                this.f51430d = function4;
                this.f51431e = hVar;
            }

            @Override // vm.k
            public final void a(Object rendering, vm.a0 viewEnvironment) {
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                Integer d10 = this.f51428b.d();
                if (d10 != null) {
                    lp.b bVar = this.f51429c;
                    int intValue = d10.intValue();
                    bVar.getRoot().setBackgroundColor(intValue);
                    sp.c.a(viewEnvironment, intValue);
                }
                vp.g gVar = this.f51428b;
                Context context = this.f51429c.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                Drawable a10 = gVar.a(context);
                if (a10 != null) {
                    lp.b bVar2 = this.f51429c;
                    bVar2.getRoot().setBackground(a10);
                    bVar2.f37413d.setBackgroundColor(0);
                }
                Function4 function4 = this.f51430d;
                lp.b bVar3 = this.f51429c;
                Intrinsics.checkNotNull(bVar3);
                function4.invoke(bVar3, rendering, viewEnvironment, this.f51431e.c().a());
            }
        }

        public c(vp.g gVar, Function2 function2, boolean z10, Function4 function4) {
            this.f51424d = gVar;
            this.f51425e = function2;
            this.f51426i = z10;
            this.f51427o = function4;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final vm.k invoke(lp.b binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new a(this.f51424d, binding, this.f51427o, vp.m.f51891a.l(binding, this.f51424d, this.f51425e, this.f51426i));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class d extends FunctionReferenceImpl implements Function4 {
        d(Object obj) {
            super(4, obj, i.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepScreenBinding;Lcom/withpersona/sdk2/inquiry/document/DocumentInstructionsView;Lcom/squareup/workflow1/ui/ViewEnvironment;Ljava/util/Map;)V", 0);
        }

        public final void a(lp.b p02, i p12, vm.a0 p22, Map p32) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            Intrinsics.checkNotNullParameter(p22, "p2");
            Intrinsics.checkNotNullParameter(p32, "p3");
            ((i) this.receiver).g(p02, p12, p22, p32);
        }

        @Override // kotlin.jvm.functions.Function4
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
            a((lp.b) obj, (i) obj2, (vm.a0) obj3, (Map) obj4);
            return Unit.f33282a;
        }
    }

    public i(vp.g uiScreen, List componentNamesToActions, rp.a navigationState, Function0 onBack, Function0 onCancel) {
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        Intrinsics.checkNotNullParameter(componentNamesToActions, "componentNamesToActions");
        Intrinsics.checkNotNullParameter(navigationState, "navigationState");
        Intrinsics.checkNotNullParameter(onBack, "onBack");
        Intrinsics.checkNotNullParameter(onCancel, "onCancel");
        this.f51417d = uiScreen;
        this.f51418e = componentNamesToActions;
        this.f51419i = navigationState;
        this.f51420o = onBack;
        this.f51421p = onCancel;
        vp.m mVar = vp.m.f51891a;
        Function2 function2 = new Function2() { // from class: vn.e
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit m10;
                m10 = i.m((lp.b) obj, (Map) obj2);
                return m10;
            }
        };
        d dVar = new d(this);
        k.a aVar = vm.k.f51267a;
        this.f51422q = new vm.z(Reflection.getOrCreateKotlinClass(i.class), b.f51423d, new c(uiScreen, function2, true, dVar));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void g(lp.b bVar, final i iVar, vm.a0 a0Var, Map map) {
        for (Pair pair : this.f51418e) {
            final Function1 function1 = (Function1) pair.d();
            final vp.a aVar = (vp.a) map.get((String) pair.c());
            if (aVar != null) {
                aVar.d().setOnClickListener(new View.OnClickListener() { // from class: vn.f
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        i.i(Function1.this, aVar, view);
                    }
                });
            }
        }
        rp.a aVar2 = iVar.f51419i;
        Function0 function0 = new Function0() { // from class: vn.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = i.j(i.this);
                return j10;
            }
        };
        Function0 function02 = new Function0() { // from class: vn.h
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = i.k(i.this);
                return k10;
            }
        };
        Pi2NavigationBar navigationBar = bVar.f37414e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = bVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        rp.e.b(aVar2, function0, function02, navigationBar, root);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(Function1 function1, vp.a aVar, View view) {
        function1.invoke(aVar.c());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(i iVar) {
        iVar.f51420o.invoke();
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(i iVar) {
        iVar.f51421p.invoke();
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(lp.b binding, Map map) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(map, "<unused var>");
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        tp.f.d(root, false, false, false, false, 15, null);
        return Unit.f33282a;
    }

    @Override // vm.b
    public vm.c0 a() {
        return this.f51422q;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeParcelable(this.f51417d, i10);
        List<Serializable> list = this.f51418e;
        dest.writeInt(list.size());
        for (Serializable serializable : list) {
            dest.writeSerializable(serializable);
        }
        dest.writeParcelable(this.f51419i, i10);
        dest.writeSerializable((Serializable) this.f51420o);
        dest.writeSerializable((Serializable) this.f51421p);
    }
}
