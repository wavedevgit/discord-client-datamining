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
import ji.s;
import ke.l;
import ke.m;
import ke.o;
import qd.u0;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class TrackSelectionView extends LinearLayout {

    /* renamed from: d  reason: collision with root package name */
    private final int f14254d;

    /* renamed from: e  reason: collision with root package name */
    private final LayoutInflater f14255e;

    /* renamed from: i  reason: collision with root package name */
    private final CheckedTextView f14256i;

    /* renamed from: o  reason: collision with root package name */
    private final CheckedTextView f14257o;

    /* renamed from: p  reason: collision with root package name */
    private final b f14258p;

    /* renamed from: q  reason: collision with root package name */
    private final List f14259q;

    /* renamed from: r  reason: collision with root package name */
    private final Map f14260r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f14261s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f14262t;

    /* renamed from: u  reason: collision with root package name */
    private o f14263u;

    /* renamed from: v  reason: collision with root package name */
    private CheckedTextView[][] f14264v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f14265w;

    /* renamed from: x  reason: collision with root package name */
    private Comparator f14266x;

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
        public final Tracks.a f14268a;

        /* renamed from: b  reason: collision with root package name */
        public final int f14269b;

        public c(Tracks.a aVar, int i10) {
            this.f14268a = aVar;
            this.f14269b = i10;
        }

        public Format a() {
            return this.f14268a.c(this.f14269b);
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
                hashMap.put(oVar.f31989d, oVar);
            }
        }
        return hashMap;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c(View view) {
        if (view == this.f14256i) {
            e();
        } else if (view == this.f14257o) {
            d();
        } else {
            f(view);
        }
        i();
    }

    private void d() {
        this.f14265w = false;
        this.f14260r.clear();
    }

    private void e() {
        this.f14265w = true;
        this.f14260r.clear();
    }

    private void f(View view) {
        boolean z10 = false;
        this.f14265w = false;
        c cVar = (c) ne.a.e(view.getTag());
        u0 b10 = cVar.f14268a.b();
        int i10 = cVar.f14269b;
        je.o oVar = (je.o) this.f14260r.get(b10);
        if (oVar == null) {
            if (!this.f14262t && this.f14260r.size() > 0) {
                this.f14260r.clear();
            }
            this.f14260r.put(b10, new je.o(b10, s.s(Integer.valueOf(i10))));
            return;
        }
        ArrayList arrayList = new ArrayList(oVar.f31990e);
        boolean isChecked = ((CheckedTextView) view).isChecked();
        boolean g10 = g(cVar.f14268a);
        z10 = (g10 || h()) ? true : true;
        if (isChecked && z10) {
            arrayList.remove(Integer.valueOf(i10));
            if (arrayList.isEmpty()) {
                this.f14260r.remove(b10);
            } else {
                this.f14260r.put(b10, new je.o(b10, arrayList));
            }
        } else if (!isChecked) {
            if (g10) {
                arrayList.add(Integer.valueOf(i10));
                this.f14260r.put(b10, new je.o(b10, arrayList));
                return;
            }
            this.f14260r.put(b10, new je.o(b10, s.s(Integer.valueOf(i10))));
        }
    }

    private boolean g(Tracks.a aVar) {
        if (this.f14261s && aVar.e()) {
            return true;
        }
        return false;
    }

    private boolean h() {
        if (this.f14262t && this.f14259q.size() > 1) {
            return true;
        }
        return false;
    }

    private void i() {
        boolean z10;
        this.f14256i.setChecked(this.f14265w);
        CheckedTextView checkedTextView = this.f14257o;
        if (!this.f14265w && this.f14260r.size() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        checkedTextView.setChecked(z10);
        for (int i10 = 0; i10 < this.f14264v.length; i10++) {
            je.o oVar = (je.o) this.f14260r.get(((Tracks.a) this.f14259q.get(i10)).b());
            int i11 = 0;
            while (true) {
                CheckedTextView[] checkedTextViewArr = this.f14264v[i10];
                if (i11 < checkedTextViewArr.length) {
                    if (oVar != null) {
                        this.f14264v[i10][i11].setChecked(oVar.f31990e.contains(Integer.valueOf(((c) ne.a.e(checkedTextViewArr[i11].getTag())).f14269b)));
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
        if (this.f14259q.isEmpty()) {
            this.f14256i.setEnabled(false);
            this.f14257o.setEnabled(false);
            return;
        }
        this.f14256i.setEnabled(true);
        this.f14257o.setEnabled(true);
        this.f14264v = new CheckedTextView[this.f14259q.size()];
        boolean h10 = h();
        for (int i11 = 0; i11 < this.f14259q.size(); i11++) {
            Tracks.a aVar = (Tracks.a) this.f14259q.get(i11);
            boolean g10 = g(aVar);
            CheckedTextView[][] checkedTextViewArr = this.f14264v;
            int i12 = aVar.f13029d;
            checkedTextViewArr[i11] = new CheckedTextView[i12];
            c[] cVarArr = new c[i12];
            for (int i13 = 0; i13 < aVar.f13029d; i13++) {
                cVarArr[i13] = new c(aVar, i13);
            }
            Comparator comparator = this.f14266x;
            if (comparator != null) {
                Arrays.sort(cVarArr, comparator);
            }
            for (int i14 = 0; i14 < i12; i14++) {
                if (i14 == 0) {
                    addView(this.f14255e.inflate(l.f33128a, (ViewGroup) this, false));
                }
                if (!g10 && !h10) {
                    i10 = 17367055;
                } else {
                    i10 = 17367056;
                }
                CheckedTextView checkedTextView = (CheckedTextView) this.f14255e.inflate(i10, (ViewGroup) this, false);
                checkedTextView.setBackgroundResource(this.f14254d);
                checkedTextView.setText(this.f14263u.a(cVarArr[i14].a()));
                checkedTextView.setTag(cVarArr[i14]);
                if (aVar.h(i14)) {
                    checkedTextView.setFocusable(true);
                    checkedTextView.setOnClickListener(this.f14258p);
                } else {
                    checkedTextView.setFocusable(false);
                    checkedTextView.setEnabled(false);
                }
                this.f14264v[i11][i14] = checkedTextView;
                addView(checkedTextView);
            }
        }
        i();
    }

    public boolean getIsDisabled() {
        return this.f14265w;
    }

    public Map<u0, je.o> getOverrides() {
        return this.f14260r;
    }

    public void setAllowAdaptiveSelections(boolean z10) {
        if (this.f14261s != z10) {
            this.f14261s = z10;
            j();
        }
    }

    public void setAllowMultipleOverrides(boolean z10) {
        if (this.f14262t != z10) {
            this.f14262t = z10;
            if (!z10 && this.f14260r.size() > 1) {
                Map b10 = b(this.f14260r, this.f14259q, false);
                this.f14260r.clear();
                this.f14260r.putAll(b10);
            }
            j();
        }
    }

    public void setShowDisableOption(boolean z10) {
        int i10;
        CheckedTextView checkedTextView = this.f14256i;
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        checkedTextView.setVisibility(i10);
    }

    public void setTrackNameProvider(o oVar) {
        this.f14263u = (o) ne.a.e(oVar);
        j();
    }

    public TrackSelectionView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        setOrientation(1);
        setSaveFromParentEnabled(false);
        TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(new int[]{16843534});
        int resourceId = obtainStyledAttributes.getResourceId(0, 0);
        this.f14254d = resourceId;
        obtainStyledAttributes.recycle();
        LayoutInflater from = LayoutInflater.from(context);
        this.f14255e = from;
        b bVar = new b();
        this.f14258p = bVar;
        this.f14263u = new ke.e(getResources());
        this.f14259q = new ArrayList();
        this.f14260r = new HashMap();
        CheckedTextView checkedTextView = (CheckedTextView) from.inflate(17367055, (ViewGroup) this, false);
        this.f14256i = checkedTextView;
        checkedTextView.setBackgroundResource(resourceId);
        checkedTextView.setText(m.f33147q);
        checkedTextView.setEnabled(false);
        checkedTextView.setFocusable(true);
        checkedTextView.setOnClickListener(bVar);
        checkedTextView.setVisibility(8);
        addView(checkedTextView);
        addView(from.inflate(l.f33128a, (ViewGroup) this, false));
        CheckedTextView checkedTextView2 = (CheckedTextView) from.inflate(17367055, (ViewGroup) this, false);
        this.f14257o = checkedTextView2;
        checkedTextView2.setBackgroundResource(resourceId);
        checkedTextView2.setText(m.f33146p);
        checkedTextView2.setEnabled(false);
        checkedTextView2.setFocusable(true);
        checkedTextView2.setOnClickListener(bVar);
        addView(checkedTextView2);
    }
}
