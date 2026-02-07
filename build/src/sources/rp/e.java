package rp;

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
    private final Function2 f49091a;

    /* renamed from: b */
    private final Function2 f49092b;

    /* renamed from: c */
    private final Function2 f49093c;

    /* renamed from: d */
    private RecyclerView.Adapter f49094d;

    /* renamed from: e */
    private final androidx.recyclerview.widget.c f49095e;

    /* renamed from: f */
    private final List f49096f;

    /* renamed from: g */
    private final Map f49097g;

    /* renamed from: h */
    private final Map f49098h;

    /* renamed from: i */
    private final d0 f49099i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Function2 {

        /* renamed from: d */
        public static final a f49100d = new a();

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
        private final int f49101a;

        /* renamed from: b */
        private final KClass f49102b;

        /* renamed from: c */
        private final Function3 f49103c;

        /* renamed from: d */
        private final Function3 f49104d;

        /* renamed from: e */
        private final Function1 f49105e;

        public b(int i10, KClass viewBindingClass, Function3 inflateFn, Function3 bindViewHolder, Function1 function1) {
            Intrinsics.checkNotNullParameter(viewBindingClass, "viewBindingClass");
            Intrinsics.checkNotNullParameter(inflateFn, "inflateFn");
            Intrinsics.checkNotNullParameter(bindViewHolder, "bindViewHolder");
            this.f49101a = i10;
            this.f49102b = viewBindingClass;
            this.f49103c = inflateFn;
            this.f49104d = bindViewHolder;
            this.f49105e = function1;
        }

        public final Function3 a() {
            return this.f49104d;
        }

        public final Function3 b() {
            return this.f49103c;
        }

        public final Function1 c() {
            return this.f49105e;
        }

        public final int d() {
            return this.f49101a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f49101a == bVar.f49101a && Intrinsics.areEqual(this.f49102b, bVar.f49102b) && Intrinsics.areEqual(this.f49103c, bVar.f49103c) && Intrinsics.areEqual(this.f49104d, bVar.f49104d) && Intrinsics.areEqual(this.f49105e, bVar.f49105e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = ((((((Integer.hashCode(this.f49101a) * 31) + this.f49102b.hashCode()) * 31) + this.f49103c.hashCode()) * 31) + this.f49104d.hashCode()) * 31;
            Function1 function1 = this.f49105e;
            if (function1 == null) {
                hashCode = 0;
            } else {
                hashCode = function1.hashCode();
            }
            return hashCode2 + hashCode;
        }

        public String toString() {
            int i10 = this.f49101a;
            KClass kClass = this.f49102b;
            Function3 function3 = this.f49103c;
            Function3 function32 = this.f49104d;
            Function1 function1 = this.f49105e;
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
            RecyclerView.Adapter adapter = e.this.f49094d;
            if (adapter != null) {
                adapter.notifyItemRangeInserted(i10, i11);
            }
        }

        @Override // androidx.recyclerview.widget.m
        public void b(int i10, int i11) {
            RecyclerView.Adapter adapter = e.this.f49094d;
            if (adapter != null) {
                adapter.notifyItemRangeRemoved(i10, i11);
            }
        }

        @Override // androidx.recyclerview.widget.m
        public void c(int i10, int i11, Object obj) {
            RecyclerView.Adapter adapter = e.this.f49094d;
            if (adapter != null) {
                adapter.notifyItemRangeChanged(i10, i11, obj);
            }
        }

        @Override // androidx.recyclerview.widget.m
        public void d(int i10, int i11) {
            RecyclerView.Adapter adapter = e.this.f49094d;
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
            return ((Boolean) e.this.f49092b.invoke(oldItem, newItem)).booleanValue();
        }

        @Override // androidx.recyclerview.widget.e.f
        public boolean b(Object oldItem, Object newItem) {
            Intrinsics.checkNotNullParameter(oldItem, "oldItem");
            Intrinsics.checkNotNullParameter(newItem, "newItem");
            return ((Boolean) e.this.f49091a.invoke(oldItem, newItem)).booleanValue();
        }

        @Override // androidx.recyclerview.widget.e.f
        public Object c(Object oldItem, Object newItem) {
            Intrinsics.checkNotNullParameter(oldItem, "oldItem");
            Intrinsics.checkNotNullParameter(newItem, "newItem");
            return e.this.f49093c.invoke(oldItem, newItem);
        }
    }

    public e(Function2 areItemsTheSame, Function2 areContentsTheSame, Function2 getChangePayload) {
        Intrinsics.checkNotNullParameter(areItemsTheSame, "areItemsTheSame");
        Intrinsics.checkNotNullParameter(areContentsTheSame, "areContentsTheSame");
        Intrinsics.checkNotNullParameter(getChangePayload, "getChangePayload");
        this.f49091a = areItemsTheSame;
        this.f49092b = areContentsTheSame;
        this.f49093c = getChangePayload;
        this.f49095e = new androidx.recyclerview.widget.c(new c(), new b.a(new d()).a());
        this.f49096f = new ArrayList();
        this.f49097g = new LinkedHashMap();
        this.f49098h = new LinkedHashMap();
        this.f49099i = e0.f49108a.a();
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
        return Unit.f32056a;
    }

    public static final Unit l(Function1 function1, ViewBinding viewBinding) {
        Intrinsics.checkNotNull(viewBinding, "null cannot be cast to non-null type VB of com.withpersona.sdk2.inquiry.shared.AdapterHelper.addItemTypeInternal");
        function1.invoke(viewBinding);
        return Unit.f32056a;
    }

    private final b n(int i10) {
        Object obj = p().get(i10);
        Object obj2 = this.f49097g.get(Reflection.getOrCreateKotlinClass(obj.getClass()));
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
        if (this.f49097g.get(clazz) == null) {
            int a10 = this.f49099i.a();
            Function3 function3 = new Function3() { // from class: rp.a
                @Override // kotlin.jvm.functions.Function3
                public final Object invoke(Object obj, Object obj2, Object obj3) {
                    Unit k10;
                    k10 = e.k(Function3.this, obj, (ViewBinding) obj2, (RecyclerView.ViewHolder) obj3);
                    return k10;
                }
            };
            if (function1 != null) {
                function12 = new Function1() { // from class: rp.b
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
            this.f49096f.add(bVar);
            this.f49097g.put(clazz, bVar);
            this.f49098h.put(Integer.valueOf(bVar.d()), bVar);
            return;
        }
        throw new IllegalArgumentException(("Item type " + clazz + " has already been added.").toString());
    }

    public final int m() {
        return this.f49095e.a().size();
    }

    public final int o(int i10) {
        return n(i10).d();
    }

    public final List p() {
        List a10 = this.f49095e.a();
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
        if (this.f49096f.size() == 1) {
            bVar = (b) CollectionsKt.o0(this.f49096f);
        } else {
            Object obj = this.f49098h.get(Integer.valueOf(i10));
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
        this.f49094d = adapter;
        androidx.recyclerview.widget.c cVar = this.f49095e;
        if (function0 != null) {
            runnable = new Runnable() { // from class: rp.d
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
        this(function2, (i10 & 2) != 0 ? new Function2() { // from class: rp.c
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                boolean e10;
                e10 = e.e(obj, obj2);
                return Boolean.valueOf(e10);
            }
        } : function22, (i10 & 4) != 0 ? a.f49100d : function23);
    }
}
