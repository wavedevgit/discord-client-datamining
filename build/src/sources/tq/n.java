package tq;

import android.content.Context;
import android.content.res.ColorStateList;
import android.util.TypedValue;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.e;
import androidx.viewbinding.ViewBinding;
import bq.b0;
import bq.c0;
import com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import pq.b4;
import sq.q;
import uq.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends RecyclerView.Adapter {

    /* renamed from: a  reason: collision with root package name */
    private final List f49871a;

    /* renamed from: b  reason: collision with root package name */
    private final InputSelectBoxComponentStyle f49872b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f49873c;

    /* renamed from: d  reason: collision with root package name */
    private final Function1 f49874d;

    /* renamed from: e  reason: collision with root package name */
    private String f49875e;

    /* renamed from: f  reason: collision with root package name */
    private final LayoutInflater f49876f;

    /* renamed from: g  reason: collision with root package name */
    private Set f49877g;

    /* renamed from: h  reason: collision with root package name */
    private final androidx.recyclerview.widget.c f49878h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a extends e.f {
        @Override // androidx.recyclerview.widget.e.f
        /* renamed from: d */
        public boolean a(b4 oldItem, b4 newItem) {
            Intrinsics.checkNotNullParameter(oldItem, "oldItem");
            Intrinsics.checkNotNullParameter(newItem, "newItem");
            return Intrinsics.areEqual(oldItem, newItem);
        }

        @Override // androidx.recyclerview.widget.e.f
        /* renamed from: e */
        public boolean b(b4 oldItem, b4 newItem) {
            Intrinsics.checkNotNullParameter(oldItem, "oldItem");
            Intrinsics.checkNotNullParameter(newItem, "newItem");
            return Intrinsics.areEqual(oldItem, newItem);
        }
    }

    public n(Context context, List options, InputSelectBoxComponentStyle inputSelectBoxComponentStyle, boolean z10, List initialSelectedOptions, Function1 onClick) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(initialSelectedOptions, "initialSelectedOptions");
        Intrinsics.checkNotNullParameter(onClick, "onClick");
        this.f49871a = options;
        this.f49872b = inputSelectBoxComponentStyle;
        this.f49873c = z10;
        this.f49874d = onClick;
        this.f49876f = LayoutInflater.from(context);
        this.f49878h = new androidx.recyclerview.widget.c(this, new a());
        List<b4> list = options;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (b4 b4Var : list) {
            arrayList.add(b4Var.a());
        }
        Set l12 = CollectionsKt.l1(arrayList);
        ArrayList arrayList2 = new ArrayList();
        for (Object obj : initialSelectedOptions) {
            if (l12.contains(((b4) obj).a())) {
                arrayList2.add(obj);
            }
        }
        this.f49877g = CollectionsKt.k1(arrayList2);
        h();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(n nVar, RecyclerView.ViewHolder viewHolder, View view) {
        nVar.f(viewHolder.getAdapterPosition());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(n nVar, RecyclerView.ViewHolder viewHolder, View view) {
        nVar.f(viewHolder.getAdapterPosition());
    }

    private final void f(int i10) {
        if (!this.f49873c) {
            this.f49877g.clear();
        }
        b4 b4Var = (b4) this.f49878h.a().get(i10);
        if (this.f49877g.contains(b4Var)) {
            this.f49877g.remove(b4Var);
        } else {
            Set set = this.f49877g;
            Intrinsics.checkNotNull(b4Var);
            set.add(b4Var);
        }
        notifyItemChanged(i10);
        Function1 function1 = this.f49874d;
        Intrinsics.checkNotNull(b4Var);
        function1.invoke(b4Var);
    }

    public final List c() {
        return CollectionsKt.h1(this.f49877g);
    }

    public final void g(String str) {
        this.f49875e = str;
        h();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.f49878h.a().size();
    }

    public final void h() {
        List list;
        String str = this.f49875e;
        if (str != null && !StringsKt.k0(str)) {
            list = new ArrayList();
            for (Object obj : this.f49871a) {
                if (StringsKt.T(((b4) obj).getText(), str, true)) {
                    list.add(obj);
                }
            }
        } else {
            list = this.f49871a;
        }
        this.f49878h.d(list);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public void onBindViewHolder(final RecyclerView.ViewHolder holder, int i10) {
        Integer focusedBackgroundColorValue;
        Intrinsics.checkNotNullParameter(holder, "holder");
        b4 b4Var = (b4) this.f49878h.a().get(i10);
        q qVar = (q) c0.a(holder);
        qVar.f48281c.setText(b4Var.getText());
        qVar.getRoot().setOnClickListener(new View.OnClickListener() { // from class: tq.l
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                n.d(n.this, holder, view);
            }
        });
        qVar.f48280b.setOnClickListener(new View.OnClickListener() { // from class: tq.m
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                n.e(n.this, holder, view);
            }
        });
        boolean contains = this.f49877g.contains(b4Var);
        qVar.f48280b.setChecked(contains);
        InputSelectBoxComponentStyle inputSelectBoxComponentStyle = this.f49872b;
        if (inputSelectBoxComponentStyle != null && (focusedBackgroundColorValue = inputSelectBoxComponentStyle.getFocusedBackgroundColorValue()) != null) {
            int intValue = focusedBackgroundColorValue.intValue();
            if (!this.f49873c) {
                if (contains) {
                    qVar.getRoot().setBackgroundColor(intValue);
                    return;
                }
                TypedValue typedValue = new TypedValue();
                qVar.getRoot().getContext().getTheme().resolveAttribute(16843534, typedValue, true);
                qVar.getRoot().setBackgroundResource(typedValue.resourceId);
            }
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        q c10 = q.c(this.f49876f, parent, false);
        Intrinsics.checkNotNullExpressionValue(c10, "inflate(...)");
        b0 b0Var = new b0(c10);
        ViewBinding binding = b0Var.getBinding();
        Intrinsics.checkNotNullExpressionValue(binding, "<get-binding>(...)");
        q qVar = (q) binding;
        InputSelectBoxComponentStyle inputSelectBoxComponentStyle = this.f49872b;
        if (inputSelectBoxComponentStyle != null) {
            TextView label = qVar.f48281c;
            Intrinsics.checkNotNullExpressionValue(label, "label");
            f0.n(label, inputSelectBoxComponentStyle.getTextBasedStyle(), null, 2, null);
        }
        if (this.f49873c) {
            qVar.f48280b.setVisibility(0);
            qVar.f48280b.setButtonTintList(ColorStateList.valueOf(qVar.f48281c.getCurrentTextColor()));
            return b0Var;
        }
        qVar.f48280b.setVisibility(8);
        return b0Var;
    }
}
