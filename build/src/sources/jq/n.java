package jq;

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
import com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle;
import fq.b4;
import iq.q;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import kq.f0;
import rp.b0;
import rp.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends RecyclerView.Adapter {

    /* renamed from: a  reason: collision with root package name */
    private final List f30880a;

    /* renamed from: b  reason: collision with root package name */
    private final InputSelectBoxComponentStyle f30881b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f30882c;

    /* renamed from: d  reason: collision with root package name */
    private final Function1 f30883d;

    /* renamed from: e  reason: collision with root package name */
    private String f30884e;

    /* renamed from: f  reason: collision with root package name */
    private final LayoutInflater f30885f;

    /* renamed from: g  reason: collision with root package name */
    private Set f30886g;

    /* renamed from: h  reason: collision with root package name */
    private final androidx.recyclerview.widget.c f30887h;

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
        this.f30880a = options;
        this.f30881b = inputSelectBoxComponentStyle;
        this.f30882c = z10;
        this.f30883d = onClick;
        this.f30885f = LayoutInflater.from(context);
        this.f30887h = new androidx.recyclerview.widget.c(this, new a());
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
        this.f30886g = CollectionsKt.k1(arrayList2);
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
        if (!this.f30882c) {
            this.f30886g.clear();
        }
        b4 b4Var = (b4) this.f30887h.a().get(i10);
        if (this.f30886g.contains(b4Var)) {
            this.f30886g.remove(b4Var);
        } else {
            Set set = this.f30886g;
            Intrinsics.checkNotNull(b4Var);
            set.add(b4Var);
        }
        notifyItemChanged(i10);
        Function1 function1 = this.f30883d;
        Intrinsics.checkNotNull(b4Var);
        function1.invoke(b4Var);
    }

    public final List c() {
        return CollectionsKt.h1(this.f30886g);
    }

    public final void g(String str) {
        this.f30884e = str;
        h();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.f30887h.a().size();
    }

    public final void h() {
        List list;
        String str = this.f30884e;
        if (str != null && !StringsKt.k0(str)) {
            list = new ArrayList();
            for (Object obj : this.f30880a) {
                if (StringsKt.T(((b4) obj).getText(), str, true)) {
                    list.add(obj);
                }
            }
        } else {
            list = this.f30880a;
        }
        this.f30887h.d(list);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public void onBindViewHolder(final RecyclerView.ViewHolder holder, int i10) {
        Integer focusedBackgroundColorValue;
        Intrinsics.checkNotNullParameter(holder, "holder");
        b4 b4Var = (b4) this.f30887h.a().get(i10);
        q qVar = (q) c0.a(holder);
        qVar.f29270c.setText(b4Var.getText());
        qVar.getRoot().setOnClickListener(new View.OnClickListener() { // from class: jq.l
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                n.d(n.this, holder, view);
            }
        });
        qVar.f29269b.setOnClickListener(new View.OnClickListener() { // from class: jq.m
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                n.e(n.this, holder, view);
            }
        });
        boolean contains = this.f30886g.contains(b4Var);
        qVar.f29269b.setChecked(contains);
        InputSelectBoxComponentStyle inputSelectBoxComponentStyle = this.f30881b;
        if (inputSelectBoxComponentStyle != null && (focusedBackgroundColorValue = inputSelectBoxComponentStyle.getFocusedBackgroundColorValue()) != null) {
            int intValue = focusedBackgroundColorValue.intValue();
            if (!this.f30882c) {
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
        q c10 = q.c(this.f30885f, parent, false);
        Intrinsics.checkNotNullExpressionValue(c10, "inflate(...)");
        b0 b0Var = new b0(c10);
        ViewBinding binding = b0Var.getBinding();
        Intrinsics.checkNotNullExpressionValue(binding, "<get-binding>(...)");
        q qVar = (q) binding;
        InputSelectBoxComponentStyle inputSelectBoxComponentStyle = this.f30881b;
        if (inputSelectBoxComponentStyle != null) {
            TextView label = qVar.f29270c;
            Intrinsics.checkNotNullExpressionValue(label, "label");
            f0.n(label, inputSelectBoxComponentStyle.getTextBasedStyle(), null, 2, null);
        }
        if (this.f30882c) {
            qVar.f29269b.setVisibility(0);
            qVar.f29269b.setButtonTintList(ColorStateList.valueOf(qVar.f29270c.getCurrentTextColor()));
            return b0Var;
        }
        qVar.f29269b.setVisibility(8);
        return b0Var;
    }
}
