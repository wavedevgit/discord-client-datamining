package com.google.android.material.datepicker;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Canvas;
import android.os.Bundle;
import android.view.ContextThemeWrapper;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityManager;
import android.widget.GridView;
import android.widget.ListAdapter;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.i0;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.google.android.material.button.MaterialButton;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i<S> extends q {

    /* renamed from: e  reason: collision with root package name */
    private int f15643e;

    /* renamed from: i  reason: collision with root package name */
    private com.google.android.material.datepicker.a f15644i;

    /* renamed from: o  reason: collision with root package name */
    private com.google.android.material.datepicker.m f15645o;

    /* renamed from: p  reason: collision with root package name */
    private l f15646p;

    /* renamed from: q  reason: collision with root package name */
    private com.google.android.material.datepicker.c f15647q;

    /* renamed from: r  reason: collision with root package name */
    private RecyclerView f15648r;

    /* renamed from: s  reason: collision with root package name */
    private RecyclerView f15649s;

    /* renamed from: t  reason: collision with root package name */
    private View f15650t;

    /* renamed from: u  reason: collision with root package name */
    private View f15651u;

    /* renamed from: v  reason: collision with root package name */
    private View f15652v;

    /* renamed from: w  reason: collision with root package name */
    private View f15653w;

    /* renamed from: x  reason: collision with root package name */
    private MaterialButton f15654x;

    /* renamed from: y  reason: collision with root package name */
    private AccessibilityManager f15655y;

    /* renamed from: z  reason: collision with root package name */
    static final Object f15642z = "MONTHS_VIEW_GROUP_TAG";
    static final Object A = "NAVIGATION_PREV_TAG";
    static final Object B = "NAVIGATION_NEXT_TAG";
    static final Object C = "SELECTOR_TOGGLE_TAG";

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ o f15656d;

        a(o oVar) {
            this.f15656d = oVar;
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            i.this.R(this.f15656d.b(i.this.O().findLastVisibleItemPosition() - 1));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f15658d;

        b(int i10) {
            this.f15658d = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            i.this.f15649s.smoothScrollToPosition(this.f15658d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c extends androidx.core.view.a {
        c() {
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
            accessibilityNodeInfoCompat.y0(null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d extends r {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f15661d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(Context context, int i10, boolean z10, int i11) {
            super(context, i10, z10);
            this.f15661d = i11;
        }

        @Override // androidx.recyclerview.widget.LinearLayoutManager
        protected void calculateExtraLayoutSpace(RecyclerView.State state, int[] iArr) {
            if (this.f15661d == 0) {
                iArr[0] = i.this.f15649s.getWidth();
                iArr[1] = i.this.f15649s.getWidth();
                return;
            }
            iArr[0] = i.this.f15649s.getHeight();
            iArr[1] = i.this.f15649s.getHeight();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class e implements m {
        e() {
        }

        @Override // com.google.android.material.datepicker.i.m
        public void a(long j10) {
            if (!i.this.f15644i.f().F0(j10)) {
                return;
            }
            i.B(i.this);
            throw null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f extends androidx.core.view.a {
        f() {
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
            accessibilityNodeInfoCompat.V0(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class g extends RecyclerView.ItemDecoration {

        /* renamed from: a  reason: collision with root package name */
        private final Calendar f15665a = t.i();

        /* renamed from: b  reason: collision with root package name */
        private final Calendar f15666b = t.i();

        g() {
        }

        @Override // androidx.recyclerview.widget.RecyclerView.ItemDecoration
        public void onDraw(Canvas canvas, RecyclerView recyclerView, RecyclerView.State state) {
            if ((recyclerView.getAdapter() instanceof u) && (recyclerView.getLayoutManager() instanceof GridLayoutManager)) {
                u uVar = (u) recyclerView.getAdapter();
                GridLayoutManager gridLayoutManager = (GridLayoutManager) recyclerView.getLayoutManager();
                i.B(i.this);
                throw null;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class h extends androidx.core.view.a {
        h() {
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            String string;
            super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
            if (i.this.f15653w.getVisibility() == 0) {
                string = i.this.getString(bh.j.f6925z);
            } else {
                string = i.this.getString(bh.j.f6923x);
            }
            accessibilityNodeInfoCompat.b(new AccessibilityNodeInfoCompat.a(16, string));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.google.android.material.datepicker.i$i  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0181i extends RecyclerView.OnScrollListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ o f15669a;

        C0181i(o oVar) {
            this.f15669a = oVar;
        }

        @Override // androidx.recyclerview.widget.RecyclerView.OnScrollListener
        public void onScrolled(RecyclerView recyclerView, int i10, int i11) {
            int findLastVisibleItemPosition;
            if (i10 < 0) {
                findLastVisibleItemPosition = i.this.O().findFirstVisibleItemPosition();
            } else {
                findLastVisibleItemPosition = i.this.O().findLastVisibleItemPosition();
            }
            com.google.android.material.datepicker.m b10 = this.f15669a.b(findLastVisibleItemPosition);
            i.this.f15645o = b10;
            i.this.f15654x.setText(this.f15669a.c(findLastVisibleItemPosition));
            i.this.V(this.f15669a.d(b10));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class j implements View.OnClickListener {
        j() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            i.this.U();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class k implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ o f15672d;

        k(o oVar) {
            this.f15672d = oVar;
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            i.this.R(this.f15672d.b(i.this.O().findFirstVisibleItemPosition() + 1));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum l {
        DAY,
        YEAR
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface m {
        void a(long j10);
    }

    static /* synthetic */ com.google.android.material.datepicker.d B(i iVar) {
        iVar.getClass();
        return null;
    }

    private void G(View view, o oVar) {
        MaterialButton materialButton = (MaterialButton) view.findViewById(bh.f.f6861t);
        this.f15654x = materialButton;
        materialButton.setTag(C);
        i0.k0(this.f15654x, new h());
        View findViewById = view.findViewById(bh.f.f6863v);
        this.f15650t = findViewById;
        findViewById.setTag(A);
        View findViewById2 = view.findViewById(bh.f.f6862u);
        this.f15651u = findViewById2;
        findViewById2.setTag(B);
        this.f15652v = view.findViewById(bh.f.C);
        this.f15653w = view.findViewById(bh.f.f6865x);
        S(l.DAY);
        this.f15654x.setText(this.f15645o.l());
        this.f15649s.addOnScrollListener(new C0181i(oVar));
        this.f15654x.setOnClickListener(new j());
        this.f15651u.setOnClickListener(new k(oVar));
        this.f15650t.setOnClickListener(new a(oVar));
        V(oVar.d(this.f15645o));
    }

    private RecyclerView.ItemDecoration H() {
        return new g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int M(Context context) {
        return context.getResources().getDimensionPixelSize(bh.d.f6781d0);
    }

    private static int N(Context context) {
        Resources resources = context.getResources();
        int dimensionPixelSize = resources.getDimensionPixelSize(bh.d.f6795k0) + resources.getDimensionPixelOffset(bh.d.f6797l0) + resources.getDimensionPixelOffset(bh.d.f6793j0);
        int dimensionPixelSize2 = resources.getDimensionPixelSize(bh.d.f6785f0);
        int i10 = n.f15710p;
        return dimensionPixelSize + dimensionPixelSize2 + (resources.getDimensionPixelSize(bh.d.f6781d0) * i10) + ((i10 - 1) * resources.getDimensionPixelOffset(bh.d.f6791i0)) + resources.getDimensionPixelOffset(bh.d.f6777b0);
    }

    public static i P(com.google.android.material.datepicker.d dVar, int i10, com.google.android.material.datepicker.a aVar, com.google.android.material.datepicker.g gVar) {
        i iVar = new i();
        Bundle bundle = new Bundle();
        bundle.putInt("THEME_RES_ID_KEY", i10);
        bundle.putParcelable("GRID_SELECTOR_KEY", dVar);
        bundle.putParcelable("CALENDAR_CONSTRAINTS_KEY", aVar);
        bundle.putParcelable("DAY_VIEW_DECORATOR_KEY", gVar);
        bundle.putParcelable("CURRENT_MONTH_KEY", aVar.k());
        iVar.setArguments(bundle);
        return iVar;
    }

    private void Q(int i10) {
        this.f15649s.post(new b(i10));
    }

    private void T() {
        i0.k0(this.f15649s, new f());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void V(int i10) {
        boolean z10;
        View view = this.f15651u;
        boolean z11 = false;
        if (i10 + 1 < this.f15649s.getAdapter().getItemCount()) {
            z10 = true;
        } else {
            z10 = false;
        }
        view.setEnabled(z10);
        View view2 = this.f15650t;
        if (i10 - 1 >= 0) {
            z11 = true;
        }
        view2.setEnabled(z11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public com.google.android.material.datepicker.a I() {
        return this.f15644i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public com.google.android.material.datepicker.c J() {
        return this.f15647q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public com.google.android.material.datepicker.m K() {
        return this.f15645o;
    }

    public com.google.android.material.datepicker.d L() {
        return null;
    }

    LinearLayoutManager O() {
        return (LinearLayoutManager) this.f15649s.getLayoutManager();
    }

    void R(com.google.android.material.datepicker.m mVar) {
        boolean z10;
        o oVar = (o) this.f15649s.getAdapter();
        int d10 = oVar.d(mVar);
        AccessibilityManager accessibilityManager = this.f15655y;
        if (accessibilityManager != null && accessibilityManager.isEnabled()) {
            this.f15645o = mVar;
            this.f15649s.scrollToPosition(d10);
        } else {
            int d11 = d10 - oVar.d(this.f15645o);
            boolean z11 = false;
            if (Math.abs(d11) > 3) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (d11 > 0) {
                z11 = true;
            }
            this.f15645o = mVar;
            if (z10 && z11) {
                this.f15649s.scrollToPosition(d10 - 3);
                Q(d10);
            } else if (z10) {
                this.f15649s.scrollToPosition(d10 + 3);
                Q(d10);
            } else {
                Q(d10);
            }
        }
        V(d10);
    }

    void S(l lVar) {
        this.f15646p = lVar;
        if (lVar == l.YEAR) {
            this.f15648r.getLayoutManager().scrollToPosition(((u) this.f15648r.getAdapter()).a(this.f15645o.f15705i));
            this.f15652v.setVisibility(0);
            this.f15653w.setVisibility(8);
            this.f15650t.setVisibility(8);
            this.f15651u.setVisibility(8);
        } else if (lVar == l.DAY) {
            this.f15652v.setVisibility(8);
            this.f15653w.setVisibility(0);
            this.f15650t.setVisibility(0);
            this.f15651u.setVisibility(0);
            R(this.f15645o);
        }
    }

    void U() {
        l lVar = this.f15646p;
        l lVar2 = l.YEAR;
        if (lVar == lVar2) {
            S(l.DAY);
            this.f15649s.announceForAccessibility(getString(bh.j.A));
        } else if (lVar == l.DAY) {
            S(lVar2);
            this.f15648r.announceForAccessibility(getString(bh.j.B));
        }
    }

    @Override // androidx.fragment.app.Fragment
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        if (bundle == null) {
            bundle = getArguments();
        }
        this.f15643e = bundle.getInt("THEME_RES_ID_KEY");
        android.support.v4.media.session.b.a(bundle.getParcelable("GRID_SELECTOR_KEY"));
        this.f15644i = (com.google.android.material.datepicker.a) bundle.getParcelable("CALENDAR_CONSTRAINTS_KEY");
        android.support.v4.media.session.b.a(bundle.getParcelable("DAY_VIEW_DECORATOR_KEY"));
        this.f15645o = (com.google.android.material.datepicker.m) bundle.getParcelable("CURRENT_MONTH_KEY");
    }

    @Override // androidx.fragment.app.Fragment
    public View onCreateView(LayoutInflater layoutInflater, ViewGroup viewGroup, Bundle bundle) {
        int i10;
        int i11;
        com.google.android.material.datepicker.h hVar;
        ContextThemeWrapper contextThemeWrapper = new ContextThemeWrapper(getContext(), this.f15643e);
        this.f15647q = new com.google.android.material.datepicker.c(contextThemeWrapper);
        LayoutInflater cloneInContext = layoutInflater.cloneInContext(contextThemeWrapper);
        this.f15655y = (AccessibilityManager) requireContext().getSystemService("accessibility");
        com.google.android.material.datepicker.m l10 = this.f15644i.l();
        if (com.google.android.material.datepicker.k.J(contextThemeWrapper)) {
            i10 = bh.h.f6893u;
            i11 = 1;
        } else {
            i10 = bh.h.f6891s;
            i11 = 0;
        }
        View inflate = cloneInContext.inflate(i10, viewGroup, false);
        inflate.setMinimumHeight(N(requireContext()));
        GridView gridView = (GridView) inflate.findViewById(bh.f.f6866y);
        i0.k0(gridView, new c());
        int i12 = this.f15644i.i();
        if (i12 > 0) {
            hVar = new com.google.android.material.datepicker.h(i12);
        } else {
            hVar = new com.google.android.material.datepicker.h();
        }
        gridView.setAdapter((ListAdapter) hVar);
        gridView.setNumColumns(l10.f15706o);
        gridView.setEnabled(false);
        this.f15649s = (RecyclerView) inflate.findViewById(bh.f.B);
        this.f15649s.setLayoutManager(new d(getContext(), i11, false, i11));
        this.f15649s.setTag(f15642z);
        o oVar = new o(contextThemeWrapper, null, this.f15644i, null, new e());
        this.f15649s.setAdapter(oVar);
        int integer = contextThemeWrapper.getResources().getInteger(bh.g.f6872e);
        RecyclerView recyclerView = (RecyclerView) inflate.findViewById(bh.f.C);
        this.f15648r = recyclerView;
        if (recyclerView != null) {
            recyclerView.setHasFixedSize(true);
            this.f15648r.setLayoutManager(new GridLayoutManager((Context) contextThemeWrapper, integer, 1, false));
            this.f15648r.setAdapter(new u(this));
            this.f15648r.addItemDecoration(H());
        }
        if (inflate.findViewById(bh.f.f6861t) != null) {
            G(inflate, oVar);
        }
        if (!com.google.android.material.datepicker.k.J(contextThemeWrapper)) {
            new androidx.recyclerview.widget.o().a(this.f15649s);
        }
        this.f15649s.scrollToPosition(oVar.d(this.f15645o));
        T();
        return inflate;
    }

    @Override // androidx.fragment.app.Fragment
    public void onSaveInstanceState(Bundle bundle) {
        super.onSaveInstanceState(bundle);
        bundle.putInt("THEME_RES_ID_KEY", this.f15643e);
        bundle.putParcelable("GRID_SELECTOR_KEY", null);
        bundle.putParcelable("CALENDAR_CONSTRAINTS_KEY", this.f15644i);
        bundle.putParcelable("DAY_VIEW_DECORATOR_KEY", null);
        bundle.putParcelable("CURRENT_MONTH_KEY", this.f15645o);
    }

    @Override // com.google.android.material.datepicker.q
    public boolean x(p pVar) {
        return super.x(pVar);
    }
}
