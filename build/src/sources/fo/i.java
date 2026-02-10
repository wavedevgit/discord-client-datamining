package fo;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.os.Parcel;
import android.os.Parcelable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import en.k;
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
public final class i implements en.b, Parcelable {
    @NotNull
    public static final Parcelable.Creator<i> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final eq.g f22842d;

    /* renamed from: e  reason: collision with root package name */
    private final List f22843e;

    /* renamed from: i  reason: collision with root package name */
    private final aq.a f22844i;

    /* renamed from: o  reason: collision with root package name */
    private final Function0 f22845o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f22846p;

    /* renamed from: q  reason: collision with root package name */
    private final en.c0 f22847q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final i createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            eq.g gVar = (eq.g) parcel.readParcelable(i.class.getClassLoader());
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(parcel.readSerializable());
            }
            return new i(gVar, arrayList, (aq.a) parcel.readParcelable(i.class.getClassLoader()), (Function0) parcel.readSerializable(), (Function0) parcel.readSerializable());
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
        public static final b f22848d = new b();

        public b() {
            super(3, up.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepScreenBinding;", 0);
        }

        public final up.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return up.b.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ eq.g f22849d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f22850e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f22851i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function4 f22852o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements en.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ eq.g f22853b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ up.b f22854c;

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function4 f22855d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ eq.h f22856e;

            public a(eq.g gVar, up.b bVar, Function4 function4, eq.h hVar) {
                this.f22853b = gVar;
                this.f22854c = bVar;
                this.f22855d = function4;
                this.f22856e = hVar;
            }

            @Override // en.k
            public final void a(Object rendering, en.a0 viewEnvironment) {
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                Integer d10 = this.f22853b.d();
                if (d10 != null) {
                    up.b bVar = this.f22854c;
                    int intValue = d10.intValue();
                    bVar.getRoot().setBackgroundColor(intValue);
                    bq.c.a(viewEnvironment, intValue);
                }
                eq.g gVar = this.f22853b;
                Context context = this.f22854c.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                Drawable a10 = gVar.a(context);
                if (a10 != null) {
                    up.b bVar2 = this.f22854c;
                    bVar2.getRoot().setBackground(a10);
                    bVar2.f51749d.setBackgroundColor(0);
                }
                Function4 function4 = this.f22855d;
                up.b bVar3 = this.f22854c;
                Intrinsics.checkNotNull(bVar3);
                function4.invoke(bVar3, rendering, viewEnvironment, this.f22856e.c().a());
            }
        }

        public c(eq.g gVar, Function2 function2, boolean z10, Function4 function4) {
            this.f22849d = gVar;
            this.f22850e = function2;
            this.f22851i = z10;
            this.f22852o = function4;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final en.k invoke(up.b binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new a(this.f22849d, binding, this.f22852o, eq.m.f22078a.l(binding, this.f22849d, this.f22850e, this.f22851i));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class d extends FunctionReferenceImpl implements Function4 {
        d(Object obj) {
            super(4, obj, i.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepScreenBinding;Lcom/withpersona/sdk2/inquiry/document/DocumentInstructionsView;Lcom/squareup/workflow1/ui/ViewEnvironment;Ljava/util/Map;)V", 0);
        }

        public final void a(up.b p02, i p12, en.a0 p22, Map p32) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            Intrinsics.checkNotNullParameter(p22, "p2");
            Intrinsics.checkNotNullParameter(p32, "p3");
            ((i) this.receiver).h(p02, p12, p22, p32);
        }

        @Override // kotlin.jvm.functions.Function4
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
            a((up.b) obj, (i) obj2, (en.a0) obj3, (Map) obj4);
            return Unit.f31765a;
        }
    }

    public i(eq.g uiScreen, List componentNamesToActions, aq.a navigationState, Function0 onBack, Function0 onCancel) {
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        Intrinsics.checkNotNullParameter(componentNamesToActions, "componentNamesToActions");
        Intrinsics.checkNotNullParameter(navigationState, "navigationState");
        Intrinsics.checkNotNullParameter(onBack, "onBack");
        Intrinsics.checkNotNullParameter(onCancel, "onCancel");
        this.f22842d = uiScreen;
        this.f22843e = componentNamesToActions;
        this.f22844i = navigationState;
        this.f22845o = onBack;
        this.f22846p = onCancel;
        eq.m mVar = eq.m.f22078a;
        Function2 function2 = new Function2() { // from class: fo.e
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit o10;
                o10 = i.o((up.b) obj, (Map) obj2);
                return o10;
            }
        };
        d dVar = new d(this);
        k.a aVar = en.k.f21834a;
        this.f22847q = new en.z(Reflection.getOrCreateKotlinClass(i.class), b.f22848d, new c(uiScreen, function2, true, dVar));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void h(up.b bVar, final i iVar, en.a0 a0Var, Map map) {
        for (Pair pair : this.f22843e) {
            final Function1 function1 = (Function1) pair.d();
            final eq.a aVar = (eq.a) map.get((String) pair.c());
            if (aVar != null) {
                aVar.d().setOnClickListener(new View.OnClickListener() { // from class: fo.f
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        i.i(Function1.this, aVar, view);
                    }
                });
            }
        }
        aq.a aVar2 = iVar.f22844i;
        Function0 function0 = new Function0() { // from class: fo.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = i.j(i.this);
                return j10;
            }
        };
        Function0 function02 = new Function0() { // from class: fo.h
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l10;
                l10 = i.l(i.this);
                return l10;
            }
        };
        Pi2NavigationBar navigationBar = bVar.f51750e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = bVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        aq.e.b(aVar2, function0, function02, navigationBar, root);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(Function1 function1, eq.a aVar, View view) {
        function1.invoke(aVar.c());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(i iVar) {
        iVar.f22845o.invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(i iVar) {
        iVar.f22846p.invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(up.b binding, Map map) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(map, "<unused var>");
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        cq.f.d(root, false, false, false, false, 15, null);
        return Unit.f31765a;
    }

    @Override // en.b
    public en.c0 a() {
        return this.f22847q;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeParcelable(this.f22842d, i10);
        List<Serializable> list = this.f22843e;
        dest.writeInt(list.size());
        for (Serializable serializable : list) {
            dest.writeSerializable(serializable);
        }
        dest.writeParcelable(this.f22844i, i10);
        dest.writeSerializable((Serializable) this.f22845o);
        dest.writeSerializable((Serializable) this.f22846p);
    }
}
