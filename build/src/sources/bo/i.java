package bo;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.os.Parcel;
import android.os.Parcelable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import bn.k;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements bn.b, Parcelable {
    @NotNull
    public static final Parcelable.Creator<i> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final bq.g f6740d;

    /* renamed from: e  reason: collision with root package name */
    private final List f6741e;

    /* renamed from: i  reason: collision with root package name */
    private final xp.a f6742i;

    /* renamed from: o  reason: collision with root package name */
    private final Function0 f6743o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f6744p;

    /* renamed from: q  reason: collision with root package name */
    private final bn.c0 f6745q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final i createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            bq.g gVar = (bq.g) parcel.readParcelable(i.class.getClassLoader());
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(parcel.readSerializable());
            }
            return new i(gVar, arrayList, (xp.a) parcel.readParcelable(i.class.getClassLoader()), (Function0) parcel.readSerializable(), (Function0) parcel.readSerializable());
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
        public static final b f6746d = new b();

        public b() {
            super(3, rp.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepScreenBinding;", 0);
        }

        public final rp.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return rp.b.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ bq.g f6747d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f6748e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f6749i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function4 f6750o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements bn.k {

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ bq.g f6751b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ rp.b f6752c;

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function4 f6753d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ bq.h f6754e;

            public a(bq.g gVar, rp.b bVar, Function4 function4, bq.h hVar) {
                this.f6751b = gVar;
                this.f6752c = bVar;
                this.f6753d = function4;
                this.f6754e = hVar;
            }

            @Override // bn.k
            public final void a(Object rendering, bn.a0 viewEnvironment) {
                Intrinsics.checkNotNullParameter(rendering, "rendering");
                Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
                Integer d10 = this.f6751b.d();
                if (d10 != null) {
                    rp.b bVar = this.f6752c;
                    int intValue = d10.intValue();
                    bVar.getRoot().setBackgroundColor(intValue);
                    yp.c.a(viewEnvironment, intValue);
                }
                bq.g gVar = this.f6751b;
                Context context = this.f6752c.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                Drawable a10 = gVar.a(context);
                if (a10 != null) {
                    rp.b bVar2 = this.f6752c;
                    bVar2.getRoot().setBackground(a10);
                    bVar2.f48933d.setBackgroundColor(0);
                }
                Function4 function4 = this.f6753d;
                rp.b bVar3 = this.f6752c;
                Intrinsics.checkNotNull(bVar3);
                function4.invoke(bVar3, rendering, viewEnvironment, this.f6754e.c().a());
            }
        }

        public c(bq.g gVar, Function2 function2, boolean z10, Function4 function4) {
            this.f6747d = gVar;
            this.f6748e = function2;
            this.f6749i = z10;
            this.f6750o = function4;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final bn.k invoke(rp.b binding) {
            Intrinsics.checkNotNullParameter(binding, "binding");
            return new a(this.f6747d, binding, this.f6750o, bq.m.f7214a.l(binding, this.f6747d, this.f6748e, this.f6749i));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class d extends FunctionReferenceImpl implements Function4 {
        d(Object obj) {
            super(4, obj, i.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/shared/databinding/Pi2GenericUiStepScreenBinding;Lcom/withpersona/sdk2/inquiry/document/DocumentInstructionsView;Lcom/squareup/workflow1/ui/ViewEnvironment;Ljava/util/Map;)V", 0);
        }

        public final void a(rp.b p02, i p12, bn.a0 p22, Map p32) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            Intrinsics.checkNotNullParameter(p22, "p2");
            Intrinsics.checkNotNullParameter(p32, "p3");
            ((i) this.receiver).g(p02, p12, p22, p32);
        }

        @Override // kotlin.jvm.functions.Function4
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
            a((rp.b) obj, (i) obj2, (bn.a0) obj3, (Map) obj4);
            return Unit.f31988a;
        }
    }

    public i(bq.g uiScreen, List componentNamesToActions, xp.a navigationState, Function0 onBack, Function0 onCancel) {
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        Intrinsics.checkNotNullParameter(componentNamesToActions, "componentNamesToActions");
        Intrinsics.checkNotNullParameter(navigationState, "navigationState");
        Intrinsics.checkNotNullParameter(onBack, "onBack");
        Intrinsics.checkNotNullParameter(onCancel, "onCancel");
        this.f6740d = uiScreen;
        this.f6741e = componentNamesToActions;
        this.f6742i = navigationState;
        this.f6743o = onBack;
        this.f6744p = onCancel;
        bq.m mVar = bq.m.f7214a;
        Function2 function2 = new Function2() { // from class: bo.e
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit n10;
                n10 = i.n((rp.b) obj, (Map) obj2);
                return n10;
            }
        };
        d dVar = new d(this);
        k.a aVar = bn.k.f6590a;
        this.f6745q = new bn.z(Reflection.getOrCreateKotlinClass(i.class), b.f6746d, new c(uiScreen, function2, true, dVar));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void g(rp.b bVar, final i iVar, bn.a0 a0Var, Map map) {
        for (Pair pair : this.f6741e) {
            final Function1 function1 = (Function1) pair.d();
            final bq.a aVar = (bq.a) map.get((String) pair.c());
            if (aVar != null) {
                aVar.d().setOnClickListener(new View.OnClickListener() { // from class: bo.f
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        i.i(Function1.this, aVar, view);
                    }
                });
            }
        }
        xp.a aVar2 = iVar.f6742i;
        Function0 function0 = new Function0() { // from class: bo.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = i.j(i.this);
                return j10;
            }
        };
        Function0 function02 = new Function0() { // from class: bo.h
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l10;
                l10 = i.l(i.this);
                return l10;
            }
        };
        Pi2NavigationBar navigationBar = bVar.f48934e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = bVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        xp.e.b(aVar2, function0, function02, navigationBar, root);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(Function1 function1, bq.a aVar, View view) {
        function1.invoke(aVar.c());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(i iVar) {
        iVar.f6743o.invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(i iVar) {
        iVar.f6744p.invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(rp.b binding, Map map) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(map, "<unused var>");
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.f.d(root, false, false, false, false, 15, null);
        return Unit.f31988a;
    }

    @Override // bn.b
    public bn.c0 a() {
        return this.f6745q;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeParcelable(this.f6740d, i10);
        List<Serializable> list = this.f6741e;
        dest.writeInt(list.size());
        for (Serializable serializable : list) {
            dest.writeSerializable(serializable);
        }
        dest.writeParcelable(this.f6742i, i10);
        dest.writeSerializable((Serializable) this.f6743o);
        dest.writeSerializable((Serializable) this.f6744p);
    }
}
