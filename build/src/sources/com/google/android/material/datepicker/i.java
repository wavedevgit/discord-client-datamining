package com.google.android.material.datepicker;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Canvas;
import android.os.Bundle;
import android.view.ContextThemeWrapper;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.GridView;
import android.widget.ListAdapter;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.h0;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.google.android.material.button.MaterialButton;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i<S> extends q {

    /* renamed from: e  reason: collision with root package name */
    private int f14907e;

    /* renamed from: i  reason: collision with root package name */
    private com.google.android.material.datepicker.a f14908i;

    /* renamed from: o  reason: collision with root package name */
    private com.google.android.material.datepicker.m f14909o;

    /* renamed from: p  reason: collision with root package name */
    private l f14910p;

    /* renamed from: q  reason: collision with root package name */
    private com.google.android.material.datepicker.c f14911q;

    /* renamed from: r  reason: collision with root package name */
    private RecyclerView f14912r;

    /* renamed from: s  reason: collision with root package name */
    private RecyclerView f14913s;

    /* renamed from: t  reason: collision with root package name */
    private View f14914t;

    /* renamed from: u  reason: collision with root package name */
    private View f14915u;

    /* renamed from: v  reason: collision with root package name */
    private View f14916v;

    /* renamed from: w  reason: collision with root package name */
    private View f14917w;

    /* renamed from: x  reason: collision with root package name */
    static final Object f14904x = "MONTHS_VIEW_GROUP_TAG";

    /* renamed from: y  reason: collision with root package name */
    static final Object f14905y = "NAVIGATION_PREV_TAG";

    /* renamed from: z  reason: collision with root package name */
    static final Object f14906z = "NAVIGATION_NEXT_TAG";
    static final Object A = "SELECTOR_TOGGLE_TAG";

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ o f14918d;

        a(o oVar) {
            this.f14918d = oVar;
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            int findLastVisibleItemPosition = i.this.M().findLastVisibleItemPosition() - 1;
            if (findLastVisibleItemPosition >= 0) {
                i.this.P(this.f14918d.b(findLastVisibleItemPosition));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f14920d;

        b(int i10) {
            this.f14920d = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            i.this.f14913s.smoothScrollToPosition(this.f14920d);
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
        final /* synthetic */ int f14923d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(Context context, int i10, boolean z10, int i11) {
            super(context, i10, z10);
            this.f14923d = i11;
        }

        @Override // androidx.recyclerview.widget.LinearLayoutManager
        protected void calculateExtraLayoutSpace(RecyclerView.State state, int[] iArr) {
            if (this.f14923d == 0) {
                iArr[0] = i.this.f14913s.getWidth();
                iArr[1] = i.this.f14913s.getWidth();
                return;
            }
            iArr[0] = i.this.f14913s.getHeight();
            iArr[1] = i.this.f14913s.getHeight();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class e implements m {
        e() {
        }

        @Override // com.google.android.material.datepicker.i.m
        public void a(long j10) {
            if (!i.this.f14908i.f().D0(j10)) {
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
        private final Calendar f14927a = t.i();

        /* renamed from: b  reason: collision with root package name */
        private final Calendar f14928b = t.i();

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
            if (i.this.f14917w.getVisibility() == 0) {
                string = i.this.getString(zg.i.f55699u);
            } else {
                string = i.this.getString(zg.i.f55697s);
            }
            accessibilityNodeInfoCompat.I0(string);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.google.android.material.datepicker.i$i  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0183i extends RecyclerView.OnScrollListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ o f14931a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ MaterialButton f14932b;

        C0183i(o oVar, MaterialButton materialButton) {
            this.f14931a = oVar;
            this.f14932b = materialButton;
        }

        @Override // androidx.recyclerview.widget.RecyclerView.OnScrollListener
        public void onScrollStateChanged(RecyclerView recyclerView, int i10) {
            if (i10 == 0) {
                recyclerView.announceForAccessibility(this.f14932b.getText());
            }
        }

        @Override // androidx.recyclerview.widget.RecyclerView.OnScrollListener
        public void onScrolled(RecyclerView recyclerView, int i10, int i11) {
            int findLastVisibleItemPosition;
            if (i10 < 0) {
                findLastVisibleItemPosition = i.this.M().findFirstVisibleItemPosition();
            } else {
                findLastVisibleItemPosition = i.this.M().findLastVisibleItemPosition();
            }
            i.this.f14909o = this.f14931a.b(findLastVisibleItemPosition);
            this.f14932b.setText(this.f14931a.c(findLastVisibleItemPosition));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class j implements View.OnClickListener {
        j() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            i.this.S();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class k implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ o f14935d;

        k(o oVar) {
            this.f14935d = oVar;
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            int findFirstVisibleItemPosition = i.this.M().findFirstVisibleItemPosition() + 1;
            if (findFirstVisibleItemPosition < i.this.f14913s.getAdapter().getItemCount()) {
                i.this.P(this.f14935d.b(findFirstVisibleItemPosition));
            }
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

    private void E(View view, o oVar) {
        MaterialButton materialButton = (MaterialButton) view.findViewById(zg.f.f55644t);
        materialButton.setTag(A);
        h0.n0(materialButton, new h());
        View findViewById = view.findViewById(zg.f.f55646v);
        this.f14914t = findViewById;
        findViewById.setTag(f14905y);
        View findViewById2 = view.findViewById(zg.f.f55645u);
        this.f14915u = findViewById2;
        findViewById2.setTag(f14906z);
        this.f14916v = view.findViewById(zg.f.C);
        this.f14917w = view.findViewById(zg.f.f55648x);
        Q(l.DAY);
        materialButton.setText(this.f14909o.n());
        this.f14913s.addOnScrollListener(new C0183i(oVar, materialButton));
        materialButton.setOnClickListener(new j());
        this.f14915u.setOnClickListener(new k(oVar));
        this.f14914t.setOnClickListener(new a(oVar));
    }

    private RecyclerView.ItemDecoration F() {
        return new g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int K(Context context) {
        return context.getResources().getDimensionPixelSize(zg.d.M);
    }

    private static int L(Context context) {
        Resources resources = context.getResources();
        int dimensionPixelSize = resources.getDimensionPixelSize(zg.d.T) + resources.getDimensionPixelOffset(zg.d.U) + resources.getDimensionPixelOffset(zg.d.S);
        int dimensionPixelSize2 = resources.getDimensionPixelSize(zg.d.O);
        int i10 = n.f14971p;
        return dimensionPixelSize + dimensionPixelSize2 + (resources.getDimensionPixelSize(zg.d.M) * i10) + ((i10 - 1) * resources.getDimensionPixelOffset(zg.d.R)) + resources.getDimensionPixelOffset(zg.d.K);
    }

    public static i N(com.google.android.material.datepicker.d dVar, int i10, com.google.android.material.datepicker.a aVar, com.google.android.material.datepicker.g gVar) {
        i iVar = new i();
        Bundle bundle = new Bundle();
        bundle.putInt("THEME_RES_ID_KEY", i10);
        bundle.putParcelable("GRID_SELECTOR_KEY", dVar);
        bundle.putParcelable("CALENDAR_CONSTRAINTS_KEY", aVar);
        bundle.putParcelable("DAY_VIEW_DECORATOR_KEY", gVar);
        bundle.putParcelable("CURRENT_MONTH_KEY", aVar.l());
        iVar.setArguments(bundle);
        return iVar;
    }

    private void O(int i10) {
        this.f14913s.post(new b(i10));
    }

    private void R() {
        h0.n0(this.f14913s, new f());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public com.google.android.material.datepicker.a G() {
        return this.f14908i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public com.google.android.material.datepicker.c H() {
        return this.f14911q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public com.google.android.material.datepicker.m I() {
        return this.f14909o;
    }

    public com.google.android.material.datepicker.d J() {
        return null;
    }

    LinearLayoutManager M() {
        return (LinearLayoutManager) this.f14913s.getLayoutManager();
    }

    void P(com.google.android.material.datepicker.m mVar) {
        boolean z10;
        o oVar = (o) this.f14913s.getAdapter();
        int d10 = oVar.d(mVar);
        int d11 = d10 - oVar.d(this.f14909o);
        boolean z11 = false;
        if (Math.abs(d11) > 3) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (d11 > 0) {
            z11 = true;
        }
        this.f14909o = mVar;
        if (z10 && z11) {
            this.f14913s.scrollToPosition(d10 - 3);
            O(d10);
        } else if (z10) {
            this.f14913s.scrollToPosition(d10 + 3);
            O(d10);
        } else {
            O(d10);
        }
    }

    void Q(l lVar) {
        this.f14910p = lVar;
        if (lVar == l.YEAR) {
            this.f14912r.getLayoutManager().scrollToPosition(((u) this.f14912r.getAdapter()).a(this.f14909o.f14966i));
            this.f14916v.setVisibility(0);
            this.f14917w.setVisibility(8);
            this.f14914t.setVisibility(8);
            this.f14915u.setVisibility(8);
        } else if (lVar == l.DAY) {
            this.f14916v.setVisibility(8);
            this.f14917w.setVisibility(0);
            this.f14914t.setVisibility(0);
            this.f14915u.setVisibility(0);
            P(this.f14909o);
        }
    }

    void S() {
        l lVar = this.f14910p;
        l lVar2 = l.YEAR;
        if (lVar == lVar2) {
            Q(l.DAY);
        } else if (lVar == l.DAY) {
            Q(lVar2);
        }
    }

    @Override // androidx.fragment.app.Fragment
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        if (bundle == null) {
            bundle = getArguments();
        }
        this.f14907e = bundle.getInt("THEME_RES_ID_KEY");
        android.support.v4.media.session.b.a(bundle.getParcelable("GRID_SELECTOR_KEY"));
        this.f14908i = (com.google.android.material.datepicker.a) bundle.getParcelable("CALENDAR_CONSTRAINTS_KEY");
        android.support.v4.media.session.b.a(bundle.getParcelable("DAY_VIEW_DECORATOR_KEY"));
        this.f14909o = (com.google.android.material.datepicker.m) bundle.getParcelable("CURRENT_MONTH_KEY");
    }

    @Override // androidx.fragment.app.Fragment
    public View onCreateView(LayoutInflater layoutInflater, ViewGroup viewGroup, Bundle bundle) {
        int i10;
        int i11;
        com.google.android.material.datepicker.h hVar;
        ContextThemeWrapper contextThemeWrapper = new ContextThemeWrapper(getContext(), this.f14907e);
        this.f14911q = new com.google.android.material.datepicker.c(contextThemeWrapper);
        LayoutInflater cloneInContext = layoutInflater.cloneInContext(contextThemeWrapper);
        com.google.android.material.datepicker.m n10 = this.f14908i.n();
        if (com.google.android.material.datepicker.k.J(contextThemeWrapper)) {
            i10 = zg.h.f55673r;
            i11 = 1;
        } else {
            i10 = zg.h.f55671p;
            i11 = 0;
        }
        View inflate = cloneInContext.inflate(i10, viewGroup, false);
        inflate.setMinimumHeight(L(requireContext()));
        GridView gridView = (GridView) inflate.findViewById(zg.f.f55649y);
        h0.n0(gridView, new c());
        int i12 = this.f14908i.i();
        if (i12 > 0) {
            hVar = new com.google.android.material.datepicker.h(i12);
        } else {
            hVar = new com.google.android.material.datepicker.h();
        }
        gridView.setAdapter((ListAdapter) hVar);
        gridView.setNumColumns(n10.f14967o);
        gridView.setEnabled(false);
        this.f14913s = (RecyclerView) inflate.findViewById(zg.f.B);
        this.f14913s.setLayoutManager(new d(getContext(), i11, false, i11));
        this.f14913s.setTag(f14904x);
        o oVar = new o(contextThemeWrapper, null, this.f14908i, null, new e());
        this.f14913s.setAdapter(oVar);
        int integer = contextThemeWrapper.getResources().getInteger(zg.g.f55655e);
        RecyclerView recyclerView = (RecyclerView) inflate.findViewById(zg.f.C);
        this.f14912r = recyclerView;
        if (recyclerView != null) {
            recyclerView.setHasFixedSize(true);
            this.f14912r.setLayoutManager(new GridLayoutManager((Context) contextThemeWrapper, integer, 1, false));
            this.f14912r.setAdapter(new u(this));
            this.f14912r.addItemDecoration(F());
        }
        if (inflate.findViewById(zg.f.f55644t) != null) {
            E(inflate, oVar);
        }
        if (!com.google.android.material.datepicker.k.J(contextThemeWrapper)) {
            new androidx.recyclerview.widget.o().a(this.f14913s);
        }
        this.f14913s.scrollToPosition(oVar.d(this.f14909o));
        R();
        return inflate;
    }

    @Override // androidx.fragment.app.Fragment
    public void onSaveInstanceState(Bundle bundle) {
        super.onSaveInstanceState(bundle);
        bundle.putInt("THEME_RES_ID_KEY", this.f14907e);
        bundle.putParcelable("GRID_SELECTOR_KEY", null);
        bundle.putParcelable("CALENDAR_CONSTRAINTS_KEY", this.f14908i);
        bundle.putParcelable("DAY_VIEW_DECORATOR_KEY", null);
        bundle.putParcelable("CURRENT_MONTH_KEY", this.f14909o);
    }

    @Override // com.google.android.material.datepicker.q
    public boolean x(p pVar) {
        return super.x(pVar);
    }
}
