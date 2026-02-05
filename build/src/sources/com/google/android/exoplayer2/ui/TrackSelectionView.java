package com.google.android.exoplayer2.ui;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CheckedTextView;
import android.widget.LinearLayout;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.Tracks;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import ke.l;
import ke.m;
import ke.o;
import mi.s;
import qd.u0;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class TrackSelectionView extends LinearLayout {

    /* renamed from: d  reason: collision with root package name */
    private final int f13236d;

    /* renamed from: e  reason: collision with root package name */
    private final LayoutInflater f13237e;

    /* renamed from: i  reason: collision with root package name */
    private final CheckedTextView f13238i;

    /* renamed from: o  reason: collision with root package name */
    private final CheckedTextView f13239o;

    /* renamed from: p  reason: collision with root package name */
    private final b f13240p;

    /* renamed from: q  reason: collision with root package name */
    private final List f13241q;

    /* renamed from: r  reason: collision with root package name */
    private final Map f13242r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f13243s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f13244t;

    /* renamed from: u  reason: collision with root package name */
    private o f13245u;

    /* renamed from: v  reason: collision with root package name */
    private CheckedTextView[][] f13246v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f13247w;

    /* renamed from: x  reason: collision with root package name */
    private Comparator f13248x;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements View.OnClickListener {
        private b() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            TrackSelectionView.this.c(view);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Tracks.a f13250a;

        /* renamed from: b  reason: collision with root package name */
        public final int f13251b;

        public c(Tracks.a aVar, int i10) {
            this.f13250a = aVar;
            this.f13251b = i10;
        }

        public Format a() {
            return this.f13250a.c(this.f13251b);
        }
    }

    public TrackSelectionView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    public static Map b(Map map, List list, boolean z10) {
        HashMap hashMap = new HashMap();
        for (int i10 = 0; i10 < list.size(); i10++) {
            je.o oVar = (je.o) map.get(((Tracks.a) list.get(i10)).b());
            if (oVar != null && (z10 || hashMap.isEmpty())) {
                hashMap.put(oVar.f30888d, oVar);
            }
        }
        return hashMap;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c(View view) {
        if (view == this.f13238i) {
            e();
        } else if (view == this.f13239o) {
            d();
        } else {
            f(view);
        }
        i();
    }

    private void d() {
        this.f13247w = false;
        this.f13242r.clear();
    }

    private void e() {
        this.f13247w = true;
        this.f13242r.clear();
    }

    private void f(View view) {
        boolean z10 = false;
        this.f13247w = false;
        c cVar = (c) ne.a.e(view.getTag());
        u0 b10 = cVar.f13250a.b();
        int i10 = cVar.f13251b;
        je.o oVar = (je.o) this.f13242r.get(b10);
        if (oVar == null) {
            if (!this.f13244t && this.f13242r.size() > 0) {
                this.f13242r.clear();
            }
            this.f13242r.put(b10, new je.o(b10, s.t(Integer.valueOf(i10))));
            return;
        }
        ArrayList arrayList = new ArrayList(oVar.f30889e);
        boolean isChecked = ((CheckedTextView) view).isChecked();
        boolean g10 = g(cVar.f13250a);
        z10 = (g10 || h()) ? true : true;
        if (isChecked && z10) {
            arrayList.remove(Integer.valueOf(i10));
            if (arrayList.isEmpty()) {
                this.f13242r.remove(b10);
            } else {
                this.f13242r.put(b10, new je.o(b10, arrayList));
            }
        } else if (!isChecked) {
            if (g10) {
                arrayList.add(Integer.valueOf(i10));
                this.f13242r.put(b10, new je.o(b10, arrayList));
                return;
            }
            this.f13242r.put(b10, new je.o(b10, s.t(Integer.valueOf(i10))));
        }
    }

    private boolean g(Tracks.a aVar) {
        if (this.f13243s && aVar.e()) {
            return true;
        }
        return false;
    }

    private boolean h() {
        if (this.f13244t && this.f13241q.size() > 1) {
            return true;
        }
        return false;
    }

    private void i() {
        boolean z10;
        this.f13238i.setChecked(this.f13247w);
        CheckedTextView checkedTextView = this.f13239o;
        if (!this.f13247w && this.f13242r.size() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        checkedTextView.setChecked(z10);
        for (int i10 = 0; i10 < this.f13246v.length; i10++) {
            je.o oVar = (je.o) this.f13242r.get(((Tracks.a) this.f13241q.get(i10)).b());
            int i11 = 0;
            while (true) {
                CheckedTextView[] checkedTextViewArr = this.f13246v[i10];
                if (i11 < checkedTextViewArr.length) {
                    if (oVar != null) {
                        this.f13246v[i10][i11].setChecked(oVar.f30889e.contains(Integer.valueOf(((c) ne.a.e(checkedTextViewArr[i11].getTag())).f13251b)));
                    } else {
                        checkedTextViewArr[i11].setChecked(false);
                    }
                    i11++;
                }
            }
        }
    }

    private void j() {
        int i10;
        for (int childCount = getChildCount() - 1; childCount >= 3; childCount--) {
            removeViewAt(childCount);
        }
        if (this.f13241q.isEmpty()) {
            this.f13238i.setEnabled(false);
            this.f13239o.setEnabled(false);
            return;
        }
        this.f13238i.setEnabled(true);
        this.f13239o.setEnabled(true);
        this.f13246v = new CheckedTextView[this.f13241q.size()];
        boolean h10 = h();
        for (int i11 = 0; i11 < this.f13241q.size(); i11++) {
            Tracks.a aVar = (Tracks.a) this.f13241q.get(i11);
            boolean g10 = g(aVar);
            CheckedTextView[][] checkedTextViewArr = this.f13246v;
            int i12 = aVar.f12011d;
            checkedTextViewArr[i11] = new CheckedTextView[i12];
            c[] cVarArr = new c[i12];
            for (int i13 = 0; i13 < aVar.f12011d; i13++) {
                cVarArr[i13] = new c(aVar, i13);
            }
            Comparator comparator = this.f13248x;
            if (comparator != null) {
                Arrays.sort(cVarArr, comparator);
            }
            for (int i14 = 0; i14 < i12; i14++) {
                if (i14 == 0) {
                    addView(this.f13237e.inflate(l.f31751a, (ViewGroup) this, false));
                }
                if (!g10 && !h10) {
                    i10 = 17367055;
                } else {
                    i10 = 17367056;
                }
                CheckedTextView checkedTextView = (CheckedTextView) this.f13237e.inflate(i10, (ViewGroup) this, false);
                checkedTextView.setBackgroundResource(this.f13236d);
                checkedTextView.setText(this.f13245u.a(cVarArr[i14].a()));
                checkedTextView.setTag(cVarArr[i14]);
                if (aVar.h(i14)) {
                    checkedTextView.setFocusable(true);
                    checkedTextView.setOnClickListener(this.f13240p);
                } else {
                    checkedTextView.setFocusable(false);
                    checkedTextView.setEnabled(false);
                }
                this.f13246v[i11][i14] = checkedTextView;
                addView(checkedTextView);
            }
        }
        i();
    }

    public boolean getIsDisabled() {
        return this.f13247w;
    }

    public Map<u0, je.o> getOverrides() {
        return this.f13242r;
    }

    public void setAllowAdaptiveSelections(boolean z10) {
        if (this.f13243s != z10) {
            this.f13243s = z10;
            j();
        }
    }

    public void setAllowMultipleOverrides(boolean z10) {
        if (this.f13244t != z10) {
            this.f13244t = z10;
            if (!z10 && this.f13242r.size() > 1) {
                Map b10 = b(this.f13242r, this.f13241q, false);
                this.f13242r.clear();
                this.f13242r.putAll(b10);
            }
            j();
        }
    }

    public void setShowDisableOption(boolean z10) {
        int i10;
        CheckedTextView checkedTextView = this.f13238i;
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        checkedTextView.setVisibility(i10);
    }

    public void setTrackNameProvider(o oVar) {
        this.f13245u = (o) ne.a.e(oVar);
        j();
    }

    public TrackSelectionView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        setOrientation(1);
        setSaveFromParentEnabled(false);
        TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(new int[]{16843534});
        int resourceId = obtainStyledAttributes.getResourceId(0, 0);
        this.f13236d = resourceId;
        obtainStyledAttributes.recycle();
        LayoutInflater from = LayoutInflater.from(context);
        this.f13237e = from;
        b bVar = new b();
        this.f13240p = bVar;
        this.f13245u = new ke.e(getResources());
        this.f13241q = new ArrayList();
        this.f13242r = new HashMap();
        CheckedTextView checkedTextView = (CheckedTextView) from.inflate(17367055, (ViewGroup) this, false);
        this.f13238i = checkedTextView;
        checkedTextView.setBackgroundResource(resourceId);
        checkedTextView.setText(m.f31770q);
        checkedTextView.setEnabled(false);
        checkedTextView.setFocusable(true);
        checkedTextView.setOnClickListener(bVar);
        checkedTextView.setVisibility(8);
        addView(checkedTextView);
        addView(from.inflate(l.f31751a, (ViewGroup) this, false));
        CheckedTextView checkedTextView2 = (CheckedTextView) from.inflate(17367055, (ViewGroup) this, false);
        this.f13239o = checkedTextView2;
        checkedTextView2.setBackgroundResource(resourceId);
        checkedTextView2.setText(m.f31769p);
        checkedTextView2.setEnabled(false);
        checkedTextView2.setFocusable(true);
        checkedTextView2.setOnClickListener(bVar);
        addView(checkedTextView2);
    }
}
