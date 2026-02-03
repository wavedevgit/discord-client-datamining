package mp;

import android.view.LayoutInflater;
import android.view.ViewGroup;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.b;
import androidx.recyclerview.widget.e;
import androidx.viewbinding.ViewBinding;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a */
    private final Function2 f38945a;

    /* renamed from: b */
    private final Function2 f38946b;

    /* renamed from: c */
    private final Function2 f38947c;

    /* renamed from: d */
    private RecyclerView.Adapter f38948d;

    /* renamed from: e */
    private final androidx.recyclerview.widget.c f38949e;

    /* renamed from: f */
    private final List f38950f;

    /* renamed from: g */
    private final Map f38951g;

    /* renamed from: h */
    private final Map f38952h;

    /* renamed from: i */
    private final d0 f38953i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Function2 {

        /* renamed from: d */
        public static final a f38954d = new a();

        a() {
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: a */
        public final Void invoke(Object old, Object obj) {
            Intrinsics.checkNotNullParameter(old, "old");
            Intrinsics.checkNotNullParameter(obj, "new");
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a */
        private final int f38955a;

        /* renamed from: b */
        private final KClass f38956b;

        /* renamed from: c */
        private final Function3 f38957c;

        /* renamed from: d */
        private final Function3 f38958d;

        /* renamed from: e */
        private final Function1 f38959e;

        public b(int i10, KClass viewBindingClass, Function3 inflateFn, Function3 bindViewHolder, Function1 function1) {
            Intrinsics.checkNotNullParameter(viewBindingClass, "viewBindingClass");
            Intrinsics.checkNotNullParameter(inflateFn, "inflateFn");
            Intrinsics.checkNotNullParameter(bindViewHolder, "bindViewHolder");
            this.f38955a = i10;
            this.f38956b = viewBindingClass;
            this.f38957c = inflateFn;
            this.f38958d = bindViewHolder;
            this.f38959e = function1;
        }

        public final Function3 a() {
            return this.f38958d;
        }

        public final Function3 b() {
            return this.f38957c;
        }

        public final Function1 c() {
            return this.f38959e;
        }

        public final int d() {
            return this.f38955a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f38955a == bVar.f38955a && Intrinsics.areEqual(this.f38956b, bVar.f38956b) && Intrinsics.areEqual(this.f38957c, bVar.f38957c) && Intrinsics.areEqual(this.f38958d, bVar.f38958d) && Intrinsics.areEqual(this.f38959e, bVar.f38959e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((Integer.hashCode(this.f38955a) * 31) + this.f38956b.hashCode()) * 31) + this.f38957c.hashCode()) * 31) + this.f38958d.hashCode()) * 31;
            Function1 function1 = this.f38959e;
            if (function1 == null) {
                hashCode = 0;
            } else {
                hashCode = function1.hashCode();
            }
            return hashCode2 + hashCode;
        }

        public String toString() {
            int i10 = this.f38955a;
            KClass kClass = this.f38956b;
            Function3 function3 = this.f38957c;
            Function3 function32 = this.f38958d;
            Function1 function1 = this.f38959e;
            return "ItemInfo(viewType=" + i10 + ", viewBindingClass=" + kClass + ", inflateFn=" + function3 + ", bindViewHolder=" + function32 + ", onViewCreated=" + function1 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements androidx.recyclerview.widget.m {
        c() {
            e.this = r1;
        }

        @Override // androidx.recyclerview.widget.m
        public void a(int i10, int i11) {
            RecyclerView.Adapter adapter = e.this.f38948d;
            if (adapter != null) {
                adapter.notifyItemRangeInserted(i10, i11);
            }
        }

        @Override // androidx.recyclerview.widget.m
        public void b(int i10, int i11) {
            RecyclerView.Adapter adapter = e.this.f38948d;
            if (adapter != null) {
                adapter.notifyItemRangeRemoved(i10, i11);
            }
        }

        @Override // androidx.recyclerview.widget.m
        public void c(int i10, int i11, Object obj) {
            RecyclerView.Adapter adapter = e.this.f38948d;
            if (adapter != null) {
                adapter.notifyItemRangeChanged(i10, i11, obj);
            }
        }

        @Override // androidx.recyclerview.widget.m
        public void d(int i10, int i11) {
            RecyclerView.Adapter adapter = e.this.f38948d;
            if (adapter != null) {
                adapter.notifyItemMoved(i10, i11);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends e.f {
        d() {
            e.this = r1;
        }

        @Override // androidx.recyclerview.widget.e.f
        public boolean a(Object oldItem, Object newItem) {
            Intrinsics.checkNotNullParameter(oldItem, "oldItem");
            Intrinsics.checkNotNullParameter(newItem, "newItem");
            return ((Boolean) e.this.f38946b.invoke(oldItem, newItem)).booleanValue();
        }

        @Override // androidx.recyclerview.widget.e.f
        public boolean b(Object oldItem, Object newItem) {
            Intrinsics.checkNotNullParameter(oldItem, "oldItem");
            Intrinsics.checkNotNullParameter(newItem, "newItem");
            return ((Boolean) e.this.f38945a.invoke(oldItem, newItem)).booleanValue();
        }

        @Override // androidx.recyclerview.widget.e.f
        public Object c(Object oldItem, Object newItem) {
            Intrinsics.checkNotNullParameter(oldItem, "oldItem");
            Intrinsics.checkNotNullParameter(newItem, "newItem");
            return e.this.f38947c.invoke(oldItem, newItem);
        }
    }

    public e(Function2 areItemsTheSame, Function2 areContentsTheSame, Function2 getChangePayload) {
        Intrinsics.checkNotNullParameter(areItemsTheSame, "areItemsTheSame");
        Intrinsics.checkNotNullParameter(areContentsTheSame, "areContentsTheSame");
        Intrinsics.checkNotNullParameter(getChangePayload, "getChangePayload");
        this.f38945a = areItemsTheSame;
        this.f38946b = areContentsTheSame;
        this.f38947c = getChangePayload;
        this.f38949e = new androidx.recyclerview.widget.c(new c(), new b.a(new d()).a());
        this.f38950f = new ArrayList();
        this.f38951g = new LinkedHashMap();
        this.f38952h = new LinkedHashMap();
        this.f38953i = e0.f38962a.a();
    }

    public static final boolean e(Object oldItem, Object newItem) {
        Intrinsics.checkNotNullParameter(oldItem, "oldItem");
        Intrinsics.checkNotNullParameter(newItem, "newItem");
        return Intrinsics.areEqual(oldItem, newItem);
    }

    public static final Unit k(Function3 function3, Object item, ViewBinding b10, RecyclerView.ViewHolder h10) {
        Intrinsics.checkNotNullParameter(item, "item");
        Intrinsics.checkNotNullParameter(b10, "b");
        Intrinsics.checkNotNullParameter(h10, "h");
        function3.invoke(item, b10, h10);
        return Unit.f32464a;
    }

    public static final Unit l(Function1 function1, ViewBinding viewBinding) {
        Intrinsics.checkNotNull(viewBinding, "null cannot be cast to non-null type VB of com.withpersona.sdk2.inquiry.shared.AdapterHelper.addItemTypeInternal");
        function1.invoke(viewBinding);
        return Unit.f32464a;
    }

    private final b n(int i10) {
        Object obj = p().get(i10);
        Object obj2 = this.f38951g.get(Reflection.getOrCreateKotlinClass(obj.getClass()));
        if (obj2 != null) {
            return (b) obj2;
        }
        Class<?> cls = obj.getClass();
        throw new IllegalArgumentException(("No item info for type '" + cls + "'. Ensure this type is added.").toString());
    }

    public static /* synthetic */ void t(e eVar, List list, RecyclerView.Adapter adapter, Function0 function0, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            function0 = null;
        }
        eVar.s(list, adapter, function0);
    }

    public static final void u(Function0 function0) {
        function0.invoke();
    }

    public final void j(KClass clazz, KClass viewBindingClass, Function3 inflateFn, final Function3 bindViewHolder, final Function1 function1) {
        Function1 function12;
        Intrinsics.checkNotNullParameter(clazz, "clazz");
        Intrinsics.checkNotNullParameter(viewBindingClass, "viewBindingClass");
        Intrinsics.checkNotNullParameter(inflateFn, "inflateFn");
        Intrinsics.checkNotNullParameter(bindViewHolder, "bindViewHolder");
        if (this.f38951g.get(clazz) == null) {
            int a10 = this.f38953i.a();
            Function3 function3 = new Function3() { // from class: mp.a
                @Override // kotlin.jvm.functions.Function3
                public final Object invoke(Object obj, Object obj2, Object obj3) {
                    Unit k10;
                    k10 = e.k(Function3.this, obj, (ViewBinding) obj2, (RecyclerView.ViewHolder) obj3);
                    return k10;
                }
            };
            if (function1 != null) {
                function12 = new Function1() { // from class: mp.b
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit l10;
                        l10 = e.l(Function1.this, (ViewBinding) obj);
                        return l10;
                    }
                };
            } else {
                function12 = null;
            }
            b bVar = new b(a10, viewBindingClass, inflateFn, function3, function12);
            this.f38950f.add(bVar);
            this.f38951g.put(clazz, bVar);
            this.f38952h.put(Integer.valueOf(bVar.d()), bVar);
            return;
        }
        throw new IllegalArgumentException(("Item type " + clazz + " has already been added.").toString());
    }

    public final int m() {
        return this.f38949e.a().size();
    }

    public final int o(int i10) {
        return n(i10).d();
    }

    public final List p() {
        List a10 = this.f38949e.a();
        Intrinsics.checkNotNullExpressionValue(a10, "getCurrentList(...)");
        return a10;
    }

    public final void q(RecyclerView.ViewHolder holder, int i10) {
        Intrinsics.checkNotNullParameter(holder, "holder");
        b n10 = n(i10);
        n10.a().invoke(p().get(i10), c0.a(holder), holder);
    }

    public final RecyclerView.ViewHolder r(ViewGroup parent, int i10) {
        b bVar;
        Intrinsics.checkNotNullParameter(parent, "parent");
        if (this.f38950f.size() == 1) {
            bVar = (b) CollectionsKt.o0(this.f38950f);
        } else {
            Object obj = this.f38952h.get(Integer.valueOf(i10));
            if (obj != null) {
                bVar = (b) obj;
            } else {
                throw new IllegalArgumentException(("No item for layout id '" + i10 + "'. Ensure this item is added. Maybe you forgot 'override fun getItemViewType(position: Int): Int = ...'?").toString());
            }
        }
        Function3 b10 = bVar.b();
        LayoutInflater from = LayoutInflater.from(parent.getContext());
        Intrinsics.checkNotNullExpressionValue(from, "from(...)");
        b0 b0Var = new b0((ViewBinding) b10.invoke(from, parent, Boolean.FALSE));
        Function1 c10 = bVar.c();
        if (c10 != null) {
            c10.invoke(b0Var.getBinding());
        }
        return b0Var;
    }

    public final void s(List newItems, RecyclerView.Adapter adapter, final Function0 function0) {
        Runnable runnable;
        Intrinsics.checkNotNullParameter(newItems, "newItems");
        Intrinsics.checkNotNullParameter(adapter, "adapter");
        this.f38948d = adapter;
        androidx.recyclerview.widget.c cVar = this.f38949e;
        if (function0 != null) {
            runnable = new Runnable() { // from class: mp.d
                @Override // java.lang.Runnable
                public final void run() {
                    e.u(Function0.this);
                }
            };
        } else {
            runnable = null;
        }
        cVar.e(newItems, runnable);
    }

    public /* synthetic */ e(Function2 function2, Function2 function22, Function2 function23, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(function2, (i10 & 2) != 0 ? new Function2() { // from class: mp.c
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                boolean e10;
                e10 = e.e(obj, obj2);
                return Boolean.valueOf(e10);
            }
        } : function22, (i10 & 4) != 0 ? a.f38954d : function23);
    }
}
